// cspell:words highp
import {DataTexture, FloatType, RGBAFormat} from 'three';

/** A capsule in the molecule's own space. A sphere is a capsule whose start and end are the same. */
export type Capsule = {
    start: Readonly<{x: number; y: number; z: number}>;
    end: Readonly<{x: number; y: number; z: number}>;
    radius: number;
    /** Lets a shader treat some capsules differently, such as atoms versus bond sticks. */
    isAtom: boolean;
};

/**
 * Each capsule takes two texels: its start with its radius in alpha, then its end with `isAtom` in
 * alpha. Each row starts with one texel holding its capsule count.
 */
const texelsPerCapsule = 2;

/**
 * A list of capsules for each shaded part, packed into one texture with a row per part. Uniform
 * arrays would be re-uploaded by three.js for every mesh drawn, while the texture uploads once per
 * frame.
 */
export function createCapsuleRows({
    rowCount,
    maxCapsulesPerRow,
}: Readonly<{
    rowCount: number;
    maxCapsulesPerRow: number;
}>) {
    const rowWidth = 1 + maxCapsulesPerRow * texelsPerCapsule;
    const data = new Float32Array(rowWidth * Math.max(rowCount, 1) * 4);
    const texture = new DataTexture(data, rowWidth, Math.max(rowCount, 1), RGBAFormat, FloatType);
    texture.needsUpdate = true;

    /** Takes plain numbers, since shadow casters are written every frame for every part. */
    function writeCapsule({
        row,
        index,
        values,
    }: Readonly<{
        row: number;
        index: number;
        /** Start x, y, z, radius, end x, y, z, then 1 for an atom or 0 otherwise. */
        values: ArrayLike<number>;
    }>) {
        data.set(values, (row * rowWidth + 1 + index * texelsPerCapsule) * 4);
    }

    function setCount({row, count}: Readonly<{row: number; count: number}>) {
        data[row * rowWidth * 4] = count;
    }

    return {
        texture,
        maxCapsulesPerRow,
        writeCapsule,
        setCount,
        setRow({
            row,
            capsules,
        }: Readonly<{row: number; capsules: ReadonlyArray<Readonly<Capsule>>}>) {
            const usedCapsules = capsules.slice(0, maxCapsulesPerRow);
            usedCapsules.forEach(({start, end, radius, isAtom}, index) => {
                writeCapsule({
                    row,
                    index,
                    values: [
                        start.x,
                        start.y,
                        start.z,
                        radius,
                        end.x,
                        end.y,
                        end.z,
                        isAtom ? 1 : 0,
                    ],
                });
            });
            setCount({
                row,
                count: usedCapsules.length,
            });
        },
        /** Call once a frame, after writing any rows that changed. */
        upload() {
            texture.needsUpdate = true;
        },
        dispose() {
            texture.dispose();
        },
    };
}

export type CapsuleRows = ReturnType<typeof createCapsuleRows>;

/** GLSL for reading {@link createCapsuleRows} textures. */
export const capsuleRowsGlsl = `
    int getCapsuleCount(highp sampler2D rows, int row) {
        return int(texelFetch(rows, ivec2(0, row), 0).x);
    }

    /** \`start.w\` is the radius and \`end.w\` is 1 for an atom. */
    void getCapsule(highp sampler2D rows, int row, int index, out vec4 start, out vec4 end) {
        start = texelFetch(rows, ivec2(1 + index * ${texelsPerCapsule}, row), 0);
        end = texelFetch(rows, ivec2(2 + index * ${texelsPerCapsule}, row), 0);
    }
`;
