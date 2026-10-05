import {assertWrap} from '@augment-vir/assert';
import {createArray, type PartialWithUndefined} from '@augment-vir/common';
import {
    css,
    defineElement,
    defineElementEvent,
    html,
    type HTMLTemplateResult,
    listen,
    nothing,
    onResize,
    unsafeCSS,
} from 'element-vir';
import {themeDefaultKey} from 'theme-vir/dist/color-theme/color-theme.js';
import {lucideIcons, ViraButton, ViraColorVariant, ViraSize, viraTheme} from 'vira';
import {playPronunciation} from '../../audio/pronunciation.js';
import {expandOrbitals, getShellOccupancies, type Orbital} from '../../data/atom-orbitals.js';
import {
    type ChemicalElement,
    chemicalElements,
    type ChemicalElementSymbol,
} from '../../data/chemical-element.js';
import {
    elementSymbols,
    elementTypeLabels,
    getElementRouteName,
    getElementType,
    getPeriodAndGroup,
} from '../../data/periodic-table.js';
import {
    createAtomRoute,
    createStaticFileUrl,
    type FrontendRouter,
} from '../frontend-state/frontend-state.js';
import {getOrbitalCssColor} from '../orbital-colors.js';
import {VirAtomThumbnail} from './vir-atom-thumbnail.element.js';
import {VirSlider} from './vir-slider.element.js';

/** Past argon's orbital count, orbital chips group by subshell so they fit. */
const maxUngroupedOrbitals = 9;

/** Runs on a tap or keyboard press, for buttons that aren't `ViraButton`s. */
function renderPressListeners(onPress: () => void) {
    return [
        /**
         * `pointerup` instead of `click`: touch browsers withhold a tap's `click` in some states,
         * such as while another touch is down, but still send its `pointerup`.
         */
        listen('pointerup', (event) => {
            if (event.button === 0) {
                onPress();
            }
        }),
        /** Keyboard activation is the only `click` whose `detail` (the click count) is `0`. */
        listen('click', (event) => {
            if (!event.detail) {
                onPress();
            }
        }),
    ] as const;
}

function renderElectronDots({
    orbital,
    electrons,
}: Readonly<{orbital: Readonly<Orbital>; electrons: number}>) {
    return html`
        <span class="dots">
            ${createArray(electrons, () => {
                return html`
                    <span
                        class="dot"
                        style=${css`
                            background-color: ${unsafeCSS(getOrbitalCssColor(orbital))};
                        `}
                    ></span>
                `;
            })}
        </span>
    `;
}

function goToElement({
    router,
    symbol,
    indexOffset,
}: Readonly<{
    router: Pick<FrontendRouter, 'setRoute'>;
    symbol: ChemicalElementSymbol;
    indexOffset: number;
}>) {
    router.setRoute(
        createAtomRoute(
            assertWrap.isDefined(
                elementSymbols.at(
                    (elementSymbols.indexOf(symbol) + indexOffset) % elementSymbols.length,
                ),
            ),
        ),
    );
}

const arrowKeyIndexOffsets: Readonly<Partial<Record<string, number>>> = {
    ArrowLeft: -1,
    ArrowRight: 1,
};

/**
 * One element's details and orbital controls, laid over the 3D viewer. The viewer stays outside
 * this page so its 3D scene survives visits to other pages.
 */
export const VirAtomPage = defineElement<
    {
        router: Pick<FrontendRouter, 'setRoute' | 'createRouteUrl' | 'setRouteOnDirectNavigation'>;
        symbol: ChemicalElementSymbol;
        /** From 0 to 1. */
        orbitalOpacity: number;
    } & PartialWithUndefined<{
        /** Every orbital shows when omitted. */
        selectedOrbitalId: string;
        /** Moves the overlay to the bottom of the screen. */
        isPhone: boolean;
    }>
>()({
    tagName: 'vir-atom-page',
    events: {
        /** The overlay's content width, which the 3D viewer centers the atom beside. */
        overlayWidthChange: defineElementEvent<number>(),
        /** The height of the overlay part that stays visible on phones. */
        overlayHeaderHeightChange: defineElementEvent<number>(),
        /** `undefined` shows every orbital. */
        orbitalSelect: defineElementEvent<string | undefined>(),
        orbitalOpacityChange: defineElementEvent<number>(),
    },
    hostClasses: {
        'vir-atom-page-phone'({inputs}) {
            return !!inputs.isPhone;
        },
    },
    styles({hostClasses}) {
        return css`
            :host {
                /** Lays the overlay out in the app's own flex row, beside its corner buttons. */
                display: contents;
            }

            * {
                touch-action: pan-y;
            }

            button {
                -webkit-user-select: none;
                user-select: none;
                -webkit-touch-callout: none;
                -webkit-tap-highlight-color: transparent;
            }

            .details {
                /** Positioned so it paints above the absolutely positioned viewer. */
                position: relative;
                margin: 16px;
                display: flex;
                flex-direction: column;
                gap: 8px;
                width: 400px;
                max-width: 40%;
                max-height: calc(100% - 32px);
                overflow-y: auto;
                box-sizing: border-box;
                padding: 16px;
                border-radius: 16px;
                background-color: rgba(0, 0, 0, 0.5);

                & h1,
                & p {
                    margin: 0;
                }
            }

            .overlay-header {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }

            .overlay-scroller {
                display: contents;
            }

            .overlay-spacer {
                display: none;
            }

            /**
             * The overlay becomes a bar at the bottom that only shows its header until scrolled up.
             * The scroller covers the whole app so the bar can scroll over the atom, but lets
             * touches through to the atom everywhere except on the bar.
             */
            ${hostClasses['vir-atom-page-phone'].selector} .overlay-scroller {
                position: absolute;
                inset: 0;
                display: flex;
                flex-direction: column;
                overflow-y: auto;
                overscroll-behavior: contain;
                scrollbar-width: none;
                pointer-events: none;
            }

            ${hostClasses['vir-atom-page-phone'].selector} .overlay-spacer {
                display: block;
                flex-shrink: 0;
            }

            ${hostClasses['vir-atom-page-phone'].selector} .details {
                flex-shrink: 0;
                width: auto;
                max-width: none;
                max-height: none;
                overflow-y: visible;
                margin: 0 8px;
                border-radius: 16px 16px 0 0;
                background-color: rgba(0, 0, 0, 0.75);
                pointer-events: auto;
            }

            .chips {
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
            }

            .chip {
                display: flex;
                align-items: center;
                gap: 6px;
                padding: 4px 10px;
                border-radius: 16px;
                border: 2px solid
                    ${viraTheme.colors['vira-grey-foreground-decoration'].foreground.value};
                background: none;
                color: inherit;
                font: inherit;
                font-size: 18px;
                cursor: pointer;

                &.selected {
                    border-color: ${viraTheme.colors[themeDefaultKey].foreground.value};
                    background-color: rgba(255, 255, 255, 0.15);
                }

                &.expanded {
                    border-style: dashed;
                }
            }

            .dots {
                display: flex;
                gap: 2px;
            }

            .dot {
                width: 8px;
                height: 8px;
                border-radius: 50%;
            }

            .opacity {
                display: flex;
                flex-direction: column;
                gap: 4px;
            }

            .note {
                opacity: 0.6;
                font-size: 14px;
            }

            .name-row {
                display: flex;
                align-items: flex-start;
                gap: 8px;

                & ${ViraButton} {
                    flex-shrink: 0;
                }
            }

            .navigation {
                display: flex;
                gap: 8px;

                & ${ViraButton} {
                    flex-grow: 1;
                }
            }

            .entry-number {
                opacity: 0.6;
                font-family: 'Atkinson Hyperlegible Mono', ui-monospace, monospace;
            }

            .symbol {
                width: 64px;
            }

            table {
                border-collapse: collapse;

                & th,
                & td {
                    padding: 4px 0;
                    text-align: left;
                }

                & th {
                    padding-right: 16px;
                    font-weight: normal;
                    opacity: 0.6;
                }

                & tr + tr {
                    border-top: 1px solid
                        ${viraTheme.colors['vira-grey-foreground-decoration'].foreground.value};
                }
            }
        `;
    },
    state() {
        return {
            overlayHeaderHeight: 0,
            /** The subshell whose orbitals show as their own chips, when chips are grouped. */
            expandedSubshellId: undefined satisfies string | undefined as string | undefined,
            documentListenerAbort: undefined satisfies AbortController | undefined as
                | AbortController
                | undefined,
        };
    },
    init({inputs, updateState}) {
        const documentListenerAbort = new AbortController();
        globalThis.document.addEventListener(
            'keydown',
            (event) => {
                const indexOffset = arrowKeyIndexOffsets[event.key];
                if (
                    indexOffset == undefined ||
                    event.altKey ||
                    event.ctrlKey ||
                    event.metaKey ||
                    event.shiftKey
                ) {
                    return;
                }
                event.preventDefault();
                goToElement({
                    router: inputs.router,
                    symbol: inputs.symbol,
                    indexOffset,
                });
            },
            {
                signal: documentListenerAbort.signal,
            },
        );
        updateState({
            documentListenerAbort,
        });
    },
    cleanup({state}) {
        state.documentListenerAbort?.abort();
    },
    render({inputs, state, updateState, dispatch, events}) {
        const element: Readonly<ChemicalElement> = chemicalElements[inputs.symbol];
        const orbitals = expandOrbitals(inputs.symbol);
        const shells = getShellOccupancies(orbitals);
        const {period, group} = getPeriodAndGroup(element.atomicNumber);
        const subshells = Object.values(
            Object.groupBy(orbitals, (orbital) => `${orbital.n}${orbital.shape}`),
        ).flatMap((subshellOrbitals) => (subshellOrbitals ? [subshellOrbitals] : []));
        const opacityPercent = Math.round(inputs.orbitalOpacity * 100);

        function selectOrbital(orbitalId: string | undefined) {
            dispatch(
                new events.orbitalSelect({
                    detail: orbitalId,
                }),
            );
        }

        function renderChip({
            label,
            isSelected,
            isExpanded,
            dots,
            onPress,
        }: Readonly<{
            label: HTMLTemplateResult | string;
            isSelected: boolean;
            isExpanded: boolean;
            dots: HTMLTemplateResult | typeof nothing;
            onPress: () => void;
        }>) {
            const [
                pointerUpListener,
                clickListener,
            ] = renderPressListeners(onPress);
            return html`
                <button
                    class="chip ${isSelected ? 'selected' : ''} ${isExpanded ? 'expanded' : ''}"
                    ${pointerUpListener}
                    ${clickListener}
                >
                    <span>${label}</span>
                    ${dots}
                </button>
            `;
        }

        function renderOrbitalChip(orbital: Readonly<Orbital>) {
            return renderChip({
                label: html`
                    ${orbital.n}${orbital.shape}
                    <sub>${orbital.subscript}</sub>
                    <sup>${orbital.occupancy}</sup>
                `,
                isSelected: inputs.selectedOrbitalId === orbital.id,
                isExpanded: false,
                dots: renderElectronDots({
                    orbital,
                    electrons: orbital.occupancy,
                }),
                onPress() {
                    selectOrbital(inputs.selectedOrbitalId === orbital.id ? undefined : orbital.id);
                },
            });
        }

        function renderSubshellChips(subshellOrbitals: ReadonlyArray<Readonly<Orbital>>) {
            const first = assertWrap.isDefined(subshellOrbitals[0]);
            if (subshellOrbitals.length === 1) {
                return renderOrbitalChip(first);
            }
            const subshellId = `${first.n}${first.shape}`;
            const isExpanded = state.expandedSubshellId === subshellId;
            const groupChip = renderChip({
                label: html`
                    ${subshellId}
                    <sup>
                        ${subshellOrbitals.reduce((total, orbital) => total + orbital.occupancy, 0)}
                    </sup>
                `,
                isSelected: subshellOrbitals.some(
                    (orbital) => orbital.id === inputs.selectedOrbitalId,
                ),
                isExpanded,
                dots: nothing,
                onPress() {
                    updateState({
                        expandedSubshellId: isExpanded ? undefined : subshellId,
                    });
                },
            });
            return isExpanded
                ? html`
                      ${groupChip}${subshellOrbitals.map((orbital) => renderOrbitalChip(orbital))}
                  `
                : groupChip;
        }

        function goToPrevious() {
            goToElement({
                router: inputs.router,
                symbol: inputs.symbol,
                indexOffset: -1,
            });
        }

        function sayName() {
            void playPronunciation(
                createStaticFileUrl(
                    'pronunciations',
                    'atoms',
                    `${getElementRouteName(inputs.symbol)}.mp3`,
                ),
            );
        }

        function goToNext() {
            goToElement({
                router: inputs.router,
                symbol: inputs.symbol,
                indexOffset: 1,
            });
        }

        return html`
            <div class="overlay-scroller">
                <div
                    class="overlay-spacer"
                    style=${css`
                        /** The overlay's top padding plus the gap below its header. */
                        height: calc(100% - ${state.overlayHeaderHeight + 24}px);
                    `}
                ></div>
                <div
                    class="details"
                    ${onResize(({contentRect}) => {
                        dispatch(
                            new events.overlayWidthChange({
                                detail: contentRect.width,
                            }),
                        );
                    })}
                >
                    <div
                        class="overlay-header"
                        ${onResize(({contentRect}) => {
                            updateState({
                                overlayHeaderHeight: contentRect.height,
                            });
                            dispatch(
                                new events.overlayHeaderHeightChange({
                                    detail: contentRect.height,
                                }),
                            );
                        })}
                    >
                        <div class="navigation">
                            <${ViraButton.assign({
                                icon: lucideIcons.ArrowLeft,
                                color: ViraColorVariant.Neutral,
                                buttonSize: ViraSize.Large,
                            })}
                                title="Previous"
                                ${
                                    /**
                                     * `pointerup` instead of `click`: touch browsers withhold a
                                     * tap's `click` in some states, such as while another touch is
                                     * down, but still send its `pointerup`.
                                     */
                                    listen('pointerup', (event) => {
                                        if (event.button === 0) {
                                            goToPrevious();
                                        }
                                    })
                                }
                                ${
                                    /**
                                     * Keyboard activation is the only `click` whose `detail` (the
                                     * click count) is `0`.
                                     */
                                    listen('click', (event) => {
                                        if (!event.detail) {
                                            goToPrevious();
                                        }
                                    })
                                }
                            ></${ViraButton}>
                            <${ViraButton.assign({
                                icon: lucideIcons.ArrowRight,
                                color: ViraColorVariant.Neutral,
                                buttonSize: ViraSize.Large,
                            })}
                                title="Next"
                                ${listen('pointerup', (event) => {
                                    if (event.button === 0) {
                                        goToNext();
                                    }
                                })}
                                ${listen('click', (event) => {
                                    if (!event.detail) {
                                        goToNext();
                                    }
                                })}
                            ></${ViraButton}>
                        </div>
                        <span class="entry-number">
                            #${String(element.atomicNumber).padStart(3, '0')}
                        </span>
                        <div class="name-row">
                            <${ViraButton.assign({
                                icon: lucideIcons.Speech,
                                color: ViraColorVariant.Neutral,
                                buttonSize: ViraSize.Large,
                            })}
                                title="Say the name"
                                ${listen('pointerup', (event) => {
                                    if (event.button === 0) {
                                        sayName();
                                    }
                                })}
                                ${listen('click', (event) => {
                                    if (!event.detail) {
                                        sayName();
                                    }
                                })}
                            ></${ViraButton}>
                            <h1>${element.name}</h1>
                        </div>
                    </div>
                    <${VirAtomThumbnail.assign({
                        symbol: inputs.symbol,
                    })}
                        class="symbol"
                    ></${VirAtomThumbnail}>
                    <p>${element.structureDescription}</p>
                    <p>${element.realLifeDescription}</p>
                    <table>
                        <tr>
                            <th>Type</th>
                            <td>${elementTypeLabels[getElementType(inputs.symbol)]}</td>
                        </tr>
                        <tr>
                            <th>Atomic number</th>
                            <td>${element.atomicNumber}</td>
                        </tr>
                        <tr>
                            <th>Period</th>
                            <td>${period}</td>
                        </tr>
                        ${group == undefined
                            ? nothing
                            : html`
                                  <tr>
                                      <th>Group</th>
                                      <td>${group}</td>
                                  </tr>
                              `}
                        <tr>
                            <th>Protons</th>
                            <td>${element.atomicNumber}</td>
                        </tr>
                        <tr>
                            <th>Neutrons</th>
                            <td>${element.massNumber - element.atomicNumber}</td>
                        </tr>
                        <tr>
                            <th>Electrons</th>
                            <td>${element.atomicNumber}</td>
                        </tr>
                        <tr>
                            <th>Electrons per shell</th>
                            <td>${shells.map((shell) => shell.electrons).join(' · ')}</td>
                        </tr>
                        <tr>
                            <th>Outer shell electrons</th>
                            <td>${shells.at(-1)?.electrons}</td>
                        </tr>
                        <tr>
                            <th>Atomic mass</th>
                            <td>${element.atomicMass} u</td>
                        </tr>
                        ${element.vanDerWaalsRadius == undefined
                            ? nothing
                            : html`
                                  <tr>
                                      <th>Size</th>
                                      <td>${element.vanDerWaalsRadius} Å</td>
                                  </tr>
                              `}
                    </table>
                    <div class="chips">
                        ${renderChip({
                            label: 'All',
                            isSelected: inputs.selectedOrbitalId == undefined,
                            isExpanded: false,
                            dots: nothing,
                            onPress() {
                                selectOrbital(undefined);
                            },
                        })}
                        ${orbitals.length > maxUngroupedOrbitals
                            ? subshells.map((subshellOrbitals) => {
                                  return renderSubshellChips(subshellOrbitals);
                              })
                            : orbitals.map((orbital) => renderOrbitalChip(orbital))}
                    </div>
                    <div class="opacity">
                        <span>Electron clouds: ${opacityPercent}%</span>
                        <${VirSlider.assign({
                            value: inputs.orbitalOpacity,
                            label: 'Electron cloud opacity',
                            step: 0.02,
                        })}
                            ${listen(VirSlider.events.valueChange, (event) => {
                                dispatch(
                                    new events.orbitalOpacityChange({
                                        detail: event.detail,
                                    }),
                                );
                            })}
                        ></${VirSlider}>
                    </div>
                    <span class="note">Radial distances compressed.</span>
                </div>
            </div>
        `;
    },
});
