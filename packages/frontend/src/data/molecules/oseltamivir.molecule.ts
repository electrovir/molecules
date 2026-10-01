// cspell:words oseltamivir shikimic tamiflu
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 65028. */
const oseltamivir: Molecule = {
    name: 'Oseltamivir',
    description:
        'A ring of six carbons with an ester, an amine, an amide, and a branched ether. It is Tamiflu, which slows the flu virus from spreading.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        logP: 1,
        habitat: 'Made in labs from shikimic acid, once extracted from star anise',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.4386,
                y: -0.8054,
                z: -0.4963,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -4.0579,
                y: -0.0459,
                z: -0.2174,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -3.271,
                y: -1.7491,
                z: 1.1388,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 3.0145,
                y: 1.4654,
                z: -1.6628,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 1.8847,
                y: 2.0332,
                z: 0.2911,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -0.5874,
                y: 3.5639,
                z: 0.1757,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.6178,
                y: 1.4047,
                z: -0.0256,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.5544,
                y: 2.1682,
                z: 0.6189,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.6391,
                y: -0.0684,
                z: 0.4305,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.897,
                y: 1.5028,
                z: 0.2709,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.7241,
                y: -0.6985,
                z: 0.5076,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.8564,
                y: 0.0133,
                z: 0.4242,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.087,
                y: -1.897,
                z: 0.1368,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.4318,
                y: -1.4103,
                z: 0.688,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.294,
                y: -3.0347,
                z: -0.8701,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.1255,
                y: -0.7144,
                z: 0.5073,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.9729,
                y: 2.006,
                z: -0.5608,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 4.1988,
                y: -2.5157,
                z: 1.4024,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.9859,
                y: -3.5565,
                z: -1.4498,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 4.151,
                y: 2.7559,
                z: 0.0009,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -5.3615,
                y: -0.6371,
                z: -0.2333,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -6.2811,
                y: 0.2196,
                z: -1.0771,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.5093,
                y: 1.4337,
                z: -1.1197,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.4265,
                y: 2.1654,
                z: 1.7102,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.0762,
                y: -0.1085,
                z: 1.4382,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.6769,
                y: 1.9282,
                z: 0.9159,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.1718,
                y: 1.7358,
                z: -0.767,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.765,
                y: -1.7761,
                z: 0.643,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.4819,
                y: -2.296,
                z: 0.962,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.9866,
                y: 2.4647,
                z: 1.2054,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.2842,
                y: 4.0242,
                z: 0.4346,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.3326,
                y: 4.0604,
                z: 0.6622,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.2722,
                y: -0.5844,
                z: 1.3906,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.0465,
                y: -0.9952,
                z: -0.1202,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.9167,
                y: -2.6833,
                z: -1.702,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.8082,
                y: -3.8817,
                z: -0.4054,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.5717,
                y: -3.0213,
                z: 2.1433,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.0591,
                y: -2.0873,
                z: 1.9276,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.5906,
                y: -3.2592,
                z: 0.7027,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.1823,
                y: -4.3802,
                z: -2.1435,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.4538,
                y: -2.7742,
                z: -1.9998,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.3287,
                y: -3.9294,
                z: -0.6578,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.4238,
                y: 2.3442,
                z: 0.9768,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.0059,
                y: 2.6594,
                z: -0.6739,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.8978,
                y: 3.8143,
                z: 0.1081,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -5.7473,
                y: -0.6975,
                z: 0.7905,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -5.3001,
                y: -1.645,
                z: -0.6588,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -6.3378,
                y: 1.2362,
                z: -0.6741,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -5.8985,
                y: 0.3041,
                z: -2.0995,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -7.2888,
                y: -0.2039,
                z: -1.1108,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                12,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                20,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                15,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                3,
                16,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                4,
                6,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                29,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                7,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                30,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                31,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                7,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                22,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                24,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                25,
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
                10,
                11,
            ],
            order: BondOrder.Double,
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
                15,
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
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                28,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                32,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                33,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                34,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                35,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                17,
                36,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                17,
                37,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                17,
                38,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                18,
                39,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                18,
                40,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                18,
                41,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                19,
                42,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                19,
                43,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                19,
                44,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                20,
                21,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                20,
                45,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                20,
                46,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                21,
                47,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                21,
                48,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                21,
                49,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default oseltamivir;
