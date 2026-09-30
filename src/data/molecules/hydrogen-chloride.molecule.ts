import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, type Molecule} from '../molecule.js';

export const hydrogenChloride: Molecule = {
    name: 'Hydrogen Chloride',
    description:
        'A hydrogen atom bonded to a chlorine atom. Dissolved in water it becomes hydrochloric acid, the same acid your stomach uses to digest food.',
    atoms: [
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.3058,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.Cl,
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
                0,
                1,
            ],
            order: BondOrder.Single,
        },
    ],
};
