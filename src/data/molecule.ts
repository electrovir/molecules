import {getObjectTypedEntries} from '@augment-vir/common';
import {type ChemicalElementSymbol} from './chemical-element.js';

export type Coordinates = {
    x: number;
    y: number;
    z: number;
};

export type MoleculeAtom = {
    element: ChemicalElementSymbol;
    position: Coordinates;
};

export type VibrationMode = {
    name: string;
    waveNumberPerCentimeter: number;
    atomDisplacements: Coordinates[];
};

export enum BondOrder {
    Single = 1,
    Double = 2,
    Triple = 3,
}

export type MoleculeBond = {
    atomIndexes: [
        number,
        number,
    ];
    order: BondOrder;
};

export type Molecule = {
    name: string;
    description: string;
    atoms: MoleculeAtom[];
    bonds: MoleculeBond[];
    vibrationModes?: VibrationMode[] | undefined;
};

const subscriptDigits = '₀₁₂₃₄₅₆₇₈₉';

export function getMoleculeFormula(atoms: ReadonlyArray<Readonly<Pick<MoleculeAtom, 'element'>>>) {
    const elementCounts = atoms.reduce<Partial<Record<ChemicalElementSymbol, number>>>(
        (counts, atom) => {
            return {
                ...counts,
                [atom.element]: (counts[atom.element] ?? 0) + 1,
            };
        },
        {},
    );

    return getObjectTypedEntries(elementCounts)
        .map(
            ([
                element,
                count,
            ]) => {
                const subscript =
                    count && count > 1
                        ? String(count).replaceAll(
                              /\d/g,
                              (digit) => subscriptDigits[Number(digit)] || '',
                          )
                        : '';
                return element + subscript;
            },
        )
        .join('');
}
