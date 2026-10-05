// cspell:words allicin
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 65036. */
const allicin: Molecule = {
    name: 'Allicin',
    routeName: 'allicin',
    // cspell:disable-next-line
    pronunciation: 'ˈæləsən',
    structureDescription:
        'Two sulfur atoms in a row, one carrying an oxygen, with a three-carbon allyl group on each end.',
    realLifeDescription:
        'It forms the moment you crush garlic and gives it its sharp bite. Garlic makes it to defend itself against pests and germs.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        densityGramsPerCubicCentimeter: 1.112,
        hazardPictograms: [GhsPictogram.Irritant],
        yearDiscovered: 1944,
        smell: 'garlic',
        habitat: 'Freshly crushed or chopped garlic and leeks',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: -0.875,
                y: 1.0804,
                z: -0.4884,
            },
        },
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: 0.4632,
                y: -0.1567,
                z: 0.469,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.554,
                y: 2.3775,
                z: 0.1935,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.4395,
                y: 0.4827,
                z: 0.1949,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.0378,
                y: 0.4238,
                z: -0.2,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.8233,
                y: -0.8123,
                z: -0.4414,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.1671,
                y: -0.3641,
                z: 0.3822,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.0063,
                y: -1.9506,
                z: 0.2372,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 4.0301,
                y: -1.0807,
                z: -0.3469,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.2026,
                y: 1.2342,
                z: -0.0321,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.3578,
                y: 0.4123,
                z: 1.2846,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.0158,
                y: 0.3425,
                z: -1.2921,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.1736,
                y: 1.48,
                z: 0.0549,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.9825,
                y: -0.8206,
                z: -1.517,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.3095,
                y: -0.3273,
                z: 1.4599,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.2951,
                y: -2.8586,
                z: -0.2809,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.8716,
                y: -1.9981,
                z: 1.3121,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.839,
                y: -1.6205,
                z: 0.1334,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.9469,
                y: -1.1428,
                z: -1.4263,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                1,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                2,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                0,
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
                3,
                5,
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
                10,
            ],
            order: BondOrder.Single,
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
                11,
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
                5,
                7,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                5,
                13,
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
                14,
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
                7,
                16,
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
    ],
};

export default allicin;
