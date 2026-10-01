// cspell:words sucralose
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 5988. */
const sucrose: Molecule = {
    name: 'Sucrose',
    description:
        'A glucose and a fructose joined together. It is ordinary table sugar, made from sugarcane and sugar beets.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 186,
        densityGramsPerCubicCentimeter: 1.59,
        waterSolubilityGramsPerLiter: 2010,
        logP: -3.7,
        oralRatLethalDoseMilligramsPerKilogram: 29_700,
        hazardPictograms: [],
        smell: 'odorless',
        taste: 'sweet',
        habitat: 'Sugarcane, sugar beets, fruits, nectar, honey, and maple sap',
        evolvesInto: [
            'glucose',
            'fructose',
            'sucralose',
        ],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.5022,
                y: 0.0943,
                z: -0.9911,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.7011,
                y: -0.617,
                z: 1.0981,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.8588,
                y: 0.4043,
                z: -0.3198,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -3.1624,
                y: -1.6445,
                z: 1.6958,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -4.7371,
                y: 0.674,
                z: 0.3864,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.0123,
                y: 1.0322,
                z: 2.5058,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 3.5317,
                y: -1.3244,
                z: 1.3669,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.977,
                y: 2.2093,
                z: 0.7501,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.8711,
                y: -2.5588,
                z: -1.7519,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.4739,
                y: 2.7767,
                z: -1.8206,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 3.8799,
                y: -0.4306,
                z: -2.2034,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.5351,
                y: -0.959,
                z: -0.0101,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.9902,
                y: -1.0104,
                z: 0.4441,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.3409,
                y: 0.4618,
                z: 0.4826,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.6255,
                y: 0.9698,
                z: -0.764,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.6719,
                y: -0.5579,
                z: 0.7161,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.5011,
                y: -0.1882,
                z: 1.9477,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.9815,
                y: -0.0305,
                z: 1.5933,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.1816,
                y: 0.8498,
                z: 0.3528,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.2061,
                y: 0.5286,
                z: -0.7927,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.0597,
                y: -2.2649,
                z: -0.6275,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.1313,
                y: 2.3991,
                z: -0.6222,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.6137,
                y: -0.6862,
                z: -1.6239,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.6347,
                y: -1.5195,
                z: -0.2832,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.9813,
                y: 0.9296,
                z: 1.4066,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.2646,
                y: 0.8944,
                z: -1.6527,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.024,
                y: -1.5454,
                z: 0.4114,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.3738,
                y: -0.961,
                z: 2.7155,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.5071,
                y: 0.414,
                z: 2.4474,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.2187,
                y: 0.7781,
                z: 0.0073,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.1918,
                y: 1.3938,
                z: -1.468,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.1031,
                y: -3.0921,
                z: 0.0886,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.0517,
                y: -2.2107,
                z: -1.0407,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.4104,
                y: 2.4957,
                z: 0.1965,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.9596,
                y: 3.0918,
                z: -0.4475,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.8852,
                y: -0.8752,
                z: -2.4199,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.6843,
                y: -1.6034,
                z: -1.0353,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.0891,
                y: -1.5181,
                z: 1.9617,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.8835,
                y: 1.6334,
                z: 0.3264,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.0632,
                y: 0.9124,
                z: 2.68,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.476,
                y: -1.2107,
                z: 1.1652,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.1835,
                y: 2.7732,
                z: -0.0148,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.5646,
                y: -3.4072,
                z: -2.1148,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.7403,
                y: 2.1536,
                z: -1.9609,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.7901,
                y: 0.3461,
                z: -2.7813,
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
                14,
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
                1,
                15,
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
                2,
                19,
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
                13,
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
                20,
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
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                24,
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
                25,
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
                26,
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
                27,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                17,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                17,
                28,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                18,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                18,
                29,
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
                31,
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

export default sucrose;
