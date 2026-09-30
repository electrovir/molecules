import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, type Molecule} from '../molecule.js';

const hydrogenBondLength = 0.7414;

export const hydrogen: Molecule = {
    name: 'Hydrogen',
    description:
        'Two hydrogen atoms sharing a single bond. It is the simplest and lightest molecule there is, and burning it with oxygen produces nothing but water.',
    atoms: [
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -hydrogenBondLength / 2,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: hydrogenBondLength / 2,
                y: 0,
                z: 0,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                1,
            ],
            order: BondOrder.Single,
        },
    ],
};
