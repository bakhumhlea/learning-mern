import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';

class CommentFeed extends Component {
  render() {
    const { comments, postId } = this.props;

    return (
      <div className="feed">
        {comments.map(comment =>(<CommentItem key={comment._id} comment={comment} postId={postId} />))}
      </div>
    );
  }
}

CommentFeed.propTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentFeed;