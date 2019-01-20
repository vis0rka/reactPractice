import React, { Component } from 'react';
import Button from './button';
import { connect } from 'react-redux';

class AddPost extends Component {

  handleSubmit = (event) => {
    event.preventDefault();

    const { title, body } = event.target.elements;
    let id = Math.floor(10 + Math.random() * 1000)

    this.props.addPost(id, title.value, body.value)
  }

  render = () => {
    return (
      <div className="row z-depth-2">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="" id="title" type="text" className="validate" name="title"></input>
              <label htmlFor="title">Title</label>
            </div>
            <div className="input-field col s12">
              <input placeholder="" id="body" type="text" className="validate" name="body"></input>
              <label htmlFor="body">Body</label>
            </div>
          </div>
          <div>
            <Button label="Submit" btnTpye="submit" classProp="waves-effect waves-light btn-large teal darken-4" />
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (id, title, body) => { dispatch({ type: 'ADD_POST', id: id, title: title, body: body }) }
  }
}

export default connect(null, mapDispatchToProps)(AddPost);