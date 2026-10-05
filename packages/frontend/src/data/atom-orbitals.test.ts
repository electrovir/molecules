// cspell:word oganesson
import {assert} from '@augment-vir/assert';
import {describe, it, itCases} from '@augment-vir/test';
import {
    angularMomentum,
    countRadialNodes,
    createRadialDensityTable,
    createSphereDirections,
    expandOrbitals,
    getAngularWavefunction,
    getMaxAngularDensity,
    getShellMedianRadius,
    getShellOccupancies,
    getSlaterEffectiveCharge,
    OrbitalShape,
    parseElectronConfiguration,
} from './atom-orbitals.js';
import {chemicalElements} from './chemical-element.js';
import {elementSymbols} from './periodic-table.js';

function getRoundedSodiumCharge(subshell: Readonly<{n: number; shape: OrbitalShape}>) {
    return (
        Math.round(
            getSlaterEffectiveCharge({
                symbol: 'Na',
                subshell,
            }) * 100,
        ) / 100
    );
}

describe(getSlaterEffectiveCharge.name, () => {
    itCases(getRoundedSodiumCharge, [
        {
            it: 'shields sodium 1s by its partner only',
            input: {
                n: 1,
                shape: OrbitalShape.S,
            },
            expect: 10.7,
        },
        {
            it: 'shields sodium 2p by its own group and the 1s shell',
            input: {
                n: 2,
                shape: OrbitalShape.P,
            },
            expect: 6.85,
        },
        {
            it: 'shields sodium 3s by every inner electron',
            input: {
                n: 3,
                shape: OrbitalShape.S,
            },
            expect: 2.2,
        },
    ]);

    it('shields a d electron fully by every group before it', () => {
        /** Zn: 30 - (9 × 0.35 + 18) = 8.85. */
        assert.strictEquals(
            Math.round(
                getSlaterEffectiveCharge({
                    symbol: 'Zn',
                    subshell: {
                        n: 3,
                        shape: OrbitalShape.D,
                    },
                }) * 100,
            ) / 100,
            8.85,
        );
    });
});

describe(parseElectronConfiguration.name, () => {
    it('reads chromium as written instead of by filling order', () => {
        assert.deepEquals(parseElectronConfiguration('Cr').slice(-2), [
            {
                n: 3,
                shape: OrbitalShape.D,
                electrons: 5,
            },
            {
                n: 4,
                shape: OrbitalShape.S,
                electrons: 1,
            },
        ]);
    });

    it('reads copper as written instead of by filling order', () => {
        assert.deepEquals(parseElectronConfiguration('Cu').slice(-2), [
            {
                n: 3,
                shape: OrbitalShape.D,
                electrons: 10,
            },
            {
                n: 4,
                shape: OrbitalShape.S,
                electrons: 1,
            },
        ]);
    });

    it('has as many electrons as protons for every element', () => {
        const mismatched = elementSymbols.filter((symbol) => {
            return (
                parseElectronConfiguration(symbol).reduce(
                    (total, subshell) => total + subshell.electrons,
                    0,
                ) !== chemicalElements[symbol].atomicNumber
            );
        });
        assert.deepEquals(mismatched, []);
    });
});

describe(expandOrbitals.name, () => {
    it('lists sodium orbitals in order', () => {
        assert.deepEquals(
            expandOrbitals('Na').map((orbital) => `${orbital.id}${orbital.occupancy}`),
            [
                '1s2',
                '2s2',
                '2px2',
                '2py2',
                '2pz2',
                '3s1',
            ],
        );
    });

    it('half fills before pairing', () => {
        assert.deepEquals(
            expandOrbitals('O')
                .filter((orbital) => orbital.shape === OrbitalShape.P)
                .map((orbital) => orbital.occupancy),
            [
                2,
                1,
                1,
            ],
        );
    });

    it('drops empty orbitals', () => {
        assert.deepEquals(
            expandOrbitals('B').map((orbital) => orbital.id),
            [
                '1s',
                '2s',
                '2px',
            ],
        );
    });
});

describe(countRadialNodes.name, () => {
    it('finds n - l - 1 radial nodes in every orbital of radon and oganesson', () => {
        const wrongOrbitals = [
            ...expandOrbitals('Rn'),
            ...expandOrbitals('Og'),
        ].filter((orbital) => {
            const {values} = createRadialDensityTable({
                orbital,
                binCount: 3000,
            });
            return countRadialNodes(values) !== orbital.n - angularMomentum[orbital.shape] - 1;
        });
        assert.deepEquals(
            wrongOrbitals.map((orbital) => orbital.id),
            [],
        );
    });
});

describe(createRadialDensityTable.name, () => {
    it('peaks at 1 in the outermost lobe', () => {
        const {densities, values} = createRadialDensityTable({
            orbital: {
                n: 3,
                shape: OrbitalShape.P,
                effectiveCharge: 4.45,
            },
            binCount: 3000,
        });
        const lastNodeIndex = values.findLastIndex(
            (value, index) => index > 0 && Math.sign(value) !== Math.sign(values[index - 1] ?? 0),
        );
        assert.strictEquals(Math.max(...densities.slice(lastNodeIndex)), 1);
        assert.isAbove(Math.max(...densities), 1);
    });
});

describe(getAngularWavefunction.name, () => {
    it('keeps every orbital in a subshell orthogonal to its siblings', () => {
        const directions = createSphereDirections(20_000);
        const subshellOrbitals = Object.values(OrbitalShape).map((shape) => {
            return expandOrbitals('Og').filter(
                (orbital) => orbital.n === 5 && orbital.shape === shape,
            );
        });
        const overlappingPairs = subshellOrbitals.flatMap((orbitals) => {
            return orbitals.flatMap((first, firstIndex) => {
                return orbitals.slice(firstIndex + 1).filter((second) => {
                    const sums = directions.reduce(
                        (totals, {x, y, z}) => {
                            const firstValue = getAngularWavefunction({
                                orbital: first,
                                x,
                                y,
                                z,
                            });
                            const secondValue = getAngularWavefunction({
                                orbital: second,
                                x,
                                y,
                                z,
                            });
                            return {
                                product: totals.product + firstValue * secondValue,
                                first: totals.first + firstValue ** 2,
                                second: totals.second + secondValue ** 2,
                            };
                        },
                        {
                            product: 0,
                            first: 0,
                            second: 0,
                        },
                    );
                    return Math.abs(sums.product) / Math.sqrt(sums.first * sums.second) > 0.01;
                });
            });
        });
        assert.isLengthExactly(
            subshellOrbitals.map((orbitals) => orbitals.length),
            4,
        );
        assert.isLengthExactly(overlappingPairs, 0);
    });
});

describe(getMaxAngularDensity.name, () => {
    it('finds the strongest direction of every harmonic', () => {
        const directions = createSphereDirections(500);
        const exceeding = expandOrbitals('Og')
            .filter((orbital) => orbital.n === 5)
            .filter((orbital) => {
                const max = getMaxAngularDensity(orbital);
                return directions.some(({x, y, z}) => {
                    return (
                        getAngularWavefunction({
                            orbital,
                            x,
                            y,
                            z,
                        }) **
                            2 >
                        max * 1.01
                    );
                });
            });
        assert.isLengthExactly(exceeding, 0);
    });
});

describe(getShellMedianRadius.name, () => {
    it('grows with each shell', () => {
        const orbitals = expandOrbitals('Kr');
        const radii = getShellOccupancies(orbitals).map(({n}) => {
            return getShellMedianRadius({
                orbitals,
                n,
            });
        });
        assert.isLengthExactly(radii, 4);
        assert.isTrue(
            radii.every((radius, index) => index === 0 || radius > (radii[index - 1] ?? 0)),
        );
    });
});

describe(getShellOccupancies.name, () => {
    it('counts sodium as 2, 8, 1', () => {
        assert.deepEquals(
            getShellOccupancies(expandOrbitals('Na')).map((shell) => shell.electrons),
            [
                2,
                8,
                1,
            ],
        );
    });
});
