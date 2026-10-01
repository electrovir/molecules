import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 24408. */
const bromine: Molecule = {
    name: 'Bromine',
    description:
        'Two bromine atoms joined by a single bond. It is one of only two elements that are liquid at room temperature, a dark red liquid that gives off brown fumes.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: -7.2,
        boilingPointCelsius: 58.8,
        densityGramsPerCubicCentimeter: 3.1,
        waterSolubilityGramsPerLiter: 35.8,
        dipoleMomentDebye: 0,
        oralRatLethalDoseMilligramsPerKilogram: 2600,
        hazardPictograms: [
            GhsPictogram.Corrosive,
            GhsPictogram.AcuteToxicity,
            GhsPictogram.EnvironmentalHazard,
        ],
        yearDiscovered: 1825,
        smell: 'suffocating, bleach-like',
        habitat: 'Never free in nature; bromide salts in seawater, brines, and the Dead Sea',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.Br,
            position: {
                x: -1.146,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.Br,
            position: {
                x: 1.146,
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

export default bromine;
