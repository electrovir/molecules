import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 6374. */
const iodoform: Molecule = {
    name: 'Iodoform',
    routeName: 'iodoform',
    // cspell:disable-next-line
    pronunciation: 'ˌIˈOdəfˌɔɹm',
    structureDescription: 'A carbon atom bonded to three iodine atoms and one hydrogen.',
    realLifeDescription:
        'It is a yellow antiseptic with a strong smell, once used to dress wounds. Dentists still use it in some root canal pastes.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 119,
        boilingPointCelsius: 218,
        densityGramsPerCubicCentimeter: 4.008,
        waterSolubilityGramsPerLiter: 0.1,
        logP: 3.12,
        oralRatLethalDoseMilligramsPerKilogram: 355,
        hazardPictograms: [GhsPictogram.Irritant],
        yearDiscovered: 1822,
        smell: 'penetrating, sweetish, chloroform-like',
        taste: 'sweetish',
        habitat: "Angel's bonnet mushroom, labs",
    },
    atoms: [
        {
            element: ChemicalElementSymbol.I,
            position: {
                x: 1.8598,
                y: 0.6377,
                z: 0.1926,
            },
        },
        {
            element: ChemicalElementSymbol.I,
            position: {
                x: -0.3777,
                y: -1.9294,
                z: 0.1925,
            },
        },
        {
            element: ChemicalElementSymbol.I,
            position: {
                x: -1.4822,
                y: 1.2917,
                z: 0.1925,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.0001,
                y: 0,
                z: -0.5776,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.0001,
                y: 0.0001,
                z: -1.6715,
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
        {
            atomIndexes: [
                3,
                4,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default iodoform;
