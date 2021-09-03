import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ActivityItem.css';

const ActivityItem = ({
  id, title, park, imageUrl, details, hasDetails,
}) => {
  const displayDetails = (hasDetails) => {
    if (hasDetails) {
      return (
        <>
          <Card.Text className="font-monospace text-danger">{park}</Card.Text>
          <Card.Text>{details}</Card.Text>
          <Link to={`/reservation/activity/${id}/new`}>
            <Button className="card-btn">Make reservation</Button>
          </Link>
        </>
      );
    }
    return (
      <>
        <Card.Text className="font-monospace text-danger">{park}</Card.Text>
        <Link to={`/activity/${id}/details`}>
          <Button className="card-btn">More details</Button>
        </Link>
      </>
    );
  };
  return (
    <Card>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title className="fw-bolder">{title}</Card.Title>
        {displayDetails(hasDetails)}
      </Card.Body>
    </Card>
  );
};

ActivityItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  park: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  hasDetails: PropTypes.bool.isRequired,
};

export default ActivityItem;
