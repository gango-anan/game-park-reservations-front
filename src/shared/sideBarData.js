import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

const sideBarData = [
  {
    id: 'gsr-user',
    title: localStorage.getItem('loggedInUserName') || '',
    icon: <AccountCircleIcon />,
    link: '/user',
  },
  {
    id: 'gsr-home',
    title: 'Home',
    icon: <HomeIcon />,
    link: '/home',
  },
  {
    id: 'gsr-activities',
    title: 'Activities',
    icon: <LocalActivityIcon />,
    link: '/activities',
  },
  {
    id: 'gsr-reservations',
    title: 'Reservations',
    icon: <EventAvailableIcon />,
    link: '/reservations',
  },
];

export default sideBarData;
