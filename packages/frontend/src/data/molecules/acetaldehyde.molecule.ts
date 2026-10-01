import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 177. */
const acetaldehyde: Molecule = {
    name: 'Acetaldehyde',
    description:
        'Two carbon atoms with a double bonded oxygen on the end. It adds to the smell of ripe fruit, and it turns into acetic acid, the sour part of vinegar.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: -123.4,
        boilingPointCelsius: 20.2,
        densityGramsPerCubicCentimeter: 0.784,
        isWaterMiscible: true,
        logP: -0.34,
        dipoleMomentDebye: 2.7,
        oralRatLethalDoseMilligramsPerKilogram: 1300,
        hazardPictograms: [
            GhsPictogram.Flammable,
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
        ],
        yearDiscovered: 1774,
        smell: 'pungent, fruity',
        taste: 'tart',
        habitat: 'Ripe fruit, coffee, bread, and plants',
        evolvesInto: ['acetic-acid'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.5716,
                y: 0.9437,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.6501,
                y: 0.0296,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.8457,
                y: -0.0449,
                z: 0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.033,
                y: -0.4708,
                z: 0.8925,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.9736,
                y: 1.0733,
                z: 0.0011,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.0327,
                y: -0.4687,
                z: -0.8937,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.2722,
                y: -1.0622,
                z: -0.0001,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                2,
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
                5,
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
    ],
};

export default acetaldehyde;
