import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 1118. */
const sulfuricAcid: Molecule = {
    name: 'Sulfuric Acid',
    // cspell:disable-next-line
    pronunciation: 'səlfjˈuɹɪk ˈæsəd',
    structureDescription: 'A sulfur atom surrounded by four oxygens, two of which hold hydrogens.',
    realLifeDescription:
        'It is the most produced chemical in the world, used in car batteries and fertilizer. It pulls water out of things so strongly that it turns sugar into a tower of black carbon.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: 10.3,
        boilingPointCelsius: 337,
        densityGramsPerCubicCentimeter: 1.83,
        isWaterMiscible: true,
        dipoleMomentDebye: 2.72,
        oralRatLethalDoseMilligramsPerKilogram: 2140,
        hazardPictograms: [GhsPictogram.Corrosive],
        taste: 'acidic',
        habitat: 'Acid rain, volcanic gases, the clouds of Venus',
        evolvesInto: [
            'sulfur-trioxide',
            'water',
        ],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: 0.0002,
                y: -0.5841,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.1313,
                y: 0.4304,
                z: 0.5898,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.1315,
                y: 0.43,
                z: -0.5898,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.5818,
                y: -1.3028,
                z: -1.1174,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.5811,
                y: -1.3034,
                z: 1.1172,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.3944,
                y: 1.1653,
                z: -0.0126,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.395,
                y: 1.1646,
                z: 0.0128,
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
                4,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                1,
                5,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                6,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default sulfuricAcid;
