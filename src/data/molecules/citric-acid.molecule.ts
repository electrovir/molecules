import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 311. */
const citricAcid: Molecule = {
    name: 'Citric Acid',
    description:
        'A six carbon molecule with three acid groups. It makes lemons and limes sour, and it is at the center of the cycle your cells use to release energy.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 153,
        densityGramsPerCubicCentimeter: 1.665,
        waterSolubilityGramsPerLiter: 592,
        logP: -1.64,
        oralRatLethalDoseMilligramsPerKilogram: 9200,
        hazardPictograms: [GhsPictogram.Irritant],
        yearDiscovered: 1784,
        smell: 'odorless',
        taste: 'strongly sour, tart',
        habitat: 'Citrus fruits, many plants, and cells of all aerobic organisms',
        evolvesInto: ['acetic-acid'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.038,
                y: 0.2564,
                z: 1.7839,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.8037,
                y: 1.8881,
                z: -1.3286,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.182,
                y: 2.4554,
                z: 0.8313,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.8158,
                y: -1.9782,
                z: -0.4965,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 3.2941,
                y: -0.8325,
                z: -0.8233,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.7301,
                y: -0.2662,
                z: 0.9908,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.2734,
                y: -1.391,
                z: 1.1261,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.013,
                y: 0.3741,
                z: 0.3669,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.7462,
                y: -0.7956,
                z: -0.2834,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.4697,
                y: 0.5326,
                z: -0.0965,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.7046,
                y: 1.6814,
                z: 0.0106,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.1872,
                y: -0.9608,
                z: 0.1406,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.3753,
                y: -0.6502,
                z: 0.1563,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.25,
                y: -1.7354,
                z: -0.0118,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.7284,
                y: -0.7021,
                z: -1.3756,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.9395,
                y: 1.3899,
                z: 0.4026,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.4899,
                y: 0.7358,
                z: -1.175,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.4974,
                y: 0.9713,
                z: 2.1687,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.2827,
                y: 2.7188,
                z: -1.5355,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.7454,
                y: -2.0781,
                z: -0.1993,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.8619,
                y: -1.6139,
                z: -0.6523,
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
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                10,
            ],
            order: BondOrder.Double,
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
                19,
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
                20,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                11,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                6,
                12,
            ],
            order: BondOrder.Double,
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
                9,
            ],
            order: BondOrder.Single,
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
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
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
                9,
                12,
            ],
            order: BondOrder.Single,
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
                9,
                16,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default citricAcid;
