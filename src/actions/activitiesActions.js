import axios from 'axios';
import {
  FETCH_ACTIVITIES,
  FETCH_ACTIVITIES_FAILED,
} from '../shared/actionTypes';

const fetchActivities = () => (dispatch) => {
  axios
    .get(
      'https://galisoft-gamesafaris-back-end.herokuapp.com/api/v1/activities',
    )
    .then((response) => {
      dispatch({
        type: FETCH_ACTIVITIES,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_ACTIVITIES_FAILED,
        payload: error.response,
      });
    });
};

export default fetchActivities;
