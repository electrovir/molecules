import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 944. */
const nitricAcid: Molecule = {
    name: 'Nitric Acid',
    structureDescription: 'A nitrogen atom holding three oxygens, one with a hydrogen.',
    realLifeDescription:
        'It is a strong acid used to make fertilizer and explosives. It turns skin yellow because it reacts with the proteins in it.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: -41.6,
        boilingPointCelsius: 83,
        densityGramsPerCubicCentimeter: 1.51,
        isWaterMiscible: true,
        logP: -0.21,
        dipoleMomentDebye: 2.17,
        hazardPictograms: [
            GhsPictogram.Oxidizer,
            GhsPictogram.Corrosive,
            GhsPictogram.AcuteToxicity,
        ],
        smell: 'acrid, suffocating',
        habitat: 'The atmosphere, factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.7308,
                y: -0.7202,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.475,
                y: -0.5906,
                z: -0.0002,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.2298,
                y: 1.2718,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0.4303,
                y: 0.0584,
                z: 0.0004,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.4043,
                y: -0.0195,
                z: -0.0001,
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
                4,
            ],
            order: BondOrder.Single,
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
                2,
                3,
            ],
            order: BondOrder.Double,
        },
    ],
};

export default nitricAcid;
