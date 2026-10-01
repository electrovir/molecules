// cspell:words hyperlegible
import {assertWrap} from '@augment-vir/assert';
import {asyncProp, css, defineElement, html, listen, nothing, onResize} from 'element-vir';
import {lucideIcons, ViraIcon, viraTheme} from 'vira';
import {allMoleculeEntries, type MoleculeEntry} from '../../data/all-molecules.js';
import {getMoleculeFormula, type Molecule} from '../../data/molecule.js';
import {
    createFrontendState,
    createMoleculeRoute,
    type FrontendStateObservable,
    getRouteMoleculeEntry,
} from '../frontend-state/frontend-state.js';
import {getMoleculeStatRows} from '../molecule-stat-rows.js';
import {VirMoleculeViewer} from './vir-molecule-viewer.element.js';

function goToMolecule({
    frontendState,
    moleculeIndex,
    indexOffset,
}: Readonly<{
    frontendState: Readonly<FrontendStateObservable>;
    moleculeIndex: number;
    indexOffset: number;
}>) {
    frontendState.value.router.setRoute(
        createMoleculeRoute(
            assertWrap.isDefined(
                allMoleculeEntries.at((moleculeIndex + indexOffset) % allMoleculeEntries.length),
            ),
        ),
        {
            /**
             * Leaves no history behind, so Safari's edge swipe has nothing to go back or forward
             * to.
             */
            replace: true,
        },
    );
}

/**
 * Use instead of a `click` listener on touch buttons. Touch browsers withhold a tap's `click` in
 * some states, such as while another touch is down, but still send its `pointerup`. Pair with
 * `listenToKeyboardPress`.
 */
function listenToPress(callback: () => void) {
    return listen('pointerup', (event) => {
        if (event.button === 0) {
            callback();
        }
    });
}

/** Keyboard activation is the only `click` whose `detail` (the click count) is `0`. */
function listenToKeyboardPress(callback: () => void) {
    return listen('click', (event) => {
        if (!event.detail) {
            callback();
        }
    });
}

export const VirApp = defineElement()({
    tagName: 'vir-app',
    styles: css`
        :host,
        * {
            touch-action: none;
        }

        :host {
            display: block;
            position: relative;
            height: 100%;
            overflow: hidden;
            background: radial-gradient(circle, #2a3448, #0f141e);
            color: white;
            font-family: 'Atkinson Hyperlegible Next', ui-sans-serif, system-ui, sans-serif;
        }

        button {
            -webkit-user-select: none;
            user-select: none;
            -webkit-touch-callout: none;
            -webkit-tap-highlight-color: transparent;
        }

        ${VirMoleculeViewer} {
            position: absolute;
            inset: 0;
        }

        .overlay {
            position: absolute;
            top: 16px;
            right: 16px;
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

            & button {
                flex-grow: 1;
                padding: 8px 0;
                font-size: 2.5em;
            }
        }

        .fullscreen-button {
            position: absolute;
            left: 16px;
            bottom: 16px;
            display: flex;
            align-items: center;
            padding: 8px;
            font-size: 1.5em;
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
        }

        .evolutions {
            display: flex;
            flex-wrap: wrap;
            gap: 4px;
        }

        .entry-number {
            opacity: 0.6;
            font-family: 'Atkinson Hyperlegible Mono', ui-monospace, monospace;
        }

        .formula {
            font-size: 1.5em;
        }
    `,
    state() {
        return {
            frontendState: undefined satisfies FrontendStateObservable | undefined as
                | FrontendStateObservable
                | undefined,
            molecule: asyncProp<Molecule, Readonly<MoleculeEntry>>({
                updateCallback(entry) {
                    return entry.loadMolecule();
                },
            }),
            isFullscreen: !!globalThis.document.fullscreenElement,
            overlayWidth: 0,
            fullscreenListenerAbort: undefined satisfies AbortController | undefined as
                | AbortController
                | undefined,
        };
    },
    init({updateState}) {
        void createFrontendState().then((frontendState) => {
            updateState({
                frontendState,
            });
        });
        const fullscreenListenerAbort = new AbortController();
        globalThis.document.addEventListener(
            'fullscreenchange',
            () => {
                updateState({
                    isFullscreen: !!globalThis.document.fullscreenElement,
                });
            },
            {
                signal: fullscreenListenerAbort.signal,
            },
        );
        updateState({
            fullscreenListenerAbort,
            isFullscreen: !!globalThis.document.fullscreenElement,
        });
    },
    cleanup({state}) {
        state.frontendState?.value.router.destroy();
        state.frontendState?.destroy();
        state.fullscreenListenerAbort?.abort();
    },
    render({state, updateState}) {
        const frontendState = state.frontendState;
        if (!frontendState) {
            return nothing;
        }
        const moleculeEntry = getRouteMoleculeEntry(frontendState.value.currentRoute);
        const moleculeIndex = allMoleculeEntries.indexOf(moleculeEntry);
        state.molecule.update(moleculeEntry);
        const molecule = state.molecule.isResolved() ? state.molecule.value : undefined;

        function toggleFullscreen() {
            void (globalThis.document.fullscreenElement
                ? globalThis.document.exitFullscreen()
                : globalThis.document.documentElement.requestFullscreen());
        }

        function goToPrevious() {
            goToMolecule({
                /** Function declarations don't keep the `frontendState` narrowing from above. */
                frontendState: assertWrap.isDefined(frontendState),
                moleculeIndex,
                indexOffset: -1,
            });
        }

        function goToNext() {
            goToMolecule({
                frontendState: assertWrap.isDefined(frontendState),
                moleculeIndex,
                indexOffset: 1,
            });
        }

        return html`
            <${VirMoleculeViewer.assign({
                molecule,
                initialRenderQuality: frontendState.value.localDbClient.value.settledRenderQuality,
                /**
                 * `overlayWidth` is the content width, so this adds the overlay's padding on both
                 * sides, its right margin, and the same gap on its left.
                 */
                rightInsetPixels: state.overlayWidth && state.overlayWidth + 64,
            })}
                ${listen(VirMoleculeViewer.events.renderQualityChange, (event) => {
                    void frontendState.value.localDbClient.set.settledRenderQuality(event.detail);
                })}
            ></${VirMoleculeViewer}>
            ${globalThis.document.fullscreenEnabled
                ? html`
                      <button
                          class="fullscreen-button"
                          title=${state.isFullscreen ? 'Exit full screen' : 'Full screen'}
                          ${listenToPress(toggleFullscreen)}
                          ${listenToKeyboardPress(toggleFullscreen)}
                      >
                          <${ViraIcon.assign({
                              icon: state.isFullscreen
                                  ? lucideIcons.Minimize
                                  : lucideIcons.Maximize,
                          })}></${ViraIcon}>
                      </button>
                  `
                : ''}
            <div
                class="overlay"
                ${onResize(({contentRect}) => {
                    updateState({
                        overlayWidth: contentRect.width,
                    });
                })}
            >
                <div class="navigation">
                    <button ${listenToPress(goToPrevious)} ${listenToKeyboardPress(goToPrevious)}>
                        ←
                    </button>
                    <button ${listenToPress(goToNext)} ${listenToKeyboardPress(goToNext)}>→</button>
                </div>
                <span class="entry-number">
                    #${String(moleculeEntry.entryNumber).padStart(3, '0')}
                </span>
                ${state.molecule.isError()
                    ? html`
                          <p>Failed to load ${moleculeEntry.routeName}.</p>
                      `
                    : ''}
                ${molecule
                    ? html`
                          <h1>${molecule.name}</h1>
                          <span class="formula">${getMoleculeFormula(molecule.atoms)}</span>
                          <div class="scroll-area">
                              <table>
                                  ${getMoleculeStatRows(molecule).map((row) => {
                                      return html`
                                          <tr>
                                              <th>${row.label}</th>
                                              <td>${row.value}</td>
                                          </tr>
                                      `;
                                  })}
                                  ${molecule.stats.evolvesInto
                                      ? html`
                                            <tr>
                                                <th>Evolves into</th>
                                                <td class="evolutions">
                                                    ${molecule.stats.evolvesInto.map(
                                                        (routeName) => {
                                                            function goToEvolution() {
                                                                frontendState?.value.router.setRoute(
                                                                    createMoleculeRoute({
                                                                        routeName,
                                                                    }),
                                                                    {
                                                                        replace: true,
                                                                    },
                                                                );
                                                            }
                                                            return html`
                                                                <button
                                                                    ${listenToPress(goToEvolution)}
                                                                    ${listenToKeyboardPress(
                                                                        goToEvolution,
                                                                    )}
                                                                >
                                                                    ${routeName.replaceAll(
                                                                        '-',
                                                                        ' ',
                                                                    )}
                                                                </button>
                                                            `;
                                                        },
                                                    )}
                                                </td>
                                            </tr>
                                        `
                                      : ''}
                              </table>
                              <p>${molecule.description}</p>
                          </div>
                      `
                    : ''}
            </div>
        `;
    },
});
