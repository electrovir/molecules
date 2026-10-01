import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

const formaldehyde: Molecule = {
    name: 'Formaldehyde',
    structureDescription:
        'A carbon atom double-bonded to an oxygen and holding two hydrogens, all flat.',
    realLifeDescription:
        'It is used to preserve specimens and to make resins and glues. Small amounts form naturally in your body and in fruits like pears.',
    stats: {
        stateAtRoomTemperature: MatterState.Gas,
        meltingPointCelsius: -92,
        boilingPointCelsius: -19.1,
        waterSolubilityGramsPerLiter: 400,
        logP: 0.35,
        dipoleMomentDebye: 2.33,
        oralRatLethalDoseMilligramsPerKilogram: 800,
        hazardPictograms: [
            GhsPictogram.Corrosive,
            GhsPictogram.AcuteToxicity,
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
        ],
        yearDiscovered: 1859,
        smell: 'pungent, suffocating',
        habitat: 'Human blood, most living cells, air from methane oxidation',
        evolvesInto: ['formic-acid'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.6123,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.2,
                y: 0.9319,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.2,
                y: -0.9319,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.6123,
                y: 0,
                z: 0,
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
    ],
};

export default formaldehyde;
