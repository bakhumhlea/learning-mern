import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { deletePost, likePost, unlikePost } from '../../actions/postActions';

class PostItem extends Component {
  onLikeClick(e, id) {
    e.preventDefault();
    this.props.likePost(id);
  }

  onUnlikeClick(e, id) {
    e.preventDefault();
    this.props.unlikePost(id);
  }

  onDeleteClick(e, id) {
    e.preventDefault();
    this.props.deletePost(id);
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
    const { post, auth, showActions } = this.props;

    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <Link to={`profile/user/${post.user}`}>
              <img className="rounded-circle d-none d-md-block" src={post.avatar}
                alt="Avatar" />
            </Link>
            <br />
            <p className="text-center">
            <strong><Link to={`profile/user/${post.user}`} >{post.name}</Link></strong>
            </p>
          </div>
          <div className="col-md-10">
            <p className="lead">{post.text}</p>
            {showActions ? (
            <span>
              <button onClick={(e) => this.onLikeClick(e, post._id)} type="button" className="btn btn-light mr-1">
                <i className={classnames('fas fa-thumbs-up', {
                  'text-info' : this.findUserLike(post.likes)
                })}></i>
                <span className="badge badge-light">{post.likes.length}</span>
              </button>
              <button  onClick={(e) => this.onUnlikeClick(e, post._id)} type="button" className="btn btn-light mr-1">
                <i className="text-secondary fas fa-thumbs-down"></i>
              </button>
              <Link to={`/post/${post._id}`} className="btn btn-info mr-1">
                Comments
              </Link>
              {post.user === auth.user.id ? (
                <button onClick={(e) => this.onDeleteClick(e, post._id)} type="button" className="btn btn-danger mr-1">
                  <i className="fas fa-times" />
                </button>
              ) : null }
            </span>) : (
              null
            )}
          </div>
        </div>
      </div>
    )
  }
}
PostItem.defaultProps = {
  showActions: true
}

PostItem.propTypes = {
  likePost: PropTypes.func.isRequired,
  unlikePost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { deletePost, likePost, unlikePost })(PostItem);