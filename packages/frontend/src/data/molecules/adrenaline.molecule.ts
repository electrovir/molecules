// cspell:words dulcis scoparia
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 5816. */
const adrenaline: Molecule = {
    name: 'Adrenaline',
    routeName: 'adrenaline',
    // cspell:disable-next-line
    pronunciation: 'ədɹˈɛnᵊlən',
    structureDescription: 'Dopamine with an extra oxygen and carbon group.',
    realLifeDescription:
        'Released during danger, it speeds up the heart and prepares the body to fight or run. Doctors also give it as a shot to stop severe allergic reactions.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 211.5,
        waterSolubilityGramsPerLiter: 0.18,
        logP: -1.37,
        hazardPictograms: [GhsPictogram.AcuteToxicity],
        yearDiscovered: 1897,
        taste: 'slightly bitter, numbing',
        habitat: 'Animal adrenal glands, some animal neurons, the plant Scoparia dulcis',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.957,
                y: -1.9994,
                z: -1.6978,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -2.6992,
                y: 1.6901,
                z: -1.6873,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -4.2173,
                y: 0.7882,
                z: 0.4585,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 2.0761,
                y: 0.4984,
                z: 0.8305,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.9435,
                y: -1.31,
                z: -0.4407,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.4199,
                y: -0.7536,
                z: -0.2056,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.028,
                y: -0.2141,
                z: -0.4442,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.9331,
                y: 0.2198,
                z: -1.063,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.1819,
                y: -1.2061,
                z: 0.8716,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.2083,
                y: 0.7406,
                z: -0.8429,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.457,
                y: -0.6853,
                z: 1.0916,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.9702,
                y: 0.288,
                z: 0.2343,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.1211,
                y: 1.5107,
                z: 0.8168,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.1898,
                y: -2.0559,
                z: 0.3256,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.8641,
                y: 0.4859,
                z: -1.2731,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.9968,
                y: -0.6909,
                z: -0.6451,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.3567,
                y: 0.574,
                z: -1.9138,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.796,
                y: -1.9635,
                z: 1.5486,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.2543,
                y: -0.1639,
                z: 1.5848,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.0399,
                y: -1.0468,
                z: 1.9346,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.8512,
                y: -2.3608,
                z: -1.8223,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.9397,
                y: 2.2582,
                z: 0.0375,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.1104,
                y: 1.0668,
                z: 0.6646,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 3.1327,
                y: 2.0352,
                z: 1.7775,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.5913,
                y: 1.9355,
                z: -1.3864,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.5939,
                y: 0.3588,
                z: 1.2457,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                4,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                20,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                24,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                25,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                6,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                12,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                5,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                6,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                5,
                7,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                5,
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                14,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
                15,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                10,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                8,
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                11,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                10,
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                21,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                22,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                23,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default adrenaline;
