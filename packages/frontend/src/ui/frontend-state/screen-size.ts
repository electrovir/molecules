import {assertWrap} from '@augment-vir/assert';
import {getObjectTypedEntries} from '@augment-vir/common';

export enum ScreenSize {
    Desktop = 'desktop',
    Phone = 'phone',
}

/**
 * App widths smaller than the given number trigger that screen size, with the smallest screen size
 * taking priority.
 */
const screenSizeWidthMax: Record<ScreenSize, number> = {
    [ScreenSize.Desktop]: Infinity,
    [ScreenSize.Phone]: 700,
};

const smallestToBiggestScreenSizes = getObjectTypedEntries(screenSizeWidthMax)
    .toSorted(
        (
            [
                ,
                aWidth,
            ],
            [
                ,
                bWidth,
            ],
        ) => aWidth - bWidth,
    )
    .map(([screenSize]) => screenSize);

function findScreenSizeIndex(width: number) {
    return smallestToBiggestScreenSizes.findIndex((screenSize) => {
        return width < screenSizeWidthMax[screenSize];
    });
}

/**
 * Determines which {@link ScreenSize} to use for the given `elementWidth`. Keeps
 * `currentScreenSize`, if provided, while the width is close to it, so that resizing near a
 * boundary doesn't flip the layout back and forth.
 */
export function determineScreenSize({
    currentScreenSize,
    elementWidth,
}: Readonly<{
    currentScreenSize: ScreenSize | undefined;
    elementWidth: number;
}>) {
    const threshold = currentScreenSize ? 30 : 0;
    const width = Math.abs(elementWidth);
    const currentIndex = currentScreenSize
        ? smallestToBiggestScreenSizes.indexOf(currentScreenSize)
        : -1;

    if (
        currentScreenSize &&
        currentIndex >= findScreenSizeIndex(width - threshold) &&
        currentIndex <= findScreenSizeIndex(width + threshold)
    ) {
        return currentScreenSize;
    }

    return assertWrap.isDefined(
        smallestToBiggestScreenSizes[findScreenSizeIndex(width)],
        `Failed to find matching screen size for '${elementWidth}'`,
    );
}
