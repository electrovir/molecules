import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 948. */
const nitrousOxide: Molecule = {
    name: 'Nitrous Oxide',
    routeName: 'nitrous-oxide',
    // cspell:disable-next-line
    pronunciation: 'nˈItɹəs ˈɑksˌId',
    structureDescription: 'Two nitrogen atoms and an oxygen in a straight line.',
    realLifeDescription:
        'It is laughing gas, used by dentists and in whipped cream cans. It is also used to give race cars an extra boost of power.',
    stats: {
        stateAtRoomTemperature: MatterState.Gas,
        meltingPointCelsius: -90.8,
        boilingPointCelsius: -88.5,
        densityGramsPerCubicCentimeter: 0.00198,
        waterSolubilityGramsPerLiter: 1.2,
        logP: 0.36,
        dipoleMomentDebye: 0.166,
        hazardPictograms: [
            GhsPictogram.Oxidizer,
            GhsPictogram.CompressedGas,
            GhsPictogram.Irritant,
        ],
        yearDiscovered: 1772,
        smell: 'slightly sweet',
        taste: 'slightly sweet',
        habitat: "Soil microbes, ocean microbes, Earth's air",
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.3063,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -0.1096,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -1.1967,
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
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                2,
            ],
            order: BondOrder.Triple,
        },
    ],
};

export default nitrousOxide;
