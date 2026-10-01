import {createArray} from '@augment-vir/common';
import {describe, itCases} from '@augment-vir/test';
import {ChemicalElementSymbol} from './chemical-element.js';
import {getMolarMass, getMoleculeFormula, getMoleculeSize} from './molecule.js';

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

describe(getMolarMass.name, () => {
    itCases(getMolarMass, [
        {
            it: 'sums atomic masses',
            input: toAtoms([
                ChemicalElementSymbol.H,
                ChemicalElementSymbol.H,
                ChemicalElementSymbol.O,
            ]),
            expect: 1.008 * 2 + 15.999,
        },
        {
            it: 'handles no atoms',
            input: [],
            expect: 0,
        },
    ]);
});

describe(getMoleculeSize.name, () => {
    itCases(getMoleculeSize, [
        {
            it: 'finds the largest distance between any two atoms',
            input: [
                {
                    position: {
                        x: 0,
                        y: 0,
                        z: 0,
                    },
                },
                {
                    position: {
                        x: 3,
                        y: 4,
                        z: 0,
                    },
                },
                {
                    position: {
                        x: 1,
                        y: 1,
                        z: 0,
                    },
                },
            ],
            expect: 5,
        },
        {
            it: 'is zero for a single atom',
            input: [
                {
                    position: {
                        x: 1,
                        y: 2,
                        z: 3,
                    },
                },
            ],
            expect: 0,
        },
    ]);
});
