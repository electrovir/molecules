import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {allMoleculeEntries} from './all-molecules.js';
import {getTotalBondOrder} from './molecule.js';

describe('allMoleculeEntries', () => {
    it('is sorted and has route names that match each molecule', async () => {
        const molecules = await Promise.all(
            allMoleculeEntries.map((entry) => entry.loadMolecule()),
        );

        assert.deepEquals(
            allMoleculeEntries.map((entry) => entry.routeName),
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
        const molecules = await Promise.all(
            allMoleculeEntries.map((entry) => entry.loadMolecule()),
        );
        const routeNames = allMoleculeEntries.map((entry) => entry.routeName);

        assert.deepEquals(
            molecules
                .flatMap((molecule) => molecule.stats.evolvesInto ?? [])
                .filter((routeName) => !routeNames.includes(routeName)),
            [],
        );
    });
});
