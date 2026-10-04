import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

const acetylene: Molecule = {
    name: 'Acetylene',
    // cspell:disable-next-line
    pronunciation: 'əsˈɛtᵊlən',
    structureDescription:
        'Two carbon atoms joined by a triple bond, with a hydrogen on each end, all in a straight line.',
    realLifeDescription:
        'It burns hot enough to cut and weld steel. Before electric lights, miners wore lamps that made acetylene by dripping water onto rocks of calcium carbide.',
    stats: {
        stateAtRoomTemperature: MatterState.Gas,
        sublimationPointCelsius: -84,
        densityGramsPerCubicCentimeter: 0.00118,
        waterSolubilityGramsPerLiter: 1.2,
        logP: 0.37,
        dipoleMomentDebye: 0,
        hazardPictograms: [
            GhsPictogram.Flammable,
            GhsPictogram.CompressedGas,
        ],
        yearDiscovered: 1836,
        smell: 'faint, ethereal',
        habitat: 'Wood smoke, bacteria that feed on it, Titan',
        evolvesInto: ['acetaldehyde'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.6,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.6,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.665,
                y: 0,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.665,
                y: 0,
                z: 0.0001,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                1,
            ],
            order: BondOrder.Triple,
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
    ],
};

export default acetylene;
