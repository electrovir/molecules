// cspell:words highp
import {type Vector3} from 'three';
import {createCapsuleRows} from './capsule-rows.js';

/** Each part checks at most this many other parts for shadows, so extras are dropped. */
export const maxShadowCasters = 24;
/** The ground checks every part, up to this many. */
export const maxGroundShadowCasters = 512;
/**
 * Half the width of a shadow's soft edge, in ångströms, right where the blocker is. The edge then
 * widens with distance from it at `penumbraSpread` ångströms per ångström.
 */
export const penumbraBase = 0.06;
export const penumbraSpread = 0.03;
/** Floats per packed capsule: start x, y, z, end x, y, z. */
const capsuleStride = 6;

/**
 * GLSL for soft shadows from a {@link createShadowCasters} texture, traced toward a directional
 * light instead of read from a shadow map. Needs `capsuleRowsGlsl` first, and a
 * `SHADOW_CASTER_LIMIT` define with the loop's upper bound.
 */
export const shadowCastersGlsl = `
    /** How much of the light one caster lets through to \`origin\`. */
    float getCasterVisibility(vec4 start, vec4 end, vec3 origin, vec3 towardLight) {
        vec3 segment = end.xyz - start.xyz;
        float segmentLengthSquared = dot(segment, segment);
        vec3 fromStart = origin - start.xyz;
        float segmentAlongRay = dot(segment, towardLight);
        float denominator = segmentLengthSquared - segmentAlongRay * segmentAlongRay;
        float along = denominator > 1e-6
            ? clamp(
                (dot(segment, fromStart) - segmentAlongRay * dot(towardLight, fromStart)) /
                    denominator,
                0.0,
                1.0
            )
            : 0.0;
        float rayDistance = dot(start.xyz + segment * along - origin, towardLight);
        if (rayDistance <= 0.0) {
            return 1.0;
        }
        vec3 rayPoint = origin + towardLight * rayDistance;
        along = segmentLengthSquared > 1e-6
            ? clamp(dot(rayPoint - start.xyz, segment) / segmentLengthSquared, 0.0, 1.0)
            : 0.0;
        float gap = distance(rayPoint, start.xyz + segment * along);
        float penumbra = ${penumbraBase.toFixed(4)} + ${penumbraSpread.toFixed(4)} * rayDistance;
        return smoothstep(start.w - penumbra, start.w + penumbra, gap);
    }

    float getShadowVisibility(highp sampler2D casters, int row, vec3 origin, vec3 towardLight) {
        int count = getCapsuleCount(casters, row);
        float visibility = 1.0;
        for (int index = 0; index < SHADOW_CASTER_LIMIT; index++) {
            if (index >= count) {
                break;
            }
            vec4 start;
            vec4 end;
            getCapsule(casters, row, index, start, end);
            visibility *= getCasterVisibility(start, end, origin, towardLight);
        }
        return visibility;
    }
`;

/**
 * Squared distance between segments `first` and `second` of a packed capsule array. From Ericson's
 * "Real-Time Collision Detection", section 5.1.9.
 */
function getSegmentDistanceSquared({
    points,
    first,
    second,
}: Readonly<{
    points: Readonly<Float64Array>;
    first: number;
    second: number;
}>) {
    const firstOffset = first * capsuleStride;
    const secondOffset = second * capsuleStride;
    const firstStart = [
        points[firstOffset] ?? 0,
        points[firstOffset + 1] ?? 0,
        points[firstOffset + 2] ?? 0,
    ] as const;
    const secondStart = [
        points[secondOffset] ?? 0,
        points[secondOffset + 1] ?? 0,
        points[secondOffset + 2] ?? 0,
    ] as const;
    const firstSegment = [
        (points[firstOffset + 3] ?? 0) - firstStart[0],
        (points[firstOffset + 4] ?? 0) - firstStart[1],
        (points[firstOffset + 5] ?? 0) - firstStart[2],
    ] as const;
    const secondSegment = [
        (points[secondOffset + 3] ?? 0) - secondStart[0],
        (points[secondOffset + 4] ?? 0) - secondStart[1],
        (points[secondOffset + 5] ?? 0) - secondStart[2],
    ] as const;
    const between = [
        firstStart[0] - secondStart[0],
        firstStart[1] - secondStart[1],
        firstStart[2] - secondStart[2],
    ] as const;

    function dot({
        left,
        right,
    }: Readonly<{
        left: Readonly<
            [
                number,
                number,
                number,
            ]
        >;
        right: Readonly<
            [
                number,
                number,
                number,
            ]
        >;
    }>) {
        return left[0] * right[0] + left[1] * right[1] + left[2] * right[2];
    }

    function clamp(value: number) {
        return Math.min(1, Math.max(0, value));
    }

    const firstLengthSquared = dot({
        left: firstSegment,
        right: firstSegment,
    });
    const secondLengthSquared = dot({
        left: secondSegment,
        right: secondSegment,
    });
    const secondAlongBetween = dot({
        left: secondSegment,
        right: between,
    });
    const firstAlongBetween = dot({
        left: firstSegment,
        right: between,
    });
    const segmentsDot = dot({
        left: firstSegment,
        right: secondSegment,
    });
    const denominator = firstLengthSquared * secondLengthSquared - segmentsDot * segmentsDot;

    const firstGuess =
        firstLengthSquared < 1e-9
            ? 0
            : secondLengthSquared < 1e-9
              ? clamp(-firstAlongBetween / firstLengthSquared)
              : denominator > 1e-9
                ? clamp(
                      (segmentsDot * secondAlongBetween - firstAlongBetween * secondLengthSquared) /
                          denominator,
                  )
                : 0;
    const secondUnclamped =
        secondLengthSquared < 1e-9
            ? 0
            : (segmentsDot * firstGuess + secondAlongBetween) / secondLengthSquared;
    const secondAlong = clamp(secondUnclamped);
    const firstAlong =
        firstLengthSquared < 1e-9 || secondUnclamped === secondAlong
            ? firstGuess
            : clamp((segmentsDot * secondAlong - firstAlongBetween) / firstLengthSquared);

    const gap = [
        between[0] + firstSegment[0] * firstAlong - secondSegment[0] * secondAlong,
        between[1] + firstSegment[1] * firstAlong - secondSegment[1] * secondAlong,
        between[2] + firstSegment[2] * firstAlong - secondSegment[2] * secondAlong,
    ] as const;
    return dot({
        left: gap,
        right: gap,
    });
}

/**
 * Finds, for each part of the molecule, which other parts can shade it from the light, so its
 * shader only checks those. Also keeps every part in one list for the ground.
 *
 * Parts are capsules, and each part is both a receiver and a caster. They can have different radii
 * for each role, since an atom's see-through shell catches shadows while only its core blocks
 * light.
 */
export function createShadowCasters({partCount}: Readonly<{partCount: number}>) {
    const rows = createCapsuleRows({
        rowCount: partCount,
        maxCapsulesPerRow: maxShadowCasters,
    });
    const allCasters = createCapsuleRows({
        rowCount: 1,
        maxCapsulesPerRow: maxGroundShadowCasters,
    });
    /** Each part's ends flattened onto the plane facing the light. */
    const flattened = new Float64Array(partCount * capsuleStride);
    /** How far each part's nearest and farthest ends reach toward the light. */
    const reachTowardLight = new Float64Array(partCount * 2);
    const capsuleValues = new Float32Array(8);

    function writeCasterValues({
        ends,
        casterRadii,
        isAtom,
        part,
    }: Readonly<{
        ends: Readonly<Float32Array>;
        casterRadii: Readonly<Float32Array>;
        isAtom: (part: number) => boolean;
        part: number;
    }>) {
        const offset = part * capsuleStride;
        capsuleValues.set(ends.subarray(offset, offset + 3), 0);
        capsuleValues[3] = casterRadii[part] ?? 0;
        capsuleValues.set(ends.subarray(offset + 3, offset + 6), 4);
        capsuleValues[7] = isAtom(part) ? 1 : 0;
        return capsuleValues;
    }

    return {
        rowsTexture: rows.texture,
        allCastersTexture: allCasters.texture,
        /**
         * Every argument is in the molecule's own space. `ends` holds each part's start then end,
         * and an atom's start and end are both its center.
         */
        update({
            ends,
            receiverRadii,
            casterRadii,
            isAtom,
            towardLight,
        }: Readonly<{
            ends: Readonly<Float32Array>;
            receiverRadii: Readonly<Float32Array>;
            casterRadii: Readonly<Float32Array>;
            isAtom: (part: number) => boolean;
            towardLight: Readonly<Vector3>;
        }>) {
            /**
             * Runs every frame over every pair of parts, so these loops write into preallocated
             * typed arrays instead of building objects.
             */
            for (let part = 0; part < partCount; part++) {
                const offset = part * capsuleStride;
                const startAlong =
                    (ends[offset] ?? 0) * towardLight.x +
                    (ends[offset + 1] ?? 0) * towardLight.y +
                    (ends[offset + 2] ?? 0) * towardLight.z;
                const endAlong =
                    (ends[offset + 3] ?? 0) * towardLight.x +
                    (ends[offset + 4] ?? 0) * towardLight.y +
                    (ends[offset + 5] ?? 0) * towardLight.z;
                flattened[offset] = (ends[offset] ?? 0) - towardLight.x * startAlong;
                flattened[offset + 1] = (ends[offset + 1] ?? 0) - towardLight.y * startAlong;
                flattened[offset + 2] = (ends[offset + 2] ?? 0) - towardLight.z * startAlong;
                flattened[offset + 3] = (ends[offset + 3] ?? 0) - towardLight.x * endAlong;
                flattened[offset + 4] = (ends[offset + 4] ?? 0) - towardLight.y * endAlong;
                flattened[offset + 5] = (ends[offset + 5] ?? 0) - towardLight.z * endAlong;
                reachTowardLight[part * 2] = Math.min(startAlong, endAlong);
                reachTowardLight[part * 2 + 1] = Math.max(startAlong, endAlong);
                if (part < maxGroundShadowCasters) {
                    allCasters.writeCapsule({
                        row: 0,
                        index: part,
                        values: writeCasterValues({
                            ends,
                            casterRadii,
                            isAtom,
                            part,
                        }),
                    });
                }
            }
            allCasters.setCount({
                row: 0,
                count: Math.min(partCount, maxGroundShadowCasters),
            });

            for (let receiver = 0; receiver < partCount; receiver++) {
                const receiverRadius = receiverRadii[receiver] ?? 0;
                const receiverNearest = (reachTowardLight[receiver * 2] ?? 0) - receiverRadius;
                let count = 0;
                for (let caster = 0; caster < partCount && count < maxShadowCasters; caster++) {
                    const casterRadius = casterRadii[caster] ?? 0;
                    const gapTowardLight =
                        (reachTowardLight[caster * 2 + 1] ?? 0) + casterRadius - receiverNearest;
                    if (caster === receiver || gapTowardLight <= 0) {
                        continue;
                    }
                    const reach =
                        receiverRadius +
                        casterRadius +
                        penumbraBase +
                        penumbraSpread * gapTowardLight;
                    if (
                        getSegmentDistanceSquared({
                            points: flattened,
                            first: receiver,
                            second: caster,
                        }) <
                        reach * reach
                    ) {
                        rows.writeCapsule({
                            row: receiver,
                            index: count,
                            values: writeCasterValues({
                                ends,
                                casterRadii,
                                isAtom,
                                part: caster,
                            }),
                        });
                        count++;
                    }
                }
                rows.setCount({
                    row: receiver,
                    count,
                });
            }
            rows.upload();
            allCasters.upload();
        },
        /** Leaves every part, and the ground, with nothing shading it. */
        clear() {
            for (let part = 0; part < partCount; part++) {
                rows.setCount({
                    row: part,
                    count: 0,
                });
            }
            allCasters.setCount({
                row: 0,
                count: 0,
            });
            rows.upload();
            allCasters.upload();
        },
        dispose() {
            rows.dispose();
            allCasters.dispose();
        },
    };
}

export type ShadowCasters = ReturnType<typeof createShadowCasters>;
