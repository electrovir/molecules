// cspell:words sucralose
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 71485. */
const sucralose: Molecule = {
    name: 'Sucralose',
    structureDescription:
        'A sucrose molecule with three of its OH groups swapped for chlorine atoms.',
    realLifeDescription:
        'The swap makes it about 600 times sweeter than sugar and stops the body from digesting it. It was discovered in 1976 when a student misheard "test this chemical" as "taste this chemical."',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 125,
        densityGramsPerCubicCentimeter: 1.69,
        waterSolubilityGramsPerLiter: 283,
        yearDiscovered: 1975,
        taste: 'intensely sweet',
        habitat: 'Factories, traces in natural waters',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: 4.94,
                y: -0.9745,
                z: -0.4092,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: -2.1075,
                y: 0.244,
                z: 3.1779,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: -1.2559,
                y: -3.5006,
                z: -0.9498,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.4535,
                y: -0.7998,
                z: 0.432,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.5589,
                y: 1.2189,
                z: -0.3661,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.9303,
                y: -0.5661,
                z: -0.0728,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -3.0057,
                y: 2.4093,
                z: -0.107,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -4.6,
                y: -0.0611,
                z: -1.0685,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.3249,
                y: 1.0791,
                z: -2.4235,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 3.6626,
                y: 1.7102,
                z: 0.3018,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.5005,
                y: -1.4567,
                z: 2.4683,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.4561,
                y: 0.6324,
                z: 0.5783,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.8863,
                y: 1.0458,
                z: 0.247,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.2052,
                y: 0.1146,
                z: -0.9032,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.5459,
                y: -1.1764,
                z: -0.4312,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.7938,
                y: 0.856,
                z: -0.0911,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.7296,
                y: 1.5,
                z: -1.1199,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.1824,
                y: 1.0802,
                z: -0.8813,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.2692,
                y: -0.4479,
                z: -0.7561,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.2509,
                y: -1.0403,
                z: 0.2351,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.0396,
                y: 1.0157,
                z: 1.9897,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.0166,
                y: -2.0238,
                z: -1.5752,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.547,
                y: -0.8593,
                z: 1.7247,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.5994,
                y: 0.8562,
                z: 1.0559,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.7916,
                y: 0.4868,
                z: -1.8473,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.2435,
                y: -1.7714,
                z: 0.172,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.0956,
                y: 1.2859,
                z: 0.8662,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.6158,
                y: 2.5895,
                z: -1.0794,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.8143,
                y: 1.4092,
                z: -1.7152,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.0338,
                y: -0.8636,
                z: -1.7441,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.201,
                y: -2.1224,
                z: 0.0555,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.0559,
                y: 2.099,
                z: 2.1445,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.0576,
                y: 0.6478,
                z: 2.2788,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.2455,
                y: -1.4893,
                z: -2.1387,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.8185,
                y: -2.3175,
                z: -2.2586,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.6004,
                y: 0.1907,
                z: 2.0193,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.4846,
                y: -1.3464,
                z: 2.0069,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.7242,
                y: 2.9375,
                z: 0.659,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.974,
                y: -0.3752,
                z: -0.2278,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.913,
                y: 1.5118,
                z: -3.0657,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.5966,
                y: 2.6713,
                z: 0.1704,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.7084,
                y: -1.3311,
                z: 3.4099,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                20,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                21,
            ],
            order: BondOrder.Single,
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
                3,
                14,
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
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                19,
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
                6,
                37,
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
                38,
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
                8,
                39,
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
        {
            atomIndexes: [
                9,
                40,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                22,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                41,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                12,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                20,
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
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                24,
            ],
            order: BondOrder.Single,
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
                14,
                25,
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
                15,
                26,
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
                27,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                17,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                17,
                28,
            ],
            order: BondOrder.Single,
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
                29,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                19,
                22,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                19,
                30,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                20,
                31,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                20,
                32,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                21,
                33,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                21,
                34,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                22,
                35,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                22,
                36,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default sucralose;
