// cspell:words cisplatin
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** Idealized geometry from measured bond lengths and angles. PubChem has no 3D record for it. */
const cisplatin: Molecule = {
    name: 'Cisplatin',
    structureDescription:
        'A platinum atom holding two chlorine atoms and two ammonia groups on one side of a flat square.',
    realLifeDescription:
        'It is a cancer drug that binds DNA, discovered when an electric current through platinum stopped bacteria from dividing.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 270,
        waterSolubilityGramsPerLiter: 2.53,
        logP: -2.19,
        yearDiscovered: 1844,
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.Pt,
            position: {
                x: 0,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: 2.33,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: 0,
                y: 2.33,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -2.05,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0,
                y: -2.05,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.3871,
                y: 0.9521,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.3871,
                y: -0.476,
                z: 0.8245,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.3871,
                y: -0.476,
                z: -0.8245,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.9521,
                y: -2.3871,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.476,
                y: -2.3871,
                z: 0.8245,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.476,
                y: -2.3871,
                z: -0.8245,
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
            order: BondOrder.Single,
        },
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
                4,
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
                6,
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
                4,
                10,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default cisplatin;
