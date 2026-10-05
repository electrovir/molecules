// cspell:words oganesson
import {assert} from '@augment-vir/assert';
import {describe, it, itCases} from '@augment-vir/test';
import {ChemicalElementSymbol} from './chemical-element.js';
import {
    elementSymbols,
    ElementType,
    findElementByRouteName,
    getElementType,
    getPeriodAndGroup,
    getPeriodicTablePosition,
} from './periodic-table.js';

describe(getPeriodicTablePosition.name, () => {
    itCases(getPeriodicTablePosition, [
        {
            it: 'puts hydrogen in the first column',
            input: 1,
            expect: {
                row: 1,
                column: 1,
            },
        },
        {
            it: 'puts helium in the last column',
            input: 2,
            expect: {
                row: 1,
                column: 18,
            },
        },
        {
            it: 'skips the gap in period 2',
            input: 6,
            expect: {
                row: 2,
                column: 14,
            },
        },
        {
            it: 'moves lanthanum to the lanthanide row',
            input: 57,
            expect: {
                row: 9,
                column: 3,
            },
        },
        {
            it: 'puts hafnium after the lanthanide gap',
            input: 72,
            expect: {
                row: 6,
                column: 4,
            },
        },
        {
            it: 'ends the actinide row at lawrencium',
            input: 103,
            expect: {
                row: 10,
                column: 17,
            },
        },
        {
            it: 'puts oganesson in the last cell',
            input: 118,
            expect: {
                row: 7,
                column: 18,
            },
        },
    ]);
});

describe(getPeriodAndGroup.name, () => {
    itCases(getPeriodAndGroup, [
        {
            it: 'gives a transition metal its group',
            input: 26,
            expect: {
                period: 4,
                group: 8,
            },
        },
        {
            it: 'gives a lanthanide no group',
            input: 58,
            expect: {
                period: 6,
                group: undefined,
            },
        },
    ]);
});

describe(getElementType.name, () => {
    itCases(getElementType, [
        {
            it: 'keeps hydrogen out of the alkali metals',
            input: ChemicalElementSymbol.H,
            expect: ElementType.Nonmetal,
        },
        {
            it: 'finds an alkali metal',
            input: ChemicalElementSymbol.Na,
            expect: ElementType.AlkaliMetal,
        },
        {
            it: 'finds a metalloid',
            input: ChemicalElementSymbol.Si,
            expect: ElementType.Metalloid,
        },
        {
            it: 'finds a post-transition metal',
            input: ChemicalElementSymbol.Al,
            expect: ElementType.PostTransitionMetal,
        },
        {
            it: 'counts lanthanum as a lanthanide',
            input: ChemicalElementSymbol.La,
            expect: ElementType.Lanthanide,
        },
        {
            it: 'finds an alkaline earth metal',
            input: ChemicalElementSymbol.Mg,
            expect: ElementType.AlkalineEarthMetal,
        },
        {
            it: 'finds a transition metal',
            input: ChemicalElementSymbol.Fe,
            expect: ElementType.TransitionMetal,
        },
        {
            it: 'finds a p-block nonmetal',
            input: ChemicalElementSymbol.C,
            expect: ElementType.Nonmetal,
        },
        {
            it: 'finds a halogen',
            input: ChemicalElementSymbol.Cl,
            expect: ElementType.Halogen,
        },
        {
            it: 'finds a noble gas',
            input: ChemicalElementSymbol.Ne,
            expect: ElementType.NobleGas,
        },
        {
            it: 'finds an actinide',
            input: ChemicalElementSymbol.U,
            expect: ElementType.Actinide,
        },
    ]);
});

describe('elementSymbols', () => {
    it('orders elements by atomic number', () => {
        assert.deepEquals(
            [
                elementSymbols[0],
                elementSymbols[1],
                elementSymbols.at(-1),
            ],
            [
                ChemicalElementSymbol.H,
                ChemicalElementSymbol.He,
                ChemicalElementSymbol.Og,
            ],
        );
    });
});

describe(findElementByRouteName.name, () => {
    itCases(findElementByRouteName, [
        {
            it: 'finds an element by its lowercase name',
            input: 'carbon',
            expect: ChemicalElementSymbol.C,
        },
        {
            it: 'gives undefined for an unknown name',
            input: 'kryptonite',
            expect: undefined,
        },
    ]);
});
