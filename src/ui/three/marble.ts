import {createArray} from '@augment-vir/common';
import {type Color, type MeshStandardMaterial, ShaderChunk, Vector3, Vector4} from 'three';
import {replaceOrThrow} from './shadowed-shine.js';

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
/** The shader loops over fixed-size uniform arrays, so shapes past these counts aren't reflected. */
const maxReflectedSpheres = 32;
const maxReflectedCylinders = 40;

/**
 * Makes a material look like colored glass that light passes through: a bright spot on the side
 * facing away from each light, where a glass ball focuses it like a lens, and a faint glow through
 * the middle. Both are the surface color, since the glass tints the light passing through it. Only
 * directional lights pass through.
 *
 * Keeps any `onBeforeCompile` the material already has, so it can be combined with other shader
 * tweaks.
 */
export function addMarbleGlow(material: MeshStandardMaterial) {
    const previousOnBeforeCompile = material.onBeforeCompile.bind(material);
    const previousCacheKey = material.customProgramCacheKey.bind(material);

    material.onBeforeCompile = (shader, renderer) => {
        previousOnBeforeCompile(shader, renderer);
        shader.fragmentShader = shader.fragmentShader.replace(
            '#include <lights_fragment_begin>',
            `#include <lights_fragment_begin>
            #if NUM_DIR_LIGHTS > 0
                for (int index = 0; index < NUM_DIR_LIGHTS; index++) {
                    float focusedSpot = pow(
                        saturate(dot(geometryNormal, -directionalLights[index].direction)),
                        ${focusedSpotTightness.toFixed(4)}
                    );
                    float innerGlow = saturate(dot(geometryNormal, geometryViewDir));
                    reflectedLight.directDiffuse +=
                        directionalLights[index].color *
                        diffuseColor.rgb *
                        RECIPROCAL_PI *
                        (focusedSpot * ${focusedSpotStrength.toFixed(4)} +
                            innerGlow * innerGlow * ${innerGlowStrength.toFixed(4)});
                }
            #endif`,
        );
    };
    /**
     * Three.js caches compiled shaders by `onBeforeCompile`'s source text, which another tweak
     * wrapping this one would hide.
     */
    material.customProgramCacheKey = () => {
        return `${previousCacheKey()}+marble-glow`;
    };
}

/**
 * For a material with `transmission`: its edges are solid instead of see-through, the way a glass
 * ball shows a clear outline. `transmissionRoughness` blurs what shows through by a different
 * amount than the material's `roughness`, which otherwise sets both that blur and how spread out
 * its shine is.
 *
 * Keeps any `onBeforeCompile` the material already has, so it can be combined with other shader
 * tweaks.
 */
export function addGlassShell({
    material,
    transmissionRoughness,
}: Readonly<{
    material: MeshStandardMaterial;
    transmissionRoughness?: number | undefined;
}>) {
    const previousOnBeforeCompile = material.onBeforeCompile.bind(material);
    const previousCacheKey = material.customProgramCacheKey.bind(material);

    material.onBeforeCompile = (shader, renderer) => {
        previousOnBeforeCompile(shader, renderer);
        shader.fragmentShader = shader.fragmentShader.replace(
            '#include <transmission_fragment>',
            replaceOrThrow({
                source: replaceOrThrow({
                    source: ShaderChunk.transmission_fragment,
                    search: 'vec4 transmitted =',
                    replacement: `material.transmission *=
                        1.0 - pow(1.0 - saturate(dot(normal, normalize(vViewPosition))), 3.0);
                    vec4 transmitted =`,
                }),
                search: 'n, v, material.roughness,',
                replacement: `n, v, ${
                    transmissionRoughness == undefined
                        ? 'material.roughness'
                        : transmissionRoughness.toFixed(4)
                },`,
            }),
        );
    };
    /**
     * Three.js caches compiled shaders by `onBeforeCompile`'s source text, which another tweak
     * wrapping this one would hide.
     */
    material.customProgramCacheKey = () => {
        return `${previousCacheKey()}+glass-shell-${transmissionRoughness ?? ''}`;
    };
}

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
    const usedSpheres = spheres.slice(0, maxReflectedSpheres);
    const usedCylinders = cylinders.slice(0, maxReflectedCylinders);
    const uniforms = {
        /** Each sphere's center, with its radius in `w`. */
        reflectedSpheres: {
            value: createArray(maxReflectedSpheres, (index) => {
                return new Vector4(0, 0, 0, usedSpheres[index]?.radius ?? 0);
            }),
        },
        reflectedSphereColors: {
            value: createArray(maxReflectedSpheres, (index) => {
                return usedSpheres[index]?.color.clone() ?? new Vector3();
            }),
        },
        reflectedSphereCount: {
            value: usedSpheres.length,
        },
        /** Each cylinder's start, with its radius in `w`. */
        reflectedCylinderStarts: {
            value: createArray(maxReflectedCylinders, (index) => {
                return new Vector4(0, 0, 0, usedCylinders[index]?.radius ?? 0);
            }),
        },
        reflectedCylinderEnds: {
            value: createArray(maxReflectedCylinders, () => new Vector3()),
        },
        reflectedCylinderColors: {
            value: createArray(maxReflectedCylinders, (index) => {
                return usedCylinders[index]?.color.clone() ?? new Vector3();
            }),
        },
        reflectedCylinderCount: {
            value: usedCylinders.length,
        },
    };

    return {
        uniforms,
        /** Must be called again whenever the shapes move. Takes them in the order they were given. */
        update({
            sphereCenters,
            cylinderEnds,
        }: Readonly<{
            sphereCenters: ReadonlyArray<Readonly<Vector3>>;
            cylinderEnds: ReadonlyArray<Readonly<{start: Vector3; end: Vector3}>>;
        }>) {
            sphereCenters.slice(0, maxReflectedSpheres).forEach((center, index) => {
                uniforms.reflectedSpheres.value[index]
                    ?.setX(center.x)
                    .setY(center.y)
                    .setZ(center.z);
            });
            cylinderEnds.slice(0, maxReflectedCylinders).forEach(({start, end}, index) => {
                uniforms.reflectedCylinderStarts.value[index]
                    ?.setX(start.x)
                    .setY(start.y)
                    .setZ(start.z);
                uniforms.reflectedCylinderEnds.value[index]?.copy(end);
            });
        },
    };
}

/**
 * Reflects the rest of the molecule in a glossy material, stronger toward its edges like real
 * glass. Reflected shapes are lit only by the first directional light.
 *
 * Keeps any `onBeforeCompile` the material already has, so it can be combined with other shader
 * tweaks.
 */
export function addSelfReflections({
    material,
    reflections,
    selfSphereIndex = -1,
    selfCylinderIndex = -1,
}: Readonly<{
    material: MeshStandardMaterial;
    reflections: Readonly<Pick<ReturnType<typeof createSelfReflections>, 'uniforms'>>;
}> &
    Readonly<
        Partial<{
            /** Which of the reflected shapes this material is on, so it doesn't reflect itself. */
            selfSphereIndex: number | undefined;
            selfCylinderIndex: number | undefined;
        }>
    >) {
    const previousOnBeforeCompile = material.onBeforeCompile.bind(material);
    const previousCacheKey = material.customProgramCacheKey.bind(material);

    material.onBeforeCompile = (shader, renderer) => {
        previousOnBeforeCompile(shader, renderer);
        Object.assign(shader.uniforms, reflections.uniforms, {
            selfSphereIndex: {
                value: selfSphereIndex,
            },
            selfCylinderIndex: {
                value: selfCylinderIndex,
            },
        });
        shader.vertexShader = shader.vertexShader
            .replace(
                '#include <common>',
                '#include <common>\nvarying vec3 vReflectionWorldPosition;',
            )
            .replace(
                '#include <project_vertex>',
                '#include <project_vertex>\nvReflectionWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;',
            );
        shader.fragmentShader = shader.fragmentShader
            .replace(
                '#include <common>',
                `#include <common>
                uniform vec4 reflectedSpheres[${maxReflectedSpheres}];
                uniform vec3 reflectedSphereColors[${maxReflectedSpheres}];
                uniform int reflectedSphereCount;
                uniform vec4 reflectedCylinderStarts[${maxReflectedCylinders}];
                uniform vec3 reflectedCylinderEnds[${maxReflectedCylinders}];
                uniform vec3 reflectedCylinderColors[${maxReflectedCylinders}];
                uniform int reflectedCylinderCount;
                uniform int selfSphereIndex;
                uniform int selfCylinderIndex;
                varying vec3 vReflectionWorldPosition;

                vec3 shadeReflectedSurface(vec3 color, vec3 surfaceNormal, vec3 rayDirection, vec3 lightDirection) {
                    float facing = saturate(dot(surfaceNormal, lightDirection));
                    float shine = pow(saturate(dot(reflect(-lightDirection, surfaceNormal), -rayDirection)), 40.0);
                    return color * (0.25 + 0.75 * facing) + vec3(shine * 0.6);
                }`,
            )
            .replace(
                '#include <opaque_fragment>',
                `#if NUM_DIR_LIGHTS > 0
                {
                    vec3 worldNormal = inverseTransformDirection(normal, viewMatrix);
                    vec3 lookDirection = normalize(vReflectionWorldPosition - cameraPosition);
                    vec3 rayDirection = reflect(lookDirection, worldNormal);
                    vec3 lightDirection = inverseTransformDirection(
                        directionalLights[0].direction,
                        viewMatrix
                    );
                    float nearestHit = -1.0;
                    float hitCoverage = 0.0;
                    vec3 hitColor = vec3(0.0);

                    for (int index = 0; index < ${maxReflectedSpheres}; index++) {
                        if (index >= reflectedSphereCount) {
                            break;
                        }
                        if (index == selfSphereIndex) {
                            continue;
                        }
                        float radius = reflectedSpheres[index].w;
                        vec3 offset = vReflectionWorldPosition - reflectedSpheres[index].xyz;
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
                                reflectedSphereColors[index],
                                normalize(offset + rayDirection * hitDistance),
                                rayDirection,
                                lightDirection
                            );
                        }
                    }

                    for (int index = 0; index < ${maxReflectedCylinders}; index++) {
                        if (index >= reflectedCylinderCount) {
                            break;
                        }
                        if (index == selfCylinderIndex) {
                            continue;
                        }
                        float radius = reflectedCylinderStarts[index].w;
                        vec3 start = reflectedCylinderStarts[index].xyz;
                        vec3 axis = reflectedCylinderEnds[index] - start;
                        vec3 offset = vReflectionWorldPosition - start;
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
                                reflectedCylinderColors[index],
                                (offset + rayDirection * hitDistance - axis * hitAlongAxis / axisLengthSquared) /
                                    radius,
                                rayDirection,
                                lightDirection
                            );
                        }
                    }

                    if (nearestHit > 0.0) {
                        float reflectance = mix(
                            ${headOnReflectance.toFixed(4)},
                            1.0,
                            pow(1.0 - saturate(dot(-lookDirection, worldNormal)), 5.0)
                        );
                        outgoingLight += hitColor * reflectance * hitCoverage * ${selfReflectionStrength.toFixed(4)};
                    }
                }
                #endif
                #include <opaque_fragment>`,
            );
    };
    /**
     * Three.js caches compiled shaders by `onBeforeCompile`'s source text, which another tweak
     * wrapping this one would hide.
     */
    material.customProgramCacheKey = () => {
        return `${previousCacheKey()}+self-reflections`;
    };
}
