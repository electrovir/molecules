import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 6212. */
const chloroform: Molecule = {
    name: 'Chloroform',
    structureDescription: 'Methane with three hydrogens swapped for chlorines.',
    realLifeDescription: 'It was an early surgical anesthetic and is now a common lab solvent.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: -63.5,
        boilingPointCelsius: 61.2,
        densityGramsPerCubicCentimeter: 1.48,
        waterSolubilityGramsPerLiter: 8,
        logP: 1.97,
        dipoleMomentDebye: 1.04,
        oralRatLethalDoseMilligramsPerKilogram: 2180,
        hazardPictograms: [
            GhsPictogram.AcuteToxicity,
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
        ],
        yearDiscovered: 1830,
        smell: 'sweet, pleasant, ether-like',
        taste: 'sweet',
        habitat: 'Seaweeds, soil fungi, chlorinated tap water',
        evolvesInto: [
            'phosgene',
            'carbon-monoxide',
        ],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: 0.0512,
                y: -1.6808,
                z: 0.4417,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: -1.4813,
                y: 0.7962,
                z: 0.4416,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: 1.4302,
                y: 0.8848,
                z: 0.4415,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.0001,
                y: 0,
                z: -0.1159,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.0001,
                y: -0.0001,
                z: -1.2089,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                3,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                3,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                3,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                4,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default chloroform;
