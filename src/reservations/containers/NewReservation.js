import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import ReservationForm from '../components/ReservationForm';
import { makeReservation } from '../../actions/reservationsActions';
import SharedCard from '../../shared/components/SharedCard';

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

  const alertInfo = {
    title: 'Activity already in your reservations list!',
    details:
      'You already made a reservation with this actvity. Please click the button below to see more activities, and make a reservation.',
  };

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
    const { title, details } = alertInfo;
    return (
      <div>
        <SharedCard title={title} details={details} />
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
