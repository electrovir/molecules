import {assertWrap} from '@augment-vir/assert';
import {getObjectTypedEntries, getObjectTypedValues} from '@augment-vir/common';
import {moleculeSummaries} from './all-molecules.js';

const evolvedRouteNames = getObjectTypedValues(moleculeSummaries).flatMap(
    (summary) => summary.evolvesInto,
);

/** Molecules that start a chain: they evolve into something but nothing evolves into them. */
export const chainStartRouteNames = getObjectTypedEntries(moleculeSummaries)
    .filter(
        ([
            routeName,
            summary,
        ]) => {
            return summary.evolvesInto.length && !evolvedRouteNames.includes(routeName);
        },
    )
    .map(([routeName]) => routeName);

/**
 * The route name of the molecule that starts the given molecule's evolution chain. `undefined` when
 * the molecule isn't in any chain.
 *
 * The return type is annotated because the recursion leaves TypeScript nothing to infer from.
 */
export function findChainStart(routeName: string): string | undefined {
    const parentRouteName = getObjectTypedEntries(moleculeSummaries).find(
        ([
            ,
            summary,
        ]) => {
            return summary.evolvesInto.includes(routeName);
        },
    )?.[0];

    if (parentRouteName) {
        return findChainStart(parentRouteName);
    }

    return assertWrap.isDefined(moleculeSummaries[routeName]).evolvesInto.length
        ? routeName
        : undefined;
}
