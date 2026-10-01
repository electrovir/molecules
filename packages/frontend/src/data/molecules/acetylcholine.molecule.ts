import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 187. */
const acetylcholine: Molecule = {
    name: 'Acetylcholine',
    structureDescription:
        'An acetic acid group joined through an ester link to a two-carbon chain ending in a nitrogen with three methyl groups.',
    realLifeDescription:
        'Nerves release it to make your muscles contract. It was the first nerve messenger ever discovered, found in experiments with frog hearts.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 148,
        yearDiscovered: 1867,
        habitat: 'Nerve cells of animals, some non-neural cells, plants, microbes',
        evolvesInto: ['acetic-acid'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.488,
                y: -0.6322,
                z: 0.0086,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.7234,
                y: 1.3199,
                z: -0.003,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -2.1928,
                y: -0.0171,
                z: -0.0025,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.9044,
                y: -0.8267,
                z: 0.0274,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.2148,
                y: 0.8556,
                z: -1.2492,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.3853,
                y: -0.9624,
                z: -0.0238,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.2666,
                y: 0.865,
                z: 1.2355,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.2808,
                y: 0.1183,
                z: 0.0172,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.6437,
                y: 0.0989,
                z: -0.0012,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.828,
                y: -0.8193,
                z: -0.0089,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.909,
                y: -1.455,
                z: 0.9261,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.8924,
                y: -1.4893,
                z: -0.8466,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.9631,
                y: 0.2385,
                z: -2.1168,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.2275,
                y: 1.2568,
                z: -1.3612,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.5236,
                y: 1.6946,
                z: -1.1381,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.3493,
                y: -1.5831,
                z: 0.8765,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.3038,
                y: -0.3682,
                z: -0.0405,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.317,
                y: -1.5838,
                z: -0.9217,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.0785,
                y: 0.2479,
                z: 2.119,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.5472,
                y: 1.684,
                z: 1.1609,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.2743,
                y: 1.2905,
                z: 1.2864,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.2952,
                y: 0.7486,
                z: -0.8759,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.3009,
                y: 0.7512,
                z: 0.909,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.8072,
                y: -1.4432,
                z: -0.9059,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.8223,
                y: -1.4387,
                z: 0.8916,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.7469,
                y: -0.2262,
                z: -0.0182,
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
                8,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                2,
                3,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                4,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                5,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                6,
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
                10,
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
                4,
                12,
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
                14,
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
                5,
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
                6,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                20,
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
                22,
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
                9,
                23,
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
                9,
                25,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default acetylcholine;
