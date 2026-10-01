// cspell:words psilocybe
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 10624. */
const psilocybin: Molecule = {
    name: 'Psilocybin',
    description:
        'An indole ring with a phosphate group on one side and a chain ending in a nitrogen on the other. It is the compound in magic mushrooms.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 220,
        oralRatLethalDoseMilligramsPerKilogram: 280,
        hazardPictograms: [
            GhsPictogram.AcuteToxicity,
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
        ],
        yearDiscovered: 1958,
        taste: 'slightly ammonia-like',
        habitat: 'Certain mushrooms, such as Psilocybe species',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.P,
            position: {
                x: -0.4461,
                y: -2.8951,
                z: -0.0303,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.2142,
                y: -1.3055,
                z: -0.1865,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.4368,
                y: -3.2739,
                z: -1.2515,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.9728,
                y: -3.5053,
                z: -0.5128,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.8869,
                y: -3.3506,
                z: 1.3304,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.3905,
                y: 3.1986,
                z: -0.1447,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 3.8261,
                y: 0.5653,
                z: 0.0799,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.267,
                y: 1.7647,
                z: -0.4968,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.602,
                y: 1.2191,
                z: -0.8151,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.8956,
                y: 1.0232,
                z: -0.1452,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.5045,
                y: 1.0784,
                z: 0.4243,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.9209,
                y: 1.9465,
                z: 0.0706,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.0687,
                y: 3.099,
                z: -0.4876,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.1748,
                y: -0.3491,
                z: 0.0108,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.2166,
                y: 1.5646,
                z: 0.436,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.4664,
                y: -0.7457,
                z: 0.3762,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.47,
                y: 0.198,
                z: 0.585,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.7226,
                y: -0.7738,
                z: -0.5017,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 4.6926,
                y: 0.5417,
                z: 1.2592,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.4647,
                y: 0.2619,
                z: -1.3273,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.0962,
                y: 1.8766,
                z: -1.5437,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.0143,
                y: 0.4388,
                z: 1.1712,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.6087,
                y: 2.0704,
                z: 0.8843,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.5125,
                y: 3.9872,
                z: -0.693,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.9032,
                y: 4.0655,
                z: -0.0609,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.9987,
                y: 2.2986,
                z: 0.5985,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.7409,
                y: -1.7868,
                z: 0.5058,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.4669,
                y: -0.1315,
                z: 0.8671,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.2851,
                y: -0.7518,
                z: -1.504,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.1445,
                y: -1.4596,
                z: 0.1283,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.7205,
                y: -1.2083,
                z: -0.6375,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.7006,
                y: 0.2064,
                z: 0.9905,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.3059,
                y: -0.1197,
                z: 2.0432,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.8006,
                y: 1.5482,
                z: 1.6786,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.7643,
                y: -4.1953,
                z: -1.3283,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.132,
                y: -4.4684,
                z: -0.4166,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                1,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                2,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                3,
            ],
            order: BondOrder.Single,
        },
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
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                34,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                35,
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
                12,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                24,
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
                6,
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                18,
            ],
            order: BondOrder.Single,
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
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                8,
                10,
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
                8,
                20,
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
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                21,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                22,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                15,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                14,
                16,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                14,
                25,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                26,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                27,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                17,
                28,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                17,
                29,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                17,
                30,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                18,
                31,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                18,
                32,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                18,
                33,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default psilocybin;
