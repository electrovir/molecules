// cspell:words rogaine
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 4201. */
const minoxidil: Molecule = {
    name: 'Minoxidil',
    routeName: 'minoxidil',
    // cspell:disable-next-line
    pronunciation: 'mənˈɑksədˌɪl',
    structureDescription:
        'A ring of carbon and nitrogen with two amine groups and an oxygen, attached to a ring of five carbons and a nitrogen.',
    realLifeDescription:
        'It is Rogaine, which regrows hair. It was first made as a blood pressure medicine, and doctors noticed hair growth as a side effect.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 248,
        waterSolubilityGramsPerLiter: 2.2,
        logP: 1.24,
        yearDiscovered: 1963,
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -3.9714,
                y: 0.0468,
                z: -0.236,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 1.4255,
                y: -0.2076,
                z: 0.3469,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -0.6244,
                y: -1.2585,
                z: 0.2517,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -2.5918,
                y: 0.0684,
                z: -0.0959,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -2.5007,
                y: 2.476,
                z: -0.3524,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -2.6363,
                y: -2.2928,
                z: 0.16,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 4.1965,
                y: 0.1557,
                z: -0.3181,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.3505,
                y: -0.9312,
                z: -0.9788,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.3217,
                y: 1.324,
                z: 0.1334,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.2046,
                y: -1.3715,
                z: -0.0708,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.1762,
                y: 0.8481,
                z: 1.0239,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.0815,
                y: -0.1536,
                z: 0.2026,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.5489,
                y: 1.196,
                z: -0.0111,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.8877,
                y: 1.2635,
                z: -0.1559,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.9954,
                y: -1.1633,
                z: 0.1005,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.7232,
                y: -0.2646,
                z: 0.5473,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.9597,
                y: 0.5112,
                z: -1.0191,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.9418,
                y: -0.5454,
                z: -1.9213,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.9801,
                y: -1.7924,
                z: -1.2281,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.9327,
                y: 2.0558,
                z: 0.6733,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.9123,
                y: 1.8316,
                z: -0.7489,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.5915,
                y: -2.0985,
                z: -0.6158,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.5971,
                y: -1.8826,
                z: 0.8165,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.5902,
                y: 0.4336,
                z: 1.9524,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.5667,
                y: 1.7006,
                z: 1.3365,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.0693,
                y: 2.0819,
                z: -0.0888,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.9544,
                y: 3.3273,
                z: -0.3897,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.5068,
                y: 2.5047,
                z: -0.4577,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.9564,
                y: -3.0461,
                z: 0.3126,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.2687,
                y: 0.1757,
                z: 0.6813,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                3,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                29,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
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
                3,
                13,
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
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                26,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                27,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                14,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                5,
                28,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                7,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                8,
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
                16,
            ],
            order: BondOrder.Single,
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
                7,
                17,
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
                10,
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
                21,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                22,
            ],
            order: BondOrder.Single,
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
                10,
                24,
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
                12,
                13,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                12,
                25,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default minoxidil;
