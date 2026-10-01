import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 5288826. */
const morphine: Molecule = {
    name: 'Morphine',
    description:
        'Five fused rings of carbon, oxygen, and nitrogen with two OH groups. It comes from opium poppies and is one of the strongest painkillers.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 255,
        densityGramsPerCubicCentimeter: 1.32,
        waterSolubilityGramsPerLiter: 0.149,
        logP: 0.89,
        oralRatLethalDoseMilligramsPerKilogram: 400,
        hazardPictograms: [
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
        ],
        yearDiscovered: 1804,
        smell: 'odorless',
        taste: 'bitter',
        habitat: 'Opium poppy latex; tiny amounts made in the human body',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.993,
                y: -0.474,
                z: 1.2005,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.7826,
                y: -2.5168,
                z: -0.2218,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -3.622,
                y: 1.8421,
                z: 0.5579,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 3.1777,
                y: -0.0101,
                z: 0.4474,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.3699,
                y: -0.7149,
                z: 0.6616,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.2913,
                y: -1.3046,
                z: -0.417,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.3441,
                y: -0.2023,
                z: -0.764,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.9377,
                y: -1.475,
                z: 0.9848,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.1988,
                y: -0.3907,
                z: 1.9201,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.2516,
                y: 0.5302,
                z: 0.1205,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.6887,
                y: 1.1052,
                z: -1.3279,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.4315,
                y: 0.4754,
                z: 1.6126,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.3384,
                y: 1.4306,
                z: -0.748,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.3631,
                y: -2.5067,
                z: -0.0924,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.5066,
                y: -1.8183,
                z: -1.5971,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.5672,
                y: 0.6306,
                z: 0.5136,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.7155,
                y: -2.3492,
                z: -1.4425,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 4.3733,
                y: 0.7916,
                z: 0.2084,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.4184,
                y: 2.5415,
                z: -1.1246,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.331,
                y: 1.7217,
                z: 0.162,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.7382,
                y: 2.6936,
                z: -0.6541,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.8278,
                y: -2.1759,
                z: -0.0118,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.0029,
                y: -0.6035,
                z: -1.5465,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.8451,
                y: -2.0128,
                z: 1.9373,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.5366,
                y: -1.3335,
                z: 2.3712,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.5899,
                y: 0.1174,
                z: 2.679,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.5474,
                y: 0.9596,
                z: -2.4075,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.353,
                y: 1.968,
                z: -1.2194,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.1271,
                y: 1.5205,
                z: 1.476,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.0801,
                y: 0.4584,
                z: 2.4975,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.0772,
                y: -3.5067,
                z: 0.2593,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.9601,
                y: -1.7947,
                z: -2.5831,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.23,
                y: -2.7505,
                z: -2.3109,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.15,
                y: 1.8479,
                z: 0.0287,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.938,
                y: 0.4055,
                z: -0.6472,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.0444,
                y: 0.7352,
                z: 1.073,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.0062,
                y: 3.2824,
                z: -1.8043,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.3121,
                y: 3.5638,
                z: -0.9645,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.1557,
                y: -2.6446,
                z: 0.6672,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.8483,
                y: 1.0686,
                z: 1.1031,
            },
        },
    ],
    bonds: [
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
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                38,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                39,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
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
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                5,
            ],
            order: BondOrder.Single,
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
                4,
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                9,
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
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                21,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                22,
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
                23,
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
                24,
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
                10,
                12,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                26,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                27,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                28,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                29,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                16,
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
                16,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                14,
                31,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                19,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                16,
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
                17,
                35,
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
                36,
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
                37,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default morphine;
