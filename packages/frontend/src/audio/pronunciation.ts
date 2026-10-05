import {getAudioOutput} from './audio-output.js';

/** Shared by every press, so a new press cuts off the name still being said. */
const nameAudio: {
    source: AudioBufferSourceNode | undefined;
    pressCount: number;
} = {
    source: undefined,
    pressCount: 0,
};

/**
 * Plays a pre-recorded name from `www-static/pronunciations`, generated from dictionary
 * pronunciations instead of leaving the device's voice to guess at chemical names and acronyms.
 * Cuts off any name still playing.
 */
export async function playPronunciation(fileUrl: string) {
    /**
     * Web Audio instead of an `<audio>` element: media elements claim the OS media session, so the
     * system media keys would replay the name.
     */
    const {context, masterVolume} = getAudioOutput();
    nameAudio.source?.stop();
    nameAudio.source = undefined;
    nameAudio.pressCount++;
    const pressCount = nameAudio.pressCount;

    const response = await fetch(fileUrl);
    const buffer = await context.decodeAudioData(await response.arrayBuffer());

    /** A newer press started while this one was still loading. */
    if (nameAudio.pressCount !== pressCount) {
        return;
    }

    const source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(masterVolume);
    source.start();
    nameAudio.source = source;
}
