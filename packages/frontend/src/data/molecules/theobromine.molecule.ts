// cspell:words theobroma
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 5429. */
const theobromine: Molecule = {
    name: 'Theobromine',
    // cspell:disable-next-line
    pronunciation: 'θˌiəbɹˈOmin',
    structureDescription: 'A close cousin of caffeine, missing one carbon group.',
    realLifeDescription:
        'It is the main stimulant in chocolate, and is why chocolate is dangerous for dogs. Despite its name it has no bromine; it is named after the cacao tree, Theobroma, which means food of the gods.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 351,
        densityGramsPerCubicCentimeter: 1.522,
        waterSolubilityGramsPerLiter: 0.33,
        logP: -0.78,
        oralRatLethalDoseMilligramsPerKilogram: 950,
        hazardPictograms: [
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
        ],
        yearDiscovered: 1841,
        taste: 'bitter',
        habitat: 'Cacao beans, chocolate, tea, kola nuts',
        evolvesInto: ['caffeine'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.3651,
                y: 2.5516,
                z: 0.0007,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -3.1667,
                y: 1.6512,
                z: 0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 1.773,
                y: -0.4508,
                z: -0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.7257,
                y: -0.1916,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -0.9002,
                y: 2.061,
                z: -0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0.0648,
                y: -1.8867,
                z: 0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.6379,
                y: 0.3061,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.3939,
                y: -0.5974,
                z: 0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.4609,
                y: 1.7219,
                z: -0.0005,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.0209,
                y: 1.1927,
                z: -0.0004,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.3766,
                y: -1.7641,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.7984,
                y: -1.1762,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.1383,
                y: 0.0162,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.0828,
                y: -2.5832,
                z: 0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.1112,
                y: 3.0553,
                z: 0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.7089,
                y: -1.7993,
                z: 0.895,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.7082,
                y: -1.8003,
                z: -0.8943,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.7808,
                y: -0.6971,
                z: -0.0007,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.299,
                y: 0.6159,
                z: -0.8993,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.2989,
                y: 0.6153,
                z: 0.8995,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.8175,
                y: -0.8402,
                z: -0.0004,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                8,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                1,
                9,
            ],
            order: BondOrder.Double,
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
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                12,
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
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                9,
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
                7,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                10,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                6,
                7,
            ],
            order: BondOrder.Double,
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
                10,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                20,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default theobromine;
