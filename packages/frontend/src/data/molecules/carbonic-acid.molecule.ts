import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 767. */
const carbonicAcid: Molecule = {
    name: 'Carbonic Acid',
    structureDescription: 'A carbon atom double bonded to one oxygen and holding two OH groups.',
    realLifeDescription:
        'It forms when carbon dioxide dissolves in water, which gives soda its sharp bite. It also helps keep your blood at just the right acidity.',
    stats: {
        stateAtRoomTemperature: MatterState.Gas,
        hazardPictograms: [GhsPictogram.Irritant],
        yearDiscovered: 1987,
        habitat: 'Water, blood, oceans',
        evolvesInto: [
            'carbon-dioxide',
            'water',
        ],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.6954,
                y: -1.1061,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.6949,
                y: 1.1064,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.3055,
                y: -0.0003,
                z: 0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.0847,
                y: 0,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.1635,
                y: -1.9304,
                z: 0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.1627,
                y: 1.9305,
                z: 0.0001,
            },
        },
    ],
    bonds: [
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
                3,
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
                2,
                3,
            ],
            order: BondOrder.Double,
        },
    ],
};

export default carbonicAcid;
