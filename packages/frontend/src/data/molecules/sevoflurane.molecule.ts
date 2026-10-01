// cspell:words sevoflurane
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 5206. */
const sevoflurane: Molecule = {
    name: 'Sevoflurane',
    structureDescription: 'Three carbons and an oxygen covered in seven fluorine atoms.',
    realLifeDescription:
        'It is the sweet-smelling gas most often used to put patients to sleep for surgery today. Unlike older anesthetic gases, it does not irritate the throat, so even children can breathe it in through a mask.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        boilingPointCelsius: 58.5,
        densityGramsPerCubicCentimeter: 1.52,
        logP: 2.4,
        hazardPictograms: [
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
        ],
        smell: 'sweet',
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: 1.2852,
                y: -1.7729,
                z: -0.3891,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: 0.0143,
                y: -1.3472,
                z: 1.3282,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: -0.8714,
                y: -2.0796,
                z: -0.527,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: -2.4368,
                y: 0.088,
                z: -0.5846,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: -1.5027,
                y: 2.0543,
                z: -0.432,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: -1.5295,
                y: 0.7172,
                z: 1.2925,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: 3.2025,
                y: 1.2778,
                z: 0.1765,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.9768,
                y: 0.9476,
                z: 0.0483,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.0791,
                y: 0.1569,
                z: -0.4888,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.0855,
                y: -1.2739,
                z: -0.0197,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.3951,
                y: 0.7639,
                z: -0.0508,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.2503,
                y: 0.468,
                z: -0.3535,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.0256,
                y: 0.1955,
                z: -1.5834,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.5213,
                y: -0.4742,
                z: 0.1077,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.3642,
                y: 0.4552,
                z: -1.4408,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                9,
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
                10,
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
                10,
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
                8,
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
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                10,
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
                11,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                14,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default sevoflurane;
