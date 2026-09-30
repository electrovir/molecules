import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, type Molecule} from '../molecule.js';

export const formaldehyde: Molecule = {
    name: 'Formaldehyde',
    description:
        'A carbon atom double-bonded to an oxygen and holding two hydrogens, all flat. It is used to preserve specimens and to make resins and glues.',
    atoms: [
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.6123,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.2,
                y: 0.2426,
                z: -0.8998,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.2,
                y: -0.2424,
                z: 0.8998,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.6123,
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
        {
            atomIndexes: [
                0,
                2,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                3,
            ],
            order: BondOrder.Double,
        },
    ],
};
