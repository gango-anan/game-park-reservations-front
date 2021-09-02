import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ActivityItem.css';

const ActivityItem = ({ title, park, imageUrl }) => (
  <div>
    <Card>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title className="fw-bolder">{title}</Card.Title>
        <Card.Text>{park}</Card.Text>
        <Button className="card-btn">
          <Link to="/">More details</Link>
          {' '}
        </Button>
      </Card.Body>
    </Card>
  </div>
);

ActivityItem.propTypes = {
  title: PropTypes.string.isRequired,
  park: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ActivityItem;
