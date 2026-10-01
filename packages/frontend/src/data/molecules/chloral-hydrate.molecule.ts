import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 2707. */
const chloralHydrate: Molecule = {
    name: 'Chloral Hydrate',
    structureDescription: 'A carbon holding three chlorines next to a carbon with two OH groups.',
    realLifeDescription: 'It was one of the first sleeping pills.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 57,
        densityGramsPerCubicCentimeter: 1.91,
        waterSolubilityGramsPerLiter: 793,
        logP: 0.99,
        oralRatLethalDoseMilligramsPerKilogram: 410,
        hazardPictograms: [GhsPictogram.AcuteToxicity],
        yearDiscovered: 1832,
        smell: 'aromatic, penetrating, slightly acrid',
        taste: 'slightly bitter, caustic',
        habitat: 'Traces in chlorinated drinking water, labs, factories',
        evolvesInto: ['chloroform'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: -1.416,
                y: -1.4673,
                z: 0.572,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: -0.6398,
                y: 0.0461,
                z: -1.7913,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: -1.4294,
                y: 1.4355,
                z: 0.6414,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.5921,
                y: 1.1591,
                z: 0.046,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.5653,
                y: -1.1753,
                z: 0.0442,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.8923,
                y: -0.0006,
                z: 0.4897,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.5645,
                y: 0.0025,
                z: -0.0022,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.9196,
                y: 0.0001,
                z: 1.5859,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.255,
                y: 1.3897,
                z: -0.8361,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.2752,
                y: -1.3587,
                z: 0.6827,
            },
        },
    ],
    bonds: [
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
                6,
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
                4,
                5,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                6,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                7,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default chloralHydrate;
