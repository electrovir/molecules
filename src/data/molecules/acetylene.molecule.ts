import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, type Molecule} from '../molecule.js';

export const acetylene: Molecule = {
    name: 'Acetylene',
    description:
        'Two carbon atoms joined by a triple bond, with a hydrogen on each end, all in a straight line. It burns hot enough to cut and weld steel.',
    atoms: [
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.6,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.6,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.665,
                y: 0,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.665,
                y: 0,
                z: 0.0001,
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
        {
            atomIndexes: [
                0,
                2,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                3,
            ],
            order: BondOrder.Single,
        },
    ],
};
