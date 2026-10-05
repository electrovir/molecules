import {css, defineElement, html} from 'element-vir';
import {ViraLink, viraTheme} from 'vira';
import {chemicalElements} from '../../data/chemical-element.js';
import {elementSymbols, getPeriodicTablePosition} from '../../data/periodic-table.js';
import {createAtomRoute, type FrontendRouter} from '../frontend-state/frontend-state.js';
import {VirAtomThumbnail} from './vir-atom-thumbnail.element.js';

/** Every element in a periodic table, each linking to that element's atom page. */
export const VirPeriodicTable = defineElement<{
    router: Pick<FrontendRouter, 'createRouteUrl' | 'setRouteOnDirectNavigation'>;
}>()({
    tagName: 'vir-periodic-table',
    styles: css`
        :host {
            box-sizing: border-box;
            padding: 0 16px 16px;
            overflow: auto;
        }

        :host,
        * {
            touch-action: pan-x pan-y;
        }

        .table {
            display: grid;
            grid-template-columns: repeat(18, minmax(48px, 1fr));
            grid-template-rows: repeat(7, auto) 16px repeat(2, auto);
            gap: 4px;
        }

        ${ViraLink} {
            display: block;
            text-decoration: none;
        }

        .cell {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2px;
            padding: 4px;
            border-radius: 8px;
            background-color: rgba(0, 0, 0, 0.5);

            &:hover {
                background-color: rgba(0, 0, 0, 1);
            }

            & ${VirAtomThumbnail} {
                width: 100%;
            }
        }

        .atomic-number {
            font-size: 12px;
            color: ${viraTheme.colors['vira-grey-foreground-header'].foreground.value};
        }
    `,
    render({inputs}) {
        return html`
            <div class="table">
                ${elementSymbols.map((symbol) => {
                    const element = chemicalElements[symbol];
                    const position = getPeriodicTablePosition(element.atomicNumber);

                    return html`
                        <${ViraLink.assign({
                            route: {
                                route: createAtomRoute(symbol),
                                router: inputs.router,
                            },
                            disableLinkStyles: true,
                        })}
                            title=${element.name}
                            style=${css`
                                grid-row: ${position.row};
                                grid-column: ${position.column};
                            `}
                        >
                            <div class="cell">
                                <span class="atomic-number">${element.atomicNumber}</span>
                                <${VirAtomThumbnail.assign({
                                    symbol,
                                })}></${VirAtomThumbnail}>
                            </div>
                        </${ViraLink}>
                    `;
                })}
            </div>
        `;
    },
});
