import { combineReducers } from 'redux';
import activitiesReducer from './activities/activitiesReducers';
import userAuthenticationReducer from './users/userAuthenticationReducer';
import reservationsReducer from './reservations/reservationsReducer';
import { LOGOUT_USER } from '../shared/actionTypes';

const appReducer = combineReducers({
  allActivities: activitiesReducer,
  userCredentials: userAuthenticationReducer,
  userReservations: reservationsReducer,
});

const rootReducer = (state, action) => {
  let appState = state;
  if (action.type === LOGOUT_USER) {
    localStorage.setItem('loggedInUserName', '');
    localStorage.setItem('loggedInStatus', JSON.stringify(false));
    localStorage.setItem('loggedInUserAuthToken', '');
    localStorage.setItem('loggedInUser', JSON.stringify({}));
    appState = undefined;
  }
  return appReducer(appState, action);
};

export default rootReducer;
