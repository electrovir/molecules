const {baseConfig} = require('@virmator/spellcheck/configs/cspell.config.base.cjs');

module.exports = {
    ...baseConfig,
    ignorePaths: [
        ...baseConfig.ignorePaths,
    ],
    words: [
        ...baseConfig.words,
        'ångströms',
        'debye',
        'raycaster',
        'waals',
        'hyperlegible',
        'occluder',
        'occluders',
        'texels',
    ],
};
