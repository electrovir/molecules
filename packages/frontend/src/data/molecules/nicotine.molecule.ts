import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 89594. */
const nicotine: Molecule = {
    name: 'Nicotine',
    // cspell:disable-next-line
    pronunciation: 'nˈɪkətˌin',
    structureDescription: 'Two nitrogen-containing rings joined together.',
    realLifeDescription:
        'Tobacco plants make it to poison insects that eat its leaves. Farmers once sprayed it on crops as an insecticide.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: -79,
        boilingPointCelsius: 247,
        densityGramsPerCubicCentimeter: 1.01,
        isWaterMiscible: true,
        logP: 1.17,
        oralRatLethalDoseMilligramsPerKilogram: 188,
        hazardPictograms: [
            GhsPictogram.AcuteToxicity,
            GhsPictogram.EnvironmentalHazard,
        ],
        yearDiscovered: 1828,
        smell: 'pungent, fishy when warm',
        taste: 'acrid, burning',
        habitat: 'Tobacco leaves, traces in tomatoes, potatoes, eggplants',
        evolvesInto: ['niacin'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.2562,
                y: -0.7422,
                z: 0.2007,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 2.6784,
                y: -0.5167,
                z: 1.6267,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.3657,
                y: 0.1931,
                z: -0.515,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.9485,
                y: 1.5885,
                z: -0.2236,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.1966,
                y: 1.3324,
                z: 0.6091,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.5673,
                y: -0.0964,
                z: 0.2663,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.0808,
                y: 0.063,
                z: -0.0869,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.3241,
                y: -2.0589,
                z: -0.42,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.1123,
                y: 0.3863,
                z: -0.9573,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.4092,
                y: -0.3796,
                z: 1.1818,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.4312,
                y: 0.2581,
                z: -0.536,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.659,
                y: -0.1934,
                z: 0.754,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.4345,
                y: 0.0159,
                z: -1.598,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.23,
                y: 2.0731,
                z: -1.1665,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.2611,
                y: 2.2584,
                z: 0.3044,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.9571,
                y: 1.42,
                z: 1.6763,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.9985,
                y: 2.0406,
                z: 0.381,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.2077,
                y: -0.542,
                z: 1.0337,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.0893,
                y: -0.1315,
                z: -0.6984,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.9821,
                y: -2.7173,
                z: 0.1578,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.3375,
                y: -2.5342,
                z: -0.4369,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.7013,
                y: -2.0155,
                z: -1.448,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.9029,
                y: 0.7398,
                z: -1.9629,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.6595,
                y: -0.6354,
                z: 1.9232,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.2547,
                y: 0.5044,
                z: -1.1963,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.6696,
                y: -0.3105,
                z: 1.131,
            },
        },
    ],
    bonds: [
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
                5,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                7,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                11,
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
                6,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                12,
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
        {
            atomIndexes: [
                3,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                5,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                18,
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
                9,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                7,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                20,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                21,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                10,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                8,
                22,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                24,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                11,
                25,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default nicotine;
