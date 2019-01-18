import React, { Component } from 'react';
import Button from './button'
import { connect } from 'react-redux';
import history from "../history";

class ApproveButton extends Component {
  state = {
    isOpen: 0
  }

  handleDelete = () => {
    this.props.deletePost(this.props.postid);
    history.push('/');
  };

  openClick = () => {
    if (this.state.isOpen === 0) {
      this.setState({ isOpen: this.state.isOpen = 1 });
    } else {
      this.setState({ isOpen: this.state.isOpen = 0 });
    }
  };

  render = () => {
    if (this.state.isOpen === 0) {
      return (
        <Button handleClick={this.openClick} label="Delete" classProp="waves-effect waves-light btn-large red darken-4s" />
      )
    } else {
      return (
        <div className="row">
          <div className="col s6">
            <Button handleClick={this.handleDelete} label="Yes" classProp="waves-effect waves-light btn-large green darken-2" />
          </div>
          <div className="col s6">
            <Button handleClick={this.openClick} label="No" classProp="waves-effect waves-light btn-large grey darken-2" />
          </div>
        </div>
      )
    }
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => { dispatch({ type: 'DELETE_POST', id: id }) }
  }
}

export default connect(null, mapDispatchToProps)(ApproveButton);