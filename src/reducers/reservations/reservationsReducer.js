import {
  FETCH_RESERVATIONS,
  FETCH_RESERVATIONS_FAILED,
} from '../../shared/actionTypes';

const initialState = { reservations: [] };

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESERVATIONS:
      return {
        reservations: action.payload,
      };
    case FETCH_RESERVATIONS_FAILED:
      return state;
    default:
      return state;
  }
};

export default reservationsReducer;
