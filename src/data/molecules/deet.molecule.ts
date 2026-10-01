// cspell:words deet
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 4284. */
const deet: Molecule = {
    name: 'DEET',
    description:
        'A benzene ring with a methyl group, attached to an amide nitrogen carrying two ethyl groups. It is the active ingredient in most bug sprays.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: -33,
        boilingPointCelsius: 288,
        densityGramsPerCubicCentimeter: 0.996,
        logP: 2.02,
        oralRatLethalDoseMilligramsPerKilogram: 1890,
        hazardPictograms: [GhsPictogram.Irritant],
        yearDiscovered: 1944,
        smell: 'faint, pleasant',
        habitat: 'Made only in labs and factories',
        evolvesInto: ['acetaldehyde'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.2174,
                y: -1.338,
                z: 1.5662,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.8993,
                y: 0.2596,
                z: 0.0019,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.3035,
                y: 0.2656,
                z: 0.387,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.5386,
                y: 1.1619,
                z: -1.0897,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.9512,
                y: -0.5616,
                z: 0.6392,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.4304,
                y: -0.5234,
                z: 0.1869,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -4.0988,
                y: -0.7564,
                z: -0.3988,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.1414,
                y: 2.5287,
                z: -0.5714,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.3284,
                y: 0.3767,
                z: 0.7608,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.6539,
                y: 0.4111,
                z: 0.3279,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.8581,
                y: -1.3889,
                z: -0.8199,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.0815,
                y: -0.4543,
                z: -0.6789,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.1836,
                y: -1.3543,
                z: -1.2528,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.6142,
                y: 1.3734,
                z: 0.9416,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.3716,
                y: 0.0207,
                z: 1.4529,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.7183,
                y: 1.2705,
                z: 0.2551,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.7183,
                y: 0.7453,
                z: -1.68,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.3914,
                y: 1.2521,
                z: -1.7724,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.0678,
                y: -0.5443,
                z: -1.4724,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.7017,
                y: -1.7659,
                z: -0.2485,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -5.1459,
                y: -0.751,
                z: -0.0809,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.9693,
                y: 2.9992,
                z: -0.0307,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.2902,
                y: 2.4884,
                z: 0.1104,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.8724,
                y: 3.1841,
                z: -1.406,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.998,
                y: 1.0451,
                z: 1.5527,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.1669,
                y: -2.0942,
                z: -1.2742,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.111,
                y: -0.436,
                z: -1.0266,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.5163,
                y: -2.0279,
                z: -2.0372,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.3903,
                y: 1.5291,
                z: 2.0025,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.6426,
                y: 1.001,
                z: 0.8827,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.5615,
                y: 2.337,
                z: 0.4253,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                4,
            ],
            order: BondOrder.Double,
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
                4,
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
                2,
                14,
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
                7,
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
                5,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                10,
            ],
            order: BondOrder.Double,
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
                6,
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
                7,
                22,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                9,
            ],
            order: BondOrder.Double,
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
                25,
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
                26,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                27,
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
                13,
                30,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default deet;
