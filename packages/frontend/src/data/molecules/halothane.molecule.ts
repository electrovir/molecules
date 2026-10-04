import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 3562. */
const halothane: Molecule = {
    name: 'Halothane',
    // cspell:disable-next-line
    pronunciation: 'hˈæləθˌAn',
    structureDescription: 'Two carbons carrying three fluorines, a chlorine, and a bromine.',
    realLifeDescription:
        'It was a widely used anesthetic gas that put patients to sleep for surgery. Its sweet smell made it gentler to breathe in than older anesthetics.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: -118,
        boilingPointCelsius: 50.2,
        densityGramsPerCubicCentimeter: 1.871,
        waterSolubilityGramsPerLiter: 4.07,
        logP: 2.3,
        hazardPictograms: [
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
        ],
        yearDiscovered: 1951,
        smell: 'sweet, chloroform-like',
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.Br,
            position: {
                x: 1.8251,
                y: -1.4119,
                z: -0.0431,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: 1.4929,
                y: 1.6011,
                z: -0.0491,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: -1.4418,
                y: 0.9828,
                z: 0.4379,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: -0.7146,
                y: -0.0521,
                z: -1.3396,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: -1.2388,
                y: -1.1818,
                z: 0.4537,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.6665,
                y: -0.04,
                z: 0.0097,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.7437,
                y: 0.1019,
                z: 0.5305,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.765,
                y: 0.1033,
                z: 1.6235,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                6,
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
                2,
                5,
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
                4,
                5,
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
                6,
                7,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default halothane;
