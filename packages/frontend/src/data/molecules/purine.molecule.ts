import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 1044. */
const purine: Molecule = {
    name: 'Purine',
    structureDescription:
        'A six-membered ring and a five-membered ring of carbon and nitrogen fused together.',
    realLifeDescription:
        'It is the parent shape of adenine, guanine, caffeine, and uric acid. Its name comes from the Latin for pure uric acid, where chemists first found its shape.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 214,
        waterSolubilityGramsPerLiter: 500,
        logP: -0.37,
        yearDiscovered: 1898,
        habitat: 'Labs',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 1.5118,
                y: -1.1529,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 1.5927,
                y: 1.0746,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -0.81,
                y: 1.4453,
                z: 0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -2.1255,
                y: -0.6093,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.2115,
                y: -0.7347,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.288,
                y: 0.6516,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.0118,
                y: -1.3756,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.3019,
                y: -0.0338,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.9585,
                y: 0.7348,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.835,
                y: -2.1113,
                z: 0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.1359,
                y: -2.4493,
                z: 0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.3807,
                y: -0.0973,
                z: 0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.8723,
                y: 1.3193,
                z: 0,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                4,
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
                0,
                9,
            ],
            order: BondOrder.Single,
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
                7,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                2,
                5,
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
                3,
                6,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                8,
            ],
            order: BondOrder.Double,
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
            order: BondOrder.Double,
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
                7,
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                12,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default purine;
