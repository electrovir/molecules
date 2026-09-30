import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, type Molecule} from '../molecule.js';

export const carbonDioxide: Molecule = {
    name: 'Carbon Dioxide',
    description:
        'A carbon atom double-bonded to two oxygen atoms in a straight line. You breathe it out, plants take it in, and it traps heat in the atmosphere.',
    atoms: [
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.197,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.197,
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
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                0,
                2,
            ],
            order: BondOrder.Double,
        },
    ],
};
