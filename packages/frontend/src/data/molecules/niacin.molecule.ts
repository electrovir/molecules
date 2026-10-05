import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';
import nicotine from './nicotine.molecule.js';

/** 3D coordinates from PubChem CID 938. */
const niacin: Molecule = {
    name: 'Niacin',
    routeName: 'niacin',
    // cspell:disable-next-line
    pronunciation: 'nˈIəsᵊn',
    structureDescription: 'A pyridine ring with an acid group attached.',
    realLifeDescription:
        'It is vitamin B3, and large doses make your skin flush red. Not getting enough of it causes a disease called pellagra.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 237,
        densityGramsPerCubicCentimeter: 1.473,
        waterSolubilityGramsPerLiter: 18,
        logP: 0.36,
        oralRatLethalDoseMilligramsPerKilogram: 7000,
        hazardPictograms: [GhsPictogram.Irritant],
        yearDiscovered: 1867,
        taste: 'faintly sour',
        habitat: 'Plants, animals, meteorites',
        evolvesInto: [nicotine],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.2827,
                y: -1.2029,
                z: -0.0007,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.4704,
                y: 1.0624,
                z: 0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 1.757,
                y: -1.2165,
                z: 0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.3036,
                y: 0.0481,
                z: 0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.4175,
                y: 1.2369,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.4071,
                y: -1.1414,
                z: 0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.8075,
                y: 1.2006,
                z: -0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.4237,
                y: -0.0404,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.756,
                y: 0.0531,
                z: 0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.0859,
                y: 2.1999,
                z: -0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.0752,
                y: -2.1137,
                z: 0.0006,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.3902,
                y: 2.1147,
                z: -0.0006,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.5056,
                y: -0.1232,
                z: -0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.2636,
                y: -1.187,
                z: -0.0011,
            },
        },
    ],
    bonds: [
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
                13,
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
                5,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                7,
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
                8,
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
                4,
                9,
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
                7,
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
                12,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default niacin;
