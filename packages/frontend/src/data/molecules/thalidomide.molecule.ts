import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 5426. */
const thalidomide: Molecule = {
    name: 'Thalidomide',
    structureDescription:
        'Two rings, each holding a nitrogen between two ketones, joined at one carbon.',
    realLifeDescription:
        'It caused birth defects in the 1960s and is now used to treat cancer. The disaster led to much stricter testing of new medicines.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 270,
        waterSolubilityGramsPerLiter: 0.05,
        logP: 0.33,
        oralRatLethalDoseMilligramsPerKilogram: 113,
        hazardPictograms: [
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
        ],
        yearDiscovered: 1952,
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.3627,
                y: -0.0566,
                z: -2.1582,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.9379,
                y: 2.5651,
                z: -0.028,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.0584,
                y: -1.9761,
                z: 0.2363,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -5.3111,
                y: -0.5033,
                z: 0.1689,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0.077,
                y: 0.3778,
                z: 0.1191,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -3.3101,
                y: -0.2925,
                z: -0.9555,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.3347,
                y: 0.6544,
                z: 0.1522,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.9692,
                y: 0.0997,
                z: 1.4171,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.4598,
                y: 0.3851,
                z: 1.4006,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.9655,
                y: 0.0514,
                z: -1.0905,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.0469,
                y: 1.3548,
                z: 0.036,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.6093,
                y: -0.8932,
                z: 0.167,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.3248,
                y: 0.6439,
                z: 0.0405,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.0603,
                y: -0.7154,
                z: 0.1197,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -4.1199,
                y: -0.1933,
                z: 0.1717,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.6128,
                y: 1.1348,
                z: -0.0207,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.07,
                y: -1.6556,
                z: 0.1417,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 4.6522,
                y: 0.2004,
                z: 0.0009,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 4.3834,
                y: -1.1813,
                z: 0.0812,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.4921,
                y: 1.739,
                z: 0.0998,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.5129,
                y: 0.5551,
                z: 2.304,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.8238,
                y: -0.9831,
                z: 1.5052,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.6513,
                y: 1.4639,
                z: 1.4138,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.9287,
                y: -0.0552,
                z: 2.2873,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.7549,
                y: -0.6702,
                z: -1.7877,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.8197,
                y: 2.1966,
                z: -0.0829,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.8637,
                y: -2.7177,
                z: 0.203,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.6832,
                y: 0.5416,
                z: -0.0453,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.2109,
                y: -1.8857,
                z: 0.0959,
            },
        },
    ],
    bonds: [
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
                10,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                2,
                11,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                3,
                14,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                4,
                6,
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
                5,
                9,
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
                24,
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
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                19,
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
                20,
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
                14,
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
                10,
                12,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                13,
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
                15,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                13,
                16,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                15,
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                25,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                18,
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
                17,
                18,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                17,
                27,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                18,
                28,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default thalidomide;
