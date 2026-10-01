// cspell:words asparagopsis
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 5943. */
const carbonTetrachloride: Molecule = {
    name: 'Carbon Tetrachloride',
    description:
        'A carbon atom with four chlorines pointing to the corners of a tetrahedron. It was once used in fire extinguishers and dry cleaning until it was found to damage the liver.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: -22.6,
        boilingPointCelsius: 76.8,
        densityGramsPerCubicCentimeter: 1.59,
        waterSolubilityGramsPerLiter: 0.8,
        logP: 2.64,
        dipoleMomentDebye: 0,
        oralRatLethalDoseMilligramsPerKilogram: 2350,
        hazardPictograms: [
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
        ],
        yearDiscovered: 1839,
        smell: 'sweet, ether-like',
        habitat: 'Oceans, red algae (Asparagopsis) and volcanic gases',
        evolvesInto: ['chloroform'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: 0.6637,
                y: 1.168,
                z: -1.1704,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: 1.3372,
                y: -0.8776,
                z: 0.7855,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: -1.0537,
                y: -1.159,
                z: -0.8495,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: -0.9472,
                y: 0.8687,
                z: 1.2339,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0,
                y: -0.0002,
                z: 0.0004,
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
                1,
                4,
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
                4,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default carbonTetrachloride;
