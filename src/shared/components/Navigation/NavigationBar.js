import React from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';
import logo from '../../../assets/images/logo.jpg';
import './Navigation.style.css';
import { logOutUser } from '../../../actions/usersActions';

const NavigationBar = ({ userName }) => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(logOutUser());
  };

  const renderLinks = (username) => {
    if (username) {
      return (
        <>
          <Nav className="align-links">
            <Nav.Link
              as={NavLink}
              to="/"
              className="nav-links"
              onClick={handleOnClick}
            >
              Log out
            </Nav.Link>
          </Nav>
        </>
      );
    }
    return (
      <>
        <Nav className="align-links">
          <Nav.Link as={NavLink} to="/activities" className="nav-links">
            Activities
          </Nav.Link>
          <Nav.Link as={NavLink} to="/signin" className="nav-links">
            Sign in
          </Nav.Link>
          <Nav.Link as={NavLink} to="/signup" className="nav-links">
            Sign up
          </Nav.Link>
        </Nav>
      </>
    );
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" style={{ maxWidth: '12vw' }}>
            <img
              src={logo}
              className="d-inline-block align-top"
              alt="Game Safaris logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {renderLinks(userName)}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

NavigationBar.propTypes = {
  userName: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userName: state.userCredentials.username,
});
export default connect(mapStateToProps)(NavigationBar);
