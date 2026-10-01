import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 240. */
const benzaldehyde: Molecule = {
    name: 'Benzaldehyde',
    structureDescription: 'A benzene ring with an aldehyde group attached.',
    realLifeDescription:
        'It gives almonds and cherries their flavor and is the main ingredient in almond extract.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: -57.1,
        boilingPointCelsius: 179,
        densityGramsPerCubicCentimeter: 1.044,
        waterSolubilityGramsPerLiter: 6.95,
        logP: 1.48,
        oralRatLethalDoseMilligramsPerKilogram: 1370,
        hazardPictograms: [GhsPictogram.Irritant],
        yearDiscovered: 1803,
        smell: 'bitter almond',
        taste: 'burning, almond-like',
        habitat: 'Bitter almonds, cranberries, over 100 other plant species',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.8466,
                y: -0.387,
                z: 0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.5644,
                y: 0.2371,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.3437,
                y: 1.296,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.1013,
                y: -1.0787,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.7147,
                y: 1.0393,
                z: 0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.2698,
                y: -1.3354,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.1777,
                y: -0.2764,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.9937,
                y: 0.505,
                z: -0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.0016,
                y: 2.3267,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.7902,
                y: -1.9194,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.4218,
                y: 1.8637,
                z: 0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.6308,
                y: -2.3599,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.2452,
                y: -0.4764,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.2986,
                y: 1.5653,
                z: -0.0006,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                7,
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
                7,
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
                8,
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
                4,
                10,
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
                11,
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
                13,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default benzaldehyde;
