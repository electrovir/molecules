import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';
import creatine from './creatine.molecule.js';
import glyphosate from './glyphosate.molecule.js';

/** 3D coordinates from PubChem CID 750. */
const glycine: Molecule = {
    name: 'Glycine',
    routeName: 'glycine',
    // cspell:disable-next-line
    pronunciation: 'ɡlˈIsˌin',
    structureDescription: 'The simplest amino acid, with just a hydrogen as its side chain.',
    realLifeDescription:
        'It is one of the building blocks of every protein, and makes up about a third of collagen. It has even been found in comet dust brought back to Earth by a spacecraft.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 233,
        densityGramsPerCubicCentimeter: 1.161,
        waterSolubilityGramsPerLiter: 249,
        logP: -3.21,
        oralRatLethalDoseMilligramsPerKilogram: 7930,
        yearDiscovered: 1820,
        taste: 'sweet',
        habitat: 'Proteins like gelatin and silk, sugarcane, comets, meteorites',
        evolvesInto: [
            creatine,
            glyphosate,
        ],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.9643,
                y: 0.338,
                z: -0.004,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.6376,
                y: -1.5063,
                z: 0.0178,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 1.6349,
                y: -0.0959,
                z: -0.0108,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.3989,
                y: 0.6698,
                z: 0.0035,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.7602,
                y: -0.2879,
                z: 0.0199,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.3404,
                y: 1.2943,
                z: -0.8921,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.3613,
                y: 1.2986,
                z: 0.8971,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.6572,
                y: -0.7064,
                z: -0.8266,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.6781,
                y: -0.7032,
                z: 0.8066,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.7087,
                y: -0.3009,
                z: -0.0114,
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
                0,
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                4,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                2,
                3,
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
                2,
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                4,
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
                6,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default glycine;
