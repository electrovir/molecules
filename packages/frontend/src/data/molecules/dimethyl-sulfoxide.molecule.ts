// cspell:words dimethyl sulfoxide
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 679. */
const dimethylSulfoxide: Molecule = {
    name: 'Dimethyl Sulfoxide',
    routeName: 'dimethyl-sulfoxide',
    // cspell:disable-next-line
    pronunciation: 'dˌImˈɛθɪl sʌlfˈɑksId',
    structureDescription: 'A sulfur atom holding an oxygen and two carbon groups.',
    realLifeDescription:
        'It dissolves an unusual range of things and passes through skin easily, carrying other molecules with it. Rubbing a little on skin can make a person taste garlic.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: 18.5,
        boilingPointCelsius: 189,
        densityGramsPerCubicCentimeter: 1.1,
        isWaterMiscible: true,
        logP: -1.35,
        dipoleMomentDebye: 3.96,
        oralRatLethalDoseMilligramsPerKilogram: 14_500,
        yearDiscovered: 1866,
        smell: 'slightly sulfurous, garlic-like',
        taste: 'slightly bitter, sweet aftertaste',
        habitat: 'Seawater phytoplankton, traces in vegetables, grains, milk, coffee, tea',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: -0.0001,
                y: 0.8042,
                z: 0.6812,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.0003,
                y: 2.0986,
                z: -0.0766,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.342,
                y: -0.2132,
                z: 0.0201,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.3419,
                y: -0.2134,
                z: 0.0201,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.2942,
                y: 0.254,
                z: 0.2817,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.2581,
                y: -0.281,
                z: -1.0672,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.2952,
                y: -1.2109,
                z: 0.463,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.295,
                y: -1.211,
                z: 0.4629,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.2581,
                y: -0.2811,
                z: -1.0671,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.2943,
                y: 0.2537,
                z: 0.2818,
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

export default dimethylSulfoxide;
