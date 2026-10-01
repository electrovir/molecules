/**
 * Rewrites the frontend's `all-molecules.ts` from the `.molecule.ts` files in
 * `packages/frontend/src/data/molecules/`. Run it after adding, removing, or renaming a molecule:
 *
 *     npm run init
 */
import {log} from '@augment-vir/common';
import {writeFile} from 'node:fs/promises';
import {allMoleculesFilePath} from './file-paths.js';
import {generateAllMoleculesCode} from './generate-molecule-list.js';

try {
    await writeFile(allMoleculesFilePath, await generateAllMoleculesCode());
    log.success(`Wrote ${allMoleculesFilePath}`);
    process.exit(0);
} catch (error) {
    log.error(error);
    process.exit(1);
}
