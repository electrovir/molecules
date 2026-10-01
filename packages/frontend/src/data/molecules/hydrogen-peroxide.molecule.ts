// cspell:words peroxisomes
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

const hydrogenPeroxide: Molecule = {
    name: 'Hydrogen Peroxide',
    description:
        'Two oxygen atoms bonded to each other, each carrying a hydrogen, in a twisted shape. The weak oxygen-oxygen bond breaks easily, which is why it bubbles on cuts and works as a bleach.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: -0.4,
        boilingPointCelsius: 150.2,
        densityGramsPerCubicCentimeter: 1.44,
        isWaterMiscible: true,
        logP: -1.36,
        dipoleMomentDebye: 1.57,
        hazardPictograms: [
            GhsPictogram.Oxidizer,
            GhsPictogram.Corrosive,
            GhsPictogram.Irritant,
        ],
        yearDiscovered: 1818,
        smell: 'slightly sharp',
        taste: 'bitter, slightly acidic',
        habitat: 'Human cells and peroxisomes; rain and the lower atmosphere',
        evolvesInto: [
            'water',
            'oxygen',
        ],
    },
    atoms: [
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: 0.8233,
                y: -0.7,
                z: -0.6676,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.8233,
                y: -0.6175,
                z: 0.7446,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: 0.7247,
                y: 0,
                z: 0,
            },
        },
        {
            element: ChemicalElementSymbol.O,
            position: {
                x: -0.7247,
                y: 0,
                z: 0,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
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

export default hydrogenPeroxide;
