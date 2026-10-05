import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 8376. */
const tnt: Molecule = {
    name: 'TNT',
    routeName: 'tnt',
    // cspell:disable-next-line
    pronunciation: 'tˌi ˌɛn tˈi',
    structureDescription: 'Short for trinitrotoluene: a toluene ring holding three nitro groups.',
    realLifeDescription:
        'It is a stable explosive that only goes off with a detonator. It was first made in 1863 as a yellow dye.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 80.4,
        densityGramsPerCubicCentimeter: 1.654,
        waterSolubilityGramsPerLiter: 0.13,
        logP: 1.6,
        dipoleMomentDebye: 1.37,
        oralRatLethalDoseMilligramsPerKilogram: 795,
        hazardPictograms: [
            GhsPictogram.Explosive,
            GhsPictogram.HealthHazard,
            GhsPictogram.EnvironmentalHazard,
        ],
        yearDiscovered: 1863,
        habitat: 'Labs, factories, polluted ecosystems',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.2059,
                y: -3.5212,
                z: -0.0114,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.2513,
                y: 3.5063,
                z: -0.0072,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.1343,
                y: -2.4724,
                z: -0.0242,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.1659,
                y: 2.4326,
                z: -0.0202,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -3.9183,
                y: -1.0789,
                z: 0.0148,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -3.9045,
                y: 1.1163,
                z: 0.0164,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0.8809,
                y: -2.4652,
                z: -0.0158,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0.9125,
                y: 2.4414,
                z: -0.0128,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -3.3034,
                y: 0.0149,
                z: 0.0115,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.9064,
                y: -0.0119,
                z: -0.0154,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.2011,
                y: -1.2154,
                z: -0.0118,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.2166,
                y: 1.2006,
                z: -0.0102,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.8834,
                y: 0.0059,
                z: 0.0022,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.1937,
                y: -1.2064,
                z: -0.003,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.1783,
                y: 1.2094,
                z: -0.0015,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.4049,
                y: -0.0217,
                z: -0.0226,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.7473,
                y: -2.1425,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.7199,
                y: 2.1525,
                z: 0.0028,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.799,
                y: 0.22,
                z: -1.0151,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.7761,
                y: 0.6706,
                z: 0.7407,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.9942,
                y: -0.8349,
                z: 0.383,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                6,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                7,
            ],
            order: BondOrder.Single,
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
                3,
                7,
            ],
            order: BondOrder.Double,
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
                5,
                8,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                6,
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                12,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                10,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                9,
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                15,
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
                14,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                12,
                13,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                12,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                20,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default tnt;
