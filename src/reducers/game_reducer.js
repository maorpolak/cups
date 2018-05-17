import _ from 'lodash';

import {
    CARD_DRAWN,
    FLOP_ADDED,
    HAND_ADDED,
} from "../actions/index";

const initialState = {
    deck: _.shuffle([
        { value: 'Ace', suit: 'heart' },
        { value: 2, suit: 'heart' },
        { value: 3, suit: 'heart' },
        { value: 4, suit: 'heart' },
        { value: 5, suit: 'heart' },
        { value: 6, suit: 'heart' },
        { value: 7, suit: 'heart' },
        { value: 8, suit: 'heart' },
        { value: 9, suit: 'heart' },
        { value: 10, suit: 'heart' },
        { value: 'Jack', suit: 'heart' },
        { value: 'Queen', suit: 'heart' },
        { value: 'King', suit: 'heart' },
        { value: 'Ace', suit: 'heart' },
        { value: 2, suit: 'spade' },
        { value: 3, suit: 'spade' },
        { value: 4, suit: 'spade' },
        { value: 5, suit: 'spade' },
        { value: 6, suit: 'spade' },
        { value: 7, suit: 'spade' },
        { value: 8, suit: 'spade' },
        { value: 9, suit: 'spade' },
        { value: 10, suit: 'spade' },
        { value: 'Jack', suit: 'spade' },
        { value: 'Queen', suit: 'spade' },
        { value: 'King', suit: 'spade' },
        { value: 'Ace', suit: 'diamond' },
        { value: 2, suit: 'diamond' },
        { value: 3, suit: 'diamond' },
        { value: 4, suit: 'diamond' },
        { value: 5, suit: 'diamond' },
        { value: 6, suit: 'diamond' },
        { value: 7, suit: 'diamond' },
        { value: 8, suit: 'diamond' },
        { value: 9, suit: 'diamond' },
        { value: 10, suit: 'diamond' },
        { value: 'Jack', suit: 'diamond' },
        { value: 'Queen', suit: 'diamond' },
        { value: 'King', suit: 'diamond' },
        { value: 'Ace', suit: 'clover' },
        { value: 2, suit: 'clover' },
        { value: 3, suit: 'clover' },
        { value: 4, suit: 'clover' },
        { value: 5, suit: 'clover' },
        { value: 6, suit: 'clover' },
        { value: 7, suit: 'clover' },
        { value: 8, suit: 'clover' },
        { value: 9, suit: 'clover' },
        { value: 10, suit: 'clover' },
        { value: 'Jack', suit: 'clover' },
        { value: 'Queen', suit: 'clover' },
        { value: 'King', suit: 'clover' },
    ]),
    flops: [],
    hands: [],
}

export default function(state = initialState, action) {
    switch (action.type) {
        case CARD_DRAWN:
            _.remove(state.deck, {
                value: action.card.value,
                suit: action.card.suit
            });

            return Object.assign({}, state, {
                deck: state.deck,
            })

        case FLOP_ADDED:
            console.log([...state.flops, [action.cards]]);
            return Object.assign({}, state, {
                flops: [...state.flops, [action.cards]]
            })
        case HAND_ADDED:
            return Object.assign({}, state, {
                hands: [...state.hands, [action.cards]]
            })
        default:
            return state
    }
}