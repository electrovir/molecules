import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';
import indigo from './indigo.molecule.js';

/** 3D coordinates from PubChem CID 6305. */
const tryptophan: Molecule = {
    name: 'Tryptophan',
    routeName: 'tryptophan',
    // cspell:disable-next-line
    pronunciation: 'tɹˈɪptəfˌæn',
    structureDescription: 'An amino acid with a double ring side chain.',
    realLifeDescription:
        'Your body turns it into serotonin and melatonin. Turkey has no more of it than chicken or cheese, so it is probably not why people get sleepy after a big holiday meal.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 290,
        waterSolubilityGramsPerLiter: 13.4,
        logP: -1.06,
        yearDiscovered: 1901,
        taste: 'flat, slightly bitter',
        habitat: 'Protein-rich foods, milk, eggs',
        evolvesInto: [
            indigo,
        ],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.0909,
                y: -0.9895,
                z: 1.9068,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.0548,
                y: -2.4071,
                z: 0.4211,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.4587,
                y: 2.1947,
                z: 0.338,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 3.7679,
                y: -0.397,
                z: -0.3244,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.2145,
                y: 0.9708,
                z: -0.4551,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.5572,
                y: 0.5622,
                z: -0.9156,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.9513,
                y: 0.156,
                z: -0.4126,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.4604,
                y: -0.0151,
                z: 0.2043,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.9867,
                y: 0.9479,
                z: 0.0887,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.1293,
                y: 2.2183,
                z: 0.0124,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.226,
                y: -1.1834,
                z: -0.7534,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.2882,
                y: 0.4655,
                z: 0.267,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.8588,
                y: -1.2663,
                z: 0.8209,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.5233,
                y: -1.6796,
                z: -0.5805,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.5369,
                y: -0.8661,
                z: -0.078,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.4531,
                y: -0.1789,
                z: -1.72,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.061,
                y: 1.4265,
                z: -1.3698,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.6114,
                y: 0.7291,
                z: 0.9955,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.4514,
                y: 3.1207,
                z: 0.1439,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.9783,
                y: 2.9786,
                z: 0.708,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.4506,
                y: -1.8317,
                z: -1.1509,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.078,
                y: 1.098,
                z: 0.6581,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.7412,
                y: -2.7114,
                z: -0.8428,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.3786,
                y: -0.6801,
                z: 0.4413,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.2115,
                y: 0.413,
                z: -0.756,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.5374,
                y: -1.2721,
                z: 0.0481,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.7143,
                y: -1.803,
                z: 2.305,
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
                26,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                12,
            ],
            order: BondOrder.Double,
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
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                19,
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
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                24,
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
                9,
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
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                16,
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
                10,
            ],
            order: BondOrder.Double,
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
                17,
            ],
            order: BondOrder.Single,
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
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                20,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                21,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                14,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                13,
                22,
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
    ],
};

export default tryptophan;
