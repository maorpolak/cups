import React, { Component } from 'react';
import Flop from '../containers/flop';
import Hand from '../containers/hand';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { drawCard } from '../actions/index';

class App extends Component {

    constructor(props) {
        super(props);
    }

    drawCards(amount, facedown = 0) {
        const cards = [];
        for (let i = 0; i < amount; i++) {
            let card = this.props.deck.pop();
            if (amount - facedown === i) {
                card.facedown = true;
            }
            cards.push(this.props.drawCard(card));
        }
        return cards;
    }

    render() {
    return (
      <div>
          <h1>Cups!</h1>
          <Flop cards={this.drawCards(5, 2)} />
          <Flop cards={this.drawCards(5, 2)}/>
          <Flop cards={this.drawCards(5, 2)}/>
          <hr/>
          <Hand cards={this.drawCards(12)}/>
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