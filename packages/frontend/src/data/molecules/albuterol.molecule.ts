// cspell:words albuterol
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 2083. */
const albuterol: Molecule = {
    name: 'Albuterol',
    // cspell:disable-next-line
    pronunciation: 'ælbjˈuɾəɹˌɔl',
    structureDescription:
        'A benzene ring with an OH group and a CH₂OH group, attached to a chain with an OH group and a bulky amine.',
    realLifeDescription:
        'It is the medicine in rescue inhalers that opens airways. It starts working within minutes, which is why it is called a rescue medicine.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 157.5,
        waterSolubilityGramsPerLiter: 14.1,
        logP: 1.4,
        hazardPictograms: [GhsPictogram.Irritant],
        yearDiscovered: 1966,
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.4165,
                y: 2.7067,
                z: -1.2573,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -3.8453,
                y: -1.0609,
                z: 1.3085,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -3.742,
                y: -0.7456,
                z: -2.0639,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 2.2727,
                y: 0.032,
                z: 0.5169,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.3738,
                y: -0.8535,
                z: 0.1237,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.9088,
                y: 0.9127,
                z: -0.58,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.7603,
                y: 1.8442,
                z: -0.1737,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.7126,
                y: -1.7668,
                z: 1.3066,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.9206,
                y: -1.6928,
                z: -1.0756,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 4.5954,
                y: -0.0083,
                z: -0.2561,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.4745,
                y: 1.0629,
                z: 0.219,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.0381,
                y: 0.1863,
                z: -0.6919,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.0138,
                y: 1.2418,
                z: 1.4812,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.1763,
                y: -0.534,
                z: -0.3292,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.7332,
                y: -0.3663,
                z: 0.9386,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.1519,
                y: 0.5216,
                z: 1.8438,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.7855,
                y: -1.48,
                z: -1.3105,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.7348,
                y: 1.5711,
                z: -0.8708,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.6113,
                y: 0.3822,
                z: -1.4889,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.5429,
                y: 0.5864,
                z: 1.329,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.0827,
                y: 2.4876,
                z: 0.6548,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.0306,
                y: -1.1871,
                z: 2.1812,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.5265,
                y: -2.4562,
                z: 1.0547,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.8477,
                y: -2.3715,
                z: 1.6036,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.8975,
                y: -1.1372,
                z: -2.0188,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.9332,
                y: -2.1403,
                z: -0.9092,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.6189,
                y: -2.5233,
                z: -1.2393,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.4922,
                y: 0.503,
                z: -1.2188,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.4816,
                y: -0.6482,
                z: -0.3514,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.8263,
                y: 0.7396,
                z: 0.5117,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.6189,
                y: 0.0632,
                z: -1.6865,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.57,
                y: 1.9298,
                z: 2.1947,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.2144,
                y: 3.2081,
                z: -1.4973,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.5809,
                y: 0.6569,
                z: 2.833,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.0248,
                y: -1.8665,
                z: -1.9987,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.2577,
                y: -2.3491,
                z: -0.8425,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.3364,
                y: -1.3525,
                z: 0.524,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.1227,
                y: -1.3589,
                z: -2.7156,
            },
        },
    ],
    bonds: [
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
                32,
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
                36,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                37,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                4,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                5,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                19,
            ],
            order: BondOrder.Single,
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
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                6,
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
                5,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                10,
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
                7,
                23,
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
                9,
                29,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                11,
            ],
            order: BondOrder.Double,
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
                11,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                30,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                15,
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
                13,
                14,
            ],
            order: BondOrder.Double,
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
                14,
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
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
                16,
                35,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default albuterol;
