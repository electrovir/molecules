// cspell:disable
import {type Molecule} from './molecule.js';

/**
 * Display order: fewest atoms first, ties broken by total bond order. `all-molecules.test.ts`
 * enforces this order and that each `routeName` matches its molecule's name.
 */
const moleculeLoaders: ReadonlyArray<{
    /** The molecule's segment in its `/molecule/<name>` URL. */
    routeName: string;
    loadMolecule: () => Promise<Molecule>;
}> = [
    {
        routeName: 'bromine',
        async loadMolecule() {
            return (await import('./molecules/bromine.molecule.js')).default;
        },
    },
    {
        routeName: 'chlorine',
        async loadMolecule() {
            return (await import('./molecules/chlorine.molecule.js')).default;
        },
    },
    {
        routeName: 'hydrogen',
        async loadMolecule() {
            return (await import('./molecules/hydrogen.molecule.js')).default;
        },
    },
    {
        routeName: 'hydrogen-chloride',
        async loadMolecule() {
            return (await import('./molecules/hydrogen-chloride.molecule.js')).default;
        },
    },
    {
        routeName: 'hydrogen-fluoride',
        async loadMolecule() {
            return (await import('./molecules/hydrogen-fluoride.molecule.js')).default;
        },
    },
    {
        routeName: 'iodine',
        async loadMolecule() {
            return (await import('./molecules/iodine.molecule.js')).default;
        },
    },
    {
        routeName: 'oxygen',
        async loadMolecule() {
            return (await import('./molecules/oxygen.molecule.js')).default;
        },
    },
    {
        routeName: 'carbon-monoxide',
        async loadMolecule() {
            return (await import('./molecules/carbon-monoxide.molecule.js')).default;
        },
    },
    {
        routeName: 'nitrogen',
        async loadMolecule() {
            return (await import('./molecules/nitrogen.molecule.js')).default;
        },
    },
    {
        routeName: 'hydrogen-sulfide',
        async loadMolecule() {
            return (await import('./molecules/hydrogen-sulfide.molecule.js')).default;
        },
    },
    {
        routeName: 'hypochlorous-acid',
        async loadMolecule() {
            return (await import('./molecules/hypochlorous-acid.molecule.js')).default;
        },
    },
    {
        routeName: 'water',
        async loadMolecule() {
            return (await import('./molecules/water.molecule.js')).default;
        },
    },
    {
        routeName: 'xenon-difluoride',
        async loadMolecule() {
            return (await import('./molecules/xenon-difluoride.molecule.js')).default;
        },
    },
    {
        routeName: 'ozone',
        async loadMolecule() {
            return (await import('./molecules/ozone.molecule.js')).default;
        },
    },
    {
        routeName: 'carbon-dioxide',
        async loadMolecule() {
            return (await import('./molecules/carbon-dioxide.molecule.js')).default;
        },
    },
    {
        routeName: 'hydrogen-cyanide',
        async loadMolecule() {
            return (await import('./molecules/hydrogen-cyanide.molecule.js')).default;
        },
    },
    {
        routeName: 'nitrous-oxide',
        async loadMolecule() {
            return (await import('./molecules/nitrous-oxide.molecule.js')).default;
        },
    },
    {
        routeName: 'sulfur-dioxide',
        async loadMolecule() {
            return (await import('./molecules/sulfur-dioxide.molecule.js')).default;
        },
    },
    {
        routeName: 'ammonia',
        async loadMolecule() {
            return (await import('./molecules/ammonia.molecule.js')).default;
        },
    },
    {
        routeName: 'boron-trifluoride',
        async loadMolecule() {
            return (await import('./molecules/boron-trifluoride.molecule.js')).default;
        },
    },
    {
        routeName: 'hydrogen-peroxide',
        async loadMolecule() {
            return (await import('./molecules/hydrogen-peroxide.molecule.js')).default;
        },
    },
    {
        routeName: 'nitrogen-trifluoride',
        async loadMolecule() {
            return (await import('./molecules/nitrogen-trifluoride.molecule.js')).default;
        },
    },
    {
        routeName: 'phosphine',
        async loadMolecule() {
            return (await import('./molecules/phosphine.molecule.js')).default;
        },
    },
    {
        routeName: 'phosphorus-trichloride',
        async loadMolecule() {
            return (await import('./molecules/phosphorus-trichloride.molecule.js')).default;
        },
    },
    {
        routeName: 'formaldehyde',
        async loadMolecule() {
            return (await import('./molecules/formaldehyde.molecule.js')).default;
        },
    },
    {
        routeName: 'phosgene',
        async loadMolecule() {
            return (await import('./molecules/phosgene.molecule.js')).default;
        },
    },
    {
        routeName: 'thionyl-chloride',
        async loadMolecule() {
            return (await import('./molecules/thionyl-chloride.molecule.js')).default;
        },
    },
    {
        routeName: 'acetylene',
        async loadMolecule() {
            return (await import('./molecules/acetylene.molecule.js')).default;
        },
    },
    {
        routeName: 'sulfur-trioxide',
        async loadMolecule() {
            return (await import('./molecules/sulfur-trioxide.molecule.js')).default;
        },
    },
    {
        routeName: 'white-phosphorus',
        async loadMolecule() {
            return (await import('./molecules/white-phosphorus.molecule.js')).default;
        },
    },
    {
        routeName: 'carbon-tetrachloride',
        async loadMolecule() {
            return (await import('./molecules/carbon-tetrachloride.molecule.js')).default;
        },
    },
    {
        routeName: 'chloroform',
        async loadMolecule() {
            return (await import('./molecules/chloroform.molecule.js')).default;
        },
    },
    {
        routeName: 'dichlorodifluoromethane',
        async loadMolecule() {
            return (await import('./molecules/dichlorodifluoromethane.molecule.js')).default;
        },
    },
    {
        routeName: 'hydroxylamine',
        async loadMolecule() {
            return (await import('./molecules/hydroxylamine.molecule.js')).default;
        },
    },
    {
        routeName: 'iodoform',
        async loadMolecule() {
            return (await import('./molecules/iodoform.molecule.js')).default;
        },
    },
    {
        routeName: 'methane',
        async loadMolecule() {
            return (await import('./molecules/methane.molecule.js')).default;
        },
    },
    {
        routeName: 'silane',
        async loadMolecule() {
            return (await import('./molecules/silane.molecule.js')).default;
        },
    },
    {
        routeName: 'silicon-tetrachloride',
        async loadMolecule() {
            return (await import('./molecules/silicon-tetrachloride.molecule.js')).default;
        },
    },
    {
        routeName: 'tetrafluoromethane',
        async loadMolecule() {
            return (await import('./molecules/tetrafluoromethane.molecule.js')).default;
        },
    },
    {
        routeName: 'xenon-tetrafluoride',
        async loadMolecule() {
            return (await import('./molecules/xenon-tetrafluoride.molecule.js')).default;
        },
    },
    {
        routeName: 'formic-acid',
        async loadMolecule() {
            return (await import('./molecules/formic-acid.molecule.js')).default;
        },
    },
    {
        routeName: 'nitric-acid',
        async loadMolecule() {
            return (await import('./molecules/nitric-acid.molecule.js')).default;
        },
    },
    {
        routeName: 'hydrazine',
        async loadMolecule() {
            return (await import('./molecules/hydrazine.molecule.js')).default;
        },
    },
    {
        routeName: 'methanol',
        async loadMolecule() {
            return (await import('./molecules/methanol.molecule.js')).default;
        },
    },
    {
        routeName: 'phosphorus-pentachloride',
        async loadMolecule() {
            return (await import('./molecules/phosphorus-pentachloride.molecule.js')).default;
        },
    },
    {
        routeName: 'carbonic-acid',
        async loadMolecule() {
            return (await import('./molecules/carbonic-acid.molecule.js')).default;
        },
    },
    {
        routeName: 'ethylene',
        async loadMolecule() {
            return (await import('./molecules/ethylene.molecule.js')).default;
        },
    },
    {
        routeName: 'tetrafluoroethylene',
        async loadMolecule() {
            return (await import('./molecules/tetrafluoroethylene.molecule.js')).default;
        },
    },
    {
        routeName: 'dinitrogen-tetroxide',
        async loadMolecule() {
            return (await import('./molecules/dinitrogen-tetroxide.molecule.js')).default;
        },
    },
    {
        routeName: 'boric-acid',
        async loadMolecule() {
            return (await import('./molecules/boric-acid.molecule.js')).default;
        },
    },
    {
        routeName: 'sulfur-hexafluoride',
        async loadMolecule() {
            return (await import('./molecules/sulfur-hexafluoride.molecule.js')).default;
        },
    },
    {
        routeName: 'acetaldehyde',
        async loadMolecule() {
            return (await import('./molecules/acetaldehyde.molecule.js')).default;
        },
    },
    {
        routeName: 'nitromethane',
        async loadMolecule() {
            return (await import('./molecules/nitromethane.molecule.js')).default;
        },
    },
    {
        routeName: 'sulfuric-acid',
        async loadMolecule() {
            return (await import('./molecules/sulfuric-acid.molecule.js')).default;
        },
    },
    {
        routeName: 'halothane',
        async loadMolecule() {
            return (await import('./molecules/halothane.molecule.js')).default;
        },
    },
    {
        routeName: 'acetic-acid',
        async loadMolecule() {
            return (await import('./molecules/acetic-acid.molecule.js')).default;
        },
    },
    {
        routeName: 'diborane',
        async loadMolecule() {
            return (await import('./molecules/diborane.molecule.js')).default;
        },
    },
    {
        routeName: 'octasulfur',
        async loadMolecule() {
            return (await import('./molecules/octasulfur.molecule.js')).default;
        },
    },
    {
        routeName: 'phosphoric-acid',
        async loadMolecule() {
            return (await import('./molecules/phosphoric-acid.molecule.js')).default;
        },
    },
    {
        routeName: 'urea',
        async loadMolecule() {
            return (await import('./molecules/urea.molecule.js')).default;
        },
    },
    {
        routeName: 'sulfamic-acid',
        async loadMolecule() {
            return (await import('./molecules/sulfamic-acid.molecule.js')).default;
        },
    },
    {
        routeName: 'dimethyl-sulfide',
        async loadMolecule() {
            return (await import('./molecules/dimethyl-sulfide.molecule.js')).default;
        },
    },
    {
        routeName: 'ethanethiol',
        async loadMolecule() {
            return (await import('./molecules/ethanethiol.molecule.js')).default;
        },
    },
    {
        routeName: 'ethanol',
        async loadMolecule() {
            return (await import('./molecules/ethanol.molecule.js')).default;
        },
    },
    {
        routeName: 'cyclopropane',
        async loadMolecule() {
            return (await import('./molecules/cyclopropane.molecule.js')).default;
        },
    },
    {
        routeName: 'chloral-hydrate',
        async loadMolecule() {
            return (await import('./molecules/chloral-hydrate.molecule.js')).default;
        },
    },
    {
        routeName: 'ethylene-glycol',
        async loadMolecule() {
            return (await import('./molecules/ethylene-glycol.molecule.js')).default;
        },
    },
    {
        routeName: 'acetone',
        async loadMolecule() {
            return (await import('./molecules/acetone.molecule.js')).default;
        },
    },
    {
        routeName: 'dimethyl-sulfoxide',
        async loadMolecule() {
            return (await import('./molecules/dimethyl-sulfoxide.molecule.js')).default;
        },
    },
    {
        routeName: 'glycine',
        async loadMolecule() {
            return (await import('./molecules/glycine.molecule.js')).default;
        },
    },
    {
        routeName: 'cisplatin',
        async loadMolecule() {
            return (await import('./molecules/cisplatin.molecule.js')).default;
        },
    },
    {
        routeName: 'propane',
        async loadMolecule() {
            return (await import('./molecules/propane.molecule.js')).default;
        },
    },
    {
        routeName: 'allyl-isothiocyanate',
        async loadMolecule() {
            return (await import('./molecules/allyl-isothiocyanate.molecule.js')).default;
        },
    },
    {
        routeName: 'isopropyl-alcohol',
        async loadMolecule() {
            return (await import('./molecules/isopropyl-alcohol.molecule.js')).default;
        },
    },
    {
        routeName: 'lactic-acid',
        async loadMolecule() {
            return (await import('./molecules/lactic-acid.molecule.js')).default;
        },
    },
    {
        routeName: 'benzene',
        async loadMolecule() {
            return (await import('./molecules/benzene.molecule.js')).default;
        },
    },
    {
        routeName: 'borazine',
        async loadMolecule() {
            return (await import('./molecules/borazine.molecule.js')).default;
        },
    },
    {
        routeName: 'trichloroisocyanuric-acid',
        async loadMolecule() {
            return (await import('./molecules/trichloroisocyanuric-acid.molecule.js')).default;
        },
    },
    {
        routeName: 'uracil',
        async loadMolecule() {
            return (await import('./molecules/uracil.molecule.js')).default;
        },
    },
    {
        routeName: 'trimethylamine',
        async loadMolecule() {
            return (await import('./molecules/trimethylamine.molecule.js')).default;
        },
    },
    {
        routeName: 'cytosine',
        async loadMolecule() {
            return (await import('./molecules/cytosine.molecule.js')).default;
        },
    },
    {
        routeName: 'purine',
        async loadMolecule() {
            return (await import('./molecules/purine.molecule.js')).default;
        },
    },
    {
        routeName: 'butane',
        async loadMolecule() {
            return (await import('./molecules/butane.molecule.js')).default;
        },
    },
    {
        routeName: 'glycerol',
        async loadMolecule() {
            return (await import('./molecules/glycerol.molecule.js')).default;
        },
    },
    {
        routeName: 'cysteine',
        async loadMolecule() {
            return (await import('./molecules/cysteine.molecule.js')).default;
        },
    },
    {
        routeName: 'taurine',
        async loadMolecule() {
            return (await import('./molecules/taurine.molecule.js')).default;
        },
    },
    {
        routeName: 'benzaldehyde',
        async loadMolecule() {
            return (await import('./molecules/benzaldehyde.molecule.js')).default;
        },
    },
    {
        routeName: 'niacin',
        async loadMolecule() {
            return (await import('./molecules/niacin.molecule.js')).default;
        },
    },
    {
        routeName: 'diethyl-ether',
        async loadMolecule() {
            return (await import('./molecules/diethyl-ether.molecule.js')).default;
        },
    },
    {
        routeName: 'sevoflurane',
        async loadMolecule() {
            return (await import('./molecules/sevoflurane.molecule.js')).default;
        },
    },
    {
        routeName: 'creatinine',
        async loadMolecule() {
            return (await import('./molecules/creatinine.molecule.js')).default;
        },
    },
    {
        routeName: 'melamine',
        async loadMolecule() {
            return (await import('./molecules/melamine.molecule.js')).default;
        },
    },
    {
        routeName: 'thymine',
        async loadMolecule() {
            return (await import('./molecules/thymine.molecule.js')).default;
        },
    },
    {
        routeName: 'acesulfame',
        async loadMolecule() {
            return (await import('./molecules/acesulfame.molecule.js')).default;
        },
    },
    {
        routeName: 'adenine',
        async loadMolecule() {
            return (await import('./molecules/adenine.molecule.js')).default;
        },
    },
    {
        routeName: 'gaba',
        async loadMolecule() {
            return (await import('./molecules/gaba.molecule.js')).default;
        },
    },
    {
        routeName: 'salicylic-acid',
        async loadMolecule() {
            return (await import('./molecules/salicylic-acid.molecule.js')).default;
        },
    },
    {
        routeName: 'guanine',
        async loadMolecule() {
            return (await import('./molecules/guanine.molecule.js')).default;
        },
    },
    {
        routeName: 'uric-acid',
        async loadMolecule() {
            return (await import('./molecules/uric-acid.molecule.js')).default;
        },
    },
    {
        routeName: 'histamine',
        async loadMolecule() {
            return (await import('./molecules/histamine.molecule.js')).default;
        },
    },
    {
        routeName: 'coumarin',
        async loadMolecule() {
            return (await import('./molecules/coumarin.molecule.js')).default;
        },
    },
    {
        routeName: 'saccharin',
        async loadMolecule() {
            return (await import('./molecules/saccharin.molecule.js')).default;
        },
    },
    {
        routeName: 'isoamyl-mercaptan',
        async loadMolecule() {
            return (await import('./molecules/isoamyl-mercaptan.molecule.js')).default;
        },
    },
    {
        routeName: 'creatine',
        async loadMolecule() {
            return (await import('./molecules/creatine.molecule.js')).default;
        },
    },
    {
        routeName: 'glyphosate',
        async loadMolecule() {
            return (await import('./molecules/glyphosate.molecule.js')).default;
        },
    },
    {
        routeName: 'glutamic-acid',
        async loadMolecule() {
            return (await import('./molecules/glutamic-acid.molecule.js')).default;
        },
    },
    {
        routeName: 'allicin',
        async loadMolecule() {
            return (await import('./molecules/allicin.molecule.js')).default;
        },
    },
    {
        routeName: 'methyl-salicylate',
        async loadMolecule() {
            return (await import('./molecules/methyl-salicylate.molecule.js')).default;
        },
    },
    {
        routeName: 'vanillin',
        async loadMolecule() {
            return (await import('./molecules/vanillin.molecule.js')).default;
        },
    },
    {
        routeName: 'ninhydrin',
        async loadMolecule() {
            return (await import('./molecules/ninhydrin.molecule.js')).default;
        },
    },
    {
        routeName: 'methionine',
        async loadMolecule() {
            return (await import('./molecules/methionine.molecule.js')).default;
        },
    },
    {
        routeName: 'ribose',
        async loadMolecule() {
            return (await import('./molecules/ribose.molecule.js')).default;
        },
    },
    {
        routeName: 'metformin',
        async loadMolecule() {
            return (await import('./molecules/metformin.molecule.js')).default;
        },
    },
    {
        routeName: 'ascorbic-acid',
        async loadMolecule() {
            return (await import('./molecules/ascorbic-acid.molecule.js')).default;
        },
    },
    {
        routeName: 'nitroglycerin',
        async loadMolecule() {
            return (await import('./molecules/nitroglycerin.molecule.js')).default;
        },
    },
    {
        routeName: 'acetaminophen',
        async loadMolecule() {
            return (await import('./molecules/acetaminophen.molecule.js')).default;
        },
    },
    {
        routeName: 'citric-acid',
        async loadMolecule() {
            return (await import('./molecules/citric-acid.molecule.js')).default;
        },
    },
    {
        routeName: 'aspirin',
        async loadMolecule() {
            return (await import('./molecules/aspirin.molecule.js')).default;
        },
    },
    {
        routeName: 'theobromine',
        async loadMolecule() {
            return (await import('./molecules/theobromine.molecule.js')).default;
        },
    },
    {
        routeName: 'theophylline',
        async loadMolecule() {
            return (await import('./molecules/theophylline.molecule.js')).default;
        },
    },
    {
        routeName: 'tnt',
        async loadMolecule() {
            return (await import('./molecules/tnt.molecule.js')).default;
        },
    },
    {
        routeName: 'methenamine',
        async loadMolecule() {
            return (await import('./molecules/methenamine.molecule.js')).default;
        },
    },
    {
        routeName: 'dopamine',
        async loadMolecule() {
            return (await import('./molecules/dopamine.molecule.js')).default;
        },
    },
    {
        routeName: 'amphetamine',
        async loadMolecule() {
            return (await import('./molecules/amphetamine.molecule.js')).default;
        },
    },
    {
        routeName: 'fructose',
        async loadMolecule() {
            return (await import('./molecules/fructose.molecule.js')).default;
        },
    },
    {
        routeName: 'glucose',
        async loadMolecule() {
            return (await import('./molecules/glucose.molecule.js')).default;
        },
    },
    {
        routeName: 'caffeine',
        async loadMolecule() {
            return (await import('./molecules/caffeine.molecule.js')).default;
        },
    },
    {
        routeName: 'triclosan',
        async loadMolecule() {
            return (await import('./molecules/triclosan.molecule.js')).default;
        },
    },
    {
        routeName: 'carvone',
        async loadMolecule() {
            return (await import('./molecules/carvone.molecule.js')).default;
        },
    },
    {
        routeName: 'serotonin',
        async loadMolecule() {
            return (await import('./molecules/serotonin.molecule.js')).default;
        },
    },
    {
        routeName: 'hydrochlorothiazide',
        async loadMolecule() {
            return (await import('./molecules/hydrochlorothiazide.molecule.js')).default;
        },
    },
    {
        routeName: 'acetylcholine',
        async loadMolecule() {
            return (await import('./molecules/acetylcholine.molecule.js')).default;
        },
    },
    {
        routeName: 'pfoa',
        async loadMolecule() {
            return (await import('./molecules/pfoa.molecule.js')).default;
        },
    },
    {
        routeName: 'adrenaline',
        async loadMolecule() {
            return (await import('./molecules/adrenaline.molecule.js')).default;
        },
    },
    {
        routeName: 'nicotine',
        async loadMolecule() {
            return (await import('./molecules/nicotine.molecule.js')).default;
        },
    },
    {
        routeName: 'luciferin',
        async loadMolecule() {
            return (await import('./molecules/luciferin.molecule.js')).default;
        },
    },
    {
        routeName: 'tryptophan',
        async loadMolecule() {
            return (await import('./molecules/tryptophan.molecule.js')).default;
        },
    },
    {
        routeName: 'ddt',
        async loadMolecule() {
            return (await import('./molecules/ddt.molecule.js')).default;
        },
    },
    {
        routeName: 'sulfamethoxazole',
        async loadMolecule() {
            return (await import('./molecules/sulfamethoxazole.molecule.js')).default;
        },
    },
    {
        routeName: 'thalidomide',
        async loadMolecule() {
            return (await import('./molecules/thalidomide.molecule.js')).default;
        },
    },
    {
        routeName: 'minoxidil',
        async loadMolecule() {
            return (await import('./molecules/minoxidil.molecule.js')).default;
        },
    },
    {
        routeName: 'indigo',
        async loadMolecule() {
            return (await import('./molecules/indigo.molecule.js')).default;
        },
    },
    {
        routeName: 'menthol',
        async loadMolecule() {
            return (await import('./molecules/menthol.molecule.js')).default;
        },
    },
    {
        routeName: 'deet',
        async loadMolecule() {
            return (await import('./molecules/deet.molecule.js')).default;
        },
    },
    {
        routeName: 'biotin',
        async loadMolecule() {
            return (await import('./molecules/biotin.molecule.js')).default;
        },
    },
    {
        routeName: 'mescaline',
        async loadMolecule() {
            return (await import('./molecules/mescaline.molecule.js')).default;
        },
    },
    {
        routeName: 'ibuprofen',
        async loadMolecule() {
            return (await import('./molecules/ibuprofen.molecule.js')).default;
        },
    },
    {
        routeName: 'melatonin',
        async loadMolecule() {
            return (await import('./molecules/melatonin.molecule.js')).default;
        },
    },
    {
        routeName: 'diazepam',
        async loadMolecule() {
            return (await import('./molecules/diazepam.molecule.js')).default;
        },
    },
    {
        routeName: 'famotidine',
        async loadMolecule() {
            return (await import('./molecules/famotidine.molecule.js')).default;
        },
    },
    {
        routeName: 'thiamine',
        async loadMolecule() {
            return (await import('./molecules/thiamine.molecule.js')).default;
        },
    },
    {
        routeName: 'thyroxine',
        async loadMolecule() {
            return (await import('./molecules/thyroxine.molecule.js')).default;
        },
    },
    {
        routeName: 'aflatoxin-b1',
        async loadMolecule() {
            return (await import('./molecules/aflatoxin-b1.molecule.js')).default;
        },
    },
    {
        routeName: 'edta',
        async loadMolecule() {
            return (await import('./molecules/edta.molecule.js')).default;
        },
    },
    {
        routeName: 'psilocybin',
        async loadMolecule() {
            return (await import('./molecules/psilocybin.molecule.js')).default;
        },
    },
    {
        routeName: 'sertraline',
        async loadMolecule() {
            return (await import('./molecules/sertraline.molecule.js')).default;
        },
    },
    {
        routeName: 'malathion',
        async loadMolecule() {
            return (await import('./molecules/malathion.molecule.js')).default;
        },
    },
    {
        routeName: 'albuterol',
        async loadMolecule() {
            return (await import('./molecules/albuterol.molecule.js')).default;
        },
    },
    {
        routeName: 'lidocaine',
        async loadMolecule() {
            return (await import('./molecules/lidocaine.molecule.js')).default;
        },
    },
    {
        routeName: 'tetrodotoxin',
        async loadMolecule() {
            return (await import('./molecules/tetrodotoxin.molecule.js')).default;
        },
    },
    {
        routeName: 'aspartame',
        async loadMolecule() {
            return (await import('./molecules/aspartame.molecule.js')).default;
        },
    },
    {
        routeName: 'fluoxetine',
        async loadMolecule() {
            return (await import('./molecules/fluoxetine.molecule.js')).default;
        },
    },
    {
        routeName: 'morphine',
        async loadMolecule() {
            return (await import('./molecules/morphine.molecule.js')).default;
        },
    },
    {
        routeName: 'penicillin-g',
        async loadMolecule() {
            return (await import('./molecules/penicillin-g.molecule.js')).default;
        },
    },
    {
        routeName: '18-crown-6',
        async loadMolecule() {
            return (await import('./molecules/18-crown-6.molecule.js')).default;
        },
    },
    {
        routeName: 'sucralose',
        async loadMolecule() {
            return (await import('./molecules/sucralose.molecule.js')).default;
        },
    },
    {
        routeName: 'artemisinin',
        async loadMolecule() {
            return (await import('./molecules/artemisinin.molecule.js')).default;
        },
    },
    {
        routeName: 'ciprofloxacin',
        async loadMolecule() {
            return (await import('./molecules/ciprofloxacin.molecule.js')).default;
        },
    },
    {
        routeName: 'cocaine',
        async loadMolecule() {
            return (await import('./molecules/cocaine.molecule.js')).default;
        },
    },
    {
        routeName: 'omeprazole',
        async loadMolecule() {
            return (await import('./molecules/omeprazole.molecule.js')).default;
        },
    },
    {
        routeName: 'amoxicillin',
        async loadMolecule() {
            return (await import('./molecules/amoxicillin.molecule.js')).default;
        },
    },
    {
        routeName: 'lactose',
        async loadMolecule() {
            return (await import('./molecules/lactose.molecule.js')).default;
        },
    },
    {
        routeName: 'sucrose',
        async loadMolecule() {
            return (await import('./molecules/sucrose.molecule.js')).default;
        },
    },
    {
        routeName: 'adenosine-triphosphate',
        async loadMolecule() {
            return (await import('./molecules/adenosine-triphosphate.molecule.js')).default;
        },
    },
    {
        routeName: 'riboflavin',
        async loadMolecule() {
            return (await import('./molecules/riboflavin.molecule.js')).default;
        },
    },
    {
        routeName: 'oseltamivir',
        async loadMolecule() {
            return (await import('./molecules/oseltamivir.molecule.js')).default;
        },
    },
    {
        routeName: 'folic-acid',
        async loadMolecule() {
            return (await import('./molecules/folic-acid.molecule.js')).default;
        },
    },
    {
        routeName: 'cortisol',
        async loadMolecule() {
            return (await import('./molecules/cortisol.molecule.js')).default;
        },
    },
    {
        routeName: 'tetracycline',
        async loadMolecule() {
            return (await import('./molecules/tetracycline.molecule.js')).default;
        },
    },
    {
        routeName: 'sildenafil',
        async loadMolecule() {
            return (await import('./molecules/sildenafil.molecule.js')).default;
        },
    },
];

export const allMoleculeEntries = moleculeLoaders.map((entry, index) => {
    return {
        ...entry,
        entryNumber: index + 1,
    };
});

export type MoleculeEntry = (typeof allMoleculeEntries)[number];
