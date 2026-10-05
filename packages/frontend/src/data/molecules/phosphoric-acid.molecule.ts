import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 1004. */
const phosphoricAcid: Molecule = {
    name: 'Phosphoric Acid',
    routeName: 'phosphoric-acid',
    // cspell:disable-next-line
    pronunciation: 'fɑsfˈɔɹɪk ˈæsəd',
    structureDescription: 'A phosphorus atom surrounded by four oxygens, three holding hydrogens.',
    realLifeDescription:
        'It gives cola drinks their tang. It is also used to remove rust from iron and steel.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 42.4,
        densityGramsPerCubicCentimeter: 1.87,
        isWaterMiscible: true,
        logP: -2.15,
        oralRatLethalDoseMilligramsPerKilogram: 1530,
        hazardPictograms: [
            GhsPictogram.Corrosive,
            GhsPictogram.Irritant,
        ],
        taste: 'sour',
        habitat: 'Many fruits, colas, human kidneys, liver, other tissues',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.P,
            position: {
                x: 0.1644,
                y: 0.2825,
                z: 0.3966,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.403,
                y: -1.1904,
                z: 0.7393,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.1372,
                y: 1.0916,
                z: -0.1162,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.0729,
                y: 0.086,
                z: -0.9235,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.8776,
                y: 0.9499,
                z: 1.5376,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.8958,
                y: -1.6827,
                z: 0.0486,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.6647,
                y: 0.7226,
                z: -0.8564,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.9857,
                y: -0.2595,
                z: -0.8259,
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
        {
            atomIndexes: [
                3,
                7,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default phosphoricAcid;
