import React, { useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './ReservationForm.css';

const ReservationForm = ({
  reservationDate,
  handleSubmit,
  title,
  park,
  username,
  email,
  newReservationErrors,
}) => {
  useEffect(() => {
    reservationDate.current.focus();
  }, []);

  return (
    <div className="reservation-form-wrapper">
      <p className="fs-1 text-center">Reservation Form </p>
      <Container>
        <Form onSubmit={handleSubmit}>
          <div>
            <p className="text-danger">{newReservationErrors}</p>
          </div>
          <Form.Group className="mb-3" controlId="userName">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              defaultValue={username}
              readOnly
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="email@galisoft.com"
              defaultValue={email}
              readOnly
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="activity">
            <Form.Label>Activity</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter activity"
              defaultValue={title}
              readOnly
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="park">
            <Form.Label>Park</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter park"
              defaultValue={park}
              readOnly
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="reservationDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Select date"
              ref={reservationDate}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

ReservationForm.propTypes = {
  reservationDate: PropTypes.instanceOf(Object).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  park: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  newReservationErrors: PropTypes.string.isRequired,
};

export default ReservationForm;
