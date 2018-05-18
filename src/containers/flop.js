import React, { Component } from 'react';
import { renderCard } from '../helpers/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFlop } from '../actions/index';

class Flop extends Component {

    constructor(props) {
        super(props);

        this.props.addFlop(this.props.cards);
    }

    renderList() {
        return this.props.cards.map((card, index) => {
            card = card.card;
            return (
                <li key={index} className="playcard-place">
                    {renderCard(card, card.facedown)}
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


function mapStateToProps(state) {
    return {};
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever drawBook is called, the result should be passed
    // to all of our reducers
    return bindActionCreators({ addFlop: addFlop }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Flop);