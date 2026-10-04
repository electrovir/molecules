import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 10975657. */
const ribose: Molecule = {
    name: 'Ribose',
    // cspell:disable-next-line
    pronunciation: 'ɹˈIbˌOz',
    structureDescription: 'A five-carbon sugar that forms the backbone of RNA.',
    realLifeDescription:
        'A version missing one oxygen forms the backbone of DNA. It is also part of ATP, the molecule that carries energy around your cells.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 95,
        waterSolubilityGramsPerLiter: 100,
        yearDiscovered: 1891,
        habitat: 'RNA in every living cell',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.0874,
                y: -1.6773,
                z: 0.6687,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.356,
                y: 1.149,
                z: -1.3871,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.063,
                y: 1.362,
                z: 0.0732,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.7237,
                y: 0.5755,
                z: -0.0341,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.387,
                y: -1.0436,
                z: -1.2074,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.3566,
                y: 1.1192,
                z: 0.0406,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.9796,
                y: 0.5832,
                z: 0.5621,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.4742,
                y: 0.1928,
                z: 0.5227,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.1871,
                y: -0.8919,
                z: 0.1957,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.1763,
                y: -1.2576,
                z: 0.1519,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.5308,
                y: 2.1487,
                z: 0.372,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.9704,
                y: 0.6744,
                z: 1.6559,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.5532,
                y: 0.2738,
                z: 1.6134,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.0953,
                y: -1.2563,
                z: 0.6892,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.2083,
                y: -1.4179,
                z: -0.9327,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.9464,
                y: -1.9124,
                z: 0.5749,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.401,
                y: 1.6929,
                z: -1.6645,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.8821,
                y: 0.9924,
                z: 0.4445,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.6387,
                y: 0.5452,
                z: -1.0025,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.9114,
                y: -1.852,
                z: -1.3365,
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
                16,
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
                17,
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
                18,
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
                19,
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
                7,
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
                8,
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
                7,
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                12,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                15,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default ribose;
