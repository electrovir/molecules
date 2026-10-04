// cspell:words nitromethane
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 6375. */
const nitromethane: Molecule = {
    name: 'Nitromethane',
    // cspell:disable-next-line
    pronunciation: 'nˌItɹOmˈɛθˌAn',
    structureDescription: 'A methyl group bonded to a nitrogen that carries two oxygens.',
    realLifeDescription:
        'It is the fuel in drag racers and model airplane engines. It is also used as a solvent in labs.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: -28.7,
        boilingPointCelsius: 101.2,
        densityGramsPerCubicCentimeter: 1.137,
        waterSolubilityGramsPerLiter: 105,
        logP: -0.35,
        dipoleMomentDebye: 3.46,
        oralRatLethalDoseMilligramsPerKilogram: 940,
        hazardPictograms: [
            GhsPictogram.Flammable,
            GhsPictogram.Irritant,
        ],
        smell: 'disagreeable',
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.67,
                y: -1.0954,
                z: 0.0017,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.6471,
                y: 1.1078,
                z: 0.0017,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -0.0737,
                y: 0,
                z: -0.0048,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.3908,
                y: -0.0123,
                z: 0.0014,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.7487,
                y: 0.8472,
                z: -0.5696,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.7367,
                y: -0.9399,
                z: -0.4602,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.7158,
                y: 0.0483,
                z: 1.0418,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                2,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                2,
            ],
            order: BondOrder.Double,
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
                3,
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
    ],
};

export default nitromethane;
