// cspell:words edta
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 6049. */
const edta: Molecule = {
    name: 'EDTA',
    // cspell:disable-next-line
    pronunciation: 'ˌi dˌi tˌi ˈA',
    structureDescription:
        'Two nitrogens joined by a two-carbon bridge, each holding two acetic acid arms.',
    realLifeDescription:
        'Its arms wrap around metal ions, which keeps food fresh and stops soap scum. Doctors also use it to pull poisonous metals like lead out of the body.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 241,
        densityGramsPerCubicCentimeter: 0.86,
        waterSolubilityGramsPerLiter: 1,
        logP: -2.6,
        oralRatLethalDoseMilligramsPerKilogram: 3700,
        hazardPictograms: [
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
        ],
        yearDiscovered: 1935,
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 4.3006,
                y: -2.5693,
                z: -1.0135,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.7892,
                y: 2.2945,
                z: 2.5269,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -4.2591,
                y: -2.6115,
                z: 0.9969,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.8314,
                y: 2.298,
                z: -2.5113,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 3.6728,
                y: -0.5503,
                z: -1.8455,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.3546,
                y: 2.4467,
                z: 0.302,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -3.6584,
                y: -0.5906,
                z: 1.8441,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.3925,
                y: 2.4427,
                z: -0.2867,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 1.8588,
                y: -0.255,
                z: 0.1985,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.8527,
                y: -0.2518,
                z: -0.2013,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.4559,
                y: -0.2596,
                z: 0.6117,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.4534,
                y: -0.2292,
                z: -0.6132,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.2848,
                y: -1.602,
                z: -0.179,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.7056,
                y: 0.2674,
                z: 1.2702,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.2591,
                y: -1.609,
                z: 0.1663,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.7117,
                y: 0.2645,
                z: -1.2682,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.4776,
                y: -1.4924,
                z: -1.0881,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.5818,
                y: 1.7658,
                z: 1.2941,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.4514,
                y: -1.5237,
                z: 1.0786,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.612,
                y: 1.7648,
                z: -1.2825,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.2592,
                y: -1.112,
                z: 1.2726,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.2218,
                y: 0.6363,
                z: 1.2032,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.2231,
                y: 0.6954,
                z: -1.16,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.2479,
                y: -1.0501,
                z: -1.3112,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.526,
                y: -2.1457,
                z: -0.7517,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.533,
                y: -2.206,
                z: 0.7024,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.768,
                y: 0.0588,
                z: 1.0965,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.4308,
                y: -0.1544,
                z: 2.2446,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.4951,
                y: -2.1524,
                z: 0.7313,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.5024,
                y: -2.2069,
                z: -0.7206,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.7701,
                y: 0.0375,
                z: -1.093,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.4321,
                y: -0.1463,
                z: -2.2458,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.0633,
                y: -2.4899,
                z: -1.6253,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.7226,
                y: 3.2732,
                z: 2.5212,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -5.0215,
                y: -2.5478,
                z: 1.6109,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.7803,
                y: 3.2776,
                z: -2.4994,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                16,
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
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                33,
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
                2,
                34,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                35,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                16,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                5,
                17,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                6,
                18,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                7,
                19,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                8,
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                12,
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
                11,
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
                9,
                15,
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
                20,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                21,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                22,
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
                16,
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
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                26,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                27,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                28,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                29,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                30,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                31,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default edta;
