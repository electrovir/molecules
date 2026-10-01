// cspell:words sulfonic
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 1123. */
const taurine: Molecule = {
    name: 'Taurine',
    description:
        'A two-carbon chain with an amine group on one end and a sulfonic acid group on the other. It is added to energy drinks and is found in meat and fish.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 305,
        densityGramsPerCubicCentimeter: 1.7,
        waterSolubilityGramsPerLiter: 94.9,
        hazardPictograms: [GhsPictogram.Irritant],
        yearDiscovered: 1827,
        smell: 'odorless',
        taste: 'slightly acidic',
        habitat: 'Animal tissues, bile, and algae; made in the liver from cysteine',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: 1.0051,
                y: -0.1135,
                z: 0.0174,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.8821,
                y: 1.2404,
                z: -0.2242,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.1465,
                y: -0.9745,
                z: -1.1426,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.2613,
                y: -0.6011,
                z: 1.3605,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -3.0095,
                y: 0.219,
                z: -0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.5919,
                y: 0.6381,
                z: -0.0192,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.6936,
                y: -0.4084,
                z: 0.0082,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.6598,
                y: 1.3111,
                z: 0.842,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.6527,
                y: 1.2314,
                z: -0.9381,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.6083,
                y: -1.0765,
                z: -0.856,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.6019,
                y: -1.03,
                z: 0.9055,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.7281,
                y: -0.5027,
                z: -0.0366,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.1192,
                y: 0.7747,
                z: -0.8476,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.8365,
                y: 1.6189,
                z: -1.1335,
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
                3,
            ],
            order: BondOrder.Double,
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
                13,
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
                6,
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
                8,
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
                6,
                10,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default taurine;
