import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 681. */
const dopamine: Molecule = {
    name: 'Dopamine',
    // cspell:disable-next-line
    pronunciation: 'dˈOpəmˌin',
    structureDescription:
        'A ring holding two oxygen-hydrogen groups and a short chain ending in nitrogen.',
    realLifeDescription:
        'It is a brain signal tied to reward, motivation and movement. Bananas contain it too, but dopamine from food cannot reach the brain.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 128,
        waterSolubilityGramsPerLiter: 600,
        logP: -0.98,
        hazardPictograms: [
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
            GhsPictogram.EnvironmentalHazard,
        ],
        yearDiscovered: 1910,
        habitat: 'Animal brains, nerves, adrenal glands, many foods',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.6709,
                y: 2.2212,
                z: 0.0398,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -3.9491,
                y: -0.236,
                z: 0.2733,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 3.848,
                y: 0.1073,
                z: 0.4841,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.6222,
                y: -0.013,
                z: -0.5953,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.1497,
                y: -0.0683,
                z: -0.3663,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.4106,
                y: 0.0271,
                z: 0.7217,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.5859,
                y: 1.1128,
                z: -0.2681,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.492,
                y: -1.3013,
                z: -0.2495,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.9631,
                y: 1.0609,
                z: -0.0531,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.8692,
                y: -1.3532,
                z: -0.0344,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.6047,
                y: -0.1721,
                z: 0.0637,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.9356,
                y: -0.8792,
                z: -1.1933,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.8658,
                y: 0.8673,
                z: -1.2051,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.1999,
                y: -0.867,
                z: 1.3194,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.1048,
                y: 0.8907,
                z: 1.3234,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.0912,
                y: 2.077,
                z: -0.3565,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.0702,
                y: -2.2286,
                z: -0.3222,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.3564,
                y: -2.3206,
                z: 0.0553,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.0549,
                y: 0.9353,
                z: -0.0734,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.1444,
                y: -0.6889,
                z: -0.0794,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.6062,
                y: 1.9979,
                z: 0.1881,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.2172,
                y: -1.1693,
                z: 0.328,
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
                20,
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
                21,
            ],
            order: BondOrder.Single,
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
                18,
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
                4,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                5,
            ],
            order: BondOrder.Single,
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
                3,
                12,
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
                13,
            ],
            order: BondOrder.Single,
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
                6,
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                15,
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
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                10,
            ],
            order: BondOrder.Double,
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
                17,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default dopamine;
