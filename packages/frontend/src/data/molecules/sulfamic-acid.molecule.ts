// cspell:words descalers sulfamic
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 5987. */
const sulfamicAcid: Molecule = {
    name: 'Sulfamic Acid',
    routeName: 'sulfamic-acid',
    // cspell:disable-next-line
    pronunciation: 'sʌlfˈæmɪk ˈæsəd',
    structureDescription: 'A sulfur atom bonded to three oxygens and an amine group.',
    realLifeDescription:
        'It is the acid in many descalers that clear lime from coffee makers and toilets. It is a dry powder, which makes it safer to store and ship than liquid acids.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 205,
        densityGramsPerCubicCentimeter: 2.15,
        waterSolubilityGramsPerLiter: 213,
        logP: 0.1,
        hazardPictograms: [GhsPictogram.Irritant],
        habitat: 'Factories, human kidneys, liver',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: -0.0509,
                y: 0.0031,
                z: -0.1153,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.9255,
                y: -0.0275,
                z: 1.2607,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.2975,
                y: -1.2406,
                z: -0.8205,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.2944,
                y: 1.2768,
                z: -0.7657,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 1.5682,
                y: -0.0118,
                z: 0.4409,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.869,
                y: -0.8429,
                z: 0.966,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.286,
                y: 0.3187,
                z: -0.2166,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.7518,
                y: 0.7135,
                z: 1.8875,
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
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                0,
                3,
            ],
            order: BondOrder.Double,
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
                7,
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
                6,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default sulfamicAcid;
