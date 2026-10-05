// cspell:word metalloids
import {assertWrap} from '@augment-vir/assert';
import {getObjectTypedKeys} from '@augment-vir/common';
import {chemicalElements, ChemicalElementSymbol} from './chemical-element.js';

/** Every element symbol, ordered by atomic number. */
export const elementSymbols = getObjectTypedKeys(chemicalElements).toSorted(
    (first, second) => chemicalElements[first].atomicNumber - chemicalElements[second].atomicNumber,
);

/** The element's URL path segment: its name in lowercase, such as `carbon`. */
export function getElementRouteName(symbol: ChemicalElementSymbol) {
    return chemicalElements[symbol].name.toLowerCase();
}

/** `undefined` when no element has the given route name. */
export function findElementByRouteName(routeName: string) {
    return elementSymbols.find((symbol) => getElementRouteName(symbol) === routeName);
}

/** The last atomic number in each period. */
const periodEnds = [
    2,
    10,
    18,
    36,
    54,
    86,
    118,
];

/**
 * The element's 1-based row and column in an 18 column periodic table. The lanthanides (57–71) and
 * actinides (89–103) sit in rows 9 and 10 below the main table, leaving row 8 empty as a gap and
 * group 3 empty in periods 6 and 7.
 *
 * @example
 *
 * ```ts
 * getPeriodicTablePosition(2); // {row: 1, column: 18}
 * getPeriodicTablePosition(57); // {row: 9, column: 3}
 * ```
 */
export function getPeriodicTablePosition(atomicNumber: number) {
    const periodIndex = periodEnds.findIndex((end) => atomicNumber <= end);
    const periodEnd = assertWrap.isDefined(periodEnds[periodIndex]);
    const periodStart = (periodEnds[periodIndex - 1] ?? 0) + 1;
    const indexInPeriod = atomicNumber - periodStart;
    const period = periodIndex + 1;
    const isLongPeriod = periodEnd - periodStart + 1 === 32;

    if (isLongPeriod && indexInPeriod >= 2 && indexInPeriod < 17) {
        return {
            row: period + 3,
            column: indexInPeriod + 1,
        };
    }

    const column =
        indexInPeriod === 0
            ? 1
            : indexInPeriod === 1 && period > 1
              ? 2
              : 18 - (periodEnd - atomicNumber);

    return {
        row: period,
        column,
    };
}

/**
 * The element's period and group (1–18). Lanthanides and actinides have no group, since they sit in
 * their own rows below the table.
 *
 * @example
 *
 * ```ts
 * getPeriodAndGroup(26); // {period: 4, group: 8}
 * getPeriodAndGroup(58); // {period: 6, group: undefined}
 * ```
 */
export function getPeriodAndGroup(atomicNumber: number) {
    const {row, column} = getPeriodicTablePosition(atomicNumber);
    const isBelowTable = row > periodEnds.length;
    return {
        period: isBelowTable ? row - 3 : row,
        group: isBelowTable ? undefined : column,
    };
}

export enum ElementType {
    AlkaliMetal = 'alkali-metal',
    AlkalineEarthMetal = 'alkaline-earth-metal',
    TransitionMetal = 'transition-metal',
    PostTransitionMetal = 'post-transition-metal',
    Metalloid = 'metalloid',
    Nonmetal = 'nonmetal',
    Halogen = 'halogen',
    NobleGas = 'noble-gas',
    Lanthanide = 'lanthanide',
    Actinide = 'actinide',
}

export const elementTypeLabels: Readonly<Record<ElementType, string>> = {
    [ElementType.AlkaliMetal]: 'Alkali metal',
    [ElementType.AlkalineEarthMetal]: 'Alkaline earth metal',
    [ElementType.TransitionMetal]: 'Transition metal',
    [ElementType.PostTransitionMetal]: 'Post-transition metal',
    [ElementType.Metalloid]: 'Metalloid',
    [ElementType.Nonmetal]: 'Nonmetal',
    [ElementType.Halogen]: 'Halogen',
    [ElementType.NobleGas]: 'Noble gas',
    [ElementType.Lanthanide]: 'Lanthanide',
    [ElementType.Actinide]: 'Actinide',
};

const metalloids: ReadonlyArray<ChemicalElementSymbol> = [
    ChemicalElementSymbol.B,
    ChemicalElementSymbol.Si,
    ChemicalElementSymbol.Ge,
    ChemicalElementSymbol.As,
    ChemicalElementSymbol.Sb,
    ChemicalElementSymbol.Te,
];

/** Groups 13–16 hold metals, metalloids, and nonmetals, so only these get named outright. */
const pBlockNonmetals: ReadonlyArray<ChemicalElementSymbol> = [
    ChemicalElementSymbol.C,
    ChemicalElementSymbol.N,
    ChemicalElementSymbol.O,
    ChemicalElementSymbol.P,
    ChemicalElementSymbol.S,
    ChemicalElementSymbol.Se,
];

/**
 * The element's family on a typical school periodic table. Lanthanum and actinium count as a
 * lanthanide and an actinide. The superheavy elements past 103 get their group's family, though too
 * few atoms have been made to confirm how they behave.
 */
export function getElementType(symbol: ChemicalElementSymbol) {
    const {row, column} = getPeriodicTablePosition(chemicalElements[symbol].atomicNumber);
    const lanthanideRow = periodEnds.length + 2;

    if (row === lanthanideRow) {
        return ElementType.Lanthanide;
    } else if (row === lanthanideRow + 1) {
        return ElementType.Actinide;
    } else if (symbol === ChemicalElementSymbol.H || pBlockNonmetals.includes(symbol)) {
        return ElementType.Nonmetal;
    } else if (metalloids.includes(symbol)) {
        return ElementType.Metalloid;
    } else if (column === 1) {
        return ElementType.AlkaliMetal;
    } else if (column === 2) {
        return ElementType.AlkalineEarthMetal;
    } else if (column <= 12) {
        return ElementType.TransitionMetal;
    } else if (column === 17) {
        return ElementType.Halogen;
    } else if (column === 18) {
        return ElementType.NobleGas;
    } else {
        return ElementType.PostTransitionMetal;
    }
}
