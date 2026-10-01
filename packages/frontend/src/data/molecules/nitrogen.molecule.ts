import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

const nitrogen: Molecule = {
    name: 'Nitrogen',
    structureDescription:
        'Two nitrogen atoms held together by a triple bond, one of the strongest bonds in chemistry.',
    realLifeDescription:
        'It makes up about 78% of the air and barely reacts with anything. Liquid nitrogen is so cold that it freezes flowers solid in seconds.',
    stats: {
        stateAtRoomTemperature: MatterState.Gas,
        meltingPointCelsius: -210,
        boilingPointCelsius: -195.8,
        densityGramsPerCubicCentimeter: 0.001251,
        waterSolubilityGramsPerLiter: 0.02,
        logP: 0.67,
        dipoleMomentDebye: 0,
        hazardPictograms: [GhsPictogram.CompressedGas],
        yearDiscovered: 1772,
        habitat: "Earth's air (78%), volcanic gases, mine gases",
        evolvesInto: ['ammonia'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -0.556,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0.556,
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

export default nitrogen;
