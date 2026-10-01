// cspell:words pfoa
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 9554. */
const pfoa: Molecule = {
    name: 'PFOA',
    description:
        'A chain of eight carbons wrapped in fifteen fluorine atoms, ending in an acid group. It was used to make Teflon and is one of the "forever chemicals" that never break down.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 54.3,
        boilingPointCelsius: 189,
        densityGramsPerCubicCentimeter: 1.79,
        waterSolubilityGramsPerLiter: 3.3,
        logP: 6.3,
        hazardPictograms: [
            GhsPictogram.Corrosive,
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
        ],
        yearDiscovered: 1947,
        smell: 'pungent',
        habitat: 'Man-made; persists in water, soil, wildlife, and human blood',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: -1.0539,
                y: 1.9481,
                z: -0.2014,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: 0.5434,
                y: 1.2581,
                z: -1.5025,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: 1.2215,
                y: 1.6487,
                z: 1.0783,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: -0.3328,
                y: 0.2934,
                z: 1.7581,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: -1.8211,
                y: 0.1669,
                z: -2.1654,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: -0.4525,
                y: -1.3197,
                z: -1.355,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: 2.0673,
                y: -0.7623,
                z: 1.9165,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: 0.8055,
                y: -1.7942,
                z: 0.487,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: -2.9835,
                y: -1.7149,
                z: -0.6823,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: -1.6932,
                y: -1.3046,
                z: 1.0212,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: 2.1054,
                y: -0.612,
                z: -1.6013,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: 3.3419,
                y: -1.7554,
                z: -0.2365,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: -3.9677,
                y: 0.8422,
                z: -0.5956,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: -2.6826,
                y: 1.3007,
                z: 1.1093,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: -4.1728,
                y: -0.274,
                z: 1.2669,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 4.5699,
                y: 0.3287,
                z: 0.6742,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 3.3666,
                y: 1.6773,
                z: -0.7043,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.2911,
                y: 0.8598,
                z: -0.5112,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.5314,
                y: 0.5262,
                z: 0.7274,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.2138,
                y: -0.2391,
                z: -1.0209,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.5064,
                y: -0.6431,
                z: 0.6776,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.285,
                y: -0.7254,
                z: -0.0556,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.6302,
                y: -0.5967,
                z: -0.3477,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.2786,
                y: 0.3,
                z: 0.4302,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.5392,
                y: 0.5913,
                z: -0.1672,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 5.1534,
                y: 1.1082,
                z: 0.793,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                17,
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
                2,
                18,
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
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
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
                20,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                21,
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
                22,
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
                12,
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                23,
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
                24,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                25,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                24,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                17,
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
                18,
                20,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                19,
                21,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                20,
                22,
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
                24,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default pfoa;
