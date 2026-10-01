import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

const ethanol: Molecule = {
    name: 'Ethanol',
    description:
        'Two carbon atoms in a chain with an OH group on the end. It burns as a clean fuel and kills germs in hand sanitizer.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: -114.1,
        boilingPointCelsius: 78.2,
        densityGramsPerCubicCentimeter: 0.789,
        isWaterMiscible: true,
        logP: -0.31,
        dipoleMomentDebye: 1.69,
        oralRatLethalDoseMilligramsPerKilogram: 5630,
        hazardPictograms: [
            GhsPictogram.Flammable,
            GhsPictogram.Irritant,
        ],
        smell: 'sharp, like hand sanitizer',
        taste: 'burning',
        habitat: 'Fermenting fruit, yeast, plants, human breath, and interstellar space',
        evolvesInto: [
            'acetaldehyde',
            'ethylene',
        ],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.0463,
                y: -0.5665,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.2175,
                y: 0.2668,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.0958,
                y: -1.212,
                z: 0.8819,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.0952,
                y: -1.1938,
                z: -0.8946,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.105,
                y: -0.372,
                z: -0.0177,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.2426,
                y: 0.9307,
                z: -0.8704,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.2616,
                y: 0.9052,
                z: 0.8886,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.1291,
                y: 0.8364,
                z: 0.8099,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.1712,
                y: 0.2997,
                z: 0,
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
                8,
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
                1,
                6,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                8,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default ethanol;
