// cspell:words fract highp
import {createArray} from '@augment-vir/common';
import {Data3DTexture, LinearFilter, RedFormat, RepeatWrapping, UnsignedByteType} from 'three';

/** Lattice cells along each side of the noise texture, after which the pattern repeats. */
const latticeSize = 64;
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

/** Seeded so every page load gets the same pattern. */
function createRandom(seed: number) {
    const state = {
        value: seed,
    };
    return () => {
        state.value = (state.value * 1_664_525 + 1_013_904_223) % 2 ** 32;
        return state.value / 2 ** 32;
    };
}

function createLatticeTexture() {
    const random = createRandom(7);
    const texture = new Data3DTexture(
        Uint8Array.from(
            createArray(latticeSize ** 3, () => {
                return Math.floor(random() * 256);
            }),
        ),
        latticeSize,
        latticeSize,
        latticeSize,
    );
    texture.format = RedFormat;
    texture.type = UnsignedByteType;
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.wrapR = RepeatWrapping;
    texture.minFilter = LinearFilter;
    texture.magFilter = LinearFilter;
    texture.unpackAlignment = 1;
    texture.needsUpdate = true;
    return texture;
}

/**
 * Random values at the corners of noise cells. Shared by every material and never disposed, since
 * disposing a material leaves its textures alone.
 */
export const surfaceNoiseTexture = createLatticeTexture();

/**
 * GLSL for a faint grainy mottling, sampled at any point in a surface's own space, plus a bump
 * mapper that uses it. Needs a `surfaceNoise` uniform set to {@link surfaceNoiseTexture}.
 */
export const surfaceNoiseGlsl = `
    uniform highp sampler3D surfaceNoise;

    /**
     * Smoothstep value noise from a single lookup: moving the coordinate within its cell before the
     * hardware's linear blend turns that blend into a smoothstep one.
     */
    float getValueNoise(vec3 point) {
        vec3 cell = floor(point);
        vec3 blend = point - cell;
        blend = blend * blend * (3.0 - 2.0 * blend);
        return texture(surfaceNoise, (cell + blend + 0.5) / ${latticeSize.toFixed(1)}).r;
    }

    float getSurfaceValue(vec3 point) {
        float noise = ${noiseFrequencies
            .map(({cellsPerUnit, weight}, index) => {
                /** Offset so finer layers don't line up with the cell corners of coarser ones. */
                return `getValueNoise(point * ${cellsPerUnit.toFixed(4)} + ${(index * 17.31).toFixed(2)}) * ${weight.toFixed(4)}`;
            })
            .join(' + ')};
        return mix(0.6, 1.0, noise);
    }

    /** Same as three.js's \`perturbNormalArb\`, with the height's slope taken from screen derivatives. */
    vec3 perturbNormalByHeight(vec3 position, vec3 normal, float height) {
        vec3 positionX = dFdx(position);
        vec3 positionY = dFdy(position);
        vec3 sigmaX = positionX / max(length(positionX), 1e-8);
        vec3 sigmaY = positionY / max(length(positionY), 1e-8);
        vec3 r1 = cross(sigmaY, normal);
        vec3 r2 = cross(normal, sigmaX);
        float determinant = dot(sigmaX, r1);
        vec3 gradient = sign(determinant) * (dFdx(height) * r1 + dFdy(height) * r2);
        return normalize(abs(determinant) * normal - gradient);
    }
`;
