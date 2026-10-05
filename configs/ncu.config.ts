import {baseNcuConfig} from '@virmator/deps/configs/ncu.config.base.js';
import {RunOptions} from 'npm-check-updates';

export const ncuConfig: RunOptions = {
    ...baseNcuConfig,
    // exclude these
    reject: [
        ...baseNcuConfig.reject,
        /**
         * Must stay on the major version `kokoro-js` depends on, so both share one copy. With its
         * own 4.x copy installed, the pronunciation script crashed inside `onnxruntime-node`.
         */
        '@huggingface/transformers',
    ],
    // include only these
    filter: [],
};
