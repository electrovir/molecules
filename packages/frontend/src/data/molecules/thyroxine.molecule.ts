import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 5819. */
const thyroxine: Molecule = {
    name: 'Thyroxine',
    structureDescription:
        'Two benzene rings linked by an oxygen, carrying four iodine atoms, with an amino acid chain attached.',
    realLifeDescription:
        'It is the main thyroid hormone, which sets how fast your body burns energy. Your body needs iodine from food to make it, which is why iodine is added to table salt.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 232,
        waterSolubilityGramsPerLiter: 0.105,
        logP: 4,
        hazardPictograms: [GhsPictogram.HealthHazard],
        yearDiscovered: 1914,
        habitat: 'Thyroid glands of humans and other mammals',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.I,
            position: {
                x: 0.1456,
                y: -0.7021,
                z: -3.2374,
            },
        },
        {
            element: ChemicalElementSymbol.I,
            position: {
                x: 0.6342,
                y: -2.5402,
                z: 2.5616,
            },
        },
        {
            element: ChemicalElementSymbol.I,
            position: {
                x: 6.5942,
                y: -0.2322,
                z: -0.419,
            },
        },
        {
            element: ChemicalElementSymbol.I,
            position: {
                x: 1.8786,
                y: 3.3285,
                z: 1.109,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.4387,
                y: -1.8017,
                z: -0.4835,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -3.2006,
                y: 2.1698,
                z: -0.5863,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -5.3952,
                y: 1.8399,
                z: -1.0559,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 4.9129,
                y: 2.359,
                z: 0.5438,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -5.6938,
                y: 0.6242,
                z: 1.3862,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -4.0749,
                y: -0.8508,
                z: 0.2824,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -4.3742,
                y: 0.5785,
                z: 0.7604,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.5991,
                y: -1.1048,
                z: 0.0776,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.841,
                y: -1.5827,
                z: 1.1336,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.0343,
                y: -0.8548,
                z: -1.162,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.1052,
                y: -1.5708,
                z: -0.298,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.6725,
                y: -1.0897,
                z: -1.3512,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.4791,
                y: -1.8174,
                z: 0.9443,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -4.404,
                y: 1.571,
                z: -0.3892,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.3093,
                y: -0.7591,
                z: -0.2258,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.8017,
                y: 0.4555,
                z: 0.2026,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.6685,
                y: -0.9539,
                z: -0.4023,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 4.5469,
                y: 0.098,
                z: -0.1425,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.6802,
                y: 1.5074,
                z: 0.4622,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 4.0527,
                y: 1.3287,
                z: 0.2896,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.6165,
                y: -1.0719,
                z: -0.6477,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.4434,
                y: -1.5837,
                z: 1.0139,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.6447,
                y: 0.9214,
                z: 1.5033,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.309,
                y: -1.7676,
                z: 2.0973,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.6522,
                y: -0.4826,
                z: -1.9753,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -5.7088,
                y: 0.0053,
                z: 2.1963,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -6.3949,
                y: 0.2563,
                z: 0.7433,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.7444,
                y: 0.6444,
                z: 0.3516,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.0312,
                y: -1.9213,
                z: -0.7398,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.231,
                y: 2.8182,
                z: -1.3217,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.8199,
                y: 2.0536,
                z: 0.3702,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
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
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                18,
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
                5,
                33,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                17,
            ],
            order: BondOrder.Double,
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
                7,
                34,
            ],
            order: BondOrder.Single,
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
                29,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                30,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                10,
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
                10,
                17,
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
                12,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                11,
                13,
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
                27,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                15,
            ],
            order: BondOrder.Double,
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
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                16,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                18,
                19,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                18,
                20,
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
                31,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                20,
                21,
            ],
            order: BondOrder.Double,
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
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                22,
                23,
            ],
            order: BondOrder.Double,
        },
    ],
};

export default thyroxine;
