import {
  SIGNUP_USER,
  SIGNUP_SUCCESSFUL,
  SIGNUP_UNSUCCESSFUL,
} from '../../shared/actionTypes';

const initialState = {
  user: {},
  username: localStorage.getItem('loggedInUserName'),
  loggedIn: JSON.parse(localStorage.getItem('loggedInStatus')),
  registrationError: '',
  authToken: localStorage.getItem('loggedInUserAuthToken'),
  waitingForRegData: false,
};

const userRegistrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_USER:
      return { ...state, waitingForRegData: true };
    case SIGNUP_SUCCESSFUL:
      return {
        ...state,
        user: action.payload.user,
        username: localStorage.setItem(
          'loggedInUserName',
          action.payload.user.username,
        ),
        loggedIn: localStorage.setItem('loggedInStatus', JSON.stringify(true)),
        registrationError: '',
        authToken: localStorage.setItem(
          'loggedInUserAuthToken',
          action.payload.user.token,
        ),
        waitingForRegData: false,
      };
    case SIGNUP_UNSUCCESSFUL:
      return {
        ...state,
        loggedIn: localStorage.setItem('loggedInStatus', JSON.stringify(false)),
        registrationError: action.payload,
        username: localStorage.setItem('loggedInUserName', ''),
        authToken: localStorage.setItem('loggedInUserAuthToken', ''),
      };
    default:
      return state;
  }
};

export default userRegistrationReducer;
