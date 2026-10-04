// cspell:words hypochlorous
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 24526. */
const chlorine: Molecule = {
    name: 'Chlorine',
    // cspell:disable-next-line
    pronunciation: 'klˈɔɹˌin',
    structureDescription: 'Two chlorine atoms joined by a single bond.',
    realLifeDescription:
        'It is a greenish yellow gas used to disinfect drinking water and swimming pools.',
    stats: {
        stateAtRoomTemperature: MatterState.Gas,
        meltingPointCelsius: -101.5,
        boilingPointCelsius: -34,
        densityGramsPerCubicCentimeter: 0.0029,
        waterSolubilityGramsPerLiter: 7,
        dipoleMomentDebye: 0,
        hazardPictograms: [
            GhsPictogram.Oxidizer,
            GhsPictogram.CompressedGas,
            GhsPictogram.AcuteToxicity,
            GhsPictogram.EnvironmentalHazard,
        ],
        yearDiscovered: 1774,
        smell: 'pungent, bleach-like',
        habitat: 'Factories, traces in volcanic gases, traces in sea spray',
        evolvesInto: [
            'hypochlorous-acid',
            'hydrogen-chloride',
        ],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: -1.0061,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: 1.0061,
                y: 0,
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
    ],
};

export default chlorine;
