// cspell:words methoxy
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 4076. */
const mescaline: Molecule = {
    name: 'Mescaline',
    description:
        'A benzene ring with three methoxy groups and a two-carbon chain ending in an amine. It is the psychedelic in peyote cactus.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 35.5,
        densityGramsPerCubicCentimeter: 1.067,
        logP: 0.78,
        hazardPictograms: [GhsPictogram.Irritant],
        yearDiscovered: 1897,
        habitat: 'Peyote, San Pedro, and other cacti',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.4357,
                y: -2.4227,
                z: 0.4793,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.3618,
                y: 2.3418,
                z: -0.0008,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.7858,
                y: -0.0302,
                z: 0.1244,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -4.9841,
                y: -0.2016,
                z: -0.6406,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.3531,
                y: -0.0603,
                z: 0.4669,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.8393,
                y: -0.071,
                z: 0.5903,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.6769,
                y: 1.1465,
                z: 0.288,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.6394,
                y: -1.2571,
                z: 0.5299,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.5312,
                y: -0.2185,
                z: -0.7722,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.7507,
                y: -1.247,
                z: 0.4139,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.7131,
                y: 1.1564,
                z: 0.1718,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.4268,
                y: -0.0403,
                z: 0.2348,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.6595,
                y: -3.1117,
                z: -0.7492,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.5579,
                y: 3.5187,
                z: -0.0544,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.3329,
                y: 0.4969,
                z: -1.0821,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.1478,
                y: -0.8876,
                z: 1.2569,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.1748,
                y: 0.8509,
                z: 1.0842,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.2848,
                y: 2.044,
                z: 0.244,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.1615,
                y: -2.2009,
                z: 0.6683,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.2299,
                y: -1.1563,
                z: -1.253,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.2292,
                y: 0.5936,
                z: -1.4435,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -5.2751,
                y: 0.6666,
                z: -0.1922,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -5.2776,
                y: -0.9503,
                z: -0.014,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.2458,
                y: -2.495,
                z: -1.4373,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.7071,
                y: -3.3891,
                z: -1.2119,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.2217,
                y: -4.0242,
                z: -0.5325,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.0292,
                y: 3.6904,
                z: 0.8894,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.118,
                y: 3.5073,
                z: -0.9164,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.2372,
                y: 4.3659,
                z: -0.1958,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.6027,
                y: 1.5475,
                z: -0.9437,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.6477,
                y: 0.3872,
                z: -1.9301,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.2469,
                y: -0.06,
                z: -1.3086,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                12,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                11,
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
                3,
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                21,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                22,
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
                5,
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
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
                6,
                10,
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
                7,
                9,
            ],
            order: BondOrder.Double,
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
                8,
                19,
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
                9,
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                11,
            ],
            order: BondOrder.Double,
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
                13,
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
                14,
                30,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                31,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default mescaline;
