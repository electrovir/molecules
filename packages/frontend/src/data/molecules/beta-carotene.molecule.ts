import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 5280489. */
const betaCarotene: Molecule = {
    name: 'Beta-Carotene',
    // cspell:disable-next-line
    pronunciation: 'bˌAɾəkˈɛɹətin',
    structureDescription:
        'A long chain of alternating single and double bonds with a ring of six carbons on each end.',
    realLifeDescription:
        'It makes carrots orange, and your body turns it into vitamin A. Eating huge amounts of carrots can turn your skin slightly orange.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 183,
        densityGramsPerCubicCentimeter: 1,
        waterSolubilityGramsPerLiter: 0.0006,
        habitat: 'Carrots, pumpkins, spinach, sweet potatoes, algae',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -12.8901,
                y: -0.8145,
                z: -0.5076,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 12.8997,
                y: 0.441,
                z: 0.6411,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -14.2559,
                y: -0.0801,
                z: -0.4187,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 13.9687,
                y: -0.5754,
                z: 1.1283,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -14.1325,
                y: 1.4021,
                z: -0.7232,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 14.2584,
                y: -1.6458,
                z: 0.0914,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -11.7656,
                y: -0.011,
                z: 0.1873,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 11.7051,
                y: -0.2704,
                z: -0.0369,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -13.1937,
                y: 2.0628,
                z: 0.2749,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 12.9914,
                y: -2.4292,
                z: -0.2171,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -11.9254,
                y: 1.2838,
                z: 0.56,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 11.7507,
                y: -1.5779,
                z: -0.3966,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -12.5294,
                y: -1.027,
                z: -1.9959,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -13.1074,
                y: -2.1999,
                z: 0.1487,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 13.5556,
                y: 1.4186,
                z: -0.3613,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 12.4673,
                y: 1.2391,
                z: 1.8955,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -10.5162,
                y: -0.7258,
                z: 0.3915,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 10.5386,
                y: 0.5604,
                z: -0.2876,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -10.9033,
                y: 2.1251,
                z: 1.289,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 10.6162,
                y: -2.364,
                z: -1.0125,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -9.3101,
                y: -0.1674,
                z: 0.2,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 9.2794,
                y: 0.1212,
                z: -0.1333,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -8.0143,
                y: -0.8203,
                z: 0.3882,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 8.0576,
                y: 0.8903,
                z: -0.3702,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -8.0214,
                y: -2.2597,
                z: 0.8498,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 8.2067,
                y: 2.3079,
                z: -0.8682,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -6.8238,
                y: -0.2163,
                z: 0.1826,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 6.8152,
                y: 0.3903,
                z: -0.1964,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -5.4906,
                y: -0.7696,
                z: 0.3389,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 5.5378,
                y: 1.0456,
                z: -0.3959,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -4.3789,
                y: -0.0528,
                z: 0.0989,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 4.3476,
                y: 0.4561,
                z: -0.1936,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.9988,
                y: -0.5222,
                z: 0.2249,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.0244,
                y: 1.0661,
                z: -0.3595,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.7772,
                y: -1.9381,
                z: 0.6986,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.9783,
                y: 2.4996,
                z: -0.8248,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.9244,
                y: 0.254,
                z: -0.033,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.9379,
                y: 0.305,
                z: -0.1059,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.52,
                y: -0.0913,
                z: 0.054,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.5427,
                y: 0.6895,
                z: -0.2053,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -14.9809,
                y: -0.5336,
                z: -1.1065,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -14.678,
                y: -0.1942,
                z: 0.5896,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 14.9007,
                y: -0.0578,
                z: 1.3881,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 13.6261,
                y: -1.0679,
                z: 2.0491,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -15.118,
                y: 1.8792,
                z: -0.6708,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -13.7657,
                y: 1.5561,
                z: -1.7445,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 15.0309,
                y: -2.3289,
                z: 0.4631,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 14.6555,
                y: -1.1947,
                z: -0.8253,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -12.9377,
                y: 3.0589,
                z: -0.1072,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -13.7245,
                y: 2.2123,
                z: 1.2241,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 13.1799,
                y: -3.0184,
                z: -1.1229,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 12.7999,
                y: -3.1441,
                z: 0.5935,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -13.3418,
                y: -1.5315,
                z: -2.5315,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -11.634,
                y: -1.6498,
                z: -2.1064,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -12.3301,
                y: -0.0788,
                z: -2.507,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -12.2784,
                y: -2.8883,
                z: -0.0477,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -14.0093,
                y: -2.6823,
                z: -0.2474,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -13.2289,
                y: -2.1122,
                z: 1.2346,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 12.8973,
                y: 2.2601,
                z: -0.6035,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 13.8132,
                y: 0.9231,
                z: -1.3038,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 14.4766,
                y: 1.8465,
                z: 0.0515,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 13.3367,
                y: 1.6674,
                z: 2.4081,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 11.9395,
                y: 0.5977,
                z: 2.611,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 11.8023,
                y: 2.0723,
                z: 1.6424,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -10.594,
                y: -1.7437,
                z: 0.7546,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 10.735,
                y: 1.5667,
                z: -0.6416,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -11.4085,
                y: 2.7969,
                z: 1.9939,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -10.343,
                y: 2.7487,
                z: 0.5854,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -10.2131,
                y: 1.5415,
                z: 1.9032,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 10.0172,
                y: -2.8518,
                z: -0.2374,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 11.0083,
                y: -3.1587,
                z: -1.6589,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 9.9808,
                y: -1.7688,
                z: -1.6729,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -9.2338,
                y: 0.8426,
                z: -0.1967,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 9.0889,
                y: -0.8649,
                z: 0.2815,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -7.0523,
                y: -2.7392,
                z: 0.9778,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -8.5673,
                y: -2.8803,
                z: 0.1289,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -8.5251,
                y: -2.3381,
                z: 1.8208,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 8.7409,
                y: 2.9103,
                z: -0.1238,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 7.2876,
                y: 2.8471,
                z: -1.0927,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 8.7877,
                y: 2.3189,
                z: -1.7983,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -6.844,
                y: 0.8237,
                z: -0.1458,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 6.7362,
                y: -0.642,
                z: 0.1473,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -5.3867,
                y: -1.7974,
                z: 0.6561,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.5437,
                y: 2.0792,
                z: -0.714,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.4832,
                y: 0.9825,
                z: -0.2248,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.3471,
                y: -0.5839,
                z: 0.1336,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.275,
                y: -2.0922,
                z: 1.6638,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.2048,
                y: -2.644,
                z: -0.0234,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.7457,
                y: -2.2497,
                z: 0.8542,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.4831,
                y: 3.1529,
                z: -0.1041,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.9677,
                y: 2.8941,
                z: -0.9455,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.4696,
                y: 2.6034,
                z: -1.799,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.1061,
                y: 1.2785,
                z: -0.3592,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.0859,
                y: -0.7259,
                z: 0.2177,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.2764,
                y: -1.104,
                z: 0.3568,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.3341,
                y: 1.7091,
                z: -0.5157,
            },
        },
    ],
    bonds: [
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
                6,
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
                0,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                3,
            ],
            order: BondOrder.Single,
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
                14,
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
                2,
                4,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                40,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                41,
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
                42,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                43,
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
                44,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                45,
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
                5,
                46,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                47,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                10,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                6,
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                11,
            ],
            order: BondOrder.Double,
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
                8,
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                48,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                49,
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
                50,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                51,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                52,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                53,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                54,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                55,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                56,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                57,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                58,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                59,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                60,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                61,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                62,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                63,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                20,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                16,
                64,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                17,
                21,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                17,
                65,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                18,
                66,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                18,
                67,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                18,
                68,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                19,
                69,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                19,
                70,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                19,
                71,
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
                72,
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
                73,
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
                26,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                23,
                25,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                23,
                27,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                24,
                74,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                24,
                75,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                24,
                76,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                25,
                77,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                25,
                78,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                25,
                79,
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
                26,
                80,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                27,
                29,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                27,
                81,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                28,
                30,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                28,
                82,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                29,
                31,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                29,
                83,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                30,
                32,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                30,
                84,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                31,
                33,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                31,
                85,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                32,
                34,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                32,
                36,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                33,
                35,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                33,
                37,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                34,
                86,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                34,
                87,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                34,
                88,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                35,
                89,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                35,
                90,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                35,
                91,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                36,
                38,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                36,
                92,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                37,
                39,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                37,
                93,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                38,
                39,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                38,
                94,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                39,
                95,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default betaCarotene;
