import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 5754. */
const cortisol: Molecule = {
    name: 'Cortisol',
    routeName: 'cortisol',
    // cspell:disable-next-line
    pronunciation: 'kˈɔɹtəsˌɑl',
    structureDescription: 'Four fused rings of carbon decorated with oxygen atoms and OH groups.',
    realLifeDescription:
        'It is the main stress hormone, and creams that calm itchy skin contain it as hydrocortisone. Its level rises in the morning to help you wake up.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 220,
        densityGramsPerCubicCentimeter: 1.29,
        waterSolubilityGramsPerLiter: 0.32,
        logP: 1.61,
        hazardPictograms: [GhsPictogram.HealthHazard],
        taste: 'bitter',
        habitat: 'Adrenal glands of humans and other animals',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 3.1144,
                y: -0.2859,
                z: -1.9416,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.229,
                y: 2.1443,
                z: 1.2399,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 4.3267,
                y: 1.6729,
                z: 0.0603,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 6.7987,
                y: 0.5839,
                z: -0.4649,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -6.4227,
                y: -0.0344,
                z: -1.3444,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.8917,
                y: 0.1629,
                z: 0.1439,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.9976,
                y: -1.077,
                z: -0.0738,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.4048,
                y: -0.9389,
                z: 0.5376,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.1203,
                y: 0.2887,
                z: -0.1144,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.2007,
                y: -0.3456,
                z: -0.521,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.2023,
                y: 1.3572,
                z: -0.5469,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.6188,
                y: 0.4571,
                z: 0.3689,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.2481,
                y: 1.5819,
                z: -0.0645,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.8852,
                y: -2.2363,
                z: 0.3713,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.3025,
                y: -1.8232,
                z: -0.0778,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.2196,
                y: -2.2201,
                z: 0.2998,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.1566,
                y: 0.4723,
                z: 1.6434,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.3459,
                y: -0.8879,
                z: 0.2342,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.6438,
                y: -2.0894,
                z: 0.818,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.3005,
                y: 1.5233,
                z: -0.5375,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.7469,
                y: 0.8977,
                z: 1.8447,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 4.4119,
                y: 0.4683,
                z: -0.1739,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -4.8187,
                y: 1.5076,
                z: -0.4589,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -4.5569,
                y: -1.037,
                z: -0.3282,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -5.3417,
                y: 0.1333,
                z: -0.7839,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 5.7297,
                y: -0.2757,
                z: -0.1305,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.8473,
                y: -1.2116,
                z: -1.1581,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.3282,
                y: -0.7923,
                z: 1.6194,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.1826,
                y: 0.0413,
                z: -1.1878,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.1651,
                y: 1.1932,
                z: -1.631,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.7893,
                y: 2.2693,
                z: -0.3873,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.6965,
                y: 2.3364,
                z: -0.7206,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.5866,
                y: -3.1835,
                z: -0.0893,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.8513,
                y: -2.3707,
                z: 1.4585,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.9799,
                y: -1.9801,
                z: 0.768,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.6327,
                y: -2.4726,
                z: -0.8968,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.7411,
                y: -3.0685,
                z: 0.8028,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.2414,
                y: -2.4588,
                z: -0.7717,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.5932,
                y: 1.4674,
                z: 1.7778,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.2472,
                y: 0.4542,
                z: 2.2478,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.8417,
                y: -0.2458,
                z: 2.1066,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.6306,
                y: -2.0002,
                z: 1.9112,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.1861,
                y: -3.0161,
                z: 0.5933,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.0152,
                y: 1.3502,
                z: -1.5848,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.947,
                y: 2.5298,
                z: -0.2833,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.0849,
                y: 0.3299,
                z: 2.5058,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.5197,
                y: 1.9601,
                z: 1.9758,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.7681,
                y: 0.756,
                z: 2.2197,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.8725,
                y: -0.7647,
                z: -2.3175,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -5.224,
                y: 2.2162,
                z: -1.1896,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -5.1788,
                y: 1.797,
                z: 0.5334,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.2825,
                y: 2.9701,
                z: 1.1999,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -5.0341,
                y: -2.0073,
                z: -0.4142,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.7358,
                y: -1.0838,
                z: -0.8657,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.8942,
                y: -0.6856,
                z: 0.8696,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 6.8615,
                y: 1.2578,
                z: 0.2335,
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
                48,
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
                51,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                21,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                3,
                25,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                55,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                24,
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
                16,
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
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                26,
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
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                27,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                11,
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
                28,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                21,
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
                29,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                30,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                17,
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
                11,
                20,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                31,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                14,
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
                15,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                36,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                37,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                38,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                39,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                40,
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
                17,
                23,
            ],
            order: BondOrder.Double,
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
                18,
                42,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                19,
                22,
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
                20,
                47,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                21,
                25,
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
                49,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                22,
                50,
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
                52,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                25,
                53,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                25,
                54,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default cortisol;
