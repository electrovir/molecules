// cspell:words raycaster ångströms wavenumber occluder occluders pmrem
import {assertWrap, check} from '@augment-vir/assert';
import {createArray, ensureArray, getOrSet} from '@augment-vir/common';
import {
    AmbientLight,
    BackSide,
    Box3,
    type BufferGeometry,
    Color,
    CylinderGeometry,
    DirectionalLight,
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
    TOUCH,
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
import {
    addContactShading,
    contactReach,
    createContactShadingData,
    type Occluder,
} from './contact-shading.js';
import {addGlassShell, addMarbleGlow, addSelfReflections, createSelfReflections} from './marble.js';
import {type MoleculeSelection, MoleculeSelectionType} from './molecule-selection.js';
import {createRenderQualityScaler, RenderEffect, type RenderQuality} from './render-quality.js';
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
/**
 * Enough that a sphere's outline stays smooth when zoomed all the way in. Every vertex is processed
 * again for each shadow and glass pass, so more is a real cost on tablets.
 */
const sphereSegments = {
    around: 48,
    vertical: 32,
};
const stickRadialSegments = 24;
/** PubChem has no color or van der Waals radius for the superheavy elements (Fm and beyond). */
const fallbackAtomColor = 0xff_14_93;
const fallbackVanDerWaalsRadius = 2;
/** Extra room around the molecule when zooming the camera to fit it. */
const fitDistanceMargin = 1.2;
/** When the viewer's shorter side is below this many CSS pixels, the camera starts farther out. */
const smallScreenPixels = 600;
const smallScreenFitDistanceMargin = 1.3;
/** How far the camera looks down at the molecule, so the ground and its shadow aren't seen edge-on. */
const cameraElevationRadians = (25 * Math.PI) / 180;
/**
 * The first molecule's starting turn, kept across molecule changes: its +X end raised a little and
 * swung toward the camera, then its top tipped away from the camera, so a molecule laid out flat is
 * seen at an angle instead of side-on.
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

/** Where the molecule's parts are in world space this frame. */
type PartPositions = {
    atomCenters: Vector3[];
    /** Indexed by bond, then by stick within the bond. */
    stickEnds: {
        start: Vector3;
        end: Vector3;
    }[][];
};

type MoleculeModel = {
    molecule: Readonly<Molecule>;
    group: Group;
    /** Each atom's glass shell, which is the atom's full size. Its core is a child. */
    atomMeshes: Mesh<BufferGeometry, MeshStandardMaterial>[];
    atomCores: Mesh<BufferGeometry, MeshStandardMaterial>[];
    bondSticks: BondSticks[];
    /**
     * Moves contact shading and reflections of the molecule in itself to where its parts are now.
     * World matrices must be up to date first.
     */
    updateShading: () => void;
    setDisabledEffects: (disabledEffects: ReadonlyArray<RenderEffect>) => void;
    dispose: () => void;
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

    /** Atoms of the same element share one geometry, as do sticks of the same radius. */
    const sphereGeometries: Record<number, SphereGeometry> = {};
    const stickGeometries: Record<number, CylinderGeometry> = {};

    function getSphereGeometry(radius: number) {
        return getOrSet(sphereGeometries, radius, () => {
            return new SphereGeometry(radius, sphereSegments.around, sphereSegments.vertical);
        });
    }

    const atomParts = molecule.atoms.map((atom, atomIndex) => {
        const info: Readonly<ChemicalElement> = chemicalElements[atom.element];
        const mesh = new Mesh(
            getSphereGeometry(assertWrap.isDefined(atomRadii[atomIndex])),
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
            getSphereGeometry(assertWrap.isDefined(coreRadii[atomIndex])),
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
                /**
                 * Open ended and single sided, since both ends sit inside atom cores. Double sided
                 * transmission makes three.js draw every stick again each frame for what shows
                 * through glass.
                 */
                getOrSet(stickGeometries, radius, () => {
                    return new CylinderGeometry(radius, radius, 1, stickRadialSegments, 1, true);
                }),
                new MeshPhysicalMaterial({
                    color: bondColor,
                    roughness: 0.6,
                    roughnessMap: surfaceTexture,
                    bumpMap: surfaceTexture,
                    /** Fainter than on atoms, since a stick's grain shows more along its length. */
                    bumpScale: surfaceBumpScale / 2,
                    /**
                     * Transmission rather than `transparent`, since three.js leaves `transparent`
                     * objects out of what the glass atom shells show through them.
                     */
                    transmission: 0.15,
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
        positions,
    }: Readonly<{
        atomIndex: number;
        radii: ReadonlyArray<number>;
        positions: Readonly<PartPositions>;
    }>): Occluder {
        const center = assertWrap.isDefined(positions.atomCenters[atomIndex]);
        return {
            start: center,
            end: center,
            radius: assertWrap.isDefined(radii[atomIndex]),
        };
    }

    const contactShadingData = createContactShadingData({
        materialCount: atomMeshes.length + atomCores.length + allSticks.length,
    });
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
                contactShadingData,
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
            const touchingBondIndexes = molecule.bonds
                .map((bond, bondIndex) => bondIndex)
                .filter((bondIndex) => {
                    return assertWrap
                        .isDefined(molecule.bonds[bondIndex])
                        .atomIndexes.includes(atomIndex);
                });

            return (positions: Readonly<PartPositions>) => {
                setOccluders([
                    ...touchingAtomIndexes.map((otherIndex) => {
                        return getAtomOccluder({
                            atomIndex: otherIndex,
                            radii,
                            positions,
                        });
                    }),
                    ...touchingBondIndexes.flatMap((bondIndex) => {
                        const radius =
                            assertWrap.isDefined(molecule.bonds[bondIndex]).order ===
                            BondOrder.Single
                                ? bondRadius
                                : multipleBondRadius;
                        return assertWrap
                            .isDefined(positions.stickEnds[bondIndex])
                            .map(({start, end}): Occluder => {
                                return {
                                    start,
                                    end,
                                    radius,
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
                contactShadingData,
                darkestBrightness: 0.7,
                /** Wider than the default, so the band reads on a stick this thick. */
                reach: 0.12,
            });
            return (positions: Readonly<PartPositions>) => {
                setOccluders(
                    bond.atomIndexes.map((atomIndex) => {
                        return getAtomOccluder({
                            atomIndex,
                            radii: atomRadii,
                            positions,
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

    const transmissionMaterials = [
        ...atomMeshes,
        ...allSticks.map(({stick}) => stick),
    ]
        .map((mesh) => mesh.material)
        .filter((material) => material instanceof MeshPhysicalMaterial)
        .map((material) => {
            return {
                material,
                transmission: material.transmission,
            };
        });

    return {
        molecule,
        group,
        atomMeshes,
        atomCores,
        bondSticks,
        setDisabledEffects(disabledEffects) {
            const isSelfReflectionsEnabled = !disabledEffects.includes(
                RenderEffect.SelfReflections,
            );
            if (isSelfReflectionsEnabled !== selfReflections.isEnabled()) {
                selfReflections.setEnabled(isSelfReflectionsEnabled);
                atomMeshes.forEach((mesh) => {
                    mesh.material.needsUpdate = true;
                });
            }
            const isTransmissionEnabled = !disabledEffects.includes(RenderEffect.Transmission);
            transmissionMaterials.forEach(({material, transmission}) => {
                material.transmission = isTransmissionEnabled ? transmission : 0;
            });
        },
        dispose() {
            disposeGroup(group);
            selfReflections.dispose();
            contactShadingData.dispose();
        },
        updateShading() {
            const positions: PartPositions = {
                atomCenters: atomMeshes.map((mesh) => {
                    return new Vector3().setFromMatrixPosition(mesh.matrixWorld);
                }),
                stickEnds: bondSticks.map(({sticks}) => {
                    return sticks.map((stick) => {
                        return {
                            /** Sticks are 1 unit tall, centered on their origin. */
                            start: new Vector3(0, -0.5, 0).applyMatrix4(stick.matrixWorld),
                            end: new Vector3(0, 0.5, 0).applyMatrix4(stick.matrixWorld),
                        };
                    });
                }),
            };
            atomContactShadingUpdates.forEach((updateContactShading) => {
                updateContactShading(positions);
            });
            stickContactShadingUpdates.forEach((updateContactShading) => {
                updateContactShading(positions);
            });
            contactShadingData.upload();
            if (selfReflections.isEnabled()) {
                selfReflections.update({
                    sphereCenters: positions.atomCenters,
                    cylinderEnds: positions.stickEnds.flat(),
                });
            }
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
    renderer.shadowMap.enabled = true;
    /**
     * What shows through glass is blurred anyway, so on high density screens it's rendered at CSS
     * pixel size, a quarter of the pixels.
     */
    renderer.transmissionResolutionScale = Math.min(1, 1 / globalThis.devicePixelRatio);

    const scene = new Scene();
    /** The animation loop updates world matrices itself before contact shading reads them. */
    scene.matrixWorldAutoUpdate = false;
    scene.add(new AmbientLight(0xff_ff_ff, 0.6));
    const camera = new PerspectiveCamera(45, 1, 0.1, 100);
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
        enableVibration: boolean;
        selection: MoleculeSelection | undefined;
        onSelectionChange: ((selection: MoleculeSelection | undefined) => void) | undefined;
        onRenderQualityChange: ((quality: Readonly<RenderQuality>) => void) | undefined;
        rightInsetPixels: number;
    } = {
        model: undefined,
        enableVibration: false,
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
            const isShadowsEnabled = !disabledEffects.includes(RenderEffect.Shadows);
            keyLight.castShadow = isShadowsEnabled;
            ground.visible = isShadowsEnabled;
            current.model?.setDisabledEffects(disabledEffects);
        },
    });

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
        if (!drag.lastPosition || event.pointerId !== drag.pointerId) {
            return;
        } else if (
            !drag.isOrbiting &&
            pointerDownPosition.distanceTo(new Vector2(event.clientX, event.clientY)) <=
                clickMoveTolerance
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
        const newSelection = check.deepEquals(hitSelection, current.selection)
            ? undefined
            : hitSelection;
        if (newSelection) {
            spin.radiansPerSecond = undefined;
        }
        select(newSelection);
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
        if (current.model) {
            updateMoleculeModel({
                model: current.model,
                elapsedSeconds: timeMilliseconds / 1000,
                cameraPosition: current.model.group.worldToLocal(camera.position.clone()),
                enableVibration: current.enableVibration,
            });
        }
        scene.updateMatrixWorld();
        if (current.model) {
            current.model.updateShading();
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
            if (current.model) {
                turntable.remove(current.model.group);
                current.model.dispose();
            }
            current.model = createMoleculeModel(molecule);
            current.model.setDisabledEffects(qualityScaler.getQuality().disabledEffects);
            turntable.add(current.model.group);

            const moleculeRadius = getMoleculeRadius(current.model.group);
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
                (moleculeRadius / Math.sin(narrowestHalfFov)) *
                fitDistanceMargin *
                (Math.min(viewerSize.x, viewerSize.y) < smallScreenPixels
                    ? smallScreenFitDistanceMargin
                    : 1);
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
            updateProjection();
        },
        setRightInset(pixels: number) {
            current.rightInsetPixels = pixels;
            updateProjection();
        },
        dispose() {
            renderer.setAnimationLoop(null);
            controls.dispose();
            if (current.model) {
                current.model.dispose();
            }
            ground.geometry.dispose();
            ground.material.dispose();
            renderer.dispose();
        },
    };
}

export type MoleculeScene = ReturnType<typeof createMoleculeScene>;
