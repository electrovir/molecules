// cspell:words Pedersen
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 28557. */
const crownEther18: Molecule = {
    name: '18-Crown-6',
    structureDescription: 'A ring of twelve carbons and six oxygens shaped like a crown.',
    realLifeDescription:
        'Its oxygens point inward to grip a potassium ion in the middle. Charles Pedersen shared a Nobel Prize for discovering crown-shaped molecules like this one.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 39,
        densityGramsPerCubicCentimeter: 1.237,
        waterSolubilityGramsPerLiter: 75,
        logP: -0.68,
        dipoleMomentDebye: 2.76,
        hazardPictograms: [GhsPictogram.Irritant],
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.6137,
                y: -2.7674,
                z: -0.2202,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.7045,
                y: -0.8527,
                z: 0.2205,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.0904,
                y: -1.9151,
                z: 0.2208,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.0903,
                y: 1.9155,
                z: -0.2202,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.7045,
                y: 0.8524,
                z: -0.2214,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.6137,
                y: 2.7676,
                z: 0.2205,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.4091,
                y: -3.6154,
                z: 0.3039,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.7387,
                y: -3.1965,
                z: -0.3026,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.6378,
                y: 0.0927,
                z: -0.304,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.3363,
                y: 1.4535,
                z: 0.3032,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.8989,
                y: 3.1038,
                z: -0.3038,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.9269,
                y: 2.1621,
                z: 0.3028,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.7386,
                y: 3.1964,
                z: 0.3043,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.4093,
                y: 3.6158,
                z: -0.3025,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.6383,
                y: -0.0925,
                z: 0.3028,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.927,
                y: -2.1623,
                z: -0.304,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.3364,
                y: -1.4539,
                z: -0.3029,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.8994,
                y: -3.1042,
                z: 0.3027,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.4376,
                y: -3.5126,
                z: 1.3945,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.1897,
                y: -4.6544,
                z: 0.0356,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.5141,
                y: -3.9219,
                z: -0.0338,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.6566,
                y: -3.1293,
                z: -1.3932,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.262,
                y: 1.3771,
                z: 1.3938,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.1262,
                y: 2.163,
                z: 0.0347,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.5143,
                y: 3.9219,
                z: 0.0366,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.656,
                y: 3.1281,
                z: 1.3948,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.8237,
                y: 2.1355,
                z: 1.3934,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.9362,
                y: 2.492,
                z: 0.0345,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.4383,
                y: 3.5139,
                z: -1.3932,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.1899,
                y: 4.6547,
                z: -0.0336,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.8812,
                y: 2.9986,
                z: -1.3943,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.1393,
                y: 4.1381,
                z: -0.0355,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.2622,
                y: -1.3785,
                z: -1.3936,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.1263,
                y: -2.1633,
                z: -0.0338,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.6542,
                y: 0.2163,
                z: 0.0341,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.5388,
                y: -0.1294,
                z: 1.3935,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.6539,
                y: -0.2162,
                z: -0.0365,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.5372,
                y: 0.1303,
                z: -1.3945,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.1393,
                y: -4.1384,
                z: 0.0334,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.8827,
                y: -2.9998,
                z: 1.3934,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.9365,
                y: -2.4921,
                z: -0.0362,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.8232,
                y: -2.1353,
                z: -1.3945,
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
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                8,
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
                7,
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
                9,
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
                4,
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                14,
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
                13,
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
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                20,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                21,
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
                36,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                37,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                22,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                30,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                31,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                26,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                27,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                13,
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
                12,
                25,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                28,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                29,
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
                34,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                35,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                40,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                41,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                32,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                33,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                17,
                38,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                17,
                39,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default crownEther18;
