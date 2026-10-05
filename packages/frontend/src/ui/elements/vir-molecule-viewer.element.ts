import {assertWrap} from '@augment-vir/assert';
import {type PartialWithUndefined} from '@augment-vir/common';
import {colorCss} from '@electrovir/color';
import {css, defineElement, defineElementEvent, html, onResize, unsafeCSS} from 'element-vir';
import {themeDefaultKey} from 'theme-vir/dist/color-theme/color-theme.js';
import {LoaderAnimated24Icon, ViraIcon, ViraLink, viraTheme} from 'vira';
import {expandOrbitals} from '../../data/atom-orbitals.js';
import {chemicalElements, type ChemicalElementSymbol} from '../../data/chemical-element.js';
import {BondOrder, type Molecule} from '../../data/molecule.js';
import {createAtomRoute, type FrontendRouter} from '../frontend-state/frontend-state.js';
import {getOrbitalCssColor} from '../orbital-colors.js';
import {type MoleculeScene} from '../three/molecule-scene.js';
import {type MoleculeSelection, MoleculeSelectionType} from '../three/molecule-selection.js';
import {type RenderQuality} from '../three/render-quality.js';
import {VirAtomThumbnail} from './vir-atom-thumbnail.element.js';

const bondOrderLabels: Record<
    BondOrder,
    {
        name: string;
        symbol: string;
    }
> = {
    [BondOrder.Single]: {
        name: 'Single',
        symbol: '–',
    },
    [BondOrder.Double]: {
        name: 'Double',
        symbol: '=',
    },
    [BondOrder.Triple]: {
        name: 'Triple',
        symbol: '≡',
    },
};

function getMoleculeSelectionLabel({
    molecule,
    selection,
}: Readonly<{
    molecule: Readonly<Molecule>;
    selection: Readonly<
        Extract<
            MoleculeSelection,
            {
                type: MoleculeSelectionType.Atom | MoleculeSelectionType.Bond;
            }
        >
    >;
}>) {
    if (selection.type === MoleculeSelectionType.Atom) {
        const element =
            chemicalElements[assertWrap.isDefined(molecule.atoms[selection.atomIndex]).element];
        return {
            title: element.symbol,
            details: `${element.name} · ${element.atomicNumber}`,
            startSymbol: element.symbol,
            endSymbol: undefined,
        };
    }

    const bond = assertWrap.isDefined(molecule.bonds[selection.bondIndex]);
    const bondLabel = bondOrderLabels[bond.order];
    const startSymbol = assertWrap.isDefined(molecule.atoms[bond.atomIndexes[0]]).element;
    const endSymbol = assertWrap.isDefined(molecule.atoms[bond.atomIndexes[1]]).element;
    return {
        title: [
            startSymbol,
            endSymbol,
        ].join(bondLabel.symbol),
        details: `${bondLabel.name} bond`,
        startSymbol,
        endSymbol,
    };
}

function getAtomSelectionLabel({
    symbol,
    selection,
}: Readonly<{
    symbol: ChemicalElementSymbol;
    selection: Readonly<
        Extract<
            MoleculeSelection,
            {
                type: MoleculeSelectionType.Nucleus | MoleculeSelectionType.Orbital;
            }
        >
    >;
}>) {
    const element = chemicalElements[symbol];
    if (selection.type === MoleculeSelectionType.Nucleus) {
        return {
            title: 'Nucleus',
            details: `${element.atomicNumber} protons · ${element.massNumber - element.atomicNumber} neutrons`,
            color: undefined,
        };
    }
    const orbital = expandOrbitals(symbol).find(
        (eachOrbital) => eachOrbital.id === selection.orbitalId,
    );
    return orbital
        ? {
              title: html`
                  ${orbital.n}${orbital.shape}
                  <sub>${orbital.subscript}</sub>
              `,
              details: `${orbital.occupancy} ${orbital.occupancy === 1 ? 'electron' : 'electrons'} · shell ${orbital.n}`,
              color: getOrbitalCssColor(orbital),
          }
        : undefined;
}

export const VirMoleculeViewer = defineElement<
    {
        router: Pick<FrontendRouter, 'createRouteUrl' | 'setRouteOnDirectNavigation'>;
        /** While `undefined`, a spinner shows over whichever molecule was last shown. */
        molecule: Readonly<Molecule> | undefined;
    } & PartialWithUndefined<{
        /** Only read when the viewer is first created. After that the viewer adjusts it itself. */
        initialRenderQuality: Readonly<RenderQuality>;
        /** Width covered by other UI on the right, which the molecule is centered beside. */
        rightInsetPixels: number;
        /** Hides the viewer and stops drawing, but keeps its 3D scene ready to show again. */
        isHidden: boolean;
        /** Shows this element's atom instead of `molecule`. */
        atomSymbol: ChemicalElementSymbol;
        /** The atom orbital to show alone. Every orbital shows when omitted. */
        selectedOrbitalId: string;
        /** How strongly the atom's orbital clouds show, from 0 to 1. */
        orbitalOpacity: number;
        /** Shrinks the selection pop-up. */
        isPhone: boolean;
    }>
>()({
    tagName: 'vir-molecule-viewer',
    events: {
        renderQualityChange: defineElementEvent<Readonly<RenderQuality>>(),
        /** Tapping an atom's electron picks its orbital. `undefined` shows every orbital. */
        orbitalSelect: defineElementEvent<string | undefined>(),
    },
    hostClasses: {
        'vir-molecule-viewer-hidden'({inputs}) {
            return !!inputs.isHidden;
        },
        'vir-molecule-viewer-phone'({inputs}) {
            return !!inputs.isPhone;
        },
    },
    styles({hostClasses}) {
        return css`
            :host {
                display: block;
                position: relative;
                cursor: grab;
            }

            ${hostClasses['vir-molecule-viewer-hidden'].selector} {
                visibility: hidden;
            }

            :host(:active) {
                cursor: grabbing;
            }

            canvas {
                display: block;
                width: 100%;
                height: 100%;
                touch-action: none;
            }

            .loading {
                position: absolute;
                inset: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                pointer-events: none;
                visibility: hidden;
                animation: show-loading 0s 500ms forwards;

                & ${ViraIcon} {
                    width: 64px;
                    height: 64px;
                }
            }

            @keyframes show-loading {
                to {
                    visibility: visible;
                }
            }

            .selection-label {
                position: absolute;
                left: 16px;
                bottom: 16px;
                display: flex;
                align-items: center;
                gap: 24px;
                padding: 16px 24px;
                border-radius: 12px;
                font-size: 28px;
                ${colorCss(viraTheme.colors[themeDefaultKey])}
                border: 3px solid ${viraTheme.colors['vira-grey-foreground-decoration'].foreground
                    .value};
                pointer-events: none;

                & strong {
                    font-size: 56px;
                }

                & .details {
                    font-size: 24px;
                    opacity: 0.8;
                }

                & .selection-text {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                & .orbital-swatch {
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                }

                & ${ViraLink} {
                    pointer-events: auto;
                    cursor: pointer;
                    text-decoration: none;
                }
            }

            ${hostClasses['vir-molecule-viewer-phone'].selector} .selection-label {
                left: 8px;
                bottom: 8px;
                gap: 12px;
                padding: 8px 12px;
                border-width: 2px;
                font-size: 14px;

                & strong {
                    font-size: 24px;
                }

                & .details {
                    font-size: 12px;
                }

                & .orbital-swatch {
                    width: 24px;
                    height: 24px;
                }

                & ${VirAtomThumbnail} {
                    width: 32px;
                }
            }
        `;
    },
    state() {
        return {
            moleculeScene: undefined satisfies MoleculeScene | undefined as
                | MoleculeScene
                | undefined,
            selection: undefined satisfies MoleculeSelection | undefined as
                | MoleculeSelection
                | undefined,
        };
    },
    init({state, updateState, inputs, dispatch, events, host}) {
        void import('../three/molecule-scene.js').then(({createMoleculeScene}) => {
            if (!host.isConnected || state.moleculeScene) {
                return;
            }
            const moleculeScene = createMoleculeScene();
            /** The resize observer may have already fired before the scene existed. */
            moleculeScene.resize(host.getBoundingClientRect());
            if (inputs.initialRenderQuality) {
                moleculeScene.setRenderQuality(inputs.initialRenderQuality);
            }
            moleculeScene.listenToRenderQuality((quality) => {
                dispatch(
                    new events.renderQualityChange({
                        detail: quality,
                    }),
                );
            });
            moleculeScene.listenToSelection((selection, {isPicked}) => {
                if (isPicked && inputs.atomSymbol) {
                    dispatch(
                        new events.orbitalSelect({
                            detail:
                                selection?.type === MoleculeSelectionType.Orbital
                                    ? selection.orbitalId
                                    : undefined,
                        }),
                    );
                }
                updateState({
                    selection,
                });
            });
            updateState({
                moleculeScene,
            });
        });
    },
    cleanup({state, updateState}) {
        state.moleculeScene?.dispose();
        updateState({
            moleculeScene: undefined,
        });
    },
    render({inputs, state}) {
        if (state.moleculeScene && inputs.atomSymbol) {
            state.moleculeScene.setAtom(inputs.atomSymbol);
            state.moleculeScene.setOrbitalSelection(inputs.selectedOrbitalId);
            state.moleculeScene.setOrbitalOpacity(inputs.orbitalOpacity ?? 0.7);
        } else if (state.moleculeScene && inputs.molecule) {
            state.moleculeScene.setMolecule(inputs.molecule);
        }
        state.moleculeScene?.setRightInset(inputs.rightInsetPixels ?? 0);
        state.moleculeScene?.setPaused(!!inputs.isHidden);

        const selection = state.selection;
        const moleculeSelectionLabel =
            (selection?.type === MoleculeSelectionType.Atom ||
                selection?.type === MoleculeSelectionType.Bond) &&
            inputs.molecule &&
            !inputs.atomSymbol
                ? getMoleculeSelectionLabel({
                      molecule: inputs.molecule,
                      selection,
                  })
                : undefined;
        const atomSelectionLabel =
            (selection?.type === MoleculeSelectionType.Nucleus ||
                selection?.type === MoleculeSelectionType.Orbital) &&
            inputs.atomSymbol
                ? getAtomSelectionLabel({
                      symbol: inputs.atomSymbol,
                      selection,
                  })
                : undefined;

        function renderAtomLink(symbol: ChemicalElementSymbol) {
            return html`
                <${ViraLink.assign({
                    route: {
                        route: createAtomRoute(symbol),
                        router: inputs.router,
                    },
                    disableLinkStyles: true,
                })}
                    title=${chemicalElements[symbol].name}
                >
                    <${VirAtomThumbnail.assign({
                        symbol,
                    })}></${VirAtomThumbnail}>
                </${ViraLink}>
            `;
        }

        return html`
            <div
                style=${css`
                    height: 100%;
                `}
                ${onResize(({contentRect}) => {
                    state.moleculeScene?.resize(contentRect);
                })}
            >
                ${state.moleculeScene?.canvas}
            </div>
            ${(state.moleculeScene && (inputs.molecule || inputs.atomSymbol)) || inputs.isHidden
                ? ''
                : html`
                      <div
                          class="loading"
                          style=${css`
                              right: min(${inputs.rightInsetPixels ?? 0}px, 50%);
                          `}
                      >
                          <${ViraIcon.assign({
                              icon: LoaderAnimated24Icon,
                              fitContainer: true,
                          })}></${ViraIcon}>
                      </div>
                  `}
            ${moleculeSelectionLabel
                ? html`
                      <div class="selection-label">
                          ${renderAtomLink(moleculeSelectionLabel.startSymbol)}
                          <div class="selection-text">
                              <strong>${moleculeSelectionLabel.title}</strong>
                              <span class="details">${moleculeSelectionLabel.details}</span>
                          </div>
                          ${moleculeSelectionLabel.endSymbol
                              ? renderAtomLink(moleculeSelectionLabel.endSymbol)
                              : ''}
                      </div>
                  `
                : ''}
            ${atomSelectionLabel
                ? html`
                      <div class="selection-label">
                          ${atomSelectionLabel.color
                              ? html`
                                    <span
                                        class="orbital-swatch"
                                        style=${css`
                                            background-color: ${unsafeCSS(
                                                atomSelectionLabel.color,
                                            )};
                                        `}
                                    ></span>
                                `
                              : ''}
                          <div class="selection-text">
                              <strong>${atomSelectionLabel.title}</strong>
                              <span class="details">${atomSelectionLabel.details}</span>
                          </div>
                      </div>
                  `
                : ''}
        `;
    },
});
