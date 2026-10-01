// cspell:words triphosphate
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 5957. */
const adenosineTriphosphate: Molecule = {
    name: 'Adenosine Triphosphate',
    structureDescription:
        'Adenine and a ribose sugar ring attached to a chain of three phosphate groups.',
    realLifeDescription:
        'Known as ATP, it is the molecule every cell spends for energy. Your body makes and recycles about its own weight in ATP every day.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 187,
        waterSolubilityGramsPerLiter: 1000,
        logP: -5.5,
        yearDiscovered: 1929,
        habitat: 'Every living cell',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.P,
            position: {
                x: 2.4265,
                y: -1.6857,
                z: -1.6031,
            },
        },
        {
            element: ChemicalElementSymbol.P,
            position: {
                x: 3.9689,
                y: 0.2041,
                z: 0.0446,
            },
        },
        {
            element: ChemicalElementSymbol.P,
            position: {
                x: 2.2747,
                y: 1.303,
                z: 2.1955,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.0178,
                y: -1.3778,
                z: 0.9927,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -4.3652,
                y: -2.3641,
                z: 0.1309,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.5758,
                y: -3.9668,
                z: 1.4015,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.3208,
                y: -1.9591,
                z: -0.4537,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 3.7219,
                y: -1.149,
                z: -0.8007,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.8767,
                y: -3.1624,
                z: -2.087,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.9724,
                y: -0.782,
                z: -2.7124,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.7556,
                y: 0.2051,
                z: 1.1116,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 3.5653,
                y: 1.383,
                z: -0.9853,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 5.3343,
                y: 0.3384,
                z: 0.6516,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.7777,
                y: 2.534,
                z: 1.2735,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.8978,
                y: 0.6865,
                z: 2.7749,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 3.3046,
                y: 1.6552,
                z: 3.2283,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -2.6388,
                y: 0.2831,
                z: 0.4989,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -3.6007,
                y: 2.2916,
                z: 0.3624,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -0.7069,
                y: 0.6511,
                z: -0.9276,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -0.682,
                y: 2.9223,
                z: -1.8204,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -2.3836,
                y: 4.5242,
                z: -1.3048,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.9897,
                y: -2.1242,
                z: -0.0859,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.123,
                y: -3.3336,
                z: 0.2049,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.4294,
                y: -1.1072,
                z: 0.8967,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.7601,
                y: -2.7011,
                z: 0.4686,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.0836,
                y: -2.5627,
                z: -0.7909,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.841,
                y: 1.032,
                z: -0.3205,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.6828,
                y: 1.0847,
                z: 0.8822,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.4541,
                y: 2.2726,
                z: -0.3915,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.8319,
                y: 3.2377,
                z: -1.1771,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.1981,
                y: 1.6671,
                z: -1.658,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.8499,
                y: -1.7973,
                z: -1.1228,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.1212,
                y: -4.0831,
                z: -0.5917,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.8607,
                y: -1.2132,
                z: 1.8999,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.1966,
                y: -3.2397,
                z: 1.2389,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.4109,
                y: -1.9406,
                z: -1.5424,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.2771,
                y: -3.5479,
                z: -1.2272,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.4943,
                y: -2.5765,
                z: 1.0706,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.4307,
                y: -4.3847,
                z: 1.2014,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.4692,
                y: 0.7349,
                z: 1.5371,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.7256,
                y: 1.4585,
                z: -2.1836,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.2418,
                y: 4.7619,
                z: -0.8261,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.913,
                y: 5.208,
                z: -1.8817,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.3128,
                y: -3.6443,
                z: -2.7289,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.2015,
                y: 1.6396,
                z: -1.6863,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.5146,
                y: 3.3749,
                z: 1.7047,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.4457,
                y: 1.1452,
                z: 3.5146,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                6,
            ],
            order: BondOrder.Single,
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
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                9,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                1,
                7,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                12,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                2,
                10,
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
                14,
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
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                24,
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
                37,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                22,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                38,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                25,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                43,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                44,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                45,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                46,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                26,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                27,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                17,
                27,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                17,
                28,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                18,
                26,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                18,
                30,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                19,
                29,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                19,
                30,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                20,
                29,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                20,
                41,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                20,
                42,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                21,
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
                21,
                31,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                22,
                24,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                22,
                32,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                23,
                33,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                24,
                25,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                24,
                34,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                25,
                35,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                25,
                36,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                26,
                28,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                27,
                39,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                28,
                29,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                30,
                40,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default adenosineTriphosphate;
