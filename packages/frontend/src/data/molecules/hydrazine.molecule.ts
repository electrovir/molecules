// cspell:words anammox
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 9321. */
const hydrazine: Molecule = {
    name: 'Hydrazine',
    structureDescription: 'Two nitrogen atoms bonded together, each holding two hydrogens.',
    realLifeDescription:
        'It is a rocket fuel used to steer satellites and spacecraft. It splits apart over a hot metal catalyst, so it can make thrust without any oxygen.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: 2,
        boilingPointCelsius: 113.5,
        densityGramsPerCubicCentimeter: 1.01,
        isWaterMiscible: true,
        logP: -2.07,
        dipoleMomentDebye: 1.85,
        oralRatLethalDoseMilligramsPerKilogram: 60,
        hazardPictograms: [
            GhsPictogram.Flammable,
            GhsPictogram.Corrosive,
            GhsPictogram.AcuteToxicity,
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
            GhsPictogram.EnvironmentalHazard,
        ],
        yearDiscovered: 1887,
        smell: 'ammonia-like',
        habitat: 'Some yeasts, anammox ocean bacteria, nitrogen-fixing soil bacteria',
        evolvesInto: [
            'nitrogen',
            'ammonia',
        ],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0.6778,
                y: -0.2116,
                z: -0.2953,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -0.6779,
                y: 0.2115,
                z: -0.2953,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.2823,
                y: 0.6082,
                z: -0.2633,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.8655,
                y: -0.7353,
                z: 0.5586,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.8655,
                y: 0.7354,
                z: 0.5585,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.2823,
                y: -0.6082,
                z: -0.2633,
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
    ],
};

export default hydrazine;
