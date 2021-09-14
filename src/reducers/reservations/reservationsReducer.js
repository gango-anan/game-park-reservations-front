import {
  FETCH_RESERVATIONS,
  FETCH_RESERVATIONS_SUCCESSFUL,
  FETCH_RESERVATIONS_FAILED,
  MAKE_RESERVATION,
  MAKE_RESERVATION_SUCCESSFUL,
  MAKE_RESERVATION_FAILED,
} from '../../shared/actionTypes';

const initialState = {
  reservations: [],
  reservationErrors: '',
  reservationsDataLoading: false,
};

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESERVATIONS_SUCCESSFUL:
      return {
        ...state,
        reservations: action.payload,
        errors: '',
      };
    case FETCH_RESERVATIONS_FAILED:
      return { ...state, errors: action.payload };
    case MAKE_RESERVATION:
      return {
        ...state,
        errors: '',
        reservationsDataLoading: true,
      };
    case MAKE_RESERVATION_SUCCESSFUL:
      return {
        ...state,
        reservations: [...state.reservations, action.payload],
        errors: '',
        reservationsDataLoading: false,
      };
    case MAKE_RESERVATION_FAILED:
      return {
        ...state,
        errors: action.payload,
        reservationsDataLoading: false,
      };
    case FETCH_RESERVATIONS:
    default:
      return state;
  }
};

export default reservationsReducer;
