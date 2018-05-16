import React, { Component } from 'react';
import Flop from '../containers/flop';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { drawCard } from '../actions/index';

class App extends Component {

    constructor(props) {
        super(props);
    }

    drawCards(amount) {
        const cards = [];
        for (let i = 0; i < amount; i++) {
            const card = this.props.deck.pop();
            console.log(card);
            cards.push(this.props.drawCard(card));
        }
        return cards;
    }

    render() {
    return (
      <div>
        <h1>Cups!</h1>
        <Flop cards={this.drawCards(5)} />
        <Flop cards={this.drawCards(5)}/>
        <Flop cards={this.drawCards(5)}/>
      </div>
    );
    }
}


function mapStateToProps(state) {
    return {
        deck: state.game.deck,
    };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever drawBook is called, the result should be passed
    // to all of our reducers
    return bindActionCreators({ drawCard: drawCard }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);