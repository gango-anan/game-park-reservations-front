import { combineReducers } from 'redux';
import activitiesReducer from './activities/activitiesReducers';
import userRegistrationReducer from './users/userRegistrationReducer';
import userSignInReducer from './users/userSignInReducer';
import reservationsReducer from './reservations/reservationsReducer';

const rootReducer = combineReducers({
  allActivities: activitiesReducer,
  userRegistrationData: userRegistrationReducer,
  userCredentials: userSignInReducer,
  userReservations: reservationsReducer,
});

export default rootReducer;
