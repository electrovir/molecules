import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 1135. */
const thymine: Molecule = {
    name: 'Thymine',
    structureDescription: 'A single ring of carbon and nitrogen.',
    realLifeDescription:
        'It is one of the four letters of DNA, where it pairs with adenine. It was first found in the thymus glands of calves, which gave it its name.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 316,
        densityGramsPerCubicCentimeter: 1.223,
        waterSolubilityGramsPerLiter: 3.82,
        logP: -0.62,
        yearDiscovered: 1893,
        habitat: 'DNA of all living cells, calf thymus',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.6376,
                y: 2.3189,
                z: -0.0013,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 3.3519,
                y: -0.0003,
                z: -0.0008,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 1.3639,
                y: 1.1715,
                z: 0.0009,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 1.3685,
                y: -1.1662,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.7344,
                y: -0.0562,
                z: 0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.0228,
                y: 1.2555,
                z: 0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.0008,
                y: -1.1751,
                z: 0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.2288,
                y: -0.0466,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.1205,
                y: -0.0022,
                z: 0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.4483,
                y: -2.1616,
                z: 0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.8777,
                y: 2.0482,
                z: 0.0006,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.848,
                y: -2.0616,
                z: -0.0005,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.608,
                y: 0.4679,
                z: -0.8889,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.6082,
                y: 0.4681,
                z: 0.8887,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.6431,
                y: -1.0604,
                z: 0.0001,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                5,
            ],
            order: BondOrder.Double,
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
                8,
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
                3,
                6,
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
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                5,
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
                7,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                9,
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
        {
            atomIndexes: [
                7,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                14,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default thymine;
