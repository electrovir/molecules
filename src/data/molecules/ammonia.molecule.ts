import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, type Molecule} from '../molecule.js';

export const ammonia: Molecule = {
    name: 'Ammonia',
    description:
        'A nitrogen atom bonded to three hydrogen atoms in a squat pyramid. It is the sharp smell in some cleaning products and the starting point for most fertilizer.',
    atoms: [
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.4417,
                y: 0.2906,
                z: 0.8711,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.7256,
                y: 0.6896,
                z: -0.1907,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.4875,
                y: -0.8701,
                z: 0.2089,
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
    ],
};
