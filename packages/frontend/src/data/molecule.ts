import {getObjectTypedEntries, type PartialWithUndefined} from '@augment-vir/common';
import {chemicalElements, type ChemicalElementSymbol} from './chemical-element.js';

export type Coordinates = {
    x: number;
    y: number;
    z: number;
};

export type MoleculeAtom = {
    element: ChemicalElementSymbol;
    position: Coordinates;
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

export enum MatterState {
    Gas = 'gas',
    Liquid = 'liquid',
    Solid = 'solid',
}

export enum GhsPictogram {
    Explosive = 'GHS01',
    Flammable = 'GHS02',
    Oxidizer = 'GHS03',
    CompressedGas = 'GHS04',
    Corrosive = 'GHS05',
    AcuteToxicity = 'GHS06',
    Irritant = 'GHS07',
    HealthHazard = 'GHS08',
    EnvironmentalHazard = 'GHS09',
}

export type MoleculeStats = PartialWithUndefined<{
    stateAtRoomTemperature: MatterState;
    meltingPointCelsius: number;
    boilingPointCelsius: number;
    sublimationPointCelsius: number;
    densityGramsPerCubicCentimeter: number;
    waterSolubilityGramsPerLiter: number;
    isWaterMiscible: boolean;
    logP: number;
    dipoleMomentDebye: number;
    oralRatLethalDoseMilligramsPerKilogram: number;
    hazardPictograms: GhsPictogram[];
    yearDiscovered: number;
    smell: string;
    taste: string;
    habitat: string;
    evolvesInto: Molecule[];
}>;

export type Molecule = {
    name: string;
    /** Matches this molecule's `.molecule.ts` file name. Used as its URL path segment. */
    routeName: string;
    /**
     * Kokoro phonemes (misaki US notation) that `npm run build:pronunciations` speaks to make this
     * molecule's name clip. Most come from misaki's lexicon, tuned where Kokoro said them wrong by
     * scoring against Google's dictionary clips.
     *
     * A space inside a word splits it where Kokoro would otherwise blend two sounds, such as the
     * "eye-uh" in thiamine.
     */
    pronunciation: string;
    /**
     * Shifts which of the voice's styles speaks `pronunciation`. Kokoro picks a style from the
     * phoneme count, and a neighboring style can fix a vowel no phoneme change does, such as the
     * "tay" in DDT.
     */
    pronunciationStyleOffset?: number | undefined;
    /** What the molecule is built from and its shape. */
    structureDescription: string;
    /** Where the molecule shows up in everyday life and what it does there. */
    realLifeDescription: string;
    stats: MoleculeStats;
    atoms: MoleculeAtom[];
    bonds: MoleculeBond[];
};

export function getMolarMass(atoms: ReadonlyArray<Readonly<Pick<MoleculeAtom, 'element'>>>) {
    return atoms.reduce((total, atom) => total + chemicalElements[atom.element].atomicMass, 0);
}

export function getTotalBondOrder(bonds: ReadonlyArray<Readonly<Pick<MoleculeBond, 'order'>>>) {
    return bonds.reduce((total, bond) => total + bond.order, 0);
}

export function getMoleculeSize(atoms: ReadonlyArray<Readonly<Pick<MoleculeAtom, 'position'>>>) {
    return atoms.reduce((largest, first, firstIndex) => {
        return atoms.slice(firstIndex + 1).reduce((innerLargest, second) => {
            return Math.max(
                innerLargest,
                Math.hypot(
                    first.position.x - second.position.x,
                    first.position.y - second.position.y,
                    first.position.z - second.position.z,
                ),
            );
        }, largest);
    }, 0);
}

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
