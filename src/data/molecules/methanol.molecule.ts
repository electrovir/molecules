import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 887. */
const methanol: Molecule = {
    name: 'Methanol',
    description:
        'The smallest alcohol: a carbon atom with three hydrogens and an oxygen-hydrogen group. It is a fuel and solvent, and is poisonous to drink.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: -97.6,
        boilingPointCelsius: 64.7,
        densityGramsPerCubicCentimeter: 0.792,
        isWaterMiscible: true,
        logP: -0.77,
        dipoleMomentDebye: 1.69,
        oralRatLethalDoseMilligramsPerKilogram: 5630,
        hazardPictograms: [
            GhsPictogram.Flammable,
            GhsPictogram.AcuteToxicity,
            GhsPictogram.HealthHazard,
        ],
        yearDiscovered: 1661,
        smell: 'faint, alcoholic, pungent',
        habitat:
            'Fruit pectin breakdown, plants, microbes, volcanic gases, and star-forming regions',
        evolvesInto: ['formaldehyde'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.9229,
                y: 0.576,
                z: 0.0007,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.3712,
                y: 0.0019,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.4989,
                y: -0.6123,
                z: 0.8948,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.4988,
                y: -0.6101,
                z: -0.8962,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.115,
                y: 0.8022,
                z: 0.0009,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.561,
                y: -0.1578,
                z: -0.0002,
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
                5,
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
    ],
};

export default methanol;
