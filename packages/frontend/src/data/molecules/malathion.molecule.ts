// cspell:words methoxy
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 4004. */
const malathion: Molecule = {
    name: 'Malathion',
    routeName: 'malathion',
    // cspell:disable-next-line
    pronunciation: 'mæləθˈIɑn',
    structureDescription:
        'A phosphorus atom bonded to two sulfurs and two methoxy groups, attached to a chain with two ester groups.',
    realLifeDescription: 'It is an insecticide sprayed to kill mosquitoes and treat head lice.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: 2.9,
        densityGramsPerCubicCentimeter: 1.21,
        waterSolubilityGramsPerLiter: 0.143,
        logP: 2.36,
        oralRatLethalDoseMilligramsPerKilogram: 3300,
        hazardPictograms: [
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
            GhsPictogram.EnvironmentalHazard,
        ],
        yearDiscovered: 1950,
        smell: 'garlicky, skunk-like, mercaptan-like',
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: -0.2651,
                y: -1.3531,
                z: -0.9465,
            },
        },
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: -3.0534,
                y: -3.4034,
                z: -0.408,
            },
        },
        {
            element: ChemicalElementSymbol.P,
            position: {
                x: -2.2022,
                y: -1.6567,
                z: -0.1353,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.2024,
                y: 1.814,
                z: 0.5875,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 4.0391,
                y: 0.2019,
                z: -0.3236,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -3.1454,
                y: -0.4268,
                z: -0.6564,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.1379,
                y: -1.2385,
                z: 1.4444,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.8189,
                y: 1.7614,
                z: -1.6841,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.6048,
                y: -1.1382,
                z: 0.8878,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.3207,
                y: 0.2019,
                z: -0.1888,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.741,
                y: 0.5446,
                z: -0.6453,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.6254,
                y: 1.3305,
                z: -0.5549,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.812,
                y: -0.2513,
                z: 0.0711,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.1005,
                y: 2.9138,
                z: 0.4079,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 5.1603,
                y: -0.4396,
                z: 0.2926,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.6495,
                y: 3.3273,
                z: 1.7568,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 6.4358,
                y: 0.1715,
                z: -0.2472,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.5092,
                y: -0.3317,
                z: -2.0237,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.4039,
                y: -2.0278,
                z: 2.3656,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.3052,
                y: 0.062,
                z: 0.8978,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.8577,
                y: 0.4042,
                z: -1.7266,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.9384,
                y: 1.6022,
                z: -0.4251,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.5627,
                y: 3.7536,
                z: -0.046,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.923,
                y: 2.6106,
                z: -0.2492,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.1118,
                y: -0.2966,
                z: 1.3778,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.1381,
                y: -1.5112,
                z: 0.0653,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.3418,
                y: 4.1677,
                z: 1.6565,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.8369,
                y: 3.6166,
                z: 2.4314,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.174,
                y: 2.4913,
                z: 2.2312,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 7.3151,
                y: -0.2968,
                z: 0.2037,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 6.4641,
                y: 1.247,
                z: -0.0435,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 6.4901,
                y: 0.0524,
                z: -1.3344,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.7979,
                y: 0.701,
                z: -2.235,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.3629,
                y: -0.984,
                z: -2.2229,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.6742,
                y: -0.6045,
                z: -2.6734,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.151,
                y: -1.4079,
                z: 3.2295,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.4803,
                y: -2.4017,
                z: 1.9173,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.0188,
                y: -2.8665,
                z: 2.7008,
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
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                2,
            ],
            order: BondOrder.Double,
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
                6,
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
                3,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                12,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                14,
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
                18,
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
                8,
                12,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                9,
                10,
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
                19,
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
                20,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                21,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                22,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                24,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                25,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                26,
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
                16,
                29,
            ],
            order: BondOrder.Single,
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
                16,
                31,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                17,
                32,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                17,
                33,
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
    ],
};

export default malathion;
