import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {moleculeRouteNames} from './all-molecules.js';
import {getTotalBondOrder, type Molecule} from './molecule.js';

async function loadAllMolecules() {
    return await Promise.all(
        moleculeRouteNames.map(async (routeName): Promise<Molecule> => {
            return (await import(`./molecules/${routeName}.molecule.ts`)).default;
        }),
    );
}

describe('moleculeRouteNames', () => {
    it('is sorted and has route names that match each molecule', async () => {
        const molecules = await loadAllMolecules();

        assert.deepEquals(
            moleculeRouteNames,
            molecules.map((molecule) => molecule.name.toLowerCase().replaceAll(' ', '-')),
        );
        assert.deepEquals(
            molecules,
            molecules.toSorted((first, second) => {
                return (
                    first.atoms.length - second.atoms.length ||
                    getTotalBondOrder(first.bonds) - getTotalBondOrder(second.bonds)
                );
            }),
        );
    });
    it('only evolves into molecules that exist', async () => {
        const molecules = await loadAllMolecules();

        assert.deepEquals(
            molecules
                .flatMap((molecule) => molecule.stats.evolvesInto ?? [])
                .filter((routeName) => !moleculeRouteNames.includes(routeName)),
            [],
        );
    });
});
