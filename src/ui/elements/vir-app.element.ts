// cspell:word Hyperlegible
import {assertWrap} from '@augment-vir/assert';
import {css, defineElement, html, listen} from 'element-vir';
import {allMolecules} from '../../data/all-molecules.js';
import {getMoleculeFormula} from '../../data/molecule.js';
import {
    createFrontendState,
    createMoleculeRoute,
    getRouteMolecule,
} from '../frontend-state/frontend-state.js';
import {VirMoleculeViewer} from './vir-molecule-viewer.element.js';

export const VirApp = defineElement()({
    tagName: 'vir-app',
    styles: css`
        :host {
            display: block;
            position: relative;
            height: 100%;
            overflow: hidden;
            background: radial-gradient(circle, #2a3448, #0f141e);
            color: white;
            font-family: 'Atkinson Hyperlegible Next', ui-sans-serif, system-ui, sans-serif;
        }

        ${VirMoleculeViewer} {
            position: absolute;
            inset: 0;
        }

        .overlay {
            position: absolute;
            top: 16px;
            left: 16px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            max-width: 400px;
            pointer-events: none;

            & h1,
            & p {
                margin: 0;
            }
        }

        .navigation {
            display: flex;
            gap: 8px;
            pointer-events: auto;

            & button {
                font-size: 1.5em;
            }
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
            frontendState: createFrontendState(),
        };
    },
    cleanup({state}) {
        state.frontendState.value.router.destroy();
        state.frontendState.destroy();
    },
    render({state}) {
        const molecule = getRouteMolecule(state.frontendState.value.currentRoute);
        const moleculeIndex = allMolecules.indexOf(molecule);

        function goToMolecule(indexOffset: number) {
            state.frontendState.value.router.setRoute(
                createMoleculeRoute(
                    assertWrap.isDefined(
                        allMolecules.at((moleculeIndex + indexOffset) % allMolecules.length),
                    ),
                ),
            );
        }

        return html`
            <${VirMoleculeViewer.assign({
                molecule,
            })}></${VirMoleculeViewer}>
            <div class="overlay">
                <div class="navigation">
                    <button
                        ${listen('click', () => {
                            goToMolecule(-1);
                        })}
                    >
                        ←
                    </button>
                    <button
                        ${listen('click', () => {
                            goToMolecule(1);
                        })}
                    >
                        →
                    </button>
                </div>
                <span class="entry-number">#${String(molecule.entryNumber).padStart(3, '0')}</span>
                <h1>${molecule.name}</h1>
                <span class="formula">${getMoleculeFormula(molecule.atoms)}</span>
                <p>${molecule.description}</p>
            </div>
        `;
    },
});
