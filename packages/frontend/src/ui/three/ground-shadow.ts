// cspell:words highp
import {
    Color,
    LinearFilter,
    Matrix4,
    Mesh,
    MeshBasicMaterial,
    PlaneGeometry,
    ShaderMaterial,
    type Texture,
    Vector2,
    Vector3,
    type WebGLRenderer,
    WebGLRenderTarget,
} from 'three';
import {FullScreenQuad} from 'three/addons/postprocessing/Pass.js';
import {capsuleRowsGlsl} from './capsule-rows.js';
import {maxGroundShadowCasters, shadowCastersGlsl} from './shadow-casters.js';

/** The shadow is blurry, so a small texture stretched over the ground is enough. */
const shadowResolution = 256;

/**
 * The molecule's shadow on the ground, traced into a small texture once a frame and then stretched
 * over a plane. Only the patch of ground the molecule can shade is covered, so the trace isn't
 * spent on empty ground.
 */
export function createGroundShadow({
    casters,
    towardLight,
    opacity,
}: Readonly<{
    /** Every part of the molecule in one row, as `createShadowCasters` builds for the ground. */
    casters: Readonly<Texture>;
    /** In world space. */
    towardLight: Readonly<Vector3>;
    opacity: number;
}>) {
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
                    float occlusion = 1.0 - getShadowVisibility(
                        shadowCasters,
                        0,
                        (worldToLocal * vec4(groundPoint, 1.0)).xyz,
                        localTowardLight
                    );
                    gl_FragColor = vec4(vec3(occlusion), 1.0);
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
            const previousTarget = renderer.getRenderTarget();
            renderer.setRenderTarget(renderTarget);
            quad.render(renderer);
            renderer.setRenderTarget(previousTarget);
        },
        dispose() {
            renderTarget.dispose();
            quad.material.dispose();
            quad.dispose();
            geometry.dispose();
            material.dispose();
        },
    };
}
