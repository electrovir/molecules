import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 6134. */
const lactose: Molecule = {
    name: 'Lactose',
    structureDescription: 'A galactose ring and a glucose ring joined through an oxygen bridge.',
    realLifeDescription:
        'It is the sugar in milk, and people without enough of the enzyme lactase cannot digest it. It is less sweet than table sugar.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 252,
        densityGramsPerCubicCentimeter: 1.525,
        waterSolubilityGramsPerLiter: 195,
        yearDiscovered: 1633,
        taste: 'mildly sweet',
        habitat: 'Milk of most mammals',
        evolvesInto: ['glucose'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.0229,
                y: -0.815,
                z: -0.7674,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.3923,
                y: 0.7383,
                z: 0.249,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -3.3886,
                y: -0.7489,
                z: 0.6753,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.7998,
                y: 1.9588,
                z: -1.0079,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.1004,
                y: -2.7017,
                z: -0.7891,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 4.7194,
                y: -1.4747,
                z: -0.8285,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 3.9522,
                y: 1.1954,
                z: -0.933,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -3.6986,
                y: 2.1805,
                z: -1.4862,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -5.1972,
                y: 0.6998,
                z: 0.4031,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.728,
                y: -3.3492,
                z: 1.2737,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.4497,
                y: 2.8796,
                z: 1.967,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.1602,
                y: -0.2387,
                z: -0.1307,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.7265,
                y: 0.8718,
                z: -1.0158,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.1533,
                y: -0.6504,
                z: 0.0241,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.2088,
                y: -1.3265,
                z: 0.1134,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.3201,
                y: -1.2924,
                z: -0.7297,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.6427,
                y: -1.0193,
                z: -0.0138,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.8055,
                y: 0.4704,
                z: 0.2897,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.0818,
                y: 1.3546,
                z: -0.4988,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.5673,
                y: 0.9868,
                z: 1.0309,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -4.0156,
                y: 0.1803,
                z: -0.2057,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.7064,
                y: -2.3865,
                z: 1.0886,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.6314,
                y: 2.4872,
                z: 1.2919,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.8997,
                y: 0.2071,
                z: 0.841,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.8089,
                y: 0.5401,
                z: -2.0582,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.9984,
                y: -1.1605,
                z: 0.9843,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.4783,
                y: -1.8288,
                z: -0.8257,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.3638,
                y: -0.9369,
                z: -1.7663,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.6852,
                y: -1.5921,
                z: 0.9211,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.7178,
                y: 0.6405,
                z: 0.8712,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.4478,
                y: 0.4668,
                z: 1.9905,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.9417,
                y: 1.9739,
                z: 0.3959,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.3179,
                y: -0.3225,
                z: -1.1332,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.472,
                y: -1.9544,
                z: 2.0671,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.8203,
                y: -2.9015,
                z: 0.7073,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.682,
                y: 3.0637,
                z: 0.3627,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.4927,
                y: 2.7455,
                z: 1.9149,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.0455,
                y: 1.6245,
                z: -1.3535,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.2402,
                y: -2.844,
                z: -1.2201,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.5671,
                y: -2.4175,
                z: -1.0125,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.099,
                y: 1.185,
                z: -1.3985,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.5603,
                y: 2.4617,
                z: -1.1337,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -5.9095,
                y: 0.0597,
                z: 0.2348,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.5127,
                y: -2.8843,
                z: 1.6112,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.6947,
                y: 2.6344,
                z: 1.4049,
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
                13,
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
                1,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                20,
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
                3,
                37,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                38,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                39,
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
                40,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                41,
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
                8,
                42,
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
        {
            atomIndexes: [
                9,
                43,
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
                10,
                44,
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
                11,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                24,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                25,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                21,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                26,
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
                27,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                28,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                17,
                19,
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
                18,
                20,
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
                19,
                22,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                19,
                30,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                20,
                32,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                21,
                33,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                21,
                34,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                22,
                35,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                22,
                36,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default lactose;
