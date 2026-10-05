// cspell:words ninhydrin
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 10236. */
const ninhydrin: Molecule = {
    name: 'Ninhydrin',
    routeName: 'ninhydrin',
    // cspell:disable-next-line
    pronunciation: 'nˌɪnhˈIdɹɪn',
    structureDescription:
        'A benzene ring fused to a five-membered ring with two ketones and two OH groups.',
    realLifeDescription:
        'Police spray it on paper to turn hidden fingerprints purple. It reacts with amino acids left behind in the oils from your fingers.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 250,
        densityGramsPerCubicCentimeter: 0.862,
        waterSolubilityGramsPerLiter: 20,
        logP: 0.67,
        yearDiscovered: 1910,
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.5241,
                y: 0.0555,
                z: -1.1664,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.5256,
                y: -0.0551,
                z: 1.1652,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.1023,
                y: -2.373,
                z: -0.0137,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.1021,
                y: 2.3729,
                z: 0.0139,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.7435,
                y: 0,
                z: -0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.5809,
                y: -0.6956,
                z: -0.0042,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.581,
                y: 0.6954,
                z: 0.0058,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.7943,
                y: -1.1959,
                z: -0.0086,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.7943,
                y: 1.1958,
                z: 0.0089,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.7563,
                y: -1.4215,
                z: -0.0098,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.7564,
                y: 1.4214,
                z: 0.0103,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.9558,
                y: -0.7041,
                z: -0.0055,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.9559,
                y: 0.7041,
                z: 0.0044,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.7595,
                y: -2.5055,
                z: -0.0178,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.7596,
                y: 2.5054,
                z: 0.0177,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.9023,
                y: -1.2383,
                z: -0.0098,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.9025,
                y: 1.2383,
                z: 0.0074,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.6204,
                y: -0.8459,
                z: -1.5168,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.7158,
                y: -0.9866,
                z: 1.3674,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                4,
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
                4,
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
                7,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                3,
                8,
            ],
            order: BondOrder.Double,
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
                8,
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
                9,
            ],
            order: BondOrder.Double,
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
                10,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                9,
                11,
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
                12,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                12,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                11,
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                16,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default ninhydrin;
