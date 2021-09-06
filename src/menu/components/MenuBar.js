import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { MenuBarData, UNAUTHENTICATED_LINKS } from './MenuBarData';
import './MenuBar.css';

const MenuBar = ({ token, username, handleOnClick }) => {
  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sideBar);
  const linksToDisplay = (authtoken) => {
    if (!authtoken) {
      return (
        <>
          {UNAUTHENTICATED_LINKS.map((item) => (
            <li key={item.id} className={item.cssClassName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </>
      );
    }

    return (
      <>
        <li className="nav-text">
          <Link to="/username/dashboard">
            <AccountCircleIcon />
            <span>{username}</span>
          </Link>
        </li>
        <li className="nav-text">
          <Link to="/" onClick={handleOnClick}>
            <ExitToAppIcon />
            <span>Sign out</span>
          </Link>
        </li>
        {MenuBarData.map((item) => (
          <li key={item.id} className={item.cssClassName}>
            <Link to={item.path}>
              {item.icon}
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </>
    );
  };

  return (
    <header>
      <div className="navbar">
        <Link to="/" className="menu-bars">
          <MenuIcon onClick={showSideBar} />
        </Link>
      </div>
      <nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
        <ul
          className="nav-menu-items"
          onClick={showSideBar}
          role="presentation"
          onKeyPress={showSideBar}
        >
          <li className="navbar-toggle">
            <Link to="/" className="menu-bars">
              <CloseIcon />
            </Link>
          </li>
          {linksToDisplay(token)}
        </ul>
      </nav>
    </header>
  );
};

MenuBar.propTypes = {
  token: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

export default MenuBar;
