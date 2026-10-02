import {check} from '@augment-vir/assert';
import {type PartialWithUndefined} from '@augment-vir/common';
import {type HTMLTemplateResult} from 'element-vir';
import {
    getMolarMass,
    getMoleculeSize,
    GhsPictogram,
    MatterState,
    type Molecule,
} from '../data/molecule.js';
import {ghsPictogramSvgs} from './ghs-pictograms.js';

const matterStateLabels: Record<MatterState, string> = {
    [MatterState.Gas]: 'Gas',
    [MatterState.Liquid]: 'Liquid',
    [MatterState.Solid]: 'Solid',
};

/** One value in a stats table row, with an optional icon shown before it. */
export type StatValue = {
    text: string;
} & PartialWithUndefined<{
    icon: HTMLTemplateResult;
    /** Shown in a tooltip on hover. */
    description: string;
}>;

const ghsPictograms: Record<
    GhsPictogram,
    | {
          label: string;
          icon: HTMLTemplateResult;
          description: string;
      }
    | undefined
> = {
    [GhsPictogram.Explosive]: {
        label: 'Explosive',
        icon: ghsPictogramSvgs.Explosive,
        description: 'Can blow up when heated, hit, or sparked.',
    },
    [GhsPictogram.Flammable]: {
        label: 'Flammable',
        icon: ghsPictogramSvgs.Flammable,
        description: 'Catches fire easily.',
    },
    [GhsPictogram.Oxidizer]: {
        label: 'Oxidizer',
        icon: ghsPictogramSvgs.Oxidizer,
        description: 'Makes fires burn hotter and faster, even without much air.',
    },
    /** Warns about the pressurized cylinder the gas is sold in, not the molecule itself. */
    [GhsPictogram.CompressedGas]: undefined,
    [GhsPictogram.Corrosive]: {
        label: 'Corrosive',
        icon: ghsPictogramSvgs.Corrosive,
        description: 'Burns skin and eyes and can eat through metal.',
    },
    [GhsPictogram.AcuteToxicity]: {
        label: 'Toxic',
        icon: ghsPictogramSvgs.AcuteToxicity,
        description: 'Can be deadly if swallowed, breathed in, or touched, even in small amounts.',
    },
    [GhsPictogram.Irritant]: {
        label: 'Irritant',
        icon: ghsPictogramSvgs.Irritant,
        description: 'Can make skin, eyes, or lungs red, itchy, or sore.',
    },
    [GhsPictogram.HealthHazard]: {
        label: 'Health hazard',
        icon: ghsPictogramSvgs.HealthHazard,
        description:
            'Can harm the body over a long time, like damaging the lungs or causing cancer.',
    },
    [GhsPictogram.EnvironmentalHazard]: {
        label: 'Environmental hazard',
        icon: ghsPictogramSvgs.EnvironmentalHazard,
        description: 'Harmful to fish, plants, and other wildlife.',
    },
};

function getHazards(hazardPictograms: ReadonlyArray<GhsPictogram> | undefined) {
    return (hazardPictograms ?? [])
        .map((pictogram) => ghsPictograms[pictogram])
        .filter(check.isDefined)
        .map((pictogram): StatValue => {
            return {
                text: pictogram.label,
                icon: pictogram.icon,
                description: pictogram.description,
            };
        });
}

function withUnit(value: number | undefined, unit: string) {
    return value == undefined ? undefined : `${value.toLocaleString()} ${unit}`;
}

/** Molecules that sublime never boil at normal pressure, so their sublimation point takes the row. */
function getBoilingPoint({
    boilingPointCelsius,
    sublimationPointCelsius,
}: Readonly<Molecule['stats']>) {
    return boilingPointCelsius == undefined && sublimationPointCelsius != undefined
        ? `${withUnit(sublimationPointCelsius, '°C')} (sublimes)`
        : withUnit(boilingPointCelsius, '°C');
}

export function getMoleculeStatRows(molecule: Readonly<Molecule>) {
    return [
        {
            label: 'Discovered',
            value: molecule.stats.yearDiscovered?.toString(),
        },
        {
            label: 'Size',
            value: `${getMoleculeSize(molecule.atoms).toFixed(2)} Å`,
        },
        {
            label: 'Molar mass',
            value: `${getMolarMass(molecule.atoms).toFixed(2)} g/mol`,
        },
        {
            label: 'State at room temp',
            value: molecule.stats.stateAtRoomTemperature
                ? matterStateLabels[molecule.stats.stateAtRoomTemperature]
                : undefined,
        },
        {
            label: 'Melting point',
            value: withUnit(molecule.stats.meltingPointCelsius, '°C'),
        },
        {
            label: 'Boiling point',
            value: getBoilingPoint(molecule.stats),
        },
        {
            label: 'Density',
            value: withUnit(molecule.stats.densityGramsPerCubicCentimeter, 'g/cm³'),
        },
        {
            label: 'Hazards',
            value: getHazards(molecule.stats.hazardPictograms),
        },
        {
            label: 'Smell',
            value: molecule.stats.smell,
        },
        {
            label: 'Taste',
            value: molecule.stats.taste,
        },
        {
            label: 'Habitat',
            value: molecule.stats.habitat,
        },
    ].map((row) => {
        const values: StatValue[] = check.isArray(row.value)
            ? row.value
            : [
                  {
                      text: row.value || '',
                  },
              ].filter((value) => value.text);
        return {
            label: row.label,
            values: values.length
                ? values
                : [
                      {
                          text: '-',
                      },
                  ],
        };
    });
}
