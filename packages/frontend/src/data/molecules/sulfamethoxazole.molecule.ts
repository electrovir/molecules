// cspell:words bactrim sulfamethoxazole sulfonyl
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 5329. */
const sulfamethoxazole: Molecule = {
    name: 'Sulfamethoxazole',
    description:
        'A benzene ring with an amine group, linked through a sulfonyl group to a ring holding nitrogen and oxygen. It is the sulfa antibiotic in Bactrim.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 167,
        logP: 0.89,
        oralRatLethalDoseMilligramsPerKilogram: 6370,
        hazardPictograms: [GhsPictogram.Irritant],
        smell: 'odorless',
        taste: 'bitter',
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: 0.2645,
                y: -2.2031,
                z: -0.0845,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.6416,
                y: 0.9657,
                z: -0.9788,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.9463,
                y: -3.203,
                z: 0.7288,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.0563,
                y: -2.5245,
                z: -1.4698,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.1693,
                y: -1.7273,
                z: 0.7438,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.9278,
                y: -0.2265,
                z: -0.9777,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 3.5485,
                y: 2.7532,
                z: 0.0086,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.2286,
                y: -0.7477,
                z: -0.0572,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.1047,
                y: -0.5114,
                z: 1.0022,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.1228,
                y: 0.1788,
                z: -1.0946,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.8451,
                y: -0.5383,
                z: 0.2987,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.769,
                y: 1.5778,
                z: -0.0129,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.8748,
                y: 0.6514,
                z: 1.0243,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.893,
                y: 1.3415,
                z: -1.0724,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.4539,
                y: 0.3608,
                z: 1.1589,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.9493,
                y: 1.3051,
                z: 0.2991,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.7089,
                y: 2.5476,
                z: 0.4835,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.2084,
                y: -1.9185,
                z: 1.7534,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.1983,
                y: -1.2149,
                z: 1.8246,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.4759,
                y: 0.0078,
                z: -1.9492,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.5527,
                y: 0.825,
                z: 1.8562,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.807,
                y: 2.0525,
                z: -1.8902,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.5324,
                y: 0.3461,
                z: 2.2358,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.9096,
                y: 2.7346,
                z: 1.543,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.1506,
                y: 3.4021,
                z: 0.0887,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.669,
                y: 2.4929,
                z: -0.0386,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.1825,
                y: 2.926,
                z: 0.7773,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.4707,
                y: 3.4259,
                z: -0.7424,
            },
        },
    ],
    bonds: [
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
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                0,
                4,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                7,
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
                15,
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
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                10,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                6,
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                26,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                27,
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
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                12,
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
                9,
                13,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                9,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                14,
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
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                20,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                21,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                15,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                14,
                22,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                24,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                25,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default sulfamethoxazole;
