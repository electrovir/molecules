// cspell:words ångströms highp occluder occluders texels
import {DataTexture, FloatType, type MeshStandardMaterial, RGBAFormat, type Vector3} from 'three';

/** A capsule in world space. A sphere is a capsule whose start and end are the same point. */
export type Occluder = {
    start: Vector3;
    end: Vector3;
    radius: number;
};

/** How far from an occluder's surface its darkening fades out, in ångströms. */
export const contactReach = 0.04;
/** Each material's occluders get a fixed-width row of the data texture, so extras are dropped. */
const maxOccluders = 12;
/** Each occluder takes two texels: its start with its radius in alpha, then its end. */
const texelsPerOccluder = 2;
const rowWidth = maxOccluders * texelsPerOccluder;

/**
 * Holds the occluders of every material given to {@link addContactShading} in one texture, a row per
 * material. Uniform arrays would be re-uploaded by three.js for every mesh drawn, while the texture
 * uploads once per frame.
 */
export function createContactShadingData({materialCount}: Readonly<{materialCount: number}>) {
    const data = new Float32Array(rowWidth * materialCount * 4);
    const texture = new DataTexture(data, rowWidth, materialCount, RGBAFormat, FloatType);
    texture.needsUpdate = true;
    const state = {
        usedRows: 0,
    };

    return {
        data,
        texture,
        takeRow() {
            if (state.usedRows >= materialCount) {
                throw new Error(
                    `Contact shading data only has rows for ${materialCount} materials.`,
                );
            }
            return state.usedRows++;
        },
        /** Call once a frame, after setting any occluders that moved. */
        upload() {
            texture.needsUpdate = true;
        },
        dispose() {
            texture.dispose();
        },
    };
}

export type ContactShadingData = ReturnType<typeof createContactShadingData>;

/**
 * Darkens a material's surface in a thin band wherever it comes close to one of its occluders, like
 * the crease where a bond enters an atom. It's computed per pixel so the band can be thinner than
 * the spacing between the mesh's vertices. Overlapping bands take the darkest one rather than
 * adding up, so a narrow gap between two bonds isn't filled in.
 *
 * Keeps any `onBeforeCompile` the material already has.
 *
 * Returns a setter for the material's occluders, which must be called again whenever they or the
 * mesh move, followed by the data's `upload`.
 */
export function addContactShading({
    material,
    contactShadingData,
    darkestBrightness,
    reach = contactReach,
}: Readonly<{
    material: MeshStandardMaterial;
    contactShadingData: Pick<ContactShadingData, 'data' | 'texture' | 'takeRow'>;
    /** Brightness multiplier right where two surfaces meet. */
    darkestBrightness: number;
    /** How far from an occluder's surface the darkening fades out, in ångströms. */
    reach?: number | undefined;
}>) {
    const row = contactShadingData.takeRow();
    const uniforms = {
        contactDarkness: {
            value: 1 - darkestBrightness,
        },
        contactData: {
            value: contactShadingData.texture,
        },
        contactRow: {
            value: row,
        },
        contactCount: {
            value: 0,
        },
    };

    const previousOnBeforeCompile = material.onBeforeCompile.bind(material);

    material.onBeforeCompile = (shader, renderer) => {
        previousOnBeforeCompile(shader, renderer);
        Object.assign(shader.uniforms, uniforms);
        shader.vertexShader = shader.vertexShader
            .replace('#include <common>', '#include <common>\nvarying vec3 vContactWorldPosition;')
            .replace(
                '#include <project_vertex>',
                '#include <project_vertex>\nvContactWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;',
            );
        shader.fragmentShader = shader.fragmentShader
            .replace(
                '#include <common>',
                `#include <common>
                uniform highp sampler2D contactData;
                uniform int contactRow;
                uniform int contactCount;
                uniform float contactDarkness;
                varying vec3 vContactWorldPosition;

                float getContactBrightness() {
                    float occlusion = 0.0;
                    for (int index = 0; index < ${maxOccluders}; index++) {
                        if (index >= contactCount) {
                            break;
                        }
                        vec4 startAndRadius = texelFetch(
                            contactData,
                            ivec2(index * ${texelsPerOccluder}, contactRow),
                            0
                        );
                        vec3 start = startAndRadius.xyz;
                        vec3 segment = texelFetch(
                            contactData,
                            ivec2(index * ${texelsPerOccluder} + 1, contactRow),
                            0
                        ).xyz - start;
                        float along = clamp(
                            dot(vContactWorldPosition - start, segment) /
                                max(dot(segment, segment), 1e-6),
                            0.0,
                            1.0
                        );
                        float gap = max(
                            distance(vContactWorldPosition, start + segment * along) -
                                startAndRadius.w,
                            0.0
                        );
                        float closeness = 1.0 - min(gap / ${reach.toFixed(4)}, 1.0);
                        occlusion = max(occlusion, closeness * closeness);
                    }
                    return 1.0 - contactDarkness * occlusion;
                }`,
            )
            .replace(
                '#include <color_fragment>',
                `#include <color_fragment>
                #ifndef USE_TRANSMISSION
                    diffuseColor.rgb *= getContactBrightness();
                #endif`,
            )
            /**
             * A see-through surface also darkens what shows through it, or the shading would only
             * reach the part of it that isn't see-through.
             */
            .replace(
                'vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;',
                `#ifdef USE_TRANSMISSION
                    totalDiffuse *= getContactBrightness();
                #endif
                vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;`,
            );
    };

    return (occluders: ReadonlyArray<Readonly<Occluder>>) => {
        const usedOccluders = occluders.slice(0, maxOccluders);
        usedOccluders.forEach((occluder, index) => {
            const offset = (row * rowWidth + index * texelsPerOccluder) * 4;
            contactShadingData.data.set(
                [
                    ...occluder.start.toArray(),
                    occluder.radius,
                    ...occluder.end.toArray(),
                ],
                offset,
            );
        });
        uniforms.contactCount.value = usedOccluders.length;
    };
}
