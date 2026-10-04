/**
 * Renders every molecule at its default starting angle to a transparent PNG, plus a smaller
 * thumbnail, in `packages/frontend/www-static/molecule-images/`. Starts and stops its own Vite dev
 * server, separate from any already running:
 *
 *     npm run render:images --workspace @molecules/scripts
 */
import {assertWrap} from '@augment-vir/assert';
import {awaitedForEach, log, removePrefix} from '@augment-vir/common';
import {moleculeRouteNames} from '@molecules/frontend/src/data/all-molecules.js';
import {mkdir} from 'node:fs/promises';
import {join} from 'node:path';
import {chromium} from 'playwright';
import sharp from 'sharp';
import {buildUrl} from 'url-vir';
import {createServer} from 'vite';
import {frontendViteConfigFilePath, moleculeImagesDirPath} from './file-paths.js';

const thumbnailPixels = 200;

async function renderMoleculeImages() {
    await mkdir(moleculeImagesDirPath, {
        recursive: true,
    });
    const server = await createServer({
        configFile: frontendViteConfigFilePath,
        logLevel: 'warn',
        server: {
            /** The shared config listens on every network interface, which this has no use for. */
            host: 'localhost',
            /** Vite picks a free port, so this never collides with a dev server already running. */
            port: 0,
            /**
             * The shared config's always-reload plugin reloads the page whenever a file in
             * `www-static` changes, which includes every image this writes. Without a websocket,
             * those reloads never reach the page to abort the next molecule's load.
             */
            ws: false,
        },
    });
    try {
        await server.listen();
        const serverUrl = assertWrap.isDefined(server.resolvedUrls?.local[0]);
        const browser = await chromium.launch({
            args: [
                '--use-angle=metal',
            ],
        });
        try {
            const page = await browser.newPage({
                /**
                 * The render page sizes its own canvas, so this keeps it at one canvas pixel per
                 * PNG pixel.
                 */
                deviceScaleFactor: 1,
                /**
                 * The shared config serves HTTPS with a local certificate when `HTTPS_CERT_PATH` is
                 * set.
                 */
                ignoreHTTPSErrors: true,
            });
            await awaitedForEach(moleculeRouteNames, async (moleculeId) => {
                /** A fresh page load per molecule starts each one at its own default angle. */
                await page.goto(
                    buildUrl(serverUrl, {
                        paths: [
                            'render-molecule.html',
                        ],
                        search: {
                            molecule: moleculeId,
                        },
                    }).href,
                );
                const result = page.locator('body > img, body > pre');
                await result.waitFor();
                const dataUrl = await result.getAttribute('src');
                if (!dataUrl) {
                    throw new Error(
                        `Failed to render '${moleculeId}': ${(await result.textContent()) || 'no error message'}`,
                    );
                }
                const image = sharp(
                    Buffer.from(
                        removePrefix({
                            value: dataUrl,
                            prefix: 'data:image/png;base64,',
                        }),
                        'base64',
                    ),
                );
                await Promise.all([
                    image
                        .clone()
                        .png({
                            compressionLevel: 9,
                        })
                        .toFile(join(moleculeImagesDirPath, `${moleculeId}.png`)),
                    image
                        .clone()
                        .resize(thumbnailPixels, thumbnailPixels)
                        .png({
                            compressionLevel: 9,
                        })
                        .toFile(join(moleculeImagesDirPath, `${moleculeId}.thumbnail.png`)),
                ]);
            });
        } finally {
            await browser.close();
        }
    } finally {
        await server.close();
    }
}

try {
    await renderMoleculeImages();
    log.success(`Wrote ${moleculeRouteNames.length} molecule images to ${moleculeImagesDirPath}`);
    process.exit(0);
} catch (error) {
    log.error(error);
    process.exit(1);
}
