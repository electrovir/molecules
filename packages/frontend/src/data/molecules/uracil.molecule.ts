import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 1174. */
const uracil: Molecule = {
    name: 'Uracil',
    structureDescription: 'A single ring of carbon and nitrogen.',
    realLifeDescription: 'It takes the place of thymine in RNA, where it pairs with adenine.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 335,
        densityGramsPerCubicCentimeter: 1.32,
        waterSolubilityGramsPerLiter: 3.6,
        logP: -1.07,
        yearDiscovered: 1900,
        habitat: 'RNA of all living cells, yeast, wheat germ, meteorites',
        evolvesInto: ['thymine'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.506,
                y: 0.9032,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.0491,
                y: 1.6983,
                z: 0.0006,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0.2359,
                y: 1.3256,
                z: -0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 1.0411,
                y: -0.873,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.3497,
                y: 0.4801,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.0942,
                y: 0.927,
                z: -0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.2416,
                y: -1.3478,
                z: 0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.3044,
                y: -0.54,
                z: -0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.4179,
                y: 2.3252,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.7977,
                y: -1.5505,
                z: 0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.3177,
                y: -0.9219,
                z: -0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.3413,
                y: -2.4263,
                z: 0.0002,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                4,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                1,
                5,
            ],
            order: BondOrder.Double,
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
                8,
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
                6,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                9,
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
                6,
                7,
            ],
            order: BondOrder.Double,
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
                7,
                10,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default uracil;
