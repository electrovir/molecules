// cspell:words hypochlorous
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 24341. */
const hypochlorousAcid: Molecule = {
    name: 'Hypochlorous Acid',
    // cspell:disable-next-line
    pronunciation: 'hˌIpəklˈɔɹəs ˈæsəd',
    structureDescription: 'A chlorine atom and a hydrogen atom, each bonded to one oxygen.',
    realLifeDescription:
        'It is the germ killer that forms when bleach mixes with water, and your white blood cells make it to fight infections. Eye doctors also use gentle sprays of it to clean eyelids.',
    stats: {
        yearDiscovered: 1834,
        habitat: 'White blood cells of mammals, bleaches, disinfectants',
        evolvesInto: [
            'hydrogen-chloride',
            'oxygen',
        ],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.Cl,
            position: {
                x: -0.8367,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.8367,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.1755,
                y: 0.6566,
                z: -0.6315,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                1,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                2,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default hypochlorousAcid;
