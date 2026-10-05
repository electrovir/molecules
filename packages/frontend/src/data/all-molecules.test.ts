import {assert, assertWrap} from '@augment-vir/assert';
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
    it('has route names that match each molecule', async () => {
        const molecules = await loadAllMolecules();

        assert.deepEquals(
            moleculeRouteNames,
            molecules.map((molecule) => molecule.routeName),
        );
    });
    it('sorts molecules that start an evolution line by complexity', async () => {
        const molecules = await loadAllMolecules();
        const lineStarts = molecules.filter((molecule) => {
            return !molecules.some((parent) => parent.stats.evolvesInto?.includes(molecule));
        });

        assert.deepEquals(
            lineStarts,
            lineStarts.toSorted((first, second) => {
                return (
                    first.atoms.length - second.atoms.length ||
                    getTotalBondOrder(first.bonds) - getTotalBondOrder(second.bonds)
                );
            }),
        );
    });
    it("numbers each evolution within its parent's line", async () => {
        const molecules = await loadAllMolecules();

        /** Annotated because the recursion leaves TypeScript nothing to infer from. */
        function getDescendants(molecule: Readonly<Molecule>): Molecule[] {
            return (molecule.stats.evolvesInto ?? []).flatMap((evolution) => {
                return [
                    evolution,
                    ...getDescendants(evolution),
                ];
            });
        }

        assert.deepEquals(
            molecules.flatMap((molecule, index) => {
                const parentIndex = molecules.findIndex((parent) => {
                    return parent.stats.evolvesInto?.includes(molecule);
                });

                if (parentIndex === -1) {
                    return [];
                }

                const parent = assertWrap.isDefined(molecules[parentIndex]);

                return index > parentIndex &&
                    molecules
                        .slice(parentIndex + 1, index)
                        .every((between) => getDescendants(parent).includes(between))
                    ? []
                    : [
                          `${parent.name} -> ${molecule.name}`,
                      ];
            }),
            [],
        );
    });
    it('only evolves into more complex molecules', async () => {
        const molecules = await loadAllMolecules();

        function isMoreComplex({
            molecule,
            than,
        }: Readonly<{molecule: Readonly<Molecule>; than: Readonly<Molecule>}>) {
            return (
                molecule.atoms.length > than.atoms.length ||
                (molecule.atoms.length === than.atoms.length &&
                    getTotalBondOrder(molecule.bonds) > getTotalBondOrder(than.bonds))
            );
        }

        assert.deepEquals(
            molecules.flatMap((molecule) => {
                return (molecule.stats.evolvesInto ?? [])
                    .filter((evolution) => {
                        return !isMoreComplex({
                            molecule: evolution,
                            than: molecule,
                        });
                    })
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
