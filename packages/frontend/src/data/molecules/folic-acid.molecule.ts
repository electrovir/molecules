// cspell:words glutamic
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 135398658. */
const folicAcid: Molecule = {
    name: 'Folic Acid',
    routeName: 'folic-acid',
    // cspell:disable-next-line
    pronunciation: 'fˈɑlɪk ˈæsəd',
    structureDescription:
        'Two fused rings of carbon and nitrogen linked to a benzene ring and then to glutamic acid.',
    realLifeDescription:
        'It is vitamin B9, added to bread and flour to prevent birth defects. Its name comes from the Latin word for leaf, because leafy greens are full of it.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 250,
        densityGramsPerCubicCentimeter: 1.6,
        waterSolubilityGramsPerLiter: 0.0016,
        logP: -2.5,
        yearDiscovered: 1941,
        habitat: 'Leafy greens, liver, beans, yeast, fresh fruit',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 8.0491,
                y: 1.4182,
                z: -1.5277,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 4.4122,
                y: 1.62,
                z: 1.9568,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 6.0108,
                y: 1.3252,
                z: -2.5211,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 6.8042,
                y: -4.0838,
                z: -0.6649,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 7.6945,
                y: -3.0943,
                z: 1.1724,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -5.9093,
                y: -2.9204,
                z: 0.4122,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 4.7608,
                y: 0.8276,
                z: -0.1949,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.6476,
                y: 0.9081,
                z: 0.1046,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -4.5536,
                y: -0.571,
                z: 0.6074,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -5.9069,
                y: 1.7503,
                z: -0.2175,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -7.7726,
                y: -1.836,
                z: -0.4395,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -7.8097,
                y: 0.4978,
                z: -0.769,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -9.6859,
                y: -0.8042,
                z: -1.3041,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 6.2009,
                y: 0.8273,
                z: -0.1446,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 6.7744,
                y: -0.4895,
                z: 0.3926,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 6.4736,
                y: -1.7401,
                z: -0.4432,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.9759,
                y: 1.2302,
                z: 0.8769,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.5065,
                y: 1.1468,
                z: 0.6752,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 6.7081,
                y: 1.1983,
                z: -1.523,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.2529,
                y: 0.9878,
                z: 0.2968,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.5714,
                y: 0.7288,
                z: 1.1818,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.6612,
                y: 0.9708,
                z: 1.7708,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.9719,
                y: 1.2436,
                z: -0.6095,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.2816,
                y: 0.8911,
                z: 1.5817,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.5922,
                y: 1.164,
                z: -0.7987,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 7.0506,
                y: -3.0138,
                z: 0.1355,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.9793,
                y: 0.6457,
                z: 0.6605,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -5.8144,
                y: -0.5927,
                z: 0.1335,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -4.6431,
                y: 1.7843,
                z: 0.2561,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -6.4957,
                y: 0.5378,
                z: -0.2767,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -6.4805,
                y: -1.8968,
                z: 0.0578,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -8.4056,
                y: -0.6611,
                z: -0.8382,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 6.5038,
                y: 1.64,
                z: 0.5281,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 7.8637,
                y: -0.3918,
                z: 0.4885,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 6.3965,
                y: -0.6519,
                z: 1.4108,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 6.8889,
                y: -1.6163,
                z: -1.4495,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.3897,
                y: -1.8775,
                z: -0.5243,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.3296,
                y: 0.4399,
                z: -1.0276,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.5128,
                y: 1.5573,
                z: 1.8988,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.3526,
                y: -0.1978,
                z: 1.7273,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.0592,
                y: 0.8888,
                z: 2.7789,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.5912,
                y: 1.4123,
                z: -1.4855,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.9866,
                y: 0.9798,
                z: -0.8489,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.3396,
                y: 0.754,
                z: 2.4616,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.1874,
                y: 1.2477,
                z: -1.8041,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.1876,
                y: 2.767,
                z: 0.2961,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 8.3741,
                y: 1.6738,
                z: -2.4173,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -8.2907,
                y: -2.7061,
                z: -0.5181,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 7.1925,
                y: -4.9084,
                z: -0.3022,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -10.2237,
                y: -0.0031,
                z: -1.6162,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -10.1334,
                y: -1.713,
                z: -1.3509,
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
                0,
                46,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                16,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                2,
                18,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                3,
                25,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                48,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                25,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                5,
                30,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                6,
                13,
            ],
            order: BondOrder.Single,
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
                6,
                37,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                20,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                42,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                26,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                27,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                9,
                28,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                29,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                10,
                30,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                31,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                47,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                29,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                31,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                12,
                31,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                49,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                50,
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
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                32,
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
                14,
                33,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                34,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                25,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                35,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                36,
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
                21,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                17,
                22,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                19,
                23,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                19,
                24,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                20,
                26,
            ],
            order: BondOrder.Single,
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
                20,
                39,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                21,
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                21,
                40,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                22,
                24,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                22,
                41,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                23,
                43,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                24,
                44,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                26,
                28,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                27,
                29,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                27,
                30,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                28,
                45,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default folicAcid;
