// cspell:words carvone
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 7439. */
const carvone: Molecule = {
    name: 'Carvone',
    description:
        'A ring of six carbons with an oxygen, a double bond, and a short branch. One mirror image smells like spearmint and the other smells like caraway seeds.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: 25.2,
        boilingPointCelsius: 231,
        densityGramsPerCubicCentimeter: 0.96,
        waterSolubilityGramsPerLiter: 1.3,
        oralRatLethalDoseMilligramsPerKilogram: 2000,
        hazardPictograms: [GhsPictogram.Irritant],
        yearDiscovered: 1849,
        smell: 'spearmint or caraway',
        habitat: 'Spearmint, caraway and dill seed oils',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.0915,
                y: 1.8865,
                z: -0.0199,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.9171,
                y: -0.0833,
                z: -0.3197,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.1199,
                y: 1.0446,
                z: 0.33,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.3829,
                y: -1.4467,
                z: 0.1302,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.3767,
                y: 0.0558,
                z: -0.0168,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.3632,
                y: 0.8976,
                z: 0.057,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.1105,
                y: -1.5316,
                z: 0.0242,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.9385,
                y: -0.478,
                z: -0.0427,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.2816,
                y: 0.2507,
                z: -1.1972,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.4225,
                y: -0.604,
                z: -0.1831,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.8481,
                y: 0.0085,
                z: 1.238,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.7659,
                y: -0.0129,
                z: -1.4072,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.2445,
                y: 1.0775,
                z: 1.4188,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.4449,
                y: 2.0096,
                z: -0.0782,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.8242,
                y: -2.2289,
                z: -0.5007,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.6573,
                y: -1.6842,
                z: 1.1649,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.5274,
                y: -2.5355,
                z: -0.009,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.0072,
                y: 1.1608,
                z: -1.7405,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.2038,
                y: -0.6011,
                z: -1.8807,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.3316,
                y: 0.3443,
                z: -0.9006,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.7422,
                y: -1.6505,
                z: -0.226,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.9288,
                y: -0.1368,
                z: 0.6679,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.762,
                y: -0.115,
                z: -1.102,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.9093,
                y: 0.1108,
                z: 1.4409,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.1987,
                y: -0.1311,
                z: 2.0952,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                5,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                1,
                2,
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
                4,
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
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                12,
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
                3,
                6,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                14,
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
                4,
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                10,
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
                6,
                7,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                6,
                16,
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
                8,
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                20,
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
                9,
                22,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                24,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default carvone;
