import {dirname, join} from 'node:path';

const monoRepoDirPath = dirname(dirname(dirname(import.meta.dirname)));
const frontendDataDirPath = join(monoRepoDirPath, 'packages', 'frontend', 'src', 'data');

export const moleculesDirPath = join(frontendDataDirPath, 'molecules');
export const allMoleculesFilePath = join(frontendDataDirPath, 'all-molecules.ts');
