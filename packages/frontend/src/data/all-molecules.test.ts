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
            molecules.map((molecule) => molecule.routeName),
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
    it('only evolves into more complex molecules', async () => {
        const molecules = await loadAllMolecules();

        function isMoreComplex(first: Readonly<Molecule>, second: Readonly<Molecule>) {
            return (
                first.atoms.length > second.atoms.length ||
                (first.atoms.length === second.atoms.length &&
                    getTotalBondOrder(first.bonds) > getTotalBondOrder(second.bonds))
            );
        }

        assert.deepEquals(
            molecules.flatMap((molecule) => {
                return (molecule.stats.evolvesInto ?? [])
                    .filter((evolution) => !isMoreComplex(evolution, molecule))
                    .map((evolution) => `${molecule.name} -> ${evolution.name}`);
            }),
            [],
        );
    });
    it('has at most 2 evolutions per molecule', async () => {
        const molecules = await loadAllMolecules();

        assert.deepEquals(
            molecules
                .filter((molecule) => (molecule.stats.evolvesInto?.length ?? 0) > 2)
                .map((molecule) => molecule.name),
            [],
        );
    });
    it('has at most 1 molecule evolving into each molecule', async () => {
        const molecules = await loadAllMolecules();

        const evolutionNames = molecules.flatMap((molecule) => {
            return (molecule.stats.evolvesInto ?? []).map((evolution) => evolution.name);
        });

        assert.deepEquals(
            evolutionNames.filter((name, index) => evolutionNames.indexOf(name) !== index),
            [],
        );
    });
    it('has evolution chains of at most 3 molecules', async () => {
        const molecules = await loadAllMolecules();

        /** Annotated because the recursion leaves TypeScript nothing to infer from. */
        function getLongestChainLength(molecule: Readonly<Molecule>): number {
            return (
                1 + Math.max(0, ...(molecule.stats.evolvesInto ?? []).map(getLongestChainLength))
            );
        }

        assert.deepEquals(
            molecules
                .filter((molecule) => getLongestChainLength(molecule) > 3)
                .map((molecule) => molecule.name),
            [],
        );
    });
});
