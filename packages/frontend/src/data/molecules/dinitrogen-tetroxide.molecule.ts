// cspell:words dinitrogen
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 25352. */
const dinitrogenTetroxide: Molecule = {
    name: 'Dinitrogen Tetroxide',
    routeName: 'dinitrogen-tetroxide',
    // cspell:disable-next-line
    pronunciation: 'dˌInˈItɹəʤən tɛtɹˈɑksˌId',
    structureDescription:
        'Two nitrogen atoms bonded together, each holding two oxygens, in a flat shape.',
    realLifeDescription:
        'It was the oxidizer that burned with fuel to fly the Apollo spacecraft. It bursts into flame the moment it touches its fuel, so the engines needed no spark to start.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: -11.2,
        boilingPointCelsius: 21.2,
        densityGramsPerCubicCentimeter: 1.45,
        dipoleMomentDebye: 0,
        hazardPictograms: [
            GhsPictogram.Oxidizer,
            GhsPictogram.CompressedGas,
            GhsPictogram.Corrosive,
            GhsPictogram.AcuteToxicity,
        ],
        smell: 'sharp, unpleasant',
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.3085,
                y: 1.1031,
                z: 0.0005,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.3084,
                y: 1.1031,
                z: -0.0005,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.3085,
                y: -1.1032,
                z: -0.0007,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.3085,
                y: -1.1031,
                z: 0.0007,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -0.749,
                y: 0,
                z: 0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0.749,
                y: 0,
                z: -0.0003,
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
                1,
                5,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                4,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                3,
                5,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                4,
                5,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default dinitrogenTetroxide;
