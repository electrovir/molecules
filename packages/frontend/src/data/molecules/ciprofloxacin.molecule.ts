// cspell:words ciprofloxacin
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 2764. */
const ciprofloxacin: Molecule = {
    name: 'Ciprofloxacin',
    structureDescription:
        'Two fused rings with a fluorine, carrying a three-carbon ring and a ring of two nitrogens.',
    realLifeDescription: 'It is a common antibiotic for urinary infections.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 256,
        logP: 0.28,
        yearDiscovered: 1980,
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: -2.2164,
                y: 2.7826,
                z: 0.361,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.8091,
                y: 2.524,
                z: 0.2325,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 5.1624,
                y: 1.4595,
                z: 0.6808,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 5.5985,
                y: -0.2899,
                z: -0.7262,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 1.5285,
                y: -1.3112,
                z: -0.2906,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -3.1274,
                y: 0.1877,
                z: 0.0112,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -5.8815,
                y: -0.5181,
                z: -0.2456,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.1463,
                y: -2.7265,
                z: -0.4863,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.692,
                y: -3.7953,
                z: 0.4013,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.2424,
                y: -3.4159,
                z: 0.481,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.5507,
                y: -0.2889,
                z: -0.1261,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.8698,
                y: -0.9817,
                z: -0.2685,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.966,
                y: 1.0479,
                z: 0.0569,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.8289,
                y: -0.5519,
                z: -0.138,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.7586,
                y: 0.4786,
                z: 0.026,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.9592,
                y: 0.8291,
                z: -1.0161,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.5988,
                y: -1.1171,
                z: 0.4878,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.3692,
                y: 0.2493,
                z: -0.1019,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.4163,
                y: 1.3744,
                z: 0.0768,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -5.4277,
                y: 0.8278,
                z: -0.5931,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -5.0808,
                y: -1.0498,
                z: 0.8559,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.0335,
                y: 2.0797,
                z: 0.2209,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.3285,
                y: 1.7904,
                z: 0.2047,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 4.8232,
                y: 0.4153,
                z: -0.1046,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.0251,
                y: -2.971,
                z: -1.5368,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.3236,
                y: -3.5196,
                z: 1.2368,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.9395,
                y: -4.7488,
                z: -0.0491,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.4833,
                y: -4.1162,
                z: 0.0853,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.0718,
                y: -2.9133,
                z: 1.3877,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.5217,
                y: -1.8387,
                z: -0.4086,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.1885,
                y: -1.5547,
                z: -0.3363,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.841,
                y: 0.2839,
                z: -1.9617,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.659,
                y: 1.8648,
                z: -1.2071,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.0401,
                y: -1.4308,
                z: 1.3784,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.4515,
                y: -1.8755,
                z: -0.2918,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -5.5769,
                y: 1.5043,
                z: 0.2579,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -6.0399,
                y: 1.2092,
                z: -1.4175,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -5.4362,
                y: -2.0558,
                z: 1.1042,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -5.2201,
                y: -0.4304,
                z: 1.751,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.3487,
                y: 3.1098,
                z: 0.3616,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -6.8602,
                y: -0.4802,
                z: 0.0377,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 6.1325,
                y: 1.603,
                z: 0.7045,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                22,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                18,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                2,
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                41,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                23,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                4,
                7,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
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
                6,
                40,
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
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                24,
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
                8,
                25,
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
                9,
                27,
            ],
            order: BondOrder.Single,
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
                10,
                12,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                13,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                11,
                17,
            ],
            order: BondOrder.Double,
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
                12,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                21,
            ],
            order: BondOrder.Double,
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
                30,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                22,
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
                15,
                31,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                32,
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
                16,
                33,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                34,
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
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                19,
                35,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                19,
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
        {
            atomIndexes: [
                20,
                38,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                21,
                22,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                21,
                39,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default ciprofloxacin;
