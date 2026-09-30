import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, type Molecule} from '../molecule.js';

export const nitrogen: Molecule = {
    name: 'Nitrogen',
    description:
        'Two nitrogen atoms held together by a triple bond, one of the strongest bonds in chemistry. It makes up about 78% of the air and barely reacts with anything.',
    atoms: [
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: -0.556,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0.556,
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
            order: BondOrder.Triple,
        },
    ],
};
