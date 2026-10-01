import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 612. */
const lacticAcid: Molecule = {
    name: 'Lactic Acid',
    description:
        'Three carbon atoms with an acid group and an oxygen-hydrogen group. Bacteria make it when they turn milk into yogurt, and your muscles make it during hard exercise.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: 17,
        densityGramsPerCubicCentimeter: 1.206,
        isWaterMiscible: true,
        logP: -0.72,
        oralRatLethalDoseMilligramsPerKilogram: 3730,
        hazardPictograms: [
            GhsPictogram.Corrosive,
            GhsPictogram.Irritant,
        ],
        yearDiscovered: 1780,
        smell: 'odorless',
        taste: 'mildly sour, acrid',
        habitat: 'Sour milk, fermented foods, fruits, and working muscles',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.7876,
                y: 1.5868,
                z: -0.2514,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.6958,
                y: -0.9275,
                z: 0.4013,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.7269,
                y: 0.9223,
                z: -0.9138,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.3003,
                y: 0.3772,
                z: 0.3105,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.1956,
                y: -0.7543,
                z: -0.163,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.1285,
                y: 0.1766,
                z: -0.1493,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.322,
                y: 0.4711,
                z: 1.4009,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.1659,
                y: -0.847,
                z: -1.2547,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.238,
                y: -0.5606,
                z: 0.1116,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.8933,
                y: -1.7139,
                z: 0.2675,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.2725,
                y: 2.3165,
                z: 0.1338,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.6239,
                y: -1.0473,
                z: 0.1066,
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
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                5,
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
                2,
                5,
            ],
            order: BondOrder.Double,
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
                5,
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
    ],
};

export default lacticAcid;
