// cspell:words tred tqli mdyn tridiagonal
import {createArray} from '@augment-vir/common';
import {chemicalElements} from '../data/chemical-element.js';
import {type Molecule} from '../data/molecule.js';

/** One vibration frequency, and how many of the molecule's vibrations share it. */
export type VibrationPartial = {
    waveNumberPerCentimeter: number;
    degeneracy: number;
};

/** The periodic table row of an element. */
export function getPeriodicRow(atomicNumber: number) {
    const index = [
        2,
        10,
        18,
        36,
        54,
        86,
    ].findIndex((lastAtomicNumber) => atomicNumber <= lastAtomicNumber);
    return index === -1 ? 7 : index + 1;
}

/**
 * Eigenvalues of a symmetric matrix, unsorted. Householder reduction to tridiagonal form followed
 * by implicit QL (Numerical Recipes' `tred2` and `tqli`, eigenvalues only). Overwrites `matrix`.
 */
export function getSymmetricEigenvalues(matrix: Float64Array, size: number) {
    function at(flatIndex: number) {
        return matrix[flatIndex] ?? 0;
    }
    const diagonal = new Float64Array(size);
    const offDiagonal = new Float64Array(size);
    function getOff(index: number) {
        return offDiagonal[index] ?? 0;
    }
    function getDiagonal(index: number) {
        return diagonal[index] ?? 0;
    }

    for (let row = size - 1; row > 0; row--) {
        const last = row - 1;
        let total = 0;
        const scale =
            last > 0
                ? createArray(last + 1, (column) => Math.abs(at(row * size + column))).reduce(
                      (sum, value) => sum + value,
                      0,
                  )
                : 0;
        if (last === 0 || scale === 0) {
            offDiagonal[row] = at(row * size + last);
        } else {
            for (let column = 0; column <= last; column++) {
                matrix[row * size + column] = at(row * size + column) / scale;
                total += at(row * size + column) ** 2;
            }
            const pivot = at(row * size + last);
            const shift = pivot >= 0 ? -Math.sqrt(total) : Math.sqrt(total);
            offDiagonal[row] = scale * shift;
            total -= pivot * shift;
            matrix[row * size + last] = pivot - shift;
            let sum = 0;
            for (let column = 0; column <= last; column++) {
                let dot = 0;
                for (let inner = 0; inner <= column; inner++) {
                    dot += at(column * size + inner) * at(row * size + inner);
                }
                for (let inner = column + 1; inner <= last; inner++) {
                    dot += at(inner * size + column) * at(row * size + inner);
                }
                offDiagonal[column] = dot / total;
                sum += getOff(column) * at(row * size + column);
            }
            const correction = sum / (total + total);
            for (let column = 0; column <= last; column++) {
                const value = at(row * size + column);
                const adjusted = getOff(column) - correction * value;
                offDiagonal[column] = adjusted;
                for (let inner = 0; inner <= column; inner++) {
                    matrix[column * size + inner] =
                        at(column * size + inner) -
                        (value * getOff(inner) + adjusted * at(row * size + inner));
                }
            }
        }
    }
    for (let index = 0; index < size; index++) {
        diagonal[index] = at(index * size + index);
    }

    for (let index = 1; index < size; index++) {
        offDiagonal[index - 1] = getOff(index);
    }
    offDiagonal[size - 1] = 0;
    for (let start = 0; start < size; start++) {
        let iterations = 0;
        let end: number;
        do {
            for (end = start; end < size - 1; end++) {
                const nearby = Math.abs(getDiagonal(end)) + Math.abs(getDiagonal(end + 1));
                if (Math.abs(getOff(end)) <= Number.EPSILON * nearby) {
                    break;
                }
            }
            if (end !== start) {
                if (iterations++ === 60) {
                    throw new Error('Vibration eigenvalues did not converge.');
                }
                const ratio = (getDiagonal(start + 1) - getDiagonal(start)) / (2 * getOff(start));
                const radius = Math.hypot(ratio, 1);
                let shift =
                    getDiagonal(end) -
                    getDiagonal(start) +
                    getOff(start) / (ratio + (ratio >= 0 ? radius : -radius));
                let sine = 1;
                let cosine = 1;
                let accumulated = 0;
                let rotationRadius = 1;
                let index = end - 1;
                for (; index >= start; index--) {
                    const sinePart = sine * getOff(index);
                    const cosinePart = cosine * getOff(index);
                    rotationRadius = Math.hypot(sinePart, shift);
                    offDiagonal[index + 1] = rotationRadius;
                    if (rotationRadius === 0) {
                        diagonal[index + 1] = getDiagonal(index + 1) - accumulated;
                        offDiagonal[end] = 0;
                        break;
                    }
                    sine = sinePart / rotationRadius;
                    cosine = shift / rotationRadius;
                    const shifted = getDiagonal(index + 1) - accumulated;
                    const rotated = (getDiagonal(index) - shifted) * sine + 2 * cosine * cosinePart;
                    accumulated = sine * rotated;
                    diagonal[index + 1] = shifted + accumulated;
                    shift = cosine * rotated - cosinePart;
                }
                if (rotationRadius === 0 && index >= start) {
                    continue;
                }
                diagonal[start] = getDiagonal(start) - accumulated;
                offDiagonal[start] = shift;
                offDiagonal[end] = 0;
            }
        } while (end !== start);
    }
    return [...diagonal];
}

/**
 * Approximate vibration frequencies from a ball-and-spring model: bonds are springs that stiffen
 * with bond order and soften for heavier periodic rows, and atoms two bonds apart get a weak spring
 * standing in for angle stiffness. Frequencies land within tens of percent of measured values, and
 * straight-line molecules lose their bending vibrations. Frequencies within about 1.5% of each
 * other merge into one partial.
 */
export function getVibrationPartials(molecule: Readonly<Pick<Molecule, 'atoms' | 'bonds'>>) {
    const size = molecule.atoms.length * 3;
    const hessian = new Float64Array(size * size);

    function addSpring({
        atomIndexes: [
            first,
            second,
        ],
        stiffness,
    }: Readonly<{
        atomIndexes: Readonly<
            [
                number,
                number,
            ]
        >;
        stiffness: number;
    }>) {
        const firstPosition = molecule.atoms[first]?.position;
        const secondPosition = molecule.atoms[second]?.position;
        if (!firstPosition || !secondPosition) {
            return;
        }
        const delta = [
            secondPosition.x - firstPosition.x,
            secondPosition.y - firstPosition.y,
            secondPosition.z - firstPosition.z,
        ];
        const length = Math.hypot(...delta) || 1;
        const unit = delta.map((value) => value / length);
        unit.forEach((rowValue, row) => {
            unit.forEach((columnValue, column) => {
                const value = stiffness * rowValue * columnValue;
                [
                    [
                        first,
                        first,
                        value,
                    ],
                    [
                        second,
                        second,
                        value,
                    ],
                    [
                        first,
                        second,
                        -value,
                    ],
                    [
                        second,
                        first,
                        -value,
                    ],
                ].forEach(
                    ([
                        rowAtom = 0,
                        columnAtom = 0,
                        change = 0,
                    ]) => {
                        const index = (rowAtom * 3 + row) * size + columnAtom * 3 + column;
                        hessian[index] = (hessian[index] ?? 0) + change;
                    },
                );
            });
        });
    }

    molecule.bonds.forEach((bond) => {
        const rowTotal = bond.atomIndexes.reduce((total, atomIndex) => {
            const atom = molecule.atoms[atomIndex];
            /** Hydrogen counts as row 2 so that C–H lands near its measured stiffness. */
            return (
                total +
                Math.max(2, atom ? getPeriodicRow(chemicalElements[atom.element].atomicNumber) : 2)
            );
        }, 0);
        addSpring({
            atomIndexes: bond.atomIndexes,
            stiffness: 5 * bond.order * (4 / rowTotal),
        });
    });
    molecule.atoms.forEach((unusedAtom, centerIndex) => {
        const neighbors = molecule.bonds
            .filter((bond) => bond.atomIndexes.includes(centerIndex))
            .map((bond) => bond.atomIndexes.find((atomIndex) => atomIndex !== centerIndex) ?? 0);
        neighbors.forEach((first, index) => {
            neighbors.slice(index + 1).forEach((second) => {
                addSpring({
                    atomIndexes: [
                        first,
                        second,
                    ],
                    stiffness: 0.7,
                });
            });
        });
    });

    const masses = molecule.atoms.map((atom) => chemicalElements[atom.element].atomicMass);
    hessian.forEach((value, index) => {
        hessian[index] =
            value /
            Math.sqrt(
                (masses[Math.floor(Math.floor(index / size) / 3)] ?? 1) *
                    (masses[Math.floor((index % size) / 3)] ?? 1),
            );
    });

    return (
        getSymmetricEigenvalues(hessian, size)
            .filter((eigenvalue) => eigenvalue > 0)
            /** Wave number (cm⁻¹) is 1302.8 · √(k / μ) with k in mdyn/Å and μ in amu. */
            .map((eigenvalue) => 1302.8 * Math.sqrt(eigenvalue))
            /** Drops what is left of the molecule sliding and turning, which should be zero. */
            .filter((waveNumber) => waveNumber > 40)
            .sort((first, second) => first - second)
            .reduce<VibrationPartial[]>((partials, waveNumber) => {
                const last = partials.at(-1);
                return last && waveNumber / last.waveNumberPerCentimeter < 1.015
                    ? [
                          ...partials.slice(0, -1),
                          {
                              ...last,
                              degeneracy: last.degeneracy + 1,
                          },
                      ]
                    : [
                          ...partials,
                          {
                              waveNumberPerCentimeter: waveNumber,
                              degeneracy: 1,
                          },
                      ];
            }, [])
    );
}
