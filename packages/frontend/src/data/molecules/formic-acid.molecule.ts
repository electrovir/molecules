// cspell:words carboxylic
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 284. */
const formicAcid: Molecule = {
    name: 'Formic Acid',
    // cspell:disable-next-line
    pronunciation: 'fˈɔɹmɪk ˈæsəd',
    structureDescription:
        'The simplest carboxylic acid: one carbon, two oxygens and two hydrogens.',
    realLifeDescription:
        'Ants and stinging nettles use it to sting. Its name comes from formica, the Latin word for ant.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: 8.4,
        boilingPointCelsius: 101,
        densityGramsPerCubicCentimeter: 1.22,
        isWaterMiscible: true,
        logP: -0.54,
        dipoleMomentDebye: 1.41,
        oralRatLethalDoseMilligramsPerKilogram: 1100,
        hazardPictograms: [
            GhsPictogram.Flammable,
            GhsPictogram.Corrosive,
            GhsPictogram.Irritant,
        ],
        yearDiscovered: 1671,
        smell: 'pungent, vinegar-like',
        taste: 'sour',
        habitat: 'Ant and bee stings, stinging nettles, fruits, forest air',
        evolvesInto: ['carbon-dioxide'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.8181,
                y: -0.5167,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.7156,
                y: 1.1747,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.4353,
                y: -0.0128,
                z: 0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.1659,
                y: -0.8349,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.4987,
                y: 0.1898,
                z: 0,
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
                4,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                2,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                2,
                3,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default formicAcid;
