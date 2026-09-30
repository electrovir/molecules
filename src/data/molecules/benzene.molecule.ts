import {createArray} from '@augment-vir/common';
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, type Molecule} from '../molecule.js';

const carbonRingRadius = 1.39;
const hydrogenRingRadius = carbonRingRadius + 1.09;
const ringSize = 6;

function getRingPosition({index, radius}: Readonly<{index: number; radius: number}>) {
    const angle = (index / ringSize) * 2 * Math.PI;
    return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle),
        z: 0,
    };
}

export const benzene: Molecule = {
    name: 'Benzene',
    description:
        'Six carbon atoms in a flat ring, each holding one hydrogen. The ring is drawn with alternating single and double bonds, but in reality its electrons are shared evenly around the whole ring, making it unusually stable.',
    atoms: [
        ...createArray(ringSize, (index) => {
            return {
                element: ChemicalElementSymbol.C,
                position: getRingPosition({
                    index,
                    radius: carbonRingRadius,
                }),
            };
        }),
        ...createArray(ringSize, (index) => {
            return {
                element: ChemicalElementSymbol.H,
                position: getRingPosition({
                    index,
                    radius: hydrogenRingRadius,
                }),
            };
        }),
    ],
    bonds: [
        ...createArray(ringSize, (index) => {
            return {
                atomIndexes: [
                    index,
                    (index + 1) % ringSize,
                ] satisfies [
                    number,
                    number,
                ],
                order: index % 2 ? BondOrder.Single : BondOrder.Double,
            };
        }),
        ...createArray(ringSize, (index) => {
            return {
                atomIndexes: [
                    index,
                    index + ringSize,
                ] satisfies [
                    number,
                    number,
                ],
                order: BondOrder.Single,
            };
        }),
    ],
};
