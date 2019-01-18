import React, { Component } from 'react';
import Button from './button'

class AddPost extends Component {

  handleSubmit = (e) => {
    e.preventDefault();

    const formData = {};
    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }
    console.log('-->', formData);

  }

  render = () => {
    return (
      <div className="row">
        <form className="col s12">
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
        </form>
        <div>
          <Button handleClick={this.handleSubmit} label="Submit" classProp="waves-effect waves-light btn-large teal darken-4" />
        </div>
      </div>
    )
  }
}

/* const mapDispatchToProps = (dispatch) => {
  let id = Math.floor(10 + Math.random() * 1000)

  return {
    addPost: () => { dispatch({ type: 'ADD_POST', id: id, title: aa,body: bbb}) }
  }
} */

export default AddPost;