import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ActivityItem = ({
  id,
  title,
  park,
  imageUrl,
  details,
  hasDetails,
  authToken,
}) => {
  const linkToShow = (token) => {
    if (token) {
      return (
        <Link to={`/reservation/activity/${id}/new`}>
          <Button>Make reservation</Button>
        </Link>
      );
    }
    return (
      <p className="font-monospace">
        <Link to="/signin">Sign in</Link>
        {' '}
        or &nbsp;
        <Link to="/signup">Sign up</Link>
        {' '}
        to make this reservation.
      </p>
    );
  };

  const hasDetailsStyles = (hasDetails) => {
    if (hasDetails) {
      return {
        border: '0',
        marginLeft: '1rem',
        marginRight: '1rem',
      };
    }
    return {};
  };

  const displayDetails = (hasDetails) => {
    if (hasDetails) {
      return (
        <>
          <Card.Text className="font-monospace text-danger">{park}</Card.Text>
          <Card.Text>{details}</Card.Text>
          {linkToShow(authToken)}
        </>
      );
    }
    return (
      <>
        <Card.Text className="font-monospace text-danger">{park}</Card.Text>
        <Link to={`/activity/${id}/details`}>
          <Button>More details</Button>
        </Link>
      </>
    );
  };
  return (
    <Card
      className="w-75 mx-auto"
      style={hasDetailsStyles(hasDetails)}
      data-testid="activity-test"
    >
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title className="fw-bolder">{title}</Card.Title>
        {displayDetails(hasDetails)}
      </Card.Body>
    </Card>
  );
};

ActivityItem.defaultProps = {
  authToken: '',
};

ActivityItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  park: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  hasDetails: PropTypes.bool.isRequired,
  authToken: PropTypes.string,
};

export default ActivityItem;
