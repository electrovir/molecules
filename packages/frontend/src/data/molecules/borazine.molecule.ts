// cspell:words borazine
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** Idealized geometry from measured bond lengths and angles. PubChem has no 3D record for it. */
const borazine: Molecule = {
    name: 'Borazine',
    // cspell:disable-next-line
    pronunciation: 'bˈɔɹəzˌin',
    structureDescription:
        'A flat ring of alternating boron and nitrogen atoms, each holding one hydrogen.',
    realLifeDescription:
        'It has the same shape as benzene with no carbon at all, so it is nicknamed inorganic benzene.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: -58,
        boilingPointCelsius: 53,
        densityGramsPerCubicCentimeter: 0.81,
        hazardPictograms: [
            GhsPictogram.Flammable,
            GhsPictogram.Corrosive,
        ],
        yearDiscovered: 1926,
        smell: 'aromatic',
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.B,
            position: {
                x: 1.435,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0.7175,
                y: 1.2427,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.B,
            position: {
                x: -0.7175,
                y: 1.2427,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.435,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.B,
            position: {
                x: -0.7175,
                y: -1.2427,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0.7175,
                y: -1.2427,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.625,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.2225,
                y: 2.1174,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.3125,
                y: 2.2733,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.445,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.3125,
                y: -2.2733,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.2225,
                y: -2.1174,
                z: 0,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                1,
            ],
            order: BondOrder.Double,
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
                2,
                3,
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
                4,
                5,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                5,
                0,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
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
                3,
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
    ],
};

export default borazine;
