// cspell:words trichloroisocyanuric
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 6909. */
const trichloroisocyanuricAcid: Molecule = {
    name: 'Trichloroisocyanuric Acid',
    // cspell:disable-next-line
    pronunciation: 'tɹˌIklˌɔɹOˌIsOsˌIənˈʊɹɪk ˈæsəd',
    structureDescription:
        'A ring of alternating carbon and nitrogen atoms, with an oxygen on each carbon and a chlorine on each nitrogen.',
    realLifeDescription: 'It slowly releases chlorine and is the tablet that keeps pools clean.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 246.7,
        densityGramsPerCubicCentimeter: 2.07,
        waterSolubilityGramsPerLiter: 12,
        logP: 0.26,
        dipoleMomentDebye: 0,
        oralRatLethalDoseMilligramsPerKilogram: 580,
        hazardPictograms: [
            GhsPictogram.Oxidizer,
            GhsPictogram.Irritant,
            GhsPictogram.EnvironmentalHazard,
        ],
        smell: 'chlorine-like',
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: 2.2122,
                y: 2.1703,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: -2.9856,
                y: 0.8305,
                z: 0.0007,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: 0.7736,
                y: -3.001,
                z: -0.0005,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.6702,
                y: 2.6002,
                z: -0.0009,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.587,
                y: -0.7197,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.9168,
                y: -1.8806,
                z: -0.0008,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0.9679,
                y: 0.9497,
                z: 0.0004,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.3065,
                y: 0.3634,
                z: 0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0.3385,
                y: -1.313,
                z: 0.0006,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.3624,
                y: 1.4057,
                z: -0.0003,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.3985,
                y: -0.3889,
                z: 0.0005,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.0362,
                y: -1.0166,
                z: 0.0003,
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
                3,
                9,
            ],
            order: BondOrder.Double,
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
                11,
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
                6,
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                9,
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
                8,
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                11,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default trichloroisocyanuricAcid;
