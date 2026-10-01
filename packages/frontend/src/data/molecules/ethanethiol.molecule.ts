// cspell:words ethanethiol
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 6343. */
const ethanethiol: Molecule = {
    name: 'Ethanethiol',
    structureDescription: 'An ethyl group bonded to a sulfur with a hydrogen.',
    realLifeDescription:
        'It is added to natural gas, which has no smell on its own, so you can smell a leak. Noses can catch it even when there is only a tiny trace in the air.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: -147.9,
        boilingPointCelsius: 35,
        densityGramsPerCubicCentimeter: 0.8315,
        waterSolubilityGramsPerLiter: 6.8,
        logP: 1.5,
        dipoleMomentDebye: 1.58,
        oralRatLethalDoseMilligramsPerKilogram: 682,
        hazardPictograms: [
            GhsPictogram.Flammable,
            GhsPictogram.Irritant,
            GhsPictogram.EnvironmentalHazard,
        ],
        yearDiscovered: 1834,
        smell: 'skunk-like, rotten cabbage, garlic',
        habitat: 'Petroleum, sour natural gas, cabbage',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: 1.4415,
                y: -0.2624,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.142,
                y: 0.6214,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.2995,
                y: -0.359,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.1882,
                y: 1.2622,
                z: 0.8857,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.1882,
                y: 1.2622,
                z: -0.8857,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.2851,
                y: -0.9984,
                z: -0.8892,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.2851,
                y: -0.9984,
                z: 0.8893,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.2492,
                y: 0.1861,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.2236,
                y: 0.8269,
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
                8,
            ],
            order: BondOrder.Single,
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
                1,
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
                2,
                7,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default ethanethiol;
