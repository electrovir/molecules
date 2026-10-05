import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** Idealized geometry from measured bond lengths and angles. PubChem has no 3D record for it. */
const whitePhosphorus: Molecule = {
    name: 'White Phosphorus',
    routeName: 'white-phosphorus',
    // cspell:disable-next-line
    pronunciation: 'wˈIt fˈɑsfəɹəs',
    structureDescription:
        'Four phosphorus atoms at the corners of a tetrahedron, each bonded to the other three.',
    realLifeDescription:
        'It glows in the dark and bursts into flame in air, which is why it is stored under water. It was discovered in 1669 by a man boiling down urine while trying to make gold.',
    stats: {
        stateAtRoomTemperature: MatterState.Solid,
        meltingPointCelsius: 44.1,
        boilingPointCelsius: 280,
        densityGramsPerCubicCentimeter: 1.82,
        waterSolubilityGramsPerLiter: 0.003,
        dipoleMomentDebye: 0,
        hazardPictograms: [
            GhsPictogram.Flammable,
            GhsPictogram.Corrosive,
            GhsPictogram.AcuteToxicity,
            GhsPictogram.EnvironmentalHazard,
        ],
        yearDiscovered: 1669,
        smell: 'garlic-like',
        habitat: 'Made only in labs and factories',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.P,
            position: {
                x: 0.7814,
                y: 0.7814,
                z: 0.7814,
            },
        },
        {
            element: ChemicalElementSymbol.P,
            position: {
                x: 0.7814,
                y: -0.7814,
                z: -0.7814,
            },
        },
        {
            element: ChemicalElementSymbol.P,
            position: {
                x: -0.7814,
                y: 0.7814,
                z: -0.7814,
            },
        },
        {
            element: ChemicalElementSymbol.P,
            position: {
                x: -0.7814,
                y: -0.7814,
                z: 0.7814,
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
                0,
                2,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                0,
                3,
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
        {
            atomIndexes: [
                1,
                3,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                3,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default whitePhosphorus;
