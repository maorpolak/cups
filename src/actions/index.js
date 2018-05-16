/* action types */
export const CARD_DRAWN = 'CARD_DRAWN';
export const CARD_ADDED_TO_FLOP = 'CARD_ADDED_TO_FLOP';
export const FLOP_ADDED = 'FLOP_ADDED';
export const HAND_ADDED = 'HAND_ADDED';
export const CARD_ADDED_TO_HAND = 'CARD_ADDED_TO_HAND';

export function drawCard(card) {
    return {
        type: CARD_DRAWN,
        card,
    };
}

export function addFlop(cards) {
    return {
        type: FLOP_ADDED,
        cards,
    }
}

export function addHand(cards) {
    return {
        type: HAND_ADDED,
        cards,
    }
}

export function addCardToFlop(card, flopIndex) {
    return {
        type: CARD_ADDED_TO_FLOP,
        index: flopIndex,
        card,
    };
}

export function addCardToHand(card, handIndex) {
    return {
        type: CARD_ADDED_TO_HAND,
        index: handIndex,
        card,
    };
}