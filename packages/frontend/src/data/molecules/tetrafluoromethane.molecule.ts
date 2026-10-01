// cspell:words tetrafluoromethane
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 6393. */
const tetrafluoromethane: Molecule = {
    name: 'Tetrafluoromethane',
    structureDescription: 'A carbon atom bonded to four fluorine atoms.',
    realLifeDescription:
        'It is one of the most stable molecules known and is used to etch computer chips. It is a strong greenhouse gas that lasts for tens of thousands of years in the air.',
    stats: {
        stateAtRoomTemperature: MatterState.Gas,
        meltingPointCelsius: -183.6,
        boilingPointCelsius: -127.8,
        densityGramsPerCubicCentimeter: 0.00372,
        waterSolubilityGramsPerLiter: 0.0188,
        logP: 1.18,
        dipoleMomentDebye: 0,
        hazardPictograms: [GhsPictogram.CompressedGas],
        yearDiscovered: 1890,
        habitat: 'Factories, traces from rocks and soils',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: -0.1019,
                y: -1.1128,
                z: -0.7459,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: -0.04,
                y: -0.3285,
                z: 1.3021,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: -1.0211,
                y: 0.8254,
                z: -0.2852,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: 1.163,
                y: 0.6159,
                z: -0.271,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0,
                y: 0,
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

export default tetrafluoromethane;
