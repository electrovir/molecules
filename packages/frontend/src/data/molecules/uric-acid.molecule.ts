import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 1175. */
const uricAcid: Molecule = {
    name: 'Uric Acid',
    structureDescription:
        'Two fused rings of carbon and nitrogen with three oxygen atoms attached.',
    realLifeDescription:
        'It is how your body gets rid of old DNA, and crystals of it in the joints cause gout. Birds and reptiles get rid of nitrogen as uric acid, which is the white part of bird droppings.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 300,
        densityGramsPerCubicCentimeter: 1.89,
        waterSolubilityGramsPerLiter: 0.06,
        logP: -2.17,
        yearDiscovered: 1776,
        habitat: 'Human urine, kidney stones',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.7342,
                y: -2.6384,
                z: -0.0006,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 3.679,
                y: 0.3794,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -3.2538,
                y: 1.2735,
                z: 0.0009,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 1.4967,
                y: 1.3382,
                z: -0.0005,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 1.6749,
                y: -0.9098,
                z: 0.0007,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -0.9486,
                y: 1.424,
                z: -0.0006,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -2.012,
                y: -0.6867,
                z: -0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.2471,
                y: 0.7814,
                z: -0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.3595,
                y: -0.5472,
                z: 0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.8164,
                y: -1.4164,
                z: 0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.462,
                y: 0.283,
                z: 0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.1542,
                y: 0.7189,
                z: -0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.6882,
                y: 2.3322,
                z: -0.0011,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.0195,
                y: -1.8617,
                z: 0.001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.956,
                y: 2.439,
                z: -0.0006,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.8728,
                y: -1.227,
                z: -0.0004,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                9,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                1,
                10,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                2,
                11,
            ],
            order: BondOrder.Double,
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
                12,
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
                10,
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
                5,
                7,
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
                5,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                9,
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
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                8,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                8,
                9,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default uricAcid;
