// cspell:words trifluoride
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** Idealized geometry from measured bond lengths and angles. PubChem has no 3D record for it. */
const boronTrifluoride: Molecule = {
    name: 'Boron Trifluoride',
    routeName: 'boron-trifluoride',
    // cspell:disable-next-line
    pronunciation: 'bˈɔɹˌɑn tɹˌIflˈʊɹˌId',
    structureDescription: 'A boron atom bonded to three fluorine atoms in a flat triangle.',
    realLifeDescription:
        'Its boron is hungry for electrons, which makes it a strong helper for reactions that make plastics and fuels.',
    stats: {
        stateAtRoomTemperature: MatterState.Gas,
        meltingPointCelsius: -126.8,
        boilingPointCelsius: -100,
        densityGramsPerCubicCentimeter: 0.00277,
        dipoleMomentDebye: 0,
        hazardPictograms: [
            GhsPictogram.CompressedGas,
            GhsPictogram.Corrosive,
            GhsPictogram.AcuteToxicity,
            GhsPictogram.HealthHazard,
        ],
        smell: 'pungent, suffocating',
        habitat: 'Made only in labs and factories',
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
            element: ChemicalElementSymbol.F,
            position: {
                x: 1.307,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: -0.6535,
                y: 1.1319,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: -0.6535,
                y: -1.1319,
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
    ],
};

export default boronTrifluoride;
