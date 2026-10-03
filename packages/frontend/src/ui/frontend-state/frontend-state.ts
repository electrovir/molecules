import {assertWrap, check} from '@augment-vir/assert';
import {Observable} from 'element-vir';
import {type FullSpaRoute, PathTree, SpaRouter} from 'spa-router-vir';
import {ViraThemeClient, ViraThemeSelection} from 'vira';
import {moleculeRouteNames} from '../../data/all-molecules.js';
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

/**
 * The route's index in `moleculeRouteNames`. Every route shows a molecule, so unknown or bare paths
 * give the first one.
 */
export function getRouteMoleculeIndex(route: Readonly<Pick<FullSpaRoute, 'paths'>>) {
    const index =
        route.paths[0] === 'molecule' && route.paths[1]
            ? moleculeRouteNames.indexOf(route.paths[1])
            : -1;
    return Math.max(index, 0);
}

export function createMoleculeRoute(routeName: string): FrontendRoute {
    return {
        paths: frontendPathTree.paths.children.molecule.children[':molecule-name'].fill(routeName)
            .fullPaths,
        search: undefined,
        hash: undefined,
    };
}

export async function createFrontendState() {
    const localDbClient = await createMoleculesLocalDbClient();
    const router: FrontendRouter = new SpaRouter({
        basePath: 'molecules',
        sanitizeRoute(rawRoute) {
            return createMoleculeRoute(
                assertWrap.isDefined(moleculeRouteNames[getRouteMoleculeIndex(rawRoute)]),
            );
        },
    });

    const themeClient = new ViraThemeClient();
    themeClient.setSelectedTheme(ViraThemeSelection.Dark);

    const frontendState = new Observable({
        equalityCheck: check.strictEquals,
        defaultValue: {
            router,
            localDbClient,
            themeClient,
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
