import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 4091. */
const metformin: Molecule = {
    name: 'Metformin',
    structureDescription:
        'Two linked carbons each bonded to three nitrogens, with two methyl groups on one end.',
    realLifeDescription:
        'It is the most prescribed medicine for type 2 diabetes. It was developed from a chemical found in a flowering plant called French lilac.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 224.5,
        logP: -2.6,
        hazardPictograms: [GhsPictogram.Irritant],
        yearDiscovered: 1922,
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.5155,
                y: -0.36,
                z: -0.079,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0.717,
                y: 0.2154,
                z: -0.8185,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -0.6602,
                y: 1.8744,
                z: -0.162,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 2.9005,
                y: -0.4475,
                z: -0.3361,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 1.5201,
                y: -0.0296,
                z: 1.4348,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.2978,
                y: -1.7839,
                z: -0.3082,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.78,
                y: 0.0051,
                z: 0.5511,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.526,
                y: 0.5926,
                z: -0.3455,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.6419,
                y: -0.0664,
                z: 0.0634,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.6868,
                y: -1.9541,
                z: -1.2008,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.2427,
                y: -2.3145,
                z: -0.4674,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.7919,
                y: -2.2289,
                z: 0.5541,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.4061,
                y: -0.8696,
                z: 0.7568,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.3495,
                y: 0.6744,
                z: -0.1018,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.598,
                y: 0.5078,
                z: 1.5067,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.5953,
                y: 2.0901,
                z: 0.1923,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.6259,
                y: -0.6688,
                z: 0.3371,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.1387,
                y: -0.5194,
                z: -1.3192,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.652,
                y: 0.2314,
                z: 1.8892,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.3007,
                y: -0.2678,
                z: 2.0371,
            },
        },
    ],
    bonds: [
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
                6,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                7,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                7,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                8,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                2,
                7,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                2,
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                19,
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
                10,
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
    ],
};

export default metformin;
