import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import TransitEnterexitIcon from '@material-ui/icons/TransitEnterexit';

export const MenuBarData = [
  {
    id: 'gsr-home',
    title: 'Home',
    path: '/home',
    icon: <HomeIcon />,
    cssClassName: 'nav-text',
  },
  {
    id: 'gsr-activities',
    title: 'Activities',
    path: '/activities',
    icon: <LocalActivityIcon />,
    cssClassName: 'nav-text',
  },
  {
    id: 'gsr-reservations',
    title: 'Reservations',
    path: '/reservations',
    icon: <EventAvailableIcon />,
    cssClassName: 'nav-text',
  },
];

export const UNAUTHENTICATED_LINKS = [
  {
    id: 'gsr-signup',
    title: 'Sign up',
    path: '/signup',
    icon: <LockOpenIcon />,
    cssClassName: 'nav-text',
  },
  {
    id: 'gsr-signin',
    title: 'Sign in',
    path: '/signin',
    icon: <TransitEnterexitIcon />,
    cssClassName: 'nav-text',
  },
  {
    id: 'gsr-home',
    title: 'Home',
    icon: <HomeIcon />,
    path: '/home',
    cssClassName: 'nav-text',
  },
  {
    id: 'gsr-activities',
    title: 'Activities',
    icon: <LocalActivityIcon />,
    path: '/activities',
    cssClassName: 'nav-text',
  },
];
