// cspell:words adamantane
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 4101. */
const methenamine: Molecule = {
    name: 'Methenamine',
    // cspell:disable-next-line
    pronunciation: 'mɪθˈɪnəmin',
    structureDescription: 'Six carbons and four nitrogens folded into a cage like adamantane.',
    realLifeDescription: 'It is the solid fuel in camping stove tablets and a urinary antiseptic.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        sublimationPointCelsius: 280,
        densityGramsPerCubicCentimeter: 1.33,
        waterSolubilityGramsPerLiter: 853,
        logP: -2.18,
        hazardPictograms: [
            GhsPictogram.Flammable,
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
        ],
        yearDiscovered: 1859,
        smell: 'odorless to faintly fishy',
        habitat: 'Labs, factories, meteorites',
        evolvesInto: [
            'formaldehyde',
            'ammonia',
        ],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0.7477,
                y: -1.1141,
                z: 0.6817,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -0.8166,
                y: -0.5631,
                z: -1.1318,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0.9809,
                y: 1.0052,
                z: -0.5408,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -0.912,
                y: 0.672,
                z: 0.9908,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.0675,
                y: -1.6411,
                z: -0.4404,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.6916,
                y: -0.1065,
                z: 0.1379,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.1607,
                y: -0.4327,
                z: 1.6365,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.1607,
                y: 0.4327,
                z: -1.6366,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.6916,
                y: 0.1066,
                z: -0.1379,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.0675,
                y: 1.6411,
                z: 0.4405,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.5778,
                y: -2.1664,
                z: -1.1566,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.7657,
                y: -2.4028,
                z: -0.0695,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.3211,
                y: 0.29,
                z: 0.9455,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.3888,
                y: -0.5866,
                z: -0.5613,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.8617,
                y: -1.1589,
                z: 2.0686,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.4142,
                y: -0.0458,
                z: 2.4882,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.8128,
                y: -0.0315,
                z: -2.3882,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.3653,
                y: 1.2361,
                z: -2.1687,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.2722,
                y: 0.9004,
                z: -0.6259,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.4377,
                y: -0.6038,
                z: 0.2418,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.6492,
                y: 2.089,
                z: 1.2569,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.4613,
                y: 2.4802,
                z: -0.0304,
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
                5,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                6,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                4,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                7,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                8,
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
                7,
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
                12,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                14,
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
                16,
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
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
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
                9,
                21,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default methenamine;
