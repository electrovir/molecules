import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 6371. */
const phosgene: Molecule = {
    name: 'Phosgene',
    routeName: 'phosgene',
    // cspell:disable-next-line
    pronunciation: 'fˈɑzʤˌin',
    structureDescription: 'A carbon double bonded to an oxygen and holding two chlorine atoms.',
    realLifeDescription:
        'It was a deadly World War I gas and is now used to make plastics like polycarbonate.',
    stats: {
        stateAtRoomTemperature: MatterState.Gas,
        meltingPointCelsius: -127.8,
        boilingPointCelsius: 8.2,
        densityGramsPerCubicCentimeter: 0.00425,
        dipoleMomentDebye: 1.17,
        hazardPictograms: [
            GhsPictogram.CompressedGas,
            GhsPictogram.Corrosive,
            GhsPictogram.AcuteToxicity,
            GhsPictogram.HealthHazard,
        ],
        yearDiscovered: 1812,
        smell: 'musty hay, suffocating',
        habitat: 'Factories, air where chlorinated solvents break down',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: -1.4422,
                y: 0.8003,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: 1.4424,
                y: 0.8001,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.0002,
                y: -1.4135,
                z: -0.0001,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.0001,
                y: -0.1869,
                z: 0.0002,
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

export default phosgene;
