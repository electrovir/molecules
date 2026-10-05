// cspell:words carnitine trimethylamine
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 1146. */
const trimethylamine: Molecule = {
    name: 'Trimethylamine',
    routeName: 'trimethylamine',
    // cspell:disable-next-line
    pronunciation: 'tɹˌImˌɛθələmˈin',
    structureDescription: 'A nitrogen atom with three methyl groups.',
    realLifeDescription:
        'It is the smell of rotting fish, and lemon juice neutralizes it. Living fish use a related molecule to balance the salt in their bodies, and it breaks down into this one after the fish dies.',
    stats: {
        stateAtRoomTemperature: MatterState.Gas,
        meltingPointCelsius: -117.1,
        boilingPointCelsius: 2.9,
        waterSolubilityGramsPerLiter: 890,
        logP: 0.16,
        dipoleMomentDebye: 0.612,
        oralRatLethalDoseMilligramsPerKilogram: 500,
        hazardPictograms: [
            GhsPictogram.Flammable,
            GhsPictogram.CompressedGas,
            GhsPictogram.Corrosive,
            GhsPictogram.Irritant,
        ],
        smell: 'fishy, ammonia-like',
        taste: 'fishy, salty',
        habitat: 'Rotting fish, gut bacteria',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0,
                y: 0,
                z: 0.3474,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.5373,
                y: -1.2788,
                z: -0.1158,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.8388,
                y: 1.1047,
                z: -0.1158,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.3762,
                y: 0.1741,
                z: -0.1158,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.5537,
                y: -1.4294,
                z: 0.2649,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.0664,
                y: -2.1102,
                z: 0.265,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.5653,
                y: -1.3456,
                z: -1.2096,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.8607,
                y: 0.9976,
                z: 0.2649,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.8825,
                y: 1.1624,
                z: -1.2095,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.4611,
                y: 2.0603,
                z: 0.265,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.7943,
                y: 1.1125,
                z: 0.265,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.448,
                y: 0.1832,
                z: -1.2095,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.0148,
                y: -0.6309,
                z: 0.2649,
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
                1,
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
        {
            atomIndexes: [
                2,
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
                3,
                12,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default trimethylamine;
