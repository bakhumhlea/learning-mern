import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteComment } from '../../actions/postActions';

class CommentItem extends Component {
  onDeleteClick(e, postId, commentId) {
    e.preventDefault();
    this.props.deleteComment(postId, commentId);
  }

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { comment, auth, postId } = this.props;

    return (
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-2">
            <a href="profile.html">
              <img class="rounded-circle d-none d-md-block" src={comment.avatar} alt="" />
            </a>
            <br />
            <p class="text-center">{comment.name}</p>
          </div>
          <div class="col-md-10">
            <p class="lead">{comment.text}</p>
            {comment.user === auth.user.id ? (
              <button onClick={(e) => this.onDeleteClick(e, postId,  comment._id)} type="button" className="btn btn-danger mr-1">
                <i className="fas fa-times" />
              </button>
            ) : null }
          </div>
        </div>
      </div>
    )
  }
}

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);