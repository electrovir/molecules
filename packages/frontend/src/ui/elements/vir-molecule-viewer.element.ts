import {assertWrap} from '@augment-vir/assert';
import {type PartialWithUndefined} from '@augment-vir/common';
import {colorCss} from '@electrovir/color';
import {css, defineElement, defineElementEvent, html, onResize} from 'element-vir';
import {themeDefaultKey} from 'theme-vir/dist/color-theme/color-theme.js';
import {LoaderAnimated24Icon, ViraIcon, viraTheme} from 'vira';
import {chemicalElements} from '../../data/chemical-element.js';
import {BondOrder, type Molecule} from '../../data/molecule.js';
import {type MoleculeScene} from '../three/molecule-scene.js';
import {type MoleculeSelection, MoleculeSelectionType} from '../three/molecule-selection.js';
import {type RenderQuality} from '../three/render-quality.js';

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

function getSelectionLabel({
    molecule,
    selection,
}: Readonly<{
    molecule: Readonly<Molecule>;
    selection: Readonly<MoleculeSelection>;
}>) {
    if (selection.type === MoleculeSelectionType.Atom) {
        const element =
            chemicalElements[assertWrap.isDefined(molecule.atoms[selection.atomIndex]).element];
        return {
            title: element.symbol,
            details: `${element.name} · ${element.atomicNumber}`,
        };
    }

    const bond = assertWrap.isDefined(molecule.bonds[selection.bondIndex]);
    const bondLabel = bondOrderLabels[bond.order];
    return {
        title: bond.atomIndexes
            .map((atomIndex) => assertWrap.isDefined(molecule.atoms[atomIndex]).element)
            .join(bondLabel.symbol),
        details: `${bondLabel.name} bond`,
    };
}

export const VirMoleculeViewer = defineElement<
    {
        /** While `undefined`, a spinner shows over whichever molecule was last shown. */
        molecule: Readonly<Molecule> | undefined;
    } & PartialWithUndefined<{
        /** Only read when the viewer is first created. After that the viewer adjusts it itself. */
        initialRenderQuality: Readonly<RenderQuality>;
        /** Width covered by other UI on the right, which the molecule is centered beside. */
        rightInsetPixels: number;
        /** Hides the viewer and stops drawing, but keeps its 3D scene ready to show again. */
        isHidden: boolean;
    }>
>()({
    tagName: 'vir-molecule-viewer',
    events: {
        renderQualityChange: defineElementEvent<Readonly<RenderQuality>>(),
    },
    hostClasses: {
        'vir-molecule-viewer-hidden'({inputs}) {
            return !!inputs.isHidden;
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
                flex-direction: column;
                gap: 4px;
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
            moleculeScene.listenToSelection((selection) => {
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
        if (state.moleculeScene && inputs.molecule) {
            state.moleculeScene.setMolecule(inputs.molecule);
        }
        state.moleculeScene?.setRightInset(inputs.rightInsetPixels ?? 0);
        state.moleculeScene?.setPaused(!!inputs.isHidden);

        const selectionLabel =
            state.selection && inputs.molecule
                ? getSelectionLabel({
                      molecule: inputs.molecule,
                      selection: state.selection,
                  })
                : undefined;

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
            ${(state.moleculeScene && inputs.molecule) || inputs.isHidden
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
            ${selectionLabel
                ? html`
                      <div class="selection-label">
                          <strong>${selectionLabel.title}</strong>
                          <span class="details">${selectionLabel.details}</span>
                      </div>
                  `
                : ''}
        `;
    },
});
