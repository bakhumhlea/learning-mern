import { POST_LOADING, GET_POSTS, ADD_POST, DELETE_POST } from "../actions/types";

const INITIAL_STATE = {
  posts: [],
  post: {},
  loading: false
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case POST_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload),
        loading: false
      };
    default:
      return state;
  }
}