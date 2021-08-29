/* eslint-disable */

import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';
import logo from '../../assets/images/logo.jpg';
import './Navigation.style.css';

const NavigationBar = (props) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" style={{ maxWidth: '9rem' }}>
            <img
              src={logo}
              className="d-inline-block align-top"
              alt="Game Safaris logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/activities" className="nav-links">
                Activities
              </NavLink>
              <NavLink to="/reservations" className="nav-links">
                Reservations
              </NavLink>
            </Nav>
            <Nav>
              <NavLink to="/user" className="nav-links">
                username
              </NavLink>
              <NavLink to="/signin" className="nav-links">
                Sign in
              </NavLink>
              <NavLink to="/signup" className="nav-links">
                Sign up
              </NavLink>
              <NavLink to="/signout" className="nav-links">
                Log out
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;

// const NavigationBar = () => {
//   const navBarStyles = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     listStyle: 'none',
//     alignItems: 'center',
//   };
//   return (
//     <nav>
//       <ul style={navBarStyles}>
//         <li>
//           <Link to="/">Game Safaris</Link>
//         </li>
//         <li>
//           <NavLink to="/signin">Sign in</NavLink>
//         </li>
//         <li>
//           <NavLink to="/signup">Sign up</NavLink>
//         </li>
//         <li>
//           <NavLink to="/signout">Sign out</NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default NavigationBar;
