import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

export const sideBarData = [
  {
    id: 'gsr-user',
    title: 'username',
    icon: <AccountCircleIcon />,
    link: '/username/dashboard',
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

export const UNAUTHENTICATED_LINKS = [
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
];
