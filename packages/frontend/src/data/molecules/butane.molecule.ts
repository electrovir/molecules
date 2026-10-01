import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 7843. */
const butane: Molecule = {
    name: 'Butane',
    description:
        'A chain of four carbon atoms. It is the fuel inside disposable lighters, where you can see it sloshing as a liquid.',
    stats: {
        stateAtRoomTemperature: MatterState.Gas,
        meltingPointCelsius: -138.3,
        boilingPointCelsius: -0.5,
        densityGramsPerCubicCentimeter: 0.00248,
        waterSolubilityGramsPerLiter: 0.061,
        logP: 2.89,
        hazardPictograms: [
            GhsPictogram.Flammable,
            GhsPictogram.CompressedGas,
        ],
        yearDiscovered: 1849,
        smell: 'faint, gasoline-like',
        habitat: 'Natural gas and crude oil',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.5482,
                y: 0.5318,
                z: 0.0083,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.5482,
                y: -0.5316,
                z: 0.0083,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.9328,
                y: -0.0958,
                z: -0.0059,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.9329,
                y: 0.0958,
                z: -0.0059,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.4392,
                y: 1.1796,
                z: -0.8694,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.4496,
                y: 1.1683,
                z: 0.8952,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.4496,
                y: -1.1683,
                z: 0.8952,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.4391,
                y: -1.1794,
                z: -0.8694,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.0752,
                y: -0.7124,
                z: -0.8991,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.0865,
                y: -0.7267,
                z: 0.8754,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.702,
                y: 0.6829,
                z: -0.0046,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.0752,
                y: 0.7124,
                z: -0.8991,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.7019,
                y: -0.683,
                z: -0.0047,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.0866,
                y: 0.7266,
                z: 0.8755,
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
                4,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                5,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                3,
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
                2,
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
        {
            atomIndexes: [
                3,
                13,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default butane;
