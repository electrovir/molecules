import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 3776. */
const isopropylAlcohol: Molecule = {
    name: 'Isopropyl Alcohol',
    description:
        'Three carbon atoms with an oxygen-hydrogen group on the middle one. It is rubbing alcohol, used to clean wounds and electronics.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: -89.5,
        boilingPointCelsius: 82.3,
        densityGramsPerCubicCentimeter: 0.785,
        isWaterMiscible: true,
        logP: 0.05,
        dipoleMomentDebye: 1.66,
        oralRatLethalDoseMilligramsPerKilogram: 8150,
        hazardPictograms: [
            GhsPictogram.Flammable,
            GhsPictogram.Irritant,
        ],
        yearDiscovered: 1853,
        smell: 'pungent, like rubbing alcohol',
        taste: 'slightly bitter, burning',
        habitat: 'Made mostly in factories; also by spoilage bacteria, fungi, and yeast',
        evolvesInto: ['acetone'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.0001,
                y: 1.6339,
                z: 0.3497,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0,
                y: 0.2192,
                z: 0.5158,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.2601,
                y: -0.3584,
                z: -0.1104,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.2601,
                y: -0.3583,
                z: -0.1104,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.0001,
                y: 0.0155,
                z: 1.5916,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.3083,
                y: -1.4434,
                z: 0.0226,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.1507,
                y: 0.0897,
                z: 0.3429,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.3063,
                y: -0.1342,
                z: -1.1818,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.3085,
                y: -1.4433,
                z: 0.0226,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.1508,
                y: 0.09,
                z: 0.343,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.3064,
                y: -0.1341,
                z: -1.1818,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.0003,
                y: 1.8234,
                z: -0.6041,
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
                11,
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
        {
            atomIndexes: [
                2,
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
        {
            atomIndexes: [
                2,
                7,
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
                3,
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                10,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default isopropylAlcohol;
