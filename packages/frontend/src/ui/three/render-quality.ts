import {check} from '@augment-vir/assert';
import {type AnyDuration, convertDuration} from 'date-vir';
import {defineShape, enumShape} from 'object-shape-tester';

/** Effects that can be turned off to keep the frame rate up, in the order they get turned off. */
export enum RenderEffect {
    SelfReflections = 'self-reflections',
    Transmission = 'transmission',
    Shadows = 'shadows',
}

const effectRemovalOrder = Object.values(RenderEffect);

export const renderQualityShape = defineShape({
    /** Multiplies the device's pixel ratio. */
    resolutionScale: 1,
    disabledEffects: [enumShape(RenderEffect)],
});

export type RenderQuality = typeof renderQualityShape.runtimeType;

export const defaultRenderQuality: Readonly<RenderQuality> = {
    resolutionScale: 1,
    disabledEffects: [],
};

/** Below this average frame rate, quality drops. */
const minFramesPerSecond = 40;
/**
 * Frame rate is averaged over this long at a time, so quality only drops after a sustained slowdown
 * rather than a brief stutter.
 */
const checkDuration = {
    seconds: 2,
} as const satisfies AnyDuration;
/**
 * Every quality change rebuilds shaders or reallocates buffers, and the slow frames that causes
 * would otherwise count against the new quality.
 */
const framesToSkipAfterChange = 10;
const resolutionStep = 0.2;
/** Resolution drops to here first, then effects turn off, then resolution drops further. */
const effectsResolutionScale = 0.6;
const minResolutionScale = 0.4;
/** Longer gaps than this are a hidden tab or a paused debugger, not slow rendering. */
const maxSampleDuration = {
    seconds: 0.25,
} as const satisfies AnyDuration;
/**
 * A screen can't show more than its refresh rate, so there's no way to tell how much headroom a
 * smooth frame rate has. Quality steps back up after this long at full speed, as a test.
 */
const firstRaiseDelay = {
    seconds: 30,
} as const satisfies AnyDuration;
/**
 * Each time a raise has to be undone, the wait before the next raise doubles, up to this, so a
 * device right at the edge settles instead of flipping back and forth.
 */
const maxRaiseDelay = {
    minutes: 30,
} as const satisfies AnyDuration;

function lowerQuality({resolutionScale, disabledEffects}: Readonly<RenderQuality>): RenderQuality {
    const nextEffect = effectRemovalOrder.find((effect) => !disabledEffects.includes(effect));
    if (resolutionScale > effectsResolutionScale || !nextEffect) {
        return {
            resolutionScale: Math.max(
                resolutionScale > effectsResolutionScale
                    ? effectsResolutionScale
                    : minResolutionScale,
                resolutionScale - resolutionStep,
            ),
            disabledEffects: [...disabledEffects],
        };
    }
    return {
        resolutionScale,
        disabledEffects: [
            ...disabledEffects,
            nextEffect,
        ],
    };
}

/** Undoes one {@link lowerQuality} step. */
function raiseQuality({resolutionScale, disabledEffects}: Readonly<RenderQuality>): RenderQuality {
    if (
        resolutionScale < effectsResolutionScale ||
        (resolutionScale < 1 && !disabledEffects.length)
    ) {
        return {
            resolutionScale: Math.min(
                resolutionScale < effectsResolutionScale ? effectsResolutionScale : 1,
                resolutionScale + resolutionStep,
            ),
            disabledEffects: [...disabledEffects],
        };
    }
    return {
        resolutionScale,
        disabledEffects: disabledEffects.slice(0, -1),
    };
}

/**
 * Watches the frame rate and steps render quality down while it's too low, then slowly back up
 * while it stays smooth. Resolution goes first, then effects, then more resolution.
 */
export function createRenderQualityScaler({
    applyQuality,
}: Readonly<{
    applyQuality: (quality: Readonly<RenderQuality>) => void;
}>) {
    const state: {
        quality: RenderQuality;
        samples: number[];
        framesToSkip: number;
        smoothDuration: {
            seconds: number;
        };
        raiseDelay: {
            seconds: number;
        };
        wasLastChangeRaise: boolean;
    } = {
        quality: defaultRenderQuality,
        samples: [],
        framesToSkip: framesToSkipAfterChange,
        smoothDuration: {
            seconds: 0,
        },
        raiseDelay: firstRaiseDelay,
        wasLastChangeRaise: false,
    };

    function setQuality(quality: Readonly<RenderQuality>) {
        state.quality = {
            /** Keeps repeated steps from drifting into values like `0.6000000000000001`. */
            resolutionScale: Math.round(quality.resolutionScale * 100) / 100,
            disabledEffects: [...quality.disabledEffects],
        };
        state.samples = [];
        state.framesToSkip = framesToSkipAfterChange;
        state.smoothDuration = {
            seconds: 0,
        };
        applyQuality(state.quality);
    }

    applyQuality(state.quality);

    return {
        getQuality() {
            return state.quality;
        },
        setQuality(quality: Readonly<RenderQuality>) {
            if (!check.deepEquals(quality, state.quality)) {
                setQuality(quality);
            }
        },
        /** Returns `true` when this frame changed the quality. */
        recordFrame(frameSeconds: number) {
            if (!frameSeconds || frameSeconds > maxSampleDuration.seconds) {
                return false;
            } else if (state.framesToSkip) {
                state.framesToSkip--;
                return false;
            }
            state.samples = [
                ...state.samples,
                frameSeconds,
            ];
            const sampleSeconds = state.samples.reduce((total, sample) => total + sample, 0);
            if (sampleSeconds < checkDuration.seconds) {
                return false;
            }
            const framesPerSecond = state.samples.length / sampleSeconds;
            state.samples = [];

            if (framesPerSecond >= minFramesPerSecond) {
                state.smoothDuration = {
                    seconds: state.smoothDuration.seconds + sampleSeconds,
                };
                if (state.smoothDuration.seconds < state.raiseDelay.seconds) {
                    return false;
                }
                const raised = raiseQuality(state.quality);
                if (check.deepEquals(raised, state.quality)) {
                    state.smoothDuration = {
                        seconds: 0,
                    };
                    return false;
                }
                state.wasLastChangeRaise = true;
                setQuality(raised);
                return true;
            }
            state.smoothDuration = {
                seconds: 0,
            };
            const lowered = lowerQuality(state.quality);
            if (check.deepEquals(lowered, state.quality)) {
                return false;
            }
            if (state.wasLastChangeRaise) {
                state.raiseDelay = {
                    seconds: Math.min(
                        convertDuration(maxRaiseDelay, {
                            seconds: true,
                        }).seconds,
                        state.raiseDelay.seconds * 2,
                    ),
                };
            }
            state.wasLastChangeRaise = false;
            setQuality(lowered);
            return true;
        },
    };
}
