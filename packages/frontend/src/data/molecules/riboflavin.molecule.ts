import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 493570. */
const riboflavin: Molecule = {
    name: 'Riboflavin',
    structureDescription:
        'Three fused rings of carbon and nitrogen attached to a chain of carbons covered in OH groups.',
    realLifeDescription:
        'It is vitamin B2, and it turns urine bright yellow when you take extra. It glows yellow-green under ultraviolet light.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 280,
        waterSolubilityGramsPerLiter: 0.085,
        logP: -1.46,
        yearDiscovered: 1879,
        smell: 'faint',
        taste: 'bitter',
        habitat: 'Milk, eggs, liver, leafy greens, yeast, all plant and animal cells',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.5771,
                y: 1.7039,
                z: 0.6395,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 3.7723,
                y: -0.2458,
                z: -1.5605,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 5.718,
                y: 1.243,
                z: -0.2447,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 5.5145,
                y: 0.0984,
                z: 2.2992,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -4.6591,
                y: 1.6319,
                z: 1.0671,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.5992,
                y: 4.6697,
                z: -0.5235,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -0.3946,
                y: 0.1687,
                z: -0.6768,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -2.9293,
                y: -0.352,
                z: 0.4768,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.0056,
                y: 2.4739,
                z: -0.6013,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -3.1235,
                y: 3.1865,
                z: 0.2663,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.9687,
                y: 0.5944,
                z: -0.1701,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.9205,
                y: 0.4004,
                z: -1.2722,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.3813,
                y: 0.8488,
                z: -0.7328,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 4.443,
                y: 1.0385,
                z: 0.3673,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.7744,
                y: -1.1628,
                z: -0.3984,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.2594,
                y: 1.2169,
                z: -0.3852,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.0408,
                y: -1.3962,
                z: 0.1756,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.0439,
                y: -2.2771,
                z: -0.6628,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.5894,
                y: 0.8705,
                z: 0.2258,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 4.54,
                y: -0.1709,
                z: 1.2962,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.3785,
                y: -3.5763,
                z: -0.369,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.4555,
                y: -2.7049,
                z: 0.4666,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.6286,
                y: -3.7907,
                z: 0.1958,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.5852,
                y: 1.9285,
                z: 0.5726,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.5333,
                y: -4.7204,
                z: -0.6716,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.1039,
                y: -5.168,
                z: 0.521,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.8857,
                y: 3.4912,
                z: -0.3009,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.972,
                y: -0.3016,
                z: 0.4584,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.8753,
                y: 1.3221,
                z: -1.8685,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.2031,
                y: -0.3658,
                z: -2.0007,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.3733,
                y: 1.7451,
                z: -1.3654,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.2237,
                y: 1.9412,
                z: 0.949,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.0369,
                y: -2.1606,
                z: -1.0858,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.6022,
                y: -0.3935,
                z: 1.8094,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.8737,
                y: -1.0631,
                z: 0.7577,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.4369,
                y: -2.8635,
                z: 0.9096,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.7995,
                y: 1.4293,
                z: 1.1539,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.6643,
                y: -0.0534,
                z: -1.8967,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 6.3691,
                y: 1.3538,
                z: 0.4693,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.4773,
                y: -4.3846,
                z: -1.1148,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.784,
                y: -5.2658,
                z: 0.2441,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.0677,
                y: -5.4054,
                z: -1.3876,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.1083,
                y: -5.1583,
                z: 0.9586,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.1525,
                y: -5.7832,
                z: -0.3833,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.4395,
                y: -5.6435,
                z: 1.2498,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.7395,
                y: 3.9683,
                z: 0.4709,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.2118,
                y: 0.8746,
                z: 2.8008,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                36,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                12,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                37,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                38,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                46,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                23,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                5,
                26,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                6,
                11,
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
                18,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                8,
                15,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                8,
                26,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                26,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                45,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                12,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                27,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                28,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                29,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                30,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                31,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                16,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                14,
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                21,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                17,
                20,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                17,
                32,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                18,
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                19,
                33,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                19,
                34,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                20,
                22,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                20,
                24,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                21,
                22,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                21,
                35,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                22,
                25,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                24,
                39,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                24,
                40,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                24,
                41,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                25,
                42,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                25,
                43,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                25,
                44,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default riboflavin;
