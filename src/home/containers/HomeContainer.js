import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import fetchActivities from '../../actions/activitiesActions';
import Home from '../components/Home';

const HomeContainer = (props) => {
  const allActivities = useSelector((state) => state.allActivities.activities);
  useEffect(() => {
    if (!allActivities.length) {
      props.fetchAllActivities();
    }
  }, []);

  return <Home />;
};

HomeContainer.propTypes = {
  fetchAllActivities: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchAllActivities: () => {
    dispatch(fetchActivities());
  },
});

export default connect(null, mapDispatchToProps)(HomeContainer);
