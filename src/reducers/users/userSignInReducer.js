import {
  LOGIN_USER,
  LOGIN_SUCCESSFUL,
  LOGIN_UNSUCCESSFUL,
} from '../../utilities/actionTypes';

const initialState = {
  user: {},
  username: localStorage.getItem('loggedInUserName'),
  loggedIn: JSON.parse(localStorage.getItem('loggedInStatus')),
  registrationError: '',
  authToken: localStorage.getItem('loggedInUserAuthToken'),
  waitingForRegData: false,
};

const userSignInReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, waitingForRegData: true };
    case LOGIN_SUCCESSFUL:
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
    case LOGIN_UNSUCCESSFUL:
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

export default userSignInReducer;
