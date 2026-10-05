import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 6137. */
const methionine: Molecule = {
    name: 'Methionine',
    routeName: 'methionine',
    // cspell:disable-next-line
    pronunciation: 'məθˈIʌnˌɪn',
    structureDescription: 'An amino acid with a side chain holding a sulfur atom.',
    realLifeDescription:
        'It is the first amino acid in almost every protein your cells make. Your body cannot make it, so you must get it from foods like eggs, fish, and nuts.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 283,
        densityGramsPerCubicCentimeter: 1.34,
        waterSolubilityGramsPerLiter: 56.6,
        logP: -1.87,
        oralRatLethalDoseMilligramsPerKilogram: 36_000,
        yearDiscovered: 1921,
        smell: 'faint',
        taste: 'sulfurous',
        habitat: 'Protein in all living things, eggs, nuts, cheese, meat',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: 2.2858,
                y: 0.9701,
                z: 0.2797,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.1607,
                y: 1.6402,
                z: 0.6921,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.5905,
                y: 0.3693,
                z: -0.524,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.3628,
                y: -1.8775,
                z: 0.4986,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.4156,
                y: -0.8111,
                z: -0.8013,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.5662,
                y: -0.6533,
                z: 0.3686,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.2656,
                y: 0.4223,
                z: -1.1208,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.5486,
                y: 0.4754,
                z: 0.111,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.2617,
                y: -0.5355,
                z: 0.496,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.0596,
                y: -1.6832,
                z: -0.6351,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.154,
                y: -1.0435,
                z: -1.7128,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.0512,
                y: -0.4839,
                z: 1.3194,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.6282,
                y: 1.2591,
                z: -1.4238,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.9239,
                y: 0.209,
                z: -1.97,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.9632,
                y: -1.8082,
                z: 1.3197,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.7442,
                y: -2.6701,
                z: 0.6669,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.6638,
                y: -1.3256,
                z: 0.9562,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.099,
                y: -0.3183,
                z: 1.1653,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.669,
                y: -0.8794,
                z: -0.4583,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.8051,
                y: 2.3619,
                z: 0.5302,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                6,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                8,
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
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                7,
            ],
            order: BondOrder.Double,
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
        {
            atomIndexes: [
                8,
                16,
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
    ],
};

export default methionine;
