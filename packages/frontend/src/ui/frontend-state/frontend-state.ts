import {assertWrap, check} from '@augment-vir/assert';
import {attachOnResize, Observable} from 'element-vir';
import {type FullSpaRoute, PathTree, SpaRouter} from 'spa-router-vir';
import {joinUrlPaths, parseUrl} from 'url-vir';
import {ViraThemeClient, ViraThemeSelection} from 'vira';
import {moleculeRouteNames, moleculeSummaries} from '../../data/all-molecules.js';
import {createMoleculesLocalDbClient} from './frontend-clients/local-db.client.js';
import {determineScreenSize} from './screen-size.js';

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
        evolutions: {},
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
    evolutions(paths) {
        return {
            paths,
            search: undefined,
            hash: undefined,
        };
    },
};

const routeTitles: Record<FrontendPaths[0], (paths: FrontendPaths) => string> = {
    molecule(paths) {
        return assertWrap.isDefined(moleculeSummaries[assertWrap.isDefined(paths[1])]).name;
    },
    'all-molecules'() {
        return 'All Molecules';
    },
    evolutions() {
        return 'Evolutions';
    },
};

export async function createFrontendState(hostElement: Readonly<HTMLElement>) {
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
            screenSize: determineScreenSize({
                currentScreenSize: undefined,
                elementWidth: hostElement.clientWidth,
            }),
            hostResizeObserver: undefined satisfies ResizeObserver | undefined as
                | ResizeObserver
                | undefined,
        },
    });

    router.listen(true, (currentRoute) => {
        globalThis.document.title = routeTitles[currentRoute.paths[0]](currentRoute.paths);
        frontendState.setValue({
            ...frontendState.value,
            currentRoute,
        });
    });

    const {resizeObserver} = attachOnResize(hostElement, ({contentRect}) => {
        const screenSize = determineScreenSize({
            currentScreenSize: frontendState.value.screenSize,
            elementWidth: contentRect.width,
        });
        if (screenSize !== frontendState.value.screenSize) {
            frontendState.setValue({
                ...frontendState.value,
                screenSize,
            });
        }
    });
    frontendState.setValue({
        ...frontendState.value,
        hostResizeObserver: resizeObserver,
    });

    return frontendState;
}

export type FrontendStateObservable = Awaited<ReturnType<typeof createFrontendState>>;
