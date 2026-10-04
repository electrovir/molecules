// cspell:words benzimidazole omeprazole prilosec
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 4594. */
const omeprazole: Molecule = {
    name: 'Omeprazole',
    // cspell:disable-next-line
    pronunciation: 'OmˈɛpɹəzˌOl',
    structureDescription:
        'A benzimidazole ring linked through a sulfur and oxygen to a pyridine ring.',
    realLifeDescription:
        'It is the heartburn medicine in Prilosec, which turns down stomach acid. It works by switching off the tiny pumps in your stomach that make acid.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 156,
        logP: 2.23,
        hazardPictograms: [GhsPictogram.Irritant],
        yearDiscovered: 1979,
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: 0.2799,
                y: 0.7535,
                z: -0.8523,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 5.6802,
                y: -1.1956,
                z: -0.9111,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.4072,
                y: 2.2559,
                z: -0.6946,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -7.1752,
                y: -0.0818,
                z: 0.1901,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -2.5022,
                y: 1.0085,
                z: -0.7856,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.7125,
                y: -0.8269,
                z: 0.188,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 3.0758,
                y: 1.3692,
                z: 1.0722,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.1692,
                y: -0.0049,
                z: 0.5379,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.6466,
                y: 0.2489,
                z: 0.456,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.4644,
                y: -0.6385,
                z: -0.2174,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.397,
                y: 0.2739,
                z: -0.4568,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.6042,
                y: 0.3371,
                z: -0.3218,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 4.825,
                y: -0.3553,
                z: -0.2618,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.085,
                y: -0.8048,
                z: 0.282,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 5.312,
                y: 0.789,
                z: 0.3602,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.9174,
                y: -1.8598,
                z: -0.8757,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -4.9691,
                y: 0.6219,
                z: -0.377,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 4.4043,
                y: 1.6113,
                z: 1.0079,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.965,
                y: -1.7284,
                z: 0.8713,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -5.8306,
                y: -0.3083,
                z: 0.2142,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -5.3395,
                y: -1.4631,
                z: 0.8279,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 6.7599,
                y: 1.1362,
                z: 0.3412,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 6.2567,
                y: -2.2506,
                z: -0.1449,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -7.6184,
                y: 1.1125,
                z: -0.4496,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.9382,
                y: -1.073,
                z: 0.5858,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.7767,
                y: 0.4398,
                z: 1.4605,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.5082,
                y: 1.8901,
                z: -1.2814,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.0477,
                y: -1.6254,
                z: -1.4971,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.6371,
                y: -2.3342,
                z: -1.5505,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.6348,
                y: -2.6025,
                z: -0.1225,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -5.2846,
                y: 1.5336,
                z: -0.8669,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.7213,
                y: 2.5182,
                z: 1.5137,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.5932,
                y: -2.6284,
                z: 1.3503,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -6.029,
                y: -2.1717,
                z: 1.2809,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 6.9177,
                y: 2.1983,
                z: 0.5593,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 7.3008,
                y: 0.5521,
                z: 1.0919,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 7.1989,
                y: 0.9483,
                z: -0.6443,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 6.8888,
                y: -2.8477,
                z: -0.8081,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.48,
                y: -2.8993,
                z: 0.272,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 6.879,
                y: -1.8507,
                z: 0.6611,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -7.2495,
                y: 2.0066,
                z: 0.0645,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -8.7108,
                y: 1.1318,
                z: -0.3763,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -7.3713,
                y: 1.1144,
                z: -1.5167,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                2,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                0,
                7,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                10,
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
                22,
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
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                26,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                10,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                5,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                8,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                6,
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                24,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                25,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                12,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                9,
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                13,
            ],
            order: BondOrder.Double,
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
                12,
                14,
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
                17,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                14,
                21,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                27,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                28,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                29,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                19,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                16,
                30,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                17,
                31,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                18,
                20,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                18,
                32,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                19,
                20,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                20,
                33,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                21,
                34,
            ],
            order: BondOrder.Single,
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
                21,
                36,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                22,
                37,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                22,
                38,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                22,
                39,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                23,
                40,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                23,
                41,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                23,
                42,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default omeprazole;
