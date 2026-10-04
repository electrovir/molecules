import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 1183. */
const vanillin: Molecule = {
    name: 'Vanillin',
    // cspell:disable-next-line
    pronunciation: 'vənˈɪlʌn',
    structureDescription: 'A benzene ring holding three different groups.',
    realLifeDescription:
        'It is the main flavor of vanilla. Most vanillin is made in factories, since real vanilla beans come from orchids that must be pollinated by hand.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 81.5,
        boilingPointCelsius: 285,
        densityGramsPerCubicCentimeter: 1.056,
        waterSolubilityGramsPerLiter: 11,
        logP: 1.37,
        oralRatLethalDoseMilligramsPerKilogram: 1580,
        hazardPictograms: [GhsPictogram.Irritant],
        yearDiscovered: 1858,
        smell: 'sweet, creamy vanilla',
        taste: 'pleasant vanilla',
        habitat: 'Vanilla beans, other orchids, pine bark, clove oil',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.074,
                y: 0.721,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.3991,
                y: 2.9394,
                z: 0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.99,
                y: -2.4449,
                z: 0.0006,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.7205,
                y: 0.5667,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.2077,
                y: -0.889,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.1766,
                y: -0.7177,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.1199,
                y: 1.6799,
                z: -0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.0481,
                y: 0.2244,
                z: -0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.5042,
                y: 1.5088,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.7751,
                y: -2.228,
                z: 0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.862,
                y: -0.4678,
                z: 0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.782,
                y: -1.6181,
                z: 0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.1295,
                y: 0.1149,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.1704,
                y: 2.3675,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.062,
                y: -3.0698,
                z: -0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.7055,
                y: -1.0564,
                z: -0.9105,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.7056,
                y: -1.0561,
                z: 0.9106,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.9123,
                y: -0.1575,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.3306,
                y: 3.5827,
                z: 0.0003,
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
                6,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                9,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                3,
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
                5,
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
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                11,
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
                7,
                8,
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
                8,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                17,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default vanillin;
