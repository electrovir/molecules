import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 2723872. */
const fructose: Molecule = {
    name: 'Fructose',
    structureDescription: 'A sugar with the same atoms as glucose arranged differently.',
    realLifeDescription:
        'It is the sweetest natural sugar and is found in fruit and honey. Linked with glucose, it makes table sugar.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 103,
        densityGramsPerCubicCentimeter: 1.694,
        waterSolubilityGramsPerLiter: 4000,
        yearDiscovered: 1847,
        taste: 'sweet',
        habitat: 'Honey, fruits, berries, flowers, root vegetables',
        evolvesInto: ['glucose'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.4957,
                y: 1.278,
                z: -0.4643,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.4138,
                y: -2.197,
                z: 0.7336,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.2974,
                y: 0.3098,
                z: 1.5408,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.3997,
                y: -1.5687,
                z: 0.397,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.1447,
                y: 0.5275,
                z: -1.3638,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 3.2042,
                y: 0.7664,
                z: -0.437,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.0545,
                y: -1.0386,
                z: 0.0475,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.9932,
                y: 0.0861,
                z: 0.1603,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.3938,
                y: -0.5888,
                z: 0.6387,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.8343,
                y: 0.7356,
                z: 0.0162,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.7194,
                y: 1.7706,
                z: 0.1101,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.2849,
                y: -0.3014,
                z: -0.5624,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.2061,
                y: -1.3189,
                z: -1.003,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.3092,
                y: -0.4863,
                z: 1.7267,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.7447,
                y: 1.109,
                z: 0.4977,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.9914,
                y: 2.6679,
                z: -0.4556,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.5378,
                y: 2.0702,
                z: 1.1481,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.116,
                y: -0.4815,
                z: -1.6289,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.7557,
                y: -1.1824,
                z: -0.1173,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.1225,
                y: -2.5934,
                z: 0.1998,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.1871,
                y: 0.6975,
                z: 1.5944,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.382,
                y: -1.7963,
                z: -0.5478,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.9458,
                y: -0.0218,
                z: -1.4031,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.7928,
                y: 1.5565,
                z: -0.8273,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                7,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                10,
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
                19,
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
                20,
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
                21,
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
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                7,
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
                12,
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
                9,
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
                10,
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
    ],
};

export default fructose;
