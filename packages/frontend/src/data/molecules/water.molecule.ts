import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, MatterState, type Molecule} from '../molecule.js';

const waterBondLength = 0.9584;
const waterHalfBondAngle = ((104.45 / 2) * Math.PI) / 180;

const water: Molecule = {
    name: 'Water',
    structureDescription: 'Two hydrogen atoms bonded to one oxygen atom at a bent 104.45° angle.',
    realLifeDescription:
        'The bend makes the molecule polar, which gives water its high boiling point and its talent for dissolving things. It is one of the very few substances whose solid form floats on its liquid.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: 0,
        boilingPointCelsius: 100,
        densityGramsPerCubicCentimeter: 1,
        isWaterMiscible: true,
        logP: -1.38,
        dipoleMomentDebye: 1.854,
        habitat: 'Oceans, rivers, ice, air, every living cell, space',
        evolvesInto: [
            'hydrogen',
            'oxygen',
        ],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: waterBondLength * Math.sin(waterHalfBondAngle),
                y: -waterBondLength * Math.cos(waterHalfBondAngle),
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -waterBondLength * Math.sin(waterHalfBondAngle),
                y: -waterBondLength * Math.cos(waterHalfBondAngle),
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0,
                y: 0,
                z: 0,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                2,
                0,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                1,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default water;
