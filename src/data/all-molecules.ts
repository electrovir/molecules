import {type Molecule} from './molecule.js';
import {aceticAcid} from './molecules/acetic-acid.molecule.js';
import {acetylene} from './molecules/acetylene.molecule.js';
import {ammonia} from './molecules/ammonia.molecule.js';
import {aspirin} from './molecules/aspirin.molecule.js';
import {benzene} from './molecules/benzene.molecule.js';
import {caffeine} from './molecules/caffeine.molecule.js';
import {carbonDioxide} from './molecules/carbon-dioxide.molecule.js';
import {carbonMonoxide} from './molecules/carbon-monoxide.molecule.js';
import {ethanol} from './molecules/ethanol.molecule.js';
import {ethylene} from './molecules/ethylene.molecule.js';
import {formaldehyde} from './molecules/formaldehyde.molecule.js';
import {glucose} from './molecules/glucose.molecule.js';
import {hydrogenChloride} from './molecules/hydrogen-chloride.molecule.js';
import {hydrogenPeroxide} from './molecules/hydrogen-peroxide.molecule.js';
import {hydrogen} from './molecules/hydrogen.molecule.js';
import {methane} from './molecules/methane.molecule.js';
import {nitrogen} from './molecules/nitrogen.molecule.js';
import {oxygen} from './molecules/oxygen.molecule.js';
import {ozone} from './molecules/ozone.molecule.js';
import {water} from './molecules/water.molecule.js';

function getTotalBondOrder(molecule: Readonly<Molecule>) {
    return molecule.bonds.reduce((total, bond) => total + bond.order, 0);
}

export const allMolecules = [
    aceticAcid,
    acetylene,
    ammonia,
    aspirin,
    benzene,
    caffeine,
    carbonDioxide,
    carbonMonoxide,
    ethanol,
    ethylene,
    formaldehyde,
    glucose,
    hydrogen,
    hydrogenChloride,
    hydrogenPeroxide,
    methane,
    nitrogen,
    oxygen,
    ozone,
    water,
]
    .toSorted((first, second) => {
        return (
            first.atoms.length - second.atoms.length ||
            getTotalBondOrder(first) - getTotalBondOrder(second)
        );
    })
    .map((molecule, index) => {
        return {
            ...molecule,
            entryNumber: index + 1,
            /** The molecule's segment in its `/molecule/<name>` URL. */
            routeName: molecule.name.toLowerCase().replaceAll(' ', '-'),
        };
    });
