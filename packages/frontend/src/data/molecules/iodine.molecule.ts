import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 807. */
const iodine: Molecule = {
    name: 'Iodine',
    // cspell:disable-next-line
    pronunciation: 'ˈI ədˌIn',
    structureDescription: 'Two iodine atoms joined by a single bond.',
    realLifeDescription:
        'Tinctures of it disinfect cuts, and your thyroid needs it to make its hormones, which is why table salt is iodized. When heated, its dark purple crystals turn straight into a purple gas without melting first.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 113.7,
        boilingPointCelsius: 184.4,
        densityGramsPerCubicCentimeter: 4.93,
        waterSolubilityGramsPerLiter: 0.3,
        logP: 2.49,
        dipoleMomentDebye: 0,
        oralRatLethalDoseMilligramsPerKilogram: 14_000,
        hazardPictograms: [
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
            GhsPictogram.EnvironmentalHazard,
        ],
        yearDiscovered: 1811,
        smell: 'sharp, irritating',
        taste: 'sharp, acrid',
        habitat: 'Seawater, seaweed, salt brines, Chilean saltpeter',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.I,
            position: {
                x: -1.326,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.I,
            position: {
                x: 1.326,
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
    ],
};

export default iodine;
