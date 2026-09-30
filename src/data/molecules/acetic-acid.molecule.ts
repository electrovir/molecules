import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, type Molecule} from '../molecule.js';

export const aceticAcid: Molecule = {
    name: 'Acetic Acid',
    description:
        'Two carbon atoms, one of them carrying an acid group made of a double-bonded oxygen and an OH. It is what gives vinegar its sour taste and sharp smell.',
    atoms: [
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.3743,
                y: -0.3516,
                z: -0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.0907,
                y: -0.0496,
                z: 0.0006,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.8368,
                y: 0.057,
                z: -0.9021,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.84,
                y: 0.0676,
                z: 0.8952,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.5207,
                y: -1.4356,
                z: 0.0064,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.2598,
                y: 1.5081,
                z: -0.0008,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.3035,
                y: 1.289,
                z: -0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.98,
                y: -0.8878,
                z: -0.0002,
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
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                4,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                6,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                7,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                5,
                6,
            ],
            order: BondOrder.Single,
        },
    ],
};
