import React from 'react';
import { NavLink } from 'react-router-dom';
import sideBarData from '../../sideBarData';
import './SideBar.css';

const SideBar = () => (
  <section className="side-bar">
    <aside>
      <ul className="side-bar-list">
        {sideBarData.map((item) => (
          <li key={item.id}>
            <NavLink to={item.link} className="side-bar-item">
              <div className="side-bar-icon">{item.icon}</div>
              <div className="side-bar-title">{item.title}</div>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  </section>
);

export default SideBar;
