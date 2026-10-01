// cspell:words photoresist
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 787. */
const hydroxylamine: Molecule = {
    name: 'Hydroxylamine',
    description:
        'A nitrogen holding two hydrogens, bonded to an oxygen holding one hydrogen. It is used to make nylon and to strip photoresist off computer chips.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 33,
        densityGramsPerCubicCentimeter: 1.21,
        logP: -1.5,
        dipoleMomentDebye: 0.59,
        hazardPictograms: [
            GhsPictogram.Corrosive,
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
            GhsPictogram.EnvironmentalHazard,
        ],
        yearDiscovered: 1865,
        smell: 'odorless',
        habitat: 'Ammonia-oxidizing bacteria; mostly made in factories',
        evolvesInto: ['nitrous-oxide'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.7247,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -0.7247,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.9138,
                y: -0.907,
                z: 0.423,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.9138,
                y: 0.7044,
                z: 0.711,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.8842,
                y: 0.1688,
                z: -0.9439,
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
                4,
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
    ],
};

export default hydroxylamine;
