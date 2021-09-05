import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchActivities from '../../actions/activitiesActions';
import Home from '../components/Home';

const HomeContainer = () => {
  const dispatch = useDispatch();
  const allActivities = useSelector((state) => state.allActivities.activities);
  useEffect(() => {
    if (!allActivities.length) {
      dispatch(fetchActivities());
    }
  }, [dispatch]);
  return <Home />;
};

export default HomeContainer;
