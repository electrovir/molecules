import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 3036. */
const ddt: Molecule = {
    name: 'DDT',
    description:
        'Two benzene rings, each with a chlorine, attached to a carbon next to a carbon holding three chlorines. It was a powerful insecticide until it was banned for harming birds.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 108.5,
        boilingPointCelsius: 260,
        densityGramsPerCubicCentimeter: 0.99,
        waterSolubilityGramsPerLiter: 0.000025,
        logP: 6.91,
        oralRatLethalDoseMilligramsPerKilogram: 113,
        hazardPictograms: [
            GhsPictogram.AcuteToxicity,
            GhsPictogram.HealthHazard,
            GhsPictogram.EnvironmentalHazard,
        ],
        yearDiscovered: 1874,
        smell: 'odorless or faintly aromatic',
        habitat: 'Made only in labs and factories; persists in soils and rivers',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: -0.2142,
                y: -2.4318,
                z: -1.8683,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: -1.4199,
                y: -3.2973,
                z: 0.6082,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: 1.4577,
                y: -3.3014,
                z: 0.3574,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: -4.9625,
                y: 2.3468,
                z: -0.4653,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: 5.0269,
                y: 2.2637,
                z: -0.2446,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.0139,
                y: -0.9042,
                z: 0.5193,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.2439,
                y: -0.097,
                z: 0.2741,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.288,
                y: -0.087,
                z: 0.3227,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.0232,
                y: -2.37,
                z: -0.0865,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.3382,
                y: 0.7019,
                z: -0.8652,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.6111,
                y: 0.8397,
                z: 1.2738,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.2996,
                y: -0.1404,
                z: 1.1849,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.0388,
                y: -0.3387,
                z: -0.7914,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.4881,
                y: 1.4576,
                z: -1.094,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.7823,
                y: 1.5761,
                z: 1.0962,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.4496,
                y: 0.6152,
                z: 0.9562,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.2101,
                y: 0.3976,
                z: -0.9691,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.5439,
                y: 1.4142,
                z: -0.1833,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.582,
                y: 1.355,
                z: -0.0252,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.0065,
                y: -1.0938,
                z: 1.6074,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.5384,
                y: 0.7494,
                z: -1.5982,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.9929,
                y: 1.0163,
                z: 2.1478,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.2416,
                y: -0.7471,
                z: 2.0846,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.8122,
                y: -1.0483,
                z: -1.5662,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.5487,
                y: 2.074,
                z: -1.9872,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.0594,
                y: 2.319,
                z: 1.8398,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.2632,
                y: 0.5736,
                z: 1.6758,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.8228,
                y: 0.2175,
                z: -1.8488,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                6,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                7,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                9,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                6,
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                10,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                7,
                12,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                20,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                21,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                15,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                11,
                22,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                16,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                12,
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                17,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                13,
                24,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                18,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                14,
                25,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                26,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                27,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default ddt;
