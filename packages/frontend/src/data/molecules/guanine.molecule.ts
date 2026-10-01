import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 135398634. */
const guanine: Molecule = {
    name: 'Guanine',
    description:
        'A double ring of carbon and nitrogen and one of the four letters of DNA, where it pairs with cytosine. It makes fish scales shimmer.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 360,
        waterSolubilityGramsPerLiter: 0.068,
        logP: -0.91,
        hazardPictograms: [GhsPictogram.Irritant],
        yearDiscovered: 1844,
        habitat: 'DNA and RNA of all life; guano, fish scales, and reptile eyes',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.2862,
                y: 2.6606,
                z: -0.0006,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -2.3313,
                y: 0.4312,
                z: 0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 1.28,
                y: 0.9499,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0.6992,
                y: -1.3789,
                z: -0.0005,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.7545,
                y: -1.7228,
                z: -0.0009,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 2.9396,
                y: -0.7012,
                z: 0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.9674,
                y: 0.4011,
                z: -0.0004,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.6349,
                y: -0.9333,
                z: -0.0006,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.0155,
                y: 1.4648,
                z: -0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.597,
                y: -0.4203,
                z: -0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.7588,
                y: -0.8711,
                z: 0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.9183,
                y: 1.255,
                z: 0.0009,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.0497,
                y: 1.613,
                z: 0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.8088,
                y: -1.1271,
                z: 0.0007,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.2755,
                y: -1.6582,
                z: 0.0004,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.6347,
                y: 0.0372,
                z: 0.0006,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                8,
            ],
            order: BondOrder.Double,
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
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                11,
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
                2,
                9,
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
                7,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                9,
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
                10,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                5,
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                7,
            ],
            order: BondOrder.Double,
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
                10,
                13,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default guanine;
