// cspell:words cyanogenic
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 768. */
const hydrogenCyanide: Molecule = {
    name: 'Hydrogen Cyanide',
    structureDescription:
        'A hydrogen, a carbon and a nitrogen in a straight line, with a triple bond between the carbon and nitrogen.',
    realLifeDescription:
        'It is extremely poisonous and smells faintly of bitter almonds. Apple seeds hold tiny amounts of a molecule that can release it, far too little to harm you if swallowed.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: -13.3,
        boilingPointCelsius: 26,
        densityGramsPerCubicCentimeter: 0.688,
        isWaterMiscible: true,
        logP: -0.25,
        dipoleMomentDebye: 2.98,
        hazardPictograms: [
            GhsPictogram.Flammable,
            GhsPictogram.AcuteToxicity,
            GhsPictogram.EnvironmentalHazard,
        ],
        yearDiscovered: 1752,
        smell: 'bitter almond',
        taste: 'bitter, burning',
        habitat: 'Fruit pits, cyanogenic plants, microbes, human blood, space',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.1283,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.0317,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.0967,
                y: 0,
                z: 0,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                1,
            ],
            order: BondOrder.Triple,
        },
        {
            atomIndexes: [
                1,
                2,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default hydrogenCyanide;
