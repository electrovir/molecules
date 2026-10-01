// cspell:words fract roughnessmap bumpmap
import {type MeshStandardMaterial, ShaderChunk} from 'three';
import {replaceOrThrow} from './shadowed-shine.js';

/**
 * Noise cells across a unit sphere's surface for each layer, matching the rows of `surfaceTexture`,
 * which span half a circle.
 */
const noiseFrequencies = [
    {
        cellsPerUnit: 24 / Math.PI,
        weight: 0.6,
    },
    {
        cellsPerUnit: 48 / Math.PI,
        weight: 0.4,
    },
];

/** Bond sticks count distances in units of this, so their grains come out the size of atoms'. */
const typicalAtomRadius = 0.45;

/** Where on a mesh the surface noise is sampled from. */
export enum SurfaceNoiseSpace {
    /**
     * The direction from the mesh's center, so a sphere's pattern scales with its size like a
     * texture would.
     */
    SphereDirection = 'sphere-direction',
    /**
     * The mesh's own positions with its scale applied, so stretching the mesh doesn't stretch the
     * pattern.
     */
    ScaledObject = 'scaled-object',
}

const surfacePointExpressions: Record<SurfaceNoiseSpace, string> = {
    [SurfaceNoiseSpace.SphereDirection]: 'normalize(position)',
    [SurfaceNoiseSpace.ScaledObject]: `position * vec3(
        length(modelMatrix[0].xyz),
        length(modelMatrix[1].xyz),
        length(modelMatrix[2].xyz)
    ) / ${typicalAtomRadius.toFixed(4)}`,
};

/**
 * Makes a material's roughness and bump maps read `surfaceTexture`'s mottling from 3D noise instead
 * of the texture. A flat texture wrapped around a sphere bunches up into a pinch at each pole, and
 * on a scaled stick it stretches; 3D noise is even everywhere. The material still needs its
 * `roughnessMap` and `bumpMap` set, since those turn the map code on.
 *
 * Keeps any `onBeforeCompile` the material already has, so it can be combined with other shader
 * tweaks.
 */
export function addSurfaceNoise({
    material,
    space,
}: Readonly<{
    material: MeshStandardMaterial;
    space: SurfaceNoiseSpace;
}>) {
    const previousOnBeforeCompile = material.onBeforeCompile.bind(material);
    const previousCacheKey = material.customProgramCacheKey.bind(material);

    material.onBeforeCompile = (shader, renderer) => {
        previousOnBeforeCompile(shader, renderer);
        shader.vertexShader = shader.vertexShader
            .replace(
                '#include <common>',
                `#include <common>
                varying vec3 vSurfacePoint;`,
            )
            .replace(
                '#include <begin_vertex>',
                `#include <begin_vertex>
                vSurfacePoint = ${surfacePointExpressions[space]};`,
            );
        shader.fragmentShader = shader.fragmentShader
            .replace(
                '#include <common>',
                `#include <common>
                varying vec3 vSurfacePoint;

                float hashLatticePoint(vec3 point) {
                    return fract(sin(dot(point, vec3(127.1, 311.7, 74.7))) * 43758.5453);
                }

                float getValueNoise(vec3 point) {
                    vec3 cell = floor(point);
                    vec3 blend = smoothstep(0.0, 1.0, point - cell);
                    return mix(
                        mix(
                            mix(hashLatticePoint(cell), hashLatticePoint(cell + vec3(1, 0, 0)), blend.x),
                            mix(hashLatticePoint(cell + vec3(0, 1, 0)), hashLatticePoint(cell + vec3(1, 1, 0)), blend.x),
                            blend.y
                        ),
                        mix(
                            mix(hashLatticePoint(cell + vec3(0, 0, 1)), hashLatticePoint(cell + vec3(1, 0, 1)), blend.x),
                            mix(hashLatticePoint(cell + vec3(0, 1, 1)), hashLatticePoint(cell + vec3(1, 1, 1)), blend.x),
                            blend.y
                        ),
                        blend.z
                    );
                }

                float getSurfaceValue(vec3 direction) {
                    float noise = ${noiseFrequencies
                        .map(({cellsPerUnit, weight}) => {
                            return `getValueNoise(direction * ${cellsPerUnit.toFixed(4)}) * ${weight.toFixed(4)}`;
                        })
                        .join(' + ')};
                    return mix(0.6, 1.0, noise);
                }`,
            )
            .replace(
                '#include <roughnessmap_fragment>',
                replaceOrThrow({
                    source: ShaderChunk.roughnessmap_fragment,
                    search: 'texture2D( roughnessMap, vRoughnessMapUv )',
                    replacement: 'vec4(getSurfaceValue(vSurfacePoint))',
                }),
            )
            .replace(
                '#include <bumpmap_pars_fragment>',
                [
                    'texture2D( bumpMap, vBumpMapUv ).x',
                    'texture2D( bumpMap, vBumpMapUv + dSTdx ).x',
                    'texture2D( bumpMap, vBumpMapUv + dSTdy ).x',
                ].reduce((source, search, index) => {
                    return replaceOrThrow({
                        source,
                        search,
                        replacement: `getSurfaceValue(vSurfacePoint${
                            [
                                '',
                                ' + dFdx(vSurfacePoint)',
                                ' + dFdy(vSurfacePoint)',
                            ][index]
                        })`,
                    });
                }, ShaderChunk.bumpmap_pars_fragment),
            );
    };
    /**
     * Three.js caches compiled shaders by `onBeforeCompile`'s source text, which another tweak
     * wrapping this one would hide.
     */
    material.customProgramCacheKey = () => {
        return `${previousCacheKey()}+surface-noise-${space}`;
    };
}
