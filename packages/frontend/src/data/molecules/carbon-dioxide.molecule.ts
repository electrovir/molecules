import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

const carbonDioxide: Molecule = {
    name: 'Carbon Dioxide',
    structureDescription: 'A carbon atom double-bonded to two oxygen atoms in a straight line.',
    realLifeDescription:
        'You breathe it out, plants take it in, and it traps heat in the atmosphere. Frozen solid, it is dry ice, which turns straight into gas without melting.',
    stats: {
        stateAtRoomTemperature: MatterState.Gas,
        sublimationPointCelsius: -78.5,
        densityGramsPerCubicCentimeter: 0.00198,
        waterSolubilityGramsPerLiter: 1.45,
        logP: 0.83,
        dipoleMomentDebye: 0,
        hazardPictograms: [GhsPictogram.CompressedGas],
        yearDiscovered: 1640,
        taste: 'faintly acidic',
        habitat:
            'Air, animal breath, volcanoes, fires, groundwater, seawater, the atmosphere of Venus',
        evolvesInto: ['carbonic-acid'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.197,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.197,
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
            order: BondOrder.Double,
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

export default carbonDioxide;
