// cspell:words aminobutyric gaba glutamic
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 119. */
const gaba: Molecule = {
    name: 'GABA',
    routeName: 'gaba',
    // cspell:disable-next-line
    pronunciation: 'ɡˈæbə',
    structureDescription:
        'Short for gamma-aminobutyric acid, a four-carbon chain with a nitrogen group on one end and an acid group on the other.',
    realLifeDescription:
        'It is the brain\'s main "slow down" signal. Your brain makes it from glutamic acid, which is its main "speed up" signal.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 203.7,
        densityGramsPerCubicCentimeter: 1.11,
        waterSolubilityGramsPerLiter: 1300,
        logP: -3.17,
        yearDiscovered: 1883,
        habitat: 'Brain and spinal cord neurons, plants, microbes',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -3.3007,
                y: 0.3444,
                z: 0.0488,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.099,
                y: -1.5791,
                z: -0.0735,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 2.8212,
                y: -0.2305,
                z: 0.0132,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.3703,
                y: -0.2871,
                z: 0.0114,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.9197,
                y: 0.5271,
                z: -0.015,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.619,
                y: 0.5952,
                z: -0.017,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.1419,
                y: -0.357,
                z: -0.009,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.3824,
                y: -0.9172,
                z: 0.9109,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.3861,
                y: -0.9715,
                z: -0.8472,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.953,
                y: 1.1461,
                z: -0.9182,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.9638,
                y: 1.1777,
                z: 0.8652,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.6292,
                y: 1.2119,
                z: -0.922,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.6266,
                y: 1.2723,
                z: 0.8438,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.8158,
                y: -0.872,
                z: -0.779,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.8133,
                y: -0.8164,
                z: 0.8474,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.0857,
                y: -0.2438,
                z: 0.04,
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
                0,
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                6,
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
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                14,
            ],
            order: BondOrder.Single,
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
                4,
                6,
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
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
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
    ],
};

export default gaba;
