// cspell:words trifluoride
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 24553. */
const nitrogenTrifluoride: Molecule = {
    name: 'Nitrogen Trifluoride',
    structureDescription: 'A nitrogen atom bonded to three fluorine atoms in a low pyramid.',
    realLifeDescription:
        'It cleans the machines that make computer screens and solar cells. It is a very powerful greenhouse gas, so factories try hard to keep it from escaping.',
    stats: {
        stateAtRoomTemperature: MatterState.Gas,
        meltingPointCelsius: -207.8,
        boilingPointCelsius: -129,
        densityGramsPerCubicCentimeter: 0.0029,
        waterSolubilityGramsPerLiter: 0.21,
        dipoleMomentDebye: 0.234,
        hazardPictograms: [
            GhsPictogram.Oxidizer,
            GhsPictogram.CompressedGas,
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
        ],
        yearDiscovered: 1903,
        smell: 'moldy',
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: -0.336,
                y: 1.258,
                z: 0.109,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: -0.9217,
                y: -0.9198,
                z: 0.1091,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: 1.2576,
                y: -0.3381,
                z: 0.1091,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0.0001,
                y: -0.0001,
                z: -0.3272,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                3,
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
                3,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default nitrogenTrifluoride;
