// cspell:words highp
/** How far from an occluder's surface its darkening fades out, in ångströms. */
export const contactReach = 0.04;
/** Each part's occluders get a fixed-width row of the capsule texture, so extras are dropped. */
export const maxContactOccluders = 12;

/**
 * GLSL that darkens a surface in a thin band wherever it comes close to one of its occluders, like
 * the crease where a bond enters an atom. Overlapping bands take the darkest one rather than adding
 * up, so a narrow gap between two bonds isn't filled in. Occluders come from a `createCapsuleRows`
 * texture, and atom occluders have their radius scaled by `atomRadiusScale` so an atom's core and
 * shell can share one list.
 *
 * Needs `capsuleRowsGlsl` first.
 */
export const contactShadingGlsl = `
    float getContactBrightness(
        highp sampler2D occluders,
        int row,
        vec3 position,
        float reach,
        float darkness,
        float atomRadiusScale
    ) {
        int count = getCapsuleCount(occluders, row);
        float occlusion = 0.0;
        for (int index = 0; index < ${maxContactOccluders}; index++) {
            if (index >= count) {
                break;
            }
            vec4 start;
            vec4 end;
            getCapsule(occluders, row, index, start, end);
            vec3 segment = end.xyz - start.xyz;
            float along = clamp(
                dot(position - start.xyz, segment) / max(dot(segment, segment), 1e-6),
                0.0,
                1.0
            );
            float radius = start.w * (end.w > 0.5 ? atomRadiusScale : 1.0);
            float gap = max(distance(position, start.xyz + segment * along) - radius, 0.0);
            float closeness = 1.0 - min(gap / reach, 1.0);
            occlusion = max(occlusion, closeness * closeness);
        }
        return 1.0 - darkness * occlusion;
    }
`;
