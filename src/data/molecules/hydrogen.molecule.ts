import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

const hydrogenBondLength = 0.7414;

const hydrogen: Molecule = {
    name: 'Hydrogen',
    description:
        'Two hydrogen atoms sharing a single bond. It is the simplest and lightest molecule there is, and burning it with oxygen produces nothing but water.',
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
        smell: 'odorless',
        taste: 'tasteless',
        habitat: "Stars, gas giant planets, interstellar space, and traces in Earth's air",
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
