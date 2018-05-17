import React, { Component } from 'react';
import { renderSuitSymbol } from '../helpers/index';

export default class Card extends Component {

    constructor(props) {
        super(props);
    }

    renderList() {
        return this.props.cards.map((card) => {
            card = card.card;
            const classes = `playcard hand`;
            const suitClasses = `suit ${card.suit}`;
            const value = isNaN(card.value) ? card.value.charAt(0) : card.value;
            return (
                <li key={`${card.value}${card.suit}`} className={classes}>
                    <span className="value top-left">{value}</span>
                    <span className="value top-right">{value}</span>
                    <span className={suitClasses}>{renderSuitSymbol(card.suit)}</span>
                    <span className="value bottom-left">{value}</span>
                    <span className="value bottom-right">{value}</span>
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