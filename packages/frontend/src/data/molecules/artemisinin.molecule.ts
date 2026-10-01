// cspell:words annua artemisinin youyou
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 68827. */
const artemisinin: Molecule = {
    name: 'Artemisinin',
    structureDescription: 'Three rings with a bridge of two linked oxygens across one of them.',
    realLifeDescription:
        'It comes from sweet wormwood and is a frontline malaria medicine. Tu Youyou won a Nobel Prize for finding it after studying ancient Chinese medicine books.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 154.5,
        densityGramsPerCubicCentimeter: 1.24,
        logP: 2.9,
        hazardPictograms: [
            GhsPictogram.Flammable,
            GhsPictogram.EnvironmentalHazard,
        ],
        yearDiscovered: 1972,
        habitat: 'Sweet wormwood leaves (Artemisia annua)',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.4252,
                y: -0.6113,
                z: -1.5237,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.2458,
                y: -1.2966,
                z: 1.1754,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.0859,
                y: -1.5145,
                z: 0.9859,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.8936,
                y: -1.9136,
                z: -1.0661,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 3.3238,
                y: -1.723,
                z: 0.9847,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.0882,
                y: 0.2179,
                z: -0.3851,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.1855,
                y: 1.3234,
                z: -0.361,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.3016,
                y: 0.8085,
                z: -0.6947,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.801,
                y: 2.5229,
                z: 0.5493,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.0232,
                y: -0.5876,
                z: 0.9278,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.6603,
                y: 1.9621,
                z: 0.2517,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.588,
                y: 0.7824,
                z: 0.0088,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.5974,
                y: 3.0536,
                z: 0.2112,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.3458,
                y: -0.323,
                z: -0.7226,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.8713,
                y: -1.6894,
                z: -0.0476,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.9166,
                y: -0.637,
                z: -0.4718,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.8086,
                y: 3.6752,
                z: 0.4553,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.3161,
                y: -1.2026,
                z: 0.5133,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.764,
                y: 0.1884,
                z: -0.9898,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.5476,
                y: -3.0359,
                z: 0.199,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.2739,
                y: 1.7028,
                z: -1.3909,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.2728,
                y: 1.2244,
                z: -1.7136,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.7895,
                y: 2.1866,
                z: 1.5943,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.1099,
                y: 0.0728,
                z: 1.7899,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.6144,
                y: 2.414,
                z: -0.0414,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.7867,
                y: 1.6037,
                z: 1.2796,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.3519,
                y: 1.4602,
                z: -0.3929,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.7128,
                y: 0.8092,
                z: 1.0997,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.8755,
                y: 3.8461,
                z: 0.9167,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.5895,
                y: 3.5112,
                z: -0.7868,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.0994,
                y: -0.9953,
                z: -1.5564,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.8928,
                y: -0.889,
                z: -0.0374,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.0491,
                y: -0.6443,
                z: -1.5606,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.9279,
                y: 4.014,
                z: -0.5794,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.7917,
                y: 3.3801,
                z: 0.8342,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.4774,
                y: 4.5304,
                z: 1.0545,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.4389,
                y: -0.6475,
                z: -1.2069,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.7839,
                y: 0.8615,
                z: -1.8531,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.178,
                y: 0.7153,
                z: -0.1236,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.2771,
                y: -2.9755,
                z: 1.0138,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.0456,
                y: -3.4025,
                z: -0.7049,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.8051,
                y: -3.7891,
                z: 0.488,
            },
        },
    ],
    bonds: [
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
                5,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                17,
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
                9,
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
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                20,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                21,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                12,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                22,
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
                10,
                12,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                24,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                25,
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
                26,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                27,
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
                12,
                29,
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
                13,
                30,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                31,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                32,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                33,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                34,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                35,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                18,
                36,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                18,
                37,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                18,
                38,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                19,
                39,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                19,
                40,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                19,
                41,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default artemisinin;
