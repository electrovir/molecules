// cspell:words brdf
import {type MeshStandardMaterial, ShaderChunk} from 'three';

/**
 * Same as `String.prototype.replace`, but throws when `search` is missing instead of silently doing
 * nothing.
 */
export function replaceOrThrow({
    source,
    search,
    replacement,
}: Readonly<{
    source: string;
    search: string;
    replacement: string;
}>) {
    if (!source.includes(search)) {
        throw new Error(
            `Shader code to replace is missing, likely from a three.js update: ${search}`,
        );
    }
    return source.replace(search, replacement);
}

/**
 * Makes a directional light's shadows remove its shiny spot completely, even when the light's
 * `shadow.intensity` only lets shadows block part of its diffuse light. A soft shadow reads as
 * light bouncing in from around the blocker, but a sharp reflection of the light itself can't come
 * from anywhere but the light.
 *
 * Keeps any `onBeforeCompile` the material already has, so it can be combined with other shader
 * tweaks. Add it after tweaks that edit around the `lights_fragment_begin` or
 * `lights_physical_pars_fragment` includes, since this replaces those includes with their code.
 */
export function addFullyShadowedShine(material: MeshStandardMaterial) {
    const previousOnBeforeCompile = material.onBeforeCompile.bind(material);
    const previousCacheKey = material.customProgramCacheKey.bind(material);

    material.onBeforeCompile = (shader, renderer) => {
        previousOnBeforeCompile(shader, renderer);
        /**
         * Only the light loop knows how much of a light the shadow blocked, and only the lighting
         * functions it calls know which part is the shiny spot, so this passes the amount between
         * them. It can't be a local in the loop: three.js unrolls that loop into one scope, where
         * repeated declarations won't compile.
         */
        const lightsBegin = replaceOrThrow({
            source: replaceOrThrow({
                source: ShaderChunk.lights_fragment_begin,
                search: 'directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;',
                replacement: [
                    'shineShadowScale = ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;',
                    'directLight.color *= shineShadowScale;',
                    /**
                     * Undoes `getShadow`'s `mix( 1.0, shadow, shadowIntensity )` to get the full
                     * shadow.
                     */
                    'shineShadowScale = directionalLightShadow.shadowIntensity > 0.0 ? max( 1.0 - ( 1.0 - shineShadowScale ) / directionalLightShadow.shadowIntensity, 0.0 ) / max( shineShadowScale, 1e-4 ) : 1.0;',
                ].join('\n'),
            }),
            search: 'getDirectionalLightInfo( directionalLight, directLight );',
            replacement:
                'getDirectionalLightInfo( directionalLight, directLight );\nshineShadowScale = 1.0;',
        });
        const physicalLights = replaceOrThrow({
            source: replaceOrThrow({
                source: ShaderChunk.lights_physical_pars_fragment,
                search: 'clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat(',
                replacement:
                    'clearcoatSpecularDirect += shineShadowScale * ccIrradiance * BRDF_GGX_Clearcoat(',
            }),
            search: 'reflectedLight.directSpecular += irradiance * specularBRDF',
            replacement:
                'reflectedLight.directSpecular += shineShadowScale * irradiance * specularBRDF',
        });

        shader.fragmentShader = [
            {
                search: '#include <common>',
                replacement: '#include <common>\nfloat shineShadowScale = 1.0;',
            },
            {
                search: '#include <lights_physical_pars_fragment>',
                replacement: physicalLights,
            },
            {
                search: '#include <lights_fragment_begin>',
                replacement: lightsBegin,
            },
        ].reduce((source, {search, replacement}) => {
            return replaceOrThrow({
                source,
                search,
                replacement,
            });
        }, shader.fragmentShader);
    };
    /**
     * Three.js caches compiled shaders by `onBeforeCompile`'s source text, which another tweak
     * wrapping this one would hide.
     */
    material.customProgramCacheKey = () => {
        return `${previousCacheKey()}+fully-shadowed-shine`;
    };
}
