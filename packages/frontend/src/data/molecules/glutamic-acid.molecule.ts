// cspell:words gaba glutamic umami
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 33032. */
const glutamicAcid: Molecule = {
    name: 'Glutamic Acid',
    structureDescription: 'An amino acid with a second acid group on a longer side chain.',
    realLifeDescription:
        'It is responsible for the savory taste called umami, and its salt is MSG. Tomatoes, parmesan cheese and seaweed are naturally full of it.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 213,
        densityGramsPerCubicCentimeter: 1.54,
        waterSolubilityGramsPerLiter: 8.57,
        logP: -3.69,
        yearDiscovered: 1866,
        taste: 'umami, sour',
        habitat: 'Protein-rich foods, plants, animals, soil microbes, brain neurons',
        evolvesInto: ['gaba'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.5995,
                y: 1.9892,
                z: -0.639,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -3.3954,
                y: 0.3881,
                z: 0.8635,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.231,
                y: 1.1742,
                z: 1.3801,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.8848,
                y: -0.3265,
                z: -1.2321,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 1.7252,
                y: -1.3936,
                z: 0.6669,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.0926,
                y: -0.4096,
                z: -0.721,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.3908,
                y: -0.3666,
                z: -0.3175,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.1014,
                y: -0.05,
                z: 0.3732,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.79,
                y: 0.9823,
                z: 0.2542,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.5324,
                y: -0.0147,
                z: -0.1018,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.3299,
                y: -1.4083,
                z: -1.1121,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.2419,
                y: 0.2764,
                z: -1.566,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.0102,
                y: -0.5424,
                z: -1.2051,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.0393,
                y: -0.7804,
                z: 1.1873,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.8724,
                y: 0.9428,
                z: 0.776,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.7334,
                y: -1.4102,
                z: 0.8169,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.4771,
                y: -2.3119,
                z: 0.3005,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.8554,
                y: 2.8602,
                z: -0.2675,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.3227,
                y: 0.4009,
                z: 0.5436,
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
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                8,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                3,
                9,
            ],
            order: BondOrder.Double,
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
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                16,
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
                5,
                11,
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
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                14,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default glutamicAcid;
