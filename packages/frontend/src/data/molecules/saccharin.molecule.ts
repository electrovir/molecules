import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 5143. */
const saccharin: Molecule = {
    name: 'Saccharin',
    structureDescription:
        'A benzene ring fused to a five-membered ring holding sulfur and nitrogen.',
    realLifeDescription:
        'Discovered by accident in 1879, it is the sweetener in the pink packets. Its discoverer noticed his dinner tasted sweet after working in the lab without washing his hands.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 228,
        densityGramsPerCubicCentimeter: 0.828,
        waterSolubilityGramsPerLiter: 3.4,
        logP: 0.91,
        yearDiscovered: 1879,
        smell: 'odorless or faintly aromatic',
        taste: 'intensely sweet, metallic aftertaste',
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: -1.6163,
                y: -0.8146,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.0135,
                y: -1.3702,
                z: 1.2749,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.012,
                y: -1.3733,
                z: -1.2741,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.5478,
                y: 2.8682,
                z: 0.0022,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.834,
                y: 0.8846,
                z: -0.0024,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.1175,
                y: -0.6319,
                z: 0.0007,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.5024,
                y: 0.7092,
                z: -0.001,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.6307,
                y: 1.6544,
                z: -0.0009,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.0266,
                y: -1.6693,
                z: 0.0012,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.8427,
                y: 1.0531,
                z: -0.0012,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.3802,
                y: -1.3292,
                z: 0.0009,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.7849,
                y: 0.019,
                z: -0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.765,
                y: 1.3151,
                z: 0.0074,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.7132,
                y: -2.7066,
                z: 0.002,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.1654,
                y: 2.0885,
                z: -0.0021,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.1328,
                y: -2.1132,
                z: 0.0014,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.8453,
                y: 0.2582,
                z: -0.0005,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                1,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                0,
                2,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                0,
                4,
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
                3,
                7,
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
                12,
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
                8,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                6,
                7,
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
                8,
                10,
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
                11,
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
                11,
            ],
            order: BondOrder.Double,
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
                11,
                16,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default saccharin;
