import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 6334. */
const propane: Molecule = {
    name: 'Propane',
    structureDescription: 'A chain of three carbon atoms covered in hydrogens.',
    realLifeDescription:
        'It is the fuel in barbecue grills and camping stoves, stored as a liquid under pressure. Propane has no smell of its own, so a stinky chemical is added to help people notice leaks.',
    stats: {
        stateAtRoomTemperature: MatterState.Gas,
        meltingPointCelsius: -187.7,
        boilingPointCelsius: -42.1,
        densityGramsPerCubicCentimeter: 0.00201,
        waterSolubilityGramsPerLiter: 0.062,
        logP: 2.36,
        dipoleMomentDebye: 0.083,
        hazardPictograms: [
            GhsPictogram.Flammable,
            GhsPictogram.CompressedGas,
        ],
        yearDiscovered: 1857,
        habitat: "Crude oil, natural gas, Saturn's moon Titan",
        evolvesInto: ['isopropyl-alcohol'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0,
                y: -0.6196,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.2571,
                y: 0.2338,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.2571,
                y: 0.2338,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0,
                y: -1.2689,
                z: 0.8824,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0,
                y: -1.269,
                z: -0.8824,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.2969,
                y: 0.8738,
                z: 0.8873,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.2967,
                y: 0.8738,
                z: -0.8872,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.1475,
                y: -0.4026,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.1475,
                y: -0.4027,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.2968,
                y: 0.8738,
                z: 0.8872,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.2968,
                y: 0.8738,
                z: -0.8872,
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
                1,
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
                1,
                7,
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
                10,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default propane;
