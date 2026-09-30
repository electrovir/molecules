import {createArray} from '@augment-vir/common';
import {CanvasTexture, RepeatWrapping} from 'three';

const textureWidth = 512;
const textureHeight = 256;
/**
 * Rows of noise cells for each layer, paired with how much each layer counts. Only fine layers are
 * used: coarse ones make atoms look lumpy instead of grainy.
 */
const noiseLayers = [
    {
        rows: 24,
        weight: 0.6,
    },
    {
        rows: 48,
        weight: 0.4,
    },
];
/** Darkest and brightest map values, which scale the material's roughness. */
const valueRange = {
    min: 0.6,
    max: 1,
};

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

function smoothStep(value: number) {
    return value * value * (3 - 2 * value);
}

/**
 * Value noise that wraps in both directions, so the seam where a sphere's or cylinder's texture
 * meets itself doesn't show. A sphere's texture wraps 360° across its width but only 180° down its
 * height, so there are twice as many columns as rows to keep the cells square on the sphere.
 */
function createTilingNoise({
    rows,
    random,
}: Readonly<{
    rows: number;
    random: () => number;
}>) {
    const columns = rows * 2;
    const lattice = createArray(rows, () => createArray(columns, () => random()));

    function getLatticeValue({column, row}: Readonly<{column: number; row: number}>) {
        return lattice[row % rows]?.[column % columns] ?? 0;
    }

    return ({x, y}: Readonly<{x: number; y: number}>) => {
        const column = Math.floor(x * columns);
        const row = Math.floor(y * rows);
        const blendX = smoothStep(x * columns - column);
        const blendY = smoothStep(y * rows - row);
        const top =
            getLatticeValue({
                column,
                row,
            }) *
                (1 - blendX) +
            getLatticeValue({
                column: column + 1,
                row,
            }) *
                blendX;
        const bottom =
            getLatticeValue({
                column,
                row: row + 1,
            }) *
                (1 - blendX) +
            getLatticeValue({
                column: column + 1,
                row: row + 1,
            }) *
                blendX;
        return top * (1 - blendY) + bottom * blendY;
    };
}

function createSurfaceTexture() {
    const random = createRandom(7);
    const layers = noiseLayers.map((layer) => {
        return {
            weight: layer.weight,
            noise: createTilingNoise({
                rows: layer.rows,
                random,
            }),
        };
    });

    const canvas = document.createElement('canvas');
    canvas.width = textureWidth;
    canvas.height = textureHeight;
    const context = canvas.getContext('2d');
    if (!context) {
        throw new Error('Could not get a 2D canvas context to draw the surface texture.');
    }
    const imageData = context.createImageData(textureWidth, textureHeight);

    createArray(textureWidth * textureHeight, (pixelIndex) => pixelIndex).forEach((pixelIndex) => {
        const point = {
            x: (pixelIndex % textureWidth) / textureWidth,
            y: Math.floor(pixelIndex / textureWidth) / textureHeight,
        };
        const noiseValue = layers.reduce((total, layer) => {
            return total + layer.noise(point) * layer.weight;
        }, 0);
        const byte = Math.round(
            (valueRange.min + (valueRange.max - valueRange.min) * noiseValue) * 255,
        );
        imageData.data.set(
            [
                byte,
                byte,
                byte,
                255,
            ],
            pixelIndex * 4,
        );
    });
    context.putImageData(imageData, 0, 0);

    const texture = new CanvasTexture(canvas);
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    return texture;
}

/**
 * A faint grayscale mottling for roughness maps. Shared by every material and never disposed, since
 * disposing a material leaves its textures alone.
 */
export const surfaceTexture = createSurfaceTexture();
