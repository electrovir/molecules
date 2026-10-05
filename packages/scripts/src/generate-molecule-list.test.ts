import {assert} from '@augment-vir/assert';
import {describe, it, itCases} from '@augment-vir/test';
import {readFile} from 'node:fs/promises';
import {allMoleculesFilePath} from './file-paths.js';
import {generateAllMoleculesCode, orderByEvolutionLine} from './generate-molecule-list.js';

describe(generateAllMoleculesCode.name, () => {
    it('matches the current all-molecules.ts, so run `npm run init` if this fails', async () => {
        assert.strictEquals(
            await readFile(allMoleculesFilePath, 'utf8'),
            await generateAllMoleculesCode(),
        );
    });
});

describe(orderByEvolutionLine.name, () => {
    itCases(
        (...entries: Parameters<typeof orderByEvolutionLine>[0]) => {
            return orderByEvolutionLine(entries).map((entry) => entry.routeName);
        },
        [
            {
                it: 'finishes each evolution branch before starting the next one',
                inputs: [
                    {
                        routeName: 'start',
                        evolvesInto: [
                            'second-branch',
                            'first-branch',
                        ],
                    },
                    {
                        routeName: 'loner',
                        evolvesInto: [],
                    },
                    {
                        routeName: 'first-branch',
                        evolvesInto: ['first-branch-end'],
                    },
                    {
                        routeName: 'second-branch',
                        evolvesInto: [],
                    },
                    {
                        routeName: 'first-branch-end',
                        evolvesInto: [],
                    },
                ],
                expect: [
                    'start',
                    'first-branch',
                    'first-branch-end',
                    'second-branch',
                    'loner',
                ],
            },
            {
                it: 'places a shared evolution only after its first parent',
                inputs: [
                    {
                        routeName: 'hydrogen',
                        evolvesInto: ['water'],
                    },
                    {
                        routeName: 'oxygen',
                        evolvesInto: [
                            'ozone',
                            'water',
                        ],
                    },
                    {
                        routeName: 'water',
                        evolvesInto: [],
                    },
                    {
                        routeName: 'ozone',
                        evolvesInto: [],
                    },
                ],
                expect: [
                    'hydrogen',
                    'water',
                    'oxygen',
                    'ozone',
                ],
            },
        ],
    );
});
