import {check} from '@augment-vir/assert';
import {
    getMolarMass,
    getMoleculeSize,
    getTotalBondOrder,
    GhsPictogram,
    MatterState,
    type Molecule,
} from '../data/molecule.js';

const matterStateLabels: Record<MatterState, string> = {
    [MatterState.Gas]: 'Gas',
    [MatterState.Liquid]: 'Liquid',
    [MatterState.Solid]: 'Solid',
};

const ghsPictogramLabels: Record<GhsPictogram, string> = {
    [GhsPictogram.Explosive]: 'Explosive',
    [GhsPictogram.Flammable]: 'Flammable',
    [GhsPictogram.Oxidizer]: 'Oxidizer',
    [GhsPictogram.CompressedGas]: 'Compressed gas',
    [GhsPictogram.Corrosive]: 'Corrosive',
    [GhsPictogram.AcuteToxicity]: 'Toxic',
    [GhsPictogram.Irritant]: 'Irritant',
    [GhsPictogram.HealthHazard]: 'Health hazard',
    [GhsPictogram.EnvironmentalHazard]: 'Environmental hazard',
};

function withUnit(value: number | undefined, unit: string) {
    return value == undefined ? undefined : `${value.toLocaleString()} ${unit}`;
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
            label: 'Molar mass',
            value: `${getMolarMass(molecule.atoms).toFixed(2)} g/mol`,
        },
        {
            label: 'Atoms',
            value: String(molecule.atoms.length),
        },
        {
            label: 'Total bond order',
            value: String(getTotalBondOrder(molecule.bonds)),
        },
        {
            label: 'Size',
            value: `${getMoleculeSize(molecule.atoms).toFixed(2)} Å`,
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
            value: withUnit(molecule.stats.boilingPointCelsius, '°C'),
        },
        {
            label: 'Sublimation point',
            value: withUnit(molecule.stats.sublimationPointCelsius, '°C'),
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
            label: 'logP',
            value: molecule.stats.logP?.toLocaleString(),
        },
        {
            label: 'Dipole moment',
            value: withUnit(molecule.stats.dipoleMomentDebye, 'D'),
        },
        {
            label: 'Oral LD50 (rat)',
            value: withUnit(molecule.stats.oralRatLethalDoseMilligramsPerKilogram, 'mg/kg'),
        },
        {
            label: 'Hazards',
            value: molecule.stats.hazardPictograms
                ? molecule.stats.hazardPictograms
                      .map((pictogram) => ghsPictogramLabels[pictogram])
                      .join(', ') || 'None'
                : undefined,
        },
        {
            label: 'Discovered',
            value: molecule.stats.yearDiscovered?.toString(),
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
    ].filter((row): row is {label: string; value: string} => check.isString(row.value));
}
