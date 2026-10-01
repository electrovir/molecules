// cspell:words geosmin
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 29746. */
const geosmin: Molecule = {
    name: 'Geosmin',
    structureDescription: 'Two fused rings of carbon with an OH group and two methyl groups.',
    realLifeDescription:
        'Soil bacteria make it, and it is the earthy smell of rain on dry ground. Human noses are extremely sensitive to it, and it is why beets taste earthy.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 80,
        boilingPointCelsius: 270.5,
        hazardPictograms: [GhsPictogram.Irritant],
        yearDiscovered: 1965,
        smell: 'earthy, musty',
        taste: 'earthy',
        habitat: 'Soil bacteria, beets, rain on dry ground',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.1598,
                y: -0.7644,
                z: -1.4874,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.3828,
                y: 0.9252,
                z: 0.1579,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.0566,
                y: -0.5602,
                z: -0.065,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.4485,
                y: -0.8358,
                z: 0.5857,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.6347,
                y: 1.8919,
                z: -0.5178,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.7815,
                y: 1.1582,
                z: -0.4809,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.0197,
                y: -1.5452,
                z: 0.4497,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.441,
                y: 0.3399,
                z: 0.4164,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.0516,
                y: 1.3299,
                z: -0.6717,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.8408,
                y: 0.1733,
                z: 0.0136,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.3983,
                y: -1.2744,
                z: -0.158,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.4781,
                y: 1.2944,
                z: 1.6626,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.1088,
                y: -2.1329,
                z: 0.0949,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.2994,
                y: -0.9631,
                z: 1.6671,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.6853,
                y: 2.8313,
                z: 0.0482,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.2893,
                y: 2.1809,
                z: -1.5189,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.7136,
                y: 1.0675,
                z: -1.5731,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.1228,
                y: 2.1823,
                z: -0.2829,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.0882,
                y: -1.5064,
                z: 1.5427,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.7507,
                y: -2.5759,
                z: 0.1908,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.4558,
                y: -0.0278,
                z: 0.22,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.5151,
                y: 0.8821,
                z: 1.3672,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.768,
                y: 2.1601,
                z: -0.6903,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.1438,
                y: 0.8389,
                z: -1.6485,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.7732,
                y: 0.3359,
                z: -0.5397,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.0726,
                y: 0.3652,
                z: 1.0672,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.1373,
                y: -1.9403,
                z: 0.3026,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.3813,
                y: -1.5217,
                z: -1.2267,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.4946,
                y: 1.2816,
                z: 2.1599,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.8811,
                y: 2.3068,
                z: 1.7872,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.1318,
                y: 0.6196,
                z: 2.2215,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.0238,
                y: -2.3337,
                z: 0.6637,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.4518,
                y: -2.9966,
                z: 0.2292,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.3859,
                y: -2.0703,
                z: -0.9625,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.2456,
                y: -1.7174,
                z: -1.657,
            },
        },
    ],
    bonds: [
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
                34,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                2,
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
                5,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                3,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                6,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                7,
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
                13,
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
                4,
                14,
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
                5,
                9,
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
                17,
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
                8,
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
                22,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                23,
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
                24,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                25,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                26,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                27,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                28,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                29,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                30,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                31,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                32,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                33,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default geosmin;
