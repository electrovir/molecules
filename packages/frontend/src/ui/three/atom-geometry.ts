import {assertWrap} from '@augment-vir/assert';
import {createArray} from '@augment-vir/common';
import {BufferAttribute, type BufferGeometry, Color, SphereGeometry, Vector3} from 'three';
import {
    createRadialDensityTable,
    expandOrbitals,
    getAngularWavefunction,
    getMaxAngularDensity,
    getShellMedianRadius,
    getShellOccupancies,
    type Orbital,
} from '../../data/atom-orbitals.js';
import {chemicalElements, type ChemicalElementSymbol} from '../../data/chemical-element.js';
import {getOrbitalColor} from '../orbital-colors.js';

/**
 * World units per square root Bohr radius. Distances are square-root compressed so the core shells
 * don't vanish next to the valence shell, and scaled so balls come out molecule-sized and the
 * impostors' effects, tuned in ångströms, fit.
 */
const displayScale = 2.75;
const radialBinCount = 3000;
const pointsPerElectron = 5000;
/** Heavy atoms get fewer points per electron so the whole atom stays near this many. */
const maxPointsPerAtom = 250_000;
/** Surfaces sit where `|ψ|²` drops to this fraction of the orbital's outer peak. */
const surfaceThreshold = 0.15;
/** Cloud points fainter than this fraction of the surface threshold are resampled. */
const cloudTrimFraction = 0.5;
const cloudTrimTries = 60;
/** Directions where the angular part is weaker than this are pinched to the center. */
const minSurfaceAngularDensity = 0.02;
/** How much darker an orbital's negative phase is drawn. */
const negativePhaseBrightness = 0.7;
const nucleonRadius = 0.2;
const nucleusRelaxSteps = 150;
/** Space between the nucleus and where the innermost orbital starts. */
const coreGap = 0.3;
const maxElectronRadius = 0.14;
/** Crowded rings, and rings close to their neighbors, shrink their electrons so they don't overlap. */
const electronSpacingFraction = 0.45;
const ringTiltRadians = 0.08;
const ringSpinRadiansPerSecond = 0.6;
/** The largest surface that keeps full opacity. Bigger ones are faded to match it. */
const fullGainSurfaceRadius = 3;

/** Seeded random numbers, so each element looks the same every time it's opened. */
function createRandom(seed: number) {
    const state = {
        value: seed >>> 0,
    };
    /** Mulberry32. */
    return () => {
        state.value = (state.value + 0x6d_2b_79_f5) >>> 0;
        const mixed = Math.imul(state.value ^ (state.value >>> 15), state.value | 1);
        const scrambled = mixed ^ (mixed + Math.imul(mixed ^ (mixed >>> 7), mixed | 61));
        return ((scrambled ^ (scrambled >>> 14)) >>> 0) / 4_294_967_296;
    };
}

type Random = ReturnType<typeof createRandom>;

/**
 * Where a distance from the nucleus, in Bohr radii, is drawn. Everything is pushed out past
 * `coreRadius` so the nucleus can be drawn big enough to see without swallowing the inner shells.
 */
function getDisplayRadius({radius, coreRadius}: Readonly<{radius: number; coreRadius: number}>) {
    return coreRadius + Math.sqrt(radius) * displayScale;
}

function getRandomDirection(random: Random) {
    const y = random() * 2 - 1;
    const angle = random() * 2 * Math.PI;
    const ringRadius = Math.sqrt(1 - y * y);
    return {
        x: Math.cos(angle) * ringRadius,
        y,
        z: Math.sin(angle) * ringRadius,
    };
}

/** Largest index whose value is at least `minimum`, in a list that never increases. */
function findLastAtLeast({
    values,
    minimum,
}: Readonly<{values: Readonly<Float64Array>; minimum: number}>) {
    /** Annotated because the search recurses. */
    function search({low, high}: Readonly<{low: number; high: number}>): number {
        if (low >= high) {
            return low;
        }
        const middle = Math.ceil((low + high) / 2);
        return (values[middle] ?? 0) >= minimum
            ? search({
                  low: middle,
                  high,
              })
            : search({
                  low,
                  high: middle - 1,
              });
    }
    return (values[0] ?? 0) >= minimum
        ? search({
              low: 0,
              high: values.length - 1,
          })
        : undefined;
}

type OrbitalTables = {
    orbital: Readonly<Orbital>;
    radial: ReturnType<typeof createRadialDensityTable>;
    maxAngularDensity: number;
    coreRadius: number;
};

function getAngularDensity({
    tables,
    direction,
}: Readonly<{
    tables: Readonly<OrbitalTables>;
    direction: Readonly<{x: number; y: number; z: number}>;
}>) {
    const value = getAngularWavefunction({
        orbital: tables.orbital,
        ...direction,
    });
    return {
        value,
        density: (value * value) / tables.maxAngularDensity,
    };
}

/**
 * Point positions and colors sampled from `|ψ|²`, with the faint outer tail resampled so the cloud
 * doesn't look patchy.
 */
function sampleOrbitalCloud({
    tables,
    count,
    color,
    random,
}: Readonly<{
    tables: Readonly<OrbitalTables>;
    count: number;
    color: Readonly<Color>;
    random: Random;
}>) {
    const {radii, densities, values, maxRadius} = tables.radial;
    const binWidth = maxRadius / radii.length;
    /** Running total of `r²R²`, the chance of finding the electron at each distance. */
    const cumulative = new Float64Array(radii.length + 1);
    radii.forEach((radius, index) => {
        cumulative[index + 1] =
            (cumulative[index] ?? 0) + radius * radius * (densities[index] ?? 0);
    });
    const total = cumulative[radii.length] ?? 0;

    function sampleBin() {
        const target = random() * total;
        /** Annotated because the search recurses. */
        function search({low, high}: Readonly<{low: number; high: number}>): number {
            if (low >= high) {
                return low;
            }
            const middle = Math.floor((low + high) / 2);
            return (cumulative[middle + 1] ?? 0) < target
                ? search({
                      low: middle + 1,
                      high,
                  })
                : search({
                      low,
                      high: middle,
                  });
        }
        return search({
            low: 0,
            high: radii.length - 1,
        });
    }

    /** Annotated because the rejection sampling recurses. */
    function sampleDirection(): ReturnType<typeof getRandomDirection> {
        const direction = getRandomDirection(random);
        return random() <
            getAngularDensity({
                tables,
                direction,
            }).density
            ? direction
            : sampleDirection();
    }

    /** Annotated because the trimming recurses. */
    function samplePoint(triesLeft: number): number[] | undefined {
        if (!triesLeft) {
            return undefined;
        }
        const bin = sampleBin();
        const direction = sampleDirection();
        const angular = getAngularDensity({
            tables,
            direction,
        });
        if ((densities[bin] ?? 0) * angular.density < surfaceThreshold * cloudTrimFraction) {
            return samplePoint(triesLeft - 1);
        }
        const displayRadius = getDisplayRadius({
            radius: (radii[bin] ?? 0) + (random() - 0.5) * binWidth,
            coreRadius: tables.coreRadius,
        });
        const brightness = (values[bin] ?? 0) * angular.value < 0 ? negativePhaseBrightness : 1;
        return [
            direction.x * displayRadius,
            direction.y * displayRadius,
            direction.z * displayRadius,
            color.r * brightness,
            color.g * brightness,
            color.b * brightness,
        ];
    }

    const points = createArray(count, () => samplePoint(cloudTrimTries)).filter(
        (point) => point != undefined,
    );
    return {
        positions: Float32Array.from(points.flatMap((point) => point.slice(0, 3))),
        colors: Float32Array.from(points.flatMap((point) => point.slice(3))),
    };
}

/**
 * The orbital's outer boundary, as a sphere pushed out in each direction to the outermost distance
 * where `|ψ|²` reaches the surface threshold. Only outer lobes show, filled toward the center.
 */
function createOrbitalSurface({
    tables,
    color,
}: Readonly<{tables: Readonly<OrbitalTables>; color: Readonly<Color>}>) {
    const {radii, densities, values} = tables.radial;
    /** The densest point at or beyond each distance, so the outermost crossing is a binary search. */
    const outerMax = new Float64Array(densities.length);
    densities
        .map((density, index) => index)
        .toReversed()
        .forEach((index) => {
            outerMax[index] = Math.max(densities[index] ?? 0, outerMax[index + 1] ?? 0);
        });
    const geometry = new SphereGeometry(1, 96, 48);
    const positions = assertWrap.instanceOf(geometry.getAttribute('position'), BufferAttribute);
    const colors = new Float32Array(positions.count * 3);
    const radiusState = {
        max: 0,
    };
    createArray(positions.count, (index) => index).forEach((index) => {
        const direction = new Vector3().fromBufferAttribute(positions, index).normalize();
        const angular = getAngularDensity({
            tables,
            direction,
        });
        const bin =
            angular.density < minSurfaceAngularDensity
                ? undefined
                : findLastAtLeast({
                      values: outerMax,
                      minimum: surfaceThreshold / angular.density,
                  });
        const displayRadius =
            bin == undefined
                ? 0
                : getDisplayRadius({
                      radius: radii[bin] ?? 0,
                      coreRadius: tables.coreRadius,
                  });
        radiusState.max = Math.max(radiusState.max, displayRadius);
        positions.setXYZ(
            index,
            direction.x * displayRadius,
            direction.y * displayRadius,
            direction.z * displayRadius,
        );
        const brightness =
            bin != undefined && (values[bin] ?? 0) * angular.value < 0
                ? negativePhaseBrightness
                : 1;
        colors.set(
            [
                color.r * brightness,
                color.g * brightness,
                color.b * brightness,
            ],
            index * 3,
        );
    });
    geometry.setAttribute('color', new BufferAttribute(colors, 3));
    geometry.computeVertexNormals();
    return {
        geometry: geometry satisfies BufferGeometry as BufferGeometry,
        radius: radiusState.max,
    };
}

/**
 * Packs protons and neutrons into a ball by pulling them all in, then pushing apart any pair that
 * overlaps, over and over.
 */
function packNucleus({
    protonCount,
    nucleonCount,
    random,
}: Readonly<{protonCount: number; nucleonCount: number; random: Random}>) {
    const positions = new Float64Array(nucleonCount * 3);
    const startRadius = nucleonRadius * Math.cbrt(nucleonCount) * 2;
    createArray(nucleonCount, (index) => index).forEach((index) => {
        const direction = getRandomDirection(random);
        const radius = startRadius * Math.cbrt(random());
        positions.set(
            [
                direction.x * radius,
                direction.y * radius,
                direction.z * radius,
            ],
            index * 3,
        );
    });
    const minDistance = nucleonRadius * 2;
    /**
     * Every step checks every pair, which is a few million checks for the heaviest nuclei, so this
     * works in place on a typed array instead of building new objects.
     */
    for (let step = 0; step < nucleusRelaxSteps; step++) {
        for (let index = 0; index < positions.length; index++) {
            positions[index] = (positions[index] ?? 0) * 0.97;
        }
        for (let first = 0; first < nucleonCount; first++) {
            for (let second = first + 1; second < nucleonCount; second++) {
                const dx = (positions[second * 3] ?? 0) - (positions[first * 3] ?? 0);
                const dy = (positions[second * 3 + 1] ?? 0) - (positions[first * 3 + 1] ?? 0);
                const dz = (positions[second * 3 + 2] ?? 0) - (positions[first * 3 + 2] ?? 0);
                const distanceSquared = dx * dx + dy * dy + dz * dz;
                if (distanceSquared >= minDistance * minDistance) {
                    continue;
                }
                const distance = Math.sqrt(distanceSquared) || 1e-6;
                const push = (minDistance - distance) / distance / 2;
                positions[first * 3] = (positions[first * 3] ?? 0) - dx * push;
                positions[first * 3 + 1] = (positions[first * 3 + 1] ?? 0) - dy * push;
                positions[first * 3 + 2] = (positions[first * 3 + 2] ?? 0) - dz * push;
                positions[second * 3] = (positions[second * 3] ?? 0) + dx * push;
                positions[second * 3 + 1] = (positions[second * 3 + 1] ?? 0) + dy * push;
                positions[second * 3 + 2] = (positions[second * 3 + 2] ?? 0) + dz * push;
            }
        }
    }
    /** Which nucleons are protons, chosen at random. */
    const shuffled = createArray(nucleonCount, (index) => {
        return {
            index,
            order: random(),
        };
    }).toSorted((first, second) => first.order - second.order);
    const protonIndexes = shuffled.slice(0, protonCount).map(({index}) => index);
    return createArray(nucleonCount, (index) => {
        return {
            position: new Vector3(
                positions[index * 3],
                positions[index * 3 + 1],
                positions[index * 3 + 2],
            ),
            isProton: protonIndexes.includes(index),
        };
    });
}

/** Everything drawn for an atom, built from its element's electron configuration. */
export function createAtomGeometry(symbol: ChemicalElementSymbol) {
    const element = chemicalElements[symbol];
    const random = createRandom(element.atomicNumber);
    const orbitals = expandOrbitals(symbol);
    const pointsPerOrbitalElectron = Math.min(
        pointsPerElectron,
        Math.floor(maxPointsPerAtom / element.atomicNumber),
    );

    const nucleons = packNucleus({
        protonCount: element.atomicNumber,
        nucleonCount: element.massNumber,
        random,
    });
    const coreRadius =
        Math.max(...nucleons.map((nucleon) => nucleon.position.length())) + nucleonRadius + coreGap;

    const orbitalVisuals = orbitals.map((orbital) => {
        const tables: OrbitalTables = {
            coreRadius,
            orbital,
            radial: createRadialDensityTable({
                orbital,
                binCount: radialBinCount,
            }),
            maxAngularDensity: getMaxAngularDensity(orbital),
        };
        const color = new Color(getOrbitalColor(orbital));
        const surface = createOrbitalSurface({
            tables,
            color,
        });
        return {
            orbital,
            color,
            cloud: sampleOrbitalCloud({
                tables,
                count: orbital.occupancy * pointsPerOrbitalElectron,
                color,
                random,
            }),
            surface,
            gain: Math.min(1, fullGainSurfaceRadius / (surface.radius || 1)),
        };
    });

    const shellOccupancies = getShellOccupancies(orbitals);
    const middleShell = (shellOccupancies.length - 1) / 2;
    const shellRadii = shellOccupancies.map(({n}) => {
        return getDisplayRadius({
            radius: getShellMedianRadius({
                orbitals,
                n,
            }),
            coreRadius,
        });
    });
    const shells = shellOccupancies.map(({n, electrons}, shellIndex) => {
        const radius = assertWrap.isDefined(shellRadii[shellIndex]);
        const nearestRingGap = Math.min(
            radius - coreRadius + coreGap,
            ...[
                shellRadii[shellIndex - 1],
                shellRadii[shellIndex + 1],
            ].map((neighborRadius) => {
                return neighborRadius == undefined ? Infinity : Math.abs(neighborRadius - radius);
            }),
        );
        return {
            n,
            radius,
            tiltRadians: (shellIndex - middleShell) * ringTiltRadians,
            spinRadiansPerSecond: ringSpinRadiansPerSecond / Math.sqrt(shellIndex + 1),
            electronRadius: Math.min(
                maxElectronRadius,
                ((electronSpacingFraction * 2 * Math.PI) / electrons) * radius,
                electronSpacingFraction * nearestRingGap,
            ),
            /** One entry per electron, grouped by orbital so pairs sit side by side. */
            electronOrbitalIndexes: orbitals.flatMap((orbital, orbitalIndex) => {
                return orbital.n === n ? createArray(orbital.occupancy, () => orbitalIndex) : [];
            }),
        };
    });

    return {
        orbitals: orbitalVisuals,
        shells,
        nucleons,
        nucleonRadius,
        /** How far from the nucleus anything is drawn. */
        radius: Math.max(
            ...shells.map((shell) => shell.radius + shell.electronRadius),
            ...orbitalVisuals.map((visual) => visual.surface.radius),
        ),
    };
}

export type AtomGeometry = ReturnType<typeof createAtomGeometry>;
