import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, type Molecule} from '../molecule.js';

export const ozone: Molecule = {
    name: 'Ozone',
    description:
        'Three oxygen atoms in a bent chain. High in the atmosphere it shields the Earth from ultraviolet light, but at ground level it is an irritating pollutant.',
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.095,
                y: -0.4943,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 1.1489,
                y: 0.2152,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.054,
                y: 0.2791,
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
            order: BondOrder.Double,
        },
    ],
};
