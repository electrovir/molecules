import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 24816. */
const siliconTetrachloride: Molecule = {
    name: 'Silicon Tetrachloride',
    description:
        'A silicon atom bonded to four chlorine atoms at the corners of a tetrahedron. It is purified to make the ultra-pure silicon in computer chips and solar panels.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: -68.7,
        boilingPointCelsius: 57.6,
        densityGramsPerCubicCentimeter: 1.483,
        dipoleMomentDebye: 0,
        hazardPictograms: [
            GhsPictogram.Corrosive,
            GhsPictogram.Irritant,
        ],
        yearDiscovered: 1823,
        smell: 'suffocating, pungent',
        habitat: 'Made only in labs and factories',
        evolvesInto: ['hydrogen-chloride'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: 0.2563,
                y: -1.3559,
                z: 1.4872,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: 1.4504,
                y: 1.4142,
                z: 0.1169,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: -1.8192,
                y: 0.8785,
                z: 0.1915,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: 0.1127,
                y: -0.9372,
                z: -1.7957,
            },
        },
        {
            element: ChemicalElementSymbol.Si,
            position: {
                x: -0.0002,
                y: 0.0004,
                z: 0.0001,
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

export default siliconTetrachloride;
