import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import Spinner from '../commons/Spinner';
import { getPosts } from '../../actions/postActions';
import PostFeed from './PostFeed';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, loading } = this.props.post;
    let postContent;

    if (posts === null || loading ) {
      postContent = <Spinner />
    } else {
      postContent = <PostFeed posts={posts} />
    }

    return (
      <div>
        <div className="feed">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <PostForm />
                {postContent}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Posts.propTypes = {
  post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  post: state.post
})

export default connect(mapStateToProps, { getPosts })(Posts);
