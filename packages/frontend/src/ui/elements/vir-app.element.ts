import {assertWrap, check} from '@augment-vir/assert';
import {getObjectTypedEntries} from '@augment-vir/common';
import {
    asyncProp,
    css,
    defineElement,
    html,
    type HTMLTemplateResult,
    listen,
    nothing,
} from 'element-vir';
import {
    lucideIcons,
    ViraButton,
    ViraColorVariant,
    type ViraIconSvg,
    ViraSize,
    viraTheme,
} from 'vira';
import {moleculeRouteNames} from '../../data/all-molecules.js';
import {type ChemicalElementSymbol} from '../../data/chemical-element.js';
import {type Molecule} from '../../data/molecule.js';
import {
    createFrontendState,
    type FrontendPaths,
    frontendPathTree,
    type FrontendStateObservable,
    getRouteElementSymbol,
    getRouteMoleculeIndex,
} from '../frontend-state/frontend-state.js';
import {ScreenSize} from '../frontend-state/screen-size.js';
import {VirAllMolecules} from './vir-all-molecules.element.js';
import {VirAtomPage} from './vir-atom-page.element.js';
import {VirEvolutionChains} from './vir-evolution-chains.element.js';
import {VirMoleculePage} from './vir-molecule-page.element.js';
import {VirMoleculeViewer} from './vir-molecule-viewer.element.js';
import {VirPeriodicTable} from './vir-periodic-table.element.js';

type ListPage = Exclude<FrontendPaths[0], 'molecule' | 'atom'>;

/** Pages drawn over the 3D viewer. */
const detailPages = [
    'molecule',
    'atom',
] as const satisfies ReadonlyArray<FrontendPaths[0]>;

const listPageButtons: Record<
    ListPage,
    {
        icon: ViraIconSvg;
        title: string;
        /** Leaves the page reachable by URL but drops its button. */
        isHidden?: boolean | undefined;
    }
> = {
    'all-molecules': {
        icon: lucideIcons.LayoutGrid,
        title: 'All molecules',
    },
    evolutions: {
        icon: lucideIcons.GitFork,
        title: 'Evolutions',
        isHidden: true,
    },
    atoms: {
        icon: lucideIcons.Atom,
        title: 'Periodic table',
    },
};

export const VirApp = defineElement()({
    tagName: 'vir-app',
    hostClasses: {
        'vir-app-list-page'({state}) {
            return (
                !!state.frontendState &&
                !check.isIn(state.frontendState.value.currentRoute.paths[0], detailPages)
            );
        },
    },
    styles({hostClasses}) {
        return css`
            :host,
            * {
                touch-action: none;
            }

            :host {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                position: relative;
                height: 100%;
                overflow: hidden;
                background-color: ${viraTheme.colors['theme-default'].background.value};
                background-image: radial-gradient(circle, #2a3448, #0f141e);
                color: ${viraTheme.colors['theme-default'].foreground.value};
                font-family: 'Atkinson Hyperlegible Next', ui-sans-serif, system-ui, sans-serif;
            }

            ${hostClasses['vir-app-list-page'].selector} {
                flex-direction: column;
                justify-content: flex-start;
            }

            ${VirMoleculeViewer} {
                position: absolute;
                inset: 0;
            }

            .corner-buttons {
                position: relative;
                margin: 16px;
                display: flex;
                gap: 8px;
            }

            ${VirAllMolecules}, ${VirEvolutionChains}, ${VirPeriodicTable} {
                align-self: stretch;
                flex-grow: 1;
                min-height: 0;
            }
        `;
    },
    state() {
        return {
            frontendState: undefined satisfies FrontendStateObservable | undefined as
                | FrontendStateObservable
                | undefined,
            molecule: asyncProp<Molecule, string>({
                async updateCallback(routeName) {
                    return (await import(`../../data/molecules/${routeName}.molecule.ts`)).default;
                },
            }),
            isFullscreen: !!globalThis.document.fullscreenElement,
            overlayWidth: 0,
            overlayHeaderHeight: 0,
            /** Each element's selected orbital, kept while visiting other elements. */
            orbitalSelections: {} satisfies Partial<
                Record<ChemicalElementSymbol, string>
            > as Partial<Record<ChemicalElementSymbol, string>>,
            orbitalOpacity: 0.08,
            documentListenerAbort: undefined satisfies AbortController | undefined as
                | AbortController
                | undefined,
        };
    },
    init({updateState, host}) {
        void createFrontendState(host).then((frontendState) => {
            updateState({
                frontendState,
            });
        });
        const documentListenerAbort = new AbortController();
        globalThis.document.addEventListener(
            'fullscreenchange',
            () => {
                updateState({
                    isFullscreen: !!globalThis.document.fullscreenElement,
                });
            },
            {
                signal: documentListenerAbort.signal,
            },
        );
        updateState({
            documentListenerAbort,
            isFullscreen: !!globalThis.document.fullscreenElement,
        });
    },
    cleanup({state}) {
        state.frontendState?.value.router.destroy();
        state.frontendState?.value.themeClient.destroy();
        state.frontendState?.value.hostResizeObserver?.disconnect();
        state.frontendState?.destroy();
        state.documentListenerAbort?.abort();
    },
    render({state, updateState}) {
        const frontendState = state.frontendState;
        if (!frontendState) {
            return nothing;
        }
        function toggleFullscreen() {
            void (globalThis.document.fullscreenElement
                ? globalThis.document.exitFullscreen()
                : globalThis.document.documentElement.requestFullscreen());
        }

        const currentPage = frontendState.value.currentRoute.paths[0];

        /** Goes to the given list page, or back to the last molecule or atom when already on it. */
        function toggleListPage(page: ListPage) {
            frontendState?.value.router.setRoute(
                currentPage === page
                    ? frontendState.value.lastDetailRoute
                    : {
                          paths: frontendPathTree.paths.children[page].fullPaths,
                      },
            );
        }

        const moleculeIndex = getRouteMoleculeIndex(frontendState.value.currentRoute);
        if (currentPage === 'molecule') {
            state.molecule.update(assertWrap.isDefined(moleculeRouteNames[moleculeIndex]));
        }
        const molecule = state.molecule.isResolved() ? state.molecule.value : undefined;

        const isPhone = frontendState.value.screenSize === ScreenSize.Phone;
        const viewerBottom = isPhone
            ? /** The overlay's top padding plus the gap below its header. */
              state.overlayHeaderHeight + 24
            : 0;

        const pageRenderers: Record<FrontendPaths[0], () => HTMLTemplateResult> = {
            molecule() {
                return html`
                    <${VirMoleculePage.assign({
                        router: frontendState.value.router,
                        moleculeIndex,
                        molecule,
                        isLoadFailed: state.molecule.isError(),
                        isPhone,
                    })}
                        ${listen(VirMoleculePage.events.overlayWidthChange, (event) => {
                            updateState({
                                overlayWidth: event.detail,
                            });
                        })}
                        ${listen(VirMoleculePage.events.overlayHeaderHeightChange, (event) => {
                            updateState({
                                overlayHeaderHeight: event.detail,
                            });
                        })}
                    ></${VirMoleculePage}>
                `;
            },
            'all-molecules'() {
                return html`
                    <${VirAllMolecules.assign({
                        router: frontendState.value.router,
                    })}></${VirAllMolecules}>
                `;
            },
            evolutions() {
                return html`
                    <${VirEvolutionChains.assign({
                        router: frontendState.value.router,
                    })}></${VirEvolutionChains}>
                `;
            },
            atom() {
                const symbol = getRouteElementSymbol(frontendState.value.currentRoute);
                return html`
                    <${VirAtomPage.assign({
                        router: frontendState.value.router,
                        symbol,
                        selectedOrbitalId: state.orbitalSelections[symbol],
                        orbitalOpacity: state.orbitalOpacity,
                        isPhone,
                    })}
                        ${listen(VirAtomPage.events.overlayWidthChange, (event) => {
                            updateState({
                                overlayWidth: event.detail,
                            });
                        })}
                        ${listen(VirAtomPage.events.overlayHeaderHeightChange, (event) => {
                            updateState({
                                overlayHeaderHeight: event.detail,
                            });
                        })}
                        ${listen(VirAtomPage.events.orbitalSelect, (event) => {
                            updateState({
                                orbitalSelections: {
                                    ...state.orbitalSelections,
                                    /** A `CustomEvent` turns an `undefined` detail into `null`. */
                                    [symbol]: event.detail || undefined,
                                },
                            });
                        })}
                        ${listen(VirAtomPage.events.orbitalOpacityChange, (event) => {
                            updateState({
                                orbitalOpacity: event.detail,
                            });
                        })}
                    ></${VirAtomPage}>
                `;
            },
            atoms() {
                return html`
                    <${VirPeriodicTable.assign({
                        router: frontendState.value.router,
                    })}></${VirPeriodicTable}>
                `;
            },
        };

        return html`
            <${VirMoleculeViewer.assign({
                router: frontendState.value.router,
                molecule,
                initialRenderQuality:
                    frontendState.value.localDbClient.value.settledRenderQualityV2,
                /**
                 * `overlayWidth` is the content width, so this adds the overlay's padding on both
                 * sides, its right margin, and the same gap on its left.
                 */
                rightInsetPixels: isPhone ? 0 : state.overlayWidth && state.overlayWidth + 64,
                isHidden: !check.isIn(currentPage, detailPages),
                atomSymbol:
                    currentPage === 'atom'
                        ? getRouteElementSymbol(frontendState.value.currentRoute)
                        : undefined,
                selectedOrbitalId:
                    currentPage === 'atom'
                        ? state.orbitalSelections[
                              getRouteElementSymbol(frontendState.value.currentRoute)
                          ]
                        : undefined,
                orbitalOpacity: state.orbitalOpacity,
            })}
                style=${css`
                    bottom: ${viewerBottom}px;
                `}
                ${listen(VirMoleculeViewer.events.orbitalSelect, (event) => {
                    if (currentPage !== 'atom') {
                        return;
                    }
                    updateState({
                        orbitalSelections: {
                            ...state.orbitalSelections,
                            [getRouteElementSymbol(frontendState.value.currentRoute)]:
                                event.detail || undefined,
                        },
                    });
                })}
                ${listen(VirMoleculeViewer.events.renderQualityChange, (event) => {
                    void frontendState.value.localDbClient.set.settledRenderQualityV2(event.detail);
                })}
            ></${VirMoleculeViewer}>
            <div class="corner-buttons">
                ${globalThis.document.fullscreenEnabled
                    ? html`
                          <${ViraButton.assign({
                              icon: state.isFullscreen
                                  ? lucideIcons.Minimize
                                  : lucideIcons.Maximize,
                              color: ViraColorVariant.Neutral,
                              buttonSize: ViraSize.Large,
                          })}
                              title=${state.isFullscreen ? 'Exit full screen' : 'Full screen'}
                              ${
                                  /**
                                   * `pointerup` instead of `click`: touch browsers withhold a tap's
                                   * `click` in some states, such as while another touch is down,
                                   * but still send its `pointerup`.
                                   */
                                  listen('pointerup', (event) => {
                                      if (event.button === 0) {
                                          toggleFullscreen();
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
                                          toggleFullscreen();
                                      }
                                  })
                              }
                          ></${ViraButton}>
                      `
                    : nothing}
                ${getObjectTypedEntries(listPageButtons)
                    .filter(
                        ([
                            ,
                            button,
                        ]) => !button.isHidden,
                    )
                    .map(
                        ([
                            page,
                            button,
                        ]) => {
                            return html`
                                <${ViraButton.assign({
                                    icon: button.icon,
                                    color: ViraColorVariant.Neutral,
                                    buttonSize: ViraSize.Large,
                                })}
                                    title=${currentPage === page ? 'Back' : button.title}
                                    ${listen('pointerup', (event) => {
                                        if (event.button === 0) {
                                            toggleListPage(page);
                                        }
                                    })}
                                    ${listen('click', (event) => {
                                        if (!event.detail) {
                                            toggleListPage(page);
                                        }
                                    })}
                                ></${ViraButton}>
                            `;
                        },
                    )}
            </div>
            ${pageRenderers[currentPage]()}
        `;
    },
});
