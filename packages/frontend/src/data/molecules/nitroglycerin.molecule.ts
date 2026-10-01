import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 4510. */
const nitroglycerin: Molecule = {
    name: 'Nitroglycerin',
    structureDescription: 'Glycerol with each oxygen-hydrogen group swapped for a nitrate.',
    realLifeDescription:
        'It is a powerful explosive, the key ingredient of dynamite, and also a heart medicine.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: 13.5,
        densityGramsPerCubicCentimeter: 1.59,
        waterSolubilityGramsPerLiter: 1,
        logP: 1.62,
        oralRatLethalDoseMilligramsPerKilogram: 822,
        hazardPictograms: [
            GhsPictogram.Explosive,
            GhsPictogram.AcuteToxicity,
            GhsPictogram.HealthHazard,
            GhsPictogram.EnvironmentalHazard,
        ],
        yearDiscovered: 1846,
        smell: 'practically odorless',
        taste: 'sweet, burning',
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.0098,
                y: -1.4471,
                z: 0.6693,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.4847,
                y: -0.3801,
                z: 0.0182,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.4709,
                y: 0.9241,
                z: 0.5729,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.2596,
                y: -2.6736,
                z: -0.6566,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.6095,
                y: -2.7841,
                z: 1.5428,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 3.3856,
                y: 1.618,
                z: 0.3191,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -3.2482,
                y: 1.5409,
                z: -0.5909,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 4.7061,
                y: -0.1733,
                z: 0.4577,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -3.0158,
                y: 2.3209,
                z: 1.485,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.0467,
                y: -2.3834,
                z: 0.5213,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 3.6338,
                y: 0.412,
                z: 0.2896,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -2.682,
                y: 1.6645,
                z: 0.4959,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.1378,
                y: -0.5599,
                z: -0.4441,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.2979,
                y: 0.3855,
                z: -0.1608,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.1719,
                y: 0.2009,
                z: -0.6167,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.3896,
                y: -1.1331,
                z: -1.3461,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.0964,
                y: 0.9442,
                z: 0.762,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.4133,
                y: 1.0779,
                z: -1.0041,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.0068,
                y: -0.4609,
                z: -0.8659,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.0436,
                y: 0.9066,
                z: -1.4488,
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
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                9,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                5,
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                10,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                8,
                11,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                12,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                15,
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
                17,
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
                19,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default nitroglycerin;
