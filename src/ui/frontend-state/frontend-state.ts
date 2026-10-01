import {assertWrap, check} from '@augment-vir/assert';
import {Observable} from 'element-vir';
import {type FullSpaRoute, PathTree, SpaRouter} from 'spa-router-vir';
import {allMoleculeEntries, type MoleculeEntry} from '../../data/all-molecules.js';
import {createMoleculesLocalDbClient} from './frontend-clients/local-db.client.js';

export const frontendPathTree = new PathTree({
    allowBare: false,
    children: {
        molecule: {
            allowBare: true,
            children: {
                ':molecule-name': {},
            },
        },
    },
});

export type FrontendPaths = Readonly<typeof frontendPathTree.PathsType>;
export type FrontendRoute = Readonly<FullSpaRoute<FrontendPaths, undefined, undefined>>;
export type FrontendRouter = SpaRouter<FrontendPaths>;

/** Every route shows a molecule, so unknown or bare paths redirect to the first one. */
export function getRouteMoleculeEntry(route: Readonly<Pick<FullSpaRoute, 'paths'>>) {
    const routeName = route.paths[0] === 'molecule' ? route.paths[1] : undefined;
    return (
        allMoleculeEntries.find((entry) => entry.routeName === routeName) ||
        assertWrap.isDefined(allMoleculeEntries[0])
    );
}

export function createMoleculeRoute(
    entry: Readonly<Pick<MoleculeEntry, 'routeName'>>,
): FrontendRoute {
    return {
        paths: frontendPathTree.paths.children.molecule.children[':molecule-name'].fill(
            entry.routeName,
        ).fullPaths,
        search: undefined,
        hash: undefined,
    };
}

export async function createFrontendState() {
    const localDbClient = await createMoleculesLocalDbClient();
    const router: FrontendRouter = new SpaRouter({
        sanitizeRoute(rawRoute) {
            return createMoleculeRoute(getRouteMoleculeEntry(rawRoute));
        },
    });

    const frontendState = new Observable({
        equalityCheck: check.strictEquals,
        defaultValue: {
            router,
            localDbClient,
            currentRoute: router.readCurrentRoute(),
        },
    });

    router.listen(false, (currentRoute) => {
        frontendState.setValue({
            ...frontendState.value,
            currentRoute,
        });
    });

    return frontendState;
}

export type FrontendStateObservable = Awaited<ReturnType<typeof createFrontendState>>;
