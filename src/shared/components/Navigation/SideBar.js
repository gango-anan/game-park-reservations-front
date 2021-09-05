import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { sideBarData, UNAUTHENTICATED_LINKS } from '../../sideBarData';

import './SideBar.css';

const SideBar = () => {
  const authToken = useSelector((state) => state.userCredentials.authToken);
  const linksToDisplay = (token) => {
    if (!token) {
      return (
        <>
          {UNAUTHENTICATED_LINKS.map((item) => (
            <li key={item.id}>
              <NavLink to={item.link} className="side-bar-item">
                <div className="side-bar-icon">{item.icon}</div>
                <div className="side-bar-title">{item.title}</div>
              </NavLink>
            </li>
          ))}
        </>
      );
    }
    return (
      <>
        {sideBarData.map((item) => (
          <li key={item.id}>
            <NavLink to={item.link} className="side-bar-item">
              <div className="side-bar-icon">{item.icon}</div>
              <div className="side-bar-title">{item.title}</div>
            </NavLink>
          </li>
        ))}
      </>
    );
  };

  return (
    <section className="side-bar">
      <aside>
        <ul className="side-bar-list">{linksToDisplay(authToken)}</ul>
      </aside>
    </section>
  );
};

export default SideBar;
