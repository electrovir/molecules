// cspell:words sulfamic
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';
import sulfamicAcid from './sulfamic-acid.molecule.js';
import sulfuricAcid from './sulfuric-acid.molecule.js';

/** 3D coordinates from PubChem CID 24682. */
const sulfurTrioxide: Molecule = {
    name: 'Sulfur Trioxide',
    routeName: 'sulfur-trioxide',
    // cspell:disable-next-line
    pronunciation: 'sˈʌlfəɹ tɹIˈɑksˌId',
    structureDescription: 'A sulfur atom double bonded to three oxygens in a flat triangle.',
    realLifeDescription:
        'It forms when sulfur dioxide from burning coal reacts in the air, and it turns into sulfuric acid in acid rain.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: 16.9,
        boilingPointCelsius: 45,
        densityGramsPerCubicCentimeter: 1.92,
        dipoleMomentDebye: 0,
        hazardPictograms: [
            GhsPictogram.Corrosive,
            GhsPictogram.AcuteToxicity,
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
            GhsPictogram.EnvironmentalHazard,
        ],
        smell: 'pungent, like sulfur dioxide',
        habitat: 'Factories, burning sulfur',
        evolvesInto: [
            sulfamicAcid,
            sulfuricAcid,
        ],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: 0,
                y: 0,
                z: -0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.6552,
                y: -1.2949,
                z: 0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.7939,
                y: 1.2148,
                z: 0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.4491,
                y: 0.0801,
                z: 0.0001,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                1,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                0,
                2,
            ],
            order: BondOrder.Double,
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

export default sulfurTrioxide;
