import {check} from '@augment-vir/assert';
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
    icon?: HTMLTemplateResult | undefined;
};

const ghsPictograms: Record<GhsPictogram, {label: string; icon: HTMLTemplateResult} | undefined> = {
    [GhsPictogram.Explosive]: {
        label: 'Explosive',
        icon: ghsPictogramSvgs.Explosive,
    },
    [GhsPictogram.Flammable]: {
        label: 'Flammable',
        icon: ghsPictogramSvgs.Flammable,
    },
    [GhsPictogram.Oxidizer]: {
        label: 'Oxidizer',
        icon: ghsPictogramSvgs.Oxidizer,
    },
    /** Warns about the pressurized cylinder the gas is sold in, not the molecule itself. */
    [GhsPictogram.CompressedGas]: undefined,
    [GhsPictogram.Corrosive]: {
        label: 'Corrosive',
        icon: ghsPictogramSvgs.Corrosive,
    },
    [GhsPictogram.AcuteToxicity]: {
        label: 'Toxic',
        icon: ghsPictogramSvgs.AcuteToxicity,
    },
    [GhsPictogram.Irritant]: {
        label: 'Irritant',
        icon: ghsPictogramSvgs.Irritant,
    },
    [GhsPictogram.HealthHazard]: {
        label: 'Health hazard',
        icon: ghsPictogramSvgs.HealthHazard,
    },
    [GhsPictogram.EnvironmentalHazard]: {
        label: 'Environmental hazard',
        icon: ghsPictogramSvgs.EnvironmentalHazard,
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

function getWaterSolubility({
    isWaterMiscible,
    waterSolubilityGramsPerLiter,
}: Readonly<Molecule['stats']>) {
    return isWaterMiscible ? 'Miscible' : withUnit(waterSolubilityGramsPerLiter, 'g/L');
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
            label: 'Water solubility',
            value: getWaterSolubility(molecule.stats),
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
