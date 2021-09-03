import {
  LOGIN_USER,
  LOGIN_SUCCESSFUL,
  LOGIN_UNSUCCESSFUL,
} from '../../shared/actionTypes';

const initialState = {
  user: {},
  username: localStorage.getItem('loggedInUserName') || '',
  userId: localStorage.getItem('loggedInUserId') || '',
  loggedIn: JSON.parse(localStorage.getItem('loggedInStatus')) || false,
  signInError: '',
  authToken: localStorage.getItem('loggedInUserAuthToken') || '',
  userDataLoading: false,
};

const userSignInReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, userDataLoading: true };
    case LOGIN_SUCCESSFUL:
      localStorage.setItem('loggedInUserName', action.payload.user.username);
      localStorage.setItem('loggedInStatus', JSON.stringify(true));
      localStorage.setItem('loggedInUserAuthToken', action.payload.user.token);
      return {
        ...state,
        user: { ...action.payload.user },
        username: action.payload.user.username,
        loggedIn: true,
        signInError: '',
        authToken: action.payload.user.token,
        userDataLoading: false,
      };
    case LOGIN_UNSUCCESSFUL:
      localStorage.setItem('loggedInStatus', JSON.stringify(false));
      localStorage.setItem('loggedInUserName', '');
      localStorage.setItem('loggedInUserAuthToken', '');
      return {
        ...state,
        loggedIn: false,
        signInError: action.payload,
        username: '',
        authToken: '',
        userDataLoading: false,
      };
    default:
      return state;
  }
};

export default userSignInReducer;
