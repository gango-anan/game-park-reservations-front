import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Reservation from '../components/Reservation';
import { fetchReservations } from '../../actions/reservationsActions';
import './UserReservationsList.css';
import SharedCard from '../../shared/components/SharedCard';

const UserReservationsList = () => {
  const dispatch = useDispatch();
  const userReservations = useSelector(
    (state) => state.userReservations.reservations,
  );
  const authToken = localStorage.getItem('loggedInUserAuthToken');
  useEffect(() => {
    if (userReservations.length === 0) {
      dispatch(fetchReservations(authToken));
    }
  }, [dispatch]);

  const alertInfo = {
    title: 'No reservations!',
    details:
      'You have no reservations yet, click the button below to browse through a list our famous activities and make a reservation. ',
  };

  if (userReservations.length === 0) {
    const { title, details } = alertInfo;
    return (
      <div>
        <SharedCard title={title} details={details} />
      </div>
    );
  }

  return (
    <ul className="reservations-list">
      {userReservations.map((reservation) => {
        const { attributes, id } = reservation;
        return (
          <Reservation
            key={id}
            id={id}
            title={attributes.activity.title}
            imageUrl={attributes.activity.image_url}
            park={attributes.activity.park}
            date={attributes.reservation_date}
          />
        );
      })}
    </ul>
  );
};

export default UserReservationsList;
