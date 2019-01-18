import React, { Component } from 'react';
import { connect } from 'react-redux';
import ApproveButton from './aprroveButton'


class SinglePost extends Component {
  render = () => {
    console.log(this.props)
    const post = this.props.post;
    if (post) {
      return (
        <div>
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title red-text">{post.title}</span>
              <p className="">{post.body}</p>
            </div>
          </div>
            <ApproveButton postid={post.id}/>
        </div>
      )
    } else {
      return (
        <div className="center">
          <h4>Loading post...</h4>
        </div>
      )
    }
  };
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(e => e.id == id)
  }
}



export default connect(mapStateToProps)(SinglePost);