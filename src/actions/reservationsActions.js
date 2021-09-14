import axios from 'axios';
import {
  FETCH_RESERVATIONS,
  FETCH_RESERVATIONS_SUCCESSFUL,
  FETCH_RESERVATIONS_FAILED,
  MAKE_RESERVATION,
  MAKE_RESERVATION_SUCCESSFUL,
  MAKE_RESERVATION_FAILED,
} from '../shared/actionTypes';

export const fetchReservations = (authToken) => (dispatch) => {
  dispatch({ type: FETCH_RESERVATIONS, payload: {} });
  axios
    .get(
      'https://galisoft-gamesafaris-back-end.herokuapp.com/api/v1/reservations',
      {
        headers: { Authorization: `${authToken}` },
      },
    )
    .then((response) => {
      dispatch({
        type: FETCH_RESERVATIONS_SUCCESSFUL,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_RESERVATIONS_FAILED,
        payload: error.response,
      });
    });
};

export const makeReservation = (authToken, data) => (dispatch) => {
  dispatch({ type: MAKE_RESERVATION, payload: {} });
  axios
    .post(
      'https://galisoft-gamesafaris-back-end.herokuapp.com/api/v1/reservations',
      data,
      {
        headers: { Authorization: `${authToken}` },
      },
    )
    .then((response) => {
      dispatch({
        type: MAKE_RESERVATION_SUCCESSFUL,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: MAKE_RESERVATION_FAILED,
        payload: error.response.data.join(),
      });
    });
};
