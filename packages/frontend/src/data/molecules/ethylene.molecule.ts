import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';
import ethanol from './ethanol.molecule.js';
import ethyleneGlycol from './ethylene-glycol.molecule.js';

const ethylene: Molecule = {
    name: 'Ethylene',
    routeName: 'ethylene',
    // cspell:disable-next-line
    pronunciation: 'ˈɛθəlˌin',
    structureDescription:
        'Two carbon atoms joined by a double bond, each holding two hydrogens, all in one flat plane.',
    realLifeDescription:
        'Plants release it to ripen fruit, and it is the building block of polyethylene plastic. That is why one rotten apple can make a whole barrel of fruit ripen faster.',
    stats: {
        stateAtRoomTemperature: MatterState.Gas,
        meltingPointCelsius: -169.2,
        boilingPointCelsius: -103.8,
        densityGramsPerCubicCentimeter: 0.001178,
        waterSolubilityGramsPerLiter: 0.131,
        logP: 1.13,
        dipoleMomentDebye: 0,
        hazardPictograms: [
            GhsPictogram.Flammable,
            GhsPictogram.CompressedGas,
            GhsPictogram.Irritant,
        ],
        yearDiscovered: 1669,
        smell: 'sweet',
        taste: 'sweet',
        habitat: 'Ripening fruits, flowers, leaves, roots, petrochemical plants',
        evolvesInto: [
            ethanol,
            ethyleneGlycol,
        ],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.6672,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.6672,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.2213,
                y: -0.929,
                z: 0.0708,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.2212,
                y: 0.929,
                z: -0.0708,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.2213,
                y: 0.929,
                z: -0.0708,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.2213,
                y: -0.929,
                z: 0.0708,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                1,
            ],
            order: BondOrder.Double,
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
                1,
                4,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                5,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default ethylene;
