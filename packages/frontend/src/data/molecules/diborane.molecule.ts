// cspell:words diborane
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';
import borazine from './borazine.molecule.js';

/** Idealized geometry from measured bond lengths and angles. PubChem has no 3D record for it. */
const diborane: Molecule = {
    name: 'Diborane',
    routeName: 'diborane',
    // cspell:disable-next-line
    pronunciation: 'dIbˈɔɹˌAn',
    structureDescription:
        'Two boron atoms held together by two hydrogens that bridge between them, with two more hydrogens on each boron.',
    realLifeDescription:
        'Its bridging hydrogens each bond to two atoms at once, and it was tested as a rocket fuel.',
    stats: {
        stateAtRoomTemperature: MatterState.Gas,
        meltingPointCelsius: -164.9,
        boilingPointCelsius: -92.5,
        densityGramsPerCubicCentimeter: 0.00113,
        dipoleMomentDebye: 0,
        smell: 'repulsive, sweet',
        habitat: 'Made only in labs and factories',
        evolvesInto: [
            borazine,
        ],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.B,
            position: {
                x: 0.885,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.B,
            position: {
                x: -0.885,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0,
                y: 0.99,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0,
                y: -0.99,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.4619,
                y: 0,
                z: 1.0408,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.4619,
                y: 0,
                z: -1.0408,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.4619,
                y: 0,
                z: 1.0408,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.4619,
                y: 0,
                z: -1.0408,
            },
        },
    ],
    bonds: [
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
                0,
                4,
            ],
            order: BondOrder.Single,
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
    ],
};

export default diborane;
