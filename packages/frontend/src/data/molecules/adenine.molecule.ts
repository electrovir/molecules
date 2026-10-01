import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 190. */
const adenine: Molecule = {
    name: 'Adenine',
    structureDescription:
        'A double ring of carbon and nitrogen and one of the four letters of DNA, where it pairs with thymine.',
    realLifeDescription: 'It is also part of ATP, the molecule cells use to carry energy.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 360,
        waterSolubilityGramsPerLiter: 1.03,
        logP: -0.09,
        oralRatLethalDoseMilligramsPerKilogram: 227,
        hazardPictograms: [GhsPictogram.AcuteToxicity],
        yearDiscovered: 1885,
        habitat: 'DNA, RNA, energy molecules in every living cell',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.4983,
                y: -0.6908,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.8945,
                y: 1.5028,
                z: 0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0.4314,
                y: 2.2105,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 2.0251,
                y: 0.3634,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 1.3196,
                y: -1.9279,
                z: -0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.2705,
                y: -0.0924,
                z: 0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.5429,
                y: 1.2691,
                z: 0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.0313,
                y: -0.5531,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.4392,
                y: 0.3049,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.6689,
                y: 1.6702,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.6828,
                y: -1.6853,
                z: -0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.4981,
                y: 0.089,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.4906,
                y: 2.3784,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.2851,
                y: -2.228,
                z: 0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.5744,
                y: -2.6109,
                z: 0.0002,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                5,
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
                0,
                10,
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
                1,
                8,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                2,
                6,
            ],
            order: BondOrder.Double,
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
                7,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                9,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                4,
                7,
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
        {
            atomIndexes: [
                5,
                6,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                7,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                8,
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                12,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default adenine;
