import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

const aspirin: Molecule = {
    name: 'Aspirin',
    // cspell:disable-next-line
    pronunciation: 'ˈæspəɹən',
    structureDescription: 'A benzene ring carrying an acid group and an acetyl group side by side.',
    realLifeDescription:
        'It relieves pain, fever and inflammation by blocking the enzymes that make pain and inflammation signals in the body. People chewed willow bark, which holds a similar chemical, for pain thousands of years before aspirin was made.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 135,
        densityGramsPerCubicCentimeter: 1.4,
        waterSolubilityGramsPerLiter: 3,
        logP: 1.19,
        oralRatLethalDoseMilligramsPerKilogram: 200,
        hazardPictograms: [
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
        ],
        yearDiscovered: 1853,
        taste: 'slightly bitter',
        habitat: 'Made only in labs and factories',
        evolvesInto: [
            'salicylic-acid',
            'acetic-acid',
        ],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.0857,
                y: 0.6088,
                z: 0.4403,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.7927,
                y: -0.5515,
                z: 0.1244,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.7288,
                y: 1.8464,
                z: 0.4133,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.1426,
                y: -0.4741,
                z: -0.2184,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.0787,
                y: 1.9238,
                z: 0.0706,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.7855,
                y: 0.7636,
                z: -0.2453,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.1409,
                y: -1.8536,
                z: 0.1477,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.1094,
                y: 0.6715,
                z: -0.3113,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.5305,
                y: 0.5996,
                z: 0.1635,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.1851,
                y: 2.7545,
                z: 0.6593,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.7247,
                y: -1.3605,
                z: -0.4564,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.5797,
                y: 2.8872,
                z: 0.0506,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.8374,
                y: 0.8238,
                z: -0.509,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.729,
                y: 1.4184,
                z: 0.8593,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.2045,
                y: 0.6969,
                z: -0.6924,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.7105,
                y: -0.3659,
                z: 0.6426,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.2555,
                y: -3.5916,
                z: -0.7337,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.2333,
                y: 0.554,
                z: 0.7792,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.6952,
                y: -2.7148,
                z: -0.7502,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.7958,
                y: -2.1843,
                z: 0.8685,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.7813,
                y: 0.8105,
                z: -1.4821,
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
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                0,
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                3,
            ],
            order: BondOrder.Double,
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
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                5,
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
                4,
                5,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                4,
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                12,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                19,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                7,
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                20,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                8,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                18,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default aspirin;
