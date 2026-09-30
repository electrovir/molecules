// cspell:words raycaster ångströms wavenumber occluder occluders pmrem
import {assertWrap, check} from '@augment-vir/assert';
import {createArray, ensureArray} from '@augment-vir/common';
import {
    AmbientLight,
    BackSide,
    Box3,
    type BufferGeometry,
    Color,
    CylinderGeometry,
    DirectionalLight,
    DoubleSide,
    Euler,
    Group,
    Matrix4,
    Mesh,
    MeshBasicMaterial,
    MeshPhysicalMaterial,
    MeshStandardMaterial,
    MOUSE,
    type Object3D,
    PerspectiveCamera,
    PlaneGeometry,
    Quaternion,
    Raycaster,
    Scene,
    ShadowMaterial,
    SphereGeometry,
    Vector2,
    Vector3,
    WebGLRenderer,
} from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {type ChemicalElement, chemicalElements} from '../../data/chemical-element.js';
import {
    BondOrder,
    type Coordinates,
    type Molecule,
    type MoleculeBond,
} from '../../data/molecule.js';
import {addContactShading, contactReach, type Occluder} from './contact-shading.js';
import {addGlassShell, addMarbleGlow, addSelfReflections, createSelfReflections} from './marble.js';
import {addFullyShadowedShine} from './shadowed-shine.js';
import {addSurfaceNoise, SurfaceNoiseSpace} from './surface-noise.js';
import {surfaceTexture} from './surface-texture.js';

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
/** How far the camera looks down at the molecule, so the ground and its shadow aren't seen edge-on. */
const cameraElevationRadians = (25 * Math.PI) / 180;
/**
 * The first molecule's starting turn, kept across molecule changes: its +X end raised a little and swung toward the camera, then its
 * top tipped away from the camera, so a molecule laid out flat is seen at an angle instead of
 * side-on.
 */
const startingOrientation = new Quaternion().setFromEuler(
    new Euler((-15 * Math.PI) / 180, (-20 * Math.PI) / 180, (10 * Math.PI) / 180),
);
const vibrationAmplitude = 0.05;
/**
 * Slows vibrations so a wave number of 1595 cm⁻¹ (water's bend) plays at about 0.6 cycles per
 * second.
 */
const vibrationTimeScale = 1 / 2500;
/**
 * The roughness pattern only shows inside the small shiny spot, so the same pattern also nudges the
 * shading everywhere else. It's what makes a turning atom visibly turn.
 */
const surfaceBumpScale = 0.05;
/**
 * How far the shadow-catching ground sits below the lowest point any atom can be turned to, in
 * ångströms.
 */
const groundGap = 0.5;
const groundShadowOpacity = 0.35;
/** How much of the light a shadow blocks, so atoms stay readable where they shade each other. */
const shadowIntensity = 0.5;
const highlightColor = 0xff_d5_4f;
const highlightOutlineName = 'highlight-outline';
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
const clickMoveTolerance = 4;
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

export enum MoleculeSelectionType {
    Atom = 'atom',
    Bond = 'bond',
}

export type MoleculeSelection =
    | {
          type: MoleculeSelectionType.Atom;
          atomIndex: number;
      }
    | {
          type: MoleculeSelectionType.Bond;
          bondIndex: number;
      };

function toVector3({x, y, z}: Readonly<Coordinates>) {
    return new Vector3(x, y, z);
}

/**
 * Plays every vibration mode at once. Real vibrations run around 10^14 times per second and move
 * atoms a few percent of a bond length, so both speed and size are scaled to be visible.
 */
function getVibratingAtomPositions({
    molecule,
    elapsedSeconds,
}: Readonly<{
    molecule: Readonly<Molecule>;
    elapsedSeconds: number;
}>) {
    return molecule.atoms.map((atom, atomIndex) => {
        return (molecule.vibrationModes ?? []).reduce((position, mode) => {
            const displacement = mode.atomDisplacements[atomIndex];
            return displacement
                ? position.addScaledVector(
                      toVector3(displacement),
                      vibrationAmplitude *
                          Math.sin(
                              2 *
                                  Math.PI *
                                  mode.waveNumberPerCentimeter *
                                  vibrationTimeScale *
                                  elapsedSeconds,
                          ),
                  )
                : position;
        }, toVector3(atom.position));
    });
}

type BondSticks = {
    bond: Readonly<MoleculeBond>;
    pivot: Group;
    sticks: Mesh<BufferGeometry, MeshStandardMaterial>[];
};

type MoleculeModel = {
    molecule: Readonly<Molecule>;
    group: Group;
    /** Each atom's glass shell, which is the atom's full size. Its core is a child. */
    atomMeshes: Mesh<BufferGeometry, MeshStandardMaterial>[];
    atomCores: Mesh<BufferGeometry, MeshStandardMaterial>[];
    bondSticks: BondSticks[];
    /** Each one moves a mesh's contact shading to where its occluders are now. */
    contactShadingUpdates: (() => void)[];
    /** Moves the reflections of the molecule in itself to where its parts are now. */
    updateSelfReflections: () => void;
};

/**
 * Renders only the back faces of a slightly larger copy of the mesh, which shows as an outline.
 * Tinting the mesh itself wouldn't show on white hydrogen atoms.
 */
function addHighlightOutline({
    mesh,
    scale,
}: Readonly<{
    mesh: Mesh;
    scale: Readonly<Coordinates>;
}>) {
    const outline = new Mesh(
        mesh.geometry,
        new MeshBasicMaterial({
            color: highlightColor,
            side: BackSide,
        }),
    );
    outline.name = highlightOutlineName;
    outline.scale.copy(toVector3(scale));
    outline.visible = false;
    mesh.add(outline);
}

function getSelectionMeshes({
    model,
    selection,
}: Readonly<{
    model: Readonly<MoleculeModel>;
    selection: Readonly<MoleculeSelection>;
}>) {
    return selection.type === MoleculeSelectionType.Atom
        ? [
              assertWrap.isDefined(model.atomMeshes[selection.atomIndex]),
              assertWrap.isDefined(model.atomCores[selection.atomIndex]),
          ]
        : assertWrap.isDefined(model.bondSticks[selection.bondIndex]).sticks;
}

function setHighlight({
    model,
    selection,
    isHighlighted,
}: Readonly<{
    model: Readonly<MoleculeModel>;
    selection: Readonly<MoleculeSelection>;
    isHighlighted: boolean;
}>) {
    getSelectionMeshes({
        model,
        selection,
    }).forEach((mesh) => {
        mesh.material.emissive.copy(isHighlighted ? mesh.material.color : new Color(0));
        mesh.children
            .filter((child) => child.name === highlightOutlineName)
            .forEach((outline) => {
                outline.visible = isHighlighted;
            });
    });
}

function pulseHighlight({
    model,
    selection,
    elapsedSeconds,
}: Readonly<{
    model: Readonly<MoleculeModel>;
    selection: Readonly<MoleculeSelection>;
    elapsedSeconds: number;
}>) {
    const glow =
        highlightGlow.min +
        ((highlightGlow.max - highlightGlow.min) *
            (1 - Math.cos(2 * Math.PI * highlightGlow.pulsesPerSecond * elapsedSeconds))) /
            2;
    getSelectionMeshes({
        model,
        selection,
    }).forEach((mesh) => {
        const color = mesh.material.color;
        const luminance = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
        mesh.material.emissiveIntensity =
            glow *
            Math.min(highlightGlowMaxBoost, highlightGlowReferenceLuminance / (luminance || 1));
    });
}

function findSelection({
    model,
    object,
}: Readonly<{
    /** Widened to plain objects so a raycast hit can be looked up without narrowing it first. */
    model: Readonly<{
        atomMeshes: ReadonlyArray<Readonly<Object3D>>;
        bondSticks: ReadonlyArray<
            Readonly<{
                sticks: ReadonlyArray<Readonly<Object3D>>;
            }>
        >;
    }>;
    object: Readonly<Object3D>;
}>): MoleculeSelection | undefined {
    const atomIndex = model.atomMeshes.indexOf(object);
    if (atomIndex !== -1) {
        return {
            type: MoleculeSelectionType.Atom,
            atomIndex,
        };
    }
    const bondIndex = model.bondSticks.findIndex(({sticks}) => {
        return sticks.includes(object);
    });
    return bondIndex === -1
        ? undefined
        : {
              type: MoleculeSelectionType.Bond,
              bondIndex,
          };
}

function createMoleculeModel(molecule: Readonly<Molecule>): MoleculeModel {
    const group = new Group();
    const atomRadii = molecule.atoms.map((atom) => {
        const info: Readonly<ChemicalElement> = chemicalElements[atom.element];
        return (info.vanDerWaalsRadius ?? fallbackVanDerWaalsRadius) * atomRadiusScale;
    });

    const coreRadii = atomRadii.map((radius) => radius * atomCoreFraction);

    const atomParts = molecule.atoms.map((atom, atomIndex) => {
        const info: Readonly<ChemicalElement> = chemicalElements[atom.element];
        const mesh = new Mesh(
            new SphereGeometry(assertWrap.isDefined(atomRadii[atomIndex]), 96, 64),
            new MeshPhysicalMaterial({
                color: info.color ?? fallbackAtomColor,
                /** How blurry the frosted glass makes what's behind it. */
                roughness: 0.4,
                roughnessMap: surfaceTexture,
                bumpMap: surfaceTexture,
                bumpScale: surfaceBumpScale,
                transmission: 0.5,
                /** A smooth clear coat over the frosted glass, so the shell stays shiny. */
                clearcoat: 1,
                clearcoatRoughness: 0.03,
            }),
        );
        mesh.position.copy(toVector3(atom.position));
        addSurfaceNoise({
            material: mesh.material,
            space: SurfaceNoiseSpace.SphereDirection,
        });
        addGlassShell({
            material: mesh.material,
        });
        const core = new Mesh(
            new SphereGeometry(assertWrap.isDefined(coreRadii[atomIndex]), 96, 64),
            new MeshStandardMaterial({
                color: info.color ?? fallbackAtomColor,
                roughness: 0.5,
                roughnessMap: surfaceTexture,
                bumpMap: surfaceTexture,
                bumpScale: surfaceBumpScale,
            }),
        );
        addSurfaceNoise({
            material: core.material,
            space: SurfaceNoiseSpace.SphereDirection,
        });
        addMarbleGlow(core.material);
        core.castShadow = true;
        core.receiveShadow = true;
        mesh.add(core);
        addHighlightOutline({
            mesh,
            scale: {
                x: 1.2,
                y: 1.2,
                z: 1.2,
            },
        });
        /** A shadow map can't be partly see-through, so only the core casts a shadow. */
        mesh.receiveShadow = true;
        group.add(mesh);
        return {
            mesh,
            core,
        };
    });
    const atomMeshes = atomParts.map(({mesh}) => mesh);
    const atomCores = atomParts.map(({core}) => core);

    /** Center the molecule so orbiting rotates around its middle rather than its first atom. */
    group.position.sub(new Box3().setFromObject(group).getCenter(new Vector3()));

    const bondSticks = molecule.bonds.map((bond) => {
        const radius = bond.order === BondOrder.Single ? bondRadius : multipleBondRadius;
        /**
         * Sticks run along the pivot's Y axis, which is the axis `CylinderGeometry` is built on.
         * They're 1 unit tall so the pivot's Y scale sets the bond length as atoms vibrate.
         */
        const pivot = new Group();
        const sticks = createArray(bond.order, (stickIndex) => {
            return (stickIndex - (bond.order - 1) / 2) * multipleBondSpacing;
        }).map((offset) => {
            const mesh = new Mesh(
                /** Open ended and double sided, so sticks are hollow like straws. */
                new CylinderGeometry(radius, radius, 1, 64, 1, true),
                new MeshPhysicalMaterial({
                    color: bondColor,
                    roughness: 0.6,
                    roughnessMap: surfaceTexture,
                    bumpMap: surfaceTexture,
                    /** Fainter than on atoms, since a stick's grain shows more along its length. */
                    bumpScale: surfaceBumpScale / 2,
                    side: DoubleSide,
                    /**
                     * Transmission rather than `transparent`, since three.js leaves `transparent`
                     * objects out of what the glass atom shells show through them.
                     */
                    transmission: 0.35,
                }),
            );
            addSurfaceNoise({
                material: mesh.material,
                space: SurfaceNoiseSpace.ScaledObject,
            });
            addGlassShell({
                material: mesh.material,
                /** Much less than the stick's roughness, so what's behind a stick stays clear. */
                transmissionRoughness: 0.15,
            });
            mesh.position.x = offset;
            /** Only widen the outline; its length already reaches into both atoms. */
            addHighlightOutline({
                mesh,
                scale: {
                    x: 1.6,
                    y: 1,
                    z: 1.6,
                },
            });
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            pivot.add(mesh);
            return mesh;
        });
        group.add(pivot);

        return {
            bond,
            pivot,
            sticks,
        };
    });

    const allSticks = bondSticks.flatMap(({bond, sticks}) => {
        return sticks.map((stick) => {
            return {
                stick,
                radius: bond.order === BondOrder.Single ? bondRadius : multipleBondRadius,
            };
        });
    });
    const selfReflections = createSelfReflections({
        spheres: atomCores.map((core, atomIndex) => {
            return {
                color: core.material.color,
                radius: assertWrap.isDefined(coreRadii[atomIndex]),
            };
        }),
        cylinders: allSticks.map(({stick, radius}) => {
            return {
                color: stick.material.color,
                radius,
            };
        }),
    });
    atomMeshes.forEach((mesh, atomIndex) => {
        addSelfReflections({
            material: mesh.material,
            reflections: selfReflections,
            selfSphereIndex: atomIndex,
        });
    });

    function getAtomOccluder({
        atomIndex,
        radii,
    }: Readonly<{
        atomIndex: number;
        radii: ReadonlyArray<number>;
    }>): Occluder {
        const center = assertWrap.isDefined(atomMeshes[atomIndex]).getWorldPosition(new Vector3());
        return {
            start: center,
            end: center,
            radius: assertWrap.isDefined(radii[atomIndex]),
        };
    }

    /** Shells and cores both get contact shading, since bonds pass through each one's surface. */
    const atomContactShadingUpdates = [
        {
            meshes: atomCores,
            radii: coreRadii,
        },
        {
            meshes: atomMeshes,
            radii: atomRadii,
        },
    ].flatMap(({meshes, radii}) => {
        return meshes.map((mesh, atomIndex) => {
            const setOccluders = addContactShading({
                material: mesh.material,
                darkestBrightness: 0.75,
            });
            const atomPosition = toVector3(
                assertWrap.isDefined(molecule.atoms[atomIndex]).position,
            );
            const touchingAtomIndexes = molecule.atoms
                .map((otherAtom, otherIndex) => otherIndex)
                .filter((otherIndex) => {
                    return (
                        otherIndex !== atomIndex &&
                        atomPosition.distanceTo(
                            toVector3(assertWrap.isDefined(molecule.atoms[otherIndex]).position),
                        ) <
                            assertWrap.isDefined(radii[atomIndex]) +
                                assertWrap.isDefined(radii[otherIndex]) +
                                contactReach
                    );
                });
            const touchingBondSticks = bondSticks.filter(({bond}) => {
                return bond.atomIndexes.includes(atomIndex);
            });

            return () => {
                setOccluders([
                    ...touchingAtomIndexes.map((otherIndex) => {
                        return getAtomOccluder({
                            atomIndex: otherIndex,
                            radii,
                        });
                    }),
                    ...touchingBondSticks.flatMap(({bond, sticks}) => {
                        return sticks.map((stick): Occluder => {
                            return {
                                /** Sticks are 1 unit tall, centered on their origin. */
                                start: stick.localToWorld(new Vector3(0, -0.5, 0)),
                                end: stick.localToWorld(new Vector3(0, 0.5, 0)),
                                radius:
                                    bond.order === BondOrder.Single
                                        ? bondRadius
                                        : multipleBondRadius,
                            };
                        });
                    }),
                ]);
            };
        });
    });
    const stickContactShadingUpdates = bondSticks.flatMap(({bond, sticks}) => {
        return sticks.map((stick) => {
            const setOccluders = addContactShading({
                material: stick.material,
                darkestBrightness: 0.7,
                /** Wider than the default, so the band reads on a stick this thick. */
                reach: 0.12,
            });
            return () => {
                setOccluders(
                    bond.atomIndexes.map((atomIndex) => {
                        return getAtomOccluder({
                            atomIndex,
                            radii: atomRadii,
                        });
                    }),
                );
            };
        });
    });

    [
        ...atomMeshes,
        ...atomCores,
        ...allSticks.map(({stick}) => stick),
    ].forEach((mesh) => {
        addFullyShadowedShine(mesh.material);
    });

    return {
        molecule,
        group,
        atomMeshes,
        atomCores,
        bondSticks,
        contactShadingUpdates: [
            ...atomContactShadingUpdates,
            ...stickContactShadingUpdates,
        ],
        updateSelfReflections() {
            selfReflections.update({
                sphereCenters: atomMeshes.map((mesh) => mesh.getWorldPosition(new Vector3())),
                cylinderEnds: allSticks.map(({stick}) => {
                    return {
                        /** Sticks are 1 unit tall, centered on their origin. */
                        start: stick.localToWorld(new Vector3(0, -0.5, 0)),
                        end: stick.localToWorld(new Vector3(0, 0.5, 0)),
                    };
                }),
            });
        },
    };
}

/**
 * Moves atoms to their vibrating positions, stretches bonds to follow them, and turns each
 * multi-stick bond around its own axis so its sticks spread across the screen and never hide behind
 * each other.
 */
function updateMoleculeModel({
    model,
    elapsedSeconds,
    cameraPosition,
    enableVibration,
}: Readonly<{
    model: Readonly<MoleculeModel>;
    elapsedSeconds: number;
    /** In the model group's own space, which turns with the molecule. */
    cameraPosition: Readonly<Vector3>;
    enableVibration: boolean;
}>) {
    const atomPositions = enableVibration
        ? getVibratingAtomPositions({
              molecule: model.molecule,
              elapsedSeconds,
          })
        : model.molecule.atoms.map((atom) => toVector3(atom.position));

    model.atomMeshes.forEach((mesh, atomIndex) => {
        mesh.position.copy(assertWrap.isDefined(atomPositions[atomIndex]));
    });

    model.bondSticks.forEach(({bond, pivot}) => {
        const [
            start,
            end,
        ] = bond.atomIndexes.map((atomIndex) => {
            return assertWrap.isDefined(
                atomPositions[atomIndex],
                `Bond in '${model.molecule.name}' references missing atom ${atomIndex}.`,
            );
        }) satisfies Vector3[] as [
            Vector3,
            Vector3,
        ];
        const bondVector = end.clone().sub(start);
        const bondDirection = bondVector.clone().normalize();

        pivot.position.copy(start.clone().add(end).multiplyScalar(0.5));
        pivot.scale.y = bondVector.length();

        const towardCamera = cameraPosition.clone().sub(pivot.position);
        const spreadDirection = new Vector3().crossVectors(bondDirection, towardCamera);

        /**
         * Single bonds have nothing to spread, and a bond pointing straight at the camera looks the
         * same at any spread.
         */
        if (bond.order === BondOrder.Single || spreadDirection.lengthSq() < 1e-9) {
            pivot.quaternion.setFromUnitVectors(new Vector3(0, 1, 0), bondDirection);
        } else {
            spreadDirection.normalize();
            pivot.quaternion.setFromRotationMatrix(
                new Matrix4().makeBasis(
                    spreadDirection,
                    bondDirection,
                    new Vector3().crossVectors(spreadDirection, bondDirection),
                ),
            );
        }
    });
}

/** Tighter than the box's bounding sphere, which pads flat molecules like benzene. */
function getMoleculeRadius(group: Readonly<Group>) {
    const center = new Box3().setFromObject(group).getCenter(new Vector3());
    return Math.max(
        ...group.children.map((child) => {
            return child instanceof Mesh && child.geometry instanceof SphereGeometry
                ? child.getWorldPosition(new Vector3()).distanceTo(center) +
                      child.geometry.parameters.radius
                : 0;
        }),
    );
}

function disposeGroup(group: Readonly<Group>) {
    group.traverse((child) => {
        if (child instanceof Mesh) {
            child.geometry.dispose();
            ensureArray(child.material).forEach((material) => {
                material.dispose();
            });
        }
    });
}

export function createMoleculeScene() {
    const renderer = new WebGLRenderer({
        antialias: true,
        alpha: true,
    });
    renderer.setPixelRatio(globalThis.devicePixelRatio);
    renderer.shadowMap.enabled = true;

    const scene = new Scene();
    scene.add(new AmbientLight(0xff_ff_ff, 0.6));
    const camera = new PerspectiveCamera(45, 1, 0.01, 100);
    camera.position.set(0, Math.sin(cameraElevationRadians), Math.cos(cameraElevationRadians));
    scene.add(camera);

    /**
     * Nearly overhead so the ground shadow lands under the molecule rather than behind it, but
     * tipped toward the camera enough to still light the atoms' fronts. It aims at the world
     * origin, where the molecule is centered.
     */
    const keyLight = new DirectionalLight(0xff_ff_ff, 2);
    keyLight.position.set(1, 10, 2.5);
    scene.add(keyLight);

    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(1024, 1024);
    keyLight.shadow.radius = 4;
    keyLight.shadow.normalBias = 0.02;
    keyLight.shadow.intensity = shadowIntensity;

    /**
     * `ShadowMaterial` draws nothing but the shadow, so the ground blends into the CSS background
     * behind the transparent canvas, gradient included.
     */
    const ground = new Mesh(
        new PlaneGeometry(1, 1),
        new ShadowMaterial({
            /** The ground's shadow is also weakened by the shadow intensity, so this undoes that. */
            opacity: groundShadowOpacity / shadowIntensity,
        }),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    /**
     * Dragging spins this instead of orbiting the camera, so the ground and light stay put. Each
     * model group is offset to center its molecule here, so spinning the model group itself would
     * swing the molecule around.
     */
    const turntable = new Group();
    turntable.quaternion.copy(startingOrientation);
    scene.add(turntable);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableRotate = false;
    controls.mouseButtons = {
        LEFT: null,
        MIDDLE: MOUSE.PAN,
        RIGHT: null,
    };
    controls.minDistance = 0.2;

    const current: {
        model: MoleculeModel | undefined;
        enableVibration: boolean;
        selection: MoleculeSelection | undefined;
        onSelectionChange: ((selection: MoleculeSelection | undefined) => void) | undefined;
    } = {
        model: undefined,
        enableVibration: false,
        selection: undefined,
        onSelectionChange: undefined,
    };

    function select(selection: Readonly<MoleculeSelection> | undefined) {
        if (current.model && current.selection) {
            setHighlight({
                model: current.model,
                selection: current.selection,
                isHighlighted: false,
            });
        }
        current.selection = selection;
        if (current.model && selection) {
            setHighlight({
                model: current.model,
                selection,
                isHighlighted: true,
            });
        }
        current.onSelectionChange?.(selection);
    }

    const raycaster = new Raycaster();
    const pointerDownPosition = new Vector2();
    const drag: {
        lastPosition: Vector2 | undefined;
        lastMoveMilliseconds: number;
        pixelsPerSecond: Vector2;
    } = {
        lastPosition: undefined,
        lastMoveMilliseconds: 0,
        pixelsPerSecond: new Vector2(),
    };
    /** Undefined while the user holds the molecule still after grabbing it. */
    const spin: {
        radiansPerSecond: number | undefined;
    } = {
        radiansPerSecond: autoSpinRadiansPerSecond,
    };

    renderer.domElement.addEventListener('pointerdown', (event) => {
        pointerDownPosition.set(event.clientX, event.clientY);
        if (event.button === 0) {
            drag.lastPosition = new Vector2(event.clientX, event.clientY);
            drag.lastMoveMilliseconds = event.timeStamp;
            drag.pixelsPerSecond.set(0, 0);
        }
    });
    renderer.domElement.addEventListener('pointermove', (event) => {
        if (!drag.lastPosition) {
            return;
        }
        /** Same speed as `OrbitControls`: dragging the canvas's full height turns a full circle. */
        const radiansPerPixel = (2 * Math.PI) / renderer.domElement.clientHeight;
        turntable.quaternion
            .premultiply(
                new Quaternion().setFromAxisAngle(
                    new Vector3(0, 1, 0),
                    (event.clientX - drag.lastPosition.x) * radiansPerPixel,
                ),
            )
            .premultiply(
                new Quaternion().setFromAxisAngle(
                    new Vector3(1, 0, 0),
                    (event.clientY - drag.lastPosition.y) * radiansPerPixel,
                ),
            );
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
    renderer.domElement.addEventListener('pointercancel', () => {
        drag.lastPosition = undefined;
    });
    renderer.domElement.addEventListener('pointerup', (event) => {
        if (
            drag.lastPosition &&
            event.timeStamp - drag.lastMoveMilliseconds < flingMaxPauseMilliseconds &&
            drag.pixelsPerSecond.length() > flingPixelsPerSecond
        ) {
            spin.radiansPerSecond =
                (drag.pixelsPerSecond.x * 2 * Math.PI) / renderer.domElement.clientHeight;
        }
        drag.lastPosition = undefined;
        const model = current.model;
        if (
            !model ||
            pointerDownPosition.distanceTo(new Vector2(event.clientX, event.clientY)) >
                clickMoveTolerance
        ) {
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
        /** Outlines are hit too, but they aren't atoms or bonds so they find no selection. */
        const hitSelection = raycaster
            .intersectObject(model.group)
            .map(({object}) => {
                return findSelection({
                    model,
                    object,
                });
            })
            .find(check.isDefined);
        select(check.deepEquals(hitSelection, current.selection) ? undefined : hitSelection);
    });

    const frameClock: {
        lastMilliseconds: number | undefined;
    } = {
        lastMilliseconds: undefined,
    };

    renderer.setAnimationLoop((timeMilliseconds) => {
        const frameSeconds =
            (timeMilliseconds - (frameClock.lastMilliseconds ?? timeMilliseconds)) / 1000;
        frameClock.lastMilliseconds = timeMilliseconds;
        if (spin.radiansPerSecond != undefined) {
            /** A fling keeps its direction as it eases down to the idle speed. */
            const idleRadiansPerSecond =
                Math.sign(spin.radiansPerSecond || 1) * autoSpinRadiansPerSecond;
            spin.radiansPerSecond +=
                (idleRadiansPerSecond - spin.radiansPerSecond) *
                Math.min(
                    1,
                    flingSlowdown * Math.sqrt(Math.abs(spin.radiansPerSecond)) * frameSeconds,
                );
            turntable.quaternion.premultiply(
                new Quaternion().setFromAxisAngle(
                    new Vector3(0, 1, 0),
                    spin.radiansPerSecond * frameSeconds,
                ),
            );
        }
        controls.update();
        if (current.model) {
            updateMoleculeModel({
                model: current.model,
                elapsedSeconds: timeMilliseconds / 1000,
                cameraPosition: current.model.group.worldToLocal(camera.position.clone()),
                enableVibration: current.enableVibration,
            });
            current.model.group.updateWorldMatrix(true, true);
            current.model.contactShadingUpdates.forEach((updateContactShading) => {
                updateContactShading();
            });
            current.model.updateSelfReflections();
            if (current.selection) {
                pulseHighlight({
                    model: current.model,
                    selection: current.selection,
                    elapsedSeconds: timeMilliseconds / 1000,
                });
            }
        }
        renderer.render(scene, camera);
    });

    return {
        canvas: renderer.domElement,
        setEnableVibration(enableVibration: boolean) {
            current.enableVibration = enableVibration;
        },
        listenToSelection(onSelectionChange: (selection: MoleculeSelection | undefined) => void) {
            current.onSelectionChange = onSelectionChange;
        },
        setMolecule(molecule: Readonly<Molecule>) {
            if (current.model?.molecule === molecule) {
                return;
            }
            select(undefined);
            if (current.model) {
                turntable.remove(current.model.group);
                disposeGroup(current.model.group);
            }
            current.model = createMoleculeModel(molecule);
            turntable.add(current.model.group);

            const moleculeRadius = getMoleculeRadius(current.model.group);
            const fitDistance =
                (moleculeRadius / Math.sin((camera.fov * Math.PI) / 360)) * fitDistanceMargin;
            camera.position.setLength(fitDistance);
            controls.maxDistance = fitDistance * 3;

            ground.position.y = -moleculeRadius - groundGap;
            ground.scale.setScalar(moleculeRadius * 40);

            keyLight.position.setLength(moleculeRadius * 10);
            keyLight.shadow.camera.left = -moleculeRadius * 1.5;
            keyLight.shadow.camera.right = moleculeRadius * 1.5;
            keyLight.shadow.camera.top = moleculeRadius * 1.5;
            keyLight.shadow.camera.bottom = -moleculeRadius * 1.5;
            keyLight.shadow.camera.far = moleculeRadius * 20;
            keyLight.shadow.camera.updateProjectionMatrix();
        },
        resize({width, height}: Readonly<{width: number; height: number}>) {
            if (!width || !height) {
                return;
            }
            renderer.setSize(width, height, false);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        },
        dispose() {
            renderer.setAnimationLoop(null);
            controls.dispose();
            if (current.model) {
                disposeGroup(current.model.group);
            }
            ground.geometry.dispose();
            ground.material.dispose();
            renderer.dispose();
        },
    };
}
