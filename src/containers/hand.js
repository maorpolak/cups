import React, { Component } from 'react';
import { renderCard } from '../helpers/index';

export default class Card extends Component {

    constructor(props) {
        super(props);
    }

    renderList() {
        return this.props.cards.map((card) => {
            card = card.card;
            const classes = `playcard-place`;

            return (
                <li key={`${card.value}${card.suit}`} className={classes}>
                    {renderCard(card, false, 'hand', true)}
                </li>
            )
        });
    }

    render() {
        return (
            <ul className="playcards-row">
                {this.renderList()}
            </ul>
        )
    }
};