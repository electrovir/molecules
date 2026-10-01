import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

const oxygenBondLength = 1.2075;

const oxygen: Molecule = {
    name: 'Oxygen',
    description:
        'Two oxygen atoms joined by a double bond. It makes up about 21% of the air, and your cells use it to turn food into energy.',
    stats: {
        stateAtRoomTemperature: MatterState.Gas,
        meltingPointCelsius: -218.4,
        boilingPointCelsius: -183,
        densityGramsPerCubicCentimeter: 0.001429,
        waterSolubilityGramsPerLiter: 0.039,
        logP: 0.65,
        dipoleMomentDebye: 0,
        hazardPictograms: [
            GhsPictogram.Oxidizer,
            GhsPictogram.CompressedGas,
        ],
        smell: 'odorless',
        taste: 'tasteless',
        habitat: "21% of Earth's air, released by plant photosynthesis",
        evolvesInto: ['ozone'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -oxygenBondLength / 2,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: oxygenBondLength / 2,
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
    ],
};

export default oxygen;
