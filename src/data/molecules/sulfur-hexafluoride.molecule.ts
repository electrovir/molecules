// cspell:words hexafluoride
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** Idealized geometry from measured bond lengths and angles. PubChem has no 3D record for it. */
const sulfurHexafluoride: Molecule = {
    name: 'Sulfur Hexafluoride',
    description:
        'A sulfur atom bonded to six fluorine atoms at the corners of an octahedron. It is so heavy that breathing it makes your voice deep, and it insulates high-voltage power equipment.',
    stats: {
        stateAtRoomTemperature: MatterState.Gas,
        sublimationPointCelsius: -63.8,
        densityGramsPerCubicCentimeter: 0.00617,
        waterSolubilityGramsPerLiter: 0.031,
        logP: 1.68,
        dipoleMomentDebye: 0,
        hazardPictograms: [
            GhsPictogram.CompressedGas,
            GhsPictogram.Irritant,
        ],
        yearDiscovered: 1901,
        smell: 'odorless',
        taste: 'tasteless',
        habitat: 'Mostly industrial; traces in fluorite, granite, and volcanic hot springs',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: 0,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: 1.561,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: -1.561,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: 0,
                y: 1.561,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: 0,
                y: -1.561,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: 0,
                y: 0,
                z: 1.561,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: 0,
                y: 0,
                z: -1.561,
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
                0,
                6,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default sulfurHexafluoride;
