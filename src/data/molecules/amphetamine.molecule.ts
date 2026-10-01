// cspell:words adderall
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 3007. */
const amphetamine: Molecule = {
    name: 'Amphetamine',
    description:
        'A benzene ring attached to a three-carbon chain with an amine group. It is a stimulant and the main ingredient in Adderall.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: 11.3,
        boilingPointCelsius: 203,
        densityGramsPerCubicCentimeter: 0.936,
        waterSolubilityGramsPerLiter: 20,
        logP: 1.76,
        hazardPictograms: [
            GhsPictogram.Flammable,
            GhsPictogram.AcuteToxicity,
        ],
        yearDiscovered: 1887,
        smell: 'strong, amine-like',
        taste: 'acrid, burning',
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -3.5849,
                y: -0.4599,
                z: 0.1218,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.2239,
                y: -0.1762,
                z: -0.3436,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.2222,
                y: -0.4574,
                z: 0.7925,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.2121,
                y: -0.2349,
                z: 0.4021,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.1745,
                y: 1.2729,
                z: -0.8278,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.9484,
                y: -1.2846,
                z: -0.1323,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.7852,
                y: 1.0179,
                z: 0.5809,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.2797,
                y: -1.0783,
                z: -0.4941,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.1164,
                y: 1.2243,
                z: 0.219,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.8637,
                y: 0.1762,
                z: -0.3184,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.0069,
                y: -0.8349,
                z: -1.1935,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.3381,
                y: -1.4935,
                z: 1.1401,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.458,
                y: 0.1652,
                z: 1.6671,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.2278,
                y: 1.4959,
                z: -1.3291,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.3048,
                y: 1.98,
                z: -0.0009,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.9665,
                y: 1.4674,
                z: -1.5608,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.5027,
                y: -2.2651,
                z: -0.2755,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.2158,
                y: 1.8413,
                z: 1.0029,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.6534,
                y: -1.4374,
                z: 0.4021,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.2436,
                y: -0.3352,
                z: -0.646,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.8614,
                y: -1.8941,
                z: -0.9132,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.5715,
                y: 2.2008,
                z: 0.3567,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.9002,
                y: 0.3369,
                z: -0.5999,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                1,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                18,
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
                2,
            ],
            order: BondOrder.Single,
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
                10,
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
                2,
                11,
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
                5,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                3,
                6,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                14,
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
                5,
                7,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                16,
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
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                9,
            ],
            order: BondOrder.Double,
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
                9,
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
                22,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default amphetamine;
