import axios from 'axios';
import { ADD_POST, GET_ERRORS, POST_LOADING, GET_POSTS, DELETE_POST, GET_POST, CLEAR_ERRORS } from './types';

// Add Post
export const addPost = postData => dispatch => {
  dispatch(clearErrors());
  axios
    .post('/api/posts', postData)
    .then(res => {
      dispatch({
        type: ADD_POST,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

// Get Posts
export const getPosts = () => dispatch => {
  //dispatch(setPostLoading());
  axios
    .get('/api/posts')
    .then(res => {
      dispatch({
        type: GET_POSTS,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: GET_POSTS,
        payload: null
      })
    );
}

// Get Posts
export const getPost = (id) => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(`/api/posts/${id}`)
    .then(res => {
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: GET_POST,
        payload: null
      })
    );
}

export const addComment = (post_id, commentData) => dispatch => {
  dispatch(clearErrors());
  axios
    .post(`/api/posts/comment/${post_id}`, commentData)
    .then(res => {
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

export const deleteComment = (post_id, comment_id) => dispatch => {
  axios
    .delete(`/api/posts/comment/${post_id}/${comment_id}`)
    .then(res => {
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

// Delete Post
export const deletePost = (id) => dispatch => {
  axios
    .delete(`/api/posts/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_POST,
        payload: id
      })
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

// Add likes
export const likePost = (id) => dispatch => {
  axios
    .post(`/api/posts/like/${id}`)
    .then(res => {
      dispatch(getPosts());
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

// Remove likes
export const unlikePost = (id) => dispatch => {
  axios
    .post(`/api/posts/unlike/${id}`)
    .then(res => {
      dispatch(getPosts());
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

// Set loading state
export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
}

// Clear Errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
}