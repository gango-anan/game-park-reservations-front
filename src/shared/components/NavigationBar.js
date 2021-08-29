import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavigationBar = () => {
  const navBarStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    listStyle: 'none',
    alignItems: 'center',
  };
  return (
    <header>
      <nav>
        <ul style={navBarStyles}>
          <li>
            <Link to="/">Game Safaris</Link>
          </li>
          <li>
            <NavLink to="/signin">Sign in</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign up</NavLink>
          </li>
          <li>
            <NavLink to="/signout">Sign out</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
