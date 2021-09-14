import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import './AuthenticationForm.css';

const SignInForm = ({
  userEmail, userPassWord, handleSubmit, error,
}) => {
  useEffect(() => {
    userEmail.current.focus();
  }, []);

  return (
    <div className="auth-form-wrapper">
      <div className="form-container">
        <div>
          <div className="form-title">
            <h2>Sign in</h2>
            <p>to continue to Game Safaris Reservations</p>
          </div>
          <p className="text-danger text-center">{error}</p>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={userEmail}
              required
            />
            <Form.Text className="text-muted">
              We&apos;ll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={userPassWord}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="auth-form-btn">
            Sign in
          </Button>
        </Form>
        <div className="signup-link">
          <p>
            <span className="unregistered-user-link">New to Game Safaris?</span>
            &nbsp;
            <span>
              <Link to="/signup" className="text-secondary fw-bold">
                Sign up now
              </Link>
            </span>
          </p>
        </div>
        <div className="text-center">
          <Link to="/" className="text-danger">
            <KeyboardBackspaceIcon />
            &nbsp; Back home
          </Link>
        </div>
      </div>
    </div>
  );
};

SignInForm.propTypes = {
  userEmail: PropTypes.instanceOf(Object).isRequired,
  userPassWord: PropTypes.instanceOf(Object).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

export default SignInForm;
