import axios from 'axios';
import {
  SIGNUP_USER,
  SIGNUP_SUCCESSFUL,
  SIGNUP_UNSUCCESSFUL,
} from '../utilities/actionTypes';

const signUpUser = (userSignUpData) => (dispatch) => {
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

export default signUpUser;
