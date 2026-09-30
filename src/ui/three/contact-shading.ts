// cspell:words ångströms occluder occluders
import {createArray} from '@augment-vir/common';
import {type MeshStandardMaterial, Vector3} from 'three';

/** A capsule in world space. A sphere is a capsule whose start and end are the same point. */
export type Occluder = {
    start: Vector3;
    end: Vector3;
    radius: number;
};

/** How far from an occluder's surface its darkening fades out, in ångströms. */
export const contactReach = 0.04;
/** The shader loops over a fixed-size uniform array, so occluders past this many are dropped. */
const maxOccluders = 12;

/**
 * Darkens a material's surface in a thin band wherever it comes close to one of its occluders, like
 * the crease where a bond enters an atom. It's computed per pixel so the band can be thinner than
 * the spacing between the mesh's vertices. Overlapping bands take the darkest one rather than
 * adding up, so a narrow gap between two bonds isn't filled in.
 *
 * Keeps any `onBeforeCompile` the material already has.
 *
 * Returns a setter for the material's occluders, which must be called again whenever they or the
 * mesh move.
 */
export function addContactShading({
    material,
    darkestBrightness,
    reach = contactReach,
}: Readonly<{
    material: MeshStandardMaterial;
    /** Brightness multiplier right where two surfaces meet. */
    darkestBrightness: number;
    /** How far from an occluder's surface the darkening fades out, in ångströms. */
    reach?: number | undefined;
}>) {
    const uniforms = {
        contactDarkness: {
            value: 1 - darkestBrightness,
        },
        contactStarts: {
            value: createArray(maxOccluders, () => new Vector3()),
        },
        contactEnds: {
            value: createArray(maxOccluders, () => new Vector3()),
        },
        contactRadii: {
            value: createArray(maxOccluders, () => 0),
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
                uniform vec3 contactStarts[${maxOccluders}];
                uniform vec3 contactEnds[${maxOccluders}];
                uniform float contactRadii[${maxOccluders}];
                uniform int contactCount;
                uniform float contactDarkness;
                varying vec3 vContactWorldPosition;

                float getContactBrightness() {
                    float occlusion = 0.0;
                    for (int index = 0; index < ${maxOccluders}; index++) {
                        if (index >= contactCount) {
                            break;
                        }
                        vec3 segment = contactEnds[index] - contactStarts[index];
                        float along = clamp(
                            dot(vContactWorldPosition - contactStarts[index], segment) /
                                max(dot(segment, segment), 1e-6),
                            0.0,
                            1.0
                        );
                        float gap = max(
                            distance(vContactWorldPosition, contactStarts[index] + segment * along) -
                                contactRadii[index],
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
            uniforms.contactStarts.value[index]?.copy(occluder.start);
            uniforms.contactEnds.value[index]?.copy(occluder.end);
            uniforms.contactRadii.value[index] = occluder.radius;
        });
        uniforms.contactCount.value = usedOccluders.length;
    };
}
