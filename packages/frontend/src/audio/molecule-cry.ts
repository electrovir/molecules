// cspell:words formants xorshift tarjan's detuned diphthongs schön lune
import {assertWrap} from '@augment-vir/assert';
import {createArray, getObjectTypedValues, removeDuplicates} from '@augment-vir/common';
import {ChemicalElementSymbol} from '../data/chemical-element.js';
import {getMolarMass, type Molecule} from '../data/molecule.js';
import {getAudioOutput} from './audio-output.js';
import {getVibrationPartials, type VibrationPartial} from './molecule-vibrations.js';

enum Vowel {
    /** As in "food". */
    Oo = 'oo',
    /** As in "go". */
    Oh = 'oh',
    /** As in "see". */
    Ee = 'ee',
    /** As in "father". */
    Ah = 'ah',
    /** As in "bed". */
    Eh = 'eh',
    /** As in "cup". */
    Uh = 'uh',
    /** As in "sit". */
    Ih = 'ih',
    /** As in "cat". */
    Ae = 'ae',
    /** As in "bird". */
    Er = 'er',
    /** As in "law". */
    Aw = 'aw',
    /** As in "book". */
    Uu = 'uu',
    /** As in French "lune". */
    Ue = 'ue',
    /** As in German "schön". */
    Oe = 'oe',
}

/** The first two formants (vocal tract resonances) of each vowel, in hertz. */
const vowelFormants: Record<
    Vowel,
    [
        number,
        number,
    ]
> = {
    [Vowel.Oo]: [
        320,
        800,
    ],
    [Vowel.Oh]: [
        500,
        900,
    ],
    [Vowel.Ee]: [
        300,
        2300,
    ],
    [Vowel.Ah]: [
        800,
        1250,
    ],
    [Vowel.Eh]: [
        420,
        1900,
    ],
    [Vowel.Uh]: [
        640,
        1190,
    ],
    [Vowel.Ih]: [
        390,
        1990,
    ],
    [Vowel.Ae]: [
        660,
        1720,
    ],
    [Vowel.Er]: [
        490,
        1350,
    ],
    [Vowel.Aw]: [
        570,
        840,
    ],
    [Vowel.Uu]: [
        440,
        1020,
    ],
    [Vowel.Ue]: [
        250,
        1750,
    ],
    [Vowel.Oe]: [
        370,
        1600,
    ],
};

enum Bonding {
    Ring = 'ring',
    /** A double or triple bond outside a ring. */
    MultipleBond = 'multiple-bond',
    Single = 'single',
}

/**
 * Carbon, oxygen, and nitrogen are in nearly every molecule, so their vowel also depends on how
 * they are bonded.
 */
const bondingVowels: Partial<Record<ChemicalElementSymbol, Record<Bonding, Vowel>>> = {
    [ChemicalElementSymbol.C]: {
        [Bonding.Ring]: Vowel.Uh,
        [Bonding.MultipleBond]: Vowel.Ih,
        [Bonding.Single]: Vowel.Oo,
    },
    [ChemicalElementSymbol.O]: {
        [Bonding.Ring]: Vowel.Aw,
        [Bonding.MultipleBond]: Vowel.Ae,
        [Bonding.Single]: Vowel.Oh,
    },
    [ChemicalElementSymbol.N]: {
        [Bonding.Ring]: Vowel.Ue,
        [Bonding.MultipleBond]: Vowel.Oe,
        [Bonding.Single]: Vowel.Ee,
    },
};

/** Elements missing here and from `bondingVowels` get `Vowel.Eh`. */
const elementVowels: Partial<Record<ChemicalElementSymbol, Vowel>> = {
    [ChemicalElementSymbol.F]: Vowel.Ah,
    [ChemicalElementSymbol.Cl]: Vowel.Ah,
    [ChemicalElementSymbol.Br]: Vowel.Er,
    [ChemicalElementSymbol.I]: Vowel.Er,
    [ChemicalElementSymbol.S]: Vowel.Uu,
};

/** The average formants of a group of atoms' vowels. */
function blendFormants(vowels: ReadonlyArray<Vowel>) {
    return [
        0,
        1,
    ].map((formantIndex) => {
        return (
            vowels.reduce((total, vowel) => total + (vowelFormants[vowel][formantIndex] ?? 0), 0) /
            vowels.length
        );
    });
}

const roughElements: ChemicalElementSymbol[] = [
    ChemicalElementSymbol.F,
    ChemicalElementSymbol.Cl,
    ChemicalElementSymbol.Br,
    ChemicalElementSymbol.I,
    ChemicalElementSymbol.S,
    ChemicalElementSymbol.P,
];

/** FNV-1a. */
function hashString(text: string) {
    return createArray(text.length, (index) => text.codePointAt(index) ?? 0).reduce(
        (hash, code) => {
            return Math.imul(hash ^ code, 16_777_619) >>> 0;
        },
        2_166_136_261,
    );
}

/** Xorshift, so that a molecule's cry is the same every time. */
function createSeededRandom(seed: number) {
    const state = {
        value: seed || 1,
    };
    return () => {
        state.value ^= state.value << 13;
        state.value ^= state.value >>> 17;
        state.value ^= state.value << 5;
        return (state.value >>> 0) / 4_294_967_296;
    };
}

function getNeighbors(molecule: Readonly<Pick<Molecule, 'atoms' | 'bonds'>>) {
    return molecule.atoms.map((unusedAtom, atomIndex) => {
        return molecule.bonds
            .filter((bond) => bond.atomIndexes.includes(atomIndex))
            .map((bond) => {
                return {
                    atomIndex:
                        bond.atomIndexes.find((otherIndex) => otherIndex !== atomIndex) ??
                        atomIndex,
                    order: bond.order,
                };
            });
    });
}

/** An atom is in a ring when at least one of its bonds is not a bridge (Tarjan's bridge search). */
function getRingAtoms(molecule: Readonly<Pick<Molecule, 'atoms' | 'bonds'>>) {
    const visitOrder = molecule.atoms.map(() => -1);
    const lowest = molecule.atoms.map(() => 0);
    const isInRing = molecule.atoms.map(() => false);
    const counter = {
        value: 0,
    };

    function visit({
        atomIndex,
        parentBondIndex,
    }: Readonly<{atomIndex: number; parentBondIndex: number}>) {
        visitOrder[atomIndex] = counter.value;
        lowest[atomIndex] = counter.value;
        counter.value++;
        molecule.bonds.forEach((bond, bondIndex) => {
            if (bondIndex === parentBondIndex || !bond.atomIndexes.includes(atomIndex)) {
                return;
            }
            const other =
                bond.atomIndexes[0] === atomIndex ? bond.atomIndexes[1] : bond.atomIndexes[0];
            if (visitOrder[other] === -1) {
                visit({
                    atomIndex: other,
                    parentBondIndex: bondIndex,
                });
                lowest[atomIndex] = Math.min(lowest[atomIndex] ?? 0, lowest[other] ?? 0);
                if ((lowest[other] ?? 0) <= (visitOrder[atomIndex] ?? 0)) {
                    isInRing[atomIndex] = true;
                    isInRing[other] = true;
                }
            } else {
                lowest[atomIndex] = Math.min(lowest[atomIndex] ?? 0, visitOrder[other] ?? 0);
                isInRing[atomIndex] = true;
                isInRing[other] = true;
            }
        });
    }

    molecule.atoms.forEach((unusedAtom, atomIndex) => {
        if (visitOrder[atomIndex] === -1) {
            visit({
                atomIndex,
                parentBondIndex: -1,
            });
        }
    });
    return isInRing;
}

/** Bond steps from `startIndex` to each atom. Unreachable atoms count as one past the farthest. */
function getBondDistances({
    neighbors,
    startIndex,
}: Readonly<{
    neighbors: ReadonlyArray<ReadonlyArray<{atomIndex: number}>>;
    startIndex: number;
}>) {
    const distances = neighbors.map(() => Infinity);
    distances[startIndex] = 0;
    const queue = [
        startIndex,
    ];
    /** `forEach` would skip atoms pushed during the walk. */
    for (let cursor = 0; cursor < queue.length; cursor++) {
        const atomIndex = queue[cursor] ?? 0;
        neighbors[atomIndex]?.forEach((neighbor) => {
            if (distances[neighbor.atomIndex] === Infinity) {
                distances[neighbor.atomIndex] = (distances[atomIndex] ?? 0) + 1;
                queue.push(neighbor.atomIndex);
            }
        });
    }
    const farthest = Math.max(...distances.filter(Number.isFinite));
    return distances.map((distance) => (Number.isFinite(distance) ? distance : farthest + 1));
}

/**
 * Between 0 and 1: how much of the molecule repeats itself. Atoms are grouped by element, then
 * regrouped by their neighbors' groups until the groups stop splitting. The fewer the groups for
 * the number of atoms, the more symmetric the molecule.
 */
function getSymmetry(molecule: Readonly<Pick<Molecule, 'atoms' | 'bonds'>>) {
    const neighbors = getNeighbors(molecule);

    /** Recursion is why this has a return type. */
    function refine(labels: ReadonlyArray<string>): ReadonlyArray<string> {
        const nextLabels = labels.map((label, atomIndex) => {
            return [
                label,
                ...(neighbors[atomIndex] ?? [])
                    .map((neighbor) => labels[neighbor.atomIndex])
                    .sort(),
            ].join(',');
        });
        const groups = removeDuplicates(nextLabels);
        const renamed = nextLabels.map((label) => String(groups.indexOf(label)));
        return groups.length === new Set(labels).size ? labels : refine(renamed);
    }

    return (
        1 - new Set(refine(molecule.atoms.map((atom) => atom.element))).size / molecule.atoms.length
    );
}

/**
 * Splits the molecule, from one end to the other along its bonds, into sections of heavy atoms
 * (with their hydrogens). Each section becomes one syllable of the cry.
 */
export function getCrySections({
    molecule,
    maxSectionCount,
}: Readonly<{
    molecule: Readonly<Pick<Molecule, 'atoms' | 'bonds'>>;
    maxSectionCount: number;
}>) {
    const neighbors = getNeighbors(molecule);
    const isInRing = getRingAtoms(molecule);
    const fromFirst = getBondDistances({
        neighbors,
        startIndex: 0,
    });
    const distances = getBondDistances({
        neighbors,
        startIndex: fromFirst.indexOf(Math.max(...fromFirst)),
    });
    const allAtoms = molecule.atoms.map((atom, atomIndex) => {
        return {
            atom,
            atomIndex,
        };
    });
    const heavyAtoms = allAtoms
        .filter(({atom}) => atom.element !== ChemicalElementSymbol.H)
        .sort((first, second) => {
            return (
                (distances[first.atomIndex] ?? 0) - (distances[second.atomIndex] ?? 0) ||
                first.atomIndex - second.atomIndex
            );
        });
    /** Only hydrogen gas has no heavy atoms. */
    const orderedAtoms = heavyAtoms.length ? heavyAtoms : allAtoms;
    const sectionCount = Math.min(maxSectionCount, Math.max(1, Math.ceil(orderedAtoms.length / 4)));

    return createArray(sectionCount, (sectionIndex) => {
        return orderedAtoms.slice(
            Math.floor((sectionIndex * orderedAtoms.length) / sectionCount),
            Math.floor(((sectionIndex + 1) * orderedAtoms.length) / sectionCount),
        );
    }).map((section) => {
        const hydrogenCount = section.reduce((total, {atomIndex}) => {
            return (
                total +
                (neighbors[atomIndex] ?? []).filter((neighbor) => {
                    return molecule.atoms[neighbor.atomIndex]?.element === ChemicalElementSymbol.H;
                }).length
            );
        }, 0);

        function getFraction(elements: ReadonlyArray<ChemicalElementSymbol>) {
            return (
                section.filter(({atom}) => elements.includes(atom.element)).length / section.length
            );
        }

        function hasMultipleBond(atomIndex: number) {
            return (neighbors[atomIndex] ?? []).some((neighbor) => neighbor.order > 1);
        }

        const atomVowels = section.map(({atom, atomIndex}) => {
            const bonding = isInRing[atomIndex]
                ? Bonding.Ring
                : hasMultipleBond(atomIndex)
                  ? Bonding.MultipleBond
                  : Bonding.Single;
            return (
                bondingVowels[atom.element]?.[bonding] ?? elementVowels[atom.element] ?? Vowel.Eh
            );
        });

        return {
            atomCount: section.length + hydrogenCount,
            hydrogenFraction: hydrogenCount / (section.length + hydrogenCount),
            averageMass: getMolarMass(section.map(({atom}) => atom)) / section.length,
            ringFraction:
                section.filter(({atomIndex}) => isInRing[atomIndex]).length / section.length,
            multipleBondFraction:
                section.filter(({atomIndex}) => hasMultipleBond(atomIndex)).length / section.length,
            highestBondOrder: Math.max(
                1,
                ...section.flatMap(({atomIndex}) => {
                    return (neighbors[atomIndex] ?? []).map((neighbor) => neighbor.order);
                }),
            ),
            /**
             * The vowel glides from the first half of the section's atoms to the second half, so
             * mixed sections sing diphthongs like "oy" or "ai".
             */
            startFormants: blendFormants(atomVowels.slice(0, Math.ceil(atomVowels.length / 2))),
            endFormants: blendFormants(atomVowels.slice(Math.floor(atomVowels.length / 2))),
            roughness: Math.min(1, getFraction(roughElements)),
        };
    });
}

/** Squeezes roughly 100–4500 cm⁻¹ into roughly 110–1800 Hz, keeping order and rough intervals. */
function waveNumberToHertz(waveNumberPerCentimeter: number) {
    return 110 * (waveNumberPerCentimeter / 100) ** 0.73;
}

/**
 * Up to two extra chord notes, as frequency ratios above a syllable's main note. They come from the
 * spacing between the molecule's vibrations, folded into about an octave and kept away from
 * near-unisons, which would only beat.
 */
function getChordRatios({
    partials,
    sectionIndex,
}: Readonly<{
    partials: ReadonlyArray<Readonly<VibrationPartial>>;
    sectionIndex: number;
}>) {
    const reference = partials[(sectionIndex * 2) % partials.length];
    if (partials.length < 2 || !reference) {
        return [];
    }
    return [
        1,
        2,
    ]
        .map((offset) => partials[(sectionIndex * 2 + offset) % partials.length])
        .filter((partial) => partial && partial !== reference)
        .map((partial) => {
            const ratio =
                waveNumberToHertz(partial?.waveNumberPerCentimeter ?? 0) /
                waveNumberToHertz(reference.waveNumberPerCentimeter);
            const raised = ratio * 2 ** Math.max(0, Math.ceil(Math.log2(1.12 / ratio)));
            return raised / 2 ** Math.max(0, Math.floor(Math.log2(raised / 2.24)) + 1);
        });
}

/** How the cry's pitch moves across its syllables, picked per molecule. */
enum MelodyShape {
    Rising = 'rising',
    Falling = 'falling',
    Arch = 'arch',
    Valley = 'valley',
    Zigzag = 'zigzag',
}

/** Each gives a syllable's height in the melody, from 0 to 1. */
const melodyShapes: Record<
    MelodyShape,
    (params: Readonly<{position: number; syllableIndex: number}>) => number
> = {
    [MelodyShape.Rising]({position}) {
        return position;
    },
    [MelodyShape.Falling]({position}) {
        return 1 - position;
    },
    [MelodyShape.Arch]({position}) {
        return 1 - Math.abs(2 * position - 1);
    },
    [MelodyShape.Valley]({position}) {
        return Math.abs(2 * position - 1);
    },
    [MelodyShape.Zigzag]({syllableIndex}) {
        return syllableIndex % 2;
    },
};

/** How syllable lengths vary across the cry, picked per molecule. */
enum Rhythm {
    Even = 'even',
    LongShort = 'long-short',
    HeldEnding = 'held-ending',
    SpeedingUp = 'speeding-up',
    SlowingDown = 'slowing-down',
}

/** Each gives a syllable's relative length. */
const rhythms: Record<
    Rhythm,
    (params: Readonly<{position: number; syllableIndex: number; syllableCount: number}>) => number
> = {
    [Rhythm.Even]() {
        return 1;
    },
    [Rhythm.LongShort]({syllableIndex}) {
        return syllableIndex % 2 ? 0.55 : 1.45;
    },
    [Rhythm.HeldEnding]({syllableIndex, syllableCount}) {
        return syllableIndex === syllableCount - 1 ? 2.4 : 0.8;
    },
    [Rhythm.SpeedingUp]({position}) {
        return 1.7 - 1.1 * position;
    },
    [Rhythm.SlowingDown]({position}) {
        return 0.6 + 1.1 * position;
    },
};

const waveforms: OscillatorType[] = [
    'sawtooth',
    'square',
    'triangle',
];

/** Semitones of a major pentatonic scale, which sounds tuneful whichever notes are picked. */
const pentatonicSemitones = [
    0,
    2,
    4,
    7,
    9,
    12,
];

function snapToPentatonic(semitones: number) {
    const octave = Math.floor(semitones / 12);
    const withinOctave = semitones - 12 * octave;
    return (
        12 * octave +
        pentatonicSemitones.reduce((best, step) => {
            return Math.abs(step - withinOctave) < Math.abs(best - withinOctave) ? step : best;
        })
    );
}

function pickRandom<const T>({
    random,
    options,
}: Readonly<{random: () => number; options: ReadonlyArray<T>}>) {
    return assertWrap.isDefined(options[Math.floor(random() * options.length)]);
}

/**
 * Plans every syllable before any sound is made. The seeded random numbers are drawn in a fixed
 * order, so the same seed always gives the same cry.
 */
function planCry({
    molecule,
    seed,
}: Readonly<{
    molecule: Readonly<Molecule>;
    seed: string;
}>) {
    const random = createSeededRandom(hashString(seed));
    const totalSeconds = 0.4 + 0.18 * Math.log2(molecule.atoms.length);
    /**
     * Each molecule gets its own register, tune, rhythm, voice, and phrasing on top of its
     * structure.
     */
    const basePitch =
        1000 * (getMolarMass(molecule.atoms) / 2) ** -0.3 * 2 ** ((random() - 0.5) * 1.2);
    const vibratoRate = 4 + 4 * random();
    const melodyShape = pickRandom({
        random,
        options: getObjectTypedValues(MelodyShape),
    });
    const melodySpanSemitones = 5 + 9 * random();
    const rhythm = pickRandom({
        random,
        options: getObjectTypedValues(Rhythm),
    });
    const waveform = pickRandom({
        random,
        options: waveforms,
    });
    const gapSeconds = random() < 0.5 ? 0.015 : 0.07;
    const maxSectionCount = 3 + Math.floor(random() * 4);

    /** Most-repeated vibrations first: they are the molecule's most characteristic tones. */
    const chordPartials = getVibrationPartials(molecule).toSorted((first, second) => {
        return (
            second.degeneracy - first.degeneracy ||
            first.waveNumberPerCentimeter - second.waveNumberPerCentimeter
        );
    });
    /** Sections full of double or triple bonds chirp twice or three times. */
    const phrase = getCrySections({
        molecule,
        maxSectionCount,
    }).flatMap((section) => {
        return section.multipleBondFraction > 0.5
            ? createArray(section.highestBondOrder, () => section)
            : [
                  section,
              ];
    });
    /** Symmetric molecules say their phrase twice. */
    const sections =
        getSymmetry(molecule) >= 0.6
            ? [
                  ...phrase,
                  ...phrase,
              ]
            : phrase;
    const durationWeights = sections.map((section, sectionIndex) => {
        return (
            rhythms[rhythm]({
                position: sections.length > 1 ? sectionIndex / (sections.length - 1) : 0.5,
                syllableIndex: sectionIndex,
                syllableCount: sections.length,
            }) * Math.sqrt(section.atomCount)
        );
    });
    const weightTotal = durationWeights.reduce((total, weight) => total + weight, 0);

    return sections.reduce<{
        syllables: {
            section: (typeof sections)[number];
            startSeconds: number;
            durationSeconds: number;
            pitch: number;
            contour: [
                number,
                number,
                number,
            ];
            peakFraction: number;
            formants: {
                start: number;
                end: number;
            }[];
            isTrill: boolean;
            vibratoRate: number;
            chordRatios: number[];
            waveform: OscillatorType;
        }[];
        nextStartSeconds: number;
    }>(
        (plan, section, sectionIndex) => {
            const position = sections.length > 1 ? sectionIndex / (sections.length - 1) : 0.5;
            const durationSeconds =
                ((totalSeconds - gapSeconds * (sections.length - 1)) *
                    (durationWeights[sectionIndex] ?? 1)) /
                weightTotal;
            const melodySemitones = snapToPentatonic(
                melodySpanSemitones *
                    (melodyShapes[melodyShape]({
                        position,
                        syllableIndex: sectionIndex,
                    }) -
                        0.5),
            );
            const pitch =
                basePitch *
                2 ** (melodySemitones / 12) *
                (12 / section.averageMass) ** 0.2 *
                (1 + 0.2 * section.hydrogenFraction);
            const isTrill = section.ringFraction > 0.5;
            const contour: [
                number,
                number,
                number,
            ] =
                section.multipleBondFraction > 0.5 && !isTrill
                    ? [
                          0.8,
                          1.05,
                          1.4,
                      ]
                    : isTrill
                      ? [
                            1,
                            1.2 + 0.2 * random(),
                            0.85,
                        ]
                      : [
                            1.25,
                            1.1,
                            0.6,
                        ];
            const peakFraction = 0.2 + 0.5 * random();
            const formants = section.startFormants.map((startFormant, formantIndex) => {
                const shift = 0.92 + 0.16 * random();
                return {
                    start: startFormant * shift,
                    end: (section.endFormants[formantIndex] ?? startFormant) * shift,
                };
            });
            const syllableVibratoRate = isTrill ? 13 + 7 * random() : vibratoRate;

            return {
                syllables: [
                    ...plan.syllables,
                    {
                        section,
                        startSeconds: plan.nextStartSeconds,
                        durationSeconds,
                        pitch,
                        contour,
                        peakFraction,
                        formants,
                        isTrill,
                        vibratoRate: syllableVibratoRate,
                        chordRatios: getChordRatios({
                            partials: chordPartials,
                            sectionIndex,
                        }),
                        /** Double bonds switch to the next voice, so they stand out from the rest. */
                        waveform:
                            section.multipleBondFraction > 0.5
                                ? assertWrap.isDefined(
                                      waveforms[
                                          (waveforms.indexOf(waveform) + 1) % waveforms.length
                                      ],
                                  )
                                : waveform,
                    },
                ],
                nextStartSeconds:
                    plan.nextStartSeconds + durationSeconds + gapSeconds * (0.5 + random()),
            };
        },
        {
            syllables: [],
            nextStartSeconds: 0,
        },
    ).syllables;
}

export type PlayingCry = {
    /** Taps the cry after compression, as it is heard. */
    analyser: AnalyserNode;
    isFinished: () => boolean;
    stop: () => void;
};

/**
 * Plays a Pokémon-style cry made from the molecule's structure. It reads the molecule end to end,
 * one syllable per section. Elements and their bonding pick the vowels, heavier sections sing
 * lower, rings trill, double and triple bonds chirp upward two or three times, plain chains slide
 * down, and symmetric molecules repeat themselves. The seed adds a register, tune, rhythm, and
 * voice of its own. Chords come from the molecule's vibration frequencies. Must be called from a
 * user gesture the first time, or browsers keep the audio muted.
 */
export function playMoleculeCry({
    molecule,
    seed,
}: Readonly<{
    molecule: Readonly<Molecule>;
    /** Usually the route name. Small pitch and timing offsets come from it. */
    seed: string;
}>): PlayingCry {
    const {context, masterVolume} = getAudioOutput();

    const output = context.createGain();
    output.gain.value = 0.8;
    /** Squashes every cry to about the same loudness, whatever its pitch, vowels, or voice. */
    const compressor = context.createDynamicsCompressor();
    compressor.threshold.value = -36;
    compressor.knee.value = 10;
    compressor.ratio.value = 20;
    compressor.attack.value = 0.005;
    compressor.release.value = 0.15;
    const syllables = planCry({
        molecule,
        seed,
    });
    const averagePitch =
        syllables.reduce(
            (total, syllable) => total + syllable.pitch * syllable.durationSeconds,
            0,
        ) / (syllables.reduce((total, syllable) => total + syllable.durationSeconds, 0) || 1);
    /**
     * Even at the same measured loudness, high voices sound louder: their overtones land where ears
     * are most sensitive. This comes after the compressor, which would otherwise undo it.
     */
    const makeUpGain = context.createGain();
    makeUpGain.gain.value = 0.76 * Math.min(1, (300 / averagePitch) ** 0.35);
    const softenHighs = context.createBiquadFilter();
    softenHighs.type = 'highshelf';
    softenHighs.frequency.value = 2500;
    softenHighs.gain.value = -6;
    const analyser = context.createAnalyser();
    analyser.fftSize = 1024;
    output
        .connect(compressor)
        .connect(makeUpGain)
        .connect(softenHighs)
        .connect(analyser)
        .connect(masterVolume);

    const now = context.currentTime + 0.03;
    const noiseRandom = createSeededRandom(hashString(seed) + 1);

    syllables.forEach((syllable) => {
        const start = now + syllable.startSeconds;
        const stop = start + syllable.durationSeconds;

        const voice = context.createGain();
        voice.gain.setValueAtTime(0, start);
        voice.gain.linearRampToValueAtTime(0.5, start + 0.015);
        voice.gain.setValueAtTime(0.5, Math.max(start + 0.02, stop - 0.05));
        voice.gain.linearRampToValueAtTime(0, stop);
        syllable.formants.forEach((formant, formantIndex) => {
            const filter = context.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.setValueAtTime(formant.start, start);
            filter.frequency.exponentialRampToValueAtTime(formant.end, stop);
            filter.Q.value = 5;
            const formantGain = context.createGain();
            formantGain.gain.value = formantIndex ? 1.4 : 2.2;
            voice.connect(filter).connect(formantGain).connect(output);
        });
        const dry = context.createGain();
        dry.gain.value = 0.12;
        voice.connect(dry).connect(output);

        const vibrato = context.createOscillator();
        vibrato.frequency.value = syllable.vibratoRate;
        const vibratoCents = context.createGain();
        vibratoCents.gain.value = syllable.isTrill
            ? 90 + 80 * syllable.section.ringFraction
            : 15 + 60 * syllable.section.roughness;
        vibrato.connect(vibratoCents);

        [
            1,
            ...syllable.chordRatios,
        ].forEach((ratio, chordIndex) => {
            const chordGain = context.createGain();
            chordGain.gain.value = chordIndex ? 0.55 : 1;
            chordGain.connect(voice);
            /** A slightly detuned twin thickens the main note, more so for rough sections. */
            (chordIndex
                ? [
                      0,
                  ]
                : [
                      0,
                      8 + 35 * syllable.section.roughness,
                  ]
            ).forEach((detune) => {
                const oscillator = context.createOscillator();
                oscillator.type = syllable.waveform;
                oscillator.detune.value = detune;
                oscillator.frequency.setValueAtTime(
                    syllable.pitch * ratio * syllable.contour[0],
                    start,
                );
                oscillator.frequency.exponentialRampToValueAtTime(
                    syllable.pitch * ratio * syllable.contour[1],
                    start + syllable.durationSeconds * syllable.peakFraction,
                );
                oscillator.frequency.exponentialRampToValueAtTime(
                    syllable.pitch * ratio * syllable.contour[2],
                    stop,
                );
                vibratoCents.connect(oscillator.detune);
                oscillator.connect(chordGain);
                oscillator.start(start);
                oscillator.stop(stop + 0.05);
            });
        });
        vibrato.start(start);
        vibrato.stop(stop + 0.05);

        if (syllable.section.roughness > 0) {
            const noiseBuffer = context.createBuffer(1, context.sampleRate / 4, context.sampleRate);
            const noiseSamples = noiseBuffer.getChannelData(0);
            noiseSamples.set(noiseSamples.map(() => noiseRandom() * 2 - 1));
            const noise = context.createBufferSource();
            noise.buffer = noiseBuffer;
            const noiseFilter = context.createBiquadFilter();
            noiseFilter.type = 'bandpass';
            noiseFilter.frequency.value = syllable.formants[1]?.start ?? 1000;
            const noiseGain = context.createGain();
            noiseGain.gain.setValueAtTime(0.6 * syllable.section.roughness, start);
            noiseGain.gain.exponentialRampToValueAtTime(0.0001, start + 0.1);
            noise.connect(noiseFilter).connect(noiseGain).connect(output);
            noise.start(start);
            noise.stop(start + 0.12);
        }
    });

    const lastSyllable = syllables.at(-1);

    return {
        analyser,
        isFinished() {
            return (
                context.currentTime >
                now +
                    (lastSyllable ? lastSyllable.startSeconds + lastSyllable.durationSeconds : 0) +
                    0.1
            );
        },
        stop() {
            output.gain.setTargetAtTime(0, context.currentTime, 0.02);
            globalThis.setTimeout(() => output.disconnect(), 200);
        },
    };
}
