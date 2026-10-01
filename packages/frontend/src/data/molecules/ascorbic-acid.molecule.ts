import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 54670067. */
const ascorbicAcid: Molecule = {
    name: 'Ascorbic Acid',
    structureDescription:
        'Vitamin C: a ring of carbons and oxygens with several oxygen-hydrogen groups.',
    realLifeDescription:
        'Without it, the body cannot make collagen, which leads to scurvy. Unlike most animals, humans cannot make their own, so we need it from foods like oranges and peppers.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 191,
        densityGramsPerCubicCentimeter: 1.65,
        waterSolubilityGramsPerLiter: 330,
        logP: -1.85,
        oralRatLethalDoseMilligramsPerKilogram: 11_900,
        yearDiscovered: 1928,
        taste: 'pleasant, sharp, acidic',
        habitat: 'Citrus fruits, vegetables, most plant and animal tissues',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.4721,
                y: -1.0609,
                z: 0.8064,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.7152,
                y: -0.2352,
                z: -1.5445,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.492,
                y: 2.2396,
                z: -0.1831,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -3.3523,
                y: -0.1649,
                z: -0.6867,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 3.6007,
                y: 0.1583,
                z: -0.4878,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.3448,
                y: -2.3511,
                z: 0.4259,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.1288,
                y: 0.3284,
                z: 0.6288,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.0535,
                y: 0.42,
                z: -0.3227,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.3761,
                y: 0.9095,
                z: 0.0945,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.2897,
                y: -0.2571,
                z: 0.2562,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.3302,
                y: -0.0063,
                z: -0.0395,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.7635,
                y: -1.2805,
                z: 0.4075,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.1133,
                y: 0.7526,
                z: 1.6097,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.2861,
                y: 1.4611,
                z: -0.5725,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.1159,
                y: -1.3218,
                z: 0.4433,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.6036,
                y: 0.2262,
                z: 1.1865,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.5393,
                y: -1.1706,
                z: -1.3447,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.653,
                y: 2.665,
                z: 0.0641,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.1254,
                y: -0.5995,
                z: -0.2879,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.0331,
                y: -0.7126,
                z: -0.4534,
            },
        },
    ],
    bonds: [
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
                11,
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
                1,
                16,
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
                2,
                17,
            ],
            order: BondOrder.Single,
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
                3,
                18,
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
                19,
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
                7,
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
                9,
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
                8,
                10,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                9,
                14,
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
                10,
                11,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default ascorbicAcid;
