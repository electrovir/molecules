// cspell:word valuenow valuetext
import {assertWrap} from '@augment-vir/assert';
import {type PartialWithUndefined} from '@augment-vir/common';
import {css, defineElement, defineElementEvent, html, listen} from 'element-vir';
import {themeDefaultKey} from 'theme-vir/dist/color-theme/color-theme.js';
import {viraTheme} from 'vira';

const arrowKeySteps: Readonly<Partial<Record<string, number>>> = {
    ArrowLeft: -1,
    ArrowDown: -1,
    ArrowRight: 1,
    ArrowUp: 1,
};

/**
 * A horizontal slider from 0 to 1, drawn to stand out on dark, see-through panels where the
 * browser's own range input nearly disappears. Doesn't change its own value: set `value` from
 * `valueChange`.
 */
export const VirSlider = defineElement<
    {
        /** From 0 to 1. */
        value: number;
        /** Read aloud by screen readers. */
        label: string;
    } & PartialWithUndefined<{
        /** Values snap to multiples of this. Defaults to 0.01. */
        step: number;
    }>
>()({
    tagName: 'vir-slider',
    events: {
        valueChange: defineElementEvent<number>(),
    },
    styles: css`
        :host {
            display: block;
        }

        .hit-area {
            display: flex;
            align-items: center;
            height: 40px;
            padding: 0 14px;
            cursor: pointer;
            touch-action: none;
            outline: none;
            border-radius: 20px;

            &:focus-visible {
                box-shadow: 0 0 0 2px ${viraTheme.colors[themeDefaultKey].foreground.value};
            }
        }

        .track {
            position: relative;
            flex-grow: 1;
            height: 8px;
            border-radius: 4px;
            background-color: rgba(255, 255, 255, 0.25);
        }

        .fill {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            border-radius: 4px;
            background-color: ${viraTheme.colors[themeDefaultKey].foreground.value};
        }

        .thumb {
            position: absolute;
            top: 50%;
            width: 28px;
            height: 28px;
            box-sizing: border-box;
            border-radius: 50%;
            border: 3px solid ${viraTheme.colors[themeDefaultKey].background.value};
            background-color: ${viraTheme.colors[themeDefaultKey].foreground.value};
            box-shadow: 0 1px 6px rgba(0, 0, 0, 0.6);
            transform: translate(-50%, -50%);
        }
    `,
    render({inputs, dispatch, events}) {
        const step = inputs.step ?? 0.01;

        function change(value: number) {
            const snapped = Math.min(1, Math.max(0, Math.round(value / step) * step));
            if (snapped !== inputs.value) {
                dispatch(
                    new events.valueChange({
                        detail: snapped,
                    }),
                );
            }
        }

        function changeFromPointer(event: Readonly<PointerEvent>) {
            const trackRect = assertWrap
                .instanceOf(event.currentTarget, HTMLElement)
                .querySelector('.track')
                ?.getBoundingClientRect();
            if (trackRect?.width) {
                change((event.clientX - trackRect.left) / trackRect.width);
            }
        }

        const percent = Math.round(inputs.value * 100);

        return html`
            <div
                class="hit-area"
                role="slider"
                tabindex="0"
                aria-label=${inputs.label}
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow=${percent}
                aria-valuetext="${percent}%"
                ${listen('pointerdown', (event) => {
                    if (event.button !== 0) {
                        return;
                    }
                    assertWrap
                        .instanceOf(event.currentTarget, HTMLElement)
                        .setPointerCapture(event.pointerId);
                    changeFromPointer(event);
                })}
                ${listen('pointermove', (event) => {
                    if (
                        assertWrap
                            .instanceOf(event.currentTarget, HTMLElement)
                            .hasPointerCapture(event.pointerId)
                    ) {
                        changeFromPointer(event);
                    }
                })}
                ${listen('keydown', (event) => {
                    const direction = arrowKeySteps[event.key];
                    const value =
                        direction == undefined
                            ? {
                                  Home: 0,
                                  End: 1,
                              }[event.key]
                            : inputs.value + direction * step;
                    if (value == undefined) {
                        return;
                    }
                    event.preventDefault();
                    change(value);
                })}
            >
                <div class="track">
                    <div
                        class="fill"
                        style=${css`
                            width: ${percent}%;
                        `}
                    ></div>
                    <div
                        class="thumb"
                        style=${css`
                            left: ${percent}%;
                        `}
                    ></div>
                </div>
            </div>
        `;
    },
});
