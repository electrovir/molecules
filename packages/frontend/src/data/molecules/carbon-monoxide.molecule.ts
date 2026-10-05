import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';
import carbonDioxide from './carbon-dioxide.molecule.js';
import phosgene from './phosgene.molecule.js';

const carbonMonoxide: Molecule = {
    name: 'Carbon Monoxide',
    routeName: 'carbon-monoxide',
    // cspell:disable-next-line
    pronunciation: 'kˈɑɹbən mənˈɑksˌId',
    structureDescription: 'A carbon atom and an oxygen atom joined by a triple bond.',
    realLifeDescription:
        'It is colorless and odorless, and it is poisonous because it grabs onto the hemoglobin that should be carrying oxygen in your blood. Carbon monoxide detectors in homes beep to warn people when it builds up.',
    stats: {
        stateAtRoomTemperature: MatterState.Gas,
        meltingPointCelsius: -205,
        boilingPointCelsius: -191.5,
        densityGramsPerCubicCentimeter: 0.00125,
        waterSolubilityGramsPerLiter: 0.0276,
        dipoleMomentDebye: 0.11,
        hazardPictograms: [
            GhsPictogram.Flammable,
            GhsPictogram.CompressedGas,
            GhsPictogram.AcuteToxicity,
            GhsPictogram.HealthHazard,
        ],
        yearDiscovered: 1772,
        habitat: 'Volcanoes, wildfires, combustion, ocean microbes, small amounts in the body',
        evolvesInto: [
            carbonDioxide,
            phosgene,
        ],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.5285,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.5285,
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
            order: BondOrder.Triple,
        },
    ],
};

export default carbonMonoxide;
