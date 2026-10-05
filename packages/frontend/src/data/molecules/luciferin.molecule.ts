// cspell:words benzothiazole
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 92934. */
const luciferin: Molecule = {
    name: 'Luciferin',
    routeName: 'luciferin',
    // cspell:disable-next-line
    pronunciation: 'lusˈɪfəɹən',
    structureDescription:
        'A benzothiazole ring linked to a second ring holding sulfur and nitrogen, carrying an acid group.',
    realLifeDescription:
        'Fireflies glow when an enzyme reacts it with oxygen. Scientists use it to make cells glow so they can track them in experiments.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        logP: -0.28,
        yearDiscovered: 1949,
        habitat: 'Fireflies, click beetles, other glowing insects',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: 2.0882,
                y: 2.1307,
                z: 0.0126,
            },
        },
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: -0.6461,
                y: -1.2833,
                z: 0.2939,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 5.8515,
                y: -0.5037,
                z: -0.0512,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 4.1888,
                y: -1.9471,
                z: -0.6414,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -5.8426,
                y: -1.2033,
                z: -0.061,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 2.2929,
                y: -0.434,
                z: 0.3875,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -0.8715,
                y: 1.2654,
                z: -0.0306,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.6544,
                y: 0.1241,
                z: 0.4737,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.7256,
                y: 1.4412,
                z: -0.2776,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.4336,
                y: 0.5199,
                z: 0.2139,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.0049,
                y: 0.2954,
                z: 0.1454,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.2369,
                y: -0.6438,
                z: 0.1103,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.1563,
                y: 0.7426,
                z: -0.0522,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 4.5571,
                y: -0.8972,
                z: -0.1359,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.4674,
                y: -1.3201,
                z: 0.1105,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.3514,
                y: 1.4756,
                z: -0.2198,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -4.6349,
                y: -0.5711,
                z: -0.0574,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -4.58,
                y: 0.8087,
                z: -0.2206,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.921,
                y: 0.235,
                z: 1.5325,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.5131,
                y: 2.096,
                z: 0.1057,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.8754,
                y: 1.3009,
                z: -1.3534,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.506,
                y: -2.3981,
                z: 0.2385,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.3199,
                y: 2.5539,
                z: -0.3481,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -5.4952,
                y: 1.3808,
                z: -0.3504,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 6.4615,
                y: -1.1627,
                z: -0.4463,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -5.6999,
                y: -2.1573,
                z: 0.0638,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                9,
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
                11,
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
                2,
                24,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                13,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                4,
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                25,
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
                9,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                6,
                10,
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
                8,
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
                8,
                20,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                12,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                11,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                15,
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
                21,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                17,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                15,
                22,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                17,
                23,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default luciferin;
