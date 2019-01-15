import React from 'react';
import PropTypes from 'prop-types';

class Stateful extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  increment() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 }
    });
  };

  decrement() {
    if (this.state.count > 0) {
      this.setState((prevState) => {
        return { count: prevState.count - 1 }
      });
    }
  };

  handleKeyPress(e) {
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

const Button = (props) => {
  return (
    <button onClick={props.onclick}>
      {props.label}
    </button>
  )
};

const Display = (props) => {
  return (
    <div>
      {props.counter}
    </div>
  )
};

Button.propTypes = {
  label: PropTypes.string,
  onclick: PropTypes.func
};

Display.propTypes = {
  counter: PropTypes.string
};

export default Stateful;