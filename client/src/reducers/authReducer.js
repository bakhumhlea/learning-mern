import { SET_CURRENT_USER } from '../actions/types';
import isEmpty from '../validation/is-empty';

const INITIAL_STATE = {
  isAuthenticated: false,
  user: {}
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      }
    default:
      return state;
  }
};