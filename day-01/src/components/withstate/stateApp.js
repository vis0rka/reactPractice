import React, { Component } from 'react';
import Button from '../../button';
import Display from '../../display';

class Stateful extends Component {
  state = {
    count: 0,
  };

  componentDidMount = () => {
    document.body.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount = () => {
    document.body.removeEventListener('keydown', this.handleKeyPress);
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count + -1 });
    }
  };

  handleKeyPress = (e) => {
    if (e.keyCode == 38) {
      this.increment();
    }
    if (e.keyCode == 40) {
      this.decrement();
    }
  };

  render = () => (
      <div className="container">
        <h1>Simple Golden Acorn App with states</h1>
        <Button label="Buy One" onClick={this.increment} />
        <Display counter={this.state.count} />
        <Button label="Eat One" onClick={this.decrement} />
      </div>
  );
}

export default Stateful;