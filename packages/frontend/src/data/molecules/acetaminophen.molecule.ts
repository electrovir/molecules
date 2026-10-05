import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 1983. */
const acetaminophen: Molecule = {
    name: 'Acetaminophen',
    routeName: 'acetaminophen',
    // cspell:disable-next-line
    pronunciation: 'ˌʌsˌitəmˈɪnəfən',
    structureDescription:
        'A benzene ring with an oxygen-hydrogen group on one side and a nitrogen group on the other.',
    realLifeDescription: 'It is the pain reliever in Tylenol. Many countries call it paracetamol.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 169,
        densityGramsPerCubicCentimeter: 1.293,
        waterSolubilityGramsPerLiter: 14,
        logP: 0.46,
        oralRatLethalDoseMilligramsPerKilogram: 1940,
        yearDiscovered: 1878,
        taste: 'slightly bitter',
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 4.1946,
                y: 0.1069,
                z: 0.0011,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.1003,
                y: 1.8083,
                z: -0.0027,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.3264,
                y: -0.4189,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.0625,
                y: -0.2866,
                z: -0.0004,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.6422,
                y: 0.982,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.8714,
                y: -1.423,
                z: -0.0005,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.0308,
                y: 1.1142,
                z: -0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.26,
                y: -1.2906,
                z: -0.0005,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.8396,
                y: -0.0221,
                z: -0.0004,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.2921,
                y: 0.5965,
                z: 0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.6924,
                y: 0.0364,
                z: 0.0005,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.0826,
                y: 1.9069,
                z: 0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.4334,
                y: -2.4179,
                z: -0.0005,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.6714,
                y: -1.3765,
                z: 0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.4714,
                y: 2.1079,
                z: 0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.8849,
                y: -2.1796,
                z: -0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.8545,
                y: -0.5532,
                z: -0.9061,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.4186,
                y: 0.8535,
                z: 0.0281,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.8386,
                y: -0.5971,
                z: 0.8799,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.421,
                y: 1.0529,
                z: 0.0013,
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
                0,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                9,
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
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                4,
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
                4,
                6,
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
                7,
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
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                6,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
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
        {
            atomIndexes: [
                10,
                18,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default acetaminophen;
