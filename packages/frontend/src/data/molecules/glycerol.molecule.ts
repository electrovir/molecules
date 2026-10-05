import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';
import nitroglycerin from './nitroglycerin.molecule.js';

/** 3D coordinates from PubChem CID 753. */
const glycerol: Molecule = {
    name: 'Glycerol',
    routeName: 'glycerol',
    // cspell:disable-next-line
    pronunciation: 'ɡlˈɪsəɹɔl',
    structureDescription: 'Three carbon atoms each holding an oxygen-hydrogen group.',
    realLifeDescription:
        'It is a sweet, syrupy liquid that forms the backbone of every fat molecule. It keeps soaps and lotions moist because it pulls water from the air.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: 18.1,
        boilingPointCelsius: 290,
        densityGramsPerCubicCentimeter: 1.261,
        isWaterMiscible: true,
        logP: -1.76,
        dipoleMomentDebye: 2.56,
        oralRatLethalDoseMilligramsPerKilogram: 9100,
        taste: 'sweet, warm',
        habitat: 'Fats and oils of all plants and animals',
        evolvesInto: [nitroglycerin],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.2866,
                y: -1.5335,
                z: -0.1297,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 2.4646,
                y: 0.1599,
                z: -0.4067,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.3055,
                y: -0.4693,
                z: -0.4736,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.0874,
                y: -0.1567,
                z: -0.4584,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.2401,
                y: 0.6405,
                z: 0.1377,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.2538,
                y: 0.2929,
                z: 0.1097,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.0911,
                y: -0.0982,
                z: -1.5519,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.294,
                y: 0.5258,
                z: 1.2255,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.1519,
                y: 1.7045,
                z: -0.1007,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.4331,
                y: 1.3511,
                z: -0.1054,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.2945,
                y: 0.1342,
                z: 1.1926,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.282,
                y: -1.6147,
                z: 0.8394,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.5271,
                y: -0.7868,
                z: -0.1927,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.1379,
                y: -0.1494,
                z: -0.0858,
            },
        },
    ],
    bonds: [
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
                11,
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
                12,
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
                2,
                13,
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
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                9,
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
    ],
};

export default glycerol;
