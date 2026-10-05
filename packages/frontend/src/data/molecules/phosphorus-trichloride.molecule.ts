// cspell:words pentachloride
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';
import phosphorusPentachloride from './phosphorus-pentachloride.molecule.js';

/** 3D coordinates from PubChem CID 24387. */
const phosphorusTrichloride: Molecule = {
    name: 'Phosphorus Trichloride',
    routeName: 'phosphorus-trichloride',
    // cspell:disable-next-line
    pronunciation: 'fˈɑsfəɹəs tɹˌIklˈɔɹˌId',
    structureDescription: 'A phosphorus atom bonded to three chlorine atoms in a low pyramid.',
    realLifeDescription:
        'It is the starting point for making weed killers, flame retardants, and nerve gas antidotes. It fumes in damp air as it reacts with water to make hydrochloric acid.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: -93.6,
        boilingPointCelsius: 76.1,
        densityGramsPerCubicCentimeter: 1.574,
        dipoleMomentDebye: 0.56,
        hazardPictograms: [
            GhsPictogram.Corrosive,
            GhsPictogram.AcuteToxicity,
            GhsPictogram.HealthHazard,
        ],
        yearDiscovered: 1808,
        smell: 'pungent, like hydrochloric acid',
        habitat: 'Made only in labs and factories',
        evolvesInto: [phosphorusPentachloride],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: -0.9467,
                y: 1.5677,
                z: 0.257,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: -0.8841,
                y: -1.6037,
                z: 0.2571,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: 1.8312,
                y: 0.0361,
                z: 0.2568,
            },
        },
        {
            element: ChemicalElementSymbol.P,
            position: {
                x: -0.0004,
                y: -0.0002,
                z: -0.7709,
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

export default phosphorusTrichloride;
