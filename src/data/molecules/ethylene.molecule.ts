import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, type Molecule} from '../molecule.js';

export const ethylene: Molecule = {
    name: 'Ethylene',
    description:
        'Two carbon atoms joined by a double bond, each holding two hydrogens, all in one flat plane. Plants release it to ripen fruit, and it is the building block of polyethylene plastic.',
    atoms: [
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.6672,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.6672,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.2213,
                y: -0.929,
                z: 0.0708,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.2212,
                y: 0.929,
                z: -0.0708,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.2213,
                y: 0.929,
                z: -0.0708,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.2213,
                y: -0.929,
                z: 0.0708,
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
                1,
                4,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                5,
            ],
            order: BondOrder.Single,
        },
    ],
};
