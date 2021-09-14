import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import ActivityItem from '../components/ActivityItem';
import './ActivitiesContainer.css';
import { fetchReservations } from '../../actions/reservationsActions';

const ActivitiesContainer = ({ allActivities }) => {
  const dispatch = useDispatch();
  const currenUserReservations = useSelector(
    (state) => state.userReservations.reservations,
  );
  const authToken = useSelector((state) => state.userCredentials.authToken);
  useEffect(() => {
    if (authToken && !currenUserReservations.length) {
      dispatch(fetchReservations(authToken));
    }
  }, [authToken]);

  const hasDetails = false;
  const renderActivity = (activity, hasDetails) => (
    <div key={activity.id}>
      <ActivityItem
        id={activity.id}
        hasDetails={hasDetails}
        title={activity.title}
        park={activity.park}
        imageUrl={activity.image_url}
        details={activity.details}
      />
    </div>
  );
  return (
    <Container fluid className="mt-3">
      <h2 className="text-center text-secondary">All activities</h2>
      <div className="activities-grid">
        {allActivities.map((activity) => {
          const { attributes } = activity;
          return renderActivity(attributes, hasDetails);
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
});

export default connect(mapStateToProps)(ActivitiesContainer);
