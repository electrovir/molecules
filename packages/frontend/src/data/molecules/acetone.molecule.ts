import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 180. */
const acetone: Molecule = {
    name: 'Acetone',
    // cspell:disable-next-line
    pronunciation: 'ˈæsətˌOn',
    structureDescription: 'A carbon atom double bonded to an oxygen, with a carbon on each side.',
    realLifeDescription:
        'It is nail polish remover, and your body makes small amounts when it burns fat. It evaporates so fast that a drop on your skin feels cold.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: -94.9,
        boilingPointCelsius: 56.1,
        densityGramsPerCubicCentimeter: 0.79,
        isWaterMiscible: true,
        logP: -0.24,
        dipoleMomentDebye: 2.88,
        oralRatLethalDoseMilligramsPerKilogram: 8450,
        hazardPictograms: [
            GhsPictogram.Flammable,
            GhsPictogram.Irritant,
        ],
        yearDiscovered: 1606,
        smell: 'fruity, mint-like',
        taste: 'pungent, sweetish',
        habitat: 'Human blood and breath, plants, volcanoes, forest fires',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.0001,
                y: -1.8512,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0,
                y: -0.6213,
                z: 0.0008,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.2812,
                y: 0.1681,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.2811,
                y: 0.1681,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.3282,
                y: 0.7891,
                z: -0.8979,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.3263,
                y: 0.7939,
                z: 0.8946,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.1351,
                y: -0.5149,
                z: 0.0029,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.1352,
                y: -0.515,
                z: 0.0029,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.3281,
                y: 0.7891,
                z: -0.8979,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.3263,
                y: 0.794,
                z: 0.8946,
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
                1,
                2,
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
        {
            atomIndexes: [
                3,
                8,
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
    ],
};

export default acetone;
