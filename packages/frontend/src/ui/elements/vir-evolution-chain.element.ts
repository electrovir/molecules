import {assertWrap} from '@augment-vir/assert';
import {type PartialWithUndefined} from '@augment-vir/common';
import {css, defineElement, html, type HTMLTemplateResult, nothing} from 'element-vir';
import {lucideIcons, ViraCard, ViraIcon, ViraLink, viraTheme} from 'vira';
import {moleculeSummaries} from '../../data/all-molecules.js';
import {
    createMoleculeRoute,
    createStaticFileUrl,
    type FrontendRouter,
} from '../frontend-state/frontend-state.js';

/** One evolution chain, each molecule's thumbnail pointing at what it evolves into. */
export const VirEvolutionChain = defineElement<
    {
        router: Pick<FrontendRouter, 'createRouteUrl' | 'setRouteOnDirectNavigation'>;
        startRouteName: string;
    } & PartialWithUndefined<{
        /** Outlined in the chain. */
        currentRouteName: string;
        /** Sizes the thumbnails so the longest chain fills this element's width. */
        isCompact: boolean;
    }>
>()({
    tagName: 'vir-evolution-chain',
    hostClasses: {
        'vir-evolution-chain-compact'({inputs}) {
            return !!inputs.isCompact;
        },
    },
    styles: ({hostClasses}) => css`
        :host {
            display: block;
        }

        .chain,
        .branch {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .branches {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        ${ViraIcon} {
            flex-shrink: 0;
            width: 32px;
            height: 32px;
        }

        ${ViraLink} {
            text-decoration: none;

            & ${ViraCard} {
                background-color: rgba(0, 0, 0, 0.5);
                box-sizing: border-box;
                width: 120px;
                display: flex;
                padding: 4px 4px 8px;
                flex-direction: column;
                align-items: center;
                gap: 4px;
                text-align: center;

                &:hover,
                &.current {
                    background-color: rgba(0, 0, 0, 1);
                    border-color: white;
                }
            }

            & img {
                width: 100%;
                aspect-ratio: 1;
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

        ${hostClasses['vir-evolution-chain-compact'].selector} {
            container-type: inline-size;
            display: flex;
            justify-content: center;
        }

        ${hostClasses['vir-evolution-chain-compact'].selector} .chain,
        ${hostClasses['vir-evolution-chain-compact'].selector} .branch,
        ${hostClasses['vir-evolution-chain-compact'].selector} .branches {
            gap: 8px;
        }

        ${hostClasses['vir-evolution-chain-compact'].selector} ${ViraIcon} {
            width: 20px;
            height: 20px;
        }

        ${hostClasses['vir-evolution-chain-compact'].selector} ${ViraCard} {
            /**
             * Chains are at most 3 molecules long: 3 cards, 2 arrows, and 4 gaps. The cards take
             * less than the full width to leave room around them.
             */
            width: calc((100cqi - 2 * 20px - 4 * 8px) / 3 * 0.75);
            padding: 2px 2px 4px;
        }

        ${hostClasses['vir-evolution-chain-compact'].selector} .name {
            font-size: 12px;
        }

        ${hostClasses['vir-evolution-chain-compact'].selector} .formula {
            font-size: 11px;
        }
    `,
    render({inputs}) {
        /** Annotated because the recursion leaves TypeScript nothing to infer from. */
        function renderChain(routeName: string): HTMLTemplateResult {
            const summary = assertWrap.isDefined(moleculeSummaries[routeName]);

            return html`
                <div class="chain">
                    <${ViraLink.assign({
                        route: {
                            route: createMoleculeRoute(routeName),
                            router: inputs.router,
                        },
                        disableLinkStyles: true,
                    })}>
                        <${ViraCard}
                            class=${routeName === inputs.currentRouteName ? 'current' : ''}
                        >
                            <img
                                alt=""
                                loading="lazy"
                                src=${createStaticFileUrl(
                                    'molecule-images',
                                    `${routeName}.thumbnail.png`,
                                )}
                            />
                            <span class="name">${summary.name}</span>
                            <span class="formula">${summary.formula}</span>
                        </${ViraCard}>
                    </${ViraLink}>
                    ${summary.evolvesInto.length
                        ? html`
                              <div class="branches">
                                  ${summary.evolvesInto.map((evolvedRouteName) => {
                                      return html`
                                          <div class="branch">
                                              <${ViraIcon.assign({
                                                  icon: lucideIcons.ArrowRight,
                                                  fitContainer: true,
                                              })}></${ViraIcon}>
                                              ${renderChain(evolvedRouteName)}
                                          </div>
                                      `;
                                  })}
                              </div>
                          `
                        : nothing}
                </div>
            `;
        }

        return renderChain(inputs.startRouteName);
    },
});
