import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect, Link } from 'react-router-dom';
import ReservationForm from '../components/ReservationForm';
import { makeReservation } from '../../actions/reservationsActions';

const NewReservation = () => {
  const dispatch = useDispatch();
  const reservationDate = useRef(null);
  const { activityId } = useParams();
  const user = useSelector((state) => state.userCredentials.user);
  const allActivities = useSelector((state) => state.allActivities.activities);
  const userReservationsData = useSelector((state) => state.userReservations);

  const { reservations, reservationErrors, reservationsDataLoading } = userReservationsData;

  const currentActivityId = parseInt(activityId, 10);
  const currentActivity = allActivities.filter(
    (activity) => activity.id === activityId,
  )[0].attributes;

  const alreadyReservedActivity = reservations.find(
    ({ attributes }) => attributes.activity_id === currentActivityId,
  );

  const {
    id, username, email, token,
  } = user;
  const { title, park } = currentActivity;

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      reservation: {
        user_id: id,
        activity_id: currentActivityId,
        reservation_date: reservationDate.current.value,
      },
    };
    dispatch(makeReservation(token, data));
  };

  if (alreadyReservedActivity && !reservationsDataLoading) {
    return (
      <div>
        <p>
          You already made a reservation with this activity, please try another
          one!
        </p>
        <Link to="/activities">try again</Link>
      </div>
    );
  }

  if (!reservationsDataLoading && alreadyReservedActivity === undefined) {
    return (
      <div>
        <ReservationForm
          userId={id}
          activityId={currentActivityId}
          reservationDate={reservationDate}
          handleSubmit={handleSubmit}
          title={title}
          park={park}
          username={username}
          email={email}
          newReservationErrors={reservationErrors}
        />
      </div>
    );
  }

  return <Redirect to="/reservations" />;
};

export default NewReservation;
