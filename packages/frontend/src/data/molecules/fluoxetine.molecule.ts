import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 3386. */
const fluoxetine: Molecule = {
    name: 'Fluoxetine',
    routeName: 'fluoxetine',
    // cspell:disable-next-line
    pronunciation: 'fluˈɑksətˌin',
    structureDescription:
        'A benzene ring with a CF₃ group, linked through an oxygen to a chain carrying another benzene ring and a methylamine group.',
    realLifeDescription: 'It is the antidepressant Prozac.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 180.5,
        logP: 4.05,
        hazardPictograms: [
            GhsPictogram.Corrosive,
            GhsPictogram.AcuteToxicity,
            GhsPictogram.HealthHazard,
            GhsPictogram.EnvironmentalHazard,
        ],
        yearDiscovered: 1972,
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: -5.2489,
                y: -0.7521,
                z: -0.5604,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: -4.889,
                y: -0.2326,
                z: 1.5144,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: -5.2626,
                y: 1.334,
                z: 0.0532,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.9228,
                y: 0.5594,
                z: -0.8225,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 4.015,
                y: 3.402,
                z: -0.0208,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.8384,
                y: 0.2582,
                z: 0.2325,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.0921,
                y: 1.1338,
                z: 0.0739,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.1195,
                y: -1.2259,
                z: 0.1958,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.7888,
                y: 2.6305,
                z: 0.1501,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.093,
                y: -1.8912,
                z: -1.019,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.3977,
                y: -1.8928,
                z: 1.3776,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.3912,
                y: 0.4627,
                z: -0.5703,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.3519,
                y: -3.2615,
                z: -1.0529,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.6568,
                y: -3.263,
                z: 1.3438,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.1979,
                y: -0.4234,
                z: -1.3034,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.9894,
                y: 1.2454,
                z: 0.4311,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.1434,
                y: 0.2602,
                z: -0.0448,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.6338,
                y: -3.9473,
                z: 0.1285,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.7372,
                y: 4.8307,
                z: 0.0088,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.5645,
                y: -0.524,
                z: -1.0425,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.356,
                y: 1.1448,
                z: 0.6921,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -4.6041,
                y: 0.1523,
                z: 0.235,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.3903,
                y: 0.4993,
                z: 1.2059,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.8265,
                y: 0.8655,
                z: 0.8447,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.5581,
                y: 0.9177,
                z: -0.8973,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.0662,
                y: 2.9008,
                z: -0.6291,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.336,
                y: 2.8564,
                z: 1.1228,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.9,
                y: -1.3792,
                z: -1.9569,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.4198,
                y: -1.3685,
                z: 2.3286,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.4496,
                y: 3.1621,
                z: -0.9116,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.3394,
                y: -3.7935,
                z: -1.9997,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.8772,
                y: -3.797,
                z: 2.2635,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.7592,
                y: -1.0365,
                z: -2.0865,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.3969,
                y: 1.9537,
                z: 1.0049,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.837,
                y: -5.0139,
                z: 0.1019,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.6729,
                y: 5.3862,
                z: -0.1088,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.296,
                y: 5.1294,
                z: 0.9653,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.0659,
                y: 5.1274,
                z: -0.8038,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.1614,
                y: -1.2181,
                z: -1.6276,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.7988,
                y: 1.7624,
                z: 1.469,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                21,
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
                21,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                5,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                11,
            ],
            order: BondOrder.Single,
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
                18,
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
                22,
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
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                24,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                9,
            ],
            order: BondOrder.Double,
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
                8,
                25,
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
                9,
                12,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                27,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                13,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                10,
                28,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                14,
            ],
            order: BondOrder.Double,
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
                17,
            ],
            order: BondOrder.Double,
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
                17,
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
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                32,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                20,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                15,
                33,
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
                20,
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
                34,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                18,
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
                19,
                38,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                20,
                39,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default fluoxetine;
