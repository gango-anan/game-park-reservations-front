import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import './Reservation.css';

const Reservation = ({
  id, title, imageUrl, park, date,
}) => (
  <li key={`gsr-${id}`} className="reservation-item">
    <Card>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text className="text-danger">{park}</Card.Text>
        <Card.Text>{date}</Card.Text>
      </Card.Body>
    </Card>
  </li>
);

Reservation.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  park: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Reservation;
