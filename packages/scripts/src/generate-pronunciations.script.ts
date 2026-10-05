// cspell:words dtype libmp pretrained
/**
 * Speaks every molecule's and element's `pronunciation` with Kokoro and writes one MP3 per molecule
 * to `packages/frontend/www-static/pronunciations/` and one per element to its `atoms/`. Output is
 * identical on every run, so only clips whose phonemes changed show up in a diff. Needs `ffmpeg` on
 * the path:
 *
 *     npm run build:pronunciations --workspace @molecules/scripts
 */
import {assertWrap} from '@augment-vir/assert';
import {awaitedForEach, log} from '@augment-vir/common';
import {Tensor} from '@huggingface/transformers';
import {moleculeRouteNames} from '@molecules/frontend/src/data/all-molecules.js';
import {chemicalElements} from '@molecules/frontend/src/data/chemical-element.js';
import {type Molecule} from '@molecules/frontend/src/data/molecule.js';
import {elementSymbols, getElementRouteName} from '@molecules/frontend/src/data/periodic-table.js';
import {KokoroTTS} from 'kokoro-js';
import {spawn} from 'node:child_process';
import {mkdir, readFile} from 'node:fs/promises';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {atomPronunciationsDirPath, pronunciationsDirPath} from './file-paths.js';

function encodeMp3({
    samples,
    sampleRate,
    outputFilePath,
}: Readonly<{samples: Float32Array; sampleRate: number; outputFilePath: string}>) {
    return new Promise<void>((resolve, reject) => {
        // eslint-disable-next-line sonarjs/no-os-command-from-path -- this local build script runs whichever `ffmpeg` the developer installed
        const ffmpeg = spawn('ffmpeg', [
            '-v',
            'error',
            '-y',
            '-f',
            'f32le',
            '-ar',
            `${sampleRate}`,
            '-ac',
            '1',
            '-i',
            '-',
            '-c:a',
            'libmp3lame',
            '-b:a',
            '40k',
            outputFilePath,
        ]);
        ffmpeg.on('error', reject);
        ffmpeg.on('close', (code) => {
            if (code) {
                reject(
                    new Error(`ffmpeg exited with code ${code} while writing '${outputFilePath}'.`),
                );
            } else {
                resolve();
            }
        });
        ffmpeg.stdin.end(Buffer.from(samples.buffer, samples.byteOffset, samples.byteLength));
    });
}

/**
 * Cuts the leading silence so a press starts speaking right away. The end stays: trimming it too
 * cut off quiet final sounds like the "-n" of "hydrogen".
 */
function trimLeadingSilence({
    samples,
    sampleRate,
}: Readonly<{samples: Float32Array; sampleRate: number}>) {
    const firstSoundIndex = samples.findIndex((sample) => Math.abs(sample) > 0.002);
    return samples.subarray(Math.max(0, firstSoundIndex - Math.round(0.05 * sampleRate)));
}

/** Kokoro always outputs 24 kHz audio. */
const sampleRate = 24_000;

async function generatePronunciations() {
    await mkdir(atomPronunciationsDirPath, {
        recursive: true,
    });
    const tts = await KokoroTTS.from_pretrained('onnx-community/Kokoro-82M-v1.0-ONNX', {
        /** The full-precision model is the one the phonemes were tuned against. */
        dtype: 'fp32',
        device: 'cpu',
    });
    const voiceStyles = new Float32Array(
        (
            await readFile(
                join(
                    dirname(fileURLToPath(import.meta.resolve('kokoro-js'))),
                    '..',
                    'voices',
                    'af_heart.bin',
                ),
            )
        ).buffer,
    );

    async function speak({
        pronunciation,
        styleOffset,
        outputFilePath,
    }: Readonly<{
        pronunciation: string;
        styleOffset: number;
        outputFilePath: string;
    }>) {
        /** The full stop gives Kokoro a sentence ending; bare words came out sounding garbled. */
        const inputIds = tts.tokenizer(`${pronunciation}.`).input_ids;
        /**
         * The voice holds one style per phoneme count. Kokoro's own pipeline picks row `count - 1`,
         * but kokoro-js's `generate_from_ids` picks row `count`, which put a stray "tch" in
         * chlorine. The count leaves out the two padding tokens the tokenizer adds.
         */
        const styleRow = assertWrap.isDefined(inputIds.dims.at(-1)) - 3 + styleOffset;
        const {waveform} = await tts.model({
            input_ids: inputIds,
            style: new Tensor(
                'float32',
                voiceStyles.subarray(styleRow * 256, styleRow * 256 + 256),
                [
                    1,
                    256,
                ],
            ),
            speed: new Tensor('float32', [1], [1]),
        });
        await encodeMp3({
            samples: trimLeadingSilence({
                samples: waveform.data,
                sampleRate,
            }),
            sampleRate,
            outputFilePath,
        });
    }

    await awaitedForEach(moleculeRouteNames, async (routeName) => {
        const molecule: Molecule = (
            await import(`@molecules/frontend/src/data/molecules/${routeName}.molecule.js`)
        ).default;
        await speak({
            pronunciation: molecule.pronunciation,
            styleOffset: molecule.pronunciationStyleOffset ?? 0,
            outputFilePath: join(pronunciationsDirPath, `${routeName}.mp3`),
        });
    });

    await awaitedForEach(elementSymbols, async (symbol) => {
        await speak({
            pronunciation: chemicalElements[symbol].pronunciation,
            styleOffset: 0,
            outputFilePath: join(atomPronunciationsDirPath, `${getElementRouteName(symbol)}.mp3`),
        });
    });

    log.success(
        `Wrote ${moleculeRouteNames.length} molecule and ${elementSymbols.length} atom pronunciations to ${pronunciationsDirPath}`,
    );
}

try {
    await generatePronunciations();
} catch (error) {
    log.error(error);
    process.exit(1);
}
