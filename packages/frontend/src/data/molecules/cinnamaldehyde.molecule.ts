// cspell:words cinnamaldehyde
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 637511. */
const cinnamaldehyde: Molecule = {
    name: 'Cinnamaldehyde',
    structureDescription:
        'A benzene ring attached to a three-carbon chain ending in a double bonded oxygen.',
    realLifeDescription: 'It gives cinnamon its flavor and smell.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: -7.5,
        boilingPointCelsius: 248,
        densityGramsPerCubicCentimeter: 1.05,
        waterSolubilityGramsPerLiter: 1.42,
        logP: 1.9,
        oralRatLethalDoseMilligramsPerKilogram: 3400,
        hazardPictograms: [GhsPictogram.Irritant],
        yearDiscovered: 1834,
        smell: 'strong cinnamon, spicy',
        taste: 'sweet, burning',
        habitat: 'Cinnamon bark, cinnamon leaves, clove buds, lemon balm',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 4.5846,
                y: 0.7453,
                z: -0.2719,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.1524,
                y: -0.2437,
                z: 0.0726,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.6206,
                y: 1.0685,
                z: 0.1389,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.0543,
                y: -1.3007,
                z: -0.0496,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.9908,
                y: 1.3238,
                z: 0.083,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.4245,
                y: -1.0454,
                z: -0.1057,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.2765,
                y: -0.5099,
                z: 0.1305,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.8926,
                y: 0.2669,
                z: -0.0394,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.2507,
                y: 0.3873,
                z: -0.133,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.6643,
                y: -0.0304,
                z: -0.0431,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.0435,
                y: 1.9204,
                z: 0.2528,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.7082,
                y: -2.33,
                z: -0.1041,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.5534,
                y: -1.5278,
                z: 0.3983,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.3563,
                y: 2.3451,
                z: 0.139,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.127,
                y: -1.8682,
                z: -0.2009,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.9596,
                y: 0.4655,
                z: -0.082,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.067,
                y: 1.4127,
                z: -0.4288,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.8463,
                y: -1.0796,
                z: 0.2432,
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
                2,
            ],
            order: BondOrder.Double,
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
                6,
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
                10,
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
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                7,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                4,
                13,
            ],
            order: BondOrder.Single,
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
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                8,
            ],
            order: BondOrder.Double,
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
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                17,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default cinnamaldehyde;
