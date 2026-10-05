// cspell:words sassolite
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** Idealized geometry from measured bond lengths and angles. PubChem has no 3D record for it. */
const boricAcid: Molecule = {
    name: 'Boric Acid',
    routeName: 'boric-acid',
    // cspell:disable-next-line
    pronunciation: 'bˈɔɹɪk ˈæsəd',
    structureDescription: 'A boron atom bonded to three OH groups in a flat triangle.',
    realLifeDescription:
        'It is a mild antiseptic in eyewash and a common powder for killing cockroaches.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 170.9,
        densityGramsPerCubicCentimeter: 1.435,
        waterSolubilityGramsPerLiter: 50,
        logP: 0.18,
        dipoleMomentDebye: 0,
        oralRatLethalDoseMilligramsPerKilogram: 3100,
        hazardPictograms: [GhsPictogram.HealthHazard],
        taste: 'faintly bitter',
        habitat: 'Natural waters, seawater, the mineral sassolite',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.B,
            position: {
                x: 0,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.37,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.685,
                y: 1.1865,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.685,
                y: -1.1865,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.749,
                y: 0.8929,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.6478,
                y: 1.0682,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.1012,
                y: -1.9611,
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
                4,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                5,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                6,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default boricAcid;
