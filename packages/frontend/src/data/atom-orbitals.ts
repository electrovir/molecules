// cspell:word hund's laguerre spdf
import {assert, assertWrap} from '@augment-vir/assert';
import {createArray} from '@augment-vir/common';
import {chemicalElements, type ChemicalElementSymbol} from './chemical-element.js';

/** An orbital's angular momentum letter. */
export enum OrbitalShape {
    S = 's',
    P = 'p',
    D = 'd',
    F = 'f',
}

/** The quantum number `l` for each shape. */
export const angularMomentum: Readonly<Record<OrbitalShape, number>> = {
    [OrbitalShape.S]: 0,
    [OrbitalShape.P]: 1,
    [OrbitalShape.D]: 2,
    [OrbitalShape.F]: 3,
};

export type Subshell = {
    /** Principal quantum number. */
    n: number;
    shape: OrbitalShape;
    electrons: number;
};

/** One real spherical harmonic, written as a polynomial of a unit direction. */
type RealHarmonic = {
    /** What follows the shape letter in the orbital's name, such as `'x'` in 2pₓ. */
    subscript: string;
    evaluate(x: number, y: number, z: number): number;
};

/**
 * Real rather than complex harmonics, since complex ones are rings around the z axis instead of the
 * familiar lobes. Unnormalized, since every use is relative to the harmonic's own maximum. Listed
 * in the order Hund's rule fills them.
 */
const realHarmonics: Readonly<Record<OrbitalShape, ReadonlyArray<Readonly<RealHarmonic>>>> = {
    [OrbitalShape.S]: [
        {
            subscript: '',
            evaluate() {
                return 1;
            },
        },
    ],
    [OrbitalShape.P]: [
        {
            subscript: 'x',
            evaluate(x) {
                return x;
            },
        },
        {
            subscript: 'y',
            evaluate(x, y) {
                return y;
            },
        },
        {
            subscript: 'z',
            evaluate(x, y, z) {
                return z;
            },
        },
    ],
    [OrbitalShape.D]: [
        {
            subscript: 'xy',
            evaluate(x, y) {
                return x * y;
            },
        },
        {
            subscript: 'yz',
            evaluate(x, y, z) {
                return y * z;
            },
        },
        {
            subscript: 'xz',
            evaluate(x, y, z) {
                return x * z;
            },
        },
        {
            subscript: 'x²−y²',
            evaluate(x, y) {
                return x * x - y * y;
            },
        },
        {
            subscript: 'z²',
            evaluate(x, y, z) {
                return 3 * z * z - 1;
            },
        },
    ],
    [OrbitalShape.F]: [
        {
            subscript: 'z³',
            evaluate(x, y, z) {
                return z * (5 * z * z - 3);
            },
        },
        {
            subscript: 'xz²',
            evaluate(x, y, z) {
                return x * (5 * z * z - 1);
            },
        },
        {
            subscript: 'yz²',
            evaluate(x, y, z) {
                return y * (5 * z * z - 1);
            },
        },
        {
            subscript: 'z(x²−y²)',
            evaluate(x, y, z) {
                return z * (x * x - y * y);
            },
        },
        {
            subscript: 'xyz',
            evaluate(x, y, z) {
                return x * y * z;
            },
        },
        {
            subscript: 'x(x²−3y²)',
            evaluate(x, y) {
                return x * (x * x - 3 * y * y);
            },
        },
        {
            subscript: 'y(3x²−y²)',
            evaluate(x, y) {
                return y * (3 * x * x - y * y);
            },
        },
    ],
};

/**
 * Expands an element's configuration, including its noble gas core, into subshells ordered by `n`
 * then shape.
 *
 * @example
 *
 * ```ts
 * parseElectronConfiguration('Li'); // [{n: 1, shape: 's', electrons: 2}, {n: 2, shape: 's', electrons: 1}]
 * ```
 */
export function parseElectronConfiguration(symbol: ChemicalElementSymbol): Subshell[] {
    /** Annotated because the noble gas core makes this recursive. */
    const subshells = chemicalElements[symbol].electronConfiguration
        .split(' ')
        .flatMap((token): Subshell[] => {
            const core = /^\[(\w+)\]$/.exec(token)?.[1];
            if (core) {
                return parseElectronConfiguration(
                    assertWrap.isKeyOf(core, chemicalElements, `Unknown core '${core}'.`),
                );
            }
            const [
                ,
                n,
                shape,
                electrons,
            ] = assertWrap.isDefined(
                /^(\d)([spdf])(\d+)$/.exec(token),
                `Invalid subshell '${token}' for ${symbol}.`,
            );
            return [
                {
                    n: Number(n),
                    shape: assertWrap.isEnumValue(shape, OrbitalShape),
                    electrons: Number(electrons),
                },
            ];
        });
    return subshells.toSorted((first, second) => {
        return first.n - second.n || angularMomentum[first.shape] - angularMomentum[second.shape];
    });
}

/**
 * Slater's groups are ordered (1s)(2s,2p)(3s,3p)(3d)(4s,4p)(4d)(4f)(5s,5p)…, which this key sorts
 * into.
 */
function getSlaterGroupKey({n, shape}: Readonly<Pick<Subshell, 'n' | 'shape'>>) {
    return n * 10 + Math.max(0, angularMomentum[shape] - 1);
}

/**
 * The nuclear charge an electron in the given subshell feels after the other electrons' shielding,
 * from Slater's rules.
 */
export function getSlaterEffectiveCharge({
    symbol,
    subshell,
}: Readonly<{
    symbol: ChemicalElementSymbol;
    subshell: Readonly<Pick<Subshell, 'n' | 'shape'>>;
}>) {
    const configuration = parseElectronConfiguration(symbol);
    const ownGroup = getSlaterGroupKey(subshell);
    const isOuterShape = angularMomentum[subshell.shape] < 2;

    const shielding = configuration.reduce((total, other) => {
        const otherGroup = getSlaterGroupKey(other);
        const isSameSubshell = other.n === subshell.n && other.shape === subshell.shape;
        /** An electron doesn't shield itself. */
        const electrons = isSameSubshell ? other.electrons - 1 : other.electrons;
        const perElectron =
            otherGroup === ownGroup
                ? subshell.n === 1
                    ? 0.3
                    : 0.35
                : otherGroup > ownGroup
                  ? 0
                  : isOuterShape
                    ? other.n === subshell.n - 1
                        ? 0.85
                        : 1
                    : 1;
        return total + electrons * perElectron;
    }, 0);

    return chemicalElements[symbol].atomicNumber - shielding;
}

export type Orbital = {
    /** Such as `'2px'` or `'3dz²'`. Unique within an atom. */
    id: string;
    n: number;
    shape: OrbitalShape;
    /** Which of the shape's real harmonics, in fill order. */
    harmonicIndex: number;
    subscript: string;
    occupancy: number;
    effectiveCharge: number;
};

/**
 * Every occupied orbital, ordered by `n` then shape. A partly filled subshell gets one electron per
 * orbital before any pair up, per Hund's rule.
 */
export function expandOrbitals(symbol: ChemicalElementSymbol): Orbital[] {
    return parseElectronConfiguration(symbol).flatMap((subshell) => {
        const harmonics = realHarmonics[subshell.shape];
        const effectiveCharge = getSlaterEffectiveCharge({
            symbol,
            subshell,
        });
        return harmonics.flatMap((harmonic, harmonicIndex) => {
            const occupancy =
                subshell.electrons > harmonics.length
                    ? harmonicIndex < subshell.electrons - harmonics.length
                        ? 2
                        : 1
                    : harmonicIndex < subshell.electrons
                      ? 1
                      : 0;
            return occupancy
                ? [
                      {
                          id: `${subshell.n}${subshell.shape}${harmonic.subscript}`,
                          n: subshell.n,
                          shape: subshell.shape,
                          harmonicIndex,
                          subscript: harmonic.subscript,
                          occupancy,
                          effectiveCharge,
                      },
                  ]
                : [];
        });
    });
}

/** Associated Laguerre polynomial `L_degree^alpha(x)`, from the three-term recurrence. */
function getLaguerre({degree, alpha, x}: Readonly<{degree: number; alpha: number; x: number}>) {
    const values = createArray(degree, (index) => index).reduce(
        ({previous, current}, index) => {
            return {
                previous: current,
                current:
                    ((2 * index + 1 + alpha - x) * current - (index + alpha) * previous) /
                    (index + 1),
            };
        },
        {
            previous: 0,
            current: 1,
        },
    );
    return values.current;
}

/**
 * The hydrogen-like radial wavefunction `R_nl` for the orbital, unnormalized. `radius` is in Bohr
 * radii.
 */
export function getRadialWavefunction({
    orbital,
    radius,
}: Readonly<{
    orbital: Readonly<Pick<Orbital, 'n' | 'shape' | 'effectiveCharge'>>;
    radius: number;
}>) {
    const l = angularMomentum[orbital.shape];
    const rho = (2 * orbital.effectiveCharge * radius) / orbital.n;
    return (
        rho ** l *
        Math.exp(-rho / 2) *
        getLaguerre({
            degree: orbital.n - l - 1,
            alpha: 2 * l + 1,
            x: rho,
        })
    );
}

/** The orbital's real harmonic at a unit direction, unnormalized. */
export function getAngularWavefunction({
    orbital,
    x,
    y,
    z,
}: Readonly<{
    orbital: Readonly<Pick<Orbital, 'shape' | 'harmonicIndex'>>;
    x: number;
    y: number;
    z: number;
}>) {
    return assertWrap
        .isDefined(realHarmonics[orbital.shape][orbital.harmonicIndex])
        .evaluate(x, y, z);
}

/** How far out, in Bohr radii, an orbital's shape is searched for. */
export function getOrbitalSearchRadius({
    n,
    effectiveCharge,
}: Readonly<Pick<Orbital, 'n' | 'effectiveCharge'>>) {
    return (4 * n * n + 12) / effectiveCharge;
}

/** Evenly spaced radii from `0` to `maxRadius`, each the middle of its bin. */
function createRadialBins({binCount, maxRadius}: Readonly<{binCount: number; maxRadius: number}>) {
    return createArray(binCount, (index) => ((index + 0.5) / binCount) * maxRadius);
}

function isSignChange({values, index}: Readonly<{values: ReadonlyArray<number>; index: number}>) {
    return (
        index > 0 &&
        Math.sign(assertWrap.isDefined(values[index])) !==
            Math.sign(assertWrap.isDefined(values[index - 1]))
    );
}

/**
 * `R_nl²` sampled across the orbital's search radius, divided by the peak of its outermost lobe.
 * Thresholds use the outermost lobe instead of the overall peak because inner lobes are far denser:
 * against 3p's inner peak, its outer lobes would fall under any useful threshold.
 */
export function createRadialDensityTable({
    orbital,
    binCount,
}: Readonly<{
    orbital: Readonly<Pick<Orbital, 'n' | 'shape' | 'effectiveCharge'>>;
    binCount: number;
}>) {
    const maxRadius = getOrbitalSearchRadius(orbital);
    const radii = createRadialBins({
        binCount,
        maxRadius,
    });
    const values = radii.map((radius) => {
        return getRadialWavefunction({
            orbital,
            radius,
        });
    });
    const lastNodeIndex = values.findLastIndex((value, index) => {
        return isSignChange({
            values,
            index,
        });
    });
    const outerPeak = Math.max(
        ...values.slice(Math.max(lastNodeIndex, 0)).map((value) => value * value),
    );
    return {
        maxRadius,
        radii,
        /** Signed `R_nl`, so callers can read the phase. */
        values,
        densities: values.map((value) => (value * value) / outerPeak),
    };
}

/** Counts the sign changes in a radial table, which are its radial nodes. */
export function countRadialNodes(values: ReadonlyArray<number>) {
    return values.filter((value, index) => {
        return isSignChange({
            values,
            index,
        });
    }).length;
}

/** Directions spread evenly over a sphere, on a Fibonacci spiral. */
export function createSphereDirections(count: number) {
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    return createArray(count, (index) => {
        const y = 1 - ((index + 0.5) / count) * 2;
        const ringRadius = Math.sqrt(1 - y * y);
        return {
            x: Math.cos(goldenAngle * index) * ringRadius,
            y,
            z: Math.sin(goldenAngle * index) * ringRadius,
        };
    });
}

const maxAngularSearchDirections = createSphereDirections(4000);

/** The largest square of the orbital's harmonic over every direction. */
export function getMaxAngularDensity(orbital: Readonly<Pick<Orbital, 'shape' | 'harmonicIndex'>>) {
    return Math.max(
        ...maxAngularSearchDirections.map(({x, y, z}) => {
            return (
                getAngularWavefunction({
                    orbital,
                    x,
                    y,
                    z,
                }) ** 2
            );
        }),
    );
}

const shellMedianBinCount = 3000;

/**
 * The median distance from the nucleus, in Bohr radii, of the electrons in shell `n`, weighting
 * each orbital's `r²R²` by its electron count.
 */
export function getShellMedianRadius({
    orbitals,
    n,
}: Readonly<{
    orbitals: ReadonlyArray<Readonly<Orbital>>;
    n: number;
}>) {
    const shellOrbitals = orbitals.filter((orbital) => orbital.n === n);
    assert.isLengthAtLeast(shellOrbitals, 1, `No orbitals in shell ${n}.`);
    const maxRadius = Math.max(...shellOrbitals.map((orbital) => getOrbitalSearchRadius(orbital)));
    const radii = createRadialBins({
        binCount: shellMedianBinCount,
        maxRadius,
    });
    const weights = shellOrbitals.reduce(
        (totals, orbital) => {
            const densities = radii.map((radius) => {
                return (
                    radius *
                    radius *
                    getRadialWavefunction({
                        orbital,
                        radius,
                    }) **
                        2
                );
            });
            const sum = densities.reduce((total, density) => total + density, 0);
            return totals.map((total, index) => {
                return total + (orbital.occupancy * assertWrap.isDefined(densities[index])) / sum;
            });
        },
        radii.map(() => 0),
    );
    const half = weights.reduce((total, weight) => total + weight, 0) / 2;
    const medianIndex = weights.reduce(
        ({sum, index}, weight, weightIndex) => {
            return sum >= half
                ? {
                      sum,
                      index,
                  }
                : {
                      sum: sum + weight,
                      index: weightIndex,
                  };
        },
        {
            sum: 0,
            index: 0,
        },
    ).index;
    return assertWrap.isDefined(radii[medianIndex]);
}

/** Electrons per shell, in order of `n`. Shells with no electrons are skipped. */
export function getShellOccupancies(orbitals: ReadonlyArray<Readonly<Orbital>>) {
    const maxN = Math.max(...orbitals.map((orbital) => orbital.n));
    return createArray(maxN, (index) => {
        const n = index + 1;
        return {
            n,
            electrons: orbitals
                .filter((orbital) => orbital.n === n)
                .reduce((total, orbital) => total + orbital.occupancy, 0),
        };
    }).filter((shell) => shell.electrons > 0);
}
