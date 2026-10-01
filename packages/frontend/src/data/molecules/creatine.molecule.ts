import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 586. */
const creatine: Molecule = {
    name: 'Creatine',
    structureDescription:
        'A small molecule with a carbon bonded to three nitrogens, linked to an acid group.',
    realLifeDescription:
        'Muscles use it to store quick energy, and athletes take it as a supplement. Your body makes about a gram of it every day, mostly in the liver and kidneys.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 255,
        densityGramsPerCubicCentimeter: 1.33,
        waterSolubilityGramsPerLiter: 13.3,
        logP: -0.2,
        yearDiscovered: 1832,
        habitat: 'Skeletal muscle, heart muscle, liver, kidneys, pancreas',
        evolvesInto: ['creatinine'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.9551,
                y: -0.4391,
                z: -0.297,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.4662,
                y: 0.0437,
                z: 1.3508,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -0.5505,
                y: 0.5168,
                z: -0.3703,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -2.6825,
                y: 0.0107,
                z: 0.5093,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.3674,
                y: -1.7387,
                z: -0.2336,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.7512,
                y: 0.1847,
                z: -0.9467,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.7951,
                y: 1.9372,
                z: -0.1268,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.5112,
                y: -0.4512,
                z: -0.0468,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.7341,
                y: -0.0641,
                z: 0.1611,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.123,
                y: 0.9982,
                z: -1.5789,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.6771,
                y: -0.7169,
                z: -1.564,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.0646,
                y: 2.555,
                z: -0.4092,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.9812,
                y: 2.1203,
                z: 0.9368,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.6514,
                y: 2.286,
                z: -0.7133,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.8698,
                y: 0.992,
                z: 0.6751,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.4214,
                y: -0.6339,
                z: 0.7699,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.2162,
                y: -2.2151,
                z: 0.0899,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.5857,
                y: -0.6055,
                z: 0.4359,
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
                17,
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
                2,
                7,
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
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                7,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                4,
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                8,
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
                6,
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
    ],
};

export default creatine;
