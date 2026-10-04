// cspell:words aspartic
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 134601. */
const aspartame: Molecule = {
    name: 'Aspartame',
    // cspell:disable-next-line
    pronunciation: 'ˈæspəɹtˌAm',
    structureDescription:
        'Two amino acids, aspartic acid and phenylalanine, joined together with a methyl group capping one end.',
    realLifeDescription: 'It is about 200 times sweeter than sugar and sweetens diet sodas.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 246.5,
        densityGramsPerCubicCentimeter: 1.347,
        waterSolubilityGramsPerLiter: 10.2,
        logP: -0.1,
        yearDiscovered: 1965,
        taste: 'sweet',
        habitat: 'Made only in labs and factories',
        evolvesInto: ['methanol'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.8337,
                y: 2.9115,
                z: -0.4575,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.1213,
                y: -0.0281,
                z: -1.6083,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.9281,
                y: 2.0358,
                z: 1.4665,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 5.6253,
                y: 0.4131,
                z: -0.4127,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 4.1389,
                y: 0.9708,
                z: 1.2123,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0.5352,
                y: 0.1671,
                z: 0.0723,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 1.954,
                y: -2.5588,
                z: 0.2571,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.3657,
                y: 1.0282,
                z: -0.6567,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.3701,
                y: 0.213,
                z: -1.4846,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.4857,
                y: -1.2131,
                z: 0.4761,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.315,
                y: -0.6407,
                z: -0.6694,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.7229,
                y: -0.2954,
                z: -0.4765,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.0587,
                y: 2.0398,
                z: 0.2466,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.9887,
                y: -1.2164,
                z: 0.1958,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.9526,
                y: -1.9395,
                z: -0.354,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.5233,
                y: -0.1063,
                z: -0.2544,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.824,
                y: -2.7271,
                z: 0.3982,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -4.3947,
                y: -0.894,
                z: 0.4979,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 4.5756,
                y: 0.1586,
                z: 0.4068,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -4.045,
                y: -2.2044,
                z: 0.8242,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.5367,
                y: 3.8858,
                z: 0.3204,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.2467,
                y: 1.6211,
                z: -1.3488,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.9631,
                y: 0.8843,
                z: -2.1203,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.8274,
                y: -0.4345,
                z: -2.1872,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.2702,
                y: -0.1236,
                z: 1.0091,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.2977,
                y: -0.9132,
                z: 1.5135,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.5133,
                y: -1.9106,
                z: 0.862,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.1856,
                y: -1.5215,
                z: -0.8397,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.0113,
                y: -2.3603,
                z: -0.6923,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.8117,
                y: 0.9091,
                z: -0.5082,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.9541,
                y: -2.5729,
                z: 0.4494,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.0719,
                y: -2.8319,
                z: -0.7176,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.553,
                y: -3.7484,
                z: 0.6495,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -5.3463,
                y: -0.4877,
                z: 0.828,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.724,
                y: -2.8181,
                z: 1.4089,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.2243,
                y: 3.3922,
                z: 1.0138,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.1171,
                y: 4.5115,
                z: -0.3628,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.8289,
                y: 4.5201,
                z: 0.8624,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.9882,
                y: 1.3139,
                z: -0.2742,
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
                20,
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
                12,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                3,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                38,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                18,
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
                11,
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
                6,
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                30,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                31,
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
                12,
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
                8,
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                22,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                11,
            ],
            order: BondOrder.Single,
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
                9,
                25,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                14,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                10,
                15,
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
                26,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                27,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                28,
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
                29,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                19,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                16,
                32,
            ],
            order: BondOrder.Single,
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
                17,
                33,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                19,
                34,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                20,
                35,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                20,
                36,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                20,
                37,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default aspartame;
