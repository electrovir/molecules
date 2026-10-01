import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

const nitrogen: Molecule = {
    name: 'Nitrogen',
    description:
        'Two nitrogen atoms held together by a triple bond, one of the strongest bonds in chemistry. It makes up about 78% of the air and barely reacts with anything.',
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
        smell: 'odorless',
        taste: 'tasteless',
        habitat: "Makes up 78% of Earth's air; also in volcanic and mine gases",
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
