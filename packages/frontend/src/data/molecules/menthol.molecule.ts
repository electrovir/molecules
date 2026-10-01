// cspell:words cornmint
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 1254. */
const menthol: Molecule = {
    name: 'Menthol',
    structureDescription: 'A ring of six carbons with an oxygen-hydrogen group and two branches.',
    realLifeDescription:
        'It tricks cold-sensing nerves, which is why mint feels cool. It comes from peppermint and other mint plants.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 38,
        boilingPointCelsius: 214.6,
        densityGramsPerCubicCentimeter: 0.901,
        waterSolubilityGramsPerLiter: 0.42,
        logP: 3.2,
        oralRatLethalDoseMilligramsPerKilogram: 3040,
        hazardPictograms: [GhsPictogram.Irritant],
        yearDiscovered: 1771,
        smell: 'peppermint, cooling',
        taste: 'peppermint, cooling',
        habitat: 'Peppermint oil, cornmint oil',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.2984,
                y: 2.5377,
                z: 0.5771,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.6847,
                y: 0.1532,
                z: 0.4677,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.1286,
                y: 1.3418,
                z: -0.0706,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.1622,
                y: -1.1702,
                z: -0.1063,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.1427,
                y: -0.1657,
                z: -0.4034,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.6277,
                y: 1.1558,
                z: 0.1751,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.3336,
                y: -1.3473,
                z: 0.1446,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.1763,
                y: 0.3127,
                z: 0.1611,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.6296,
                y: -0.344,
                z: -0.1025,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.977,
                y: -0.8133,
                z: 0.8081,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.4104,
                y: 0.3448,
                z: -1.3463,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.5688,
                y: 0.1289,
                z: 1.561,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.0083,
                y: 1.4824,
                z: -1.1458,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.6741,
                y: -2.0274,
                z: 0.3424,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.3128,
                y: -1.2319,
                z: -1.1885,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.0206,
                y: -0.1375,
                z: -1.4944,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.1739,
                y: 2.002,
                z: -0.2612,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.8315,
                y: 1.2022,
                z: 1.2537,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.6713,
                y: -2.2799,
                z: -0.3233,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.5087,
                y: -1.4527,
                z: 1.2231,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.5333,
                y: 1.2584,
                z: 0.5877,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.212,
                y: 0.4842,
                z: -0.52,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.006,
                y: -1.2735,
                z: -0.5427,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.8169,
                y: -0.3798,
                z: 0.976,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.8334,
                y: -1.7767,
                z: 0.3093,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.0483,
                y: -0.588,
                z: 0.7516,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.7234,
                y: -0.9264,
                z: 1.8674,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.1581,
                y: -0.5918,
                z: -1.8501,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.4799,
                y: 0.5033,
                z: -1.5352,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.8996,
                y: 1.1689,
                z: -1.8484,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.1542,
                y: 2.4299,
                z: 1.5328,
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
                30,
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
                11,
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
                12,
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
                3,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                5,
            ],
            order: BondOrder.Single,
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
                8,
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
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                10,
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
                8,
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
                9,
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
                10,
                28,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                29,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default menthol;
