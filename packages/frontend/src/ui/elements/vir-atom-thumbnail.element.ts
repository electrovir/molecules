import {css, defineElement, html, unsafeCSS} from 'element-vir';
import {
    type ChemicalElement,
    chemicalElements,
    type ChemicalElementSymbol,
} from '../../data/chemical-element.js';

/** Matches the 3D scene's color for elements without one. */
const fallbackAtomColor = 0xff_14_93;

function toCssColor(color: number) {
    return `#${color.toString(16).padStart(6, '0')}`;
}

/** Relative luminance, from 0 for black to 1 for white. */
function getLuminance(color: number) {
    const red = (color >> 16) & 0xff;
    const green = (color >> 8) & 0xff;
    const blue = color & 0xff;
    return (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;
}

/** A flat circle in the element's color with its symbol on it. Sized by the host's width. */
export const VirAtomThumbnail = defineElement<{
    symbol: ChemicalElementSymbol;
}>()({
    tagName: 'vir-atom-thumbnail',
    styles: css`
        :host {
            display: block;
            width: 64px;
            container-type: inline-size;
        }

        .ball {
            display: flex;
            align-items: center;
            justify-content: center;
            aspect-ratio: 1;
            border-radius: 50%;
            font-size: 45cqw;
            font-weight: bold;
        }
    `,
    render({inputs}) {
        const element: Readonly<ChemicalElement> = chemicalElements[inputs.symbol];
        const color = element.color ?? fallbackAtomColor;

        return html`
            <div
                class="ball"
                style=${css`
                    background-color: ${unsafeCSS(toCssColor(color))};
                    color: ${getLuminance(color) > 0.6 ? css`black` : css`white`};
                `}
            >
                ${inputs.symbol}
            </div>
        `;
    },
});
