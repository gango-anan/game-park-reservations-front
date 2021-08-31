import {
  LOGIN_USER,
  LOGIN_SUCCESSFUL,
  LOGIN_UNSUCCESSFUL,
} from '../../shared/actionTypes';

const initialState = {
  user: {},
  username: localStorage.getItem('loggedInUserName'),
  loggedIn: JSON.parse(localStorage.getItem('loggedInStatus')),
  signInError: '',
  authToken: localStorage.getItem('loggedInUserAuthToken'),
  waitingForData: false,
};

const userSignInReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, waitingForData: true };
    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        user: action.payload.user,
        username: localStorage.setItem(
          'loggedInUserName',
          action.payload.user.username,
        ),
        loggedIn: localStorage.setItem('loggedInStatus', JSON.stringify(true)),
        signInError: '',
        authToken: localStorage.setItem(
          'loggedInUserAuthToken',
          action.payload.user.token,
        ),
        waitingForData: false,
      };
    case LOGIN_UNSUCCESSFUL:
      return {
        ...state,
        loggedIn: localStorage.setItem('loggedInStatus', JSON.stringify(false)),
        signInError: action.payload,
        username: localStorage.setItem('loggedInUserName', ''),
        authToken: localStorage.setItem('loggedInUserAuthToken', ''),
        waitingForData: false,
      };
    default:
      return state;
  }
};

export default userSignInReducer;
