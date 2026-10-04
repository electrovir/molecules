// cspell:words pentachloride
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** Idealized geometry from measured bond lengths and angles. PubChem has no 3D record for it. */
const phosphorusPentachloride: Molecule = {
    name: 'Phosphorus Pentachloride',
    // cspell:disable-next-line
    pronunciation: 'fˈɑsfˌəɹəs pˌɛntəklˈɔɹˌId',
    structureDescription:
        'A phosphorus atom bonded to five chlorine atoms, three around its middle and one above and below.',
    realLifeDescription: 'Chemists use it to swap OH groups for chlorine atoms.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        sublimationPointCelsius: 160,
        densityGramsPerCubicCentimeter: 2.11,
        dipoleMomentDebye: 0,
        oralRatLethalDoseMilligramsPerKilogram: 660,
        hazardPictograms: [
            GhsPictogram.Corrosive,
            GhsPictogram.AcuteToxicity,
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
        ],
        yearDiscovered: 1808,
        smell: 'pungent, unpleasant',
        habitat: 'Made only in labs and factories',
        evolvesInto: [
            'phosphoric-acid',
            'hydrogen-chloride',
        ],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.P,
            position: {
                x: 0,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: 2.02,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: -1.01,
                y: 1.7494,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: -1.01,
                y: -1.7494,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: 0,
                y: 0,
                z: 2.14,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: 0,
                y: 0,
                z: -2.14,
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
                0,
                4,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                5,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default phosphorusPentachloride;
