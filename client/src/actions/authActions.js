import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setAuthToken from '../util/setAuthToken';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/register', userData)
    .then(res => {
      const autoLoginData = {
        email: res.data.email,
        password: userData.password
      };
      dispatch(loginUser(autoLoginData));
      history.push('/dashboard');
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    });
};

// Login and Get user token
export const loginUser = userData => dispatch => {
  axios
    .post('/api/users/login', userData)
    .then(res => {
      console.log("Logging In");
      // Save to local storage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    });
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
};

// Log out user
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header fot future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated tp false
  dispatch(setCurrentUser({}));
  // Reroute to /login
  //history.push('/login');;
};