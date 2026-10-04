const audioOutput: {
    current:
        | {
              context: AudioContext;
              masterVolume: GainNode;
          }
        | undefined;
} = {
    current: undefined,
};

function createAudioOutput() {
    const context = new AudioContext();
    const masterVolume = context.createGain();
    masterVolume.gain.value = 1.4;
    masterVolume.connect(context.destination);

    return {
        context,
        masterVolume,
    };
}

/**
 * The audio context shared by every sound the app plays. Connect sounds to `masterVolume` instead
 * of `context.destination` so they all scale together. Must be called from a user gesture the first
 * time, or browsers keep the audio muted.
 */
export function getAudioOutput() {
    audioOutput.current ??= createAudioOutput();
    void audioOutput.current.context.resume();
    return audioOutput.current;
}
