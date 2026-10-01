import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 3672. */
const ibuprofen: Molecule = {
    name: 'Ibuprofen',
    description:
        'A benzene ring with a branched carbon chain on one side and an acid group on the other. It relieves pain by blocking the enzymes that cause inflammation.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 76,
        densityGramsPerCubicCentimeter: 1.03,
        waterSolubilityGramsPerLiter: 0.021,
        logP: 3.97,
        oralRatLethalDoseMilligramsPerKilogram: 636,
        hazardPictograms: [
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
        ],
        yearDiscovered: 1961,
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -4.7528,
                y: -0.8604,
                z: 1.45,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.6315,
                y: -1.6551,
                z: 1.5183,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.4561,
                y: -0.0864,
                z: -0.0205,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.546,
                y: 0.5625,
                z: -1.0817,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.077,
                y: 0.5121,
                z: -0.7389,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.6211,
                y: 0.4201,
                z: -0.1108,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.0729,
                y: 0.3709,
                z: 0.2274,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.256,
                y: 0.5345,
                z: 1.3643,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.184,
                y: -1.5912,
                z: 0.0453,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.3198,
                y: -0.5724,
                z: -1.1526,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.5115,
                y: 1.5516,
                z: -0.0173,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.0379,
                y: -0.6186,
                z: -0.8366,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.8463,
                y: 1.5053,
                z: 0.2988,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -4.0012,
                y: 0.3412,
                z: -1.0039,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.433,
                y: -0.8166,
                z: 1.127,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.4977,
                y: 0.0664,
                z: -0.3289,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.7121,
                y: 0.0883,
                z: -2.0582,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.8447,
                y: 1.6105,
                z: -1.2192,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.3284,
                y: 1.2656,
                z: 0.8118,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.2802,
                y: 0.2946,
                z: 1.798,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.3676,
                y: 1.623,
                z: 1.3262,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.0147,
                y: 0.1527,
                z: 2.057,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.939,
                y: -2.0786,
                z: 0.6727,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.2089,
                y: -1.8251,
                z: 0.4836,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.2418,
                y: -2.0488,
                z: -0.9479,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.7603,
                y: -1.384,
                z: -1.7245,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.1026,
                y: 2.4049,
                z: 0.302,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.6248,
                y: -1.4715,
                z: -1.1671,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.2847,
                y: 2.3239,
                z: 0.8635,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.751,
                y: 1.152,
                z: -1.6969,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.9205,
                y: -0.6063,
                z: -1.5483,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -5.0504,
                y: 0.4643,
                z: -0.7139,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.9635,
                y: -1.6294,
                z: 2.0213,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                32,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                14,
            ],
            order: BondOrder.Double,
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
                7,
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
                15,
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
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                9,
            ],
            order: BondOrder.Double,
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
                6,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                11,
            ],
            order: BondOrder.Double,
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
                6,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                14,
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
                8,
                24,
            ],
            order: BondOrder.Single,
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
                25,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                12,
            ],
            order: BondOrder.Double,
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
                11,
                27,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
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
                13,
                30,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                31,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default ibuprofen;
