// cspell:word Hyperlegible
import {css, defineElement, html} from 'element-vir';
import {ViraCard} from 'vira';
import {allMolecules} from '../../data/all-molecules.js';
import {getMoleculeFormula} from '../../data/molecule.js';
import {VirMoleculeViewer} from './vir-molecule-viewer.element.js';

export const VirApp = defineElement()({
    tagName: 'vir-app',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 32px;
            box-sizing: border-box;
            min-height: 100%;
            padding: 32px;
            font-family: 'Atkinson Hyperlegible Next', ui-sans-serif, system-ui, sans-serif;
        }

        ${ViraCard} {
            display: flex;
            flex-wrap: wrap;
            gap: 32px;
            max-width: 900px;
        }

        ${VirMoleculeViewer} {
            width: 600px;
            height: 600px;
            border-radius: 8px;
            background: radial-gradient(circle, #2a3448, #0f141e);
        }

        .info {
            display: flex;
            flex-direction: column;
            gap: 8px;
            flex-basis: 300px;
            flex-grow: 1;

            & h1,
            & p {
                margin: 0;
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
    render() {
        return html`
            ${allMolecules.map((molecule) => {
                return html`
                    <${ViraCard}>
                        <${VirMoleculeViewer.assign({
                            molecule,
                        })}></${VirMoleculeViewer}>
                        <div class="info">
                            <span class="entry-number">
                                #${String(molecule.entryNumber).padStart(3, '0')}
                            </span>
                            <h1>${molecule.name}</h1>
                            <span class="formula">${getMoleculeFormula(molecule.atoms)}</span>
                            <p>${molecule.description}</p>
                        </div>
                    </${ViraCard}>
                `;
            })}
        `;
    },
});
