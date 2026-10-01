// cspell:words pufferfish tetrodotoxin
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 11174599. */
const tetrodotoxin: Molecule = {
    name: 'Tetrodotoxin',
    description:
        'A compact cage of carbon, nitrogen, and oxygen covered in OH groups. It is the deadly nerve poison in pufferfish.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 225,
        hazardPictograms: [GhsPictogram.AcuteToxicity],
        yearDiscovered: 1909,
        habitat: 'Pufferfish, blue-ringed octopuses, and newts; made by symbiotic bacteria',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.1413,
                y: -0.1307,
                z: 1.5075,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.7883,
                y: 1.6687,
                z: 0.0531,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.0816,
                y: 2.331,
                z: -1.9833,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.7929,
                y: -1.4606,
                z: -1.8543,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.3502,
                y: 1.2098,
                z: 1.878,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.2663,
                y: 2.0727,
                z: 2.2878,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.2181,
                y: -2.9536,
                z: 0.9542,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -3.6406,
                y: -2.077,
                z: 0.0802,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 2.1929,
                y: 0.6363,
                z: -0.8409,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 2.9148,
                y: -1.3109,
                z: 0.3476,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 4.3955,
                y: 0.0182,
                z: -0.8657,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.8046,
                y: 0.549,
                z: -0.4468,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.4938,
                y: -0.934,
                z: -0.1278,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.9651,
                y: -1.0158,
                z: 0.3873,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.6004,
                y: 0.8505,
                z: -1.1141,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.1367,
                y: 0.9744,
                z: -1.5993,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.9513,
                y: -0.599,
                z: -0.7284,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.5182,
                y: 1.4744,
                z: 0.756,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.9541,
                y: 1.2574,
                z: 1.1549,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.5383,
                y: -1.5629,
                z: 0.8153,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.4063,
                y: -0.7234,
                z: -0.2572,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.1353,
                y: -0.2745,
                z: -0.4042,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.5569,
                y: -1.5211,
                z: -1.0571,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.1729,
                y: -2.0366,
                z: 0.7252,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.2758,
                y: 1.2235,
                z: -1.8925,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.0362,
                y: 0.3578,
                z: -2.4896,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.6815,
                y: 2.5266,
                z: 0.4915,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.4465,
                y: -1.1563,
                z: 1.8257,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.4878,
                y: 1.4547,
                z: -1.3654,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.1065,
                y: -0.4473,
                z: -1.053,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.624,
                y: -0.1082,
                z: 0.6205,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.534,
                y: 2.5336,
                z: -2.7082,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.8076,
                y: -2.3798,
                z: -1.5387,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.2683,
                y: 1.3717,
                z: 1.6026,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.2009,
                y: 1.9035,
                z: 2.4945,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.9625,
                y: -3.3613,
                z: 1.4284,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.6616,
                y: -2.5899,
                z: -0.7453,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.5705,
                y: 0.825,
                z: -1.4547,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.1894,
                y: -0.5663,
                z: -0.6278,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                13,
            ],
            order: BondOrder.Single,
        },
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
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                18,
            ],
            order: BondOrder.Single,
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
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                32,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                33,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                34,
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
                35,
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
                36,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                21,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                28,
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
                21,
            ],
            order: BondOrder.Double,
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
                37,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                38,
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
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                17,
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
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                22,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                23,
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
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                24,
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
                16,
                20,
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
                26,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                19,
                27,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                20,
                29,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                20,
                30,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default tetrodotoxin;
