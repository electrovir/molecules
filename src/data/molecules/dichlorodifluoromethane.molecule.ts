import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 6391. */
const dichlorodifluoromethane: Molecule = {
    name: 'Dichlorodifluoromethane',
    description:
        'A carbon atom bonded to two chlorine and two fluorine atoms. Known as Freon-12, it cooled refrigerators until it was banned for destroying the ozone layer.',
    stats: {
        stateAtRoomTemperature: MatterState.Gas,
        meltingPointCelsius: -158,
        boilingPointCelsius: -29.8,
        waterSolubilityGramsPerLiter: 0.28,
        logP: 2.16,
        dipoleMomentDebye: 0.51,
        hazardPictograms: [GhsPictogram.CompressedGas],
        yearDiscovered: 1930,
        smell: 'nearly odorless, ether-like',
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: -1.4594,
                y: -0.9208,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: 1.4592,
                y: -0.921,
                z: -0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: 0.0002,
                y: 0.8843,
                z: 1.0887,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: 0,
                y: 0.8847,
                z: -1.0884,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0,
                y: 0.0728,
                z: 0,
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

export default dichlorodifluoromethane;
