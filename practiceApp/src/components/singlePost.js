import React, { Component } from 'react';
import { connect } from 'react-redux';


class SinglePost extends Component {
  render = () => {
    console.log(this.props.post)
    const post = this.props.post;
    if (post) {
      return (
      <div className="post card" key={post.id}>
      <div className="card-content">
        <span className="card-title red-text">{post.title}</span>
        <p className="">{post.body}</p>
      </div>
    </div> 
      )
    } else {
      return (
      <div>
        <h2>loading post</h2>
      </div>        
      )
    }
  };
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  console.log(id)
  return {
    post: state.posts.find(e => e.id == id)
  }
}

export default connect(mapStateToProps)(SinglePost);