// cspell:words salix
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 338. */
const salicylicAcid: Molecule = {
    name: 'Salicylic Acid',
    structureDescription:
        'A benzene ring holding an acid group and an oxygen-hydrogen group side by side.',
    realLifeDescription:
        'It comes from willow bark, treats acne, and is the starting point for aspirin. Its name comes from Salix, the Latin name for willow trees.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 158.6,
        densityGramsPerCubicCentimeter: 1.443,
        waterSolubilityGramsPerLiter: 2.24,
        logP: 2.26,
        dipoleMomentDebye: 2.65,
        oralRatLethalDoseMilligramsPerKilogram: 891,
        hazardPictograms: [
            GhsPictogram.Corrosive,
            GhsPictogram.Irritant,
        ],
        yearDiscovered: 1839,
        taste: 'sweetish, then acrid',
        habitat: 'Willow bark, wintergreen, fruits, vegetables, tea',
        evolvesInto: ['aspirin'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.1401,
                y: -2.3484,
                z: -0.0372,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.7877,
                y: 0.7456,
                z: -0.4298,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.5878,
                y: -1.2598,
                z: 0.6213,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.6272,
                y: -0.002,
                z: 0.0756,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.2853,
                y: -1.0538,
                z: -0.0063,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.1714,
                y: 1.316,
                z: 0.1045,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.6536,
                y: -0.7875,
                z: -0.0593,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.1969,
                y: 1.5821,
                z: 0.0514,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.1094,
                y: 0.5305,
                z: -0.0306,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.0598,
                y: -0.2578,
                z: 0.1308,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.8563,
                y: 2.1565,
                z: 0.1807,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.376,
                y: -1.5969,
                z: -0.1234,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.5523,
                y: 2.6082,
                z: 0.0767,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.1747,
                y: 0.7379,
                z: -0.0712,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.6331,
                y: -2.9357,
                z: -0.095,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.7511,
                y: 0.565,
                z: -0.3884,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                4,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                9,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                3,
                4,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                5,
            ],
            order: BondOrder.Double,
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
                4,
                6,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                5,
                7,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                8,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                7,
                12,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                13,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default salicylicAcid;
