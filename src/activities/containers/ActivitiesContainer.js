import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import ActivityItem from '../components/ActivityItem';
import './ActivitiesContainer.css';

const ActivitiesContainer = ({ allActivities }) => {
  const renderActivity = (activity) => (
    <div key={activity.id}>
      <ActivityItem
        title={activity.title}
        park={activity.park}
        imageUrl={activity.image_url}
      />
    </div>
  );
  return (
    <Container fluid className="mt-3">
      <h2 className="text-center text-secondary">All activities</h2>
      <div className="activities-grid">
        {allActivities.map((activity) => {
          const { attributes } = activity;
          return renderActivity(attributes);
        })}
      </div>
    </Container>
  );
};
ActivitiesContainer.propTypes = {
  allActivities: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => ({
  allActivities: state.allActivities.activities,
  appStore: state,
});

export default connect(mapStateToProps)(ActivitiesContainer);
