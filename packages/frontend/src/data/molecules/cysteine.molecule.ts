import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';
import taurine from './taurine.molecule.js';

/** 3D coordinates from PubChem CID 5862. */
const cysteine: Molecule = {
    name: 'Cysteine',
    routeName: 'cysteine',
    // cspell:disable-next-line
    pronunciation: 'sˈɪstin',
    structureDescription: 'An amino acid with a sulfur-hydrogen group on its side chain.',
    realLifeDescription:
        'Two cysteines can link through their sulfurs, which is what holds the curls in hair. Onions and garlic build their sharp-smelling molecules from it.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 240,
        waterSolubilityGramsPerLiter: 277,
        logP: -2.49,
        oralRatLethalDoseMilligramsPerKilogram: 1890,
        hazardPictograms: [GhsPictogram.Irritant],
        yearDiscovered: 1884,
        smell: 'sulfurous',
        habitat: 'Proteins of all organisms, keratin, many plants',
        evolvesInto: [taurine],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: 0.0365,
                y: 2.4103,
                z: -0.6448,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.0225,
                y: -0.7063,
                z: -0.6442,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.3568,
                y: -0.3011,
                z: 1.4862,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.1313,
                y: -1.3849,
                z: 0.3459,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.3234,
                y: -0.3207,
                z: -0.2531,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.9451,
                y: 1.0435,
                z: 0.052,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.0833,
                y: -0.4481,
                z: 0.3007,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.2956,
                y: -0.4794,
                z: -1.3382,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.9546,
                y: 1.1062,
                z: -0.3687,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.0221,
                y: 1.2104,
                z: 1.1323,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.7721,
                y: -2.2928,
                z: 0.0524,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.0856,
                y: -1.3301,
                z: -0.0084,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.1084,
                y: 2.2596,
                z: 0.1467,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.9224,
                y: -0.7667,
                z: -0.2587,
            },
        },
    ],
    bonds: [
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
                12,
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
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                6,
            ],
            order: BondOrder.Double,
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
                10,
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
                5,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                6,
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
    ],
};

export default cysteine;
