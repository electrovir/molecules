import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 446220. */
const cocaine: Molecule = {
    name: 'Cocaine',
    description:
        'A bridged ring holding a nitrogen, carrying an ester group and a benzoyl ester group. It comes from coca leaves and is a stimulant and numbing agent.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 98,
        densityGramsPerCubicCentimeter: 1.22,
        waterSolubilityGramsPerLiter: 1.8,
        logP: 2.3,
        hazardPictograms: [
            GhsPictogram.AcuteToxicity,
            GhsPictogram.Irritant,
        ],
        yearDiscovered: 1855,
        smell: 'odorless',
        taste: 'bitter, numbing',
        habitat: 'Leaves of the coca plant of the Andes',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.6923,
                y: -0.1549,
                z: 0.4068,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.15,
                y: 2.7599,
                z: 0.3222,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.3983,
                y: 1.7946,
                z: -0.8339,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.4554,
                y: -2.3104,
                z: 0.1407,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 3.1998,
                y: -0.3456,
                z: -0.8103,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.0908,
                y: 0.124,
                z: 0.587,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.5793,
                y: -1.6811,
                z: -0.7568,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.6155,
                y: 0.5331,
                z: 0.8254,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.4745,
                y: -1.1044,
                z: 1.4223,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.1264,
                y: -2.302,
                z: 0.5333,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.0563,
                y: -1.4497,
                z: -0.6882,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.6422,
                y: -0.6278,
                z: 0.5429,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 4.5776,
                y: -0.3774,
                z: -1.2942,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.2951,
                y: 1.7488,
                z: -0.0027,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.6463,
                y: -1.1061,
                z: 0.2095,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.9565,
                y: 3.9831,
                z: -0.3951,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.9892,
                y: -0.4858,
                z: 0.0823,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.9396,
                y: -1.1079,
                z: -0.7013,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.2455,
                y: 0.6932,
                z: 0.7519,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -5.2013,
                y: -0.5255,
                z: -0.8207,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -4.5074,
                y: 1.2756,
                z: 0.6326,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -5.4853,
                y: 0.6662,
                z: -0.1538,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.7627,
                y: 0.9639,
                z: 0.7973,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.8085,
                y: -2.2915,
                z: -1.6377,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.4706,
                y: 0.8389,
                z: 1.8709,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.952,
                y: -1.1442,
                z: 2.3837,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.5505,
                y: -1.1078,
                z: 1.634,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.0353,
                y: -2.8803,
                z: 0.329,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.4109,
                y: -2.975,
                z: 1.0167,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.713,
                y: -0.9525,
                z: -1.6054,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.5924,
                y: -2.4399,
                z: -0.6927,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.6616,
                y: -1.2861,
                z: 1.4225,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.6033,
                y: -0.7386,
                z: -2.3281,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.2438,
                y: -1.0098,
                z: -0.6987,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.9938,
                y: 0.636,
                z: -1.3059,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.9563,
                y: 4.382,
                z: -0.201,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.1073,
                y: 3.8209,
                z: -1.4667,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.6972,
                y: 4.7053,
                z: -0.0417,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.7293,
                y: -2.034,
                z: -1.228,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.506,
                y: 1.1805,
                z: 1.3803,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -5.9626,
                y: -0.9994,
                z: -1.4335,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.7299,
                y: 2.202,
                z: 1.154,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -6.4679,
                y: 1.1195,
                z: -0.2463,
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
                13,
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
                13,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                3,
                14,
            ],
            order: BondOrder.Double,
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
                12,
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
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                22,
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
                6,
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                24,
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
                25,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                26,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                27,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                28,
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
                29,
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
                11,
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
        {
            atomIndexes: [
                12,
                34,
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
                15,
                35,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                36,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                37,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                17,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                16,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                17,
                19,
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
                18,
                20,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                18,
                39,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                19,
                21,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                19,
                40,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                20,
                21,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                20,
                41,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                21,
                42,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default cocaine;
