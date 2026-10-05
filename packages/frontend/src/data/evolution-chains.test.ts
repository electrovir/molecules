import {describe, itCases} from '@augment-vir/test';
import {findChainStart} from './evolution-chains.js';

describe(findChainStart.name, () => {
    itCases(findChainStart, [
        {
            it: 'walks up to the start of a three molecule chain',
            input: 'aspirin',
            expect: 'benzene',
        },
        {
            it: 'returns a chain start as its own start',
            input: 'benzene',
            expect: 'benzene',
        },
        {
            it: 'returns undefined for a molecule outside every chain',
            input: 'lactic-acid',
            expect: undefined,
        },
    ]);
});
