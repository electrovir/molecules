import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, type Molecule} from '../molecule.js';

export const carbonMonoxide: Molecule = {
    name: 'Carbon Monoxide',
    description:
        'A carbon atom and an oxygen atom joined by a triple bond. It is colorless and odorless, and it is poisonous because it grabs onto the hemoglobin that should be carrying oxygen in your blood.',
    atoms: [
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.5285,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.5285,
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
            order: BondOrder.Triple,
        },
    ],
};
