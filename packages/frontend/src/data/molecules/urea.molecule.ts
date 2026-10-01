import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 1176. */
const urea: Molecule = {
    name: 'Urea',
    structureDescription:
        'A carbon atom double bonded to an oxygen and holding two nitrogen groups.',
    realLifeDescription:
        'Your body uses it to get rid of extra nitrogen in urine, and it was the first natural molecule made in a lab. It is also the most widely used nitrogen fertilizer on farms.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 132.7,
        densityGramsPerCubicCentimeter: 1.32,
        waterSolubilityGramsPerLiter: 545,
        logP: -2.11,
        dipoleMomentDebye: 4.56,
        oralRatLethalDoseMilligramsPerKilogram: 8500,
        yearDiscovered: 1727,
        smell: 'odorless to faintly ammonia-like',
        taste: 'cooling, salty',
        habitat: 'Mammal and amphibian urine, the liver',
        evolvesInto: [
            'ammonia',
            'carbon-dioxide',
        ],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0,
                y: -1.7948,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.1484,
                y: 0.1989,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 1.1484,
                y: 0.1989,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.0001,
                y: -0.5655,
                z: 0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.1122,
                y: 1.2127,
                z: 0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.0671,
                y: -0.2315,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.067,
                y: -0.2315,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.1123,
                y: 1.2127,
                z: 0,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                3,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                1,
                3,
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
                5,
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
                6,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                7,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default urea;
