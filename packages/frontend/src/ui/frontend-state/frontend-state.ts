import {assertWrap, check} from '@augment-vir/assert';
import {attachOnResize, Observable} from 'element-vir';
import {type FullSpaRoute, PathTree, SpaRouter} from 'spa-router-vir';
import {joinUrlPaths, parseUrl} from 'url-vir';
import {ViraThemeClient, ViraThemeSelection} from 'vira';
import {moleculeRouteNames, moleculeSummaries} from '../../data/all-molecules.js';
import {chemicalElements, type ChemicalElementSymbol} from '../../data/chemical-element.js';
import {
    elementSymbols,
    findElementByRouteName,
    getElementRouteName,
} from '../../data/periodic-table.js';
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
        atom: {
            allowBare: true,
            children: {
                ':atom-name': {},
            },
        },
        atoms: {},
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

/** The route's element. Paths without a known element name give hydrogen. */
export function getRouteElementSymbol(route: Readonly<Pick<FullSpaRoute, 'paths'>>) {
    return (
        (route.paths[0] === 'atom' && route.paths[1]
            ? findElementByRouteName(route.paths[1])
            : undefined) ?? assertWrap.isDefined(elementSymbols[0])
    );
}

export function createAtomRoute(symbol: ChemicalElementSymbol): FrontendRoute {
    return {
        paths: frontendPathTree.paths.children.atom.children[':atom-name'].fill(
            getElementRouteName(symbol),
        ).fullPaths,
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
    /** The path tree accepts any atom name, so unknown names fall back to hydrogen. */
    atom(paths) {
        return createAtomRoute(
            getRouteElementSymbol({
                paths,
            }),
        );
    },
    atoms(paths) {
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
    atom(paths) {
        return chemicalElements[
            getRouteElementSymbol({
                paths,
            })
        ].name;
    },
    atoms() {
        return 'Periodic Table';
    },
};

/** Molecule and atom pages, which the list pages' buttons toggle back to. */
const detailPages: ReadonlyArray<FrontendPaths[0]> = [
    'molecule',
    'atom',
];

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

    const initialRoute = router.readCurrentRoute();

    const frontendState = new Observable({
        equalityCheck: check.strictEquals,
        defaultValue: {
            router,
            localDbClient,
            themeClient,
            currentRoute: initialRoute,
            /** The last molecule or atom page visited. */
            lastDetailRoute: detailPages.includes(initialRoute.paths[0])
                ? initialRoute
                : createMoleculeRoute(assertWrap.isDefined(moleculeRouteNames[0])),
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
            lastDetailRoute: detailPages.includes(currentRoute.paths[0])
                ? currentRoute
                : frontendState.value.lastDetailRoute,
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
