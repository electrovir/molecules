import {type AnyObject, mapObjectValues, type PartialWithUndefined} from '@augment-vir/common';
// cspell:words darmstadtium roentgenium copernicium nihonium flerovium moscovium livermorium tennessine oganesson unreactive dubna niels lise nicolaus georgy flerov oganessian

export type ChemicalElement = {
    name: string;
    /**
     * Kokoro phonemes (misaki US notation) that `npm run build:pronunciations` speaks to make this
     * element's name clip, mostly from misaki's lexicon.
     */
    pronunciation: string;
    /** What kind of element it is and what makes its atoms special. */
    structureDescription: string;
    /** Where the element shows up in everyday life and what it does there. */
    realLifeDescription: string;
    atomicNumber: number;
    atomicMass: number;
    /**
     * Protons plus neutrons in the most abundant isotope, or for elements with no stable isotope,
     * the isotope `atomicMass` describes.
     */
    massNumber: number;
    /**
     * Ground state electron configuration in NIST's notation, such as `'[Ne] 3s1'`. Written out
     * rather than derived from the filling order, which elements like Cr and Cu break.
     */
    electronConfiguration: string;
    symbol: string;
} & PartialWithUndefined<{
    color: number;
    vanDerWaalsRadius: number;
}>;

const rawElements = {
    H: {
        name: 'Hydrogen',
        // cspell:disable-next-line
        pronunciation: 'hˈIdɹəʤᵊn',
        structureDescription:
            'The simplest atom: one proton and one electron, and usually no neutrons at all.',
        realLifeDescription:
            'Hydrogen is the most common element in the universe. Stars like the Sun shine by fusing it into helium.',
        atomicNumber: 1,
        atomicMass: 1.008,
        massNumber: 1,
        electronConfiguration: '1s1',
        color: 0xff_ff_ff,
        vanDerWaalsRadius: 1.2,
    },
    He: {
        name: 'Helium',
        // cspell:disable-next-line
        pronunciation: 'hˈiliəm',
        structureDescription:
            'A noble gas with a full outer shell of two electrons, so it almost never reacts with anything.',
        realLifeDescription:
            'Helium is lighter than air, so it lifts balloons and blimps. It is the second most common element in the universe.',
        atomicNumber: 2,
        atomicMass: 4.0026,
        massNumber: 4,
        electronConfiguration: '1s2',
        color: 0xd9_ff_ff,
        vanDerWaalsRadius: 1.4,
    },
    Li: {
        name: 'Lithium',
        // cspell:disable-next-line
        pronunciation: 'lˈɪθiəm',
        structureDescription:
            'An alkali metal with one outer electron that it gives away easily. It is the lightest metal of all.',
        realLifeDescription:
            'Lithium stores the energy in the rechargeable batteries inside phones, laptops, and electric cars.',
        atomicNumber: 3,
        atomicMass: 7,
        massNumber: 7,
        electronConfiguration: '[He] 2s1',
        color: 0xcc_80_ff,
        vanDerWaalsRadius: 1.82,
    },
    Be: {
        name: 'Beryllium',
        // cspell:disable-next-line
        pronunciation: 'bəɹˈɪliɪm',
        structureDescription: 'An alkaline earth metal that is very light but also very stiff.',
        realLifeDescription:
            'The James Webb Space Telescope has beryllium mirrors because beryllium keeps its shape in the deep cold of space.',
        atomicNumber: 4,
        atomicMass: 9.012183,
        massNumber: 9,
        electronConfiguration: '[He] 2s2',
        color: 0xc2_ff_00,
        vanDerWaalsRadius: 1.53,
    },
    B: {
        name: 'Boron',
        // cspell:disable-next-line
        pronunciation: 'bˈɔɹˌɑn',
        structureDescription:
            'A metalloid, partway between a metal and a nonmetal, with three outer electrons.',
        realLifeDescription:
            'Boron keeps oven-safe glass from cracking when it heats up, and borax, a boron compound, is used to make slime.',
        atomicNumber: 5,
        atomicMass: 10.81,
        massNumber: 11,
        electronConfiguration: '[He] 2s2 2p1',
        color: 0xff_b5_b5,
        vanDerWaalsRadius: 1.92,
    },
    C: {
        name: 'Carbon',
        // cspell:disable-next-line
        pronunciation: 'kˈɑɹbən',
        structureDescription:
            'A nonmetal with four outer electrons, so it can bond to four other atoms and build long chains and rings.',
        realLifeDescription:
            'Carbon is the backbone of every living thing. Pure carbon can be soft pencil graphite or hard, sparkly diamond.',
        atomicNumber: 6,
        atomicMass: 12.011,
        massNumber: 12,
        electronConfiguration: '[He] 2s2 2p2',
        color: 0x90_90_90,
        vanDerWaalsRadius: 1.7,
    },
    N: {
        name: 'Nitrogen',
        // cspell:disable-next-line
        pronunciation: 'nˈItɹəʤᵊn',
        structureDescription: 'A nonmetal whose atoms pair up with very strong triple bonds.',
        realLifeDescription:
            "Nitrogen makes up about 78% of the air you breathe. Plants need it to grow, which is why it's in fertilizer.",
        atomicNumber: 7,
        atomicMass: 14.007,
        massNumber: 14,
        electronConfiguration: '[He] 2s2 2p3',
        color: 0x30_50_f8,
        vanDerWaalsRadius: 1.55,
    },
    O: {
        name: 'Oxygen',
        // cspell:disable-next-line
        pronunciation: 'ˈɑksəʤᵊn',
        structureDescription:
            'A nonmetal that eagerly grabs two more electrons, which makes it very reactive.',
        realLifeDescription:
            "Oxygen is the gas you breathe to stay alive. It is also the most common element in Earth's crust, locked up in rocks and sand.",
        atomicNumber: 8,
        atomicMass: 15.999,
        massNumber: 16,
        electronConfiguration: '[He] 2s2 2p4',
        color: 0xff_0d_0d,
        vanDerWaalsRadius: 1.52,
    },
    F: {
        name: 'Fluorine',
        // cspell:disable-next-line
        pronunciation: 'flˈOɹin',
        structureDescription:
            'A halogen, and the most electron-hungry element of all, so it reacts with almost everything.',
        realLifeDescription:
            'Fluoride in toothpaste helps keep teeth strong. Fluorine is also in the nonstick coating of some frying pans.',
        atomicNumber: 9,
        atomicMass: 18.99840316,
        massNumber: 19,
        electronConfiguration: '[He] 2s2 2p5',
        color: 0x90_e0_50,
        vanDerWaalsRadius: 1.35,
    },
    Ne: {
        name: 'Neon',
        // cspell:disable-next-line
        pronunciation: 'nˈiˌɑn',
        structureDescription:
            "A noble gas with a completely full outer shell, so it doesn't react.",
        realLifeDescription:
            'Neon glows bright red-orange when electricity runs through it, which is how classic neon signs light up.',
        atomicNumber: 10,
        atomicMass: 20.18,
        massNumber: 20,
        electronConfiguration: '[He] 2s2 2p6',
        color: 0xb3_e3_f5,
        vanDerWaalsRadius: 1.54,
    },
    Na: {
        name: 'Sodium',
        // cspell:disable-next-line
        pronunciation: 'sˈOdˌiɪm',
        structureDescription:
            'An alkali metal so soft you could cut it with a butter knife. It fizzes and reacts in water.',
        realLifeDescription:
            'Sodium joins with chlorine to make table salt. Sodium streetlights glow a warm yellow-orange.',
        atomicNumber: 11,
        atomicMass: 22.9897693,
        massNumber: 23,
        electronConfiguration: '[Ne] 3s1',
        color: 0xab_5c_f2,
        vanDerWaalsRadius: 2.27,
    },
    Mg: {
        name: 'Magnesium',
        // cspell:disable-next-line
        pronunciation: 'mæɡnˈiziəm',
        structureDescription: 'An alkaline earth metal that gives away its two outer electrons.',
        realLifeDescription:
            'Magnesium burns with a dazzling white light in fireworks and sparklers. Plants use it at the center of chlorophyll.',
        atomicNumber: 12,
        atomicMass: 24.305,
        massNumber: 24,
        electronConfiguration: '[Ne] 3s2',
        color: 0x8a_ff_00,
        vanDerWaalsRadius: 1.73,
    },
    Al: {
        name: 'Aluminum',
        // cspell:disable-next-line
        pronunciation: 'əlˈumənəm',
        structureDescription: 'A light, silvery metal with three outer electrons.',
        realLifeDescription:
            "Aluminum makes soda cans, foil, and airplane bodies. It is the most common metal in Earth's crust.",
        atomicNumber: 13,
        atomicMass: 26.981538,
        massNumber: 27,
        electronConfiguration: '[Ne] 3s2 3p1',
        color: 0xbf_a6_a6,
        vanDerWaalsRadius: 1.84,
    },
    Si: {
        name: 'Silicon',
        // cspell:disable-next-line
        pronunciation: 'sˈɪləkˌɑn',
        structureDescription:
            'A metalloid with four outer electrons, just like carbon right above it.',
        realLifeDescription:
            'Silicon is in sand and glass, and it is the material computer chips are made from.',
        atomicNumber: 14,
        atomicMass: 28.085,
        massNumber: 28,
        electronConfiguration: '[Ne] 3s2 3p2',
        color: 0xf0_c8_a0,
        vanDerWaalsRadius: 2.1,
    },
    P: {
        name: 'Phosphorus',
        // cspell:disable-next-line
        pronunciation: 'fˈɑsfˌəɹəs',
        structureDescription:
            'A nonmetal that comes in white, red, and black forms with very different properties.',
        realLifeDescription:
            'Red phosphorus is on the striking strip of matchboxes. Your bones and DNA contain phosphorus too.',
        atomicNumber: 15,
        atomicMass: 30.973762,
        massNumber: 31,
        electronConfiguration: '[Ne] 3s2 3p3',
        color: 0xff_80_00,
        vanDerWaalsRadius: 1.8,
    },
    S: {
        name: 'Sulfur',
        // cspell:disable-next-line
        pronunciation: 'sˈʌlfəɹ',
        structureDescription: 'A yellow nonmetal whose atoms link up into rings of eight.',
        realLifeDescription:
            'Sulfur compounds cause the smell of rotten eggs and skunk spray. Volcanoes give off lots of it.',
        atomicNumber: 16,
        atomicMass: 32.07,
        massNumber: 32,
        electronConfiguration: '[Ne] 3s2 3p4',
        color: 0xff_ff_30,
        vanDerWaalsRadius: 1.8,
    },
    Cl: {
        name: 'Chlorine',
        // cspell:disable-next-line
        pronunciation: 'klˈɔɹˌin',
        structureDescription:
            'A halogen that is one electron short of a full shell, so it grabs electrons readily.',
        realLifeDescription:
            'Chlorine keeps swimming pools clean by killing germs. Together with sodium it makes table salt.',
        atomicNumber: 17,
        atomicMass: 35.45,
        massNumber: 35,
        electronConfiguration: '[Ne] 3s2 3p5',
        color: 0x1f_f0_1f,
        vanDerWaalsRadius: 1.75,
    },
    Ar: {
        name: 'Argon',
        // cspell:disable-next-line
        pronunciation: 'ˈɑɹɡˌɑn',
        structureDescription: 'A noble gas with a full outer shell, so it stays unreactive.',
        realLifeDescription:
            "Argon is the third most common gas in the air. It fills some light bulbs so the glowing wire doesn't burn up.",
        atomicNumber: 18,
        atomicMass: 39.9,
        massNumber: 40,
        electronConfiguration: '[Ne] 3s2 3p6',
        color: 0x80_d1_e3,
        vanDerWaalsRadius: 1.88,
    },
    K: {
        name: 'Potassium',
        // cspell:disable-next-line
        pronunciation: 'pətˈæsiəm',
        structureDescription:
            'An alkali metal with one outer electron, even more reactive than sodium.',
        realLifeDescription:
            'Bananas are famous for their potassium. Your nerves and muscles need it to send signals.',
        atomicNumber: 19,
        atomicMass: 39.0983,
        massNumber: 39,
        electronConfiguration: '[Ar] 4s1',
        color: 0x8f_40_d4,
        vanDerWaalsRadius: 2.75,
    },
    Ca: {
        name: 'Calcium',
        // cspell:disable-next-line
        pronunciation: 'kˈælsiəm',
        structureDescription: 'An alkaline earth metal that gives up two outer electrons.',
        realLifeDescription:
            'Calcium makes your bones and teeth hard. Seashells, chalk, and marble are mostly made with calcium.',
        atomicNumber: 20,
        atomicMass: 40.08,
        massNumber: 40,
        electronConfiguration: '[Ar] 4s2',
        color: 0x3d_ff_00,
        vanDerWaalsRadius: 2.31,
    },
    Sc: {
        name: 'Scandium',
        // cspell:disable-next-line
        pronunciation: 'skˈændiəm',
        structureDescription: 'The first transition metal: light, soft, and silvery.',
        realLifeDescription:
            'A little scandium mixed into aluminum makes strong, light frames for bikes and baseball bats.',
        atomicNumber: 21,
        atomicMass: 44.95591,
        massNumber: 45,
        electronConfiguration: '[Ar] 3d1 4s2',
        color: 0xe6_e6_e6,
        vanDerWaalsRadius: 2.11,
    },
    Ti: {
        name: 'Titanium',
        // cspell:disable-next-line
        pronunciation: 'tˌItˈAniəm',
        structureDescription: 'A transition metal that is as strong as steel but much lighter.',
        realLifeDescription:
            "Titanium doesn't rust, so it's used in airplanes, spacecraft, and artificial joints. Titanium dioxide makes white paint white.",
        atomicNumber: 22,
        atomicMass: 47.867,
        massNumber: 48,
        electronConfiguration: '[Ar] 3d2 4s2',
        color: 0xbf_c2_c7,
        vanDerWaalsRadius: 1.87,
    },
    V: {
        name: 'Vanadium',
        // cspell:disable-next-line
        pronunciation: 'vənˈAdiɪm',
        structureDescription: 'A hard transition metal whose compounds come in many bright colors.',
        realLifeDescription: 'Mixing a little vanadium into steel makes tough tools like wrenches.',
        atomicNumber: 23,
        atomicMass: 50.9415,
        massNumber: 51,
        electronConfiguration: '[Ar] 3d3 4s2',
        color: 0xa6_a6_ab,
        vanDerWaalsRadius: 1.79,
    },
    Cr: {
        name: 'Chromium',
        // cspell:disable-next-line
        pronunciation: 'kɹˈOmiəm',
        structureDescription: 'A hard, shiny transition metal that resists rust.',
        realLifeDescription:
            'Chrome plating makes faucets and car parts shiny, and chromium keeps stainless steel from rusting. Rubies get their red color from it.',
        atomicNumber: 24,
        atomicMass: 51.996,
        massNumber: 52,
        electronConfiguration: '[Ar] 3d5 4s1',
        color: 0x8a_99_c7,
        vanDerWaalsRadius: 1.89,
    },
    Mn: {
        name: 'Manganese',
        // cspell:disable-next-line
        pronunciation: 'mˈæŋɡˌəniz',
        structureDescription:
            'A brittle transition metal that can give up as many as seven electrons.',
        realLifeDescription:
            'Manganese makes steel stronger, and it is in the everyday AA batteries inside remotes and toys.',
        atomicNumber: 25,
        atomicMass: 54.93804,
        massNumber: 55,
        electronConfiguration: '[Ar] 3d5 4s2',
        color: 0x9c_7a_c7,
        vanDerWaalsRadius: 1.97,
    },
    Fe: {
        name: 'Iron',
        // cspell:disable-next-line
        pronunciation: 'ˈIəɹn',
        structureDescription:
            'A magnetic transition metal. Its nucleus is one of the most tightly held together of all.',
        realLifeDescription:
            "Iron is the main ingredient in steel. It carries oxygen in your blood, and Earth's core is mostly iron.",
        atomicNumber: 26,
        atomicMass: 55.84,
        massNumber: 56,
        electronConfiguration: '[Ar] 3d6 4s2',
        color: 0xe0_66_33,
        vanDerWaalsRadius: 1.94,
    },
    Co: {
        name: 'Cobalt',
        // cspell:disable-next-line
        pronunciation: 'kˈObˌɔlt',
        structureDescription: 'A hard, magnetic transition metal.',
        realLifeDescription:
            "Cobalt gives glass and pottery a deep blue color, and it's in many rechargeable batteries.",
        atomicNumber: 27,
        atomicMass: 58.93319,
        massNumber: 59,
        electronConfiguration: '[Ar] 3d7 4s2',
        color: 0xf0_90_a0,
        vanDerWaalsRadius: 1.92,
    },
    Ni: {
        name: 'Nickel',
        // cspell:disable-next-line
        pronunciation: 'nˈɪkᵊl',
        structureDescription: 'A magnetic transition metal that resists rust.',
        realLifeDescription:
            "Nickel is in stainless steel and coins. Earth's core is a mix of iron and nickel.",
        atomicNumber: 28,
        atomicMass: 58.693,
        massNumber: 58,
        electronConfiguration: '[Ar] 3d8 4s2',
        color: 0x50_d0_50,
        vanDerWaalsRadius: 1.63,
    },
    Cu: {
        name: 'Copper',
        // cspell:disable-next-line
        pronunciation: 'kˈɑpəɹ',
        structureDescription:
            'A transition metal that carries electricity and heat extremely well.',
        realLifeDescription:
            'Copper wires carry electricity through homes. The Statue of Liberty is made of copper that turned green over time.',
        atomicNumber: 29,
        atomicMass: 63.55,
        massNumber: 63,
        electronConfiguration: '[Ar] 3d10 4s1',
        color: 0xc8_80_33,
        vanDerWaalsRadius: 1.4,
    },
    Zn: {
        name: 'Zinc',
        // cspell:disable-next-line
        pronunciation: 'zˈɪŋk',
        structureDescription:
            'A bluish-gray metal whose inner electron shells are completely full.',
        realLifeDescription:
            'Zinc coats steel to protect it from rust, and mixing it with copper makes brass.',
        atomicNumber: 30,
        atomicMass: 65.4,
        massNumber: 64,
        electronConfiguration: '[Ar] 3d10 4s2',
        color: 0x7d_80_b0,
        vanDerWaalsRadius: 1.39,
    },
    Ga: {
        name: 'Gallium',
        // cspell:disable-next-line
        pronunciation: 'ɡˈæliəm',
        structureDescription: 'A metal that melts just below 30 °C, so it can melt in your hand.',
        realLifeDescription: 'Gallium is in the LEDs that light up many screens and flashlights.',
        atomicNumber: 31,
        atomicMass: 69.723,
        massNumber: 69,
        electronConfiguration: '[Ar] 3d10 4s2 4p1',
        color: 0xc2_8f_8f,
        vanDerWaalsRadius: 1.87,
    },
    Ge: {
        name: 'Germanium',
        // cspell:disable-next-line
        pronunciation: 'ʤəɹmˈAniəm',
        structureDescription: 'A metalloid that sits between silicon and tin.',
        realLifeDescription:
            'Germanium was in some of the first transistors, and it helps fiber-optic cables carry light.',
        atomicNumber: 32,
        atomicMass: 72.63,
        massNumber: 74,
        electronConfiguration: '[Ar] 3d10 4s2 4p2',
        color: 0x66_8f_8f,
        vanDerWaalsRadius: 2.11,
    },
    As: {
        name: 'Arsenic',
        // cspell:disable-next-line
        pronunciation: 'ˈɑɹsᵊnɪk',
        structureDescription: 'A metalloid that is poisonous to living things.',
        realLifeDescription:
            'Tiny amounts of arsenic are used in some computer chips and in the lasers inside DVD players.',
        atomicNumber: 33,
        atomicMass: 74.92159,
        massNumber: 75,
        electronConfiguration: '[Ar] 3d10 4s2 4p3',
        color: 0xbd_80_e3,
        vanDerWaalsRadius: 1.85,
    },
    Se: {
        name: 'Selenium',
        // cspell:disable-next-line
        pronunciation: 'səlˈiniəm',
        structureDescription: 'A nonmetal that carries electricity better when light shines on it.',
        realLifeDescription:
            'Old photocopiers used selenium, and your body needs a tiny bit of it to stay healthy.',
        atomicNumber: 34,
        atomicMass: 78.97,
        massNumber: 80,
        electronConfiguration: '[Ar] 3d10 4s2 4p4',
        color: 0xff_a1_00,
        vanDerWaalsRadius: 1.9,
    },
    Br: {
        name: 'Bromine',
        // cspell:disable-next-line
        pronunciation: 'bɹˈOmˌin',
        structureDescription:
            'A halogen, and one of only two elements that are liquid at room temperature.',
        realLifeDescription:
            'Bromine is a dark red-brown liquid. It is used to keep hot tubs clean and to make things harder to set on fire.',
        atomicNumber: 35,
        atomicMass: 79.9,
        massNumber: 79,
        electronConfiguration: '[Ar] 3d10 4s2 4p5',
        color: 0xa6_29_29,
        vanDerWaalsRadius: 1.83,
    },
    Kr: {
        name: 'Krypton',
        // cspell:disable-next-line
        pronunciation: 'kɹˈɪptˌɑn',
        structureDescription: 'A noble gas with a full outer shell.',
        realLifeDescription:
            "Krypton glows bright white in some camera flashes. Superman's home planet borrowed its name.",
        atomicNumber: 36,
        atomicMass: 83.8,
        massNumber: 84,
        electronConfiguration: '[Ar] 3d10 4s2 4p6',
        color: 0x5c_b8_d1,
        vanDerWaalsRadius: 2.02,
    },
    Rb: {
        name: 'Rubidium',
        // cspell:disable-next-line
        pronunciation: 'ɹubˈɪdiəm',
        structureDescription: 'A very reactive alkali metal that would melt on a very hot day.',
        realLifeDescription:
            'Rubidium atoms keep time in some atomic clocks, including ones on GPS satellites.',
        atomicNumber: 37,
        atomicMass: 85.468,
        massNumber: 85,
        electronConfiguration: '[Kr] 5s1',
        color: 0x70_2e_b0,
        vanDerWaalsRadius: 3.03,
    },
    Sr: {
        name: 'Strontium',
        // cspell:disable-next-line
        pronunciation: 'stɹˈɑnʧiəm',
        structureDescription: 'An alkaline earth metal that reacts readily with water.',
        realLifeDescription: 'Strontium gives fireworks their bright red color.',
        atomicNumber: 38,
        atomicMass: 87.62,
        massNumber: 88,
        electronConfiguration: '[Kr] 5s2',
        color: 0x00_ff_00,
        vanDerWaalsRadius: 2.49,
    },
    Y: {
        name: 'Yttrium',
        // cspell:disable-next-line
        pronunciation: 'ˈɪtɹiəm',
        structureDescription:
            'A silvery transition metal that acts a lot like the rare earth metals.',
        realLifeDescription:
            'Yttrium helps make the red glow in old TV screens and is used in some superconductors.',
        atomicNumber: 39,
        atomicMass: 88.90584,
        massNumber: 89,
        electronConfiguration: '[Kr] 4d1 5s2',
        color: 0x94_ff_ff,
        vanDerWaalsRadius: 2.19,
    },
    Zr: {
        name: 'Zirconium',
        // cspell:disable-next-line
        pronunciation: 'zəɹkˈOniəm',
        structureDescription: 'A strong transition metal that resists rust and heat.',
        realLifeDescription:
            'Zirconium is used inside nuclear reactors, and cubic zirconia is a sparkly diamond look-alike.',
        atomicNumber: 40,
        atomicMass: 91.22,
        massNumber: 90,
        electronConfiguration: '[Kr] 4d2 5s2',
        color: 0x94_e0_e0,
        vanDerWaalsRadius: 1.86,
    },
    Nb: {
        name: 'Niobium',
        // cspell:disable-next-line
        pronunciation: 'nI ˈObɪəm',
        structureDescription:
            'A soft transition metal that becomes a superconductor when it is very cold.',
        realLifeDescription: 'Niobium magnets help MRI machines see inside the body.',
        atomicNumber: 41,
        atomicMass: 92.90637,
        massNumber: 93,
        electronConfiguration: '[Kr] 4d4 5s1',
        color: 0x73_c2_c9,
        vanDerWaalsRadius: 2.07,
    },
    Mo: {
        name: 'Molybdenum',
        // cspell:disable-next-line
        pronunciation: 'məlˈɪbdənəm',
        structureDescription:
            'A transition metal with one of the highest melting points of any element.',
        realLifeDescription:
            'Molybdenum makes steel tougher for tools and engines, and plants need a pinch of it to grow.',
        atomicNumber: 42,
        atomicMass: 95.95,
        massNumber: 98,
        electronConfiguration: '[Kr] 4d5 5s1',
        color: 0x54_b5_b5,
        vanDerWaalsRadius: 2.09,
    },
    Tc: {
        name: 'Technetium',
        // cspell:disable-next-line
        pronunciation: 'tɛknˈiʃiəm',
        structureDescription:
            'The lightest element with no stable form, so all of it is radioactive.',
        realLifeDescription:
            'Technetium is made in labs. Doctors use tiny amounts to take pictures of bones and organs.',
        atomicNumber: 43,
        atomicMass: 96.90636,
        massNumber: 97,
        electronConfiguration: '[Kr] 4d5 5s2',
        color: 0x3b_9e_9e,
        vanDerWaalsRadius: 2.09,
    },
    Ru: {
        name: 'Ruthenium',
        // cspell:disable-next-line
        pronunciation: 'ɹuθˈiniəm',
        structureDescription: 'A hard, rare metal in the platinum family.',
        realLifeDescription:
            'Ruthenium makes electrical contacts last longer and helps computer hard drives store more data.',
        atomicNumber: 44,
        atomicMass: 101.1,
        massNumber: 102,
        electronConfiguration: '[Kr] 4d7 5s1',
        color: 0x24_8f_8f,
        vanDerWaalsRadius: 2.07,
    },
    Rh: {
        name: 'Rhodium',
        // cspell:disable-next-line
        pronunciation: 'ɹˈOdiəm',
        structureDescription: 'A rare, shiny metal in the platinum family.',
        realLifeDescription:
            'Rhodium in car exhaust systems turns harmful gases into safer ones. It is one of the most expensive metals.',
        atomicNumber: 45,
        atomicMass: 102.9055,
        massNumber: 103,
        electronConfiguration: '[Kr] 4d8 5s1',
        color: 0x0a_7d_8c,
        vanDerWaalsRadius: 1.95,
    },
    Pd: {
        name: 'Palladium',
        // cspell:disable-next-line
        pronunciation: 'pəlˈAdiəm',
        structureDescription:
            'A metal in the platinum family that can soak up lots of hydrogen gas.',
        realLifeDescription: 'Palladium cleans car exhaust and is used in electronics and jewelry.',
        atomicNumber: 46,
        atomicMass: 106.42,
        massNumber: 106,
        electronConfiguration: '[Kr] 4d10',
        color: 0x69_85,
        vanDerWaalsRadius: 2.02,
    },
    Ag: {
        name: 'Silver',
        // cspell:disable-next-line
        pronunciation: 'sˈɪlvəɹ',
        structureDescription:
            'A transition metal that carries electricity better than any other element.',
        realLifeDescription:
            'Silver makes jewelry, mirrors, and coins, and it naturally kills germs.',
        atomicNumber: 47,
        atomicMass: 107.868,
        massNumber: 107,
        electronConfiguration: '[Kr] 4d10 5s1',
        color: 0xc0_c0_c0,
        vanDerWaalsRadius: 1.72,
    },
    Cd: {
        name: 'Cadmium',
        // cspell:disable-next-line
        pronunciation: 'kˈædmiəm',
        structureDescription: 'A soft, bluish metal that is toxic.',
        realLifeDescription:
            'Cadmium was used in rechargeable batteries and in bright yellow and red paints.',
        atomicNumber: 48,
        atomicMass: 112.41,
        massNumber: 114,
        electronConfiguration: '[Kr] 4d10 5s2',
        color: 0xff_d9_8f,
        vanDerWaalsRadius: 1.58,
    },
    In: {
        name: 'Indium',
        // cspell:disable-next-line
        pronunciation: 'ˈɪndiəm',
        structureDescription: 'A metal so soft you can scratch it with a fingernail.',
        realLifeDescription:
            'Indium tin oxide is a see-through coating that makes touchscreens work.',
        atomicNumber: 49,
        atomicMass: 114.818,
        massNumber: 115,
        electronConfiguration: '[Kr] 4d10 5s2 5p1',
        color: 0xa6_75_73,
        vanDerWaalsRadius: 1.93,
    },
    Sn: {
        name: 'Tin',
        // cspell:disable-next-line
        pronunciation: 'tˈɪn',
        structureDescription:
            'A soft metal that makes a crackling sound called "tin cry" when you bend it.',
        realLifeDescription:
            "Mixing tin with copper makes bronze, and tin coats steel cans so they don't rust.",
        atomicNumber: 50,
        atomicMass: 118.71,
        massNumber: 120,
        electronConfiguration: '[Kr] 4d10 5s2 5p2',
        color: 0x66_80_80,
        vanDerWaalsRadius: 2.17,
    },
    Sb: {
        name: 'Antimony',
        // cspell:disable-next-line
        pronunciation: 'ˈæntəmˌOni',
        structureDescription: 'A shiny, brittle metalloid.',
        realLifeDescription:
            'Antimony helps make plastics and fabrics fire resistant. Ancient Egyptians used it in eye makeup.',
        atomicNumber: 51,
        atomicMass: 121.76,
        massNumber: 121,
        electronConfiguration: '[Kr] 4d10 5s2 5p3',
        color: 0x9e_63_b5,
        vanDerWaalsRadius: 2.06,
    },
    Te: {
        name: 'Tellurium',
        // cspell:disable-next-line
        pronunciation: 'təlˈʊɹiəm',
        structureDescription: "A brittle metalloid that is rare in Earth's crust.",
        realLifeDescription: 'Tellurium is in some solar panels and rewritable DVDs.',
        atomicNumber: 52,
        atomicMass: 127.6,
        massNumber: 130,
        electronConfiguration: '[Kr] 4d10 5s2 5p4',
        color: 0xd4_7a_00,
        vanDerWaalsRadius: 2.06,
    },
    I: {
        name: 'Iodine',
        // cspell:disable-next-line
        pronunciation: 'ˈI ədIn',
        structureDescription: 'A halogen that forms shiny purple-black crystals.',
        realLifeDescription:
            "Iodine is added to table salt to keep people healthy, and it's used to clean cuts.",
        atomicNumber: 53,
        atomicMass: 126.9045,
        massNumber: 127,
        electronConfiguration: '[Kr] 4d10 5s2 5p5',
        color: 0x94_00_94,
        vanDerWaalsRadius: 1.98,
    },
    Xe: {
        name: 'Xenon',
        // cspell:disable-next-line
        pronunciation: 'zˈinˌɑn',
        structureDescription: 'A heavy noble gas that, surprisingly, can form a few compounds.',
        realLifeDescription:
            'Xenon lights up some bright car headlights and powers ion engines on spacecraft.',
        atomicNumber: 54,
        atomicMass: 131.29,
        massNumber: 132,
        electronConfiguration: '[Kr] 4d10 5s2 5p6',
        color: 0x42_9e_b0,
        vanDerWaalsRadius: 2.16,
    },
    Cs: {
        name: 'Cesium',
        // cspell:disable-next-line
        pronunciation: 'sˈiziəm',
        structureDescription: 'The most reactive metal. It melts just above room temperature.',
        realLifeDescription: 'Cesium atomic clocks define exactly how long one second is.',
        atomicNumber: 55,
        atomicMass: 132.905452,
        massNumber: 133,
        electronConfiguration: '[Xe] 6s1',
        color: 0x57_17_8f,
        vanDerWaalsRadius: 3.43,
    },
    Ba: {
        name: 'Barium',
        // cspell:disable-next-line
        pronunciation: 'bˈɛɹiəm',
        structureDescription: 'A soft alkaline earth metal.',
        realLifeDescription:
            'Barium makes green fireworks. Doctors use a barium drink to see the stomach on X-rays.',
        atomicNumber: 56,
        atomicMass: 137.33,
        massNumber: 138,
        electronConfiguration: '[Xe] 6s2',
        color: 0x00_c9_00,
        vanDerWaalsRadius: 2.68,
    },
    La: {
        name: 'Lanthanum',
        // cspell:disable-next-line
        pronunciation: 'lˈænθənəm',
        structureDescription: 'The first of the lanthanides, also called the rare earth metals.',
        realLifeDescription:
            'Lanthanum is in camera lenses and in the batteries of many hybrid cars.',
        atomicNumber: 57,
        atomicMass: 138.9055,
        massNumber: 139,
        electronConfiguration: '[Xe] 5d1 6s2',
        color: 0x70_d4_ff,
        vanDerWaalsRadius: 2.4,
    },
    Ce: {
        name: 'Cerium',
        // cspell:disable-next-line
        pronunciation: 'sˈɪɹiəm',
        structureDescription: 'The most common of the rare earth metals.',
        realLifeDescription:
            'Cerium makes the sparks in camping fire starters, and it helps polish glass.',
        atomicNumber: 58,
        atomicMass: 140.116,
        massNumber: 140,
        electronConfiguration: '[Xe] 4f1 5d1 6s2',
        color: 0xff_ff_c7,
        vanDerWaalsRadius: 2.35,
    },
    Pr: {
        name: 'Praseodymium',
        // cspell:disable-next-line
        pronunciation: 'pɹˌAziOdˈɪmiəm',
        structureDescription: 'A soft rare earth metal.',
        realLifeDescription:
            "Praseodymium gives glass a yellow-green color and is in goggles that protect welders' eyes.",
        atomicNumber: 59,
        atomicMass: 140.90766,
        massNumber: 141,
        electronConfiguration: '[Xe] 4f3 6s2',
        color: 0xd9_ff_c7,
        vanDerWaalsRadius: 2.39,
    },
    Nd: {
        name: 'Neodymium',
        // cspell:disable-next-line
        pronunciation: 'nˌiOdˈɪmiəm',
        structureDescription: 'A rare earth metal that makes the strongest permanent magnets.',
        realLifeDescription:
            'Neodymium magnets are in headphones, electric cars, and wind turbines.',
        atomicNumber: 60,
        atomicMass: 144.24,
        massNumber: 142,
        electronConfiguration: '[Xe] 4f4 6s2',
        color: 0xc7_ff_c7,
        vanDerWaalsRadius: 2.29,
    },
    Pm: {
        name: 'Promethium',
        // cspell:disable-next-line
        pronunciation: 'pɹOmˈiθiəm',
        structureDescription:
            'A rare earth element with no stable form, so all of it is radioactive.',
        realLifeDescription:
            'Promethium is extremely rare in nature. It has been used in glowing paint and tiny long-lasting batteries.',
        atomicNumber: 61,
        atomicMass: 144.91276,
        massNumber: 145,
        electronConfiguration: '[Xe] 4f5 6s2',
        color: 0xa3_ff_c7,
        vanDerWaalsRadius: 2.36,
    },
    Sm: {
        name: 'Samarium',
        // cspell:disable-next-line
        pronunciation: 'səmˈɛɹiəm',
        structureDescription: 'A hard, silvery rare earth metal.',
        realLifeDescription:
            'Samarium makes powerful magnets that keep working even when they get hot, like in guitar pickups and motors.',
        atomicNumber: 62,
        atomicMass: 150.4,
        massNumber: 152,
        electronConfiguration: '[Xe] 4f6 6s2',
        color: 0x8f_ff_c7,
        vanDerWaalsRadius: 2.29,
    },
    Eu: {
        name: 'Europium',
        // cspell:disable-next-line
        pronunciation: 'jʊɹˈOpiəm',
        structureDescription: 'The most reactive of the rare earth metals.',
        realLifeDescription:
            'Europium glows red and blue in screens. It also makes euro bills glow under UV light, to catch fakes.',
        atomicNumber: 63,
        atomicMass: 151.964,
        massNumber: 153,
        electronConfiguration: '[Xe] 4f7 6s2',
        color: 0x61_ff_c7,
        vanDerWaalsRadius: 2.33,
    },
    Gd: {
        name: 'Gadolinium',
        // cspell:disable-next-line
        pronunciation: 'ɡˌædˌəlˈɪnˌiəm',
        structureDescription: "A rare earth metal that is magnetic when it's cool.",
        realLifeDescription: 'Gadolinium helps doctors get clearer MRI pictures.',
        atomicNumber: 64,
        atomicMass: 157.25,
        massNumber: 158,
        electronConfiguration: '[Xe] 4f7 5d1 6s2',
        color: 0x45_ff_c7,
        vanDerWaalsRadius: 2.37,
    },
    Tb: {
        name: 'Terbium',
        // cspell:disable-next-line
        pronunciation: 'tˈɜɹbiəm',
        structureDescription: 'A soft rare earth metal.',
        realLifeDescription: 'Terbium makes the green glow in screens and some light bulbs.',
        atomicNumber: 65,
        atomicMass: 158.92535,
        massNumber: 159,
        electronConfiguration: '[Xe] 4f9 6s2',
        color: 0x30_ff_c7,
        vanDerWaalsRadius: 2.21,
    },
    Dy: {
        name: 'Dysprosium',
        // cspell:disable-next-line
        pronunciation: 'dəspɹˈOziəm',
        structureDescription:
            'A rare earth metal whose name comes from the Greek for "hard to get".',
        realLifeDescription:
            'Dysprosium keeps the magnets in electric car motors strong when they get hot.',
        atomicNumber: 66,
        atomicMass: 162.5,
        massNumber: 164,
        electronConfiguration: '[Xe] 4f10 6s2',
        color: 0x1f_ff_c7,
        vanDerWaalsRadius: 2.29,
    },
    Ho: {
        name: 'Holmium',
        // cspell:disable-next-line
        pronunciation: 'hˈOlmˌiəm',
        structureDescription: 'The element with the strongest magnetic pull of all.',
        realLifeDescription:
            'Holmium is used in very strong magnets and in lasers that doctors use for surgery.',
        atomicNumber: 67,
        atomicMass: 164.93033,
        massNumber: 165,
        electronConfiguration: '[Xe] 4f11 6s2',
        color: 0x00_ff_9c,
        vanDerWaalsRadius: 2.16,
    },
    Er: {
        name: 'Erbium',
        // cspell:disable-next-line
        pronunciation: 'ˈɜɹbiəm',
        structureDescription: 'A soft, silvery rare earth metal.',
        realLifeDescription:
            'Erbium boosts the light signals in fiber-optic internet cables, and it tints glass pink.',
        atomicNumber: 68,
        atomicMass: 167.26,
        massNumber: 166,
        electronConfiguration: '[Xe] 4f12 6s2',
        color: 0x00_e6_75,
        vanDerWaalsRadius: 2.35,
    },
    Tm: {
        name: 'Thulium',
        // cspell:disable-next-line
        pronunciation: 'θˈuliəm',
        structureDescription: 'One of the rarest of the rare earth metals.',
        realLifeDescription: 'Thulium is used in portable X-ray machines and some lasers.',
        atomicNumber: 69,
        atomicMass: 168.93422,
        massNumber: 169,
        electronConfiguration: '[Xe] 4f13 6s2',
        color: 0x00_d4_52,
        vanDerWaalsRadius: 2.27,
    },
    Yb: {
        name: 'Ytterbium',
        // cspell:disable-next-line
        pronunciation: 'ɪtˈɜɹbiəm',
        structureDescription: 'A soft rare earth metal.',
        realLifeDescription:
            'Ytterbium atoms tick inside some of the most precise atomic clocks ever made.',
        atomicNumber: 70,
        atomicMass: 173.05,
        massNumber: 174,
        electronConfiguration: '[Xe] 4f14 6s2',
        color: 0x00_bf_38,
        vanDerWaalsRadius: 2.42,
    },
    Lu: {
        name: 'Lutetium',
        // cspell:disable-next-line
        pronunciation: 'lutˈiʃiəm',
        structureDescription: 'The last and densest of the rare earth metals.',
        realLifeDescription: 'Lutetium helps make the detectors inside some medical scanners.',
        atomicNumber: 71,
        atomicMass: 174.9667,
        massNumber: 175,
        electronConfiguration: '[Xe] 4f14 5d1 6s2',
        color: 0x00_ab_24,
        vanDerWaalsRadius: 2.21,
    },
    Hf: {
        name: 'Hafnium',
        // cspell:disable-next-line
        pronunciation: 'hˈæfniəm',
        structureDescription: 'A transition metal that is very good at soaking up neutrons.',
        realLifeDescription:
            "Hafnium helps control nuclear reactors, and it's inside modern computer chips.",
        atomicNumber: 72,
        atomicMass: 178.49,
        massNumber: 180,
        electronConfiguration: '[Xe] 4f14 5d2 6s2',
        color: 0x4d_c2_ff,
        vanDerWaalsRadius: 2.12,
    },
    Ta: {
        name: 'Tantalum',
        // cspell:disable-next-line
        pronunciation: 'tˈæntələm',
        structureDescription: "A dense transition metal that doesn't rust.",
        realLifeDescription:
            'Tantalum makes tiny electrical parts called capacitors inside phones and laptops.',
        atomicNumber: 73,
        atomicMass: 180.9479,
        massNumber: 181,
        electronConfiguration: '[Xe] 4f14 5d3 6s2',
        color: 0x4d_a6_ff,
        vanDerWaalsRadius: 2.17,
    },
    W: {
        name: 'Tungsten',
        // cspell:disable-next-line
        pronunciation: 'tˈʌŋstən',
        structureDescription: 'The metal with the highest melting point of all, over 3400 °C.',
        realLifeDescription:
            "Tungsten made the glowing wire in old light bulbs, and it's in very hard drill bits.",
        atomicNumber: 74,
        atomicMass: 183.84,
        massNumber: 184,
        electronConfiguration: '[Xe] 4f14 5d4 6s2',
        color: 0x21_94_d6,
        vanDerWaalsRadius: 2.1,
    },
    Re: {
        name: 'Rhenium',
        // cspell:disable-next-line
        pronunciation: 'ɹˈiniəm',
        structureDescription:
            "One of the rarest elements in Earth's crust, with a very high melting point.",
        realLifeDescription: 'Rhenium helps jet engine parts survive extreme heat.',
        atomicNumber: 75,
        atomicMass: 186.207,
        massNumber: 187,
        electronConfiguration: '[Xe] 4f14 5d5 6s2',
        color: 0x26_7d_ab,
        vanDerWaalsRadius: 2.17,
    },
    Os: {
        name: 'Osmium',
        // cspell:disable-next-line
        pronunciation: 'ˈɑzmiəm',
        structureDescription: 'The densest element found in nature.',
        realLifeDescription: 'Osmium makes very hard tips for fountain pens.',
        atomicNumber: 76,
        atomicMass: 190.2,
        massNumber: 192,
        electronConfiguration: '[Xe] 4f14 5d6 6s2',
        color: 0x26_66_96,
        vanDerWaalsRadius: 2.16,
    },
    Ir: {
        name: 'Iridium',
        // cspell:disable-next-line
        pronunciation: 'əɹˈɪdˌiəm',
        structureDescription:
            'One of the densest elements, and the metal that resists corrosion best.',
        realLifeDescription:
            'Iridium is extra common in a rock layer from when an asteroid hit Earth and the dinosaurs died out.',
        atomicNumber: 77,
        atomicMass: 192.22,
        massNumber: 193,
        electronConfiguration: '[Xe] 4f14 5d7 6s2',
        color: 0x17_54_87,
        vanDerWaalsRadius: 2.02,
    },
    Pt: {
        name: 'Platinum',
        // cspell:disable-next-line
        pronunciation: 'plˈætənəm',
        structureDescription: 'A precious metal that barely reacts with anything.',
        realLifeDescription: 'Platinum cleans car exhaust and makes jewelry.',
        atomicNumber: 78,
        atomicMass: 195.08,
        massNumber: 195,
        electronConfiguration: '[Xe] 4f14 5d9 6s1',
        color: 0xd0_d0_e0,
        vanDerWaalsRadius: 2.09,
    },
    Au: {
        name: 'Gold',
        // cspell:disable-next-line
        pronunciation: 'ɡˈOld',
        structureDescription: 'A soft, heavy precious metal that never rusts or tarnishes.',
        realLifeDescription:
            'Gold makes jewelry and coins, and it coats the connectors inside electronics.',
        atomicNumber: 79,
        atomicMass: 196.96657,
        massNumber: 197,
        electronConfiguration: '[Xe] 4f14 5d10 6s1',
        color: 0xff_d1_23,
        vanDerWaalsRadius: 1.66,
    },
    Hg: {
        name: 'Mercury',
        // cspell:disable-next-line
        pronunciation: 'mˈɜɹkjəɹi',
        structureDescription: 'The only metal that is liquid at room temperature.',
        realLifeDescription:
            "Mercury was once used in thermometers, but it is toxic, so it's mostly avoided today.",
        atomicNumber: 80,
        atomicMass: 200.59,
        massNumber: 202,
        electronConfiguration: '[Xe] 4f14 5d10 6s2',
        color: 0xb8_b8_d0,
        vanDerWaalsRadius: 2.09,
    },
    Tl: {
        name: 'Thallium',
        // cspell:disable-next-line
        pronunciation: 'θˈælˌiəm',
        structureDescription: 'A soft, heavy metal that is very toxic.',
        realLifeDescription:
            'Thallium is used in some special glass and in medical scans of the heart.',
        atomicNumber: 81,
        atomicMass: 204.383,
        massNumber: 205,
        electronConfiguration: '[Xe] 4f14 5d10 6s2 6p1',
        color: 0xa6_54_4d,
        vanDerWaalsRadius: 1.96,
    },
    Pb: {
        name: 'Lead',
        // cspell:disable-next-line
        pronunciation: 'lˈɛd',
        structureDescription: 'A soft, heavy, dense metal.',
        realLifeDescription:
            "Lead aprons protect you from X-rays at the dentist. Lead used to be in paint and gasoline, but it's toxic, so it was taken out.",
        atomicNumber: 82,
        atomicMass: 207,
        massNumber: 208,
        electronConfiguration: '[Xe] 4f14 5d10 6s2 6p2',
        color: 0x57_59_61,
        vanDerWaalsRadius: 2.02,
    },
    Bi: {
        name: 'Bismuth',
        // cspell:disable-next-line
        pronunciation: 'bˈɪzməθ',
        structureDescription:
            'A heavy metal whose crystals grow in rainbow-colored stair-step shapes.',
        realLifeDescription:
            'Bismuth replaces lead in fishing weights, and it gives some makeup its pearly shine.',
        atomicNumber: 83,
        atomicMass: 208.9804,
        massNumber: 209,
        electronConfiguration: '[Xe] 4f14 5d10 6s2 6p3',
        color: 0x9e_4f_b5,
        vanDerWaalsRadius: 2.07,
    },
    Po: {
        name: 'Polonium',
        // cspell:disable-next-line
        pronunciation: 'pəlˈOniəm',
        structureDescription: 'A rare and intensely radioactive element.',
        realLifeDescription:
            'Marie Curie discovered polonium and named it after her home country, Poland.',
        atomicNumber: 84,
        atomicMass: 208.98243,
        massNumber: 209,
        electronConfiguration: '[Xe] 4f14 5d10 6s2 6p4',
        color: 0xab_5c_00,
        vanDerWaalsRadius: 1.97,
    },
    At: {
        name: 'Astatine',
        // cspell:disable-next-line
        pronunciation: 'ˈæstətin',
        structureDescription: 'The rarest element found naturally on Earth.',
        realLifeDescription:
            "There is less than a gram of astatine in all of Earth's crust at any moment.",
        atomicNumber: 85,
        atomicMass: 209.98715,
        massNumber: 210,
        electronConfiguration: '[Xe] 4f14 5d10 6s2 6p5',
        color: 0x75_4f_45,
        vanDerWaalsRadius: 2.02,
    },
    Rn: {
        name: 'Radon',
        // cspell:disable-next-line
        pronunciation: 'ɹˈAdˌɑn',
        structureDescription: 'A radioactive noble gas, and the heaviest gas at room temperature.',
        realLifeDescription:
            'Radon seeps up from rocks underground, so some homes have detectors for it.',
        atomicNumber: 86,
        atomicMass: 222.01758,
        massNumber: 222,
        electronConfiguration: '[Xe] 4f14 5d10 6s2 6p6',
        color: 0x42_82_96,
        vanDerWaalsRadius: 2.2,
    },
    Fr: {
        name: 'Francium',
        // cspell:disable-next-line
        pronunciation: 'fɹˈænsiəm',
        structureDescription: 'A super rare, radioactive alkali metal.',
        realLifeDescription: 'Francium was the last element discovered in nature, found in 1939.',
        atomicNumber: 87,
        atomicMass: 223.01973,
        massNumber: 223,
        electronConfiguration: '[Rn] 7s1',
        color: 0x42_00_66,
        vanDerWaalsRadius: 3.48,
    },
    Ra: {
        name: 'Radium',
        // cspell:disable-next-line
        pronunciation: 'ɹˈAdiəm',
        structureDescription: 'A radioactive alkaline earth metal that glows faintly.',
        realLifeDescription:
            'Marie and Pierre Curie discovered radium. It was once used in glow-in-the-dark watch paint.',
        atomicNumber: 88,
        atomicMass: 226.02541,
        massNumber: 226,
        electronConfiguration: '[Rn] 7s2',
        color: 0x00_7d_00,
        vanDerWaalsRadius: 2.83,
    },
    Ac: {
        name: 'Actinium',
        // cspell:disable-next-line
        pronunciation: 'ˌæktˈɪniəm',
        structureDescription:
            'The first of the actinides, a radioactive metal that glows blue in the dark.',
        realLifeDescription: 'Scientists are studying actinium as a way to help treat cancer.',
        atomicNumber: 89,
        atomicMass: 227.02775,
        massNumber: 227,
        electronConfiguration: '[Rn] 6d1 7s2',
        color: 0x70_ab_fa,
        vanDerWaalsRadius: 2.6,
    },
    Th: {
        name: 'Thorium',
        // cspell:disable-next-line
        pronunciation: 'θˈɔɹiəm',
        structureDescription: 'A radioactive actinide that decays very slowly.',
        realLifeDescription:
            'Thorium is named after Thor, the Norse god of thunder. It could someday fuel nuclear power plants.',
        atomicNumber: 90,
        atomicMass: 232.038,
        massNumber: 232,
        electronConfiguration: '[Rn] 6d2 7s2',
        color: 0x00_ba_ff,
        vanDerWaalsRadius: 2.37,
    },
    Pa: {
        name: 'Protactinium',
        // cspell:disable-next-line
        pronunciation: 'pɹˌOtæktˈɪniəm',
        structureDescription: 'A rare, radioactive actinide.',
        realLifeDescription:
            'Protactinium is so rare and radioactive that it is mostly used just for science research.',
        atomicNumber: 91,
        atomicMass: 231.03588,
        massNumber: 231,
        electronConfiguration: '[Rn] 5f2 6d1 7s2',
        color: 0x00_a1_ff,
        vanDerWaalsRadius: 2.43,
    },
    U: {
        name: 'Uranium',
        // cspell:disable-next-line
        pronunciation: 'jʊɹˈAniəm',
        structureDescription: 'A heavy, radioactive actinide whose nucleus can split apart.',
        realLifeDescription:
            'Uranium fuels nuclear power plants, which make electricity without burning anything.',
        atomicNumber: 92,
        atomicMass: 238.0289,
        massNumber: 238,
        electronConfiguration: '[Rn] 5f3 6d1 7s2',
        color: 0x00_8f_ff,
        vanDerWaalsRadius: 2.4,
    },
    Np: {
        name: 'Neptunium',
        // cspell:disable-next-line
        pronunciation: 'nˌɛptˈuniʌm',
        structureDescription:
            'The first element heavier than uranium. It is made in nuclear reactors.',
        realLifeDescription:
            'Neptunium is named after the planet Neptune, just like uranium is named after Uranus.',
        atomicNumber: 93,
        atomicMass: 237.048172,
        massNumber: 237,
        electronConfiguration: '[Rn] 5f4 6d1 7s2',
        color: 0x00_80_ff,
        vanDerWaalsRadius: 2.21,
    },
    Pu: {
        name: 'Plutonium',
        // cspell:disable-next-line
        pronunciation: 'plutˈOniəm',
        structureDescription: 'A radioactive actinide named after Pluto.',
        realLifeDescription:
            'Plutonium batteries power spacecraft like the Mars rovers and the Voyager probes.',
        atomicNumber: 94,
        atomicMass: 244.0642,
        massNumber: 244,
        electronConfiguration: '[Rn] 5f6 7s2',
        color: 0x00_6b_ff,
        vanDerWaalsRadius: 2.43,
    },
    Am: {
        name: 'Americium',
        // cspell:disable-next-line
        pronunciation: 'ˌæməɹˈɪsiəm',
        structureDescription: 'A radioactive actinide made in nuclear reactors.',
        realLifeDescription:
            'A tiny bit of americium inside smoke detectors helps them sense smoke.',
        atomicNumber: 95,
        atomicMass: 243.06138,
        massNumber: 243,
        electronConfiguration: '[Rn] 5f7 7s2',
        color: 0x54_5c_f2,
        vanDerWaalsRadius: 2.44,
    },
    Cm: {
        name: 'Curium',
        // cspell:disable-next-line
        pronunciation: 'kjˈʊɹiəm',
        structureDescription: 'A radioactive actinide named after Marie and Pierre Curie.',
        realLifeDescription:
            'Curium has powered tools on Mars rovers that check what rocks are made of.',
        atomicNumber: 96,
        atomicMass: 247.07035,
        massNumber: 247,
        electronConfiguration: '[Rn] 5f7 6d1 7s2',
        color: 0x78_5c_e3,
        vanDerWaalsRadius: 2.45,
    },
    Bk: {
        name: 'Berkelium',
        // cspell:disable-next-line
        pronunciation: 'bˈɜɹkliəm',
        structureDescription: 'A radioactive actinide first made in Berkeley, California.',
        realLifeDescription:
            'Berkelium has been used to make even heavier elements, like tennessine.',
        atomicNumber: 97,
        atomicMass: 247.07031,
        massNumber: 247,
        electronConfiguration: '[Rn] 5f9 7s2',
        color: 0x8a_4f_e3,
        vanDerWaalsRadius: 2.44,
    },
    Cf: {
        name: 'Californium',
        // cspell:disable-next-line
        pronunciation: 'kˌæləfˈɔɹniəm',
        structureDescription: 'A radioactive actinide that gives off lots of neutrons.',
        realLifeDescription:
            'Californium helps start up nuclear reactors and find water and oil deep underground.',
        atomicNumber: 98,
        atomicMass: 251.07959,
        massNumber: 251,
        electronConfiguration: '[Rn] 5f10 7s2',
        color: 0xa1_36_d4,
        vanDerWaalsRadius: 2.45,
    },
    Es: {
        name: 'Einsteinium',
        // cspell:disable-next-line
        pronunciation: 'ˌInstˈIniəm',
        structureDescription: 'A radioactive actinide named after Albert Einstein.',
        realLifeDescription:
            'Einsteinium is so rare that scientists have only ever made tiny specks of it.',
        atomicNumber: 99,
        atomicMass: 252.083,
        massNumber: 252,
        electronConfiguration: '[Rn] 5f11 7s2',
        color: 0xb3_1f_d4,
        vanDerWaalsRadius: 2.45,
    },
    Fm: {
        name: 'Fermium',
        // cspell:disable-next-line
        pronunciation: 'fˈɜɹmiəm',
        structureDescription: 'A radioactive actinide named after the physicist Enrico Fermi.',
        realLifeDescription:
            'Fermium is the heaviest element that can be made by hitting lighter elements with neutrons.',
        atomicNumber: 100,
        atomicMass: 257.09511,
        massNumber: 257,
        electronConfiguration: '[Rn] 5f12 7s2',
        color: 0xb3_1f_ba,
    },
    Md: {
        name: 'Mendelevium',
        // cspell:disable-next-line
        pronunciation: 'mˌɛndəlˈiviəm',
        structureDescription:
            'A radioactive actinide named after Dmitri Mendeleev, who created the periodic table.',
        realLifeDescription:
            'The first time scientists made mendelevium, they got only 17 atoms of it.',
        atomicNumber: 101,
        atomicMass: 258.09843,
        massNumber: 258,
        electronConfiguration: '[Rn] 5f13 7s2',
        color: 0xb3_0d_a6,
    },
    No: {
        name: 'Nobelium',
        // cspell:disable-next-line
        pronunciation: 'nObˈɛliəm',
        structureDescription: 'A radioactive actinide named after Alfred Nobel.',
        realLifeDescription:
            'Alfred Nobel started the Nobel Prizes, which are given out every year for great discoveries.',
        atomicNumber: 102,
        atomicMass: 259.101,
        massNumber: 259,
        electronConfiguration: '[Rn] 5f14 7s2',
        color: 0xbd_0d_87,
    },
    Lr: {
        name: 'Lawrencium',
        // cspell:disable-next-line
        pronunciation: 'lɔɹˈɛnsiəm',
        structureDescription: 'The last of the actinides.',
        realLifeDescription:
            'Lawrencium is named after Ernest Lawrence, who invented a machine that speeds up tiny particles.',
        atomicNumber: 103,
        atomicMass: 266.12,
        massNumber: 266,
        electronConfiguration: '[Rn] 5f14 7s2 7p1',
        color: 0xc7_00_66,
    },
    Rf: {
        name: 'Rutherfordium',
        // cspell:disable-next-line
        pronunciation: 'ɹˌʌðəɹfˈɔɹdiəm',
        structureDescription:
            'The first superheavy element. It is made in labs a few atoms at a time.',
        realLifeDescription:
            'Rutherfordium is named after Ernest Rutherford, who discovered the nucleus at the center of every atom.',
        atomicNumber: 104,
        atomicMass: 267.122,
        massNumber: 267,
        electronConfiguration: '[Rn] 5f14 6d2 7s2',
        color: 0xcc_00_59,
    },
    Db: {
        name: 'Dubnium',
        // cspell:disable-next-line
        pronunciation: 'dˈubniəm',
        structureDescription:
            'A superheavy element made in labs. Its atoms fall apart within hours.',
        realLifeDescription:
            'Dubnium is named after Dubna, a Russian town with a famous lab for making new elements.',
        atomicNumber: 105,
        atomicMass: 268.126,
        massNumber: 268,
        electronConfiguration: '[Rn] 5f14 6d3 7s2',
        color: 0xd1_00_4f,
    },
    Sg: {
        name: 'Seaborgium',
        // cspell:disable-next-line
        pronunciation: 'sibˈɔɹɡiəm',
        structureDescription:
            'A superheavy element made in labs. Its atoms fall apart within minutes.',
        realLifeDescription:
            'Seaborgium is named after Glenn Seaborg, who was still alive when it got his name.',
        atomicNumber: 106,
        atomicMass: 269.128,
        massNumber: 269,
        electronConfiguration: '[Rn] 5f14 6d4 7s2',
        color: 0xd9_00_45,
    },
    Bh: {
        name: 'Bohrium',
        // cspell:disable-next-line
        pronunciation: 'bˈɔɹiəm',
        structureDescription:
            'A superheavy element made in labs. Its atoms fall apart in about a minute.',
        realLifeDescription:
            'Bohrium is named after Niels Bohr, who figured out that electrons sit in shells around the nucleus.',
        atomicNumber: 107,
        atomicMass: 270.133,
        massNumber: 270,
        electronConfiguration: '[Rn] 5f14 6d5 7s2',
        color: 0xe0_00_38,
    },
    Hs: {
        name: 'Hassium',
        // cspell:disable-next-line
        pronunciation: 'hˈɛsiˌəm',
        structureDescription:
            'A superheavy element made in labs that may be one of the densest of all.',
        realLifeDescription:
            'Hassium is named after Hesse, the German state where it was first made.',
        atomicNumber: 108,
        atomicMass: 269.1336,
        massNumber: 269,
        electronConfiguration: '[Rn] 5f14 6d6 7s2',
        color: 0xe6_00_2e,
    },
    Mt: {
        name: 'Meitnerium',
        // cspell:disable-next-line
        pronunciation: 'mˌItnˈɪɹiəm',
        structureDescription: 'A superheavy element made in labs. Its atoms fall apart in seconds.',
        realLifeDescription:
            'Meitnerium is named after Lise Meitner, who helped discover how atoms can split.',
        atomicNumber: 109,
        atomicMass: 277.154,
        massNumber: 277,
        electronConfiguration: '[Rn] 5f14 6d7 7s2',
        color: 0xeb_00_26,
    },
    Ds: {
        name: 'Darmstadtium',
        // cspell:disable-next-line
        pronunciation: 'dˌɑɹmʃtˈætiəm',
        structureDescription: 'A superheavy element made in labs. Its atoms fall apart in seconds.',
        realLifeDescription:
            'Darmstadtium is named after Darmstadt, the German city where it was first made.',
        atomicNumber: 110,
        atomicMass: 282.166,
        massNumber: 282,
        electronConfiguration: '[Rn] 5f14 6d8 7s2',
    },
    Rg: {
        name: 'Roentgenium',
        // cspell:disable-next-line
        pronunciation: 'ɹɛntɡˈɛniəm',
        structureDescription:
            'A superheavy element made in labs. Its atoms fall apart within minutes.',
        realLifeDescription: 'Roentgenium is named after Wilhelm Roentgen, who discovered X-rays.',
        atomicNumber: 111,
        atomicMass: 282.169,
        massNumber: 282,
        electronConfiguration: '[Rn] 5f14 6d9 7s2',
    },
    Cn: {
        name: 'Copernicium',
        // cspell:disable-next-line
        pronunciation: 'kˌɑpəɹnˈɪsiəm',
        structureDescription:
            'A superheavy element made in labs that might be a liquid or gas at room temperature.',
        realLifeDescription:
            'Copernicium is named after Nicolaus Copernicus, who said Earth goes around the Sun.',
        atomicNumber: 112,
        atomicMass: 286.179,
        massNumber: 286,
        electronConfiguration: '[Rn] 5f14 6d10 7s2',
    },
    Nh: {
        name: 'Nihonium',
        // cspell:disable-next-line
        pronunciation: 'nihˈOniəm',
        structureDescription: 'A superheavy element made in labs. Its atoms fall apart in seconds.',
        realLifeDescription:
            'Nihonium was the first element discovered in Japan. Its name comes from "Nihon", the Japanese name for Japan.',
        atomicNumber: 113,
        atomicMass: 286.182,
        massNumber: 286,
        electronConfiguration: '[Rn] 5f14 6d10 7s2 7p1',
    },
    Fl: {
        name: 'Flerovium',
        // cspell:disable-next-line
        pronunciation: 'fləɹˈOviəm',
        structureDescription: 'A superheavy element made in labs. Its atoms fall apart in seconds.',
        realLifeDescription:
            'Flerovium is named after a Russian lab for making new elements, which was named after the physicist Georgy Flerov.',
        atomicNumber: 114,
        atomicMass: 290.192,
        massNumber: 290,
        electronConfiguration: '[Rn] 5f14 6d10 7s2 7p2',
    },
    Mc: {
        name: 'Moscovium',
        // cspell:disable-next-line
        pronunciation: 'mˌɑskˈOviəm',
        structureDescription:
            'A superheavy element made in labs. Its atoms fall apart in under a second.',
        realLifeDescription:
            'Moscovium is named after Moscow, the region of Russia where its lab is.',
        atomicNumber: 115,
        atomicMass: 290.196,
        massNumber: 290,
        electronConfiguration: '[Rn] 5f14 6d10 7s2 7p3',
    },
    Lv: {
        name: 'Livermorium',
        // cspell:disable-next-line
        pronunciation: 'lˌɪvəɹmˈɔɹiəm',
        structureDescription:
            'A superheavy element made in labs. Its atoms fall apart in under a second.',
        realLifeDescription: 'Livermorium is named after a science lab in Livermore, California.',
        atomicNumber: 116,
        atomicMass: 293.205,
        massNumber: 293,
        electronConfiguration: '[Rn] 5f14 6d10 7s2 7p4',
    },
    Ts: {
        name: 'Tennessine',
        // cspell:disable-next-line
        pronunciation: 'tˈɛnəsˌin',
        structureDescription: 'A superheavy element made in labs. It sits in the halogen column.',
        realLifeDescription:
            'Tennessine is named after Tennessee, where some of the material used to make it came from.',
        atomicNumber: 117,
        atomicMass: 294.211,
        massNumber: 294,
        electronConfiguration: '[Rn] 5f14 6d10 7s2 7p5',
    },
    Og: {
        name: 'Oganesson',
        // cspell:disable-next-line
        pronunciation: 'ˌOɡənˈɛsɑn',
        structureDescription: 'The heaviest element ever made. It sits in the noble gas column.',
        realLifeDescription:
            'Oganesson is named after Yuri Oganessian, one of only two people to have an element named after them while still alive.',
        atomicNumber: 118,
        atomicMass: 295.216,
        massNumber: 295,
        electronConfiguration: '[Rn] 5f14 6d10 7s2 7p6',
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
