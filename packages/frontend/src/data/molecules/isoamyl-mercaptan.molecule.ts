// cspell:words isoamyl
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 10925. */
const isoamylMercaptan: Molecule = {
    name: 'Isoamyl Mercaptan',
    // cspell:disable-next-line
    pronunciation: 'ˌIsOˈæməl mɪɹkˈæptæn',
    structureDescription: 'A branched five-carbon chain ending in a sulfur with a hydrogen.',
    realLifeDescription:
        'It is one of the main stink molecules in skunk spray. Skunks can spray it accurately about three meters.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        boilingPointCelsius: 119.5,
        densityGramsPerCubicCentimeter: 0.835,
        logP: 2.67,
        hazardPictograms: [GhsPictogram.Irritant],
        smell: 'onion or glue',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: -2.9361,
                y: 0.0259,
                z: -0.0562,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.2031,
                y: 0.0077,
                z: 0.4531,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.3073,
                y: 0.045,
                z: 0.7588,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.5484,
                y: -1.2778,
                z: -0.3028,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.6658,
                y: 1.2209,
                z: -0.3554,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.1739,
                y: -0.0216,
                z: -0.4975,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.7391,
                y: 0.0054,
                z: 1.4104,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.5273,
                y: 0.9637,
                z: 1.3182,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.5509,
                y: -0.7948,
                z: 1.423,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.6363,
                y: -1.396,
                z: -0.3619,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.1714,
                y: -1.2749,
                z: -1.3303,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.1503,
                y: -2.1585,
                z: 0.2122,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.2494,
                y: 1.2289,
                z: -1.3675,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.7572,
                y: 1.22,
                z: -0.4506,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.3761,
                y: 2.1522,
                z: 0.1422,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.9781,
                y: 0.8209,
                z: -1.1658,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.0115,
                y: -0.9487,
                z: -1.0527,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.9218,
                y: 1.2417,
                z: 0.5099,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                5,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                17,
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
                3,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                4,
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
                5,
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
                3,
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
                4,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                16,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default isoamylMercaptan;
