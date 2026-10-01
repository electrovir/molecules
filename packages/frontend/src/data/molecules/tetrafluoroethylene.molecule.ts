// cspell:words tetrafluoromethane
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 8301. */
const tetrafluoroethylene: Molecule = {
    name: 'Tetrafluoroethylene',
    structureDescription: 'Two carbons joined by a double bond, each holding two fluorine atoms.',
    realLifeDescription:
        'Linked into long chains, it becomes Teflon, the nonstick coating on pans. Teflon was discovered by accident in 1938 when a tank of this gas turned into a slippery white powder.',
    stats: {
        stateAtRoomTemperature: MatterState.Gas,
        meltingPointCelsius: -142.5,
        boilingPointCelsius: -76,
        waterSolubilityGramsPerLiter: 0.159,
        dipoleMomentDebye: 0,
        habitat: 'Made only in labs and factories',
        evolvesInto: ['tetrafluoromethane'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: -1.3407,
                y: -1.1682,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: -1.3407,
                y: 1.1682,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: 1.3406,
                y: 1.1682,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.F,
            position: {
                x: 1.3407,
                y: -1.1681,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.6659,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.6659,
                y: 0,
                z: -0.0001,
            },
        },
    ],
    bonds: [
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
                4,
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
            order: BondOrder.Double,
        },
    ],
};

export default tetrafluoroethylene;
