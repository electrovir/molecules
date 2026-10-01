import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 1130. */
const thiamine: Molecule = {
    name: 'Thiamine',
    structureDescription:
        'A ring of carbon and nitrogen linked by a carbon to a ring of sulfur, nitrogen, and carbon with a short OH chain.',
    realLifeDescription:
        'It is vitamin B1, which your body needs to burn sugar. It was the first B vitamin discovered, found while searching for the cause of the disease beriberi.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 248,
        waterSolubilityGramsPerLiter: 500,
        oralRatLethalDoseMilligramsPerKilogram: 3710,
        yearDiscovered: 1910,
        smell: 'slight, unpleasant, thiazole-like',
        taste: 'bitter',
        habitat: 'Whole grains, pork, legumes, nuts, all plants and animals',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: 1.9482,
                y: -1.4031,
                z: 1.196,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 6.456,
                y: 0.0914,
                z: 0.4466,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0.6647,
                y: -0.1068,
                z: -0.4941,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -3.7201,
                y: -0.8639,
                z: 0.0404,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -3.3468,
                y: 1.4253,
                z: 0.6944,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -2.1229,
                y: -2.0011,
                z: -1.2937,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.8552,
                y: 0.5579,
                z: -0.4189,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.422,
                y: 0.3112,
                z: -1.3825,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.7054,
                y: -0.0313,
                z: 0.4863,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 4.0761,
                y: 0.3463,
                z: 0.8836,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.7205,
                y: 0.2785,
                z: -0.6599,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.5294,
                y: -1.1531,
                z: 0.2735,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.0649,
                y: 1.7455,
                z: -1.26,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 5.1629,
                y: -0.3197,
                z: 0.0205,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.5409,
                y: -0.8301,
                z: -0.6145,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.1791,
                y: 1.3888,
                z: 0.0193,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -4.0566,
                y: 0.2813,
                z: 0.664,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -5.354,
                y: 0.2828,
                z: 1.399,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.402,
                y: -0.3228,
                z: -2.2751,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.2781,
                y: 1.3283,
                z: -1.7588,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.2626,
                y: 0.1017,
                z: 1.9377,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.1989,
                y: 1.4358,
                z: 0.8324,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.3095,
                y: -1.8183,
                z: 0.3642,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.9023,
                y: 1.5202,
                z: -2.3189,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.4056,
                y: 2.5652,
                z: -0.9571,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.0918,
                y: 2.1165,
                z: -1.1767,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.0461,
                y: -0.0562,
                z: -1.0363,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.1119,
                y: -1.4104,
                z: 0.1021,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.6093,
                y: 2.3123,
                z: 0.0493,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.6183,
                y: -1.9106,
                z: -2.1653,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.7405,
                y: -2.8004,
                z: -1.2117,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 6.4969,
                y: 1.0593,
                z: 0.3618,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -5.6162,
                y: -0.7269,
                z: 1.7301,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -5.2975,
                y: 0.9253,
                z: 2.2833,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -6.1484,
                y: 0.6543,
                z: 0.7451,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                11,
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
                31,
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
                11,
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
                3,
                16,
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
                4,
                16,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                5,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                29,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                30,
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
                12,
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
                8,
                9,
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
                9,
                20,
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
                10,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                15,
            ],
            order: BondOrder.Double,
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
                15,
                28,
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
                17,
                32,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                17,
                33,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                17,
                34,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default thiamine;
