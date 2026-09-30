import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, type Molecule} from '../molecule.js';

const oxygenBondLength = 1.2075;

export const oxygen: Molecule = {
    name: 'Oxygen',
    description:
        'Two oxygen atoms joined by a double bond. It makes up about 21% of the air, and your cells use it to turn food into energy.',
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -oxygenBondLength / 2,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: oxygenBondLength / 2,
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
            order: BondOrder.Double,
        },
    ],
};
