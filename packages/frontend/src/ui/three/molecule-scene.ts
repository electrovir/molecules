import {assertWrap, check} from '@augment-vir/assert';
import {createArray, type PartialWithUndefined} from '@augment-vir/common';
import {
    Box3,
    Color,
    Euler,
    Group,
    Matrix4,
    MOUSE,
    PerspectiveCamera,
    Quaternion,
    Raycaster,
    Scene,
    TOUCH,
    Vector2,
    Vector3,
    WebGLRenderer,
} from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {type ChemicalElement, chemicalElements} from '../../data/chemical-element.js';
import {BondOrder, type Coordinates, type Molecule} from '../../data/molecule.js';
import {type Capsule, createCapsuleRows} from './capsule-rows.js';
import {findClearestYaw} from './clearest-yaw.js';
import {contactReach, maxContactOccluders} from './contact-shading.js';
import {createGroundShadow} from './ground-shadow.js';
import {
    createAtomImpostors,
    createStickImpostors,
    type ImpostorSceneUniforms,
} from './impostors.js';
import {createSelfReflections} from './marble.js';
import {type MoleculeSelection, MoleculeSelectionType} from './molecule-selection.js';
import {createRenderQualityScaler, RenderEffect, type RenderQuality} from './render-quality.js';
import {createShadowCasters} from './shadow-casters.js';

/** Ball-and-stick atoms are drawn much smaller than their van der Waals radius so bonds show. */
const atomRadiusScale = 0.3;
/**
 * How much of an atom's radius is its colored core. The rest is a see-through glass shell, so bonds
 * show where they pass into the atom.
 */
const atomCoreFraction = 0.95;
const bondRadius = 0.1;
const multipleBondRadius = 0.06;
const multipleBondSpacing = 0.2;
const bondColor = 0xb3_b3_b3;
/** PubChem has no color or van der Waals radius for the superheavy elements (Fm and beyond). */
const fallbackAtomColor = 0xff_14_93;
const fallbackVanDerWaalsRadius = 2;
/** Extra room around the molecule when zooming the camera to fit it. */
const fitDistanceMargin = 1.2;
/**
 * The camera fits molecules smaller than this radius, in ångströms, as if they were this big, so
 * small molecules show small instead of being zoomed in to fill the view.
 */
const minimumFitRadius = 3;
/** When the viewer's shorter side is below this many CSS pixels, the camera starts farther out. */
const smallScreenPixels = 600;
const smallScreenFitDistanceMargin = 1.3;
/** How far the camera looks down at the molecule, so the ground and its shadow aren't seen edge-on. */
const cameraElevationRadians = (25 * Math.PI) / 180;
/**
 * The first molecule's starting turn, before its clearest yaw is added, kept across molecule
 * changes: its +X end raised a little and swung toward the camera, then its top tipped away from
 * the camera, so a molecule laid out flat is seen at an angle instead of side-on.
 */
const startingOrientation = new Quaternion().setFromEuler(
    new Euler((-15 * Math.PI) / 180, (-20 * Math.PI) / 180, (10 * Math.PI) / 180),
);
/**
 * Nearly overhead so the ground shadow lands under the molecule rather than behind it, but tipped
 * toward the camera enough to still light the atoms' fronts.
 */
const towardLight = new Vector3(1, 10, 2.5).normalize();
/**
 * How far the shadow-catching ground sits below the lowest point any atom can be turned to, in
 * ångströms.
 */
const groundGap = 0.5;
const groundShadowOpacity = 0.35;
const highlightColor = 0xff_d5_4f;
/** Selected atoms and bonds glow in their own color, pulsing between these intensities. */
const highlightGlow = {
    min: 0.15,
    max: 0.5,
    pulsesPerSecond: 0.8,
};
/**
 * The glow's intensity is divided by the color's brightness, relative to this, so white atoms don't
 * wash out while dark ones barely glow. Carbon's grey is about this bright, so it keeps the raw
 * intensities.
 */
const highlightGlowReferenceLuminance = 0.28;
/** Keeps very dark colors from getting an extreme boost. */
const highlightGlowMaxBoost = 3;
/** Pointer travel, in pixels, beyond which a press counts as an orbit drag instead of a click. */
const clickMoveTolerance = 12;
/** The idle turntable spin around the vertical axis. */
const autoSpinRadiansPerSecond = 0.3;
/** Releasing a drag while moving at least this fast flings the molecule back into spinning. */
const flingPixelsPerSecond = 300;
/** A release this long after the last pointer move is a stop, not a fling. */
const flingMaxPauseMilliseconds = 80;
/**
 * How quickly a fling's speed eases down to the idle spin: the fraction of the extra speed lost per
 * second, scaled by the square root of the current spin in radians per second. Fast spins brake
 * harder and slow ones coast, without the gap between them being extreme.
 */
const flingSlowdown = 1.35;
/** After this long without touching the molecule, it starts spinning again. */
const idleSpinResumeMilliseconds = 5000;

function toVector3({x, y, z}: Readonly<Coordinates>) {
    return new Vector3(x, y, z);
}

/** One of a bond's sticks. A double bond has two, side by side. */
type Stick = {
    bondIndex: number;
    /** How far the stick sits to the side of the bond's axis. */
    offset: number;
    radius: number;
};

/**
 * Stretches bonds to follow their atoms, and turns each multi-stick bond around its own axis so its
 * sticks spread across the screen and never hide behind each other.
 */
function getPartPositions({
    molecule,
    sticks,
    atomPositions,
    cameraPosition,
}: Readonly<{
    molecule: Readonly<Molecule>;
    sticks: ReadonlyArray<Readonly<Stick>>;
    atomPositions: Vector3[];
    /** In the molecule's own space, which turns with the molecule. */
    cameraPosition: Readonly<Vector3>;
}>) {
    const bondFrames = molecule.bonds.map((bond) => {
        const [
            start,
            end,
        ] = bond.atomIndexes.map((atomIndex) => {
            return assertWrap.isDefined(
                atomPositions[atomIndex],
                `Bond in '${molecule.name}' references missing atom ${atomIndex}.`,
            );
        }) satisfies Vector3[] as [
            Vector3,
            Vector3,
        ];
        const bondDirection = end.clone().sub(start).normalize();
        const spreadDirection = new Vector3().crossVectors(
            bondDirection,
            cameraPosition.clone().sub(start.clone().add(end).multiplyScalar(0.5)),
        );
        /**
         * Single bonds have nothing to spread, and a bond pointing straight at the camera looks the
         * same at any spread.
         */
        const side =
            bond.order === BondOrder.Single || spreadDirection.lengthSq() < 1e-9
                ? new Vector3(1, 0, 0).applyQuaternion(
                      new Quaternion().setFromUnitVectors(new Vector3(0, 1, 0), bondDirection),
                  )
                : spreadDirection.normalize();
        return {
            start,
            end,
            side,
        };
    });

    return {
        atomCenters: atomPositions,
        stickEnds: sticks.map(({bondIndex, offset}) => {
            const frame = assertWrap.isDefined(bondFrames[bondIndex]);
            return {
                start: frame.start.clone().addScaledVector(frame.side, offset),
                end: frame.end.clone().addScaledVector(frame.side, offset),
                side: frame.side,
            };
        }),
    };
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

function createMoleculeModel({
    molecule,
    sceneUniforms,
}: Readonly<{
    molecule: Readonly<Molecule>;
    sceneUniforms: Readonly<ImpostorSceneUniforms>;
}>) {
    const group = new Group();
    const atomCount = molecule.atoms.length;
    const atomRadii = molecule.atoms.map((atom) => {
        const info: Readonly<ChemicalElement> = chemicalElements[atom.element];
        return (info.vanDerWaalsRadius ?? fallbackVanDerWaalsRadius) * atomRadiusScale;
    });
    const atomColors = molecule.atoms.map((atom) => {
        const info: Readonly<ChemicalElement> = chemicalElements[atom.element];
        return new Color(info.color ?? fallbackAtomColor);
    });
    const stickColor = new Color(bondColor);
    const sticks: Stick[] = molecule.bonds.flatMap((bond, bondIndex) => {
        return createArray(bond.order, (stickIndex) => {
            return {
                bondIndex,
                offset: (stickIndex - (bond.order - 1) / 2) * multipleBondSpacing,
                radius: bond.order === BondOrder.Single ? bondRadius : multipleBondRadius,
            };
        });
    });
    const bondStickIndexes = molecule.bonds.map((bond, bondIndex) => {
        return sticks.flatMap((stick, stickIndex) => {
            return stick.bondIndex === bondIndex ? [stickIndex] : [];
        });
    });
    const partCount = atomCount + sticks.length;

    const restingPositions = molecule.atoms.map((atom) => toVector3(atom.position));
    const center = new Box3()
        .setFromPoints(
            restingPositions.flatMap((position, atomIndex) => {
                const radius = assertWrap.isDefined(atomRadii[atomIndex]);
                return [
                    position.clone().subScalar(radius),
                    position.clone().addScalar(radius),
                ];
            }),
        )
        .getCenter(new Vector3());
    /** Center the molecule so turning rotates around its middle rather than its first atom. */
    group.position.copy(center).negate();
    /** Tighter than the box's bounding sphere, which pads flat molecules like benzene. */
    const radius = Math.max(
        ...restingPositions.map((position, atomIndex) => {
            return position.distanceTo(center) + assertWrap.isDefined(atomRadii[atomIndex]);
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
        spheres: atomColors.map((color, atomIndex) => {
            return {
                color,
                radius: assertWrap.isDefined(atomRadii[atomIndex]) * atomCoreFraction,
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
    const atoms = createAtomImpostors({
        atomCount,
        sceneUniforms,
        contactOccluders: contactOccluders.texture,
        shadowCasters: shadowCasters.rowsTexture,
        selfReflections,
        highlightColor: highlight,
        coreFraction: atomCoreFraction,
    });
    const stickImpostors = createStickImpostors({
        stickCount: sticks.length,
        atomCount,
        sceneUniforms,
        contactOccluders: contactOccluders.texture,
        shadowCasters: shadowCasters.rowsTexture,
        highlightColor: highlight,
        stickColor,
    });
    /** Sticks draw after atoms, so what shows through them is already drawn. */
    group.add(...atoms.meshes, ...stickImpostors.meshes);
    stickImpostors.meshes.forEach((mesh) => {
        mesh.visible = sticks.length > 0;
    });
    atomRadii.forEach((atomRadius, atomIndex) => {
        atoms.attributes.radius.setX(atomIndex, atomRadius);
        const color = assertWrap.isDefined(atomColors[atomIndex]);
        atoms.attributes.color.setXYZ(atomIndex, color.r, color.g, color.b);
    });
    sticks.forEach((stick, stickIndex) => {
        stickImpostors.attributes.radius.setX(stickIndex, stick.radius);
    });

    const groundShadow = createGroundShadow({
        casters: shadowCasters.allCastersTexture,
        towardLight,
        opacity: groundShadowOpacity,
    });
    groundShadow.setFootprint({
        groundHeight: -radius - groundGap,
        moleculeRadius: radius,
    });

    /** Contact shading only checks the parts that can touch, found once from the resting shape. */
    const touchingAtomIndexes = restingPositions.map((position, atomIndex) => {
        return restingPositions
            .map((otherPosition, otherIndex) => otherIndex)
            .filter((otherIndex) => {
                return (
                    otherIndex !== atomIndex &&
                    position.distanceTo(assertWrap.isDefined(restingPositions[otherIndex])) <
                        assertWrap.isDefined(atomRadii[atomIndex]) +
                            assertWrap.isDefined(atomRadii[otherIndex]) +
                            contactReach
                );
            });
    });
    const touchingStickIndexes = restingPositions.map((position, atomIndex) => {
        return sticks.flatMap((stick, stickIndex) => {
            return assertWrap
                .isDefined(molecule.bonds[stick.bondIndex])
                .atomIndexes.includes(atomIndex)
                ? [stickIndex]
                : [];
        });
    });

    /** Each part's start then end, with an atom's start and end both at its center. */
    const partEnds = new Float32Array(partCount * 6);
    /** An atom's whole glass shell catches shadows, but only its colored core blocks light. */
    const receiverRadii = Float32Array.from([
        ...atomRadii,
        ...sticks.map((stick) => stick.radius),
    ]);
    const casterRadii = Float32Array.from([
        ...atomRadii.map((atomRadius) => atomRadius * atomCoreFraction),
        ...sticks.map((stick) => stick.radius),
    ]);

    const state = {
        positions: getPartPositions({
            molecule,
            sticks,
            atomPositions: restingPositions,
            cameraPosition: new Vector3(0, 0, 1),
        }),
        isShadowsEnabled: true,
    };

    function getAtomCapsule(atomIndex: number): Capsule {
        const atomCenter = assertWrap.isDefined(state.positions.atomCenters[atomIndex]);
        return {
            start: atomCenter,
            end: atomCenter,
            radius: assertWrap.isDefined(atomRadii[atomIndex]),
            isAtom: true,
        };
    }

    function getStickCapsule(stickIndex: number): Capsule {
        const ends = assertWrap.isDefined(state.positions.stickEnds[stickIndex]);
        return {
            start: ends.start,
            end: ends.end,
            radius: assertWrap.isDefined(sticks[stickIndex]).radius,
            isAtom: false,
        };
    }

    return {
        molecule,
        group,
        radius,
        /** Atom positions relative to the turntable's center. */
        centeredAtoms: restingPositions.map((position, atomIndex) => {
            return {
                position: position.clone().sub(center),
                radius: assertWrap.isDefined(atomRadii[atomIndex]),
            };
        }),
        groundShadow,
        /** Must run after the camera moves and before rendering. */
        update({
            localCameraPosition,
            localTowardLight,
        }: Readonly<{
            localCameraPosition: Readonly<Vector3>;
            localTowardLight: Readonly<Vector3>;
        }>) {
            state.positions = getPartPositions({
                molecule,
                sticks,
                atomPositions: restingPositions.map((position) => position.clone()),
                cameraPosition: localCameraPosition,
            });

            state.positions.atomCenters.forEach((atomCenter, atomIndex) => {
                atoms.attributes.center.setXYZ(atomIndex, atomCenter.x, atomCenter.y, atomCenter.z);
                partEnds.set(
                    [
                        ...atomCenter.toArray(),
                        ...atomCenter.toArray(),
                    ],
                    atomIndex * 6,
                );
                contactOccluders.setRow({
                    row: atomIndex,
                    capsules: [
                        ...assertWrap
                            .isDefined(touchingAtomIndexes[atomIndex])
                            .map((otherIndex) => getAtomCapsule(otherIndex)),
                        ...assertWrap
                            .isDefined(touchingStickIndexes[atomIndex])
                            .map((stickIndex) => getStickCapsule(stickIndex)),
                    ],
                });
            });
            atoms.attributes.center.needsUpdate = true;

            state.positions.stickEnds.forEach(({start, end, side}, stickIndex) => {
                stickImpostors.attributes.start.setXYZ(stickIndex, start.x, start.y, start.z);
                stickImpostors.attributes.end.setXYZ(stickIndex, end.x, end.y, end.z);
                stickImpostors.attributes.side.setXYZ(stickIndex, side.x, side.y, side.z);
                partEnds.set(
                    [
                        ...start.toArray(),
                        ...end.toArray(),
                    ],
                    (atomCount + stickIndex) * 6,
                );
                contactOccluders.setRow({
                    row: atomCount + stickIndex,
                    capsules: assertWrap
                        .isDefined(
                            molecule.bonds[assertWrap.isDefined(sticks[stickIndex]).bondIndex],
                        )
                        .atomIndexes.map((atomIndex) => getAtomCapsule(atomIndex)),
                });
            });
            stickImpostors.attributes.start.needsUpdate = true;
            stickImpostors.attributes.end.needsUpdate = true;
            stickImpostors.attributes.side.needsUpdate = true;
            contactOccluders.upload();

            if (state.isShadowsEnabled) {
                shadowCasters.update({
                    ends: partEnds,
                    receiverRadii,
                    casterRadii,
                    isAtom(part) {
                        return part < atomCount;
                    },
                    towardLight: localTowardLight,
                });
            }
            if (selfReflections.isEnabled()) {
                selfReflections.update({
                    sphereCenters: state.positions.atomCenters,
                    cylinderEnds: state.positions.stickEnds,
                });
            }
        },
        /** Lights up the selection, if any, and turns off every other part's glow. */
        setGlow({
            selection,
            glow,
        }: Readonly<{selection: Readonly<MoleculeSelection> | undefined; glow: number}>) {
            const selected =
                selection == undefined
                    ? {
                          atomIndexes: [],
                          stickIndexes: [],
                      }
                    : selection.type === MoleculeSelectionType.Atom
                      ? {
                            atomIndexes: [selection.atomIndex],
                            stickIndexes: [],
                        }
                      : {
                            atomIndexes: [],
                            stickIndexes: assertWrap.isDefined(
                                bondStickIndexes[selection.bondIndex],
                            ),
                        };
            atoms.attributes.glow.array.fill(0);
            stickImpostors.attributes.glow.array.fill(0);
            selected.atomIndexes.forEach((atomIndex) => {
                atoms.attributes.glow.setX(
                    atomIndex,
                    glow * getGlowBoost(assertWrap.isDefined(atomColors[atomIndex])),
                );
            });
            selected.stickIndexes.forEach((stickIndex) => {
                stickImpostors.attributes.glow.setX(stickIndex, glow * getGlowBoost(stickColor));
            });
            atoms.attributes.glow.needsUpdate = true;
            stickImpostors.attributes.glow.needsUpdate = true;
        },
        /** Finds the nearest atom or bond along a ray in the molecule's own space. */
        pick({
            origin,
            direction,
        }: Readonly<{
            origin: Readonly<Vector3>;
            direction: Readonly<Vector3>;
        }>) {
            const hits = [
                ...state.positions.atomCenters.map((atomCenter, atomIndex) => {
                    return {
                        distance: intersectSphere({
                            origin,
                            direction,
                            center: atomCenter,
                            radius: assertWrap.isDefined(atomRadii[atomIndex]),
                        }),
                        selection: {
                            type: MoleculeSelectionType.Atom,
                            atomIndex,
                        } satisfies MoleculeSelection,
                    };
                }),
                ...state.positions.stickEnds.map(({start, end}, stickIndex) => {
                    const stick = assertWrap.isDefined(sticks[stickIndex]);
                    return {
                        distance: intersectCylinder({
                            origin,
                            direction,
                            start,
                            end,
                            radius: stick.radius,
                        }),
                        selection: {
                            type: MoleculeSelectionType.Bond,
                            bondIndex: stick.bondIndex,
                        } satisfies MoleculeSelection,
                    };
                }),
            ];
            return hits
                .filter((hit) => hit.distance != undefined)
                .toSorted(
                    (first, second) => (first.distance ?? Infinity) - (second.distance ?? Infinity),
                )[0]?.selection;
        },
        setDisabledEffects(disabledEffects: ReadonlyArray<RenderEffect>) {
            const isSelfReflectionsEnabled = !disabledEffects.includes(
                RenderEffect.SelfReflections,
            );
            selfReflections.setEnabled(isSelfReflectionsEnabled);
            atoms.setSelfReflectionsEnabled(isSelfReflectionsEnabled);
            const isTransmissionEnabled = !disabledEffects.includes(RenderEffect.Transmission);
            atoms.setTransmissionEnabled(isTransmissionEnabled);
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
            atoms.dispose();
            stickImpostors.dispose();
            contactOccluders.dispose();
            shadowCasters.dispose();
            selfReflections.dispose();
            groundShadow.dispose();
        },
    };
}

type MoleculeModel = ReturnType<typeof createMoleculeModel>;

export function createMoleculeScene({
    isSnapshot,
}: Readonly<
    PartialWithUndefined<{
        /**
         * Renders only on `captureImage` calls, with no spin, ground shadow, or automatic quality
         * drops.
         */
        isSnapshot: boolean;
    }>
> = {}) {
    const renderer = new WebGLRenderer({
        antialias: true,
        alpha: true,
    });

    const scene = new Scene();
    /** The animation loop updates world matrices itself before the molecule's shading reads them. */
    scene.matrixWorldAutoUpdate = false;
    const camera = new PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, Math.sin(cameraElevationRadians), Math.cos(cameraElevationRadians));
    scene.add(camera);
    const sceneUniforms: ImpostorSceneUniforms = {
        localCameraPosition: {
            value: new Vector3(),
        },
        localTowardLight: {
            value: new Vector3(),
        },
        localToClip: {
            value: new Matrix4(),
        },
    };
    const worldToLocal = new Matrix4();

    /**
     * Dragging spins this instead of orbiting the camera, so the ground and light stay put. Each
     * model group is offset to center its molecule here, so spinning the model group itself would
     * swing the molecule around.
     */
    const turntable = new Group();
    turntable.quaternion.copy(startingOrientation);
    scene.add(turntable);
    /**
     * The turn is rebuilt from these two angles instead of stacking each drag step onto the last,
     * so dragging in a circle lands back on the same orientation.
     */
    const turn = {
        yawRadians: 0,
        pitchRadians: 0,
    };

    function applyTurn() {
        turntable.quaternion
            .copy(startingOrientation)
            .premultiply(new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), turn.yawRadians))
            .premultiply(
                new Quaternion().setFromAxisAngle(new Vector3(1, 0, 0), turn.pitchRadians),
            );
    }

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableRotate = false;
    controls.mouseButtons = {
        LEFT: null,
        MIDDLE: MOUSE.PAN,
        RIGHT: null,
    };
    /** With rotation disabled, this makes a two-finger touch zoom only, without panning. */
    controls.touches = {
        ONE: null,
        TWO: TOUCH.DOLLY_ROTATE,
    };
    controls.minDistance = 2;

    const current: {
        model: MoleculeModel | undefined;
        selection: MoleculeSelection | undefined;
        onSelectionChange: ((selection: MoleculeSelection | undefined) => void) | undefined;
        onRenderQualityChange: ((quality: Readonly<RenderQuality>) => void) | undefined;
        rightInsetPixels: number;
    } = {
        model: undefined,
        selection: undefined,
        onSelectionChange: undefined,
        onRenderQualityChange: undefined,
        rightInsetPixels: 0,
    };

    /** Capped at half the viewer so the molecule never centers off the left edge. */
    function getRightInsetPixels(viewerWidth: number) {
        return Math.min(current.rightInsetPixels, viewerWidth / 2);
    }

    /**
     * Renders a slice of a wider view so the molecule's center lands in the middle of the uncovered
     * area, while drag rotation still spins it in place.
     */
    function updateProjection() {
        const viewerSize = renderer.getSize(new Vector2());
        if (!viewerSize.x || !viewerSize.y) {
            return;
        }
        const insetPixels = getRightInsetPixels(viewerSize.x);
        camera.aspect = (viewerSize.x + insetPixels) / viewerSize.y;
        camera.setViewOffset(
            viewerSize.x + insetPixels,
            viewerSize.y,
            insetPixels,
            0,
            viewerSize.x,
            viewerSize.y,
        );
    }

    const qualityScaler = createRenderQualityScaler({
        applyQuality({resolutionScale, disabledEffects}) {
            renderer.setPixelRatio(globalThis.devicePixelRatio * resolutionScale);
            current.model?.setDisabledEffects(disabledEffects);
        },
    });

    /** The animation loop lights up the selection. */
    function select(selection: Readonly<MoleculeSelection> | undefined) {
        current.selection = selection;
        current.onSelectionChange?.(selection);
    }

    const raycaster = new Raycaster();
    const pointerDownPosition = new Vector2();
    const drag: {
        lastPosition: Vector2 | undefined;
        lastMoveMilliseconds: number;
        pixelsPerSecond: Vector2;
        pointerId: number | undefined;
        activePointerIds: number[];
        /**
         * Set once a second finger touches down, so lifting fingers after a pinch doesn't count as
         * a click or a fling.
         */
        isMultiTouch: boolean;
        /**
         * Set once the pointer travels past `clickMoveTolerance`, so the press is no longer a
         * click.
         */
        isOrbiting: boolean;
    } = {
        lastPosition: undefined,
        lastMoveMilliseconds: 0,
        pixelsPerSecond: new Vector2(),
        pointerId: undefined,
        activePointerIds: [],
        isMultiTouch: false,
        isOrbiting: false,
    };
    /** Undefined while the user holds the molecule still after grabbing it. */
    const spin: {
        radiansPerSecond: number | undefined;
        lastTouchMilliseconds: number;
    } = {
        radiansPerSecond: autoSpinRadiansPerSecond,
        lastTouchMilliseconds: 0,
    };

    function releasePointer(pointerId: number) {
        drag.activePointerIds = drag.activePointerIds.filter((id) => id !== pointerId);
        if (pointerId === drag.pointerId) {
            drag.lastPosition = undefined;
            drag.pointerId = undefined;
        }
        if (!drag.activePointerIds.length) {
            drag.isMultiTouch = false;
        }
    }

    renderer.domElement.addEventListener('wheel', () => {
        spin.lastTouchMilliseconds = performance.now();
    });
    renderer.domElement.addEventListener('pointerdown', (event) => {
        spin.lastTouchMilliseconds = performance.now();
        drag.activePointerIds = [
            ...drag.activePointerIds,
            event.pointerId,
        ];
        if (drag.activePointerIds.length > 1) {
            /** A second finger means a pinch zoom, which `OrbitControls` handles. */
            drag.isMultiTouch = true;
            drag.lastPosition = undefined;
            drag.pointerId = undefined;
            return;
        }
        pointerDownPosition.set(event.clientX, event.clientY);
        if (event.button === 0) {
            drag.pointerId = event.pointerId;
            drag.lastPosition = new Vector2(event.clientX, event.clientY);
            drag.lastMoveMilliseconds = event.timeStamp;
            drag.pixelsPerSecond.set(0, 0);
            drag.isOrbiting = false;
        }
    });
    renderer.domElement.addEventListener('pointermove', (event) => {
        if (
            !drag.lastPosition ||
            event.pointerId !== drag.pointerId ||
            (!drag.isOrbiting &&
                pointerDownPosition.distanceTo(new Vector2(event.clientX, event.clientY)) <=
                    clickMoveTolerance)
        ) {
            return;
        }
        drag.isOrbiting = true;
        /** Same speed as `OrbitControls`: dragging the canvas's full height turns a full circle. */
        const radiansPerPixel = (2 * Math.PI) / renderer.domElement.clientHeight;
        turn.yawRadians += (event.clientX - drag.lastPosition.x) * radiansPerPixel;
        /** Past straight up or down, horizontal drags would turn the molecule backward. */
        turn.pitchRadians = Math.min(
            Math.PI / 2,
            Math.max(
                -Math.PI / 2,
                turn.pitchRadians + (event.clientY - drag.lastPosition.y) * radiansPerPixel,
            ),
        );
        applyTurn();
        spin.lastTouchMilliseconds = performance.now();
        const elapsedSeconds = (event.timeStamp - drag.lastMoveMilliseconds) / 1000;
        if (elapsedSeconds > 0) {
            drag.pixelsPerSecond.set(
                (event.clientX - drag.lastPosition.x) / elapsedSeconds,
                (event.clientY - drag.lastPosition.y) / elapsedSeconds,
            );
        }
        drag.lastPosition.set(event.clientX, event.clientY);
        drag.lastMoveMilliseconds = event.timeStamp;
        spin.radiansPerSecond = undefined;
    });
    renderer.domElement.addEventListener('pointercancel', (event) => {
        releasePointer(event.pointerId);
    });
    renderer.domElement.addEventListener('pointerup', (event) => {
        spin.lastTouchMilliseconds = performance.now();
        const isDragPointer = event.pointerId === drag.pointerId && !drag.isMultiTouch;
        const isOrbiting = drag.isOrbiting;
        const lastPosition = drag.lastPosition;
        releasePointer(event.pointerId);
        if (!isDragPointer) {
            return;
        }
        if (
            lastPosition &&
            event.timeStamp - drag.lastMoveMilliseconds < flingMaxPauseMilliseconds &&
            drag.pixelsPerSecond.length() > flingPixelsPerSecond
        ) {
            spin.radiansPerSecond =
                (drag.pixelsPerSecond.x * 2 * Math.PI) / renderer.domElement.clientHeight;
        }
        const model = current.model;
        if (!model || isOrbiting) {
            return;
        }
        const canvasRect = renderer.domElement.getBoundingClientRect();
        raycaster.setFromCamera(
            new Vector2(
                ((event.clientX - canvasRect.left) / canvasRect.width) * 2 - 1,
                -((event.clientY - canvasRect.top) / canvasRect.height) * 2 + 1,
            ),
            camera,
        );
        const hitSelection = model.pick({
            origin: raycaster.ray.origin.clone().applyMatrix4(worldToLocal),
            direction: raycaster.ray.direction.clone().transformDirection(worldToLocal),
        });
        const newSelection = check.deepEquals(hitSelection as any, current.selection)
            ? undefined
            : hitSelection;
        if (newSelection) {
            spin.radiansPerSecond = undefined;
        }
        select(newSelection);
    });

    const frameClock: {
        lastMilliseconds: number | undefined;
        isPaused: boolean;
    } = {
        lastMilliseconds: undefined,
        isPaused: false,
    };

    function renderFrame(timeMilliseconds: number) {
        const frameSeconds =
            (timeMilliseconds - (frameClock.lastMilliseconds ?? timeMilliseconds)) / 1000;
        frameClock.lastMilliseconds = timeMilliseconds;
        if (qualityScaler.recordFrame(frameSeconds)) {
            current.onRenderQualityChange?.(qualityScaler.getQuality());
        }
        if (
            spin.radiansPerSecond == undefined &&
            !drag.activePointerIds.length &&
            performance.now() - spin.lastTouchMilliseconds > idleSpinResumeMilliseconds
        ) {
            spin.radiansPerSecond = 0;
        }
        if (spin.radiansPerSecond != undefined) {
            /** A fling keeps its direction as it eases down to the idle speed. */
            const idleRadiansPerSecond =
                Math.sign(spin.radiansPerSecond || 1) * autoSpinRadiansPerSecond;
            spin.radiansPerSecond +=
                (idleRadiansPerSecond - spin.radiansPerSecond) *
                Math.min(
                    1,
                    flingSlowdown *
                        /** The floor lets a spin starting from a standstill ease up to speed. */
                        Math.sqrt(
                            Math.max(Math.abs(spin.radiansPerSecond), autoSpinRadiansPerSecond),
                        ) *
                        frameSeconds,
                );
            turn.yawRadians += spin.radiansPerSecond * frameSeconds;
            applyTurn();
        }
        controls.update();
        scene.updateMatrixWorld();
        if (current.model) {
            worldToLocal.copy(current.model.group.matrixWorld).invert();
            sceneUniforms.localCameraPosition.value
                .copy(camera.position)
                .applyMatrix4(worldToLocal);
            sceneUniforms.localTowardLight.value.copy(towardLight).transformDirection(worldToLocal);
            sceneUniforms.localToClip.value
                .multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse)
                .multiply(current.model.group.matrixWorld);
            current.model.update({
                localCameraPosition: sceneUniforms.localCameraPosition.value,
                localTowardLight: sceneUniforms.localTowardLight.value,
            });
            current.model.setGlow({
                selection: current.selection,
                glow:
                    highlightGlow.min +
                    ((highlightGlow.max - highlightGlow.min) *
                        (1 -
                            Math.cos(
                                2 *
                                    Math.PI *
                                    highlightGlow.pulsesPerSecond *
                                    (timeMilliseconds / 1000),
                            ))) /
                        2,
            });
            if (!isSnapshot && current.model.isShadowsEnabled()) {
                current.model.groundShadow.render({
                    renderer,
                    worldToLocal,
                    localTowardLight: sceneUniforms.localTowardLight.value,
                });
            }
        }
        renderer.render(scene, camera);
    }

    if (!isSnapshot) {
        renderer.setAnimationLoop(renderFrame);
    }

    return {
        canvas: renderer.domElement,
        listenToSelection(onSelectionChange: (selection: MoleculeSelection | undefined) => void) {
            current.onSelectionChange = onSelectionChange;
        },
        /** Only fires for changes the scene makes itself, not for `setRenderQuality`. */
        listenToRenderQuality(onRenderQualityChange: (quality: Readonly<RenderQuality>) => void) {
            current.onRenderQualityChange = onRenderQualityChange;
        },
        setRenderQuality(quality: Readonly<RenderQuality>) {
            qualityScaler.setQuality(quality);
        },
        setMolecule(molecule: Readonly<Molecule>) {
            if (current.model?.molecule === molecule) {
                return;
            }
            select(undefined);
            const isFirstMolecule = !current.model;
            if (current.model) {
                turntable.remove(current.model.group);
                scene.remove(current.model.groundShadow.mesh);
                current.model.dispose();
            }
            current.model = createMoleculeModel({
                molecule,
                sceneUniforms,
            });
            current.model.setDisabledEffects(qualityScaler.getQuality().disabledEffects);
            turntable.add(current.model.group);
            if (!isSnapshot) {
                scene.add(current.model.groundShadow.mesh);
            }
            if (isFirstMolecule) {
                turn.yawRadians = findClearestYaw({
                    atoms: current.model.centeredAtoms,
                    baseOrientation: startingOrientation,
                    pitchRadians: turn.pitchRadians,
                    towardCamera: camera.position,
                });
                applyTurn();
            }

            const moleculeRadius = current.model.radius;
            const viewerSize = renderer.getSize(new Vector2());
            const verticalHalfFov = (camera.fov * Math.PI) / 360;
            /** In a portrait viewer, the sides cut the molecule off before the top and bottom do. */
            const narrowestHalfFov = Math.min(
                verticalHalfFov,
                Math.atan(
                    (Math.tan(verticalHalfFov) *
                        (viewerSize.x - getRightInsetPixels(viewerSize.x))) /
                        viewerSize.y,
                ),
            );
            const fitDistance =
                (Math.max(moleculeRadius, minimumFitRadius) / Math.sin(narrowestHalfFov)) *
                fitDistanceMargin *
                (Math.min(viewerSize.x, viewerSize.y) < smallScreenPixels
                    ? smallScreenFitDistanceMargin
                    : 1);
            camera.position.setLength(fitDistance);
            controls.maxDistance = fitDistance * 3;
            /** Reaches past the molecule and the far corner of its ground shadow at full zoom-out. */
            camera.far = controls.maxDistance + moleculeRadius * 3 + groundGap + 2;
            camera.updateProjectionMatrix();
        },
        /**
         * Renders a frame and reads it out as a PNG data URL in the same task, before the browser
         * clears the canvas's drawing buffer. With `viewWindow`, only that square of the normal
         * view, in CSS pixels, is rendered, stretched to fill the canvas. It may reach past the
         * canvas edges.
         */
        captureImage(viewWindow?: Readonly<{left: number; top: number; size: number}> | undefined) {
            if (viewWindow) {
                const viewerSize = renderer.getSize(new Vector2());
                camera.setViewOffset(
                    viewerSize.x,
                    viewerSize.y,
                    viewWindow.left,
                    viewWindow.top,
                    viewWindow.size,
                    viewWindow.size,
                );
            }
            renderFrame(0);
            const image = renderer.domElement.toDataURL('image/png');
            updateProjection();
            return image;
        },
        resize({width, height}: Readonly<{width: number; height: number}>) {
            if (!width || !height) {
                return;
            }
            renderer.setSize(width, height, false);
            updateProjection();
        },
        setRightInset(pixels: number) {
            current.rightInsetPixels = pixels;
            updateProjection();
        },
        /** Stops and restarts drawing frames, keeping everything else as is. */
        setPaused(isPaused: boolean) {
            if (isSnapshot || isPaused === frameClock.isPaused) {
                return;
            }
            frameClock.isPaused = isPaused;
            /**
             * Otherwise the first frame after resuming counts the whole pause as its duration,
             * which the render quality scaler reads as a stall and the spin jumps across.
             */
            frameClock.lastMilliseconds = undefined;
            renderer.setAnimationLoop(isPaused ? null : renderFrame);
        },
        dispose() {
            renderer.setAnimationLoop(null);
            controls.dispose();
            if (current.model) {
                current.model.dispose();
            }
            renderer.dispose();
        },
    };
}

export type MoleculeScene = ReturnType<typeof createMoleculeScene>;
