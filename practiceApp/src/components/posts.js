import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Navlink} from 'react-router-dom';


class Posts extends Component {
  render = () => {
    const { posts } = this.props;
    const postList = posts.map(post => {
      return (
        <div className="post card" key={post.id}>
          <div className="card-content">
          <Link to={'/' + post.id}>
            <span className="card-title red-text">{post.title}</span>
          </Link>
            <p className="">{post.body}</p>
          </div>
        </div>
      )
    })
    return (
      <div>
        {postList}
      </div>
    )
  };
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
};

export default connect(mapStateToProps)(Posts);