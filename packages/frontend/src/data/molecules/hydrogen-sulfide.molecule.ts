import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 402. */
const hydrogenSulfide: Molecule = {
    name: 'Hydrogen Sulfide',
    structureDescription: 'A sulfur atom with two hydrogens, bent like water.',
    realLifeDescription:
        'It gives rotten eggs their smell. Volcanoes and hot springs give it off too.',
    stats: {
        stateAtRoomTemperature: MatterState.Gas,
        meltingPointCelsius: -85.5,
        boilingPointCelsius: -60.3,
        densityGramsPerCubicCentimeter: 0.00154,
        waterSolubilityGramsPerLiter: 3.98,
        dipoleMomentDebye: 0.97,
        hazardPictograms: [
            GhsPictogram.Flammable,
            GhsPictogram.CompressedGas,
            GhsPictogram.AcuteToxicity,
            GhsPictogram.EnvironmentalHazard,
        ],
        yearDiscovered: 1777,
        smell: 'rotten eggs',
        taste: 'sweetish',
        habitat: 'Volcanic gas, sulfur springs, natural gas, sewers, the human gut',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: 0,
                y: -0.6132,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.9758,
                y: 0.3066,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.9758,
                y: 0.3066,
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
    ],
};

export default hydrogenSulfide;
