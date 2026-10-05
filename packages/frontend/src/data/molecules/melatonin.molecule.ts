import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 896. */
const melatonin: Molecule = {
    name: 'Melatonin',
    routeName: 'melatonin',
    // cspell:disable-next-line
    pronunciation: 'mˌɛlətˈOnən',
    structureDescription: 'A double ring with two side chains, made from serotonin.',
    realLifeDescription:
        'Your body releases it in the dark to make you sleepy. Light from screens at night can slow its release.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 117,
        waterSolubilityGramsPerLiter: 2,
        logP: 1.6,
        oralRatLethalDoseMilligramsPerKilogram: 3200,
        yearDiscovered: 1958,
        habitat: 'Vertebrate pineal glands at night, all plants studied',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.0465,
                y: 3.3484,
                z: 0.3472,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 3.3176,
                y: -1.132,
                z: 0.7275,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -3.2104,
                y: -1.0701,
                z: -0.3785,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 1.5185,
                y: -1.6093,
                z: -0.672,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.2275,
                y: -1.4897,
                z: 0.5264,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.3207,
                y: -0.0898,
                z: 0.2887,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.0796,
                y: -2.2068,
                z: 1.1166,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.5744,
                y: 0.147,
                z: -0.2793,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.4044,
                y: -2.065,
                z: 0.1059,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.9548,
                y: -2.6927,
                z: 0.0879,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.4562,
                y: 1.0022,
                z: 0.5029,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.0085,
                y: 1.4259,
                z: -0.6453,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.8771,
                y: 2.2872,
                z: 0.1418,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.134,
                y: 2.4935,
                z: -0.4234,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.658,
                y: -0.9172,
                z: -0.2861,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.0451,
                y: 0.1505,
                z: -1.274,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.2256,
                y: 3.0716,
                z: 0.9287,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.4423,
                y: -3.0774,
                z: 1.678,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.4186,
                y: -1.5628,
                z: 1.8526,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.7418,
                y: -3.0922,
                z: 0.1065,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.7598,
                y: -3.229,
                z: 0.6021,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.4899,
                y: -3.3805,
                z: -0.627,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.1382,
                y: -1.2081,
                z: -0.7549,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.5051,
                y: 0.7889,
                z: 0.9525,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.9868,
                y: 1.5876,
                z: -1.0854,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.4465,
                y: 3.4982,
                z: -0.6986,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.0517,
                y: -1.3474,
                z: -1.5357,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.6909,
                y: 0.8849,
                z: -0.785,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.5848,
                y: -0.308,
                z: -2.1071,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.1594,
                y: 0.6659,
                z: -1.656,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.7521,
                y: 4.0272,
                z: 1.0222,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.8357,
                y: 2.4358,
                z: 0.2801,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.1274,
                y: 2.663,
                z: 1.9403,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                12,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                14,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                2,
                7,
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
                22,
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
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                26,
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
                8,
            ],
            order: BondOrder.Double,
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
                10,
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
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                11,
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
                10,
                12,
            ],
            order: BondOrder.Double,
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
                11,
                13,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                11,
                24,
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
                13,
                25,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                27,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                28,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                29,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                30,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                31,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                32,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default melatonin;
