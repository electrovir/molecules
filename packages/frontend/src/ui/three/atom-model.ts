import {assertWrap} from '@augment-vir/assert';
import {createArray} from '@augment-vir/common';
import {
    BufferAttribute,
    BufferGeometry,
    Color,
    DoubleSide,
    Group,
    Mesh,
    MeshBasicMaterial,
    Points,
    Quaternion,
    ShaderMaterial,
    TorusGeometry,
    Vector3,
} from 'three';
import {type ChemicalElementSymbol} from '../../data/chemical-element.js';
import {bohrRingColor, neutronColor, protonColor} from '../orbital-colors.js';
import {createAtomGeometry} from './atom-geometry.js';
import {BallAndStickPartType, createBallAndStickModel} from './ball-and-stick-model.js';
import {type ImpostorSceneUniforms} from './impostors.js';
import {type MoleculeSelection, MoleculeSelectionType} from './molecule-selection.js';
import {type RenderEffect} from './render-quality.js';

/** Cloud point size in world units, before perspective shrinks far points. */
const cloudPointSize = 0.175;
const ringTubeRadius = 0.025;
/**
 * Electrons of other orbitals are darkened to this fraction of their color while one is selected,
 * since the ball impostors can't be see-through.
 */
const unselectedElectronBrightness = 0.25;
/** How far from an electron's center, in electron radii, a tap still picks it. */
const electronPickTolerance = 2.5;
/** Rings without an electron of the selected orbital fade to this opacity. */
const unselectedRingOpacity = 0.15;
/** A selected orbital is drawn at least this strong, so a faint valence orbital still reads alone. */
const minSelectedGain = 0.9;
const selectedGainBoost = 1.6;
const cloudOpacityScale = 0.45;
/** Relative to the cloud's opacity. */
const surfaceToCloudOpacity = 0.4;
/**
 * Spinning electrons keep the list of balls each one reflects, refreshed this often, since finding
 * it every frame is slow for heavy atoms.
 */
const reflectedNeighborRefreshSeconds = 0.5;

const cloudVertexShader = `
    attribute vec3 color;
    uniform float pointScale;
    varying vec3 vColor;

    void main() {
        vColor = color;
        vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = ${cloudPointSize.toFixed(4)} * pointScale / -viewPosition.z;
        gl_Position = projectionMatrix * viewPosition;
    }
`;

const cloudFragmentShader = `
    uniform float opacity;
    varying vec3 vColor;

    void main() {
        float distanceFromCenter = length(gl_PointCoord - 0.5) * 2.0;
        if (distanceFromCenter > 1.0) {
            discard;
        }
        float alpha = 1.0 - distanceFromCenter;
        gl_FragColor = vec4(vColor, alpha * alpha * opacity);
        #include <colorspace_fragment>
    }
`;

/** Nearly invisible facing the camera and bright at the silhouette, so it outlines the cloud. */
const surfaceVertexShader = `
    attribute vec3 color;
    varying vec3 vNormal;
    varying vec3 vToCamera;
    varying vec3 vColor;

    void main() {
        vColor = color;
        vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
        vNormal = normalize(normalMatrix * normal);
        vToCamera = normalize(-viewPosition.xyz);
        gl_Position = projectionMatrix * viewPosition;
    }
`;

const surfaceFragmentShader = `
    uniform float opacity;
    varying vec3 vNormal;
    varying vec3 vToCamera;
    varying vec3 vColor;

    void main() {
        float rim = pow(1.0 - abs(dot(normalize(vNormal), normalize(vToCamera))), 2.2);
        gl_FragColor = vec4(vColor * (0.8 + 0.45 * rim), opacity * (0.06 + 0.85 * rim));
        #include <colorspace_fragment>
    }
`;

/**
 * An atom as a Bohr model, with a packed nucleus and electrons circling on rings, overlaid with a
 * point cloud and outline surface for each occupied orbital.
 */
export function createAtomModel({
    symbol,
    sceneUniforms,
}: Readonly<{
    symbol: ChemicalElementSymbol;
    sceneUniforms: Readonly<ImpostorSceneUniforms>;
}>) {
    const atom = createAtomGeometry(symbol);
    const shellFrames = atom.shells.map((shell) => {
        return new Quaternion().setFromAxisAngle(new Vector3(1, 0, 0), shell.tiltRadians);
    });
    /** Each orbital's cloud and surface turn with its shell's electrons. */
    const orbitalShellIndexes = atom.orbitals.map((visual) => {
        return atom.shells.findIndex((shell) => shell.n === visual.orbital.n);
    });
    const electrons = atom.shells.flatMap((shell, shellIndex) => {
        return shell.electronOrbitalIndexes.map((orbitalIndex, electronIndex) => {
            return {
                shellIndex,
                orbitalIndex,
                startAngle: (electronIndex / shell.electronOrbitalIndexes.length) * 2 * Math.PI,
            };
        });
    });
    const state: {
        /** How far the electrons have orbited, in seconds of orbiting at full speed. */
        orbitSeconds: number;
        orbitSecondsSinceNeighborRefresh: number;
        selectedOrbitalId: string | undefined;
        opacity: number;
    } = {
        orbitSeconds: 0,
        orbitSecondsSinceNeighborRefresh: 0,
        selectedOrbitalId: undefined,
        opacity: 0.7,
    };

    function getElectronPosition(electronIndex: number) {
        const electron = assertWrap.isDefined(electrons[electronIndex]);
        const shell = assertWrap.isDefined(atom.shells[electron.shellIndex]);
        const angle = electron.startAngle + shell.spinRadiansPerSecond * state.orbitSeconds;
        return new Vector3(
            Math.cos(angle) * shell.radius,
            0,
            Math.sin(angle) * shell.radius,
        ).applyQuaternion(assertWrap.isDefined(shellFrames[electron.shellIndex]));
    }

    function getElectronStyle(electronIndex: number) {
        const electron = assertWrap.isDefined(electrons[electronIndex]);
        const visual = assertWrap.isDefined(atom.orbitals[electron.orbitalIndex]);
        const radius = assertWrap.isDefined(atom.shells[electron.shellIndex]).electronRadius;
        return {
            color:
                state.selectedOrbitalId == undefined ||
                visual.orbital.id === state.selectedOrbitalId
                    ? visual.color
                    : visual.color.clone().multiplyScalar(unselectedElectronBrightness),
            radius,
        };
    }

    const nucleonCount = atom.nucleons.length;
    const model = createBallAndStickModel({
        balls: [
            ...atom.nucleons.map((nucleon) => {
                return {
                    position: nucleon.position,
                    radius: atom.nucleonRadius,
                    color: new Color(nucleon.isProton ? protonColor : neutronColor),
                };
            }),
            ...electrons.map((electron, electronIndex) => {
                return {
                    position: getElectronPosition(electronIndex),
                    ...getElectronStyle(electronIndex),
                };
            }),
        ],
        sticks: [],
        stickEnds: [],
        stickColor: new Color(bohrRingColor),
        sceneUniforms,
        bounds: {
            center: new Vector3(),
            radius: atom.radius,
        },
    });

    const rings = atom.shells.map((shell, shellIndex) => {
        const ring = new Mesh(
            new TorusGeometry(shell.radius, ringTubeRadius, 8, 192),
            new MeshBasicMaterial({
                color: bohrRingColor,
                transparent: true,
            }),
        );
        ring.quaternion
            .copy(assertWrap.isDefined(shellFrames[shellIndex]))
            .multiply(new Quaternion().setFromAxisAngle(new Vector3(1, 0, 0), Math.PI / 2));
        return ring;
    });

    const pointScale = {
        value: 1,
    };
    const orbitalMeshes = atom.orbitals.map((visual) => {
        const cloudOpacity = {
            value: 0,
        };
        const surfaceOpacity = {
            value: 0,
        };
        const cloudGeometry = new BufferGeometry();
        cloudGeometry.setAttribute('position', new BufferAttribute(visual.cloud.positions, 3));
        cloudGeometry.setAttribute('color', new BufferAttribute(visual.cloud.colors, 3));
        const cloud = new Points(
            cloudGeometry,
            new ShaderMaterial({
                uniforms: {
                    pointScale,
                    opacity: cloudOpacity,
                },
                vertexShader: cloudVertexShader,
                fragmentShader: cloudFragmentShader,
                transparent: true,
                depthWrite: false,
            }),
        );
        cloud.renderOrder = 2;
        const surface = new Mesh(
            visual.surface.geometry,
            new ShaderMaterial({
                uniforms: {
                    opacity: surfaceOpacity,
                },
                vertexShader: surfaceVertexShader,
                fragmentShader: surfaceFragmentShader,
                transparent: true,
                depthWrite: false,
                side: DoubleSide,
            }),
        );
        surface.renderOrder = 3;
        return {
            visual,
            cloud,
            surface,
            cloudOpacity,
            surfaceOpacity,
        };
    });

    const overlay = new Group();
    overlay.add(
        ...rings,
        ...orbitalMeshes.flatMap(({cloud, surface}) => {
            return [
                cloud,
                surface,
            ];
        }),
    );
    model.group.add(overlay);

    function applyOrbitalStyles() {
        orbitalMeshes.forEach(({visual, cloud, surface, cloudOpacity, surfaceOpacity}) => {
            const strength =
                state.selectedOrbitalId == undefined
                    ? visual.gain
                    : Math.max(visual.gain * selectedGainBoost, minSelectedGain);
            const isShown =
                state.opacity > 0 &&
                (state.selectedOrbitalId == undefined ||
                    state.selectedOrbitalId === visual.orbital.id);
            cloud.visible = isShown;
            surface.visible = isShown;
            cloudOpacity.value = Math.min(1, cloudOpacityScale * strength * state.opacity);
            surfaceOpacity.value = cloudOpacity.value * surfaceToCloudOpacity;
        });
        rings.forEach((ring, shellIndex) => {
            ring.material.opacity =
                state.selectedOrbitalId == undefined ||
                assertWrap
                    .isDefined(atom.shells[shellIndex])
                    .electronOrbitalIndexes.some((orbitalIndex) => {
                        return atom.orbitals[orbitalIndex]?.orbital.id === state.selectedOrbitalId;
                    })
                    ? 1
                    : unselectedRingOpacity;
        });
        model.setBallStyles(
            electrons.map((electron, electronIndex) => {
                return {
                    ballIndex: nucleonCount + electronIndex,
                    ...getElectronStyle(electronIndex),
                };
            }),
        );
    }

    /** Small electrons are hard to tap exactly, so a near miss still picks the closest one. */
    function findNearbyElectron(
        ray: Readonly<{origin: Readonly<Vector3>; direction: Readonly<Vector3>}>,
    ) {
        const nearest = electrons
            .map((electron, electronIndex) => {
                const toElectron = getElectronPosition(electronIndex).sub(ray.origin);
                const alongRay = toElectron.dot(ray.direction);
                return {
                    electronIndex,
                    missRatio:
                        Math.sqrt(Math.max(0, toElectron.lengthSq() - alongRay * alongRay)) /
                        assertWrap.isDefined(atom.shells[electron.shellIndex]).electronRadius,
                };
            })
            .filter(({missRatio}) => missRatio <= electronPickTolerance)
            .toSorted((first, second) => first.missRatio - second.missRatio)[0];
        return nearest?.electronIndex;
    }

    applyOrbitalStyles();

    return {
        source: symbol,
        group: model.group,
        radius: model.radius,
        groundShadow: model.groundShadow,
        orbitals: atom.orbitals.map((visual) => visual.orbital),
        /** Must run after the camera moves and before rendering. */
        update({
            localTowardLight,
            orbitSeconds,
            pointPixelsPerUnit,
        }: Readonly<{
            localTowardLight: Readonly<Vector3>;
            /** How far to move the electrons, in seconds of orbiting at full speed. */
            orbitSeconds: number;
            /** Pixels a point one unit across covers at one unit from the camera. */
            pointPixelsPerUnit: number;
        }>) {
            state.orbitSeconds += orbitSeconds;
            state.orbitSecondsSinceNeighborRefresh += orbitSeconds;
            const isNeighborRefreshDue =
                state.orbitSecondsSinceNeighborRefresh >= reflectedNeighborRefreshSeconds;
            if (isNeighborRefreshDue) {
                state.orbitSecondsSinceNeighborRefresh = 0;
            }
            orbitalMeshes.forEach(({cloud, surface}, orbitalIndex) => {
                const shellIndex = assertWrap.isDefined(orbitalShellIndexes[orbitalIndex]);
                const frame = assertWrap.isDefined(shellFrames[shellIndex]);
                /** Turning about the shell's own axis, matching its electrons. */
                cloud.quaternion
                    .copy(frame)
                    .multiply(
                        new Quaternion().setFromAxisAngle(
                            new Vector3(0, 1, 0),
                            -assertWrap.isDefined(atom.shells[shellIndex]).spinRadiansPerSecond *
                                state.orbitSeconds,
                        ),
                    )
                    .multiply(frame.clone().invert());
                surface.quaternion.copy(cloud.quaternion);
            });
            model.setBallPositions({
                ballPositions: electrons.map((electron, electronIndex) => {
                    return {
                        ballIndex: nucleonCount + electronIndex,
                        position: getElectronPosition(electronIndex),
                    };
                }),
                keepReflectedNeighbors: !isNeighborRefreshDue,
            });
            model.update({
                localTowardLight,
            });
            pointScale.value = pointPixelsPerUnit;
        },
        /** Pulses the selected nucleus or the selected orbital's electrons. */
        setGlow({
            selection,
            glow,
        }: Readonly<{selection: Readonly<MoleculeSelection> | undefined; glow: number}>) {
            model.setGlow({
                ballIndexes:
                    selection?.type === MoleculeSelectionType.Nucleus
                        ? createArray(nucleonCount, (nucleonIndex) => nucleonIndex)
                        : electrons.flatMap((electron, electronIndex) => {
                              return selection?.type === MoleculeSelectionType.Orbital &&
                                  atom.orbitals[electron.orbitalIndex]?.orbital.id ===
                                      selection.orbitalId
                                  ? [nucleonCount + electronIndex]
                                  : [];
                          }),
                stickIndexes: [],
                glow,
            });
        },
        /** Finds the nucleus, or the orbital of the nearest electron, along a ray. */
        pick(
            ray: Readonly<{origin: Readonly<Vector3>; direction: Readonly<Vector3>}>,
        ): MoleculeSelection | undefined {
            const part = model.pick(ray);
            const electronIndex =
                part?.type === BallAndStickPartType.Ball
                    ? part.index - nucleonCount
                    : findNearbyElectron(ray);
            if (electronIndex == undefined) {
                return undefined;
            }
            const electron = electrons[electronIndex];
            return electron
                ? {
                      type: MoleculeSelectionType.Orbital,
                      orbitalId: assertWrap.isDefined(atom.orbitals[electron.orbitalIndex]).orbital
                          .id,
                  }
                : {
                      type: MoleculeSelectionType.Nucleus,
                  };
        },
        /** Shows only this orbital, or every orbital when `undefined`. */
        setOrbitalSelection(orbitalId: string | undefined) {
            state.selectedOrbitalId = orbitalId;
            applyOrbitalStyles();
        },
        /** How strongly the orbital clouds show, from 0 to 1. Surfaces show at half this. */
        setOrbitalOpacity(opacity: number) {
            state.opacity = opacity;
            applyOrbitalStyles();
        },
        setDisabledEffects(disabledEffects: ReadonlyArray<RenderEffect>) {
            model.setDisabledEffects(disabledEffects);
        },
        isShadowsEnabled() {
            return model.isShadowsEnabled();
        },
        dispose() {
            model.dispose();
            rings.forEach((ring) => {
                ring.geometry.dispose();
                ring.material.dispose();
            });
            orbitalMeshes.forEach(({cloud, surface}) => {
                cloud.geometry.dispose();
                cloud.material.dispose();
                surface.geometry.dispose();
                surface.material.dispose();
            });
        },
    };
}

export type AtomModel = ReturnType<typeof createAtomModel>;
