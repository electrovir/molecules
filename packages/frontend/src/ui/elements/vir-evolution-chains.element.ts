import {css, defineElement, html} from 'element-vir';
import {chainStartRouteNames} from '../../data/evolution-chains.js';
import {type FrontendRouter} from '../frontend-state/frontend-state.js';
import {VirEvolutionChain} from './vir-evolution-chain.element.js';

/** Every evolution chain. */
export const VirEvolutionChains = defineElement<{
    router: Pick<FrontendRouter, 'createRouteUrl' | 'setRouteOnDirectNavigation'>;
}>()({
    tagName: 'vir-evolution-chains',
    styles: css`
        :host {
            box-sizing: border-box;
            padding: 0 16px 16px;
            overflow: auto;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
        }

        :host,
        * {
            touch-action: pan-x pan-y;
        }

        ${VirEvolutionChain} {
            flex-shrink: 0;
        }
    `,
    render({inputs}) {
        return chainStartRouteNames.map((startRouteName) => {
            return html`
                <${VirEvolutionChain.assign({
                    router: inputs.router,
                    startRouteName,
                })}></${VirEvolutionChain}>
            `;
        });
    },
});
