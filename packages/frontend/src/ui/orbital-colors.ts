import {OrbitalShape, type Orbital} from '../data/atom-orbitals.js';

/**
 * Each s shell gets its own hue, since s orbitals all look alike and otherwise can't be told apart.
 * The first three match the sodium reference design.
 */
const sOrbitalColors = [
    0x37_8a_dd,
    0x85_b7_eb,
    0xef_9f_27,
    0x5d_ca_a5,
    0xe2_4b_4a,
    0xa3_8b_e8,
    0xc9_c2_3c,
];

/** One hue per real harmonic, kept across shells. The p hues match the sodium reference design. */
const harmonicColors = {
    p: [
        0x7f_77_dd,
        0x1d_9e_75,
        0xd4_53_7e,
    ],
    d: [
        0x2f_9c_c9,
        0xe0_7a_2c,
        0x8a_c9_3f,
        0xc2_4f_c4,
        0xd9_b5_2b,
    ],
    f: [
        0x4f_6f_e0,
        0xe0_5a_5a,
        0x3f_b8_9a,
        0xb3_7a_3a,
        0x9a_5f_d6,
        0x6f_a8_2f,
        0xd6_6f_a8,
    ],
};

/** Mixes a color toward white in sRGB, so CSS and 3D get the same color without three.js here. */
function lighten({hex, amount}: Readonly<{hex: number; amount: number}>) {
    return [
        16,
        8,
        0,
    ].reduce((mixed, shift) => {
        const channel = (hex >> shift) & 0xff;
        return mixed | (Math.round(channel + (255 - channel) * amount) << shift);
    }, 0);
}

/**
 * Lighter with each shell past the shape's first, so 2pₓ and 3pₓ read as related. `shellStep` is
 * how many shells past its first the orbital is.
 */
function getHarmonicColor({
    hues,
    harmonicIndex,
    shellStep,
}: Readonly<{hues: ReadonlyArray<number>; harmonicIndex: number; shellStep: number}>) {
    return lighten({
        hex: hues[harmonicIndex % hues.length] ?? 0,
        amount: Math.min(0.45, shellStep * 0.15),
    });
}

const shapeColors: Readonly<
    Record<OrbitalShape, (orbital: Readonly<Pick<Orbital, 'n' | 'harmonicIndex'>>) => number>
> = {
    [OrbitalShape.S]({n}) {
        return sOrbitalColors[(n - 1) % sOrbitalColors.length] ?? 0;
    },
    [OrbitalShape.P]({n, harmonicIndex}) {
        return getHarmonicColor({
            hues: harmonicColors.p,
            harmonicIndex,
            shellStep: n - 2,
        });
    },
    [OrbitalShape.D]({n, harmonicIndex}) {
        return getHarmonicColor({
            hues: harmonicColors.d,
            harmonicIndex,
            shellStep: n - 3,
        });
    },
    [OrbitalShape.F]({n, harmonicIndex}) {
        return getHarmonicColor({
            hues: harmonicColors.f,
            harmonicIndex,
            shellStep: n - 4,
        });
    },
};

export const protonColor = 0xd8_5a_30;
export const neutronColor = 0xb4_b2_a9;
export const bohrRingColor = 0x88_87_80;

/** An orbital's sRGB color as a hex number. Same-shaped orbitals keep their hue across shells. */
export function getOrbitalColor(orbital: Readonly<Pick<Orbital, 'n' | 'shape' | 'harmonicIndex'>>) {
    return shapeColors[orbital.shape](orbital);
}

/** An orbital's color for CSS. */
export function getOrbitalCssColor(
    orbital: Readonly<Pick<Orbital, 'n' | 'shape' | 'harmonicIndex'>>,
) {
    return `#${getOrbitalColor(orbital).toString(16).padStart(6, '0')}`;
}
