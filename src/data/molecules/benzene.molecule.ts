import {createArray} from '@augment-vir/common';
import {ChemicalElementSymbol} from '../chemical-element.js';
import {BondOrder, GhsPictogram, MatterState, type Molecule} from '../molecule.js';

const carbonRingRadius = 1.39;
const hydrogenRingRadius = carbonRingRadius + 1.09;
const ringSize = 6;

function getRingPosition({index, radius}: Readonly<{index: number; radius: number}>) {
    const angle = (index / ringSize) * 2 * Math.PI;
    return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle),
        z: 0,
    };
}

const benzene: Molecule = {
    name: 'Benzene',
    description:
        'Six carbon atoms in a flat ring, each holding one hydrogen. The ring is drawn with alternating single and double bonds, but in reality its electrons are shared evenly around the whole ring, making it unusually stable.',
    stats: {
        stateAtRoomTemperature: MatterState.Liquid,
        meltingPointCelsius: 5.5,
        boilingPointCelsius: 80.1,
        densityGramsPerCubicCentimeter: 0.877,
        waterSolubilityGramsPerLiter: 1.79,
        logP: 2.13,
        dipoleMomentDebye: 0,
        oralRatLethalDoseMilligramsPerKilogram: 3310,
        hazardPictograms: [
            GhsPictogram.Flammable,
            GhsPictogram.Irritant,
            GhsPictogram.HealthHazard,
        ],
        yearDiscovered: 1825,
        smell: 'aromatic, gasoline-like',
        habitat: 'Crude oil, coal, volcanoes, forest fires, and traces in some foods',
    },
    atoms: [
        ...createArray(ringSize, (index) => {
            return {
                element: ChemicalElementSymbol.C,
                position: getRingPosition({
                    index,
                    radius: carbonRingRadius,
                }),
            };
        }),
        ...createArray(ringSize, (index) => {
            return {
                element: ChemicalElementSymbol.H,
                position: getRingPosition({
                    index,
                    radius: hydrogenRingRadius,
                }),
            };
        }),
    ],
    bonds: [
        ...createArray(ringSize, (index) => {
            return {
                atomIndexes: [
                    index,
                    (index + 1) % ringSize,
                ] satisfies [
                    number,
                    number,
                ],
                order: index % 2 ? BondOrder.Single : BondOrder.Double,
            };
        }),
        ...createArray(ringSize, (index) => {
            return {
                atomIndexes: [
                    index,
                    index + ringSize,
                ] satisfies [
                    number,
                    number,
                ],
                order: BondOrder.Single,
            };
        }),
    ],
};

export default benzene;
