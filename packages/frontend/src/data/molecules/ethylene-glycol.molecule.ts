import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 174. */
const ethyleneGlycol: Molecule = {
    name: 'Ethylene Glycol',
    structureDescription: 'Two carbon atoms each holding an oxygen-hydrogen group.',
    realLifeDescription:
        'It is the main ingredient of car antifreeze. It tastes sweet but is poisonous, so makers often add a bitter taste to keep kids and pets away.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: -12.9,
        boilingPointCelsius: 197.3,
        densityGramsPerCubicCentimeter: 1.11,
        isWaterMiscible: true,
        logP: -1.36,
        dipoleMomentDebye: 2.28,
        oralRatLethalDoseMilligramsPerKilogram: 4700,
        hazardPictograms: [
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
        ],
        yearDiscovered: 1856,
        taste: 'sweet',
        habitat: 'Factories, pea plants',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.2504,
                y: -0.9042,
                z: 0.1783,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.4918,
                y: -0.5008,
                z: 0.5668,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.702,
                y: 0.4059,
                z: 0.2561,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.7267,
                y: 0.3752,
                z: -0.252,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.322,
                y: 1.0866,
                z: -0.3341,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.7349,
                y: 0.7118,
                z: 1.3059,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.1773,
                y: 1.3706,
                z: -0.2095,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.7782,
                y: 0.0045,
                z: -1.2806,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.2387,
                y: -1.1716,
                z: -0.7565,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.074,
                y: -1.3781,
                z: 0.5256,
            },
        },
    ],
    bonds: [
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
                8,
            ],
            order: BondOrder.Single,
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
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                3,
            ],
            order: BondOrder.Single,
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
                5,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                6,
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
    ],
};

export default ethyleneGlycol;
