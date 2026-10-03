// cspell:words formants xorshift tarjan's detuned
import {createArray, getObjectTypedEntries, getObjectTypedValues} from '@augment-vir/common';
import {ChemicalElementSymbol} from '../data/chemical-element.js';
import {getMolarMass, type Molecule} from '../data/molecule.js';
import {getVibrationPartials, type VibrationPartial} from './molecule-vibrations.js';

enum Vowel {
    Oo = 'oo',
    Oh = 'oh',
    Ee = 'ee',
    Ah = 'ah',
    Eh = 'eh',
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
};

const vowelElements: Record<Vowel, ChemicalElementSymbol[]> = {
    [Vowel.Oo]: [
        ChemicalElementSymbol.C,
    ],
    [Vowel.Oh]: [
        ChemicalElementSymbol.O,
    ],
    [Vowel.Ee]: [
        ChemicalElementSymbol.N,
    ],
    [Vowel.Ah]: [
        ChemicalElementSymbol.F,
        ChemicalElementSymbol.Cl,
        ChemicalElementSymbol.Br,
        ChemicalElementSymbol.I,
    ],
    [Vowel.Eh]: [
        ChemicalElementSymbol.S,
        ChemicalElementSymbol.P,
        ChemicalElementSymbol.Si,
        ChemicalElementSymbol.B,
        ChemicalElementSymbol.Xe,
        ChemicalElementSymbol.H,
    ],
};

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
 * Splits the molecule, from one end to the other along its bonds, into sections of heavy atoms
 * (with their hydrogens). Each section becomes one syllable of the cry.
 */
export function getCrySections(molecule: Readonly<Pick<Molecule, 'atoms' | 'bonds'>>) {
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
    const sectionCount = Math.min(6, Math.max(1, Math.ceil(orderedAtoms.length / 4)));

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

        return {
            atomCount: section.length + hydrogenCount,
            hydrogenFraction: hydrogenCount / (section.length + hydrogenCount),
            averageMass: getMolarMass(section.map(({atom}) => atom)) / section.length,
            ringFraction:
                section.filter(({atomIndex}) => isInRing[atomIndex]).length / section.length,
            multipleBondFraction:
                section.filter(({atomIndex}) => {
                    return (neighbors[atomIndex] ?? []).some((neighbor) => neighbor.order > 1);
                }).length / section.length,
            vowelWeights: {
                [Vowel.Oo]: getFraction(vowelElements[Vowel.Oo]),
                [Vowel.Oh]: getFraction(vowelElements[Vowel.Oh]),
                [Vowel.Ee]: getFraction(vowelElements[Vowel.Ee]),
                [Vowel.Ah]: getFraction(vowelElements[Vowel.Ah]),
                [Vowel.Eh]: getFraction(vowelElements[Vowel.Eh]),
            } satisfies Record<Vowel, number>,
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

const syllableGapSeconds = 0.035;

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
    const sections = getCrySections(molecule);
    const totalSeconds = 0.4 + 0.18 * Math.log2(molecule.atoms.length);
    const weightTotal = sections.reduce(
        (total, section) => total + Math.sqrt(section.atomCount),
        0,
    );
    const basePitch =
        1000 * (getMolarMass(molecule.atoms) / 2) ** -0.3 * 2 ** ((random() - 0.5) * 0.3);
    const vibratoRate = 4 + 4 * random();
    /** Most-repeated vibrations first: they are the molecule's most characteristic tones. */
    const chordPartials = getVibrationPartials(molecule).toSorted((first, second) => {
        return (
            second.degeneracy - first.degeneracy ||
            first.waveNumberPerCentimeter - second.waveNumberPerCentimeter
        );
    });

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
            formants: number[];
            isTrill: boolean;
            vibratoRate: number;
            chordRatios: number[];
        }[];
        nextStartSeconds: number;
    }>(
        (plan, section, sectionIndex) => {
            const durationSeconds =
                ((totalSeconds - syllableGapSeconds * (sections.length - 1)) *
                    Math.sqrt(section.atomCount)) /
                weightTotal;
            const pitch =
                basePitch *
                (12 / section.averageMass) ** 0.35 *
                (1 + 0.3 * section.hydrogenFraction) *
                2 ** ((random() - 0.5) * 0.5);
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
            const vowelTotal =
                getObjectTypedValues(section.vowelWeights).reduce(
                    (total, weight) => total + weight,
                    0,
                ) || 1;
            const formants = [
                0,
                1,
            ].map((formantIndex) => {
                return (
                    getObjectTypedEntries(section.vowelWeights).reduce(
                        (
                            total,
                            [
                                vowel,
                                weight,
                            ],
                        ) => {
                            return (
                                total +
                                ((vowelFormants[vowel][formantIndex] ?? 0) * weight) / vowelTotal
                            );
                        },
                        0,
                    ) *
                    (0.92 + 0.16 * random())
                );
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
                    },
                ],
                nextStartSeconds:
                    plan.nextStartSeconds + durationSeconds + syllableGapSeconds * (0.5 + random()),
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

const cryAudio: {
    context: AudioContext | undefined;
} = {
    context: undefined,
};

/**
 * Plays a Pokémon-style cry made from the molecule's structure. It reads the molecule end to end,
 * one syllable per section. Elements pick the vowel, heavier sections sing lower, rings trill,
 * double bonds chirp upward, and plain chains slide down. Chords come from the molecule's vibration
 * frequencies. Must be called from a user gesture the first time, or browsers keep the audio
 * muted.
 */
export function playMoleculeCry({
    molecule,
    seed,
}: Readonly<{
    molecule: Readonly<Molecule>;
    /** Usually the route name. Small pitch and timing offsets come from it. */
    seed: string;
}>): PlayingCry {
    cryAudio.context ??= new AudioContext();
    const context = cryAudio.context;
    void context.resume();

    const output = context.createGain();
    output.gain.value = 0.8;
    const compressor = context.createDynamicsCompressor();
    const analyser = context.createAnalyser();
    analyser.fftSize = 1024;
    output.connect(compressor).connect(analyser).connect(context.destination);

    const now = context.currentTime + 0.03;
    const noiseRandom = createSeededRandom(hashString(seed) + 1);
    const syllables = planCry({
        molecule,
        seed,
    });

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
            filter.frequency.value = formant;
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
                oscillator.type =
                    syllable.section.multipleBondFraction > 0.5 ? 'square' : 'sawtooth';
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
            noiseFilter.frequency.value = syllable.formants[1] ?? 1000;
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
