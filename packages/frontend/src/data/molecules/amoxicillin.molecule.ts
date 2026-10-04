import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 33613. */
const amoxicillin: Molecule = {
    name: 'Amoxicillin',
    // cspell:disable-next-line
    pronunciation: 'əmˌɑksəsˈɪlɪn',
    structureDescription:
        'A four-membered ring fused to a ring holding sulfur, with a side chain carrying a benzene ring with an OH group.',
    realLifeDescription:
        'It is the most common antibiotic for kids. It is a close cousin of penicillin, the first antibiotic.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 194,
        densityGramsPerCubicCentimeter: 1.6,
        waterSolubilityGramsPerLiter: 2.7,
        logP: 0.87,
        hazardPictograms: [
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
        ],
        yearDiscovered: 1958,
        smell: 'penicillin-like',
        taste: 'bitter',
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: 0.8127,
                y: -0.5305,
                z: 1.047,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.5412,
                y: 1.9384,
                z: -2.1377,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 5.1164,
                y: -1.8059,
                z: -0.0667,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 4.3753,
                y: -0.4801,
                z: 1.6331,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.1798,
                y: 2.444,
                z: 1.6021,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -4.1594,
                y: -3.4891,
                z: 0.0834,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 2.7863,
                y: 0.7498,
                z: -0.1147,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -0.1496,
                y: 1.9689,
                z: -0.4201,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -3.5725,
                y: 2.8271,
                z: 0.2755,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.8063,
                y: 1.0059,
                z: 0.9417,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.8293,
                y: -1.442,
                z: -0.2179,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.121,
                y: -0.6204,
                z: -0.4284,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.2349,
                y: 2.1188,
                z: 0.0479,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.2954,
                y: 1.6814,
                z: -0.9812,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.0775,
                y: -2.8717,
                z: 0.2742,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.0045,
                y: -1.4983,
                z: -1.5148,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 4.2478,
                y: -0.9379,
                z: 0.5072,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.2582,
                y: 2.1473,
                z: 0.411,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.5838,
                y: 1.9144,
                z: -0.3056,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.0064,
                y: 0.4636,
                z: -0.2012,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.1874,
                y: -0.2708,
                z: -1.3592,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.2022,
                y: -0.0926,
                z: 1.0502,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.5775,
                y: -1.6066,
                z: -1.2626,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.5921,
                y: -1.4285,
                z: 1.1467,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.7798,
                y: -2.1854,
                z: -0.0097,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.2561,
                y: 1.3404,
                z: 1.8807,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.4766,
                y: -0.665,
                z: -1.4646,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.4211,
                y: 3.1321,
                z: 0.4236,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.139,
                y: -3.4302,
                z: 0.3738,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.7069,
                y: -3.4212,
                z: -0.4352,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.5758,
                y: -2.8963,
                z: 1.2496,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.5603,
                y: -2.0263,
                z: -2.2987,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.06,
                y: -2.0365,
                z: -1.3702,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.7635,
                y: -0.5048,
                z: -1.9058,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.3223,
                y: 1.7159,
                z: -1.3903,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.4633,
                y: 2.196,
                z: -1.3593,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.8621,
                y: -2.0269,
                z: 0.5312,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.4541,
                y: 2.7374,
                z: -0.2289,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.2689,
                y: 3.7907,
                z: 0.1369,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.0315,
                y: 0.1684,
                z: -2.34,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.0658,
                y: 0.4817,
                z: 1.9615,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.7211,
                y: -2.1915,
                z: -2.167,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.747,
                y: -1.8675,
                z: 2.1286,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.2526,
                y: -3.7236,
                z: 1.0227,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                9,
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
                13,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                2,
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                36,
            ],
            order: BondOrder.Single,
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
                17,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                5,
                24,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                43,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                9,
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
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                12,
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
                34,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                37,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                38,
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
                25,
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
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
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
                26,
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
                27,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                28,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                29,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                30,
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
                15,
                33,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                17,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                18,
                19,
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
                19,
                20,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                19,
                21,
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
                39,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                21,
                23,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                21,
                40,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                22,
                24,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                22,
                41,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                23,
                24,
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

export default amoxicillin;
