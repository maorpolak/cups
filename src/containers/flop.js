import React, { Component } from 'react';
import { connect } from 'react-redux';

class Flop extends Component {

    renderList() {
        return this.props.deck.splice(0, 5).map((card, index) => {
            const hideIndex = [3,4];
            const classes = `list-group-item ${hideIndex.includes(index) ? 'facedown' : ''}`;
            return (
                <li key={`${card.value}${card.suite}`} className={classes}>
                    <span>{card.value} - {card.suite}</span>
                </li>
            )
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        deck: state.deck,
        hands: state.hands,
    };
}

export default connect(mapStateToProps)(Flop);