/**
 * Dev-only page, not part of the app build, that renders one molecule to a transparent PNG for
 * `packages/scripts/src/render-molecule-images.script.ts`. Open
 * `/render-molecule.html?molecule=<molecule id>` to see a single image. The finished image shows up
 * as an `<img>`, or a `<pre>` with the error if rendering failed.
 */
import {assert, assertWrap} from '@augment-vir/assert';
import {createArray, extractErrorMessage} from '@augment-vir/common';
import {parseUrl} from 'url-vir';
import {moleculeRouteNames} from '../data/all-molecules.js';
import {type Molecule} from '../data/molecule.js';
import {createMoleculeScene} from './three/molecule-scene.js';

const imagePixels = 1024;
/** Empty space on each side of the molecule, as a fraction of its larger dimension. */
const paddingFraction = 0.06;

/** Finds the box, in pixels, around everything in the image that isn't fully transparent. */
async function findOpaqueBounds(imageUrl: string) {
    const image = new Image();
    image.src = imageUrl;
    await image.decode();
    const context = assertWrap.isDefined(
        new OffscreenCanvas(image.width, image.height).getContext('2d'),
    );
    context.drawImage(image, 0, 0);
    const pixels = context.getImageData(0, 0, image.width, image.height).data;
    const rowHasPixels = createArray(image.height, (row) => {
        return createArray(image.width, (column) => {
            return !!pixels[(row * image.width + column) * 4 + 3];
        }).includes(true);
    });
    const columnHasPixels = createArray(image.width, (column) => {
        return createArray(image.height, (row) => {
            return !!pixels[(row * image.width + column) * 4 + 3];
        }).includes(true);
    });
    assert.isTrue(rowHasPixels.includes(true), 'Rendered image is empty.');
    return {
        left: columnHasPixels.indexOf(true),
        right: columnHasPixels.lastIndexOf(true) + 1,
        top: rowHasPixels.indexOf(true),
        bottom: rowHasPixels.lastIndexOf(true) + 1,
    };
}

async function renderMoleculeImage() {
    const moleculeId = parseUrl(globalThis.location.href).searchParams.molecule?.[0] || '';
    assert.isIn(moleculeId, moleculeRouteNames, `Unknown molecule id: '${moleculeId}'.`);
    const molecule: Molecule = (await import(`../data/molecules/${moleculeId}.molecule.ts`))
        .default;

    const scene = createMoleculeScene({
        isSnapshot: true,
    });
    try {
        /** The camera's fit distance is set from the canvas size, so this goes first. */
        scene.resize({
            width: imagePixels,
            height: imagePixels,
        });
        scene.setMolecule(molecule);
        const bounds = await findOpaqueBounds(scene.captureImage());
        const size =
            Math.max(bounds.right - bounds.left, bounds.bottom - bounds.top) *
            (1 + paddingFraction * 2);
        return scene.captureImage({
            left: (bounds.left + bounds.right - size) / 2,
            top: (bounds.top + bounds.bottom - size) / 2,
            size,
        });
    } finally {
        scene.dispose();
    }
}

try {
    const image = globalThis.document.createElement('img');
    image.src = await renderMoleculeImage();
    globalThis.document.body.append(image);
} catch (error) {
    const errorText = globalThis.document.createElement('pre');
    errorText.textContent = extractErrorMessage(error);
    globalThis.document.body.append(errorText);
}
