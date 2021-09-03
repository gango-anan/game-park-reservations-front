import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './ReservationForm.css';

const ReservationForm = () => (
  <div>
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="userName">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            defaultValue="gango"
            readOnly
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="email@galisoft.com"
            defaultValue="gango@galisoft.com"
            readOnly
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="activity">
          <Form.Label>Activity</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter activity"
            defaultValue="Gorilla Trekking"
            readOnly
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="park">
          <Form.Label>Park</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter park"
            defaultValue="Bwindi NP"
            readOnly
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="reservationDate">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" placeholder="Select date" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  </div>
);

export default ReservationForm;
