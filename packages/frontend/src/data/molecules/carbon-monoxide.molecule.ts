import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

const carbonMonoxide: Molecule = {
    name: 'Carbon Monoxide',
    description:
        'A carbon atom and an oxygen atom joined by a triple bond. It is colorless and odorless, and it is poisonous because it grabs onto the hemoglobin that should be carrying oxygen in your blood.',
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
        smell: 'odorless',
        taste: 'tasteless',
        habitat:
            'Volcanoes, wildfires, combustion and ocean microbes; made in small amounts in the body',
        evolvesInto: ['carbon-dioxide'],
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
