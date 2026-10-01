// cspell:words octasulfur ryugu
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 66348. */
const octasulfur: Molecule = {
    name: 'Octasulfur',
    structureDescription: 'Eight sulfur atoms in a ring folded like a crown.',
    realLifeDescription:
        'It is the most common form of sulfur, the yellow powder found around volcanoes. It burns with a blue flame.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 119,
        boilingPointCelsius: 444.6,
        densityGramsPerCubicCentimeter: 2.07,
        logP: 6.117,
        dipoleMomentDebye: 0,
        hazardPictograms: [
            GhsPictogram.Flammable,
            GhsPictogram.Irritant,
        ],
        habitat: 'Volcanic deposits, petroleum refining, asteroid Ryugu samples',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: 0.0238,
                y: 2.3163,
                z: -0.5082,
            },
        },
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: -1.6211,
                y: 1.6547,
                z: 0.508,
            },
        },
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: 1.6548,
                y: 1.6209,
                z: 0.5085,
            },
        },
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: -2.3163,
                y: 0.0237,
                z: -0.5082,
            },
        },
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: 2.3163,
                y: -0.0238,
                z: -0.5084,
            },
        },
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: -1.6546,
                y: -1.6208,
                z: 0.5086,
            },
        },
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: 1.6212,
                y: -1.6547,
                z: 0.508,
            },
        },
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: -0.0241,
                y: -2.3162,
                z: -0.5083,
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
                1,
                3,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
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
                4,
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
        {
            atomIndexes: [
                6,
                7,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default octasulfur;
