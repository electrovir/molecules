import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, type Molecule} from '../molecule.js';

export const methane: Molecule = {
    name: 'Methane',
    description:
        'A carbon atom bonded to four hydrogen atoms that point to the corners of a tetrahedron. It is the main ingredient of natural gas.',
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
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.5541,
                y: 0.7996,
                z: 0.4965,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.6833,
                y: -0.8134,
                z: -0.2536,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.7782,
                y: -0.3735,
                z: 0.6692,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.4593,
                y: 0.3874,
                z: -0.9121,
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
    ],
};
