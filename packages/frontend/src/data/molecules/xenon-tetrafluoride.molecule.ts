// cspell:words tetrafluoride
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** Idealized geometry from measured bond lengths and angles. PubChem has no 3D record for it. */
const xenonTetrafluoride: Molecule = {
    name: 'Xenon Tetrafluoride',
    description:
        'A xenon atom bonded to four fluorine atoms in a flat square. Made in 1962, it was one of the first proofs that noble gases can form compounds.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        sublimationPointCelsius: 117,
        densityGramsPerCubicCentimeter: 4.04,
        dipoleMomentDebye: 0,
        yearDiscovered: 1962,
        habitat: 'Made only in labs and factories',
        evolvesInto: [
            'oxygen',
            'hydrogen-fluoride',
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
                x: 1.953,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: 0,
                y: 1.953,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: -1.953,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: 0,
                y: -1.953,
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

export default xenonTetrafluoride;
