import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const SharedCard = ({ title, details }) => (
  <>
    <Alert variant="success" className="mx-3">
      <Alert.Heading className="text-danger">{title}</Alert.Heading>
      <p>{details}</p>
      <hr />
      <div className="d-flex justify-content-end">
        <Button type="button">
          <Link to="/activities">more activities</Link>
        </Button>
      </div>
    </Alert>
  </>
);

SharedCard.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default SharedCard;
