import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, type Molecule} from '../molecule.js';

export const hydrogenPeroxide: Molecule = {
    name: 'Hydrogen Peroxide',
    description:
        'Two oxygen atoms bonded to each other, each carrying a hydrogen, in a twisted shape. The weak oxygen-oxygen bond breaks easily, which is why it bubbles on cuts and works as a bleach.',
    atoms: [
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.8233,
                y: -0.7,
                z: -0.6676,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.8233,
                y: -0.6175,
                z: 0.7446,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.7247,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.7247,
                y: 0,
                z: 0,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                2,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                3,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                3,
            ],
            order: BondOrder.Single,
        },
    ],
};
