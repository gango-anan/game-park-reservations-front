import { combineReducers } from 'redux';
import activitiesReducer from './activities/activitiesReducers';
import userRegistrationReducer from './users/userRegistrationReducer';
import userSignInReducer from './users/userSignInReducer';

const rootReducer = combineReducers({
  allActivities: activitiesReducer,
  userRegistrationData: userRegistrationReducer,
  userCredentials: userSignInReducer,
});

export default rootReducer;
