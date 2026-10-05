import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 1548943. */
const capsaicin: Molecule = {
    name: 'Capsaicin',
    routeName: 'capsaicin',
    // cspell:disable-next-line
    pronunciation: 'kæpsˈAsən',
    structureDescription: 'A ring joined to a long carbon tail by a nitrogen link.',
    realLifeDescription:
        'It makes chili peppers hot by triggering the same nerves that sense heat. Birds cannot feel its heat, so they eat chili peppers and spread the seeds.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 65,
        waterSolubilityGramsPerLiter: 0.013,
        logP: 3.04,
        hazardPictograms: [
            GhsPictogram.Corrosive,
            GhsPictogram.AcuteToxicity,
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
        ],
        yearDiscovered: 1816,
        smell: 'highly pungent',
        taste: 'burning',
        habitat: 'Hot chili peppers, cayenne, jalapeño',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -3.4457,
                y: -0.6353,
                z: -1.7322,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.0855,
                y: 3.2961,
                z: -1.3708,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.1538,
                y: 3.6956,
                z: 1.0853,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -3.4464,
                y: -0.6358,
                z: 0.5932,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.588,
                y: -2.4104,
                z: -0.4884,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.8176,
                y: -3.0728,
                z: 0.145,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.7136,
                y: -2.6958,
                z: 0.2687,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.1105,
                y: -2.7183,
                z: -0.5894,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.9336,
                y: -0.5595,
                z: -0.3685,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.9186,
                y: -2.0619,
                z: -0.3647,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.3494,
                y: -1.2228,
                z: -0.657,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.7193,
                y: -1.1894,
                z: 0.2655,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.6788,
                y: 0.777,
                z: 0.7865,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.3954,
                y: 1.5523,
                z: 0.8622,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 5.1928,
                y: -0.9411,
                z: 0.4091,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.7731,
                y: 0.9595,
                z: -0.4205,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.8249,
                y: 2.0723,
                z: -0.2996,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.7734,
                y: 1.7529,
                z: 2.0946,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.6326,
                y: 2.7931,
                z: -0.2291,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.581,
                y: 2.4732,
                z: 2.165,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.0107,
                y: 2.9935,
                z: 1.0032,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.7839,
                y: 3.0467,
                z: -2.5889,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.4912,
                y: -2.7549,
                z: -1.526,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.7254,
                y: -1.3231,
                z: -0.5313,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.883,
                y: -2.7821,
                z: 1.1997,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.6901,
                y: -4.1619,
                z: 0.1301,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.605,
                y: -2.362,
                z: 1.3082,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.8786,
                y: -3.7797,
                z: 0.3042,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.9659,
                y: -3.1841,
                z: -0.0869,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.0793,
                y: -3.1098,
                z: -1.6128,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.0485,
                y: -0.9227,
                z: -1.3977,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.1424,
                y: -2.3513,
                z: -1.3884,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.4945,
                y: -0.9068,
                z: 1.2917,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.2525,
                y: 0.8925,
                z: 1.7131,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.3092,
                y: 1.1574,
                z: -0.0259,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.371,
                y: -1.2138,
                z: 1.4245,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 6.0828,
                y: -0.507,
                z: -0.0591,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.3251,
                y: -2.0286,
                z: 0.432,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.1505,
                y: -0.5852,
                z: 1.4448,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.6755,
                y: 1.3896,
                z: 0.5828,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.6401,
                y: 1.4241,
                z: -0.9024,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.8824,
                y: 1.2404,
                z: -0.994,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.3536,
                y: 1.8887,
                z: -1.2284,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.2069,
                y: 1.351,
                z: 3.0065,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.1067,
                y: 2.6213,
                z: 3.1315,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.4387,
                y: 3.7289,
                z: 2.0146,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.2072,
                y: 3.5162,
                z: -3.3925,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.7729,
                y: 3.5176,
                z: -2.5913,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.8303,
                y: 1.9759,
                z: -2.8159,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                10,
            ],
            order: BondOrder.Double,
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
                1,
                21,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                20,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                45,
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
                3,
                12,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                35,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                5,
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
                22,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                23,
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
                24,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                25,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                9,
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
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                28,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                29,
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
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                30,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                11,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                9,
                31,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                32,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                33,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                34,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                16,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                13,
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                36,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                37,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                38,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                39,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                40,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                41,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                42,
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
                17,
                43,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                18,
                20,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                19,
                20,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                19,
                44,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                21,
                46,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                21,
                47,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                21,
                48,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default capsaicin;
