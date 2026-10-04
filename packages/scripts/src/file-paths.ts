import {dirname, join} from 'node:path';

const monoRepoDirPath = dirname(dirname(dirname(import.meta.dirname)));
const frontendDirPath = join(monoRepoDirPath, 'packages', 'frontend');
const frontendDataDirPath = join(frontendDirPath, 'src', 'data');

export const moleculesDirPath = join(frontendDataDirPath, 'molecules');
export const allMoleculesFilePath = join(frontendDataDirPath, 'all-molecules.ts');

export const frontendViteConfigFilePath = join(frontendDirPath, 'configs', 'vite.config.ts');
export const moleculeImagesDirPath = join(frontendDirPath, 'www-static', 'molecule-images');
export const pronunciationsDirPath = join(frontendDirPath, 'www-static', 'pronunciations');
