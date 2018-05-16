import React, { Component } from 'react';

export default class Flop extends Component {

    constructor(props) {
        super(props);
    }

    renderList() {
        return this.props.cards.map((card, index) => {
            card = card.card;
            const hideIndex = [3,4];
            const classes = `playcard ${hideIndex.includes(index) ? 'facedown' : ''}`;
            return (
                <li key={`${card.value}${card.suit}`} className={classes}>
                    <span className="value top-left">{card.value}</span>
                    <span className="value top-right">{card.value}</span>
                    <span className="suit">{card.suit}</span>
                    <span className="value bottom-left">{card.value}</span>
                    <span className="value bottom-right">{card.value}</span>
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