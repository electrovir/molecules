import {assertWrap, check} from '@augment-vir/assert';
import {Observable} from 'element-vir';
import {type FullSpaRoute, PathTree, SpaRouter} from 'spa-router-vir';
import {joinUrlPaths, parseUrl} from 'url-vir';
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
        'all-molecules': {},
    },
});

const routerBasePath = 'molecules';

/**
 * Absolute URL path to a file in `www-static`. Includes the router's base path only when the
 * current URL does, matching how the router builds its own URLs.
 */
export function createStaticFileUrl(...paths: ReadonlyArray<string>) {
    return joinUrlPaths(
        '',
        ...(parseUrl(globalThis.location.href).paths[0] === routerBasePath
            ? [
                  routerBasePath,
              ]
            : []),
        ...paths,
    );
}

export type FrontendPaths = Readonly<typeof frontendPathTree.PathsType>;
export type FrontendRoute = Readonly<FullSpaRoute<FrontendPaths, undefined, undefined>>;
export type FrontendRouter = SpaRouter<FrontendPaths>;

/**
 * The route's index in `moleculeRouteNames`. Paths without a known molecule name give the first
 * one.
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

/** Finishes sanitizing paths that already match {@link frontendPathTree}, by their top level path. */
const routeSanitizers: Record<FrontendPaths[0], (paths: FrontendPaths) => FrontendRoute> = {
    /** The path tree accepts any molecule name, so unknown names fall back to the first molecule. */
    molecule(paths) {
        return createMoleculeRoute(
            assertWrap.isDefined(
                moleculeRouteNames[
                    getRouteMoleculeIndex({
                        paths,
                    })
                ],
            ),
        );
    },
    'all-molecules'(paths) {
        return {
            paths,
            search: undefined,
            hash: undefined,
        };
    },
};

export async function createFrontendState() {
    const localDbClient = await createMoleculesLocalDbClient();
    const router: FrontendRouter = new SpaRouter({
        basePath: routerBasePath,
        sanitizeRoute(rawRoute) {
            const paths = frontendPathTree.sanitizePaths(rawRoute.paths);

            return routeSanitizers[paths[0]](paths);
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
