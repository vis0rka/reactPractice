import React from 'react';
import Button from './button';
import Display from './display';

class Stateful extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  };

  componentDidMount = () => {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.handleKeyPress);
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

  render() {
    return (
      <div>
        <h1>SimpleGoldenAcornApp</h1>
        <Button label="Buy One" onclick={this.increment} />
        <Display counter={this.state.count} />
        <Button label="Eat One" onclick={this.decrement} />
      </div>
    )
  };
}

export default Stateful;