import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 597. */
const cytosine: Molecule = {
    name: 'Cytosine',
    // cspell:disable-next-line
    pronunciation: 'sˈItəsˌin',
    structureDescription: 'A single ring of carbon and nitrogen.',
    realLifeDescription:
        'It is one of the four letters of DNA, where it pairs with guanine. It can slowly change into uracil by losing a nitrogen group, so cells constantly check their DNA for this mistake.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 322.5,
        densityGramsPerCubicCentimeter: 1.55,
        waterSolubilityGramsPerLiter: 8,
        logP: -1.73,
        hazardPictograms: [GhsPictogram.Irritant],
        yearDiscovered: 1894,
        habitat: 'DNA and RNA of all living things, meteorites',
        evolvesInto: ['uracil'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.1475,
                y: 2.1287,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0.1052,
                y: 1.1218,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -2.0682,
                y: 0.1433,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 2.1102,
                y: -0.1574,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.7072,
                y: 0.006,
                z: -0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.1177,
                y: -1.2,
                z: -0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.4976,
                y: 1.082,
                z: -0.0004,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.3544,
                y: -1.2054,
                z: 0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.3551,
                y: 2.0272,
                z: 0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.6534,
                y: -2.14,
                z: -0.0004,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.8217,
                y: -2.2032,
                z: 0.0005,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.6646,
                y: -0.6746,
                z: 0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.4704,
                y: 1.0718,
                z: 0.0004,
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
                1,
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                4,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                12,
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
                7,
            ],
            order: BondOrder.Double,
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
                7,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                10,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default cytosine;
