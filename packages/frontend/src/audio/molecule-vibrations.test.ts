// cspell:words tridiagonal
import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import methane from '../data/molecules/methane.molecule.js';
import water from '../data/molecules/water.molecule.js';
import {getSymmetricEigenvalues, getVibrationPartials} from './molecule-vibrations.js';

describe(getSymmetricEigenvalues.name, () => {
    it('matches the known eigenvalues of a tridiagonal matrix', () => {
        /** This matrix has eigenvalues 2 - √2, 2, and 2 + √2. */
        const eigenvalues = getSymmetricEigenvalues(
            new Float64Array([
                2,
                -1,
                0,
                -1,
                2,
                -1,
                0,
                -1,
                2,
            ]),
            3,
        ).toSorted((first, second) => first - second);

        assert.deepEquals(
            eigenvalues.map((value) => value.toFixed(9)),
            [
                2 - Math.SQRT2,
                2,
                2 + Math.SQRT2,
            ].map((value) => value.toFixed(9)),
        );
    });
});

describe(getVibrationPartials.name, () => {
    it('gives water its three vibrations, all distinct', () => {
        assert.deepEquals(
            getVibrationPartials(water).map((partial) => partial.degeneracy),
            [
                1,
                1,
                1,
            ],
        );
    });
    it("groups methane's nine vibrations by its tetrahedral symmetry", () => {
        assert.deepEquals(
            getVibrationPartials(methane).map((partial) => partial.degeneracy),
            [
                3,
                2,
                3,
                1,
            ],
        );
    });
});
