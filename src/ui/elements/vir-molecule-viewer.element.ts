import {assertWrap} from '@augment-vir/assert';
import {type PartialWithUndefined} from '@augment-vir/common';
import {css, defineElement, html, onResize} from 'element-vir';
import {viraTheme} from 'vira';
import {chemicalElements} from '../../data/chemical-element.js';
import {BondOrder, type Molecule} from '../../data/molecule.js';
import {
    createMoleculeScene,
    type MoleculeSelection,
    MoleculeSelectionType,
} from '../three/molecule-scene.js';

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
            title: element.name,
            details: `${element.symbol} · atomic number ${element.atomicNumber}`,
        };
    }

    const bond = assertWrap.isDefined(molecule.bonds[selection.bondIndex]);
    const bondLabel = bondOrderLabels[bond.order];
    return {
        title: `${bondLabel.name} bond`,
        details: bond.atomIndexes
            .map((atomIndex) => assertWrap.isDefined(molecule.atoms[atomIndex]).element)
            .join(bondLabel.symbol),
    };
}

export const VirMoleculeViewer = defineElement<
    {
        molecule: Readonly<Molecule>;
    } & PartialWithUndefined<{
        enableVibration: boolean;
    }>
>()({
    tagName: 'vir-molecule-viewer',
    styles: css`
        :host {
            display: block;
            position: relative;
            cursor: grab;
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

        .selection-label {
            position: absolute;
            left: 12px;
            bottom: 12px;
            display: flex;
            flex-direction: column;
            padding: 8px 12px;
            border-radius: 6px;
            background-color: color-mix(
                in srgb,
                ${viraTheme.colors['vira-grey-behind-bg-highest-contrast'].background.value} 80%,
                transparent
            );
            color: ${viraTheme.colors['vira-grey-behind-bg-highest-contrast'].foreground.value};
            pointer-events: none;

            & .details {
                font-size: 0.85em;
                opacity: 0.8;
            }
        }
    `,
    state() {
        return {
            moleculeScene: createMoleculeScene(),
            selection: undefined satisfies MoleculeSelection | undefined as
                | MoleculeSelection
                | undefined,
        };
    },
    init({state, updateState}) {
        state.moleculeScene.listenToSelection((selection) => {
            updateState({
                selection,
            });
        });
    },
    cleanup({state}) {
        state.moleculeScene.dispose();
    },
    render({inputs, state}) {
        state.moleculeScene.setMolecule(inputs.molecule);
        state.moleculeScene.setEnableVibration(!!inputs.enableVibration);

        const selectionLabel = state.selection
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
                    state.moleculeScene.resize(contentRect);
                })}
            >
                ${state.moleculeScene.canvas}
            </div>
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
