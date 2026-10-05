// cspell:words highp
import {type Color, DataTexture, FloatType, RGBAFormat, type Vector3} from 'three';

/** Brightness of the spot on the far side from a light, where a glass ball focuses it. */
const focusedSpotStrength = 0.35;
/** How tight that spot is. Higher is smaller. */
const focusedSpotTightness = 6;
/** Brightness of the light seen passing through the middle of the ball. */
const innerGlowStrength = 0.1;
/**
 * How much a glossy surface reflects when looked at straight on. Glass is really about 0.04, which
 * makes reflections of the rest of the molecule too faint to notice anywhere but the edges.
 */
const headOnReflectance = 0.1;
/** Dims every reflection of the molecule in itself, so they hint rather than distract. */
const selfReflectionStrength = 0.4;
/**
 * Every glass pixel checks this many of its ball's nearest balls and every stick, so balls farther
 * away and sticks past the count aren't reflected.
 */
const maxReflectedSpheres = 32;
const maxReflectedCylinders = 40;
/**
 * Rows of the texture holding the reflected sticks, one stick per column. A texture instead of
 * uniform arrays, because three.js re-uploads uniform arrays for every mesh drawn, while a texture
 * uploads once per frame.
 */
enum CylinderRow {
    StartAndRadius,
    End,
    Color,
}
const cylinderRowCount = Object.keys(CylinderRow).length / 2;
/** Each ball takes two texels in the sphere texture: center and radius, then color. */
const spheresPerTableRow = 128;
const neighborTexelsPerSphere = maxReflectedSpheres / 4;

/**
 * GLSL for colored glass that light passes through: a bright spot on the side facing away from the
 * light, where a glass ball focuses it like a lens, and a faint glow through the middle. Both are
 * the surface color, since the glass tints the light passing through it.
 */
export const marbleGlowGlsl = `
    vec3 getMarbleGlow(
        vec3 geometryNormal,
        vec3 viewDirection,
        vec3 towardLight,
        vec3 lightColor,
        vec3 diffuseColor
    ) {
        float focusedSpot = pow(
            saturate(dot(geometryNormal, -towardLight)),
            ${focusedSpotTightness.toFixed(4)}
        );
        float innerGlow = saturate(dot(geometryNormal, viewDirection));
        return lightColor *
            diffuseColor *
            RECIPROCAL_PI *
            (focusedSpot * ${focusedSpotStrength.toFixed(4)} +
                innerGlow * innerGlow * ${innerGlowStrength.toFixed(4)});
    }

    /**
     * Scales how see-through glass is, so its edges are solid the way a glass ball shows a clear
     * outline.
     */
    float getGlassEdgeTransmission(vec3 normal, vec3 viewDirection) {
        return 1.0 - pow(1.0 - saturate(dot(normal, viewDirection)), 3.0);
    }
`;

/**
 * The shapes a molecule is made of, so each of its surfaces can reflect the others. Atoms are
 * spheres and bond sticks are open cylinders, since a stick's ends are buried inside its atoms.
 */
export function createSelfReflections({
    spheres,
    cylinders,
}: Readonly<{
    spheres: ReadonlyArray<Readonly<{color: Readonly<Color>; radius: number}>>;
    cylinders: ReadonlyArray<Readonly<{color: Readonly<Color>; radius: number}>>;
}>) {
    const usedCylinders = cylinders.slice(0, maxReflectedCylinders);
    const state = {
        isEnabled: true,
    };
    const sphereRowCount = Math.max(1, Math.ceil(spheres.length / spheresPerTableRow));
    const sphereData = new Float32Array(spheresPerTableRow * 2 * sphereRowCount * 4);
    const neighborData = new Float32Array(
        neighborTexelsPerSphere * Math.max(1, spheres.length) * 4,
    ).fill(-1);
    const cylinderData = new Float32Array(maxReflectedCylinders * cylinderRowCount * 4);

    function setSphereTexel({
        sphereIndex,
        texel,
        values,
    }: Readonly<{sphereIndex: number; texel: 0 | 1; values: ReadonlyArray<number>}>) {
        sphereData.set(values, (sphereIndex * 2 + texel) * 4);
    }

    function setCylinderTexel({
        row,
        column,
        values,
    }: Readonly<{row: CylinderRow; column: number; values: ReadonlyArray<number>}>) {
        cylinderData.set(values, (row * maxReflectedCylinders + column) * 4);
    }

    spheres.forEach(({color, radius}, sphereIndex) => {
        setSphereTexel({
            sphereIndex,
            texel: 0,
            values: [
                0,
                0,
                0,
                radius,
            ],
        });
        setSphereTexel({
            sphereIndex,
            texel: 1,
            values: color.toArray(),
        });
    });
    usedCylinders.forEach(({color, radius}, index) => {
        setCylinderTexel({
            row: CylinderRow.StartAndRadius,
            column: index,
            values: [
                0,
                0,
                0,
                radius,
            ],
        });
        setCylinderTexel({
            row: CylinderRow.Color,
            column: index,
            values: color.toArray(),
        });
    });

    const sphereTexture = new DataTexture(
        sphereData,
        spheresPerTableRow * 2,
        sphereRowCount,
        RGBAFormat,
        FloatType,
    );
    const neighborTexture = new DataTexture(
        neighborData,
        neighborTexelsPerSphere,
        Math.max(1, spheres.length),
        RGBAFormat,
        FloatType,
    );
    const cylinderTexture = new DataTexture(
        cylinderData,
        maxReflectedCylinders,
        cylinderRowCount,
        RGBAFormat,
        FloatType,
    );
    [
        sphereTexture,
        neighborTexture,
        cylinderTexture,
    ].forEach((texture) => {
        texture.needsUpdate = true;
    });

    /** Lists, for each ball, the balls whose surfaces are closest to its own. */
    function writeNeighbors(sphereCenters: ReadonlyArray<Readonly<Vector3>>) {
        sphereCenters.forEach((center, sphereIndex) => {
            const ownRadius = spheres[sphereIndex]?.radius ?? 0;
            const nearest = sphereCenters
                .map((otherCenter, otherIndex) => {
                    return {
                        otherIndex,
                        gap:
                            otherCenter.distanceTo(center) -
                            ownRadius -
                            (spheres[otherIndex]?.radius ?? 0),
                    };
                })
                .filter(({otherIndex}) => otherIndex !== sphereIndex)
                .sort((first, second) => first.gap - second.gap)
                .slice(0, maxReflectedSpheres);
            const offset = sphereIndex * maxReflectedSpheres;
            neighborData.fill(-1, offset, offset + maxReflectedSpheres);
            neighborData.set(
                nearest.map(({otherIndex}) => otherIndex),
                offset,
            );
        });
        neighborTexture.needsUpdate = true;
    }

    const uniforms = {
        reflectedSpheres: {
            value: sphereTexture,
        },
        reflectedSphereNeighbors: {
            value: neighborTexture,
        },
        reflectedCylinders: {
            value: cylinderTexture,
        },
        reflectedCylinderCount: {
            value: usedCylinders.length,
        },
    };

    return {
        uniforms,
        /**
         * Must be called again whenever the shapes move. Takes them in the order they were given.
         * Finding each ball's nearest balls is slow for big scenes, so balls that keep moving can
         * skip it with `keepNeighbors` and refresh them now and then instead.
         */
        update({
            sphereCenters,
            cylinderEnds,
            keepNeighbors,
        }: Readonly<{
            sphereCenters: ReadonlyArray<Readonly<Vector3>>;
            cylinderEnds: ReadonlyArray<Readonly<{start: Vector3; end: Vector3}>>;
            keepNeighbors?: boolean | undefined;
        }>) {
            sphereCenters.forEach((center, sphereIndex) => {
                sphereData.set(center.toArray(), sphereIndex * 2 * 4);
            });
            sphereTexture.needsUpdate = true;
            if (!keepNeighbors) {
                writeNeighbors(sphereCenters);
            }
            cylinderEnds.slice(0, maxReflectedCylinders).forEach(({start, end}, index) => {
                setCylinderTexel({
                    row: CylinderRow.StartAndRadius,
                    column: index,
                    values: start.toArray(),
                });
                setCylinderTexel({
                    row: CylinderRow.End,
                    column: index,
                    values: end.toArray(),
                });
            });
            cylinderTexture.needsUpdate = true;
        },
        /** Changes how one ball looks in the others' reflections. */
        setSphereStyle({
            sphereIndex,
            color,
            radius,
        }: Readonly<{sphereIndex: number; color: Readonly<Color>; radius: number}>) {
            sphereData[sphereIndex * 2 * 4 + 3] = radius;
            setSphereTexel({
                sphereIndex,
                texel: 1,
                values: color.toArray(),
            });
            sphereTexture.needsUpdate = true;
        },
        dispose() {
            sphereTexture.dispose();
            neighborTexture.dispose();
            cylinderTexture.dispose();
        },
        isEnabled() {
            return state.isEnabled;
        },
        /**
         * Turning reflections off compiles them out of the shader. The materials using them need
         * `needsUpdate` set afterward.
         */
        setEnabled(isEnabled: boolean) {
            state.isEnabled = isEnabled;
        },
    };
}

/**
 * GLSL that reflects the rest of the molecule in a glossy surface, stronger toward its edges like
 * real glass. Reflected shapes are lit only by the given light. Needs the uniforms from
 * {@link createSelfReflections}.
 */
export const selfReflectionsGlsl = `
    uniform highp sampler2D reflectedSpheres;
    uniform highp sampler2D reflectedSphereNeighbors;
    uniform highp sampler2D reflectedCylinders;
    uniform int reflectedCylinderCount;

    vec4 readReflectedSphere(int sphereIndex, int texel) {
        return texelFetch(
            reflectedSpheres,
            ivec2(
                (sphereIndex % ${spheresPerTableRow}) * 2 + texel,
                sphereIndex / ${spheresPerTableRow}
            ),
            0
        );
    }

    vec4 readReflectedCylinder(int row, int column) {
        return texelFetch(reflectedCylinders, ivec2(column, row), 0);
    }

    vec3 shadeReflectedSurface(vec3 color, vec3 surfaceNormal, vec3 rayDirection, vec3 towardLight) {
        float facing = saturate(dot(surfaceNormal, towardLight));
        float shine = pow(saturate(dot(reflect(-towardLight, surfaceNormal), -rayDirection)), 40.0);
        return color * (0.25 + 0.75 * facing) + vec3(shine * 0.6);
    }

    /** \`selfSphereIndex\` is which reflected sphere this surface is on. */
    vec3 getSelfReflection(
        vec3 position,
        vec3 normal,
        vec3 lookDirection,
        vec3 towardLight,
        int selfSphereIndex
    ) {
        vec3 rayDirection = reflect(lookDirection, normal);
        float nearestHit = -1.0;
        float hitCoverage = 0.0;
        vec3 hitColor = vec3(0.0);

        for (int index = 0; index < ${maxReflectedSpheres}; index++) {
            int sphereIndex = int(
                texelFetch(reflectedSphereNeighbors, ivec2(index / 4, selfSphereIndex), 0)[index % 4]
            );
            if (sphereIndex < 0) {
                break;
            }
            vec4 sphere = readReflectedSphere(sphereIndex, 0);
            float radius = sphere.w;
            vec3 offset = position - sphere.xyz;
            float along = dot(offset, rayDirection);
            float discriminant = along * along - (dot(offset, offset) - radius * radius);
            if (discriminant <= 0.0) {
                continue;
            }
            float hitDistance = -along - sqrt(discriminant);
            if (hitDistance > 0.0 && (nearestHit < 0.0 || hitDistance < nearestHit)) {
                nearestHit = hitDistance;
                /** Fades the outline so the reflected ball doesn't have a jagged edge. */
                hitCoverage = smoothstep(0.0, 0.1, discriminant / (radius * radius));
                hitColor = shadeReflectedSurface(
                    readReflectedSphere(sphereIndex, 1).rgb,
                    normalize(offset + rayDirection * hitDistance),
                    rayDirection,
                    towardLight
                );
            }
        }

        for (int index = 0; index < ${maxReflectedCylinders}; index++) {
            if (index >= reflectedCylinderCount) {
                break;
            }
            vec4 cylinderStart = readReflectedCylinder(${CylinderRow.StartAndRadius}, index);
            float radius = cylinderStart.w;
            vec3 start = cylinderStart.xyz;
            vec3 axis = readReflectedCylinder(${CylinderRow.End}, index).xyz - start;
            vec3 offset = position - start;
            float axisLengthSquared = dot(axis, axis);
            float axisAlongRay = dot(axis, rayDirection);
            float axisAlongOffset = dot(axis, offset);
            float quadraticA = axisLengthSquared - axisAlongRay * axisAlongRay;
            float quadraticB =
                axisLengthSquared * dot(rayDirection, offset) - axisAlongOffset * axisAlongRay;
            float quadraticC =
                axisLengthSquared * dot(offset, offset) -
                axisAlongOffset * axisAlongOffset -
                radius * radius * axisLengthSquared;
            float discriminant = quadraticB * quadraticB - quadraticA * quadraticC;
            if (discriminant <= 0.0 || quadraticA < 1e-6) {
                continue;
            }
            float hitDistance = (-quadraticB - sqrt(discriminant)) / quadraticA;
            float hitAlongAxis = axisAlongOffset + hitDistance * axisAlongRay;
            if (
                hitDistance > 0.0 &&
                hitAlongAxis > 0.0 &&
                hitAlongAxis < axisLengthSquared &&
                (nearestHit < 0.0 || hitDistance < nearestHit)
            ) {
                nearestHit = hitDistance;
                hitCoverage = 1.0;
                hitColor = shadeReflectedSurface(
                    readReflectedCylinder(${CylinderRow.Color}, index).rgb,
                    (offset + rayDirection * hitDistance - axis * hitAlongAxis / axisLengthSquared) /
                        radius,
                    rayDirection,
                    towardLight
                );
            }
        }

        if (nearestHit <= 0.0) {
            return vec3(0.0);
        }
        float reflectance = mix(
            ${headOnReflectance.toFixed(4)},
            1.0,
            pow(1.0 - saturate(dot(-lookDirection, normal)), 5.0)
        );
        return hitColor * reflectance * hitCoverage * ${selfReflectionStrength.toFixed(4)};
    }
`;
