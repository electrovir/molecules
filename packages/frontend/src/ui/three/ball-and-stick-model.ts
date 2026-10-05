import {assertWrap} from '@augment-vir/assert';
import {type PartialWithUndefined} from '@augment-vir/common';
import {Box3, Color, Group, Vector3} from 'three';
import {type Capsule, createCapsuleRows} from './capsule-rows.js';
import {contactReach, maxContactOccluders} from './contact-shading.js';
import {createGroundShadow} from './ground-shadow.js';
import {
    createAtomImpostors,
    createStickImpostors,
    type ImpostorSceneUniforms,
} from './impostors.js';
import {createSelfReflections} from './marble.js';
import {RenderEffect} from './render-quality.js';
import {createShadowCasters} from './shadow-casters.js';

/**
 * How much of a ball's radius is its colored core. The rest is a see-through glass shell, so sticks
 * show where they pass into the ball.
 */
const ballCoreFraction = 0.95;
/**
 * Nearly overhead so the ground shadow lands under the model rather than behind it, but tipped
 * toward the camera enough to still light the balls' fronts.
 */
export const towardLight = new Vector3(1, 10, 2.5).normalize();
/** How far the shadow-catching ground sits below the lowest point any ball can be turned to. */
export const groundGap = 0.5;
const groundShadowOpacity = 0.35;
const highlightColor = 0xff_d5_4f;
/**
 * The glow's intensity is divided by the color's brightness, relative to this, so white balls don't
 * wash out while dark ones barely glow. Carbon's grey is about this bright, so it keeps the raw
 * intensities.
 */
const highlightGlowReferenceLuminance = 0.28;
/** Keeps very dark colors from getting an extreme boost. */
const highlightGlowMaxBoost = 3;

export type Ball = {
    position: Readonly<Vector3>;
    radius: number;
    color: Readonly<Color>;
};

/** A stick between two balls, which can sit off their center line. */
export type StickEnds = {
    start: Vector3;
    end: Vector3;
    /** The stick's sideways direction, which its shading lines up with. */
    side: Vector3;
};

export type BallStick = {
    /** The balls it touches, for contact shading. Its ends come from `stickEnds`. */
    ballIndexes: ReadonlyArray<number>;
    radius: number;
};

export enum BallAndStickPartType {
    Ball = 'ball',
    Stick = 'stick',
}

function getGlowBoost(color: Readonly<Color>) {
    const luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
    return Math.min(highlightGlowMaxBoost, highlightGlowReferenceLuminance / (luminance || 1));
}

/** Distance along the ray to where it enters the sphere, if it does. */
function intersectSphere({
    origin,
    direction,
    center,
    radius,
}: Readonly<{
    origin: Readonly<Vector3>;
    direction: Readonly<Vector3>;
    center: Readonly<Vector3>;
    radius: number;
}>) {
    const offset = origin.clone().sub(center);
    const along = offset.dot(direction);
    const discriminant = along * along - (offset.lengthSq() - radius * radius);
    const distance = -along - Math.sqrt(discriminant);
    return discriminant > 0 && distance > 0 ? distance : undefined;
}

/** Distance along the ray to where it enters the open-ended cylinder, if it does. */
function intersectCylinder({
    origin,
    direction,
    start,
    end,
    radius,
}: Readonly<{
    origin: Readonly<Vector3>;
    direction: Readonly<Vector3>;
    start: Readonly<Vector3>;
    end: Readonly<Vector3>;
    radius: number;
}>) {
    const axis = end.clone().sub(start);
    const offset = origin.clone().sub(start);
    const axisLengthSquared = axis.lengthSq();
    const axisAlongRay = axis.dot(direction);
    const axisAlongOffset = axis.dot(offset);
    const quadraticA = axisLengthSquared - axisAlongRay * axisAlongRay;
    const quadraticB = axisLengthSquared * direction.dot(offset) - axisAlongOffset * axisAlongRay;
    const quadraticC =
        axisLengthSquared * offset.lengthSq() -
        axisAlongOffset * axisAlongOffset -
        radius * radius * axisLengthSquared;
    const discriminant = quadraticB * quadraticB - quadraticA * quadraticC;
    if (discriminant <= 0 || quadraticA < 1e-9) {
        return undefined;
    }
    const distance = (-quadraticB - Math.sqrt(discriminant)) / quadraticA;
    const hitAlongAxis = axisAlongOffset + distance * axisAlongRay;
    return distance > 0 && hitAlongAxis > 0 && hitAlongAxis < axisLengthSquared
        ? distance
        : undefined;
}

/**
 * Glass balls joined by sticks, drawn as impostors with contact shading, shadows, self-reflections
 * and a ground shadow. Everything is in the model's own space, and `group` is offset so `center`
 * lands on the parent's origin.
 */
export function createBallAndStickModel({
    balls,
    sticks,
    stickEnds,
    stickColor,
    sceneUniforms,
    bounds,
}: Readonly<
    {
        balls: ReadonlyArray<Readonly<Ball>>;
        sticks: ReadonlyArray<Readonly<BallStick>>;
        /** Where each stick starts, in the order of `sticks`. */
        stickEnds: ReadonlyArray<Readonly<StickEnds>>;
        stickColor: Readonly<Color>;
        sceneUniforms: Readonly<ImpostorSceneUniforms>;
    } & PartialWithUndefined<{
        /**
         * The model's middle and how far it reaches from there, for when more than the balls is
         * drawn. Fit tightly around the balls when omitted.
         */
        bounds: Readonly<{center: Readonly<Vector3>; radius: number}>;
    }>
>) {
    const group = new Group();
    const ballCount = balls.length;
    const partCount = ballCount + sticks.length;
    const positions = balls.map((ball) => ball.position.clone());
    const colors = balls.map((ball) => ball.color.clone());
    const radii = balls.map((ball) => ball.radius);

    const center =
        bounds?.center.clone() ??
        new Box3()
            .setFromPoints(
                positions.flatMap((position, ballIndex) => {
                    const radius = assertWrap.isDefined(radii[ballIndex]);
                    return [
                        position.clone().subScalar(radius),
                        position.clone().addScalar(radius),
                    ];
                }),
            )
            .getCenter(new Vector3());
    /** Center the model so turning rotates around its middle rather than its first ball. */
    group.position.copy(center).negate();
    /** Tighter than the box's bounding sphere, which pads flat molecules like benzene. */
    const radius =
        bounds?.radius ??
        Math.max(
            ...positions.map((position, ballIndex) => {
                return position.distanceTo(center) + assertWrap.isDefined(radii[ballIndex]);
            }),
        );

    const contactOccluders = createCapsuleRows({
        rowCount: partCount,
        maxCapsulesPerRow: maxContactOccluders,
    });
    const shadowCasters = createShadowCasters({
        partCount,
    });
    const selfReflections = createSelfReflections({
        spheres: balls.map((ball) => {
            return {
                color: ball.color,
                radius: ball.radius * ballCoreFraction,
            };
        }),
        cylinders: sticks.map((stick) => {
            return {
                color: stickColor,
                radius: stick.radius,
            };
        }),
    });
    const highlight = new Color(highlightColor);
    const ballImpostors = createAtomImpostors({
        atomCount: ballCount,
        sceneUniforms,
        contactOccluders: contactOccluders.texture,
        shadowCasters: shadowCasters.rowsTexture,
        selfReflections,
        highlightColor: highlight,
        coreFraction: ballCoreFraction,
    });
    const stickImpostors = createStickImpostors({
        stickCount: sticks.length,
        atomCount: ballCount,
        sceneUniforms,
        contactOccluders: contactOccluders.texture,
        shadowCasters: shadowCasters.rowsTexture,
        highlightColor: highlight,
        stickColor,
    });
    /** Sticks draw after balls, so what shows through them is already drawn. */
    group.add(
        ballImpostors.depthMesh,
        ballImpostors.mesh,
        ballImpostors.outlineMesh,
        stickImpostors.mesh,
        stickImpostors.outlineMesh,
    );
    stickImpostors.mesh.visible = sticks.length > 0;
    sticks.forEach((stick, stickIndex) => {
        stickImpostors.attributes.radius.setX(stickIndex, stick.radius);
    });

    /** Contact shading only checks the parts that can touch, found once from the starting shape. */
    const touchingBallIndexes = positions.map((position, ballIndex) => {
        return positions
            .map((otherPosition, otherIndex) => otherIndex)
            .filter((otherIndex) => {
                return (
                    otherIndex !== ballIndex &&
                    position.distanceTo(assertWrap.isDefined(positions[otherIndex])) <
                        assertWrap.isDefined(radii[ballIndex]) +
                            assertWrap.isDefined(radii[otherIndex]) +
                            contactReach
                );
            });
    });
    const touchingStickIndexes = positions.map((position, ballIndex) => {
        return sticks.flatMap((stick, stickIndex) => {
            return stick.ballIndexes.includes(ballIndex) ? [stickIndex] : [];
        });
    });

    /** Each part's start then end, with a ball's start and end both at its center. */
    const partEnds = new Float32Array(partCount * 6);
    /** A ball's whole glass shell catches shadows, but only its colored core blocks light. */
    const receiverRadii = Float32Array.from([
        ...radii,
        ...sticks.map((stick) => stick.radius),
    ]);
    const casterRadii = Float32Array.from([
        ...radii.map((ballRadius) => ballRadius * ballCoreFraction),
        ...sticks.map((stick) => stick.radius),
    ]);

    const groundShadow = createGroundShadow({
        casters: shadowCasters.allCastersTexture,
        ends: partEnds,
        casterRadii,
        towardLight,
        opacity: groundShadowOpacity,
    });
    groundShadow.setFootprint({
        groundHeight: -radius - groundGap,
        moleculeRadius: radius,
    });

    const state = {
        stickEnds: stickEnds.map((ends) => {
            return {
                start: ends.start.clone(),
                end: ends.end.clone(),
                side: ends.side.clone(),
            };
        }),
        isShadowsEnabled: true,
        hasGlow: false,
    };

    function getBallCapsule(ballIndex: number): Capsule {
        const position = assertWrap.isDefined(positions[ballIndex]);
        return {
            start: position,
            end: position,
            radius: assertWrap.isDefined(radii[ballIndex]),
            isAtom: true,
        };
    }

    function getStickCapsule(stickIndex: number): Capsule {
        const ends = assertWrap.isDefined(state.stickEnds[stickIndex]);
        return {
            start: ends.start,
            end: ends.end,
            radius: assertWrap.isDefined(sticks[stickIndex]).radius,
            isAtom: false,
        };
    }

    function writeBallContactRow(ballIndex: number) {
        contactOccluders.setRow({
            row: ballIndex,
            capsules: [
                ...assertWrap
                    .isDefined(touchingBallIndexes[ballIndex])
                    .map((otherIndex) => getBallCapsule(otherIndex)),
                ...assertWrap
                    .isDefined(touchingStickIndexes[ballIndex])
                    .map((stickIndex) => getStickCapsule(stickIndex)),
            ],
        });
    }

    function writeStickContactRow(stickIndex: number) {
        contactOccluders.setRow({
            row: ballCount + stickIndex,
            capsules: assertWrap
                .isDefined(sticks[stickIndex])
                .ballIndexes.map((ballIndex) => getBallCapsule(ballIndex)),
        });
    }

    function writeBall(ballIndex: number) {
        const position = assertWrap.isDefined(positions[ballIndex]);
        ballImpostors.attributes.center.setXYZ(ballIndex, position.x, position.y, position.z);
        partEnds.set(
            [
                ...position.toArray(),
                ...position.toArray(),
            ],
            ballIndex * 6,
        );
    }

    function writeBallStyle(ballIndex: number) {
        const color = assertWrap.isDefined(colors[ballIndex]);
        const ballRadius = assertWrap.isDefined(radii[ballIndex]);
        ballImpostors.attributes.radius.setX(ballIndex, ballRadius);
        ballImpostors.attributes.color.setXYZ(ballIndex, color.r, color.g, color.b);
        receiverRadii[ballIndex] = ballRadius;
        casterRadii[ballIndex] = ballRadius * ballCoreFraction;
    }

    function writeStick(stickIndex: number) {
        const {start, end, side} = assertWrap.isDefined(state.stickEnds[stickIndex]);
        stickImpostors.attributes.start.setXYZ(stickIndex, start.x, start.y, start.z);
        stickImpostors.attributes.end.setXYZ(stickIndex, end.x, end.y, end.z);
        stickImpostors.attributes.side.setXYZ(stickIndex, side.x, side.y, side.z);
        partEnds.set(
            [
                ...start.toArray(),
                ...end.toArray(),
            ],
            (ballCount + stickIndex) * 6,
        );
    }

    positions.forEach((position, ballIndex) => {
        writeBall(ballIndex);
        writeBallStyle(ballIndex);
        writeBallContactRow(ballIndex);
    });
    sticks.forEach((stick, stickIndex) => {
        writeStick(stickIndex);
        writeStickContactRow(stickIndex);
    });
    contactOccluders.upload();
    selfReflections.update({
        sphereCenters: positions,
        cylinderEnds: state.stickEnds,
    });

    return {
        group,
        center,
        radius,
        groundShadow,
        /** Ball positions relative to the model's center. */
        getCenteredBalls() {
            return positions.map((position, ballIndex) => {
                return {
                    position: position.clone().sub(center),
                    radius: assertWrap.isDefined(radii[ballIndex]),
                };
            });
        },
        /**
         * Moves some balls. Contact shading keeps the touching pairs found at the start, so moving
         * balls must not come to touch new ones. Finding each ball's nearest balls to reflect is
         * slow for big models, so `keepReflectedNeighbors` skips it for small moves.
         */
        setBallPositions({
            ballPositions,
            keepReflectedNeighbors,
        }: Readonly<{
            ballPositions: ReadonlyArray<
                Readonly<{ballIndex: number; position: Readonly<Vector3>}>
            >;
            keepReflectedNeighbors?: boolean | undefined;
        }>) {
            ballPositions.forEach(({ballIndex, position}) => {
                assertWrap.isDefined(positions[ballIndex]).copy(position);
                writeBall(ballIndex);
            });
            ballImpostors.attributes.center.needsUpdate = true;
            const movedIndexes = ballPositions.map(({ballIndex}) => ballIndex);
            touchingBallIndexes.forEach((touchingIndexes, ballIndex) => {
                if (
                    movedIndexes.includes(ballIndex) ||
                    touchingIndexes.some((otherIndex) => movedIndexes.includes(otherIndex))
                ) {
                    writeBallContactRow(ballIndex);
                }
            });
            sticks.forEach((stick, stickIndex) => {
                if (stick.ballIndexes.some((ballIndex) => movedIndexes.includes(ballIndex))) {
                    writeStickContactRow(stickIndex);
                }
            });
            contactOccluders.upload();
            if (selfReflections.isEnabled()) {
                selfReflections.update({
                    sphereCenters: positions,
                    cylinderEnds: state.stickEnds,
                    keepNeighbors: keepReflectedNeighbors,
                });
            }
        },
        setStickEnds(
            newStickEnds: ReadonlyArray<Readonly<{stickIndex: number; ends: Readonly<StickEnds>}>>,
        ) {
            if (!newStickEnds.length) {
                return;
            }
            const movedIndexes = newStickEnds.map(({stickIndex}) => stickIndex);
            newStickEnds.forEach(({stickIndex, ends}) => {
                state.stickEnds[stickIndex] = {
                    start: ends.start.clone(),
                    end: ends.end.clone(),
                    side: ends.side.clone(),
                };
                writeStick(stickIndex);
            });
            stickImpostors.attributes.start.needsUpdate = true;
            stickImpostors.attributes.end.needsUpdate = true;
            stickImpostors.attributes.side.needsUpdate = true;
            touchingStickIndexes.forEach((stickIndexes, ballIndex) => {
                if (stickIndexes.some((stickIndex) => movedIndexes.includes(stickIndex))) {
                    writeBallContactRow(ballIndex);
                }
            });
            contactOccluders.upload();
            if (selfReflections.isEnabled()) {
                selfReflections.update({
                    sphereCenters: positions,
                    cylinderEnds: state.stickEnds,
                    keepNeighbors: true,
                });
            }
        },
        /** Changes how some balls look, everywhere they show: shading, shadows and reflections. */
        setBallStyles(
            ballStyles: ReadonlyArray<
                Readonly<{ballIndex: number; color: Readonly<Color>; radius: number}>
            >,
        ) {
            ballStyles.forEach(({ballIndex, color, radius: ballRadius}) => {
                assertWrap.isDefined(colors[ballIndex]).copy(color);
                radii[ballIndex] = ballRadius;
                writeBallStyle(ballIndex);
                selfReflections.setSphereStyle({
                    sphereIndex: ballIndex,
                    color,
                    radius: ballRadius * ballCoreFraction,
                });
            });
            ballImpostors.attributes.radius.needsUpdate = true;
            ballImpostors.attributes.color.needsUpdate = true;
        },
        /** Must run after the camera moves and before rendering. */
        update({localTowardLight}: Readonly<{localTowardLight: Readonly<Vector3>}>) {
            if (state.isShadowsEnabled) {
                shadowCasters.update({
                    ends: partEnds,
                    receiverRadii,
                    casterRadii,
                    isAtom(part) {
                        return part < ballCount;
                    },
                    towardLight: localTowardLight,
                });
            }
        },
        /** Lights up the given parts, and turns off every other part's glow. */
        setGlow({
            ballIndexes,
            stickIndexes,
            glow,
        }: Readonly<{
            ballIndexes: ReadonlyArray<number>;
            stickIndexes: ReadonlyArray<number>;
            glow: number;
        }>) {
            const hasGlow = ballIndexes.length > 0 || stickIndexes.length > 0;
            if (!hasGlow && !state.hasGlow) {
                return;
            }
            ballImpostors.attributes.glow.array.fill(0);
            stickImpostors.attributes.glow.array.fill(0);
            ballIndexes.forEach((ballIndex) => {
                ballImpostors.attributes.glow.setX(
                    ballIndex,
                    glow * getGlowBoost(assertWrap.isDefined(colors[ballIndex])),
                );
            });
            stickIndexes.forEach((stickIndex) => {
                stickImpostors.attributes.glow.setX(stickIndex, glow * getGlowBoost(stickColor));
            });
            ballImpostors.attributes.glow.needsUpdate = true;
            stickImpostors.attributes.glow.needsUpdate = true;
            ballImpostors.outlineMesh.visible = ballIndexes.length > 0;
            stickImpostors.outlineMesh.visible = stickIndexes.length > 0;
            state.hasGlow = hasGlow;
        },
        /** Finds the nearest ball or stick along a ray in the model's own space. */
        pick({
            origin,
            direction,
        }: Readonly<{
            origin: Readonly<Vector3>;
            direction: Readonly<Vector3>;
        }>) {
            const hits = [
                ...positions.map((position, ballIndex) => {
                    return {
                        distance: intersectSphere({
                            origin,
                            direction,
                            center: position,
                            radius: assertWrap.isDefined(radii[ballIndex]),
                        }),
                        part: {
                            type: BallAndStickPartType.Ball,
                            index: ballIndex,
                        },
                    };
                }),
                ...state.stickEnds.map(({start, end}, stickIndex) => {
                    return {
                        distance: intersectCylinder({
                            origin,
                            direction,
                            start,
                            end,
                            radius: assertWrap.isDefined(sticks[stickIndex]).radius,
                        }),
                        part: {
                            type: BallAndStickPartType.Stick,
                            index: stickIndex,
                        },
                    };
                }),
            ];
            return hits
                .filter((hit) => hit.distance != undefined)
                .toSorted(
                    (first, second) => (first.distance ?? Infinity) - (second.distance ?? Infinity),
                )[0]?.part;
        },
        setDisabledEffects(disabledEffects: ReadonlyArray<RenderEffect>) {
            const isSelfReflectionsEnabled = !disabledEffects.includes(
                RenderEffect.SelfReflections,
            );
            if (isSelfReflectionsEnabled && !selfReflections.isEnabled()) {
                /** Positions stop being written while reflections are off. */
                selfReflections.update({
                    sphereCenters: positions,
                    cylinderEnds: state.stickEnds,
                });
            }
            selfReflections.setEnabled(isSelfReflectionsEnabled);
            ballImpostors.setSelfReflectionsEnabled(isSelfReflectionsEnabled);
            const isTransmissionEnabled = !disabledEffects.includes(RenderEffect.Transmission);
            ballImpostors.setTransmissionEnabled(isTransmissionEnabled);
            stickImpostors.setTransmissionEnabled(isTransmissionEnabled);
            state.isShadowsEnabled = !disabledEffects.includes(RenderEffect.Shadows);
            groundShadow.mesh.visible = state.isShadowsEnabled;
            if (!state.isShadowsEnabled) {
                shadowCasters.clear();
            }
        },
        isShadowsEnabled() {
            return state.isShadowsEnabled;
        },
        dispose() {
            ballImpostors.dispose();
            stickImpostors.dispose();
            contactOccluders.dispose();
            shadowCasters.dispose();
            selfReflections.dispose();
            groundShadow.dispose();
        },
    };
}

export type BallAndStickModel = ReturnType<typeof createBallAndStickModel>;
