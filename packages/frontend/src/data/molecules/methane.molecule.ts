import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';
import methanol from './methanol.molecule.js';

const methane: Molecule = {
    name: 'Methane',
    routeName: 'methane',
    // cspell:disable-next-line
    pronunciation: 'mˈɛθˌAn',
    structureDescription:
        'A carbon atom bonded to four hydrogen atoms that point to the corners of a tetrahedron.',
    realLifeDescription:
        'It is the main ingredient of natural gas. Cows burp large amounts of it, and it is a strong greenhouse gas.',
    stats: {
        stateAtRoomTemperature: MatterState.Gas,
        meltingPointCelsius: -182.5,
        boilingPointCelsius: -161.5,
        densityGramsPerCubicCentimeter: 0.000657,
        waterSolubilityGramsPerLiter: 0.022,
        logP: 1.09,
        dipoleMomentDebye: 0,
        hazardPictograms: [
            GhsPictogram.Flammable,
            GhsPictogram.CompressedGas,
        ],
        yearDiscovered: 1776,
        habitat: 'Natural gas, wetlands, cattle, termites, seafloor sediments',
        evolvesInto: [methanol],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.5541,
                y: 0.7996,
                z: 0.4965,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.6833,
                y: -0.8134,
                z: -0.2536,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.7782,
                y: -0.3735,
                z: 0.6692,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.4593,
                y: 0.3874,
                z: -0.9121,
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
    ],
};

export default methane;
