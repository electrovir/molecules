// cspell:words famotidine pepcid
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 5702160. */
const famotidine: Molecule = {
    name: 'Famotidine',
    structureDescription:
        'A ring of carbon, nitrogen, and sulfur attached to a chain with two more sulfur atoms.',
    realLifeDescription:
        'It is the heartburn medicine in Pepcid. It works by turning down how much acid the stomach makes.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 163.5,
        waterSolubilityGramsPerLiter: 1,
        logP: -0.64,
        hazardPictograms: [GhsPictogram.Irritant],
        yearDiscovered: 1979,
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: 0.9743,
                y: -2.046,
                z: 1.1294,
            },
        },
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: 2.495,
                y: 2.042,
                z: -0.1265,
            },
        },
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: -3.8047,
                y: -1.7708,
                z: -0.0591,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 3.5842,
                y: 2.6356,
                z: -0.885,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.4554,
                y: 2.2199,
                z: 1.3161,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 2.4327,
                y: 0.4437,
                z: -0.461,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.6063,
                y: -0.5556,
                z: -0.6697,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 4.5649,
                y: -0.0455,
                z: 0.5428,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -3.5831,
                y: 0.7639,
                z: -0.7522,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 1.0427,
                y: 2.7352,
                z: -0.7407,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -4.3883,
                y: 2.7925,
                z: 0.2889,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -3.2268,
                y: 1.2488,
                z: 1.5015,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.219,
                y: -1.823,
                z: -0.4981,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.6166,
                y: -2.649,
                z: 0.6343,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.1247,
                y: -2.2817,
                z: -0.448,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.3984,
                y: -0.3562,
                z: -0.1167,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.3063,
                y: -1.8612,
                z: -0.3678,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.3487,
                y: -2.6761,
                z: -0.0157,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.904,
                y: -0.3916,
                z: -0.54,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.7398,
                y: 1.575,
                z: 0.2675,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.6517,
                y: -1.9001,
                z: -1.4297,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.2114,
                y: -2.2316,
                z: -0.7295,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.5401,
                y: -3.7009,
                z: 0.3411,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.2615,
                y: -2.6014,
                z: 1.5181,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.1888,
                y: -3.3353,
                z: -0.7415,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.5931,
                y: -1.6841,
                z: -1.2338,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.3387,
                y: -3.7218,
                z: 0.257,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.255,
                y: -0.7547,
                z: 0.7671,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.7748,
                y: 0.9027,
                z: 0.8348,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.1716,
                y: 2.4619,
                z: -0.2678,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.9432,
                y: 2.753,
                z: -1.7638,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.8196,
                y: 3.17,
                z: -0.5478,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.4517,
                y: 3.3444,
                z: 1.1373,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.3465,
                y: 1.8754,
                z: 2.2905,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.7157,
                y: 0.3935,
                z: 1.6873,
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
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                3,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                1,
                4,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                1,
                5,
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
                2,
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                15,
            ],
            order: BondOrder.Double,
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
                6,
                18,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                7,
                15,
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
                28,
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
                8,
                19,
            ],
            order: BondOrder.Double,
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
                9,
                30,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                31,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                32,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                19,
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
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                20,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                21,
            ],
            order: BondOrder.Single,
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
                13,
                23,
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
                14,
                25,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                17,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                17,
                26,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default famotidine;
