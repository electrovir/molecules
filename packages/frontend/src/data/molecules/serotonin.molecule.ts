import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 5202. */
const serotonin: Molecule = {
    name: 'Serotonin',
    // cspell:disable-next-line
    pronunciation: 'sˌɛɹətˈOnən',
    structureDescription: 'A double ring with a short chain ending in nitrogen.',
    realLifeDescription:
        'It is a brain signal that affects mood, sleep and appetite, and most of it is actually made in the gut.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 167.7,
        waterSolubilityGramsPerLiter: 25.5,
        logP: 0.21,
        dipoleMomentDebye: 2.98,
        hazardPictograms: [
            GhsPictogram.AcuteToxicity,
            GhsPictogram.HealthHazard,
        ],
        yearDiscovered: 1937,
        habitat: 'Animal guts, animal brains, blood platelets, plants, fungi',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.7861,
                y: 2.8243,
                z: 0.0499,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0.9966,
                y: -2.3576,
                z: -0.0167,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -3.9468,
                y: 0.7764,
                z: -0.231,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.5691,
                y: -0.8425,
                z: 0.4077,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.6677,
                y: -0.1639,
                z: 0.2218,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.8751,
                y: -0.2229,
                z: 0.7096,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.6335,
                y: -1.1373,
                z: -0.0429,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.3347,
                y: -2.1895,
                z: 0.2544,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.6746,
                y: 0.1403,
                z: -0.5553,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.0596,
                y: 1.1891,
                z: 0.2535,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.9769,
                y: -0.8239,
                z: -0.2783,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.3998,
                y: 1.5175,
                z: 0.0199,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.3422,
                y: 0.5249,
                z: -0.2418,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.4709,
                y: -0.9075,
                z: 1.3282,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.7248,
                y: 0.6776,
                z: 1.3191,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.9941,
                y: -3.0443,
                z: 0.3133,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.4475,
                y: -3.248,
                z: -0.1754,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.8698,
                y: -0.7629,
                z: -1.1448,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.0877,
                y: 0.817,
                z: -1.1876,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.3274,
                y: 1.9661,
                z: 0.456,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.7111,
                y: -1.5961,
                z: -0.482,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.38,
                y: 0.7959,
                z: -0.4212,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.415,
                y: 1.0543,
                z: -1.0926,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.7765,
                y: 1.6346,
                z: 0.2919,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.0107,
                y: 3.3783,
                z: 0.2443,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                24,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                6,
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
                16,
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
                2,
                22,
            ],
            order: BondOrder.Single,
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
                7,
            ],
            order: BondOrder.Double,
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
                4,
                9,
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
                13,
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
                10,
            ],
            order: BondOrder.Single,
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
                8,
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
                9,
                11,
            ],
            order: BondOrder.Double,
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
                10,
                12,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                10,
                20,
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
                12,
                21,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default serotonin;
