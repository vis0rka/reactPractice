import { connect } from 'react-redux';
import React, { Component } from 'react';
import { eating, buying } from '../actionTypes';



class HandleKeyPress extends Component {
  componentDidMount = () => {
    document.body.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount = () => {
    document.body.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (e) => {
    if (e.keyCode == 38) {
      this.props.plusOne();
    }
    if (e.keyCode == 40) {
      this.props.minusOne();
    }
  };
  render = () => (
    null
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    plusOne: () => { dispatch(buying()) },
    minusOne: () => { dispatch(eating()) },
  };
};

const KeyPress = connect(null, mapDispatchToProps)(HandleKeyPress);

export default KeyPress;