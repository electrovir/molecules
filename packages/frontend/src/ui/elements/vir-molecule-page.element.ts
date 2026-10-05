// cspell:words rowspan
import {assertWrap} from '@augment-vir/assert';
import {type PartialWithUndefined} from '@augment-vir/common';
import {css, defineElement, defineElementEvent, html, listen, nothing, onResize} from 'element-vir';
import {
    lucideIcons,
    PopoverTrigger,
    tooltip,
    ViraButton,
    ViraColorVariant,
    ViraSize,
    viraTheme,
} from 'vira';
import {getAudioOutput} from '../../audio/audio-output.js';
import {moleculeRouteNames} from '../../data/all-molecules.js';
import {findChainStart} from '../../data/evolution-chains.js';
import {getMoleculeFormula, type Molecule} from '../../data/molecule.js';
import {
    createMoleculeRoute,
    createStaticFileUrl,
    type FrontendRouter,
} from '../frontend-state/frontend-state.js';
import {getMoleculeStatRows} from '../molecule-stat-rows.js';
import {VirEvolutionChain} from './vir-evolution-chain.element.js';
import {VirMoleculeCry} from './vir-molecule-cry.element.js';

function goToMolecule({
    router,
    moleculeIndex,
    indexOffset,
}: Readonly<{
    router: Pick<FrontendRouter, 'setRoute'>;
    moleculeIndex: number;
    indexOffset: number;
}>) {
    router.setRoute(
        createMoleculeRoute(
            assertWrap.isDefined(
                moleculeRouteNames.at((moleculeIndex + indexOffset) % moleculeRouteNames.length),
            ),
        ),
    );
}

/** Shared by every press, so a new press cuts off the name still being said. */
const nameAudio: {
    source: AudioBufferSourceNode | undefined;
    pressCount: number;
} = {
    source: undefined,
    pressCount: 0,
};

/**
 * Plays the molecule's pre-recorded name, generated from dictionary pronunciations instead of
 * leaving the device's voice to guess at chemical names and acronyms.
 */
async function sayName(routeName: string) {
    /**
     * Web Audio instead of an `<audio>` element: media elements claim the OS media session, so the
     * system media keys would replay the name.
     */
    const {context, masterVolume} = getAudioOutput();
    nameAudio.source?.stop();
    nameAudio.source = undefined;
    nameAudio.pressCount++;
    const pressCount = nameAudio.pressCount;

    const response = await fetch(createStaticFileUrl('pronunciations', `${routeName}.mp3`));
    const buffer = await context.decodeAudioData(await response.arrayBuffer());

    /** A newer press started while this one was still loading. */
    if (nameAudio.pressCount !== pressCount) {
        return;
    }

    const source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(masterVolume);
    source.start();
    nameAudio.source = source;
}

const lastTouchEnd = {
    timeStamp: -Infinity,
};

const arrowKeyIndexOffsets: Readonly<Partial<Record<string, number>>> = {
    ArrowLeft: -1,
    ArrowRight: 1,
};

/**
 * One molecule's details, laid over the 3D viewer. The viewer stays outside this page so its 3D
 * scene survives visits to other pages.
 */
export const VirMoleculePage = defineElement<
    {
        router: Pick<FrontendRouter, 'setRoute' | 'createRouteUrl' | 'setRouteOnDirectNavigation'>;
        moleculeIndex: number;
        /** `undefined` while loading. */
        molecule: Readonly<Molecule> | undefined;
    } & PartialWithUndefined<{
        isLoadFailed: boolean;
        /** Turns the overlay into a bar at the bottom that only shows its header until scrolled. */
        isPhone: boolean;
    }>
>()({
    tagName: 'vir-molecule-page',
    events: {
        /** The overlay's content width, which the 3D viewer centers the molecule beside. */
        overlayWidthChange: defineElementEvent<number>(),
        /** The height of the overlay part that stays visible on phones. */
        overlayHeaderHeightChange: defineElementEvent<number>(),
    },
    hostClasses: {
        'vir-molecule-page-phone'({inputs}) {
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
                touch-action: none;
            }

            button {
                -webkit-user-select: none;
                user-select: none;
                -webkit-touch-callout: none;
                -webkit-tap-highlight-color: transparent;
            }

            .overlay {
                /** Positioned so it paints above the absolutely positioned viewer. */
                position: relative;
                margin: 16px;
                display: flex;
                flex-direction: column;
                gap: 8px;
                width: 400px;
                max-width: 40%;
                max-height: calc(100% - 32px);
                box-sizing: border-box;
                padding: 16px;
                border-radius: 16px;
                background-color: rgba(0, 0, 0, 0.5);

                & .scroll-area {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    min-height: 0;
                    overflow-y: auto;

                    &,
                    & * {
                        touch-action: pan-y;
                    }
                }

                & h1,
                & p {
                    margin: 0;
                }

                & h1,
                & p,
                & .formula,
                & .entry-number,
                & table {
                    pointer-events: auto;
                    -webkit-user-select: text;
                    user-select: text;
                    -webkit-touch-callout: default;
                }
            }

            .navigation {
                display: flex;
                gap: 8px;
                pointer-events: auto;

                & ${ViraButton} {
                    flex-grow: 1;
                }
            }

            .name-row {
                display: flex;
                align-items: flex-start;
                gap: 8px;

                & h1 {
                    min-width: 0;
                    hyphens: auto;
                    overflow-wrap: anywhere;
                }

                & ${ViraButton} {
                    flex-shrink: 0;
                    pointer-events: auto;
                }
            }

            table {
                border-collapse: collapse;

                & th,
                & td {
                    padding: 4px 0;
                    vertical-align: top;
                    text-align: left;
                }

                & th {
                    padding-right: 16px;
                    font-weight: normal;
                    opacity: 0.6;
                    white-space: nowrap;
                }

                & tr + tr {
                    border-top: 1px solid
                        ${viraTheme.colors['vira-grey-foreground-decoration'].foreground.value};
                }

                & tr.continued {
                    border-top: none;
                }
            }

            .stat-value {
                display: flex;
                align-items: center;
                gap: 8px;

                & svg {
                    flex-shrink: 0;
                    width: 32px;
                    height: 32px;
                }
            }

            .stat-tooltip {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 8px;
                max-width: 200px;
                text-align: center;

                & svg {
                    width: 96px;
                    height: 96px;
                }

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
             * The scroller covers the whole app so the bar can scroll over the molecule, but lets
             * touches through to the molecule everywhere except on the bar.
             */
            ${hostClasses['vir-molecule-page-phone'].selector} .overlay-scroller {
                position: absolute;
                inset: 0;
                display: flex;
                flex-direction: column;
                overflow-y: auto;
                overscroll-behavior: contain;
                scrollbar-width: none;
                pointer-events: none;
            }

            ${hostClasses['vir-molecule-page-phone'].selector} .overlay-scroller,
            ${hostClasses['vir-molecule-page-phone'].selector} .overlay-scroller * {
                touch-action: pan-y;
            }

            ${hostClasses['vir-molecule-page-phone'].selector} .overlay-spacer {
                display: block;
                flex-shrink: 0;
            }

            ${hostClasses['vir-molecule-page-phone'].selector} .overlay {
                flex-shrink: 0;
                width: auto;
                max-width: none;
                max-height: none;
                margin: 0 8px;
                border-radius: 16px 16px 0 0;
                background-color: rgba(0, 0, 0, 0.75);
                pointer-events: auto;
            }

            ${hostClasses['vir-molecule-page-phone'].selector} .overlay .scroll-area {
                overflow-y: visible;
            }

            .entry-number {
                opacity: 0.6;
                font-family: 'Atkinson Hyperlegible Mono', ui-monospace, monospace;
            }

            .formula {
                font-size: 24px;
            }
        `;
    },
    state() {
        return {
            overlayHeaderHeight: 0,
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
                goToMolecule({
                    router: inputs.router,
                    moleculeIndex: inputs.moleculeIndex,
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
        const routeName = assertWrap.isDefined(moleculeRouteNames[inputs.moleculeIndex]);
        const chainStartRouteName = findChainStart(routeName);
        const molecule = inputs.molecule;

        /** The overlay's top padding plus the gap below its header. */
        const overlayPeekPixels = state.overlayHeaderHeight + 24;

        function goToPrevious() {
            goToMolecule({
                router: inputs.router,
                moleculeIndex: inputs.moleculeIndex,
                indexOffset: -1,
            });
        }

        function goToNext() {
            goToMolecule({
                router: inputs.router,
                moleculeIndex: inputs.moleculeIndex,
                indexOffset: 1,
            });
        }

        return html`
            <div class="overlay-scroller">
                <div
                    class="overlay-spacer"
                    style=${css`
                        height: calc(100% - ${overlayPeekPixels}px);
                    `}
                ></div>
                <div
                    class="overlay"
                    ${onResize(({contentRect}) => {
                        dispatch(
                            new events.overlayWidthChange({
                                detail: contentRect.width,
                            }),
                        );
                    })}
                    ${
                        /**
                         * Safari ignores `user-scalable=no` and only blocks double tap zooming
                         * under `touch-action: none` or `manipulation`, neither of which lets an
                         * area scroll without also allowing pinch zooming. Canceling the second
                         * tap's `touchend` stops the zoom, along with that tap's `click`.
                         */
                        listen('touchend', (event) => {
                            if (event.timeStamp - lastTouchEnd.timeStamp < 300) {
                                event.preventDefault();
                            }
                            lastTouchEnd.timeStamp = event.timeStamp;
                        })
                    }
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
                            #${String(inputs.moleculeIndex + 1).padStart(3, '0')}
                        </span>
                        ${inputs.isLoadFailed
                            ? html`
                                  <p>Failed to load ${routeName}.</p>
                              `
                            : ''}
                        ${molecule
                            ? html`
                                  <div class="name-row">
                                      <${ViraButton.assign({
                                          icon: lucideIcons.Speech,
                                          color: ViraColorVariant.Neutral,
                                          buttonSize: ViraSize.Large,
                                      })}
                                          title="Say the name"
                                          ${listen('pointerup', (event) => {
                                              if (event.button === 0) {
                                                  void sayName(routeName);
                                              }
                                          })}
                                          ${listen('click', (event) => {
                                              if (!event.detail) {
                                                  void sayName(routeName);
                                              }
                                          })}
                                      ></${ViraButton}>
                                      <h1>${molecule.name}</h1>
                                  </div>
                                  <span class="formula">${getMoleculeFormula(molecule.atoms)}</span>
                              `
                            : ''}
                    </div>
                    ${molecule
                        ? html`
                              <div
                                  class="scroll-area"
                                  ${
                                      /**
                                       * Safari ignores `user-scalable=no` and only blocks double
                                       * tap zooming under `touch-action: none` or `manipulation`,
                                       * neither of which lets an area scroll without also allowing
                                       * pinch zooming. Canceling the second tap's `touchend` stops
                                       * the zoom, along with that tap's `click`.
                                       */
                                      listen('touchend', (event) => {
                                          if (event.timeStamp - lastTouchEnd.timeStamp < 300) {
                                              event.preventDefault();
                                          }
                                          lastTouchEnd.timeStamp = event.timeStamp;
                                      })
                                  }
                              >
                                  <p>${molecule.structureDescription}</p>
                                  <p>${molecule.realLifeDescription}</p>
                                  <${VirMoleculeCry.assign({
                                      molecule,
                                      seed: routeName,
                                  })}></${VirMoleculeCry}>
                                  <table>
                                      ${getMoleculeStatRows(molecule).map((row) => {
                                          return row.values.map((value, index) => {
                                              return html`
                                                  <tr class=${index ? 'continued' : ''}>
                                                      ${index
                                                          ? nothing
                                                          : html`
                                                                <th rowspan=${row.values.length}>
                                                                    ${row.label}
                                                                </th>
                                                            `}
                                                      <td>
                                                          <span
                                                              class="stat-value"
                                                              ${value.description
                                                                  ? tooltip(
                                                                        html`
                                                                            <div
                                                                                class="stat-tooltip"
                                                                            >
                                                                                ${value.icon ??
                                                                                nothing}
                                                                                <p>
                                                                                    ${value.description}
                                                                                </p>
                                                                            </div>
                                                                        `,
                                                                        {
                                                                            trigger:
                                                                                PopoverTrigger.Click,
                                                                        },
                                                                    )
                                                                  : nothing}
                                                          >
                                                              ${value.icon ?? nothing} ${value.text}
                                                          </span>
                                                      </td>
                                                  </tr>
                                              `;
                                          });
                                      })}
                                  </table>
                                  ${chainStartRouteName
                                      ? html`
                                            <${VirEvolutionChain.assign({
                                                router: inputs.router,
                                                startRouteName: chainStartRouteName,
                                                currentRouteName: routeName,
                                                isCompact: true,
                                            })}></${VirEvolutionChain}>
                                        `
                                      : nothing}
                              </div>
                          `
                        : ''}
                </div>
            </div>
        `;
    },
});
