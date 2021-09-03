import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ActivityItem from '../components/ActivityItem';

const ActivityDetails = () => {
  const { activityId } = useParams();
  const activities = useSelector((state) => state.allActivities.activities);
  const filteredActivity = activities.filter(
    (activity) => activity.id === activityId,
  );
  const activity = filteredActivity[0].attributes;
  const hasDetails = true;
  return (
    <ActivityItem
      id={activity.id}
      hasDetails={hasDetails}
      title={activity.title}
      park={activity.park}
      imageUrl={activity.image_url}
      details={activity.details}
    />
  );
};

export default ActivityDetails;
