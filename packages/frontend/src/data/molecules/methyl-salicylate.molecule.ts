import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 4133. */
const methylSalicylate: Molecule = {
    name: 'Methyl Salicylate',
    structureDescription: 'A benzene ring with an OH group next to an ester group.',
    realLifeDescription:
        'It gives wintergreen its minty smell and warms sore muscles in muscle rubs. It makes the sparks brighter when wintergreen candies are crushed in the dark.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: -8.6,
        boilingPointCelsius: 222.6,
        densityGramsPerCubicCentimeter: 1.18,
        waterSolubilityGramsPerLiter: 0.64,
        logP: 2.55,
        dipoleMomentDebye: 2.47,
        oralRatLethalDoseMilligramsPerKilogram: 887,
        hazardPictograms: [GhsPictogram.Irritant],
        yearDiscovered: 1843,
        smell: 'wintergreen',
        taste: 'wintergreen',
        habitat: 'Wintergreen leaves, sweet birch bark, many other plants',
        evolvesInto: ['salicylic-acid'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.1225,
                y: 0.8667,
                z: -0.3113,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.5276,
                y: -2.2538,
                z: -0.2299,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.887,
                y: -1.2425,
                z: 0.5802,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.0378,
                y: 0.0737,
                z: 0.0824,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.9503,
                y: -0.9641,
                z: -0.1065,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.491,
                y: 1.3872,
                z: 0.2058,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.3161,
                y: -0.6885,
                z: -0.1722,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.8568,
                y: 1.6627,
                z: 0.1401,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.7694,
                y: 0.6249,
                z: -0.049,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.3923,
                y: -0.1918,
                z: 0.1539,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.547,
                y: 0.7256,
                z: -0.2935,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.1926,
                y: 2.2165,
                z: 0.3678,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.0385,
                y: -1.487,
                z: -0.319,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.2104,
                y: 2.6849,
                z: 0.2393,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.8329,
                y: 0.8395,
                z: -0.0993,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.3004,
                y: -2.8311,
                z: -0.3541,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.8508,
                y: -0.1135,
                z: -0.9262,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.8988,
                y: 0.5832,
                z: 0.7326,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.9852,
                y: 1.6444,
                z: -0.6919,
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
                4,
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
                9,
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
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                3,
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                6,
            ],
            order: BondOrder.Double,
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
                11,
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
                12,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                8,
            ],
            order: BondOrder.Double,
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
                8,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                17,
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
    ],
};

export default methylSalicylate;
