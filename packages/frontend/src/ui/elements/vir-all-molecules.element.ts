import {getObjectTypedEntries, wait} from '@augment-vir/common';
import {css, defineElement, html, onDomCreated} from 'element-vir';
import {ViraCard, ViraLink, viraTheme} from 'vira';
import {moleculeSummaries} from '../../data/all-molecules.js';
import {
    createMoleculeRoute,
    createStaticFileUrl,
    type FrontendRouter,
} from '../frontend-state/frontend-state.js';

/** A grid of every molecule's thumbnail, each linking to that molecule. */
export const VirAllMolecules = defineElement<{
    router: Pick<FrontendRouter, 'createRouteUrl' | 'setRouteOnDirectNavigation'>;
}>()({
    tagName: 'vir-all-molecules',
    styles: css`
        :host {
            box-sizing: border-box;
            padding: 0 16px 16px;
            overflow-y: auto;
            display: flex;
            flex-wrap: wrap;
            align-content: flex-start;
            gap: 16px;
        }

        :host,
        * {
            touch-action: pan-y;
        }

        ${ViraLink} {
            /**
             * The link's inner anchor has no part to style, so it stays inline and the card inside
             * it sizes against this block, which stretches to the row's height.
             */
            display: block;
            flex-grow: 1;
            flex-basis: 120px;
            text-decoration: none;

            & ${ViraCard} {
                background-color: rgba(0, 0, 0, 0.5);
                box-sizing: border-box;
                height: 100%;
                display: flex;
                padding: 4px 4px 8px;
                flex-direction: column;
                align-items: center;
                gap: 4px;
                text-align: center;

                &:hover {
                    background-color: rgba(0, 0, 0, 1);
                    border-color: white;
                }
            }

            & .image-placeholder {
                width: 100%;
                max-width: 200px;
                aspect-ratio: 1;
                background-size: contain;
            }
        }

        .name {
            max-width: 100%;
            hyphens: auto;
            overflow-wrap: anywhere;
        }

        .formula {
            font-size: 14px;
            color: ${viraTheme.colors['vira-grey-foreground-header'].foreground.value};
        }
    `,
    render({inputs}) {
        return getObjectTypedEntries(moleculeSummaries).map(
            (
                [
                    moleculeId,
                    summary,
                ],
                index,
            ) => {
                return html`
                    <${ViraLink.assign({
                        route: {
                            route: createMoleculeRoute(moleculeId),
                            router: inputs.router,
                        },
                        disableLinkStyles: true,
                    })}>
                        <${ViraCard}>
                            <div
                                class="image-placeholder"
                                ${onDomCreated(async (element) => {
                                    /**
                                     * Spreads the thumbnails out so they don't all land in one
                                     * frame.
                                     */
                                    await wait({
                                        milliseconds: 10 + index * 4,
                                    });
                                    if (element instanceof HTMLElement) {
                                        element.style.backgroundImage = `url(${JSON.stringify(
                                            createStaticFileUrl(
                                                'molecule-images',
                                                `${moleculeId}.thumbnail.png`,
                                            ),
                                        )})`;
                                    }
                                })}
                            ></div>
                            <span class="name">${summary.name}</span>
                            <span class="formula">${summary.formula}</span>
                        </${ViraCard}>
                    </${ViraLink}>
                `;
            },
        );
    },
});
