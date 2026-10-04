import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 774. */
const histamine: Molecule = {
    name: 'Histamine',
    // cspell:disable-next-line
    pronunciation: 'hˈɪstəmˌin',
    structureDescription: 'A ring holding two nitrogens with a short chain ending in nitrogen.',
    realLifeDescription:
        'It causes the itching and sneezing of allergies, which is what antihistamines block. Your stomach also uses it as a signal to make acid.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 83.5,
        logP: -0.7,
        hazardPictograms: [
            GhsPictogram.AcuteToxicity,
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
        ],
        yearDiscovered: 1910,
        habitat: 'Mast cells, brain, bacteria, plants, venoms, rotting matter',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.7314,
                y: 0.8973,
                z: 0.0104,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 2.9722,
                y: 0.0266,
                z: -0.2842,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -2.7406,
                y: -1.0796,
                z: -0.0643,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.6499,
                y: 0.335,
                z: 0.4755,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.7907,
                y: -0.0397,
                z: 0.2337,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.5802,
                y: -0.3262,
                z: -0.542,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.4017,
                y: -1.2428,
                z: 0.1893,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.9061,
                y: 0.2204,
                z: -0.1661,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.7651,
                y: 1.4258,
                z: 0.4336,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.9205,
                y: 0.0243,
                z: 1.4928,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.3153,
                y: -0.0161,
                z: -1.5594,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.4838,
                y: -1.4171,
                z: -0.5056,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.6076,
                y: 1.901,
                z: -0.023,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.9738,
                y: -2.2254,
                z: 0.3234,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.8383,
                y: 0.7301,
                z: -0.3643,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.2253,
                y: -0.2539,
                z: 0.6626,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.0779,
                y: 1.0402,
                z: -0.3122,
            },
        },
    ],
    bonds: [
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
                7,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                12,
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
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                16,
            ],
            order: BondOrder.Single,
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
                9,
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
                5,
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
                6,
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

export default histamine;
