// cspell:words glyphosate phosphonic
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 3496. */
const glyphosate: Molecule = {
    name: 'Glyphosate',
    description:
        'A glycine molecule with a phosphonic acid group attached to its nitrogen. It is the weed killer in Roundup.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 184.5,
        densityGramsPerCubicCentimeter: 1.704,
        waterSolubilityGramsPerLiter: 12,
        logP: -3.4,
        oralRatLethalDoseMilligramsPerKilogram: 5000,
        hazardPictograms: [
            GhsPictogram.Corrosive,
            GhsPictogram.EnvironmentalHazard,
        ],
        yearDiscovered: 1950,
        smell: 'odorless',
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.P,
            position: {
                x: -2.262,
                y: -0.0863,
                z: 0.078,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.2397,
                y: -0.8192,
                z: -1.3638,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -3.5361,
                y: 0.9054,
                z: -0.0176,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.2885,
                y: -1.0218,
                z: 1.251,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 3.9273,
                y: 0.5614,
                z: 0.0281,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.6652,
                y: -1.3218,
                z: -0.0635,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0.2842,
                y: 0.0793,
                z: 0.0058,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.8436,
                y: 0.997,
                z: 0.0578,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.5454,
                y: 0.807,
                z: 0.0313,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.7477,
                y: -0.1009,
                z: -0.0072,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.8302,
                y: 1.6034,
                z: 0.9686,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.8728,
                y: 1.6556,
                z: -0.816,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.2316,
                y: -0.472,
                z: -0.8508,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.6158,
                y: 1.3956,
                z: 0.9532,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.6118,
                y: 1.4776,
                z: -0.8331,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.9087,
                y: -1.5105,
                z: -1.5547,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.4386,
                y: 0.5244,
                z: 0.0334,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.6932,
                y: -0.051,
                z: 0.0026,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                1,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                2,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                3,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                0,
                7,
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
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                9,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                6,
                7,
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
                11,
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
                13,
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
    ],
};

export default glyphosate;
