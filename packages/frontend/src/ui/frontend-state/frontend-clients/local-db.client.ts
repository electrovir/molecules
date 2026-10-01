import {LocalDbClient} from 'local-db-client';
import {renderQualityShape} from '../../three/render-quality.js';

export async function createMoleculesLocalDbClient() {
    return await LocalDbClient.createClient(
        {
            /** The last render quality the frame rate settled on, so a reload starts there. */
            settledRenderQualityV2: {
                shape: renderQualityShape,
            },
        },
        {
            storeName: 'molecules',
        },
    );
}

export type MoleculesLocalDbClient = Awaited<ReturnType<typeof createMoleculesLocalDbClient>>;
