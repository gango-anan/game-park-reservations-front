import { FETCH_ACTIVITIES } from '../utilities/actionTypes';

const initialState = { activities: [] };

const activitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACTIVITIES:
      return { activities: action.payload };
    default:
      return state;
  }
};

export default activitiesReducer;
