import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

const hydrogenChloride: Molecule = {
    name: 'Hydrogen Chloride',
    description:
        'A hydrogen atom bonded to a chlorine atom. Dissolved in water it becomes hydrochloric acid, the same acid your stomach uses to digest food.',
    stats: {
        stateAtRoomTemperature: MatterState.Gas,
        meltingPointCelsius: -114.2,
        boilingPointCelsius: -85.1,
        densityGramsPerCubicCentimeter: 0.00149,
        waterSolubilityGramsPerLiter: 720,
        logP: 0.25,
        dipoleMomentDebye: 1.05,
        oralRatLethalDoseMilligramsPerKilogram: 470,
        hazardPictograms: [
            GhsPictogram.CompressedGas,
            GhsPictogram.Corrosive,
            GhsPictogram.AcuteToxicity,
        ],
        yearDiscovered: 1772,
        smell: 'pungent, sharp, burning',
        habitat: 'Volcanic gases, mammal stomach acid, and the atmosphere of Venus',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.3058,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: 0,
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

export default hydrogenChloride;
