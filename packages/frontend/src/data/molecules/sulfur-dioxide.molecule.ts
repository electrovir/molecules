import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 1119. */
const sulfurDioxide: Molecule = {
    name: 'Sulfur Dioxide',
    // cspell:disable-next-line
    pronunciation: 'sˈʌlfəɹ dIˈɑksˌId',
    structureDescription: 'A sulfur atom holding two oxygens in a bent shape.',
    realLifeDescription:
        'Volcanoes release it, it smells like a struck match, and it is added to dried fruit to keep them fresh.',
    stats: {
        stateAtRoomTemperature: MatterState.Gas,
        meltingPointCelsius: -75.5,
        boilingPointCelsius: -10,
        densityGramsPerCubicCentimeter: 0.00262,
        waterSolubilityGramsPerLiter: 94,
        dipoleMomentDebye: 1.63,
        hazardPictograms: [
            GhsPictogram.CompressedGas,
            GhsPictogram.Corrosive,
            GhsPictogram.AcuteToxicity,
        ],
        smell: 'pungent, like a struck match',
        taste: 'acidic',
        habitat: 'Volcanic gases, burning sulfur and fossil fuels, the atmosphere of Venus',
        evolvesInto: ['sulfur-trioxide'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: 0,
                y: -0.5774,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.3091,
                y: 0.2887,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.3091,
                y: 0.2887,
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

export default sulfurDioxide;
