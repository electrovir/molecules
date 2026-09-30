import {assertWrap, check} from '@augment-vir/assert';
import {Observable} from 'element-vir';
import {type FullSpaRoute, PathTree, SpaRouter} from 'spa-router-vir';
import {allMolecules} from '../../data/all-molecules.js';

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
export function getRouteMolecule(route: Readonly<Pick<FullSpaRoute, 'paths'>>) {
    const routeName = route.paths[0] === 'molecule' ? route.paths[1] : undefined;
    return (
        allMolecules.find((molecule) => molecule.routeName === routeName) ||
        assertWrap.isDefined(allMolecules[0])
    );
}

export function createMoleculeRoute(
    molecule: Readonly<Pick<ReturnType<typeof getRouteMolecule>, 'routeName'>>,
): FrontendRoute {
    return {
        paths: frontendPathTree.paths.children.molecule.children[':molecule-name'].fill(
            molecule.routeName,
        ).fullPaths,
        search: undefined,
        hash: undefined,
    };
}

export function createFrontendState() {
    const router: FrontendRouter = new SpaRouter({
        sanitizeRoute(rawRoute) {
            return createMoleculeRoute(getRouteMolecule(rawRoute));
        },
    });

    const frontendState = new Observable({
        equalityCheck: check.strictEquals,
        defaultValue: {
            router,
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

export type FrontendStateObservable = ReturnType<typeof createFrontendState>;
