import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 14917. */
const hydrogenFluoride: Molecule = {
    name: 'Hydrogen Fluoride',
    structureDescription: 'A hydrogen atom bonded to a fluorine atom.',
    realLifeDescription:
        'Dissolved in water it becomes an acid strong enough to etch glass. Factories use it to make Teflon, the slippery coating on nonstick pans.',
    stats: {
        stateAtRoomTemperature: MatterState.Gas,
        meltingPointCelsius: -83.6,
        boilingPointCelsius: 19.5,
        densityGramsPerCubicCentimeter: 0.00115,
        isWaterMiscible: true,
        dipoleMomentDebye: 1.83,
        oralRatLethalDoseMilligramsPerKilogram: 17,
        hazardPictograms: [
            GhsPictogram.Corrosive,
            GhsPictogram.AcuteToxicity,
        ],
        yearDiscovered: 1771,
        smell: 'strong, pungent, irritating',
        habitat: 'Volcanic gases, factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: 0.4696,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.4696,
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

export default hydrogenFluoride;
