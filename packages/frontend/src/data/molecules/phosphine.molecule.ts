import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 24404. */
const phosphine: Molecule = {
    name: 'Phosphine',
    // cspell:disable-next-line
    pronunciation: 'fˈɑsfˌin',
    structureDescription: 'A phosphorus atom with three hydrogens, shaped like a short pyramid.',
    realLifeDescription: 'It is a toxic gas used to kill pests in stored grain.',
    stats: {
        stateAtRoomTemperature: MatterState.Gas,
        meltingPointCelsius: -133,
        boilingPointCelsius: -87.7,
        densityGramsPerCubicCentimeter: 0.00139,
        waterSolubilityGramsPerLiter: 0.31,
        dipoleMomentDebye: 0.58,
        oralRatLethalDoseMilligramsPerKilogram: 3.03,
        hazardPictograms: [
            GhsPictogram.Flammable,
            GhsPictogram.CompressedGas,
            GhsPictogram.Corrosive,
            GhsPictogram.AcuteToxicity,
            GhsPictogram.EnvironmentalHazard,
        ],
        yearDiscovered: 1783,
        smell: 'fishy or garlicky (impure)',
        habitat: "Decaying organic matter in soils and sludge, Jupiter's atmosphere",
        evolvesInto: ['phosphoric-acid'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.P,
            position: {
                x: 0,
                y: 0,
                z: -0.563,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.7926,
                y: 0.9003,
                z: 0.1876,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.1761,
                y: 0.2362,
                z: 0.1877,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.3834,
                y: -1.1366,
                z: 0.1877,
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
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                3,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default phosphine;
