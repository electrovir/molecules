// cspell:words streptomyces
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 54675776. */
const tetracycline: Molecule = {
    name: 'Tetracycline',
    // cspell:disable-next-line
    pronunciation: 'tˌɛtɹəsˈIklˌin',
    structureDescription: 'Four fused six-membered rings covered in OH groups and ketones.',
    realLifeDescription:
        "It is an antibiotic, and it can stain children's growing teeth yellow. It glows yellow under ultraviolet light.",
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 172.5,
        waterSolubilityGramsPerLiter: 0.231,
        logP: -1.3,
        yearDiscovered: 1953,
        habitat: 'Streptomyces soil bacteria, traces in ancient Nubian bones',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.5914,
                y: -0.7645,
                z: 2.1648,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.1086,
                y: -2.7046,
                z: -1.7224,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.163,
                y: -0.497,
                z: 3.2468,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.4506,
                y: 1.9068,
                z: 1.8295,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.8589,
                y: 1.3311,
                z: 2.1596,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 3.086,
                y: 0.6557,
                z: -2.4798,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -3.6503,
                y: 2.6293,
                z: 0.7489,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 3.4239,
                y: 3.3074,
                z: -1.0544,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 4.0483,
                y: -1.3482,
                z: -0.3384,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 1.1409,
                y: 3.4533,
                z: -0.7408,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.5768,
                y: -1.4318,
                z: 0.0463,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.9469,
                y: -1.7735,
                z: 0.1959,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.2355,
                y: -1.4889,
                z: -0.7466,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.5557,
                y: -0.4377,
                z: 1.2383,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.7293,
                y: -1.1214,
                z: -0.9234,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.3269,
                y: -2.0242,
                z: -0.4819,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.9837,
                y: -0.6463,
                z: 1.1807,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.2365,
                y: -0.5394,
                z: 2.0224,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.7735,
                y: 1.0072,
                z: 0.8253,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.1384,
                y: -0.745,
                z: -0.6836,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.6957,
                y: 0.3303,
                z: -1.3576,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.9156,
                y: 0.316,
                z: 1.2253,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.2446,
                y: 1.3778,
                z: -0.3838,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.9598,
                y: 0.3627,
                z: 0.1774,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.1677,
                y: -2.9795,
                z: 0.3875,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -4.1253,
                y: -0.6881,
                z: -1.6873,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 4.153,
                y: -2.7162,
                z: 0.1659,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 5.0946,
                y: -1.0834,
                z: -1.3241,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.7489,
                y: 1.5087,
                z: -0.0284,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.3478,
                y: 2.7992,
                z: -0.7602,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -4.9038,
                y: 0.4527,
                z: -1.8642,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -4.7124,
                y: 1.5517,
                z: -1.0379,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.6862,
                y: -2.4445,
                z: 0.4526,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.6878,
                y: -2.696,
                z: 0.7369,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.3187,
                y: -2.2862,
                z: -1.495,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.0632,
                y: -0.556,
                z: -1.2983,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.5976,
                y: -1.7393,
                z: -1.8235,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.6501,
                y: -3.9344,
                z: 0.5378,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.1187,
                y: -3.2257,
                z: -0.1007,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.3936,
                y: -2.5533,
                z: 1.3711,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.6277,
                y: -0.085,
                z: 2.8586,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.6614,
                y: -3.5467,
                z: -1.5304,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.2994,
                y: -1.5409,
                z: -2.339,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.5748,
                y: -2.8806,
                z: 1.0788,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.8627,
                y: -3.4612,
                z: -0.5843,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.1872,
                y: -2.9353,
                z: 0.4599,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.9327,
                y: -1.6178,
                z: -2.2675,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.2152,
                y: -0.0146,
                z: -1.5258,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 6.072,
                y: -1.3965,
                z: -0.9358,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.3379,
                y: 1.4349,
                z: 2.6701,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.1454,
                y: 1.1584,
                z: 2.7945,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -5.6584,
                y: 0.4811,
                z: -2.6444,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -5.3275,
                y: 2.4352,
                z: -1.1885,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.2688,
                y: 2.993,
                z: -0.4985,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.0799,
                y: 4.4375,
                z: -0.9798,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.2832,
                y: 3.301,
                z: 0.4428,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                40,
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
                41,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                17,
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
                49,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                21,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                50,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                20,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                6,
                28,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                55,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                29,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                8,
                14,
            ],
            order: BondOrder.Single,
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
                8,
                27,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                29,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                53,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                54,
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
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                32,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                12,
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
                11,
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                33,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                34,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                35,
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
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                20,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                36,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                24,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                21,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                18,
                22,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                19,
                23,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                19,
                25,
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
                21,
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                22,
                29,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                23,
                28,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                24,
                37,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                24,
                38,
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
                25,
                30,
            ],
            order: BondOrder.Double,
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
                26,
                43,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                26,
                44,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                26,
                45,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                27,
                46,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                27,
                47,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                27,
                48,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                28,
                31,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                30,
                31,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                30,
                51,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                31,
                52,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default tetracycline;
