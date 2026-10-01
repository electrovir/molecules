import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 3676. */
const lidocaine: Molecule = {
    name: 'Lidocaine',
    description:
        'A benzene ring with two methyl groups, linked through an amide to a chain ending in a nitrogen with two ethyl groups. It numbs the skin for dentists and in sunburn sprays.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 68,
        waterSolubilityGramsPerLiter: 0.41,
        logP: 2.44,
        oralRatLethalDoseMilligramsPerKilogram: 317,
        hazardPictograms: [GhsPictogram.Irritant],
        yearDiscovered: 1943,
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.6658,
                y: -0.1341,
                z: 1.4612,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 3.0943,
                y: -0.0513,
                z: 0.1541,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -0.3988,
                y: -0.3956,
                z: -0.615,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.9647,
                y: -0.7259,
                z: -0.4841,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.9035,
                y: 1.3985,
                z: 0.1306,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 4.3466,
                y: -0.413,
                z: -0.509,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.7556,
                y: -0.1301,
                z: -0.3123,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.6855,
                y: -0.3834,
                z: 0.26,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.5858,
                y: -1.1738,
                z: 0.0688,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.2323,
                y: 1.1693,
                z: -0.4028,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 4.0688,
                y: 2.1164,
                z: 0.7901,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 4.5916,
                y: -1.9108,
                z: -0.4404,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.9233,
                y: -0.9124,
                z: 0.366,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.5698,
                y: 1.4306,
                z: -0.1054,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.0884,
                y: -2.5795,
                z: 0.1705,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.3515,
                y: 2.3053,
                z: -0.8116,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -4.4152,
                y: 0.3898,
                z: 0.279,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.8847,
                y: -0.4518,
                z: -1.5436,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.0397,
                y: -1.8162,
                z: -0.4137,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.7853,
                y: 1.7718,
                z: -0.8951,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.0086,
                y: 1.7019,
                z: 0.6821,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.3689,
                y: -0.0807,
                z: -1.5546,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.2034,
                y: 0.04,
                z: -0.0004,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.2548,
                y: -0.8084,
                z: -1.5341,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.324,
                y: 1.6745,
                z: 1.7594,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.9621,
                y: 2.1381,
                z: 0.1583,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.7962,
                y: 3.1622,
                z: 0.9729,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.4517,
                y: -2.2992,
                z: 0.5743,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.9507,
                y: -2.4717,
                z: -1.1274,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.6255,
                y: -2.1273,
                z: -0.7326,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.5959,
                y: -1.711,
                z: 0.6676,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.9698,
                y: 2.4393,
                z: -0.1669,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.6513,
                y: -2.9034,
                z: -0.7798,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.3364,
                y: -2.6621,
                z: 0.9619,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.895,
                y: -3.2811,
                z: 0.4096,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.8715,
                y: 2.0953,
                z: -1.7733,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.9161,
                y: 3.2364,
                z: -0.9311,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.5811,
                y: 2.4817,
                z: -0.0539,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -5.4566,
                y: 0.5935,
                z: 0.511,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                7,
            ],
            order: BondOrder.Double,
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
                1,
                5,
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
                7,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                23,
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
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                18,
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
                4,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                20,
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
                5,
                21,
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
                8,
            ],
            order: BondOrder.Double,
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
                8,
                12,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                13,
            ],
            order: BondOrder.Double,
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
                24,
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
                12,
                16,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                12,
                30,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                16,
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
        {
            atomIndexes: [
                14,
                32,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                33,
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
                38,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default lidocaine;
