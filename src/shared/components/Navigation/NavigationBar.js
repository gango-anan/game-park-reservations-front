/* eslint-disable */

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';
import logo from '../../../assets/images/logo.jpg';
import './Navigation.style.css';

const NavigationBar = ({ username }) => {
  if (username) {
    return (
      <>
        <Navbar collapseOnSelect expand="lg">
          <Container fluid>
            <Navbar.Brand href="/" style={{ maxWidth: '15vw' }}>
              <img
                src={logo}
                className="d-inline-block align-top"
                alt="Game Safaris logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link to="/activities" className="nav-links">
                  Activities
                </Nav.Link>
                <Nav.Link href="/reservations" className="nav-links">
                  Reservations
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="/user" className="nav-links">
                  {username}
                </Nav.Link>
                <Nav.Link href="/" className="nav-links">
                  Log out
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" style={{ maxWidth: '15vw' }}>
            <img
              src={logo}
              className="d-inline-block align-top"
              alt="Game Safaris logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="align-links">
              <Nav.Link href="/signin" className="nav-links">
                Sign in
              </Nav.Link>
              <Nav.Link href="/signup" className="nav-links">
                Sign up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
