import axios from 'axios';
import {
  FETCH_RESERVATIONS,
  FETCH_RESERVATIONS_FAILED,
} from '../shared/actionTypes';

const fetchReservations = (authToken) => (dispatch) => {
  axios
    .get('http://localhost:3000/api/v1/reservations', {
      headers: { Authorization: `${authToken}` },
    })
    .then((response) => {
      dispatch({
        type: FETCH_RESERVATIONS,
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

export default fetchReservations;
