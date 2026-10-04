// cspell:words rowspan
import {assertWrap} from '@augment-vir/assert';
import {asyncProp, css, defineElement, html, listen, nothing, onResize} from 'element-vir';
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
import {getMoleculeFormula, type Molecule} from '../../data/molecule.js';
import {
    createFrontendState,
    createMoleculeRoute,
    createStaticFileUrl,
    frontendPathTree,
    type FrontendStateObservable,
    getRouteMoleculeIndex,
} from '../frontend-state/frontend-state.js';
import {getMoleculeStatRows} from '../molecule-stat-rows.js';
import {VirAllMolecules} from './vir-all-molecules.element.js';
import {VirMoleculeCry} from './vir-molecule-cry.element.js';
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
                moleculeRouteNames.at((moleculeIndex + indexOffset) % moleculeRouteNames.length),
            ),
        ),
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

export const VirApp = defineElement()({
    tagName: 'vir-app',
    styles: css`
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

        /** Positioned so they paint above the absolutely positioned viewer. */
        .corner-buttons,
        .overlay {
            position: relative;
        }

        .all-molecules-page {
            flex-grow: 1;
            align-self: stretch;
            display: flex;
            flex-direction: column;
            min-height: 0;

            & .corner-buttons {
                align-self: flex-start;
            }

            & ${VirAllMolecules} {
                flex-grow: 1;
                min-height: 0;
            }
        }

        .overlay {
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

        .corner-buttons {
            margin: 16px;
            display: flex;
            gap: 8px;
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
            font-size: 24px;
        }
    `,
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
            documentListenerAbort: undefined satisfies AbortController | undefined as
                | AbortController
                | undefined,
        };
    },
    init({state, updateState}) {
        void createFrontendState().then((frontendState) => {
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
        globalThis.document.addEventListener(
            'keydown',
            (event) => {
                const indexOffset = arrowKeyIndexOffsets[event.key];
                if (
                    indexOffset == undefined ||
                    !state.frontendState ||
                    state.frontendState.value.currentRoute.paths[0] === 'all-molecules' ||
                    event.altKey ||
                    event.ctrlKey ||
                    event.metaKey ||
                    event.shiftKey
                ) {
                    return;
                }
                event.preventDefault();
                goToMolecule({
                    frontendState: state.frontendState,
                    moleculeIndex: getRouteMoleculeIndex(state.frontendState.value.currentRoute),
                    indexOffset,
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

        const fullscreenButton = globalThis.document.fullscreenEnabled
            ? html`
                  <${ViraButton.assign({
                      icon: state.isFullscreen ? lucideIcons.Minimize : lucideIcons.Maximize,
                      color: ViraColorVariant.Neutral,
                      buttonSize: ViraSize.Large,
                  })}
                      title=${state.isFullscreen ? 'Exit full screen' : 'Full screen'}
                      ${listenToPress(toggleFullscreen)}
                      ${listenToKeyboardPress(toggleFullscreen)}
                  ></${ViraButton}>
              `
            : nothing;

        const isAllMoleculesRoute = frontendState.value.currentRoute.paths[0] === 'all-molecules';

        function toggleAllMolecules() {
            frontendState?.value.router.setRoute(
                isAllMoleculesRoute
                    ? createMoleculeRoute(
                          state.molecule.lastParams || assertWrap.isDefined(moleculeRouteNames[0]),
                      )
                    : {
                          paths: frontendPathTree.paths.children['all-molecules'].fullPaths,
                      },
            );
        }

        const cornerButtons = html`
            <div class="corner-buttons">
                ${fullscreenButton}
                <${ViraButton.assign({
                    icon: lucideIcons.LayoutGrid,
                    color: ViraColorVariant.Neutral,
                    buttonSize: ViraSize.Large,
                })}
                    title=${isAllMoleculesRoute ? 'Back to molecule' : 'All molecules'}
                    ${listenToPress(toggleAllMolecules)}
                    ${listenToKeyboardPress(toggleAllMolecules)}
                ></${ViraButton}>
            </div>
        `;

        const moleculeIndex = getRouteMoleculeIndex(frontendState.value.currentRoute);
        const routeName = assertWrap.isDefined(moleculeRouteNames[moleculeIndex]);
        if (!isAllMoleculesRoute) {
            state.molecule.update(routeName);
        }
        const molecule = state.molecule.isResolved() ? state.molecule.value : undefined;

        if (isAllMoleculesRoute) {
            globalThis.document.title = 'All Molecules';
        } else if (molecule) {
            globalThis.document.title = molecule.name;
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
                initialRenderQuality:
                    frontendState.value.localDbClient.value.settledRenderQualityV2,
                /**
                 * `overlayWidth` is the content width, so this adds the overlay's padding on both
                 * sides, its right margin, and the same gap on its left.
                 */
                rightInsetPixels: state.overlayWidth && state.overlayWidth + 64,
                isHidden: isAllMoleculesRoute,
            })}
                ${listen(VirMoleculeViewer.events.renderQualityChange, (event) => {
                    void frontendState.value.localDbClient.set.settledRenderQualityV2(event.detail);
                })}
            ></${VirMoleculeViewer}>
            ${isAllMoleculesRoute
                ? html`
                      <div class="all-molecules-page">
                          ${cornerButtons}
                          <${VirAllMolecules.assign({
                              router: frontendState.value.router,
                          })}></${VirAllMolecules}>
                      </div>
                  `
                : html`
                      ${cornerButtons}
                      <div
                          class="overlay"
                          ${onResize(({contentRect}) => {
                              updateState({
                                  overlayWidth: contentRect.width,
                              });
                          })}
                      >
                          <div class="navigation">
                              <${ViraButton.assign({
                                  icon: lucideIcons.ArrowLeft,
                                  color: ViraColorVariant.Neutral,
                                  buttonSize: ViraSize.Large,
                              })}
                                  title="Previous"
                                  ${listenToPress(goToPrevious)}
                                  ${listenToKeyboardPress(goToPrevious)}
                              ></${ViraButton}>
                              <${ViraButton.assign({
                                  icon: lucideIcons.ArrowRight,
                                  color: ViraColorVariant.Neutral,
                                  buttonSize: ViraSize.Large,
                              })}
                                  title="Next"
                                  ${listenToPress(goToNext)}
                                  ${listenToKeyboardPress(goToNext)}
                              ></${ViraButton}>
                          </div>
                          <span class="entry-number">
                              #${String(moleculeIndex + 1).padStart(3, '0')}
                          </span>
                          ${state.molecule.isError()
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
                                            ${listenToPress(() => {
                                                return sayName(routeName);
                                            })}
                                            ${listenToKeyboardPress(() => {
                                                return sayName(routeName);
                                            })}
                                        ></${ViraButton}>
                                        <h1>${molecule.name}</h1>
                                    </div>
                                    <span class="formula">
                                        ${getMoleculeFormula(molecule.atoms)}
                                    </span>
                                    <div
                                        class="scroll-area"
                                        ${
                                            /**
                                             * Safari ignores `user-scalable=no` and only blocks
                                             * double tap zooming under `touch-action: none` or
                                             * `manipulation`, neither of which lets an area scroll
                                             * without also allowing pinch zooming. Canceling the
                                             * second tap's `touchend` stops the zoom, along with
                                             * that tap's `click`.
                                             */
                                            listen('touchend', (event) => {
                                                if (
                                                    event.timeStamp - lastTouchEnd.timeStamp <
                                                    300
                                                ) {
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
                                                                      <th
                                                                          rowspan=${row.values
                                                                              .length}
                                                                      >
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
                                                                    ${value.icon ?? nothing}
                                                                    ${value.text}
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    `;
                                                });
                                            })}
                                            <tr>
                                                <th>Evolves into</th>
                                                <td class="evolutions">
                                                    ${molecule.stats.evolvesInto?.map(
                                                        (routeName) => {
                                                            function goToEvolution() {
                                                                frontendState?.value.router.setRoute(
                                                                    createMoleculeRoute(routeName),
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
                                                    ) ?? '-'}
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                `
                              : ''}
                      </div>
                  `}
        `;
    },
});
