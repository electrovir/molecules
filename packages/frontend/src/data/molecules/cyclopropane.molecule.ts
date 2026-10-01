import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 6351. */
const cyclopropane: Molecule = {
    name: 'Cyclopropane',
    description:
        'Three carbon atoms bent into a triangle. The bonds are squeezed far from their natural angle, which makes the ring strained and reactive. It was once used as an anesthetic.',
    stats: {
        stateAtRoomTemperature: MatterState.Gas,
        meltingPointCelsius: -127.4,
        boilingPointCelsius: -32.9,
        densityGramsPerCubicCentimeter: 0.00188,
        waterSolubilityGramsPerLiter: 0.502,
        logP: 1.72,
        dipoleMomentDebye: 0,
        hazardPictograms: [
            GhsPictogram.Flammable,
            GhsPictogram.CompressedGas,
        ],
        yearDiscovered: 1881,
        smell: 'sweet, petroleum-like',
        taste: 'pungent',
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.4679,
                y: 0.7291,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.8654,
                y: 0.0406,
                z: 0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.3976,
                y: -0.7697,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.7828,
                y: 1.2202,
                z: -0.9121,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.783,
                y: 1.2203,
                z: 0.912,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.4482,
                y: 0.0679,
                z: 0.9121,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.4483,
                y: 0.0679,
                z: -0.912,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.6652,
                y: -1.2882,
                z: -0.9121,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.6654,
                y: -1.288,
                z: 0.9121,
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
                3,
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
                1,
                2,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                5,
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
                2,
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
    ],
};

export default cyclopropane;
