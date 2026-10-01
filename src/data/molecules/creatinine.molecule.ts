import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 588. */
const creatinine: Molecule = {
    name: 'Creatinine',
    description:
        'A five-membered ring of carbon and nitrogen with a ketone and a methyl group. Muscles make it as waste from creatine, and doctors measure it in blood to check the kidneys.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 303,
        densityGramsPerCubicCentimeter: 1.09,
        waterSolubilityGramsPerLiter: 80.1,
        logP: -1.76,
        hazardPictograms: [],
        habitat: 'Blood and urine of humans and animals, from muscle creatine breakdown',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.6218,
                y: 0.0716,
                z: 0.0015,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -0.7872,
                y: 0.6308,
                z: -0.0016,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0.6221,
                y: -1.1243,
                z: -0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.7305,
                y: -1.5409,
                z: 0.0006,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.5104,
                y: 1.2664,
                z: -0.0009,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.6318,
                y: -0.7331,
                z: -0.0007,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.3984,
                y: 0.028,
                z: -0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.0031,
                y: 1.4013,
                z: 0.0017,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.6787,
                y: 1.8511,
                z: 0.9067,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.6798,
                y: 1.8511,
                z: -0.9083,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.6053,
                y: 1.1712,
                z: -0.8828,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.7932,
                y: 2.476,
                z: -0.0054,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.5943,
                y: 1.1803,
                z: 0.8958,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.6724,
                y: -1.1659,
                z: 0.0015,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.6369,
                y: -2.5508,
                z: 0.0021,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                6,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                1,
                4,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                5,
            ],
            order: BondOrder.Single,
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
            order: BondOrder.Single,
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
                6,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                8,
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
                7,
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                11,
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
    ],
};

export default creatinine;
