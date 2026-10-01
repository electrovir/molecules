// cspell:words indigofera
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 10215. */
const indigo: Molecule = {
    name: 'Indigo',
    structureDescription:
        'Two pairs of fused rings, each holding a nitrogen and a ketone, joined by a carbon double bond.',
    realLifeDescription:
        'It is the blue dye in blue jeans. It was once so precious that it was traded like gold, and today most of it is made in factories instead of from plants.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 391,
        densityGramsPerCubicCentimeter: 1.199,
        waterSolubilityGramsPerLiter: 0.00099,
        logP: 2.63,
        hazardPictograms: [GhsPictogram.HealthHazard],
        habitat: 'Indigofera plants, Murex sea snails',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.151,
                y: 2.4046,
                z: -0.0059,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.3041,
                y: -2.3824,
                z: -0.0263,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 1.5153,
                y: -1.0909,
                z: 0.0019,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.4326,
                y: 1.0911,
                z: -0.0108,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.733,
                y: 0.0327,
                z: -0.0012,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.9068,
                y: 0.6528,
                z: 0.0007,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.847,
                y: -0.7424,
                z: 0.0032,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.7186,
                y: -0.004,
                z: -0.0044,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.5655,
                y: 1.1282,
                z: -0.0019,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.9742,
                y: -0.6709,
                z: 0.0043,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.6327,
                y: -1.2238,
                z: -0.0035,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.7879,
                y: 0.7071,
                z: -0.0034,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 4.1697,
                y: 1.2776,
                z: 0.0013,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.9918,
                y: -1.5473,
                z: 0.0061,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -4.2106,
                y: -1.2799,
                z: 0.0117,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.8902,
                y: 1.5434,
                z: -0.0019,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 5.3234,
                y: 0.4851,
                z: 0.004,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 5.2335,
                y: -0.9053,
                z: 0.0066,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -5.322,
                y: -0.4376,
                z: 0.0132,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -5.1642,
                y: 0.9617,
                z: 0.0063,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.1699,
                y: -2.0409,
                z: 0.0029,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.2571,
                y: 2.3603,
                z: -0.0005,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.9228,
                y: -2.6299,
                z: 0.008,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.3216,
                y: -2.3573,
                z: 0.016,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.7784,
                y: 2.6224,
                z: -0.0072,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 6.3001,
                y: 0.9615,
                z: 0.0044,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 6.1425,
                y: -1.5014,
                z: 0.0088,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -6.322,
                y: -0.8631,
                z: 0.0191,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -6.0451,
                y: 1.5985,
                z: 0.0074,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.9142,
                y: 3.0082,
                z: -0.0061,
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
                29,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                10,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                2,
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
                20,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                7,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                3,
                11,
            ],
            order: BondOrder.Single,
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
                4,
                8,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                5,
                6,
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
                12,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                6,
                13,
            ],
            order: BondOrder.Double,
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
                14,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                11,
                15,
            ],
            order: BondOrder.Double,
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
                21,
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
                22,
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
                23,
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
                24,
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
                25,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                17,
                26,
            ],
            order: BondOrder.Single,
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
                27,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                19,
                28,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default indigo;
