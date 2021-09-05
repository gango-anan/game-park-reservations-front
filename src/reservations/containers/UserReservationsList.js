import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Reservation from '../components/Reservation';
import { fetchReservations } from '../../actions/reservationsActions';
import './UserReservationsList.css';

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

  if (userReservations.length === 0) {
    return (
      <div>
        <h2>No reservations found. Make a reservation</h2>
        <Link to="/new_reservation">Make a reservation</Link>
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
