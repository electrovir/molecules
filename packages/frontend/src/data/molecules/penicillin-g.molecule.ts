// cspell:words chrysogenum
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 5904. */
const penicillinG: Molecule = {
    name: 'Penicillin G',
    // cspell:disable-next-line
    pronunciation: 'pˌɛnəsˈɪlən ʤˈi',
    structureDescription:
        'A four-membered ring fused to a ring holding sulfur, with a side chain carrying a benzene ring.',
    realLifeDescription:
        'It was the first antibiotic, found growing from mold in 1928. Alexander Fleming discovered it when mold accidentally grew on one of his bacteria dishes.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 214,
        waterSolubilityGramsPerLiter: 0.21,
        logP: 1.83,
        hazardPictograms: [
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
            GhsPictogram.EnvironmentalHazard,
        ],
        habitat: 'The mold Penicillium chrysogenum',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: -0.8019,
                y: 1.2308,
                z: 0.517,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.2842,
                y: -2.5451,
                z: -1.2026,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -5.3517,
                y: 1.076,
                z: -0.817,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -5.1157,
                y: -0.697,
                z: 0.5961,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.1598,
                y: -2.0405,
                z: 1.2167,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -2.4781,
                y: -0.7369,
                z: 0.3018,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0.5677,
                y: -1.3807,
                z: -0.3375,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.31,
                y: -0.4177,
                z: 1.1279,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.567,
                y: 1.6679,
                z: 0.1134,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.1671,
                y: 0.336,
                z: -0.3862,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.6142,
                y: -1.6325,
                z: 0.499,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.9181,
                y: -1.8261,
                z: -0.3007,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.2193,
                y: 2.2224,
                z: 1.3871,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.5771,
                y: 2.7313,
                z: -0.9863,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -4.6296,
                y: 0.1576,
                z: -0.1297,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.873,
                y: -1.6107,
                z: 0.1024,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.902,
                y: -1.2655,
                z: -0.9563,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.8679,
                y: -0.1949,
                z: -0.5225,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.567,
                y: 1.1373,
                z: -0.7687,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 5.0457,
                y: -0.5556,
                z: 0.1171,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 4.4619,
                y: 2.129,
                z: -0.367,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 5.9405,
                y: 0.4362,
                z: 0.519,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 5.6486,
                y: 1.7786,
                z: 0.2769,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.5167,
                y: -0.4852,
                z: 2.1999,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.9961,
                y: 0.1926,
                z: -1.4616,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.4509,
                y: -2.4585,
                z: 1.2025,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.2655,
                y: 1.4761,
                z: 2.1882,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.6724,
                y: 3.0921,
                z: 1.7709,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.2446,
                y: 2.5572,
                z: 1.1944,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.0666,
                y: 3.6467,
                z: -0.6644,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.0842,
                y: 2.3779,
                z: -1.8995,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.6008,
                y: 3.0119,
                z: -1.2561,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.4359,
                y: -1.0113,
                z: -1.2762,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -6.315,
                y: 0.9762,
                z: -0.6611,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.4453,
                y: -2.1891,
                z: -1.195,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.4229,
                y: -0.9646,
                z: -1.896,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.6443,
                y: 1.4206,
                z: -1.2675,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.2818,
                y: -1.5979,
                z: 0.312,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.2343,
                y: 3.1743,
                z: -0.5548,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 6.8642,
                y: 0.1634,
                z: 1.0209,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 6.3451,
                y: 2.5508,
                z: 0.5901,
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
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                11,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                2,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                33,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                14,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                4,
                15,
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
                5,
                9,
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
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                32,
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
                23,
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
                12,
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
                9,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                24,
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
        {
            atomIndexes: [
                10,
                25,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                26,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                27,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                28,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                29,
            ],
            order: BondOrder.Single,
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
                13,
                31,
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
                17,
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
                18,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                17,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                18,
                20,
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
        {
            atomIndexes: [
                19,
                21,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                19,
                37,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                20,
                22,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                20,
                38,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                21,
                22,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                21,
                39,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                22,
                40,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default penicillinG;
