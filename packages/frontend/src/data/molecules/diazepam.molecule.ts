import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 3016. */
const diazepam: Molecule = {
    name: 'Diazepam',
    // cspell:disable-next-line
    pronunciation: 'dIˈæzəpˌæm',
    structureDescription:
        'A benzene ring with a chlorine fused to a seven-membered ring with two nitrogens, carrying another benzene ring.',
    realLifeDescription:
        'It is Valium, which calms anxiety. Doctors give it in careful doses to prevent misuse.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 125.5,
        waterSolubilityGramsPerLiter: 0.05,
        logP: 2.82,
        oralRatLethalDoseMilligramsPerKilogram: 960,
        hazardPictograms: [GhsPictogram.AcuteToxicity],
        yearDiscovered: 1959,
        smell: 'practically odorless',
        taste: 'tasteless, bitter aftertaste',
        habitat: 'Labs, traces in some plants and animal brains',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: 0.2998,
                y: -4.4445,
                z: 0.8123,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.4289,
                y: 3.3083,
                z: -0.1483,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 2.3415,
                y: 1.0154,
                z: -0.5545,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -0.1275,
                y: 1.7954,
                z: 1.0323,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.5201,
                y: -0.467,
                z: 0.3159,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.8007,
                y: -0.2803,
                z: -0.2451,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.4428,
                y: 0.6574,
                z: 0.5126,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.2493,
                y: 1.9939,
                z: 1.4332,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.0448,
                y: 2.1785,
                z: 0.1656,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.8571,
                y: 0.481,
                z: 0.0728,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.0713,
                y: -1.7562,
                z: 0.656,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.5651,
                y: -1.4316,
                z: -0.5207,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.3093,
                y: 1.1136,
                z: -1.6471,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.8626,
                y: -2.8718,
                z: 0.4008,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.1038,
                y: -2.7105,
                z: -0.1989,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.1429,
                y: -0.3511,
                z: -1.0027,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.8735,
                y: 1.1501,
                z: 0.7437,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.4655,
                y: -0.5164,
                z: -1.4139,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -4.196,
                y: 0.9846,
                z: 0.3325,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -4.4919,
                y: 0.1513,
                z: -0.7463,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.6513,
                y: 1.1906,
                z: 2.0604,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.3201,
                y: 2.9125,
                z: 2.0262,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.9008,
                y: -1.8947,
                z: 1.1256,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.5573,
                y: -1.3598,
                z: -0.9594,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.9927,
                y: 0.4933,
                z: -2.4915,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.2923,
                y: 0.7998,
                z: -1.2828,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.3958,
                y: 2.1449,
                z: -2.0021,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.7349,
                y: -3.5692,
                z: -0.4136,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.3671,
                y: -0.8594,
                z: -1.5676,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.6684,
                y: 1.797,
                z: 1.592,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.6956,
                y: -1.1591,
                z: -2.2588,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.9958,
                y: 1.5032,
                z: 0.8532,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -5.5215,
                y: 0.0237,
                z: -1.0674,
            },
        },
    ],
    bonds: [
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
                8,
            ],
            order: BondOrder.Double,
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
                8,
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
            order: BondOrder.Double,
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
                4,
                5,
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
                9,
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
                9,
                15,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                9,
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                13,
            ],
            order: BondOrder.Double,
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
                11,
                14,
            ],
            order: BondOrder.Double,
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
                12,
                26,
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
                14,
                27,
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
                28,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                18,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                16,
                29,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                17,
                19,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                17,
                30,
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
                31,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                19,
                32,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default diazepam;
