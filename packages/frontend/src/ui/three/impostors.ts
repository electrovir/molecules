// cspell:words highp brdf multisampling schlick
import {
    BoxGeometry,
    type Color,
    CustomBlending,
    DynamicDrawUsage,
    InstancedBufferAttribute,
    InstancedBufferGeometry,
    type Matrix4,
    Mesh,
    OneFactor,
    OneMinusSrcAlphaFactor,
    ShaderMaterial,
    type Texture,
    type Vector3,
} from 'three';
import {capsuleRowsGlsl} from './capsule-rows.js';
import {contactReach, contactShadingGlsl} from './contact-shading.js';
import {type createSelfReflections, marbleGlowGlsl, selfReflectionsGlsl} from './marble.js';
import {maxShadowCasters, shadowCastersGlsl} from './shadow-casters.js';
import {surfaceNoiseGlsl, surfaceNoiseTexture} from './surface-noise.js';

/** The key light's strength, matching a three.js `DirectionalLight` intensity. */
const lightIntensity = 2;
const ambientIntensity = 0.6;
/** How much of the light a shadow blocks, so atoms stay readable where they shade each other. */
const shadowIntensity = 0.5;
/**
 * The roughness pattern only shows inside the small shiny spot, so the same pattern also nudges the
 * shading everywhere else. It's what makes a turning atom visibly turn.
 */
const surfaceBumpScale = 0.05;
/** Pushes shadow rays off the surface so a part never shades itself. */
const shadowRayOffset = 0.01;
/** A stick's noise is sampled in ångströms divided by this, so its grain matches an atom's. */
const typicalAtomRadius = 0.45;

/** Uniforms every impostor shares, updated once per frame. All are in the molecule's own space. */
export type ImpostorSceneUniforms = {
    localCameraPosition: {value: Vector3};
    localTowardLight: {value: Vector3};
    /** From the molecule's own space to clip space, for writing each pixel's depth. */
    localToClip: {value: Matrix4};
};

/**
 * Every atom and stick is drawn as a box around it, and each pixel of the box traces its own ray to
 * find the exact surface. So the whole molecule is a few draw calls of a few triangles each, and
 * outlines stay smooth at any zoom.
 */
const impostorGlsl = `
    #include <common>
    uniform vec3 localCameraPosition;
    uniform vec3 localTowardLight;
    uniform highp mat4 localToClip;

    float getFragmentDepth(vec3 position) {
        vec4 clipPosition = localToClip * vec4(position, 1.0);
        return clipPosition.z / clipPosition.w * 0.5 + 0.5;
    }

    /**
     * How much of a pixel a traced surface covers, from how far outside the surface's outline the
     * pixel's ray passes. Fed to alpha-to-coverage, since multisampling only smooths the box.
     */
    float getEdgeCoverage(float outsideDistance) {
        return saturate(0.5 - outsideDistance / max(fwidth(outsideDistance), 1e-6));
    }

    /** Same as three.js's, including its roughness floor and its widening where the normal turns fast. */
    float getRoughness(float roughness, vec3 geometryNormal) {
        vec3 normalChange = max(abs(dFdx(geometryNormal)), abs(dFdy(geometryNormal)));
        return min(
            max(roughness, 0.0525) + max(max(normalChange.x, normalChange.y), normalChange.z),
            1.0
        );
    }

    /** Three.js's \`BRDF_GGX\` for a non-metal. */
    vec3 getSpecularBrdf(vec3 towardLight, vec3 viewDirection, vec3 normal, float roughness) {
        float alphaSquared = pow2(roughness * roughness);
        vec3 halfDirection = normalize(towardLight + viewDirection);
        float dotNL = saturate(dot(normal, towardLight));
        float dotNV = saturate(dot(normal, viewDirection));
        float dotNH = saturate(dot(normal, halfDirection));
        float dotVH = saturate(dot(viewDirection, halfDirection));
        vec3 fresnel = F_Schlick(vec3(0.04), 1.0, dotVH);
        float visibility = 0.5 / max(
            dotNL * sqrt(alphaSquared + (1.0 - alphaSquared) * pow2(dotNV)) +
                dotNV * sqrt(alphaSquared + (1.0 - alphaSquared) * pow2(dotNL)),
            EPSILON
        );
        float distribution = RECIPROCAL_PI * alphaSquared / pow2(pow2(dotNH) * (alphaSquared - 1.0) + 1.0);
        return fresnel * visibility * distribution;
    }

    struct SurfaceLight {
        vec3 diffuse;
        vec3 specular;
    };

    /**
     * A non-metal lit by the key light and ambient light. A shadow only blocks part of the key light's
     * diffuse light, which reads as light bouncing in from around the blocker, but all of its shine,
     * since a sharp reflection of the light can't come from anywhere but the light.
     */
    SurfaceLight shadeSurface(
        vec3 diffuseColor,
        vec3 normal,
        vec3 viewDirection,
        float roughness,
        float shadowVisibility
    ) {
        float irradiance = saturate(dot(normal, localTowardLight)) * ${lightIntensity.toFixed(4)};
        vec3 fresnel = F_Schlick(
            vec3(0.04),
            1.0,
            saturate(dot(viewDirection, normalize(localTowardLight + viewDirection)))
        );
        SurfaceLight light;
        light.diffuse =
            diffuseColor *
            RECIPROCAL_PI *
            (irradiance * mix(1.0, shadowVisibility, ${shadowIntensity.toFixed(4)}) * (1.0 - fresnel) +
                ${ambientIntensity.toFixed(4)});
        light.specular =
            irradiance *
            shadowVisibility *
            getSpecularBrdf(localTowardLight, viewDirection, normal, roughness);
        return light;
    }

    ${capsuleRowsGlsl}
    ${contactShadingGlsl}
    ${shadowCastersGlsl}
    ${surfaceNoiseGlsl}
    ${marbleGlowGlsl}
`;

/**
 * Premultiplied blending, so the coverage at a traced outline both feeds alpha-to-coverage and
 * fades against whatever is behind, including the CSS background behind the transparent canvas.
 */
function applyCoverageBlending(material: ShaderMaterial) {
    material.blending = CustomBlending;
    material.blendSrc = OneFactor;
    material.blendDst = OneMinusSrcAlphaFactor;
    material.blendSrcAlpha = OneFactor;
    material.blendDstAlpha = OneMinusSrcAlphaFactor;
    return material;
}

function createInstancedBox({
    width,
    height,
    instanceCount,
}: Readonly<{width: number; height: number; instanceCount: number}>) {
    const box = new BoxGeometry(width, height, width);
    const geometry = new InstancedBufferGeometry();
    geometry.index = box.index;
    geometry.setAttribute('position', box.getAttribute('position'));
    geometry.instanceCount = instanceCount;
    return geometry;
}

function createInstanceAttribute({
    geometry,
    name,
    itemSize,
    isDynamic,
}: Readonly<{
    geometry: InstancedBufferGeometry;
    name: string;
    itemSize: number;
    isDynamic?: boolean | undefined;
}>) {
    const attribute = new InstancedBufferAttribute(
        new Float32Array(geometry.instanceCount * itemSize),
        itemSize,
    );
    if (isDynamic) {
        attribute.setUsage(DynamicDrawUsage);
    }
    geometry.setAttribute(name, attribute);
    return attribute;
}

/** Collapses an instance off screen when it isn't selected, so outline meshes skip it. */
const outlineVertexSkip = `
    #ifdef OUTLINE
        if (glow <= 0.0) {
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
            return;
        }
    #endif
`;

const atomVertexShader = `
    attribute vec3 center;
    attribute float radius;
    attribute vec3 color;
    attribute float glow;
    uniform float radiusScale;
    varying vec3 vProxyPosition;
    flat varying vec3 vCenter;
    flat varying float vRadius;
    flat varying vec3 vColor;
    flat varying float vGlow;
    flat varying int vAtomIndex;

    void main() {
        ${outlineVertexSkip}
        vCenter = center;
        vRadius = radius * radiusScale;
        vColor = color;
        vGlow = glow;
        vAtomIndex = gl_InstanceID;
        vProxyPosition = center + position * vRadius;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(vProxyPosition, 1.0);
    }
`;

const atomFragmentShader = `
    ${impostorGlsl}
    #ifdef USE_SELF_REFLECTIONS
        ${selfReflectionsGlsl}
    #endif
    uniform highp sampler2D contactOccluders;
    uniform highp sampler2D shadowCasters;
    uniform float shellTransmission;
    uniform vec3 highlightColor;
    varying vec3 vProxyPosition;
    flat varying vec3 vCenter;
    flat varying float vRadius;
    flat varying vec3 vColor;
    flat varying float vGlow;
    flat varying int vAtomIndex;

    void main() {
        vec3 rayDirection = normalize(vProxyPosition - localCameraPosition);
        vec3 offset = localCameraPosition - vCenter;
        float along = dot(offset, rayDirection);
        float closestSquared = max(dot(offset, offset) - along * along, 0.0);
        float closestDistance = sqrt(closestSquared);
        float coverage = getEdgeCoverage(closestDistance - vRadius);
        if (coverage <= 0.0) {
            discard;
        }
        /** Just outside the outline, this lands on the point the ray passes closest to. */
        float halfChord = sqrt(max(vRadius * vRadius - closestSquared, 0.0));

        #ifdef OUTLINE
            /** The far side, so the outline only shows around the atom and behind its neighbors. */
            vec3 position = localCameraPosition + rayDirection * (-along + halfChord);
            gl_FragDepth = getFragmentDepth(position);
            gl_FragColor = vec4(highlightColor, 1.0);
        #else
            vec3 position = localCameraPosition + rayDirection * (-along - halfChord);
            gl_FragDepth = getFragmentDepth(position);
            vec3 viewDirection = -rayDirection;
            vec3 geometryNormal = normalize(position - vCenter);
            float shadowVisibility = getShadowVisibility(
                shadowCasters,
                vAtomIndex,
                position + geometryNormal * ${shadowRayOffset.toFixed(4)},
                localTowardLight
            );

            /**
             * The colored core seen through the glass shell, traced from the same ray instead of
             * rendered into a separate pass first.
             */
            float coreRadius = vRadius * CORE_FRACTION;
            float coreCoverage = getEdgeCoverage(closestDistance - coreRadius);
            vec3 corePosition =
                localCameraPosition +
                rayDirection * (-along - sqrt(max(coreRadius * coreRadius - closestSquared, 0.0)));
            vec3 coreGeometryNormal = normalize(corePosition - vCenter);
            float coreSurface = getSurfaceValue(coreGeometryNormal);
            vec3 coreColor =
                vColor *
                getContactBrightness(
                    contactOccluders,
                    vAtomIndex,
                    corePosition,
                    ${contactReach.toFixed(4)},
                    ATOM_CONTACT_DARKNESS,
                    CORE_FRACTION
                );
            float shellSurface = getSurfaceValue(geometryNormal);
            SurfaceLight core = shadeSurface(
                coreColor,
                perturbNormalByHeight(
                    corePosition,
                    coreGeometryNormal,
                    coreSurface * ${surfaceBumpScale.toFixed(4)}
                ),
                viewDirection,
                getRoughness(
                    /** The frosted shell blurs the core's shine. */
                    length(vec2(CORE_ROUGHNESS * coreSurface, SHELL_ROUGHNESS * shellSurface)),
                    coreGeometryNormal
                ),
                shadowVisibility
            );
            vec3 coreLight =
                core.diffuse +
                core.specular +
                getMarbleGlow(
                    coreGeometryNormal,
                    viewDirection,
                    localTowardLight,
                    vec3(${lightIntensity.toFixed(4)}),
                    coreColor
                );

            vec3 shellNormal = perturbNormalByHeight(
                position,
                geometryNormal,
                shellSurface * ${surfaceBumpScale.toFixed(4)}
            );
            SurfaceLight shell = shadeSurface(
                vColor,
                shellNormal,
                viewDirection,
                getRoughness(SHELL_ROUGHNESS * shellSurface, geometryNormal),
                shadowVisibility
            );
            /** Light through glass is tinted by it, as three.js's transmission does. */
            vec3 transmitted =
                (1.0 - F_Schlick(vec3(0.04), 1.0, saturate(dot(shellNormal, viewDirection)))) *
                coreLight *
                vColor;
            vec3 outgoingLight =
                mix(
                    shell.diffuse,
                    transmitted,
                    shellTransmission *
                        getGlassEdgeTransmission(shellNormal, viewDirection) *
                        coreCoverage
                ) *
                    getContactBrightness(
                        contactOccluders,
                        vAtomIndex,
                        position,
                        ${contactReach.toFixed(4)},
                        ATOM_CONTACT_DARKNESS,
                        1.0
                    ) +
                shell.specular;

            /** A smooth clear coat over the frosted glass, so the shell stays shiny. */
            vec3 clearcoatFresnel = F_Schlick(
                vec3(0.04),
                1.0,
                saturate(dot(geometryNormal, viewDirection))
            );
            outgoingLight =
                outgoingLight * (1.0 - clearcoatFresnel) +
                saturate(dot(geometryNormal, localTowardLight)) *
                    ${lightIntensity.toFixed(4)} *
                    shadowVisibility *
                    getSpecularBrdf(
                        localTowardLight,
                        viewDirection,
                        geometryNormal,
                        getRoughness(CLEARCOAT_ROUGHNESS, geometryNormal)
                    );
            #ifdef USE_SELF_REFLECTIONS
                outgoingLight += getSelfReflection(
                    position,
                    shellNormal,
                    rayDirection,
                    localTowardLight,
                    vAtomIndex
                );
            #endif
            gl_FragColor = vec4(outgoingLight + vColor * vGlow, 1.0);
        #endif
        #include <colorspace_fragment>
        gl_FragColor *= coverage;
    }
`;

const stickVertexShader = `
    attribute vec3 start;
    attribute vec3 end;
    attribute vec3 side;
    attribute float radius;
    attribute float glow;
    uniform float radiusScale;
    varying vec3 vProxyPosition;
    flat varying vec3 vStart;
    flat varying vec3 vAxis;
    flat varying vec3 vSide;
    flat varying float vLength;
    flat varying float vRadius;
    flat varying float vGlow;
    flat varying int vStickIndex;

    void main() {
        ${outlineVertexSkip}
        vec3 axis = end - start;
        vLength = length(axis);
        vAxis = axis / max(vLength, 1e-6);
        vSide = normalize(side - vAxis * dot(side, vAxis));
        vStart = start;
        vRadius = radius * radiusScale;
        vGlow = glow;
        vStickIndex = gl_InstanceID;
        vProxyPosition =
            start +
            axis * (position.y + 0.5) +
            (vSide * position.x + cross(vSide, vAxis) * position.z) * vRadius;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(vProxyPosition, 1.0);
    }
`;

const stickFragmentShader = `
    ${impostorGlsl}
    uniform highp sampler2D contactOccluders;
    uniform highp sampler2D shadowCasters;
    /** Sticks' rows come after every atom's in the shared capsule textures. */
    uniform int partRowOffset;
    uniform float stickTransmission;
    uniform vec3 stickColor;
    uniform vec3 highlightColor;
    varying vec3 vProxyPosition;
    flat varying vec3 vStart;
    flat varying vec3 vAxis;
    flat varying vec3 vSide;
    flat varying float vLength;
    flat varying float vRadius;
    flat varying float vGlow;
    flat varying int vStickIndex;

    void main() {
        vec3 rayDirection = normalize(vProxyPosition - localCameraPosition);
        vec3 offset = localCameraPosition - vStart;
        vec3 rayAcross = rayDirection - vAxis * dot(rayDirection, vAxis);
        vec3 offsetAcross = offset - vAxis * dot(offset, vAxis);
        float rayAcrossSquared = max(dot(rayAcross, rayAcross), 1e-8);
        float closestAt = -dot(offsetAcross, rayAcross) / rayAcrossSquared;
        vec3 closestAcross = offsetAcross + rayAcross * closestAt;
        float closestSquared = dot(closestAcross, closestAcross);
        float coverage = getEdgeCoverage(sqrt(closestSquared) - vRadius);
        if (coverage <= 0.0) {
            discard;
        }
        float halfChord = sqrt(max(vRadius * vRadius - closestSquared, 0.0) / rayAcrossSquared);
        #ifdef OUTLINE
            vec3 position = localCameraPosition + rayDirection * (closestAt + halfChord);
        #else
            vec3 position = localCameraPosition + rayDirection * (closestAt - halfChord);
        #endif
        float alongAxis = dot(position - vStart, vAxis);
        /** Open ended, since both ends sit inside atom cores. */
        if (alongAxis < 0.0 || alongAxis > vLength) {
            discard;
        }
        gl_FragDepth = getFragmentDepth(position);

        #ifdef OUTLINE
            gl_FragColor = vec4(highlightColor, 1.0);
            #include <colorspace_fragment>
            gl_FragColor *= coverage;
        #else
            vec3 viewDirection = -rayDirection;
            vec3 geometryNormal = normalize(position - vStart - vAxis * alongAxis);
            vec3 fromMiddle = position - vStart - vAxis * (vLength * 0.5);
            float surface = getSurfaceValue(
                vec3(
                    dot(fromMiddle, vSide),
                    dot(fromMiddle, vAxis),
                    dot(fromMiddle, cross(vSide, vAxis))
                ) / ${typicalAtomRadius.toFixed(4)}
            );
            vec3 normal = perturbNormalByHeight(
                position,
                geometryNormal,
                /** Fainter than on atoms, since a stick's grain shows more along its length. */
                surface * ${(surfaceBumpScale / 2).toFixed(4)}
            );
            int row = partRowOffset + vStickIndex;
            SurfaceLight light = shadeSurface(
                stickColor *
                    getContactBrightness(
                        contactOccluders,
                        row,
                        position,
                        STICK_CONTACT_REACH,
                        STICK_CONTACT_DARKNESS,
                        1.0
                    ),
                normal,
                viewDirection,
                getRoughness(STICK_ROUGHNESS * surface, geometryNormal),
                getShadowVisibility(
                    shadowCasters,
                    row,
                    position + geometryNormal * ${shadowRayOffset.toFixed(4)},
                    localTowardLight
                )
            );
            /**
             * Lets what's behind show through a little, fading out toward the stick's edges. Like
             * three.js's transmission, it only replaces diffuse light, and what shows through is
             * tinted by the stick's color.
             */
            float seeThrough = stickTransmission * getGlassEdgeTransmission(normal, viewDirection);
            gl_FragColor = vec4(
                light.diffuse * (1.0 - seeThrough) + light.specular + stickColor * vGlow,
                1.0
            );
            #include <colorspace_fragment>
            gl_FragColor.a = 1.0 - seeThrough * dot(stickColor, vec3(0.2126, 0.7152, 0.0722));
            gl_FragColor *= coverage;
        #endif
    }
`;

function toGlslFloat(value: number) {
    return value.toFixed(4);
}

/** Draws every atom in two draw calls: the atoms themselves, and outlines on selected ones. */
export function createAtomImpostors({
    atomCount,
    sceneUniforms,
    contactOccluders,
    shadowCasters,
    selfReflections,
    highlightColor,
    coreFraction,
}: Readonly<{
    atomCount: number;
    sceneUniforms: Readonly<ImpostorSceneUniforms>;
    contactOccluders: Readonly<Texture>;
    shadowCasters: Readonly<Texture>;
    selfReflections: Readonly<Pick<ReturnType<typeof createSelfReflections>, 'uniforms'>>;
    highlightColor: Readonly<Color>;
    /** How much of an atom's radius is its colored core. The rest is a see-through glass shell. */
    coreFraction: number;
}>) {
    const geometry = createInstancedBox({
        width: 2,
        height: 2,
        instanceCount: atomCount,
    });
    const attributes = {
        center: createInstanceAttribute({
            geometry,
            name: 'center',
            itemSize: 3,
            isDynamic: true,
        }),
        radius: createInstanceAttribute({
            geometry,
            name: 'radius',
            itemSize: 1,
        }),
        color: createInstanceAttribute({
            geometry,
            name: 'color',
            itemSize: 3,
        }),
        glow: createInstanceAttribute({
            geometry,
            name: 'glow',
            itemSize: 1,
            isDynamic: true,
        }),
    };
    const shellTransmission = 0.5;
    const uniforms = {
        ...sceneUniforms,
        ...selfReflections.uniforms,
        surfaceNoise: {
            value: surfaceNoiseTexture,
        },
        contactOccluders: {
            value: contactOccluders,
        },
        shadowCasters: {
            value: shadowCasters,
        },
        shellTransmission: {
            value: shellTransmission,
        },
        highlightColor: {
            value: highlightColor,
        },
    };
    const defines = {
        SHADOW_CASTER_LIMIT: maxShadowCasters,
        CORE_FRACTION: toGlslFloat(coreFraction),
        SHELL_ROUGHNESS: toGlslFloat(0.4),
        CORE_ROUGHNESS: toGlslFloat(0.5),
        CLEARCOAT_ROUGHNESS: toGlslFloat(0.03),
        ATOM_CONTACT_DARKNESS: toGlslFloat(0.25),
    };
    const material = applyCoverageBlending(
        new ShaderMaterial({
            uniforms: {
                ...uniforms,
                radiusScale: {
                    value: 1,
                },
            },
            defines: {
                ...defines,
                USE_SELF_REFLECTIONS: '',
            },
            vertexShader: atomVertexShader,
            fragmentShader: atomFragmentShader,
        }),
    );
    material.alphaToCoverage = true;
    const outlineMaterial = applyCoverageBlending(
        new ShaderMaterial({
            uniforms: {
                ...uniforms,
                radiusScale: {
                    value: 1.2,
                },
            },
            defines: {
                ...defines,
                OUTLINE: '',
            },
            vertexShader: atomVertexShader,
            fragmentShader: atomFragmentShader,
        }),
    );
    outlineMaterial.alphaToCoverage = true;

    const mesh = new Mesh(geometry, material);
    const outlineMesh = new Mesh(geometry, outlineMaterial);
    /** Instances spread far beyond the one box the geometry's bounds describe. */
    mesh.frustumCulled = false;
    outlineMesh.frustumCulled = false;

    return {
        meshes: [
            mesh,
            outlineMesh,
        ],
        attributes,
        setSelfReflectionsEnabled(isEnabled: boolean) {
            if (isEnabled === 'USE_SELF_REFLECTIONS' in material.defines) {
                return;
            }
            material.defines = isEnabled
                ? {
                      ...material.defines,
                      USE_SELF_REFLECTIONS: '',
                  }
                : defines;
            material.needsUpdate = true;
        },
        setTransmissionEnabled(isEnabled: boolean) {
            material.uniforms.shellTransmission = {
                value: isEnabled ? shellTransmission : 0,
            };
        },
        dispose() {
            geometry.dispose();
            material.dispose();
            outlineMaterial.dispose();
        },
    };
}

/** Draws every bond stick in two draw calls: the sticks themselves, and outlines on selected ones. */
export function createStickImpostors({
    stickCount,
    atomCount,
    sceneUniforms,
    contactOccluders,
    shadowCasters,
    highlightColor,
    stickColor,
}: Readonly<{
    stickCount: number;
    /** Sticks' rows in the capsule textures come after this many atom rows. */
    atomCount: number;
    sceneUniforms: Readonly<ImpostorSceneUniforms>;
    contactOccluders: Readonly<Texture>;
    shadowCasters: Readonly<Texture>;
    highlightColor: Readonly<Color>;
    stickColor: Readonly<Color>;
}>) {
    const geometry = createInstancedBox({
        width: 2,
        height: 1,
        instanceCount: stickCount,
    });
    const attributes = {
        start: createInstanceAttribute({
            geometry,
            name: 'start',
            itemSize: 3,
            isDynamic: true,
        }),
        end: createInstanceAttribute({
            geometry,
            name: 'end',
            itemSize: 3,
            isDynamic: true,
        }),
        side: createInstanceAttribute({
            geometry,
            name: 'side',
            itemSize: 3,
            isDynamic: true,
        }),
        radius: createInstanceAttribute({
            geometry,
            name: 'radius',
            itemSize: 1,
        }),
        glow: createInstanceAttribute({
            geometry,
            name: 'glow',
            itemSize: 1,
            isDynamic: true,
        }),
    };
    const stickTransmission = 0.15;
    const uniforms = {
        ...sceneUniforms,
        surfaceNoise: {
            value: surfaceNoiseTexture,
        },
        contactOccluders: {
            value: contactOccluders,
        },
        shadowCasters: {
            value: shadowCasters,
        },
        partRowOffset: {
            value: atomCount,
        },
        stickTransmission: {
            value: stickTransmission,
        },
        stickColor: {
            value: stickColor,
        },
        highlightColor: {
            value: highlightColor,
        },
    };
    const defines = {
        SHADOW_CASTER_LIMIT: maxShadowCasters,
        STICK_ROUGHNESS: toGlslFloat(0.6),
        STICK_CONTACT_DARKNESS: toGlslFloat(0.3),
        /** Wider than on atoms, so the band reads on a stick this thick. */
        STICK_CONTACT_REACH: toGlslFloat(0.12),
    };
    const material = applyCoverageBlending(
        new ShaderMaterial({
            uniforms: {
                ...uniforms,
                radiusScale: {
                    value: 1,
                },
            },
            defines,
            vertexShader: stickVertexShader,
            fragmentShader: stickFragmentShader,
            /** Drawn after the atoms, so what shows through a stick is already there. */
            transparent: true,
        }),
    );
    const outlineMaterial = applyCoverageBlending(
        new ShaderMaterial({
            uniforms: {
                ...uniforms,
                /** Only widen the outline; its length already reaches into both atoms. */
                radiusScale: {
                    value: 1.6,
                },
            },
            defines: {
                ...defines,
                OUTLINE: '',
            },
            vertexShader: stickVertexShader,
            fragmentShader: stickFragmentShader,
        }),
    );
    outlineMaterial.alphaToCoverage = true;

    const mesh = new Mesh(geometry, material);
    const outlineMesh = new Mesh(geometry, outlineMaterial);
    mesh.frustumCulled = false;
    outlineMesh.frustumCulled = false;

    return {
        meshes: [
            mesh,
            outlineMesh,
        ],
        attributes,
        setTransmissionEnabled(isEnabled: boolean) {
            material.uniforms.stickTransmission = {
                value: isEnabled ? stickTransmission : 0,
            };
        },
        dispose() {
            geometry.dispose();
            material.dispose();
            outlineMaterial.dispose();
        },
    };
}
