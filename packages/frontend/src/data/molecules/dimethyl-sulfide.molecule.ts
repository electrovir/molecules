// cspell:words dimethyl sulfoxide
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 1068. */
const dimethylSulfide: Molecule = {
    name: 'Dimethyl Sulfide',
    structureDescription: 'A sulfur atom with a methyl group on each side.',
    realLifeDescription:
        'Ocean plankton make it, and it gives the seaside and cooked cabbage their smell. Seabirds follow its smell to find places full of food.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: -98.3,
        boilingPointCelsius: 37.3,
        densityGramsPerCubicCentimeter: 0.848,
        waterSolubilityGramsPerLiter: 22,
        logP: 0.84,
        dipoleMomentDebye: 1.55,
        oralRatLethalDoseMilligramsPerKilogram: 3300,
        hazardPictograms: [GhsPictogram.Flammable],
        smell: 'cabbage-like, unpleasant',
        habitat: 'Ocean plankton, bacteria, cabbage, garlic, tea, cheese',
        evolvesInto: ['dimethyl-sulfoxide'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: 0,
                y: -0.7864,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.3707,
                y: 0.3932,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.3707,
                y: 0.3932,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.3327,
                y: 1.0212,
                z: 0.8939,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.3171,
                y: -0.1541,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.3326,
                y: 1.0214,
                z: -0.8937,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.3327,
                y: 1.0213,
                z: 0.8939,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.3326,
                y: 1.0214,
                z: -0.8937,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.3171,
                y: -0.1541,
                z: -0.0001,
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
                2,
                7,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                8,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default dimethylSulfide;
