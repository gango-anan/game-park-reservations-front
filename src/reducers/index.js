import { combineReducers } from 'redux';
import activitiesReducer from './activities';
import usersReducer from './users';

const rootReducer = combineReducers({
  allActivities: activitiesReducer,
  userRegistrationData: usersReducer,
});

export default rootReducer;
