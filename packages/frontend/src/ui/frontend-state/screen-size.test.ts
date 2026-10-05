import {describe, itCases} from '@augment-vir/test';
import {determineScreenSize, ScreenSize} from './screen-size.js';

describe(determineScreenSize.name, () => {
    itCases(determineScreenSize, [
        {
            it: 'picks phone for narrow widths',
            input: {
                currentScreenSize: undefined,
                elementWidth: 400,
            },
            expect: ScreenSize.Phone,
        },
        {
            it: 'picks desktop for wide widths',
            input: {
                currentScreenSize: undefined,
                elementWidth: 1200,
            },
            expect: ScreenSize.Desktop,
        },
        {
            it: 'keeps the current size just past a boundary',
            input: {
                currentScreenSize: ScreenSize.Phone,
                elementWidth: 710,
            },
            expect: ScreenSize.Phone,
        },
        {
            it: 'keeps desktop just under a boundary',
            input: {
                currentScreenSize: ScreenSize.Desktop,
                elementWidth: 690,
            },
            expect: ScreenSize.Desktop,
        },
        {
            it: 'switches once far enough past a boundary',
            input: {
                currentScreenSize: ScreenSize.Phone,
                elementWidth: 800,
            },
            expect: ScreenSize.Desktop,
        },
    ]);
});
