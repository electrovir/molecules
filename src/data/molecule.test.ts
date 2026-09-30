import {createArray} from '@augment-vir/common';
import {describe, itCases} from '@augment-vir/test';
import {ChemicalElementSymbol} from './chemical-element.js';
import {getMoleculeFormula} from './molecule.js';

function toAtoms(elements: ReadonlyArray<ChemicalElementSymbol>) {
    return elements.map((element) => {
        return {
            element,
        };
    });
}

describe(getMoleculeFormula.name, () => {
    itCases(getMoleculeFormula, [
        {
            it: 'counts elements in order of first appearance',
            input: toAtoms([
                ChemicalElementSymbol.H,
                ChemicalElementSymbol.O,
                ChemicalElementSymbol.H,
            ]),
            expect: 'H₂O',
        },
        {
            it: 'puts oxygen first when it is listed first',
            input: toAtoms([
                ChemicalElementSymbol.O,
                ChemicalElementSymbol.H,
                ChemicalElementSymbol.H,
            ]),
            expect: 'OH₂',
        },
        {
            it: 'subscripts every digit of multi-digit counts',
            input: toAtoms(createArray(12, () => ChemicalElementSymbol.H)),
            expect: 'H₁₂',
        },
        {
            it: 'handles no atoms',
            input: [],
            expect: '',
        },
    ]);
});
