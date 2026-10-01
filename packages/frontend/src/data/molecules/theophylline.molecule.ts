import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 2153. */
const theophylline: Molecule = {
    name: 'Theophylline',
    structureDescription:
        'Two fused rings of carbon and nitrogen trimmed with oxygen atoms and two methyl groups, one methyl short of caffeine.',
    realLifeDescription: 'It is found in tea and opens airways in asthma medicine.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 273,
        waterSolubilityGramsPerLiter: 7.36,
        logP: -0.02,
        hazardPictograms: [
            GhsPictogram.AcuteToxicity,
            GhsPictogram.HealthHazard,
        ],
        yearDiscovered: 1888,
        taste: 'bitter',
        habitat: 'Cocoa beans, tea, coffee, kola nuts',
        evolvesInto: ['caffeine'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.4586,
                y: 2.7181,
                z: 0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.4695,
                y: -1.5249,
                z: -0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -0.1456,
                y: -1.409,
                z: 0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.4928,
                y: 0.6039,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 2.1381,
                y: 1.247,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 2.2775,
                y: -0.978,
                z: 0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.9676,
                y: -0.5796,
                z: -0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.8536,
                y: 0.7838,
                z: -0.0007,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.385,
                y: 1.4926,
                z: -0.0005,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.4424,
                y: -0.837,
                z: -0.0004,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.0267,
                y: -2.8565,
                z: 0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.8288,
                y: 1.1905,
                z: 0.0009,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.9591,
                y: 0.1491,
                z: 0.0005,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.4315,
                y: 2.215,
                z: 0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.5848,
                y: -3.1483,
                z: -0.8947,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.9352,
                y: -3.3753,
                z: 0.0006,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.5853,
                y: -3.1481,
                z: 0.895,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.8044,
                y: 2.2826,
                z: 0.0009,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.3655,
                y: 0.841,
                z: 0.8886,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.3668,
                y: 0.841,
                z: -0.8862,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.0359,
                y: 0.2409,
                z: 0.001,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                8,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                1,
                9,
            ],
            order: BondOrder.Double,
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
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                8,
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
                3,
                11,
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
                5,
                6,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                12,
            ],
            order: BondOrder.Double,
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
                7,
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                16,
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
                11,
                18,
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
                12,
                20,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default theophylline;
