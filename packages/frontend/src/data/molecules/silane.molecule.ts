// cspell:words silane
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 23953. */
const silane: Molecule = {
    name: 'Silane',
    structureDescription:
        'A silicon atom bonded to four hydrogens, like methane with silicon in place of carbon.',
    realLifeDescription: 'It catches fire on its own in air and is used to make computer chips.',
    stats: {
        stateAtRoomTemperature: MatterState.Gas,
        meltingPointCelsius: -185,
        boilingPointCelsius: -112,
        densityGramsPerCubicCentimeter: 0.001313,
        dipoleMomentDebye: 0,
        hazardPictograms: [
            GhsPictogram.Flammable,
            GhsPictogram.CompressedGas,
        ],
        yearDiscovered: 1857,
        smell: 'repulsive',
        habitat: 'Made only in labs and factories',
        evolvesInto: ['hydrogen'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.Si,
            position: {
                x: 0,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.0498,
                y: 0.773,
                z: 0.7111,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.5901,
                y: -1.2473,
                z: -0.549,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.0897,
                y: -0.3437,
                z: 0.9485,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.5502,
                y: 0.8179,
                z: -1.1106,
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
    ],
};

export default silane;
