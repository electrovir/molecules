import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, type Molecule} from '../molecule.js';

export const caffeine: Molecule = {
    name: 'Caffeine',
    description:
        'Two fused rings of carbon and nitrogen, trimmed with oxygen atoms and methyl groups. It keeps you alert by blocking adenosine, the molecule that makes you feel sleepy.',
    atoms: [
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.8579,
                y: 0.2592,
                z: -0.0008,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.3897,
                y: -1.0264,
                z: -0.0004,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.0307,
                y: 1.422,
                z: -0.0006,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.9061,
                y: -0.2495,
                z: -0.0004,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.5032,
                y: -1.1998,
                z: 0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.4276,
                y: -2.696,
                z: 0.0008,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.1926,
                y: 1.2061,
                z: 0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.2969,
                y: 2.1881,
                z: 0.0007,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.5163,
                y: -1.5787,
                z: 0.0008,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.0451,
                y: -3.1973,
                z: -0.8937,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.5186,
                y: -2.7596,
                z: 0.0011,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.0447,
                y: -3.1963,
                z: 0.8957,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.1992,
                y: 0.7801,
                z: 0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.0468,
                y: 1.8092,
                z: -0.8992,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.0466,
                y: 1.8083,
                z: 0.9004,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.8087,
                y: 3.1651,
                z: -0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.9322,
                y: 2.1027,
                z: 0.8881,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.9346,
                y: 2.1021,
                z: -0.8849,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -0.9686,
                y: -1.3125,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 2.2182,
                y: 0.1412,
                z: -0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.3477,
                y: 1.0797,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 1.4119,
                y: -1.9372,
                z: 0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.47,
                y: 2.5688,
                z: 0.0006,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -3.1271,
                y: -0.4436,
                z: -0.0003,
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
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                21,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                20,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                22,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                3,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                20,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                23,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                4,
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                21,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                5,
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                12,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                20,
            ],
            order: BondOrder.Single,
        },
    ],
};
