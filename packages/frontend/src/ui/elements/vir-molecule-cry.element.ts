// cspell:words pokédex
import {createArray} from '@augment-vir/common';
import {css, defineElement, html, listen} from 'element-vir';
import {viraTheme} from 'vira';
import {playMoleculeCry, type PlayingCry} from '../../audio/molecule-cry.js';
import {type Molecule} from '../../data/molecule.js';

/** Levels at or below this many decibels leave the needle at rest. */
const quietestDecibels = -32;
/** The needle swings this many degrees either side of straight up. */
const needleSweepDegrees = 50;
/** Where the scale's red zone starts, as a fraction of the sweep. */
const redZoneStart = 0.85;
/**
 * The needle is a damped spring chasing the sound level, so it swings, overshoots a little, and
 * settles like a real analog meter instead of jumping.
 */
const needleSpring = {
    stiffness: 0.12,
    damping: 0.72,
};

const pivot = {
    x: 100,
    y: 112,
};
const scaleRadius = 86;

/** A point on the meter face, `fraction` of the way along the sweep. */
function getScalePoint({fraction, radius}: Readonly<{fraction: number; radius: number}>) {
    const angle = ((-needleSweepDegrees + 2 * needleSweepDegrees * fraction) * Math.PI) / 180;
    return `${pivot.x + radius * Math.sin(angle)} ${pivot.y - radius * Math.cos(angle)}`;
}

function getArcPath({start, end}: Readonly<{start: number; end: number}>) {
    return [
        'M',
        getScalePoint({
            fraction: start,
            radius: scaleRadius,
        }),
        'A',
        scaleRadius,
        scaleRadius,
        0,
        0,
        1,
        getScalePoint({
            fraction: end,
            radius: scaleRadius,
        }),
    ].join(' ');
}

const tickCount = 21;
function getTickPath({isRedZone}: Readonly<{isRedZone: boolean}>) {
    return createArray(tickCount, (tickIndex) => tickIndex)
        .filter((tickIndex) => tickIndex / (tickCount - 1) >= redZoneStart === isRedZone)
        .map((tickIndex) => {
            const fraction = tickIndex / (tickCount - 1);
            const length = tickIndex % 5 ? 6 : 13;
            return `M ${getScalePoint({
                fraction,
                radius: scaleRadius,
            })} L ${getScalePoint({
                fraction,
                radius: scaleRadius - length,
            })}`;
        })
        .join(' ');
}

/**
 * A Pokédex-style analog sound meter. Pressing it plays the molecule's cry and the needle swings
 * along with it.
 */
export const VirMoleculeCry = defineElement<{
    molecule: Readonly<Molecule>;
    /** Passed to `playMoleculeCry`. */
    seed: string;
}>()({
    tagName: 'vir-molecule-cry',
    styles: css`
        :host {
            display: flex;
        }

        button {
            display: flex;
            padding: 0;
            width: 96px;
            border: none;
            background: none;
            color: inherit;
            cursor: pointer;
            -webkit-user-select: none;
            user-select: none;
            -webkit-touch-callout: none;
            -webkit-tap-highlight-color: transparent;

            &:active {
                opacity: 0.7;
            }
        }

        svg {
            display: block;
            width: 100%;
        }
    `,
    state() {
        return {
            playing: undefined satisfies
                | {
                      cry: PlayingCry;
                      seed: string;
                      animationFrame: number;
                  }
                | undefined as
                | {
                      cry: PlayingCry;
                      seed: string;
                      animationFrame: number;
                  }
                | undefined,
            /** 0 is at rest on the left, 1 is the far right of the scale. */
            needlePosition: 0,
        };
    },
    cleanup({state, updateState}) {
        if (state.playing) {
            globalThis.cancelAnimationFrame(state.playing.animationFrame);
            state.playing.cry.stop();
        }
        updateState({
            playing: undefined,
            needlePosition: 0,
        });
    },
    render({inputs, state, updateState}) {
        function stop() {
            if (state.playing) {
                globalThis.cancelAnimationFrame(state.playing.animationFrame);
                state.playing.cry.stop();
            }
            updateState({
                playing: undefined,
            });
        }

        /** A new molecule cuts off the previous molecule's cry. */
        if (state.playing && state.playing.seed !== inputs.seed) {
            stop();
        }

        function play() {
            stop();
            const cry = playMoleculeCry({
                molecule: inputs.molecule,
                seed: inputs.seed,
            });
            const samples = new Float32Array(cry.analyser.fftSize);
            const seed = inputs.seed;

            function measure(needle: Readonly<{position: number; velocity: number}>) {
                cry.analyser.getFloatTimeDomainData(samples);
                const rootMeanSquare = Math.sqrt(
                    samples.reduce((total, sample) => total + sample * sample, 0) / samples.length,
                );
                const decibels = 20 * Math.log10(rootMeanSquare || Number.MIN_VALUE);
                const target = Math.min(1, Math.max(0, 1 - decibels / quietestDecibels));
                const velocity =
                    (needle.velocity + (target - needle.position) * needleSpring.stiffness) *
                    needleSpring.damping;
                /** The pegs stop the needle just past either end of the scale. */
                const position = Math.min(1.04, Math.max(0, needle.position + velocity));

                if (cry.isFinished() && position < 0.002 && Math.abs(velocity) < 0.002) {
                    updateState({
                        playing: undefined,
                        needlePosition: 0,
                    });
                    return;
                }
                updateState({
                    playing: {
                        cry,
                        seed,
                        animationFrame: globalThis.requestAnimationFrame(() => {
                            measure({
                                position,
                                velocity,
                            });
                        }),
                    },
                    needlePosition: position,
                });
            }

            measure({
                position: state.needlePosition,
                velocity: 0,
            });
        }

        const needleDegrees = -needleSweepDegrees + 2 * needleSweepDegrees * state.needlePosition;

        return html`
            <button
                title="Play cry"
                ${listen('pointerup', (event) => {
                    if (event.button === 0) {
                        play();
                    }
                })}
                ${
                    /**
                     * Keyboard activation is the only `click` whose `detail` (the click count) is
                     * `0`.
                     */
                    listen('click', (event) => {
                        if (!event.detail) {
                            play();
                        }
                    })
                }
            >
                <svg viewBox="0 0 200 128" aria-hidden="true">
                    <path
                        d=${getArcPath({
                            start: 0,
                            end: redZoneStart,
                        })}
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                    />
                    <path
                        d=${getArcPath({
                            start: redZoneStart,
                            end: 1,
                        })}
                        fill="none"
                        style=${css`
                            stroke: ${viraTheme.colors['vira-red-foreground-placeholder'].foreground
                                .value};
                        `}
                        stroke-width="7"
                    />
                    <path
                        d=${getTickPath({
                            isRedZone: false,
                        })}
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                    />
                    <path
                        d=${getTickPath({
                            isRedZone: true,
                        })}
                        style=${css`
                            stroke: ${viraTheme.colors['vira-red-foreground-placeholder'].foreground
                                .value};
                        `}
                        stroke-width="4"
                        stroke-linecap="round"
                    />
                    <text
                        x=${pivot.x}
                        y="76"
                        text-anchor="middle"
                        font-size="26"
                        font-weight="bold"
                        fill="currentColor"
                    >
                        dB
                    </text>
                    <g transform="rotate(${needleDegrees} ${pivot.x} ${pivot.y})">
                        <line
                            x1=${pivot.x}
                            y1=${pivot.y + 8}
                            x2=${pivot.x}
                            y2=${pivot.y - scaleRadius + 4}
                            style=${css`
                                stroke: ${viraTheme.colors['vira-red-foreground-placeholder']
                                    .foreground.value};
                            `}
                            stroke-width="5"
                            stroke-linecap="round"
                        />
                    </g>
                    <circle cx=${pivot.x} cy=${pivot.y} r="9" fill="currentColor" />
                    <circle
                        cx=${pivot.x}
                        cy=${pivot.y}
                        r="3.5"
                        style=${css`
                            fill: ${viraTheme.colors['vira-red-foreground-placeholder'].foreground
                                .value};
                        `}
                    />
                </svg>
            </button>
        `;
    },
});
