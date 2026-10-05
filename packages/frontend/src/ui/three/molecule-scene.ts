import {assertWrap, check} from '@augment-vir/assert';
import {type PartialWithUndefined} from '@augment-vir/common';
import {
    DepthTexture,
    Euler,
    FloatType,
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
    WebGLRenderTarget,
} from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {type ChemicalElementSymbol} from '../../data/chemical-element.js';
import {type Molecule} from '../../data/molecule.js';
import {type AtomModel, createAtomModel} from './atom-model.js';
import {groundGap, towardLight} from './ball-and-stick-model.js';
import {findClearestYaw} from './clearest-yaw.js';
import {frontDepthLayer, type ImpostorSceneUniforms} from './impostors.js';
import {createMoleculeModel, type MoleculeModel} from './molecule-model.js';
import {type MoleculeSelection, MoleculeSelectionType} from './molecule-selection.js';
import {createRenderQualityScaler, type RenderQuality} from './render-quality.js';

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
/** Selected atoms and bonds glow in their own color, pulsing between these intensities. */
const highlightGlow = {
    min: 0.15,
    max: 0.5,
    pulsesPerSecond: 0.8,
};
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
    const frontDepthTarget = new WebGLRenderTarget(1, 1, {
        depthTexture: new DepthTexture(1, 1, FloatType),
    });
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
        frontDepth: {
            value: assertWrap.isDefined(frontDepthTarget.depthTexture),
        },
    };
    const worldToLocal = new Matrix4();
    const drawingBufferSize = new Vector2();

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
        model: MoleculeModel | AtomModel | undefined;
        /** The current atom's orbital shown alone. */
        orbitalSelection: string | undefined;
        /** Kept here so it carries over when the atom changes. */
        orbitalOpacity: number;
        selection: MoleculeSelection | undefined;
        onSelectionChange:
            | ((
                  selection: MoleculeSelection | undefined,
                  params: Readonly<{isPicked: boolean}>,
              ) => void)
            | undefined;
        onRenderQualityChange: ((quality: Readonly<RenderQuality>) => void) | undefined;
        rightInsetPixels: number;
        /** The distance the camera was last fit to, which the user's zoom is relative to. */
        fitDistance: number | undefined;
    } = {
        model: undefined,
        orbitalSelection: undefined,
        orbitalOpacity: 0.08,
        selection: undefined,
        onSelectionChange: undefined,
        onRenderQualityChange: undefined,
        rightInsetPixels: 0,
        fitDistance: undefined,
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

    /**
     * Zooms the camera so the molecule fits the uncovered part of the viewer. A refit after a
     * resize keeps the user's zoom, scaled by how much the fit changed.
     */
    function fitCamera() {
        const viewerSize = renderer.getSize(new Vector2());
        if (!current.model || !viewerSize.x || !viewerSize.y) {
            return;
        }
        const moleculeRadius = current.model.radius;
        const verticalHalfFov = (camera.fov * Math.PI) / 360;
        /** In a portrait viewer, the sides cut the molecule off before the top and bottom do. */
        const narrowestHalfFov = Math.min(
            verticalHalfFov,
            Math.atan(
                (Math.tan(verticalHalfFov) * (viewerSize.x - getRightInsetPixels(viewerSize.x))) /
                    viewerSize.y,
            ),
        );
        const fitDistance =
            (Math.max(moleculeRadius, minimumFitRadius) / Math.sin(narrowestHalfFov)) *
            fitDistanceMargin *
            (Math.min(viewerSize.x, viewerSize.y) < smallScreenPixels
                ? smallScreenFitDistanceMargin
                : 1);
        camera.position.setLength(
            current.fitDistance == undefined
                ? fitDistance
                : camera.position.length() * (fitDistance / current.fitDistance),
        );
        current.fitDistance = fitDistance;
        controls.maxDistance = fitDistance * 3;
        /** Reaches past the molecule and the far corner of its ground shadow at full zoom-out. */
        camera.far = controls.maxDistance + moleculeRadius * 3 + groundGap + 2;
        camera.updateProjectionMatrix();
    }

    const qualityScaler = createRenderQualityScaler({
        applyQuality({resolutionScale, disabledEffects}) {
            /** Past 2, more pixels are hard to see but cost as much as any others. */
            renderer.setPixelRatio(Math.min(globalThis.devicePixelRatio, 2) * resolutionScale);
            current.model?.setDisabledEffects(disabledEffects);
        },
    });

    function isAtomModel(model: MoleculeModel | AtomModel | undefined): model is AtomModel {
        return !!model && 'setOrbitalSelection' in model;
    }

    /**
     * The animation loop lights up the selection. On an atom, selecting an orbital or the nucleus
     * also replaces the orbital shown alone.
     */
    function select(
        selection: Readonly<MoleculeSelection> | undefined,
        {isPicked}: Readonly<{isPicked: boolean}>,
    ) {
        current.selection = selection;
        if (isAtomModel(current.model)) {
            current.orbitalSelection =
                selection?.type === MoleculeSelectionType.Orbital ? selection.orbitalId : undefined;
            current.model.setOrbitalSelection(current.orbitalSelection);
        }
        current.onSelectionChange?.(selection, {
            isPicked,
        });
    }

    /** Swaps in a new molecule or atom, disposing the old one. */
    function showModel(model: MoleculeModel | AtomModel) {
        select(undefined, {
            isPicked: false,
        });
        if (current.model) {
            turntable.remove(current.model.group);
            scene.remove(current.model.groundShadow.mesh);
            current.model.dispose();
        }
        current.model = model;
        current.orbitalSelection = undefined;
        model.setDisabledEffects(qualityScaler.getQuality().disabledEffects);
        turntable.add(model.group);
        if (!isSnapshot) {
            scene.add(model.groundShadow.mesh);
        }
        current.fitDistance = undefined;
        fitCamera();
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
        /**
         * An atom's electrons take the idle spin, so a flung atom spins on its own and slows to a
         * stop.
         */
        atomFlingRadiansPerSecond: number;
        lastTouchMilliseconds: number;
    } = {
        radiansPerSecond: autoSpinRadiansPerSecond,
        atomFlingRadiansPerSecond: 0,
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
        spin.atomFlingRadiansPerSecond = 0;
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
            const flingRadiansPerSecond =
                (drag.pixelsPerSecond.x * 2 * Math.PI) / renderer.domElement.clientHeight;
            if (isAtomModel(current.model)) {
                spin.atomFlingRadiansPerSecond = flingRadiansPerSecond;
                spin.radiansPerSecond = 0;
            } else {
                spin.radiansPerSecond = flingRadiansPerSecond;
            }
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
        /** The nucleus sits still at the center, so the electrons can keep orbiting around it. */
        if (newSelection && newSelection.type !== MoleculeSelectionType.Nucleus) {
            spin.radiansPerSecond = undefined;
            spin.atomFlingRadiansPerSecond = 0;
        }
        select(newSelection, {
            isPicked: true,
        });
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
            if (!isAtomModel(current.model)) {
                turn.yawRadians += spin.radiansPerSecond * frameSeconds;
                applyTurn();
            }
        }
        if (spin.atomFlingRadiansPerSecond && isAtomModel(current.model)) {
            spin.atomFlingRadiansPerSecond -=
                spin.atomFlingRadiansPerSecond *
                Math.min(
                    1,
                    flingSlowdown *
                        Math.sqrt(
                            Math.max(
                                Math.abs(spin.atomFlingRadiansPerSecond),
                                autoSpinRadiansPerSecond,
                            ),
                        ) *
                        frameSeconds,
                );
            if (Math.abs(spin.atomFlingRadiansPerSecond) < autoSpinRadiansPerSecond / 10) {
                spin.atomFlingRadiansPerSecond = 0;
            }
            turn.yawRadians += spin.atomFlingRadiansPerSecond * frameSeconds;
            applyTurn();
        }
        controls.update();
        scene.updateMatrixWorld();
        renderer.getDrawingBufferSize(drawingBufferSize);
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
                /** An atom's idle motion is its electrons orbiting, paced like the idle spin. */
                orbitSeconds:
                    ((spin.radiansPerSecond ?? 0) / autoSpinRadiansPerSecond) * frameSeconds,
                pointPixelsPerUnit:
                    drawingBufferSize.y / (2 * Math.tan((camera.fov * Math.PI) / 360)),
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
        frontDepthTarget.setSize(drawingBufferSize.x, drawingBufferSize.y);
        camera.layers.set(frontDepthLayer);
        renderer.setRenderTarget(frontDepthTarget);
        renderer.render(scene, camera);
        renderer.setRenderTarget(null);
        camera.layers.set(0);
        renderer.render(scene, camera);
    }

    if (!isSnapshot) {
        renderer.setAnimationLoop(renderFrame);
    }

    return {
        canvas: renderer.domElement,
        /** `isPicked` is set for selections made by tapping the model. */
        listenToSelection(
            onSelectionChange: (
                selection: MoleculeSelection | undefined,
                params: Readonly<{isPicked: boolean}>,
            ) => void,
        ) {
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
            if (current.model?.source === molecule) {
                return;
            }
            const isFirstModel = !current.model;
            const model = createMoleculeModel({
                molecule,
                sceneUniforms,
            });
            showModel(model);
            if (isFirstModel) {
                turn.yawRadians = findClearestYaw({
                    atoms: model.centeredAtoms,
                    baseOrientation: startingOrientation,
                    pitchRadians: turn.pitchRadians,
                    towardCamera: camera.position,
                });
                applyTurn();
            }
        },
        setAtom(symbol: ChemicalElementSymbol) {
            if (current.model?.source === symbol) {
                return;
            }
            const model = createAtomModel({
                symbol,
                sceneUniforms,
            });
            model.setOrbitalOpacity(current.orbitalOpacity);
            showModel(model);
        },
        /** Shows only one of the atom's orbitals, or all of them when `undefined`. */
        setOrbitalSelection(orbitalId: string | undefined) {
            if (!isAtomModel(current.model) || orbitalId === current.orbitalSelection) {
                return;
            }
            select(
                orbitalId == undefined
                    ? undefined
                    : {
                          type: MoleculeSelectionType.Orbital,
                          orbitalId,
                      },
                {
                    isPicked: false,
                },
            );
        },
        /** How strongly the atom's orbital clouds show, from 0 to 1. */
        setOrbitalOpacity(opacity: number) {
            current.orbitalOpacity = opacity;
            if (isAtomModel(current.model)) {
                current.model.setOrbitalOpacity(opacity);
            }
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
            fitCamera();
        },
        setRightInset(pixels: number) {
            current.rightInsetPixels = pixels;
            updateProjection();
            fitCamera();
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
            frontDepthTarget.depthTexture?.dispose();
            frontDepthTarget.dispose();
            renderer.dispose();
        },
    };
}

export type MoleculeScene = ReturnType<typeof createMoleculeScene>;
