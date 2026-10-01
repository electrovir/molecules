import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {readFile} from 'node:fs/promises';
import {allMoleculesFilePath} from './file-paths.js';
import {generateAllMoleculesCode} from './generate-molecule-list.js';

describe(generateAllMoleculesCode.name, () => {
    it('matches the current all-molecules.ts, so run `npm run init` if this fails', async () => {
        assert.strictEquals(
            await readFile(allMoleculesFilePath, 'utf8'),
            await generateAllMoleculesCode(),
        );
    });
});
