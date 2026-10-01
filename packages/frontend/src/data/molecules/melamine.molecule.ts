// cspell:words countertops cyromazine
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 7955. */
const melamine: Molecule = {
    name: 'Melamine',
    description:
        'A ring of alternating carbon and nitrogen atoms with an amine group on each carbon. It makes the hard plastic in kitchen dishes and countertops.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 345,
        densityGramsPerCubicCentimeter: 1.573,
        waterSolubilityGramsPerLiter: 3.24,
        logP: -1.37,
        oralRatLethalDoseMilligramsPerKilogram: 3500,
        hazardPictograms: [],
        yearDiscovered: 1834,
        habitat: 'Made in factories; also a breakdown product of the pesticide cyromazine',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0.3546,
                y: -1.3392,
                z: 0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0.9824,
                y: 0.9768,
                z: 0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.3371,
                y: 0.3625,
                z: 0.0005,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 2.6132,
                y: -0.7083,
                z: -0.0005,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.92,
                y: -1.9088,
                z: -0.0007,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -0.6931,
                y: 2.6171,
                z: -0.0006,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.2506,
                y: -0.3389,
                z: 0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.9189,
                y: -0.9135,
                z: 0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.3318,
                y: 1.2525,
                z: 0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.3232,
                y: 0.0109,
                z: -0.0011,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.8628,
                y: -1.6877,
                z: -0.0011,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.8929,
                y: -1.6352,
                z: -0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.6522,
                y: -2.8832,
                z: -0.0004,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.0302,
                y: 3.3229,
                z: -0.0006,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.6709,
                y: 2.8724,
                z: -0.0003,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                6,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                0,
                7,
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
                7,
            ],
            order: BondOrder.Double,
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
                6,
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
                4,
                7,
            ],
            order: BondOrder.Single,
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
                4,
                12,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                14,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default melamine;
