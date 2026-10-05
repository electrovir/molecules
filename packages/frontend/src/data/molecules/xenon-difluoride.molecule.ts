// cspell:words difluoride
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';
import xenonTetrafluoride from './xenon-tetrafluoride.molecule.js';

/** Idealized geometry from measured bond lengths and angles. PubChem has no 3D record for it. */
const xenonDifluoride: Molecule = {
    name: 'Xenon Difluoride',
    routeName: 'xenon-difluoride',
    // cspell:disable-next-line
    pronunciation: 'zˈinˌɑn dIflˈɔɹId',
    structureDescription: 'A xenon atom with a fluorine atom on each side in a straight line.',
    realLifeDescription:
        'Xenon is a noble gas that was thought to never bond, and this white crystal is used to etch silicon.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 128.6,
        densityGramsPerCubicCentimeter: 4.32,
        dipoleMomentDebye: 0,
        hazardPictograms: [
            GhsPictogram.Oxidizer,
            GhsPictogram.Corrosive,
            GhsPictogram.AcuteToxicity,
        ],
        yearDiscovered: 1962,
        smell: 'nauseating',
        habitat: 'Made only in labs and factories',
        evolvesInto: [
            xenonTetrafluoride,
        ],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.Xe,
            position: {
                x: 0,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: 1.977,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: -1.977,
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
                0,
                2,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default xenonDifluoride;
