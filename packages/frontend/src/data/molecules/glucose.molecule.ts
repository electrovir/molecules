import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

const glucose: Molecule = {
    name: 'Glucose',
    structureDescription:
        'A ring of five carbons and one oxygen, with hydroxyl groups sticking out around it.',
    realLifeDescription:
        'It is the sugar your body burns for energy and the one plants make from sunlight. Plants link thousands of glucose molecules together to make starch and cellulose.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 146,
        densityGramsPerCubicCentimeter: 1.54,
        waterSolubilityGramsPerLiter: 909,
        logP: -3,
        oralRatLethalDoseMilligramsPerKilogram: 25_800,
        yearDiscovered: 1747,
        taste: 'sweet',
        habitat: 'Fruits, plants, human blood',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.3727,
                y: -1.247,
                z: 0.23,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.0856,
                y: -1.0709,
                z: -0.194,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.2211,
                y: -0.0621,
                z: -0.2375,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.6082,
                y: 0.3151,
                z: 0.1839,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.6388,
                y: 1.4132,
                z: -0.2534,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.655,
                y: -0.1577,
                z: 0.274,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.4248,
                y: -1.3522,
                z: 1.3206,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.2066,
                y: -1.2487,
                z: -1.2697,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.2548,
                y: -0.0098,
                z: -1.3343,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.7952,
                y: 0.3598,
                z: 1.2636,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.5967,
                y: 1.5141,
                z: -1.344,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.6916,
                y: -0.1535,
                z: 1.3685,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.1564,
                y: -1.0581,
                z: -0.0922,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.8514,
                y: -2.3615,
                z: -1.3066,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.4973,
                y: -2.9356,
                z: 0.22,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.7165,
                y: 0.4989,
                z: -1.4227,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.4876,
                y: 2.5033,
                z: 1.1448,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.9192,
                y: 1.7652,
                z: 0.144,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.6679,
                y: 1.1587,
                z: 0.257,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.887,
                y: -2.4483,
                z: -0.3388,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.8623,
                y: -2.0693,
                z: 0.4696,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.8609,
                y: 0.5414,
                z: -0.4619,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.1222,
                y: 2.6552,
                z: 0.2574,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -3.3742,
                y: 0.9717,
                z: -0.1865,
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
                6,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                3,
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
                20,
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
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                18,
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
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                21,
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
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                22,
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
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                20,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                21,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                22,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                17,
                23,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default glucose;
