import { combineReducers } from 'redux';
import activitiesReducer from './activities';

const rootReducer = combineReducers({ allActivities: activitiesReducer });

export default rootReducer;
