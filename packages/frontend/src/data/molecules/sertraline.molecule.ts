// cspell:words sertraline
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 68617. */
const sertraline: Molecule = {
    name: 'Sertraline',
    description:
        'A benzene ring with two chlorine atoms attached to a pair of fused rings carrying a methylamine group. It is the antidepressant Zoloft.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 245,
        waterSolubilityGramsPerLiter: 3.8,
        logP: 5.51,
        hazardPictograms: [
            GhsPictogram.Irritant,
            GhsPictogram.EnvironmentalHazard,
        ],
        yearDiscovered: 1977,
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: -3.2742,
                y: 0.9409,
                z: -2.5357,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: -5.5574,
                y: -0.0587,
                z: -0.4728,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 2.7887,
                y: 1.7872,
                z: -1.02,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.2339,
                y: 0.1242,
                z: 1.208,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.7143,
                y: 1.5897,
                z: 1.2172,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.94,
                y: 0.9883,
                z: 0.2006,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.2278,
                y: 1.6699,
                z: 1.376,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.1484,
                y: -0.8229,
                z: 0.4352,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.4234,
                y: -0.4196,
                z: -0.0136,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.2243,
                y: 0.0837,
                z: 0.7682,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.7545,
                y: -2.1603,
                z: 0.2358,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.2423,
                y: -1.3415,
                z: -0.6912,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.5674,
                y: 0.4785,
                z: -0.5206,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.2012,
                y: -0.348,
                z: 1.6593,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.5796,
                y: -3.0634,
                z: -0.4348,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.8214,
                y: -2.6526,
                z: -0.9032,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.2758,
                y: 3.1397,
                z: -0.8087,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.9024,
                y: 0.4411,
                z: -0.9229,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.5362,
                y: -0.3853,
                z: 1.2572,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.8868,
                y: 0.0092,
                z: -0.0341,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.2927,
                y: -0.2232,
                z: 2.2507,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.2294,
                y: 2.1237,
                z: 2.0448,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.423,
                y: 2.1258,
                z: 0.3061,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.0062,
                y: 0.9193,
                z: 0.4586,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.5448,
                y: 2.703,
                z: 1.5456,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.5032,
                y: 1.1445,
                z: 2.3023,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.3337,
                y: 1.3547,
                z: -1.7664,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.2038,
                y: -2.516,
                z: 0.6065,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.2223,
                y: -1.0391,
                z: -1.0535,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.7998,
                y: 0.8068,
                z: -1.2176,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.9427,
                y: -0.6584,
                z: 2.6678,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.2528,
                y: -4.0882,
                z: -0.5854,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.4663,
                y: -3.3532,
                z: -1.425,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.5552,
                y: 3.7632,
                z: -0.2714,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.2487,
                y: 3.1675,
                z: -0.3067,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.4082,
                y: 3.619,
                z: -1.7853,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.2904,
                y: -0.7246,
                z: 1.9629,
            },
        },
    ],
    bonds: [
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
                19,
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
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                26,
            ],
            order: BondOrder.Single,
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
                7,
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
                20,
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
                21,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                22,
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
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                24,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                25,
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
                10,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                8,
                11,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                9,
                12,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                9,
                13,
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
                10,
                27,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                28,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                29,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                18,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                13,
                30,
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
                31,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                32,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                33,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                34,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                35,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                17,
                19,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                18,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                18,
                36,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default sertraline;
