import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

const ozone: Molecule = {
    name: 'Ozone',
    structureDescription: 'Three oxygen atoms in a bent chain.',
    realLifeDescription:
        'High in the atmosphere it shields the Earth from ultraviolet light, but at ground level it is an irritating pollutant. It gives the air its fresh smell after a thunderstorm.',
    stats: {
        stateAtRoomTemperature: MatterState.Gas,
        meltingPointCelsius: -193,
        boilingPointCelsius: -111.9,
        densityGramsPerCubicCentimeter: 0.002144,
        dipoleMomentDebye: 0.53,
        hazardPictograms: [
            GhsPictogram.Oxidizer,
            GhsPictogram.AcuteToxicity,
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
            GhsPictogram.EnvironmentalHazard,
        ],
        yearDiscovered: 1839,
        smell: 'pungent, chlorine-like',
        habitat: 'The upper-atmosphere ozone layer, lightning, sunlight on oxygen',
        evolvesInto: ['oxygen'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.095,
                y: -0.4943,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.1489,
                y: 0.2152,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.054,
                y: 0.2791,
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
            order: BondOrder.Double,
        },
    ],
};

export default ozone;
