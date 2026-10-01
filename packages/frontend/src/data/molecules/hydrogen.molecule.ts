import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

const hydrogenBondLength = 0.7414;

const hydrogen: Molecule = {
    name: 'Hydrogen',
    structureDescription: 'Two hydrogen atoms sharing a single bond.',
    realLifeDescription:
        'It is the simplest and lightest molecule there is, and burning it with oxygen produces nothing but water. Hydrogen atoms make up most of every star, including our Sun.',
    stats: {
        stateAtRoomTemperature: MatterState.Gas,
        meltingPointCelsius: -259.2,
        boilingPointCelsius: -252.8,
        densityGramsPerCubicCentimeter: 0.0000899,
        waterSolubilityGramsPerLiter: 0.00162,
        dipoleMomentDebye: 0,
        hazardPictograms: [
            GhsPictogram.Flammable,
            GhsPictogram.CompressedGas,
        ],
        yearDiscovered: 1766,
        habitat: "Stars, gas giant planets, interstellar space, traces in Earth's air",
        evolvesInto: ['water'],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -hydrogenBondLength / 2,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: hydrogenBondLength / 2,
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
    ],
};

export default hydrogen;
