// cspell:words acesulfame
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 36573. */
const acesulfame: Molecule = {
    name: 'Acesulfame',
    description:
        'A six-membered ring holding sulfur, nitrogen, and oxygen, with a ketone and a methyl group. It is about 200 times sweeter than sugar and sweetens diet sodas as Ace-K.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 123.2,
        densityGramsPerCubicCentimeter: 1.83,
        waterSolubilityGramsPerLiter: 270,
        hazardPictograms: [GhsPictogram.Irritant],
        yearDiscovered: 1967,
        smell: 'odorless',
        taste: 'sweet, bitter-metallic aftertaste',
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: 1.4559,
                y: 0.0667,
                z: 0.0249,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.5243,
                y: -1.2485,
                z: -0.2067,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.3902,
                y: 0.143,
                z: -1.0831,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.949,
                y: 0.0234,
                z: 1.3896,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.7728,
                y: 2.2526,
                z: -0.0108,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0.38,
                y: 1.3787,
                z: -0.1048,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.8448,
                y: -1.2157,
                z: -0.0419,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.5823,
                y: -0.098,
                z: 0.0544,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.0343,
                y: 1.2755,
                z: -0.0182,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.4651,
                y: -2.5779,
                z: -0.0035,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.7876,
                y: 2.3209,
                z: -0.1559,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.6608,
                y: -0.1619,
                z: 0.1693,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.2473,
                y: -3.1183,
                z: -0.9305,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.553,
                y: -2.5367,
                z: 0.1133,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.0591,
                y: -3.1531,
                z: 0.8349,
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
                2,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                0,
                3,
            ],
            order: BondOrder.Double,
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
                1,
                6,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                8,
            ],
            order: BondOrder.Double,
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
                10,
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
                9,
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
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
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
                14,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default acesulfame;
