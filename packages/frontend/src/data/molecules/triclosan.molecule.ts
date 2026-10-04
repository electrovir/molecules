// cspell:words triclosan
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 5564. */
const triclosan: Molecule = {
    name: 'Triclosan',
    // cspell:disable-next-line
    pronunciation: 'tɹˈIklˌʌsˌæn',
    structureDescription:
        'Two benzene rings linked by an oxygen, carrying three chlorine atoms and an OH group.',
    realLifeDescription:
        'It was the germ killer in antibacterial soap until it was banned from soaps in 2016.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 56,
        densityGramsPerCubicCentimeter: 1.49,
        waterSolubilityGramsPerLiter: 0.01,
        logP: 4.76,
        oralRatLethalDoseMilligramsPerKilogram: 3700,
        hazardPictograms: [GhsPictogram.EnvironmentalHazard],
        yearDiscovered: 1964,
        smell: 'faintly aromatic',
        habitat: 'Labs, factories, polluted water, animals',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: -1.9929,
                y: 2.6476,
                z: 1.055,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: 4.9959,
                y: -1.2993,
                z: 1.2086,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: -4.975,
                y: -1.7896,
                z: 0.3951,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.0044,
                y: 1.1637,
                z: -0.6411,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.9872,
                y: 0.5101,
                z: -2.4666,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.1584,
                y: 0.5912,
                z: -0.2218,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.1835,
                y: 0.4855,
                z: -0.3842,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.1581,
                y: 0.2636,
                z: -1.1379,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.3454,
                y: 0.3342,
                z: 1.1363,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.1753,
                y: 1.0681,
                z: 0.386,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.3345,
                y: -0.7824,
                z: -0.9203,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.3449,
                y: -0.321,
                z: -0.6957,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.5321,
                y: -0.2503,
                z: 1.5784,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.3536,
                y: 0.3617,
                z: 0.6281,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.5127,
                y: -1.4885,
                z: -0.6782,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.532,
                y: -0.578,
                z: 0.6625,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.5223,
                y: -0.9166,
                z: 0.0959,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.5831,
                y: 0.5915,
                z: 1.8665,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.5637,
                y: -1.2373,
                z: -1.5351,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.1242,
                y: -0.5762,
                z: -1.4104,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.665,
                y: -0.4429,
                z: 2.64,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.1418,
                y: 0.8067,
                z: 1.2319,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.6314,
                y: -2.4828,
                z: -1.1012,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.7799,
                y: 0.2175,
                z: -2.9482,
            },
        },
    ],
    bonds: [
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
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                16,
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
                4,
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                7,
            ],
            order: BondOrder.Double,
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
                6,
                9,
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
            order: BondOrder.Double,
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
                9,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                14,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                10,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                15,
            ],
            order: BondOrder.Double,
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
                15,
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
        {
            atomIndexes: [
                13,
                16,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                13,
                21,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                22,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default triclosan;
