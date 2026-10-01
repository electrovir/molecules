import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 171548. */
const biotin: Molecule = {
    name: 'Biotin',
    description:
        'A ring of carbon and nitrogen fused to a ring holding sulfur, with a carbon chain ending in an acid group. It is vitamin B7, sold as a supplement for hair and nails.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 232,
        waterSolubilityGramsPerLiter: 0.22,
        logP: 0.5,
        hazardPictograms: [],
        yearDiscovered: 1936,
        habitat: 'Every living cell; rich in liver, yeast, nuts, and grains',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: -2.4613,
                y: 1.9562,
                z: 1.0264,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -3.0282,
                y: -2.7745,
                z: 0.7862,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 5.9601,
                y: -0.7286,
                z: -0.8625,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 5.2345,
                y: -0.1562,
                z: 1.2118,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.6389,
                y: -1.0776,
                z: -0.0379,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -3.8653,
                y: -0.876,
                z: -0.3016,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.7963,
                y: 0.1561,
                z: -0.7847,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.3272,
                y: 0.3325,
                z: -0.8946,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.1759,
                y: 1.3861,
                z: -0.1164,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.7881,
                y: 1.5775,
                z: -0.1402,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.1515,
                y: 1.155,
                z: 0.5864,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.2536,
                y: 0.6369,
                z: -0.341,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.8641,
                y: -1.7026,
                z: 0.2196,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.6265,
                y: 0.4376,
                z: 0.3075,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.7018,
                y: -0.0234,
                z: -0.6757,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 5.0173,
                y: -0.2989,
                z: 0.0167,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.349,
                y: -0.0162,
                z: -1.7704,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.6671,
                y: 0.3619,
                z: -1.9353,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.0542,
                y: 2.1751,
                z: -0.8686,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.8795,
                y: 2.4249,
                z: -0.8272,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.7428,
                y: 1.4441,
                z: 0.377,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.4936,
                y: 2.1002,
                z: 1.0286,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.0371,
                y: 0.4536,
                z: 1.423,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.7448,
                y: -1.4961,
                z: 0.1981,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.8538,
                y: -1.1054,
                z: -0.2752,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.9495,
                y: -0.316,
                z: -0.7878,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.3643,
                y: 1.343,
                z: -1.1743,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.9441,
                y: 1.3772,
                z: 0.777,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.5308,
                y: -0.2954,
                z: 1.1187,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.8662,
                y: 0.749,
                z: -1.4347,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.3792,
                y: -0.9469,
                z: -1.1688,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 6.8176,
                y: -0.9066,
                z: -0.4205,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                9,
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
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                31,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                15,
            ],
            order: BondOrder.Double,
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
                12,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                23,
            ],
            order: BondOrder.Single,
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
                12,
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
                8,
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
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
                10,
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                21,
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
                11,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                25,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                26,
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
                27,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                28,
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
                29,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                30,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default biotin;
