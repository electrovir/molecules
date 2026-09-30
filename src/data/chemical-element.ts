import {type AnyObject, mapObjectValues, type PartialWithUndefined} from '@augment-vir/common';
// cspell:words darmstadtium roentgenium copernicium nihonium flerovium moscovium livermorium tennessine oganesson

export type ChemicalElement = {
    name: string;
    atomicNumber: number;
    symbol: string;
} & PartialWithUndefined<{
    color: number;
    vanDerWaalsRadius: number;
}>;

const rawElements = {
    H: {
        name: 'Hydrogen',
        atomicNumber: 1,
        color: 0xff_ff_ff,
        vanDerWaalsRadius: 1.2,
    },
    He: {
        name: 'Helium',
        atomicNumber: 2,
        color: 0xd9_ff_ff,
        vanDerWaalsRadius: 1.4,
    },
    Li: {
        name: 'Lithium',
        atomicNumber: 3,
        color: 0xcc_80_ff,
        vanDerWaalsRadius: 1.82,
    },
    Be: {
        name: 'Beryllium',
        atomicNumber: 4,
        color: 0xc2_ff_00,
        vanDerWaalsRadius: 1.53,
    },
    B: {
        name: 'Boron',
        atomicNumber: 5,
        color: 0xff_b5_b5,
        vanDerWaalsRadius: 1.92,
    },
    C: {
        name: 'Carbon',
        atomicNumber: 6,
        color: 0x90_90_90,
        vanDerWaalsRadius: 1.7,
    },
    N: {
        name: 'Nitrogen',
        atomicNumber: 7,
        color: 0x30_50_f8,
        vanDerWaalsRadius: 1.55,
    },
    O: {
        name: 'Oxygen',
        atomicNumber: 8,
        color: 0xff_0d_0d,
        vanDerWaalsRadius: 1.52,
    },
    F: {
        name: 'Fluorine',
        atomicNumber: 9,
        color: 0x90_e0_50,
        vanDerWaalsRadius: 1.35,
    },
    Ne: {
        name: 'Neon',
        atomicNumber: 10,
        color: 0xb3_e3_f5,
        vanDerWaalsRadius: 1.54,
    },
    Na: {
        name: 'Sodium',
        atomicNumber: 11,
        color: 0xab_5c_f2,
        vanDerWaalsRadius: 2.27,
    },
    Mg: {
        name: 'Magnesium',
        atomicNumber: 12,
        color: 0x8a_ff_00,
        vanDerWaalsRadius: 1.73,
    },
    Al: {
        name: 'Aluminum',
        atomicNumber: 13,
        color: 0xbf_a6_a6,
        vanDerWaalsRadius: 1.84,
    },
    Si: {
        name: 'Silicon',
        atomicNumber: 14,
        color: 0xf0_c8_a0,
        vanDerWaalsRadius: 2.1,
    },
    P: {
        name: 'Phosphorus',
        atomicNumber: 15,
        color: 0xff_80_00,
        vanDerWaalsRadius: 1.8,
    },
    S: {
        name: 'Sulfur',
        atomicNumber: 16,
        color: 0xff_ff_30,
        vanDerWaalsRadius: 1.8,
    },
    Cl: {
        name: 'Chlorine',
        atomicNumber: 17,
        color: 0x1f_f0_1f,
        vanDerWaalsRadius: 1.75,
    },
    Ar: {
        name: 'Argon',
        atomicNumber: 18,
        color: 0x80_d1_e3,
        vanDerWaalsRadius: 1.88,
    },
    K: {
        name: 'Potassium',
        atomicNumber: 19,
        color: 0x8f_40_d4,
        vanDerWaalsRadius: 2.75,
    },
    Ca: {
        name: 'Calcium',
        atomicNumber: 20,
        color: 0x3d_ff_00,
        vanDerWaalsRadius: 2.31,
    },
    Sc: {
        name: 'Scandium',
        atomicNumber: 21,
        color: 0xe6_e6_e6,
        vanDerWaalsRadius: 2.11,
    },
    Ti: {
        name: 'Titanium',
        atomicNumber: 22,
        color: 0xbf_c2_c7,
        vanDerWaalsRadius: 1.87,
    },
    V: {
        name: 'Vanadium',
        atomicNumber: 23,
        color: 0xa6_a6_ab,
        vanDerWaalsRadius: 1.79,
    },
    Cr: {
        name: 'Chromium',
        atomicNumber: 24,
        color: 0x8a_99_c7,
        vanDerWaalsRadius: 1.89,
    },
    Mn: {
        name: 'Manganese',
        atomicNumber: 25,
        color: 0x9c_7a_c7,
        vanDerWaalsRadius: 1.97,
    },
    Fe: {
        name: 'Iron',
        atomicNumber: 26,
        color: 0xe0_66_33,
        vanDerWaalsRadius: 1.94,
    },
    Co: {
        name: 'Cobalt',
        atomicNumber: 27,
        color: 0xf0_90_a0,
        vanDerWaalsRadius: 1.92,
    },
    Ni: {
        name: 'Nickel',
        atomicNumber: 28,
        color: 0x50_d0_50,
        vanDerWaalsRadius: 1.63,
    },
    Cu: {
        name: 'Copper',
        atomicNumber: 29,
        color: 0xc8_80_33,
        vanDerWaalsRadius: 1.4,
    },
    Zn: {
        name: 'Zinc',
        atomicNumber: 30,
        color: 0x7d_80_b0,
        vanDerWaalsRadius: 1.39,
    },
    Ga: {
        name: 'Gallium',
        atomicNumber: 31,
        color: 0xc2_8f_8f,
        vanDerWaalsRadius: 1.87,
    },
    Ge: {
        name: 'Germanium',
        atomicNumber: 32,
        color: 0x66_8f_8f,
        vanDerWaalsRadius: 2.11,
    },
    As: {
        name: 'Arsenic',
        atomicNumber: 33,
        color: 0xbd_80_e3,
        vanDerWaalsRadius: 1.85,
    },
    Se: {
        name: 'Selenium',
        atomicNumber: 34,
        color: 0xff_a1_00,
        vanDerWaalsRadius: 1.9,
    },
    Br: {
        name: 'Bromine',
        atomicNumber: 35,
        color: 0xa6_29_29,
        vanDerWaalsRadius: 1.83,
    },
    Kr: {
        name: 'Krypton',
        atomicNumber: 36,
        color: 0x5c_b8_d1,
        vanDerWaalsRadius: 2.02,
    },
    Rb: {
        name: 'Rubidium',
        atomicNumber: 37,
        color: 0x70_2e_b0,
        vanDerWaalsRadius: 3.03,
    },
    Sr: {
        name: 'Strontium',
        atomicNumber: 38,
        color: 0x00_ff_00,
        vanDerWaalsRadius: 2.49,
    },
    Y: {
        name: 'Yttrium',
        atomicNumber: 39,
        color: 0x94_ff_ff,
        vanDerWaalsRadius: 2.19,
    },
    Zr: {
        name: 'Zirconium',
        atomicNumber: 40,
        color: 0x94_e0_e0,
        vanDerWaalsRadius: 1.86,
    },
    Nb: {
        name: 'Niobium',
        atomicNumber: 41,
        color: 0x73_c2_c9,
        vanDerWaalsRadius: 2.07,
    },
    Mo: {
        name: 'Molybdenum',
        atomicNumber: 42,
        color: 0x54_b5_b5,
        vanDerWaalsRadius: 2.09,
    },
    Tc: {
        name: 'Technetium',
        atomicNumber: 43,
        color: 0x3b_9e_9e,
        vanDerWaalsRadius: 2.09,
    },
    Ru: {
        name: 'Ruthenium',
        atomicNumber: 44,
        color: 0x24_8f_8f,
        vanDerWaalsRadius: 2.07,
    },
    Rh: {
        name: 'Rhodium',
        atomicNumber: 45,
        color: 0x0a_7d_8c,
        vanDerWaalsRadius: 1.95,
    },
    Pd: {
        name: 'Palladium',
        atomicNumber: 46,
        color: 0x69_85,
        vanDerWaalsRadius: 2.02,
    },
    Ag: {
        name: 'Silver',
        atomicNumber: 47,
        color: 0xc0_c0_c0,
        vanDerWaalsRadius: 1.72,
    },
    Cd: {
        name: 'Cadmium',
        atomicNumber: 48,
        color: 0xff_d9_8f,
        vanDerWaalsRadius: 1.58,
    },
    In: {
        name: 'Indium',
        atomicNumber: 49,
        color: 0xa6_75_73,
        vanDerWaalsRadius: 1.93,
    },
    Sn: {
        name: 'Tin',
        atomicNumber: 50,
        color: 0x66_80_80,
        vanDerWaalsRadius: 2.17,
    },
    Sb: {
        name: 'Antimony',
        atomicNumber: 51,
        color: 0x9e_63_b5,
        vanDerWaalsRadius: 2.06,
    },
    Te: {
        name: 'Tellurium',
        atomicNumber: 52,
        color: 0xd4_7a_00,
        vanDerWaalsRadius: 2.06,
    },
    I: {
        name: 'Iodine',
        atomicNumber: 53,
        color: 0x94_00_94,
        vanDerWaalsRadius: 1.98,
    },
    Xe: {
        name: 'Xenon',
        atomicNumber: 54,
        color: 0x42_9e_b0,
        vanDerWaalsRadius: 2.16,
    },
    Cs: {
        name: 'Cesium',
        atomicNumber: 55,
        color: 0x57_17_8f,
        vanDerWaalsRadius: 3.43,
    },
    Ba: {
        name: 'Barium',
        atomicNumber: 56,
        color: 0x00_c9_00,
        vanDerWaalsRadius: 2.68,
    },
    La: {
        name: 'Lanthanum',
        atomicNumber: 57,
        color: 0x70_d4_ff,
        vanDerWaalsRadius: 2.4,
    },
    Ce: {
        name: 'Cerium',
        atomicNumber: 58,
        color: 0xff_ff_c7,
        vanDerWaalsRadius: 2.35,
    },
    Pr: {
        name: 'Praseodymium',
        atomicNumber: 59,
        color: 0xd9_ff_c7,
        vanDerWaalsRadius: 2.39,
    },
    Nd: {
        name: 'Neodymium',
        atomicNumber: 60,
        color: 0xc7_ff_c7,
        vanDerWaalsRadius: 2.29,
    },
    Pm: {
        name: 'Promethium',
        atomicNumber: 61,
        color: 0xa3_ff_c7,
        vanDerWaalsRadius: 2.36,
    },
    Sm: {
        name: 'Samarium',
        atomicNumber: 62,
        color: 0x8f_ff_c7,
        vanDerWaalsRadius: 2.29,
    },
    Eu: {
        name: 'Europium',
        atomicNumber: 63,
        color: 0x61_ff_c7,
        vanDerWaalsRadius: 2.33,
    },
    Gd: {
        name: 'Gadolinium',
        atomicNumber: 64,
        color: 0x45_ff_c7,
        vanDerWaalsRadius: 2.37,
    },
    Tb: {
        name: 'Terbium',
        atomicNumber: 65,
        color: 0x30_ff_c7,
        vanDerWaalsRadius: 2.21,
    },
    Dy: {
        name: 'Dysprosium',
        atomicNumber: 66,
        color: 0x1f_ff_c7,
        vanDerWaalsRadius: 2.29,
    },
    Ho: {
        name: 'Holmium',
        atomicNumber: 67,
        color: 0x00_ff_9c,
        vanDerWaalsRadius: 2.16,
    },
    Er: {
        name: 'Erbium',
        atomicNumber: 68,
        color: 0x00_e6_75,
        vanDerWaalsRadius: 2.35,
    },
    Tm: {
        name: 'Thulium',
        atomicNumber: 69,
        color: 0x00_d4_52,
        vanDerWaalsRadius: 2.27,
    },
    Yb: {
        name: 'Ytterbium',
        atomicNumber: 70,
        color: 0x00_bf_38,
        vanDerWaalsRadius: 2.42,
    },
    Lu: {
        name: 'Lutetium',
        atomicNumber: 71,
        color: 0x00_ab_24,
        vanDerWaalsRadius: 2.21,
    },
    Hf: {
        name: 'Hafnium',
        atomicNumber: 72,
        color: 0x4d_c2_ff,
        vanDerWaalsRadius: 2.12,
    },
    Ta: {
        name: 'Tantalum',
        atomicNumber: 73,
        color: 0x4d_a6_ff,
        vanDerWaalsRadius: 2.17,
    },
    W: {
        name: 'Tungsten',
        atomicNumber: 74,
        color: 0x21_94_d6,
        vanDerWaalsRadius: 2.1,
    },
    Re: {
        name: 'Rhenium',
        atomicNumber: 75,
        color: 0x26_7d_ab,
        vanDerWaalsRadius: 2.17,
    },
    Os: {
        name: 'Osmium',
        atomicNumber: 76,
        color: 0x26_66_96,
        vanDerWaalsRadius: 2.16,
    },
    Ir: {
        name: 'Iridium',
        atomicNumber: 77,
        color: 0x17_54_87,
        vanDerWaalsRadius: 2.02,
    },
    Pt: {
        name: 'Platinum',
        atomicNumber: 78,
        color: 0xd0_d0_e0,
        vanDerWaalsRadius: 2.09,
    },
    Au: {
        name: 'Gold',
        atomicNumber: 79,
        color: 0xff_d1_23,
        vanDerWaalsRadius: 1.66,
    },
    Hg: {
        name: 'Mercury',
        atomicNumber: 80,
        color: 0xb8_b8_d0,
        vanDerWaalsRadius: 2.09,
    },
    Tl: {
        name: 'Thallium',
        atomicNumber: 81,
        color: 0xa6_54_4d,
        vanDerWaalsRadius: 1.96,
    },
    Pb: {
        name: 'Lead',
        atomicNumber: 82,
        color: 0x57_59_61,
        vanDerWaalsRadius: 2.02,
    },
    Bi: {
        name: 'Bismuth',
        atomicNumber: 83,
        color: 0x9e_4f_b5,
        vanDerWaalsRadius: 2.07,
    },
    Po: {
        name: 'Polonium',
        atomicNumber: 84,
        color: 0xab_5c_00,
        vanDerWaalsRadius: 1.97,
    },
    At: {
        name: 'Astatine',
        atomicNumber: 85,
        color: 0x75_4f_45,
        vanDerWaalsRadius: 2.02,
    },
    Rn: {
        name: 'Radon',
        atomicNumber: 86,
        color: 0x42_82_96,
        vanDerWaalsRadius: 2.2,
    },
    Fr: {
        name: 'Francium',
        atomicNumber: 87,
        color: 0x42_00_66,
        vanDerWaalsRadius: 3.48,
    },
    Ra: {
        name: 'Radium',
        atomicNumber: 88,
        color: 0x00_7d_00,
        vanDerWaalsRadius: 2.83,
    },
    Ac: {
        name: 'Actinium',
        atomicNumber: 89,
        color: 0x70_ab_fa,
        vanDerWaalsRadius: 2.6,
    },
    Th: {
        name: 'Thorium',
        atomicNumber: 90,
        color: 0x00_ba_ff,
        vanDerWaalsRadius: 2.37,
    },
    Pa: {
        name: 'Protactinium',
        atomicNumber: 91,
        color: 0x00_a1_ff,
        vanDerWaalsRadius: 2.43,
    },
    U: {
        name: 'Uranium',
        atomicNumber: 92,
        color: 0x00_8f_ff,
        vanDerWaalsRadius: 2.4,
    },
    Np: {
        name: 'Neptunium',
        atomicNumber: 93,
        color: 0x00_80_ff,
        vanDerWaalsRadius: 2.21,
    },
    Pu: {
        name: 'Plutonium',
        atomicNumber: 94,
        color: 0x00_6b_ff,
        vanDerWaalsRadius: 2.43,
    },
    Am: {
        name: 'Americium',
        atomicNumber: 95,
        color: 0x54_5c_f2,
        vanDerWaalsRadius: 2.44,
    },
    Cm: {
        name: 'Curium',
        atomicNumber: 96,
        color: 0x78_5c_e3,
        vanDerWaalsRadius: 2.45,
    },
    Bk: {
        name: 'Berkelium',
        atomicNumber: 97,
        color: 0x8a_4f_e3,
        vanDerWaalsRadius: 2.44,
    },
    Cf: {
        name: 'Californium',
        atomicNumber: 98,
        color: 0xa1_36_d4,
        vanDerWaalsRadius: 2.45,
    },
    Es: {
        name: 'Einsteinium',
        atomicNumber: 99,
        color: 0xb3_1f_d4,
        vanDerWaalsRadius: 2.45,
    },
    Fm: {
        name: 'Fermium',
        atomicNumber: 100,
        color: 0xb3_1f_ba,
    },
    Md: {
        name: 'Mendelevium',
        atomicNumber: 101,
        color: 0xb3_0d_a6,
    },
    No: {
        name: 'Nobelium',
        atomicNumber: 102,
        color: 0xbd_0d_87,
    },
    Lr: {
        name: 'Lawrencium',
        atomicNumber: 103,
        color: 0xc7_00_66,
    },
    Rf: {
        name: 'Rutherfordium',
        atomicNumber: 104,
        color: 0xcc_00_59,
    },
    Db: {
        name: 'Dubnium',
        atomicNumber: 105,
        color: 0xd1_00_4f,
    },
    Sg: {
        name: 'Seaborgium',
        atomicNumber: 106,
        color: 0xd9_00_45,
    },
    Bh: {
        name: 'Bohrium',
        atomicNumber: 107,
        color: 0xe0_00_38,
    },
    Hs: {
        name: 'Hassium',
        atomicNumber: 108,
        color: 0xe6_00_2e,
    },
    Mt: {
        name: 'Meitnerium',
        atomicNumber: 109,
        color: 0xeb_00_26,
    },
    Ds: {
        name: 'Darmstadtium',
        atomicNumber: 110,
    },
    Rg: {
        name: 'Roentgenium',
        atomicNumber: 111,
    },
    Cn: {
        name: 'Copernicium',
        atomicNumber: 112,
    },
    Nh: {
        name: 'Nihonium',
        atomicNumber: 113,
    },
    Fl: {
        name: 'Flerovium',
        atomicNumber: 114,
    },
    Mc: {
        name: 'Moscovium',
        atomicNumber: 115,
    },
    Lv: {
        name: 'Livermorium',
        atomicNumber: 116,
    },
    Ts: {
        name: 'Tennessine',
        atomicNumber: 117,
    },
    Og: {
        name: 'Oganesson',
        atomicNumber: 118,
    },
} as const satisfies Record<string, Omit<ChemicalElement, 'symbol'>>;

export const chemicalElements = mapObjectValues(
    rawElements,
    (chemicalElementSymbol, chemicalElement) => {
        return {
            ...chemicalElement,
            symbol: chemicalElementSymbol,
        };
    },
) satisfies Record<ChemicalElementSymbol, ChemicalElement> as AnyObject as {
    [S in ChemicalElementSymbol]: Readonly<(typeof rawElements)[S] & {symbol: S}>;
};

export type ChemicalElementSymbol = keyof typeof rawElements;

export const ChemicalElementSymbol = mapObjectValues(rawElements, (key) => key) satisfies Record<
    ChemicalElementSymbol,
    ChemicalElementSymbol
> as AnyObject as {
    [S in ChemicalElementSymbol]: S;
};
