import axios from 'axios';
import {
  SIGNUP_USER,
  SIGNUP_SUCCESSFUL,
  SIGNUP_UNSUCCESSFUL,
  LOGIN_USER,
  LOGIN_SUCCESSFUL,
  LOGIN_UNSUCCESSFUL,
} from '../shared/actionTypes';

export const signUpUser = (userSignUpData) => (dispatch) => {
  dispatch({ type: SIGNUP_USER, payload: {} });
  axios
    .post('http://localhost:3000/api/v1/register', userSignUpData)
    .then((response) => {
      dispatch({
        type: SIGNUP_SUCCESSFUL,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: SIGNUP_UNSUCCESSFUL,
        payload: error.response.data.join(),
      });
    });
};

export const signInUser = (userSignInData) => (dispatch) => {
  dispatch({ type: LOGIN_USER, payload: {} });
  axios
    .post('http://localhost:3000/api/v1/sign_in', userSignInData)
    .then((response) => {
      dispatch({
        type: LOGIN_SUCCESSFUL,
        payload: response.data,
      });
    })
    .catch((error) => {
      if (error.response) {
        dispatch({
          type: LOGIN_UNSUCCESSFUL,
          payload: error.response.data,
        });
      }
    });
};
