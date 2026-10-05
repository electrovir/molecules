// cspell:words diethyl
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 3283. */
const diethylEther: Molecule = {
    name: 'Diethyl Ether',
    routeName: 'diethyl-ether',
    // cspell:disable-next-line
    pronunciation: 'dIˈɛθɪl ˈiθəɹ',
    structureDescription: 'An oxygen atom with a two-carbon chain on each side.',
    realLifeDescription:
        'It was one of the first surgical anesthetics. It was first shown off in a public surgery in Boston in 1846.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: -116.3,
        boilingPointCelsius: 34.6,
        densityGramsPerCubicCentimeter: 0.713,
        waterSolubilityGramsPerLiter: 60.4,
        logP: 0.89,
        dipoleMomentDebye: 1.15,
        oralRatLethalDoseMilligramsPerKilogram: 1210,
        hazardPictograms: [
            GhsPictogram.Flammable,
            GhsPictogram.Irritant,
        ],
        yearDiscovered: 1540,
        smell: 'sweet, pungent, ethereal',
        taste: 'burning, sweet',
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.0008,
                y: -0.3355,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.1748,
                y: 0.4628,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.1753,
                y: 0.4634,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.3873,
                y: -0.4434,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.3874,
                y: -0.4435,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.1906,
                y: 1.0997,
                z: -0.8916,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.1906,
                y: 1.0994,
                z: 0.8916,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.1908,
                y: 1.0998,
                z: 0.8918,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.1907,
                y: 1.0998,
                z: -0.8918,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.3119,
                y: 0.1405,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.3814,
                y: -1.0957,
                z: 0.8796,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.3815,
                y: -1.0956,
                z: -0.8796,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.3125,
                y: 0.1398,
                z: 0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.381,
                y: -1.0957,
                z: -0.8797,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.3811,
                y: -1.0958,
                z: 0.8795,
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
                5,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                6,
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
        {
            atomIndexes: [
                3,
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                12,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                14,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default diethylEther;
