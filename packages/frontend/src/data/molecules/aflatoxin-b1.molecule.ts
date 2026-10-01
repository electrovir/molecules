// cspell:words methoxy
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 186907. */
const aflatoxinB1: Molecule = {
    name: 'Aflatoxin B1',
    description:
        'Five fused rings of carbon and oxygen with a methoxy group. Molds make it on damp peanuts and corn, and it is one of the strongest natural causes of cancer.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 268,
        oralRatLethalDoseMilligramsPerKilogram: 4.8,
        hazardPictograms: [
            GhsPictogram.AcuteToxicity,
            GhsPictogram.HealthHazard,
        ],
        habitat: 'Aspergillus molds growing on peanuts and other stored foods',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 3.4425,
                y: 1.2255,
                z: -0.5298,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 4.8101,
                y: -0.4188,
                z: 0.5351,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.2109,
                y: -1.7334,
                z: -0.253,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.937,
                y: 3.0925,
                z: -0.1174,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -4.629,
                y: -1.8625,
                z: 0.1416,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -1.9654,
                y: -3.2087,
                z: -0.1198,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.7285,
                y: -1.1244,
                z: -0.506,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.6055,
                y: -0.1697,
                z: -0.3845,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.9203,
                y: -0.1423,
                z: -0.5728,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 0.2452,
                y: -0.3971,
                z: -0.2693,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.6465,
                y: 0.6792,
                z: -0.1748,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 2.0817,
                y: 1.1291,
                z: -0.4129,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.0635,
                y: 0.3707,
                z: -0.0532,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.1565,
                y: 1.3819,
                z: 0.061,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 3.054,
                y: -1.8989,
                z: 0.7098,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.4602,
                y: -0.9025,
                z: -0.0381,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.1382,
                y: 1.9901,
                z: -0.2028,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -4.4321,
                y: 0.5472,
                z: 0.1626,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.2366,
                y: 2.2212,
                z: -0.3236,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -3.9238,
                y: -0.8661,
                z: 0.0936,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 4.2049,
                y: -1.4588,
                z: 1.2031,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.5632,
                y: -2.0525,
                z: -0.1373,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.2031,
                y: 3.5984,
                z: 1.1884,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.6591,
                y: -1.7418,
                z: -1.4066,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.491,
                y: -0.2715,
                z: -1.5011,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.2058,
                y: 2.0463,
                z: -0.8074,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.0845,
                y: 1.9726,
                z: 0.974,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 2.4656,
                y: -2.7046,
                z: 1.1213,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -5.1054,
                y: 0.743,
                z: -0.6768,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -4.9498,
                y: 0.7138,
                z: 1.1116,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 1.6334,
                y: 3.2313,
                z: -0.3468,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 4.733,
                y: -1.8067,
                z: 2.0728,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.1546,
                y: 4.1369,
                z: 1.1691,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -1.2465,
                y: 2.8062,
                z: 1.9436,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.4147,
                y: 4.3064,
                z: 1.463,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                1,
                20,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                21,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                16,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                22,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                19,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                5,
                21,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                6,
                7,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                6,
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
                23,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                7,
                9,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                7,
                11,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                8,
                24,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                9,
                10,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                12,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                10,
                16,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                11,
                18,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                12,
                13,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                12,
                15,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                13,
                17,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                25,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                13,
                26,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                14,
                20,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                14,
                27,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                15,
                21,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                16,
                18,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                17,
                19,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                17,
                28,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                17,
                29,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                18,
                30,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                20,
                31,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                22,
                32,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                22,
                33,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                22,
                34,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default aflatoxinB1;
