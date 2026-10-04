import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

const ammonia: Molecule = {
    name: 'Ammonia',
    // cspell:disable-next-line
    pronunciation: 'ʌmˈOniə',
    structureDescription: 'A nitrogen atom bonded to three hydrogen atoms in a squat pyramid.',
    realLifeDescription:
        'It is the sharp smell in some cleaning products and the starting point for most fertilizer. Factories make it by pulling nitrogen out of the air, which helps grow food for billions of people.',
    stats: {
        stateAtRoomTemperature: MatterState.Gas,
        meltingPointCelsius: -77.7,
        boilingPointCelsius: -33.3,
        densityGramsPerCubicCentimeter: 0.00077,
        waterSolubilityGramsPerLiter: 530,
        dipoleMomentDebye: 1.47,
        oralRatLethalDoseMilligramsPerKilogram: 350,
        hazardPictograms: [
            GhsPictogram.CompressedGas,
            GhsPictogram.Corrosive,
            GhsPictogram.AcuteToxicity,
            GhsPictogram.Irritant,
            GhsPictogram.EnvironmentalHazard,
        ],
        yearDiscovered: 1756,
        smell: 'pungent, suffocating',
        habitat: 'Animal waste, decaying matter, the atmosphere, giant planets, interstellar space',
        evolvesInto: ['urea'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.4417,
                y: 0.2906,
                z: 0.8711,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.7256,
                y: 0.6896,
                z: -0.1907,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.4875,
                y: -0.8701,
                z: 0.2089,
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

export default ammonia;
