import {
  LOGIN_USER,
  LOGIN_SUCCESSFUL,
  LOGIN_UNSUCCESSFUL,
  SIGNUP_USER,
  SIGNUP_SUCCESSFUL,
  SIGNUP_UNSUCCESSFUL,
} from '../../shared/actionTypes';

const initialState = {
  user: JSON.parse(localStorage.getItem('loggedInUser')) || {},
  username: localStorage.getItem('loggedInUserName') || '',
  userId: localStorage.getItem('loggedInUserId') || '',
  loggedIn: JSON.parse(localStorage.getItem('loggedInStatus')) || false,
  authenticationErrors: '',
  authToken: localStorage.getItem('loggedInUserAuthToken') || '',
  userDataLoading: false,
};

const userAuthenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
    case SIGNUP_USER:
      return { ...state, userDataLoading: true };
    case LOGIN_SUCCESSFUL:
    case SIGNUP_SUCCESSFUL:
      localStorage.setItem('loggedInUserName', action.payload.user.username);
      localStorage.setItem('loggedInStatus', JSON.stringify(true));
      localStorage.setItem('loggedInUserAuthToken', action.payload.user.token);
      localStorage.setItem('loggedInUser', JSON.stringify(action.payload.user));
      return {
        ...state,
        user: { ...action.payload.user },
        username: action.payload.user.username,
        userId: localStorage.setItem('loggedInUserId', action.payload.user.id),
        loggedIn: true,
        authenticationErrors: '',
        authToken: action.payload.user.token,
        userDataLoading: false,
      };
    case LOGIN_UNSUCCESSFUL:
    case SIGNUP_UNSUCCESSFUL:
      localStorage.setItem('loggedInStatus', JSON.stringify(false));
      localStorage.setItem('loggedInUserName', '');
      localStorage.setItem('loggedInUserAuthToken', '');
      return {
        ...state,
        loggedIn: false,
        authenticationErrors: action.payload,
        userId: localStorage.setItem('loggedInUserId', ''),
        username: '',
        authToken: '',
        userDataLoading: false,
      };
    default:
      return state;
  }
};

export default userAuthenticationReducer;
