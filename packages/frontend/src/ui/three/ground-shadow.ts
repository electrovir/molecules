// cspell:words highp
import {assertWrap} from '@augment-vir/assert';
import {createArray} from '@augment-vir/common';
import {
    Color,
    DataTexture,
    FloatType,
    LinearFilter,
    Matrix4,
    Mesh,
    MeshBasicMaterial,
    PlaneGeometry,
    RGBAFormat,
    ShaderMaterial,
    type Texture,
    Vector2,
    Vector3,
    type WebGLRenderer,
    WebGLRenderTarget,
} from 'three';
import {FullScreenQuad} from 'three/addons/postprocessing/Pass.js';
import {capsuleRowsGlsl} from './capsule-rows.js';
import {
    maxGroundShadowCasters,
    penumbraBase,
    penumbraSpread,
    shadowCastersGlsl,
} from './shadow-casters.js';

/** The shadow is blurry, so a small texture stretched over the ground is enough. */
const shadowResolution = 256;
/**
 * The ground is split into this many tiles along each side, and each tile's pixels only check the
 * parts whose shadow can reach that tile.
 */
const tilesPerSide = 16;
/** Floats per part in `ends`: start x, y, z, end x, y, z. */
const partStride = 6;

/** Distance from `point` to the segment from `start` to `end`. */
function getPointSegmentDistance({
    point,
    start,
    end,
}: Readonly<{
    point: Readonly<Vector3>;
    start: Readonly<Vector3>;
    end: Readonly<Vector3>;
}>) {
    const segmentX = end.x - start.x;
    const segmentY = end.y - start.y;
    const segmentZ = end.z - start.z;
    const lengthSquared = segmentX * segmentX + segmentY * segmentY + segmentZ * segmentZ;
    const along =
        lengthSquared > 1e-9
            ? Math.min(
                  1,
                  Math.max(
                      0,
                      ((point.x - start.x) * segmentX +
                          (point.y - start.y) * segmentY +
                          (point.z - start.z) * segmentZ) /
                          lengthSquared,
                  ),
              )
            : 0;
    return Math.hypot(
        point.x - start.x - segmentX * along,
        point.y - start.y - segmentY * along,
        point.z - start.z - segmentZ * along,
    );
}

/**
 * The molecule's shadow on the ground, traced into a small texture once a frame and then stretched
 * over a plane. Only the patch of ground the molecule can shade is covered, so the trace isn't
 * spent on empty ground.
 */
export function createGroundShadow({
    casters,
    ends,
    casterRadii,
    towardLight,
    opacity,
}: Readonly<{
    /** Every part of the molecule in one row, as `createShadowCasters` builds for the ground. */
    casters: Readonly<Texture>;
    /**
     * Each part's start then end in the molecule's own space, in the same order as `casters`. Read
     * on every render, so it can be updated in place.
     */
    ends: Readonly<Float32Array>;
    casterRadii: Readonly<Float32Array>;
    /** In world space. */
    towardLight: Readonly<Vector3>;
    opacity: number;
}>) {
    const casterCount = Math.min(casterRadii.length, maxGroundShadowCasters);
    /** Each tile's row starts with its caster count, then packs four caster indexes per texel. */
    const tileRowWidth = 1 + Math.ceil(casterCount / 4);
    const tileData = new Float32Array(tileRowWidth * tilesPerSide * tilesPerSide * 4);
    const tileCasters = new DataTexture(
        tileData,
        tileRowWidth,
        tilesPerSide * tilesPerSide,
        RGBAFormat,
        FloatType,
    );
    const flattenedStarts = createArray(casterCount, () => new Vector3());
    const flattenedEnds = createArray(casterCount, () => new Vector3());
    const farthestAlong = new Float64Array(casterCount);
    const tileCenter = new Vector3();

    /**
     * Lists, for each tile, the parts whose shadow can reach any pixel in it. Everything is
     * flattened onto the plane facing the light, which only ever shrinks distances, so a part
     * farther than its shadow's reach from a tile's flattened center, plus the tile's own reach,
     * can't shade it.
     */
    function updateTileCasters({
        worldToLocal,
        localTowardLight,
    }: Readonly<{worldToLocal: Readonly<Matrix4>; localTowardLight: Readonly<Vector3>}>) {
        for (let part = 0; part < casterCount; part++) {
            const offset = part * partStride;
            const start = assertWrap
                .isDefined(flattenedStarts[part])
                .set(ends[offset] ?? 0, ends[offset + 1] ?? 0, ends[offset + 2] ?? 0);
            const end = assertWrap
                .isDefined(flattenedEnds[part])
                .set(ends[offset + 3] ?? 0, ends[offset + 4] ?? 0, ends[offset + 5] ?? 0);
            const startAlong = start.dot(localTowardLight);
            const endAlong = end.dot(localTowardLight);
            farthestAlong[part] = Math.max(startAlong, endAlong);
            start.addScaledVector(localTowardLight, -startAlong);
            end.addScaledVector(localTowardLight, -endAlong);
        }

        const tileSize = footprint.size.value / tilesPerSide;
        /** How far any pixel in a tile is from the tile's center. */
        const tileReach = tileSize * Math.SQRT1_2;
        for (let tileY = 0; tileY < tilesPerSide; tileY++) {
            for (let tileX = 0; tileX < tilesPerSide; tileX++) {
                /** The same mapping from texture coordinates to ground as the trace shader. */
                tileCenter
                    .set(
                        footprint.center.x +
                            ((tileX + 0.5) / tilesPerSide - 0.5) * footprint.size.value,
                        footprint.groundHeight.value,
                        footprint.center.y -
                            ((tileY + 0.5) / tilesPerSide - 0.5) * footprint.size.value,
                    )
                    .applyMatrix4(worldToLocal);
                const tileAlong = tileCenter.dot(localTowardLight);
                tileCenter.addScaledVector(localTowardLight, -tileAlong);
                const rowOffset = (tileY * tilesPerSide + tileX) * tileRowWidth * 4;
                let count = 0;
                for (let part = 0; part < casterCount; part++) {
                    const farthestRayDistance =
                        (farthestAlong[part] ?? 0) - (tileAlong - tileReach);
                    if (farthestRayDistance <= 0) {
                        continue;
                    }
                    const shadowReach =
                        (casterRadii[part] ?? 0) +
                        penumbraBase +
                        penumbraSpread * farthestRayDistance +
                        tileReach;
                    if (
                        getPointSegmentDistance({
                            point: tileCenter,
                            start: assertWrap.isDefined(flattenedStarts[part]),
                            end: assertWrap.isDefined(flattenedEnds[part]),
                        }) < shadowReach
                    ) {
                        tileData[rowOffset + 4 + count] = part;
                        count++;
                    }
                }
                tileData[rowOffset] = count;
            }
        }
        tileCasters.needsUpdate = true;
    }

    const renderTarget = new WebGLRenderTarget(shadowResolution, shadowResolution, {
        minFilter: LinearFilter,
        magFilter: LinearFilter,
        depthBuffer: false,
    });
    const footprint = {
        center: new Vector2(),
        size: {
            value: 1,
        },
        groundHeight: {
            value: 0,
        },
    };
    const uniforms = {
        shadowCasters: {
            value: casters,
        },
        tileCasters: {
            value: tileCasters,
        },
        worldToLocal: {
            value: new Matrix4(),
        },
        localTowardLight: {
            value: new Vector3(),
        },
        footprintCenter: {
            value: footprint.center,
        },
        footprintSize: footprint.size,
        groundHeight: footprint.groundHeight,
    };
    const quad = new FullScreenQuad(
        new ShaderMaterial({
            uniforms,
            defines: {
                SHADOW_CASTER_LIMIT: maxGroundShadowCasters,
                TILES_PER_SIDE: tilesPerSide,
            },
            vertexShader: `
                varying vec2 vUv;

                void main() {
                    vUv = uv;
                    gl_Position = vec4(position.xy, 0.0, 1.0);
                }
            `,
            fragmentShader: `
                uniform highp sampler2D shadowCasters;
                uniform highp sampler2D tileCasters;
                uniform mat4 worldToLocal;
                uniform vec3 localTowardLight;
                uniform vec2 footprintCenter;
                uniform float footprintSize;
                uniform float groundHeight;
                varying vec2 vUv;
                ${capsuleRowsGlsl}
                ${shadowCastersGlsl}

                void main() {
                    /** Matches where a plane laid flat puts each of its texture coordinates. */
                    vec3 groundPoint = vec3(
                        footprintCenter.x + (vUv.x - 0.5) * footprintSize,
                        groundHeight,
                        footprintCenter.y - (vUv.y - 0.5) * footprintSize
                    );
                    vec3 origin = (worldToLocal * vec4(groundPoint, 1.0)).xyz;
                    ivec2 tile = min(ivec2(vUv * float(TILES_PER_SIDE)), ivec2(TILES_PER_SIDE - 1));
                    int row = tile.y * TILES_PER_SIDE + tile.x;
                    int count = int(texelFetch(tileCasters, ivec2(0, row), 0).x);
                    float visibility = 1.0;
                    for (int index = 0; index < SHADOW_CASTER_LIMIT; index++) {
                        if (index >= count) {
                            break;
                        }
                        int caster = int(texelFetch(tileCasters, ivec2(1 + index / 4, row), 0)[index % 4]);
                        vec4 start;
                        vec4 end;
                        getCapsule(shadowCasters, 0, caster, start, end);
                        visibility *= getCasterVisibility(start, end, origin, localTowardLight);
                    }
                    gl_FragColor = vec4(vec3(1.0 - visibility), 1.0);
                }
            `,
        }),
    );

    const geometry = new PlaneGeometry(1, 1);
    /**
     * Draws nothing but the shadow, so the ground blends into the CSS background behind the
     * transparent canvas, gradient included.
     */
    const material = new MeshBasicMaterial({
        color: new Color(0),
        alphaMap: renderTarget.texture,
        opacity,
        transparent: true,
        depthWrite: false,
    });
    const mesh = new Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2;
    /** Under the molecule, which can show through its own shadow. */
    mesh.renderOrder = -1;

    return {
        mesh,
        /** Puts the ground at `groundHeight`, covering wherever a molecule this big can shade. */
        setFootprint({
            groundHeight,
            moleculeRadius,
        }: Readonly<{groundHeight: number; moleculeRadius: number}>) {
            /** Where the light's ray through the molecule's center meets the ground. */
            const center = towardLight.clone().multiplyScalar(groundHeight / towardLight.y);
            footprint.center.set(center.x, center.z);
            footprint.size.value = moleculeRadius * 2.6 + 2;
            footprint.groundHeight.value = groundHeight;
            mesh.position.set(center.x, groundHeight, center.z);
            mesh.scale.setScalar(footprint.size.value);
        },
        render({
            renderer,
            worldToLocal,
            localTowardLight,
        }: Readonly<{
            renderer: WebGLRenderer;
            /** Into the molecule's own space, where the casters are. */
            worldToLocal: Readonly<Matrix4>;
            localTowardLight: Readonly<Vector3>;
        }>) {
            uniforms.worldToLocal.value.copy(worldToLocal);
            uniforms.localTowardLight.value.copy(localTowardLight);
            updateTileCasters({
                worldToLocal,
                localTowardLight,
            });
            const previousTarget = renderer.getRenderTarget();
            renderer.setRenderTarget(renderTarget);
            quad.render(renderer);
            renderer.setRenderTarget(previousTarget);
        },
        dispose() {
            renderTarget.dispose();
            tileCasters.dispose();
            quad.material.dispose();
            quad.dispose();
            geometry.dispose();
            material.dispose();
        },
    };
}
