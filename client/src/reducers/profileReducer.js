import { GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE, GET_PROFILES, PAGE_NOT_FOUND } from '../actions/types';

const INITIAL_STATE = {
  profile: null,
  profiles: null,
  loading: false,
  route: null,
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: action.payload,
        loading: false
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_PROFILE:
     return {
       ...state,
       profile: null
     };
    case PAGE_NOT_FOUND:
     return {
       ...state,
       route: action.payload
     }
    default:
      return state;
  }
};