import {createArray} from '@augment-vir/common';
import {Quaternion, Vector3} from 'three';

const yawCandidateCount = 72;
/**
 * Points spread over a unit disk, checked across each atom's on-screen circle to estimate how much
 * of it shows.
 */
const diskSamples = [
    {
        x: 0,
        y: 0,
    },
    ...[
        0.5,
        0.85,
    ].flatMap((ringRadius) => {
        return createArray(8, (index) => {
            const angle = (index / 8) * Math.PI * 2;
            return {
                x: Math.cos(angle) * ringRadius,
                y: Math.sin(angle) * ringRadius,
            };
        });
    }),
];

/**
 * Finds the spin around the vertical axis at which the molecule's atoms hide each other the least,
 * as seen from far away along `towardCamera`. Each yaw is scored by the sum of every atom's visible
 * fraction, so one fully hidden atom costs as much as two half-hidden ones. Ties go to the yaw
 * closest to `0`.
 *
 * The turn being searched is `pitch * yaw * baseOrientation`, matching the scene's turntable.
 */
export function findClearestYaw({
    atoms,
    baseOrientation,
    pitchRadians,
    towardCamera,
}: Readonly<{
    /** Positions relative to the turntable's center. */
    atoms: ReadonlyArray<
        Readonly<{
            position: Readonly<Vector3>;
            radius: number;
        }>
    >;
    baseOrientation: Readonly<Quaternion>;
    pitchRadians: number;
    towardCamera: Readonly<Vector3>;
}>) {
    const toward = towardCamera.clone().normalize();
    const screenRight = new Vector3(0, 1, 0).cross(toward).normalize();
    const screenUp = toward.clone().cross(screenRight);
    const pitch = new Quaternion().setFromAxisAngle(new Vector3(1, 0, 0), pitchRadians);

    const candidates = createArray(yawCandidateCount, (index) => {
        /** Alternates sides, `0, +1, -1, +2, -2, ...` steps, so ties land nearest `0`. */
        const step = Math.ceil(index / 2) * (index % 2 ? 1 : -1);
        const yawRadians = (step / yawCandidateCount) * Math.PI * 2;
        const turn = new Quaternion()
            .copy(baseOrientation)
            .premultiply(new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), yawRadians))
            .premultiply(pitch);
        /** Nearest to the camera first, so each atom only checks the ones before it. */
        const projected = atoms
            .map((atom) => {
                const turned = atom.position.clone().applyQuaternion(turn);
                return {
                    x: turned.dot(screenRight),
                    y: turned.dot(screenUp),
                    depth: turned.dot(toward),
                    radius: atom.radius,
                };
            })
            .toSorted((first, second) => second.depth - first.depth);

        const score = projected.reduce((total, atom, atomIndex) => {
            const nearer = projected.slice(0, atomIndex);
            const visibleCount = diskSamples.filter((sample) => {
                const x = atom.x + sample.x * atom.radius;
                const y = atom.y + sample.y * atom.radius;
                return !nearer.some((other) => {
                    return (x - other.x) ** 2 + (y - other.y) ** 2 < other.radius ** 2;
                });
            }).length;
            return total + visibleCount / diskSamples.length;
        }, 0);

        return {
            yawRadians,
            score,
        };
    });

    return candidates.reduce((best, candidate) => {
        return candidate.score > best.score ? candidate : best;
    }).yawRadians;
}
