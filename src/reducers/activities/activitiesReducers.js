import {
  FETCH_ACTIVITIES,
  FETCH_ACTIVITIES_FAILED,
} from '../../shared/actionTypes';

const activitiesKey = 'allActivities';
const initialState = {
  activities: JSON.parse(localStorage.getItem(activitiesKey)) || [],
};

const activitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACTIVITIES:
      localStorage.setItem(activitiesKey, JSON.stringify(action.payload));
      return {
        activities: action.payload,
      };
    case FETCH_ACTIVITIES_FAILED:
      return { ...state };
    default:
      return state;
  }
};

export default activitiesReducer;
