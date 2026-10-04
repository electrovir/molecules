// cspell:words tonka
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 323. */
const coumarin: Molecule = {
    name: 'Coumarin',
    // cspell:disable-next-line
    pronunciation: 'kˈuməɹən',
    structureDescription: 'A benzene ring fused to a ring holding an oxygen and a ketone.',
    realLifeDescription:
        'It gives fresh-cut hay and tonka beans their sweet smell, and cassia cinnamon contains it too. It is also used to give perfumes a warm, sweet scent.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 71,
        boilingPointCelsius: 301.7,
        densityGramsPerCubicCentimeter: 0.935,
        waterSolubilityGramsPerLiter: 1.9,
        logP: 1.39,
        oralRatLethalDoseMilligramsPerKilogram: 293,
        hazardPictograms: [
            GhsPictogram.AcuteToxicity,
            GhsPictogram.Irritant,
        ],
        yearDiscovered: 1820,
        smell: 'sweet, vanilla-like, hay-like',
        taste: 'bitter, aromatic, burning',
        habitat: 'Tonka beans, sweet clover, woodruff, cassia, lavender, some fruits',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.0575,
                y: 1.1268,
                z: 0.0004,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -3.3191,
                y: 0.7644,
                z: -0.0007,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.4475,
                y: -0.7862,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.2469,
                y: 0.5916,
                z: 0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.7547,
                y: -1.278,
                z: -0.0004,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.711,
                y: -1.663,
                z: 0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.3138,
                y: 1.4878,
                z: 0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.8349,
                y: -0.3906,
                z: -0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.6145,
                y: 0.9888,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.9433,
                y: -1.1484,
                z: 0.0004,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.1815,
                y: 0.307,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.9479,
                y: -2.3478,
                z: -0.0005,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.5589,
                y: -2.7366,
                z: 0.0004,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.1412,
                y: 2.5596,
                z: 0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.8507,
                y: -0.7758,
                z: -0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.4587,
                y: 1.6723,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.8129,
                y: -1.7966,
                z: 0.0006,
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
                0,
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                10,
            ],
            order: BondOrder.Double,
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
                2,
                4,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                2,
                5,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                6,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                4,
                7,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                9,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                5,
                12,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                8,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                7,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                16,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default coumarin;
