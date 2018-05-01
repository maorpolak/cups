import React, { Component } from 'react';
import Flop from '../containers/flop';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Cups!</h1>
        <Flop />
        <Flop />
        <Flop />
      </div>
    );
  }
}
