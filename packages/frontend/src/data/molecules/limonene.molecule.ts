import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 22311. */
const limonene: Molecule = {
    name: 'Limonene',
    routeName: 'limonene',
    // cspell:disable-next-line
    pronunciation: 'lˈɪmənˌin',
    structureDescription: 'A ring of six carbons with two double bonds and a branch.',
    realLifeDescription:
        'It gives oranges and lemons their citrus smell. It is also used in cleaning products because it dissolves grease.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: -74.4,
        boilingPointCelsius: 176,
        densityGramsPerCubicCentimeter: 0.841,
        waterSolubilityGramsPerLiter: 0.00757,
        logP: 4.57,
        oralRatLethalDoseMilligramsPerKilogram: 5000,
        hazardPictograms: [
            GhsPictogram.Flammable,
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
            GhsPictogram.EnvironmentalHazard,
        ],
        smell: 'lemon-like, citrus',
        taste: 'sweet, citrus',
        habitat: 'Orange peels, lemon peels, grapefruit peels, dill oil, caraway oil, mint oil',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.725,
                y: -0.0209,
                z: -0.3135,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.0145,
                y: -1.1165,
                z: 0.4785,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.0523,
                y: 1.3377,
                z: -0.092,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.4593,
                y: -1.2208,
                z: 0.077,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.1407,
                y: 0.117,
                z: -0.0704,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.4462,
                y: 1.2664,
                z: -0.1296,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.1633,
                y: 0.0434,
                z: 0.0987,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.6385,
                y: 0.0903,
                z: -0.1495,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.1727,
                y: -0.2325,
                z: -0.976,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.5281,
                y: 0.3317,
                z: 1.3569,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.6562,
                y: -0.2717,
                z: -1.3815,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.0585,
                y: -0.9176,
                z: 1.5577,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.4983,
                y: -2.0889,
                z: 0.3205,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.3894,
                y: 2.0321,
                z: -0.8723,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.3258,
                y: 1.794,
                z: 0.8667,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.9814,
                y: -1.8246,
                z: 0.829,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.539,
                y: -1.7568,
                z: -0.8771,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.9738,
                y: 2.2128,
                z: -0.2169,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.9619,
                y: -0.516,
                z: -1.0019,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.0639,
                y: 1.0919,
                z: -0.2725,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.0598,
                y: -0.3411,
                z: 0.7643,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.0292,
                y: -1.2388,
                z: -1.3828,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.0682,
                y: 0.4917,
                z: -1.7904,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.2003,
                y: -0.1678,
                z: -0.6031,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.5756,
                y: 0.3745,
                z: 1.6378,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.8071,
                y: 0.5306,
                z: 2.1421,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                1,
            ],
            order: BondOrder.Single,
        },
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
                10,
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
                11,
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
                2,
                5,
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
                3,
                4,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                5,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                4,
                7,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                17,
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
                9,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                7,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                20,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                21,
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
                8,
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                24,
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
    ],
};

export default limonene;
