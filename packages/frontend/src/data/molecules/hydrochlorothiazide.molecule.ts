// cspell:words hydrochlorothiazide sulfonyl
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 3639. */
const hydrochlorothiazide: Molecule = {
    name: 'Hydrochlorothiazide',
    // cspell:disable-next-line
    pronunciation: 'hˌIdɹəklˌɔɹəθˈIəzˌId',
    structureDescription:
        'A benzene ring with a chlorine, fused to a ring of sulfur and nitrogen and carrying a second sulfonyl group.',
    realLifeDescription:
        'It is a water pill that lowers blood pressure. It makes the kidneys send more salt and water out in urine.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 274,
        densityGramsPerCubicCentimeter: 1.693,
        waterSolubilityGramsPerLiter: 0.722,
        logP: -0.07,
        hazardPictograms: [
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
        ],
        taste: 'slightly bitter',
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: 2.701,
                y: -2.4152,
                z: -0.0041,
            },
        },
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: -2.3843,
                y: 1.239,
                z: 0.0262,
            },
        },
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: 2.9884,
                y: 0.8025,
                z: 0.1072,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.6655,
                y: 1.56,
                z: 1.4114,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.1586,
                y: 2.2718,
                z: -0.9652,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.8058,
                y: 2.1097,
                z: 0.7178,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 3.9631,
                y: -0.1273,
                z: 0.6553,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -3.578,
                y: 0.1713,
                z: -0.5689,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -2.3503,
                y: -1.8587,
                z: -0.0568,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 3.2964,
                y: 1.0065,
                z: -1.5598,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.9702,
                y: 0.1815,
                z: 0.0403,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.1247,
                y: -1.2131,
                z: 0.0008,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.6052,
                y: -1.1526,
                z: 0.0785,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.2871,
                y: 0.792,
                z: 0.0681,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.4314,
                y: 0.0008,
                z: 0.0573,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.0498,
                y: -1.9826,
                z: -0.02,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.3139,
                y: -1.3856,
                z: 0.0119,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.4034,
                y: -1.7454,
                z: -0.3796,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.8572,
                y: -1.034,
                z: 1.1382,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.3584,
                y: 1.8756,
                z: 0.0935,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.735,
                y: 0.1603,
                z: -1.5847,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.3647,
                y: -2.8719,
                z: -0.0297,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.029,
                y: -3.0687,
                z: -0.0604,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.2437,
                y: 1.9587,
                z: -1.9418,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.033,
                y: 0.429,
                z: -1.9833,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                3,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                1,
                4,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                1,
                7,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                5,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                2,
                6,
            ],
            order: BondOrder.Double,
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
                14,
            ],
            order: BondOrder.Single,
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
                7,
                20,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                12,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                21,
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
                9,
                24,
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
                13,
            ],
            order: BondOrder.Double,
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
                12,
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                16,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                15,
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                22,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default hydrochlorothiazide;
