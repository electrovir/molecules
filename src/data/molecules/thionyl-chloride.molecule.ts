// cspell:words thionyl
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 24386. */
const thionylChloride: Molecule = {
    name: 'Thionyl Chloride',
    description:
        'A sulfur atom holding one oxygen and two chlorine atoms in a pyramid. It is a harsh reagent chemists use to make medicines and lithium batteries.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: -104.5,
        boilingPointCelsius: 76,
        densityGramsPerCubicCentimeter: 1.638,
        dipoleMomentDebye: 1.45,
        hazardPictograms: [
            GhsPictogram.Corrosive,
            GhsPictogram.Irritant,
        ],
        yearDiscovered: 1849,
        smell: 'pungent, like sulfur dioxide',
        habitat: 'Made only in labs and factories',
        evolvesInto: [
            'sulfur-dioxide',
            'hydrogen-chloride',
        ],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: 1.5329,
                y: 0.8101,
                z: -0.1679,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: -1.532,
                y: 0.8116,
                z: -0.1678,
            },
        },
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: 0.0001,
                y: -0.2174,
                z: 0.6265,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.001,
                y: -1.4042,
                z: -0.2908,
            },
        },
    ],
    bonds: [
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
                2,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                3,
            ],
            order: BondOrder.Double,
        },
    ],
};

export default thionylChloride;
