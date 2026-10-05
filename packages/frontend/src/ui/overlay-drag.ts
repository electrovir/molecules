import {assertWrap} from '@augment-vir/assert';

/** A touch on a phone overlay's header that resizes the overlay. */
export type OverlayDrag = Readonly<{
    pointerId: number;
    startY: number;
    startHeight: number;
    /** The overlay's height with all of its content showing, capped at the screen's height. */
    maxHeight: number;
    /** `false` until the touch moves far enough to stop counting as a tap on the header's buttons. */
    isDragging: boolean;
}>;

/**
 * Listen with it on the overlay's header, which must be the overlay's direct child. The overlay's
 * `.scroll-area` child, if any, is the part that grows.
 */
export function startOverlayDrag(event: PointerEvent): OverlayDrag {
    const overlay = assertWrap.isDefined(
        assertWrap.instanceOf(event.currentTarget, HTMLElement).parentElement,
    );
    const scrollArea = overlay.querySelector<HTMLElement>('.scroll-area') ?? overlay;

    return {
        pointerId: event.pointerId,
        startY: event.clientY,
        startHeight: overlay.offsetHeight,
        maxHeight: Math.min(
            globalThis.innerHeight,
            overlay.offsetHeight - scrollArea.clientHeight + scrollArea.scrollHeight,
        ),
        isDragging: false,
    };
}

/**
 * The overlay's new height for a `pointermove`, or `undefined` while the move is still a tap.
 * Captures the pointer once dragging starts so the header's buttons don't get the `pointerup`.
 */
export function moveOverlayDrag({
    event,
    drag,
    minHeight,
}: Readonly<{
    event: PointerEvent;
    drag: OverlayDrag;
    minHeight: number;
}>) {
    const distance = drag.startY - event.clientY;
    if (event.pointerId !== drag.pointerId || (!drag.isDragging && Math.abs(distance) < 8)) {
        return undefined;
    }
    if (!drag.isDragging && event.currentTarget instanceof Element) {
        event.currentTarget.setPointerCapture(event.pointerId);
    }

    return Math.max(minHeight, Math.min(drag.maxHeight, drag.startHeight + distance));
}
