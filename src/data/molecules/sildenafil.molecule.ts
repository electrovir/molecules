// cspell:words sildenafil sulfonyl
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 135398744. */
const sildenafil: Molecule = {
    name: 'Sildenafil',
    description:
        'Fused rings of carbon and nitrogen linked to a benzene ring carrying a sulfonyl group and a ring of two nitrogens. It is Viagra.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 189,
        logP: 2.75,
        hazardPictograms: [GhsPictogram.Irritant],
        yearDiscovered: 1989,
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: -3.6872,
                y: 0.669,
                z: -2.0317,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -4.4666,
                y: 1.8447,
                z: -2.3546,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -3.1908,
                y: -0.2055,
                z: -3.0725,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.9154,
                y: 2.419,
                z: 1.2512,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.8723,
                y: -3.4174,
                z: 0.8087,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -4.5391,
                y: -0.2671,
                z: -0.8781,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -5.4131,
                y: -1.5557,
                z: 1.5393,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0.9847,
                y: -1.3374,
                z: 0.2789,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 4.4989,
                y: -2.2359,
                z: -0.1601,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 2.2969,
                y: 0.4762,
                z: -0.6153,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 5.4113,
                y: -1.3661,
                z: -0.6486,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -5.2243,
                y: 0.5066,
                z: 0.1959,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.7935,
                y: -1.4306,
                z: -0.3196,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -6.1559,
                y: -0.4193,
                z: 0.9765,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -4.7526,
                y: -2.3191,
                z: 0.4711,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.3107,
                y: 1.1852,
                z: -1.0542,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -6.3036,
                y: -2.4195,
                z: 2.3136,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.1533,
                y: 0.4078,
                z: -1.0125,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.0658,
                y: 0.8166,
                z: -0.2407,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.3806,
                y: 2.3717,
                z: -0.3239,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.1358,
                y: 2.003,
                z: 0.4897,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.1587,
                y: -0.0264,
                z: -0.211,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.2932,
                y: 2.7804,
                z: 0.4483,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.3582,
                y: -0.4282,
                z: -0.5321,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.245,
                y: -1.7109,
                z: -0.0728,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 4.6994,
                y: -0.2536,
                z: -0.8755,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 5.3597,
                y: 0.9428,
                z: -1.4217,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.0151,
                y: -2.2766,
                z: 0.3827,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 6.1752,
                y: 1.7146,
                z: -0.3637,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 4.9189,
                y: -3.5668,
                z: 0.2089,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 5.3127,
                y: 2.2351,
                z: 0.775,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.6803,
                y: 2.5748,
                z: 2.6491,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.9634,
                y: 2.2886,
                z: 3.3997,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -5.8239,
                y: 1.3107,
                z: -0.2427,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.4909,
                y: 0.9482,
                z: 0.8787,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.9937,
                y: -1.095,
                z: 0.3484,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.3553,
                y: -2.0213,
                z: -1.1306,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -6.6197,
                y: 0.1594,
                z: 1.7845,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -6.9622,
                y: -0.7714,
                z: 0.319,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -5.4961,
                y: -2.756,
                z: -0.209,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.178,
                y: -3.1463,
                z: 0.9051,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -6.7619,
                y: -1.8599,
                z: 3.1365,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -5.7409,
                y: -3.2421,
                z: 2.7688,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -7.1041,
                y: -2.8475,
                z: 1.6993,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.0893,
                y: -0.5162,
                z: -1.5817,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.2718,
                y: 2.9926,
                z: -0.3407,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.3599,
                y: 3.7107,
                z: 1.0057,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 6.0329,
                y: 0.6514,
                z: -2.2379,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.6181,
                y: 1.6177,
                z: -1.8666,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.0583,
                y: -1.6288,
                z: 0.5791,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 6.9667,
                y: 1.0753,
                z: 0.0451,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 6.6682,
                y: 2.5623,
                z: -0.8539,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.3553,
                y: -4.2851,
                z: -0.3914,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.9887,
                y: -3.6808,
                z: 0.0148,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.7184,
                y: -3.7087,
                z: 1.2736,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.4843,
                y: 2.8431,
                z: 0.3973,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.8988,
                y: 1.4202,
                z: 1.3766,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.9132,
                y: 2.8621,
                z: 1.4422,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.3571,
                y: 3.6034,
                z: 2.8424,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.1007,
                y: 1.8871,
                z: 2.9967,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.7611,
                y: 2.9629,
                z: 3.0709,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.8218,
                y: 2.4081,
                z: 4.4774,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.3074,
                y: 1.2685,
                z: 3.1985,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                1,
            ],
            order: BondOrder.Double,
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
                5,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                15,
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
                3,
                31,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                27,
            ],
            order: BondOrder.Double,
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
                5,
                12,
            ],
            order: BondOrder.Single,
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
                14,
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
                7,
                21,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                27,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                49,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                24,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                29,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                21,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                9,
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                25,
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
                11,
                33,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                34,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                35,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                36,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                37,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                38,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                39,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                40,
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
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                41,
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
                16,
                43,
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
                44,
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
                18,
                21,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                19,
                22,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                19,
                45,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                20,
                22,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                22,
                46,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                23,
                24,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                23,
                25,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                24,
                27,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                25,
                26,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                26,
                28,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                26,
                47,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                26,
                48,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                28,
                30,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                28,
                50,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                28,
                51,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                29,
                52,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                29,
                53,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                29,
                54,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                30,
                55,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                30,
                56,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                30,
                57,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                31,
                32,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                31,
                58,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                31,
                59,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                32,
                60,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                32,
                61,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                32,
                62,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default sildenafil;
