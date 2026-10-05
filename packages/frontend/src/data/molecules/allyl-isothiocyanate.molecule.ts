// cspell:words isothiocyanate
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

/** 3D coordinates from PubChem CID 5971. */
const allylIsothiocyanate: Molecule = {
    name: 'Allyl Isothiocyanate',
    routeName: 'allyl-isothiocyanate',
    // cspell:disable-next-line
    pronunciation: 'ˈælɪl ˌIsOθˌI OsˈIənˌAt',
    structureDescription:
        'A carbon double bonded to both a nitrogen and a sulfur, with a three-carbon allyl group on the nitrogen.',
    realLifeDescription:
        'It is the sinus-clearing heat in mustard, horseradish, and wasabi. The plant keeps two ingredients apart in its cells and only makes it when you crush or chew them together.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: -80,
        boilingPointCelsius: 151,
        densityGramsPerCubicCentimeter: 1.013,
        waterSolubilityGramsPerLiter: 2,
        logP: 2.15,
        oralRatLethalDoseMilligramsPerKilogram: 112,
        hazardPictograms: [
            GhsPictogram.Flammable,
            GhsPictogram.AcuteToxicity,
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
            GhsPictogram.EnvironmentalHazard,
        ],
        smell: 'very pungent, mustard-like',
        taste: 'acrid, mustard',
        habitat: 'Mustard, radish, horseradish, wasabi, garlic mustard',
    },
    atoms: [
        {
            element: ChemicalElementSymbol.S,
            position: {
                x: 3.1078,
                y: -0.3536,
                z: -0.0843,
            },
        },
        {
            element: ChemicalElementSymbol.N,
            position: {
                x: 0.4998,
                y: 0.5723,
                z: -0.112,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -0.5009,
                y: -0.3459,
                z: 0.4332,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -1.8623,
                y: 0.2535,
                z: 0.2887,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: -2.8478,
                y: -0.2952,
                z: -0.4303,
            },
        },
        {
            element: ChemicalElementSymbol.C,
            position: {
                x: 1.6033,
                y: 0.169,
                z: -0.0952,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.3166,
                y: -0.5231,
                z: 1.5013,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -0.4536,
                y: -1.3188,
                z: -0.0755,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.0567,
                y: 1.1867,
                z: 0.8111,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -3.8169,
                y: 0.1878,
                z: -0.4917,
            },
        },
        {
            element: ChemicalElementSymbol.H,
            position: {
                x: -2.7086,
                y: -1.227,
                z: -0.967,
            },
        },
    ],
    bonds: [
        {
            atomIndexes: [
                0,
                5,
            ],
            order: BondOrder.Double,
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
                5,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                2,
                3,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                6,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                2,
                7,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                3,
                4,
            ],
            order: BondOrder.Double,
        },
        {
            atomIndexes: [
                3,
                8,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                9,
            ],
            order: BondOrder.Single,
        },
        {
            atomIndexes: [
                4,
                10,
            ],
            order: BondOrder.Single,
        },
    ],
};

export default allylIsothiocyanate;
