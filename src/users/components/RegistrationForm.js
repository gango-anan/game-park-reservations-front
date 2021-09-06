import React, { useEffect } from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './AuthenticationForm.css';

const RegistrationForm = ({
  userName,
  userEmail,
  userPassWord,
  userPassWordConfirmation,
  handleSubmit,
  errors,
}) => {
  useEffect(() => {
    userName.current.focus();
  }, []);

  return (
    <section className="auth-form-wrapper">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-title">
            <h2>Sign up</h2>
          </div>
          <div>
            <p className="text-danger text-center">{errors}</p>
          </div>
          <div className="form-controller">
            <label htmlFor="username">Name:</label>
            <input
              ref={userName}
              id="username"
              type="text"
              name="userName"
              placeholder="Name"
              required
            />
          </div>
          <div className="form-controller">
            <label htmlFor="email">Email:</label>
            <input
              ref={userEmail}
              id="email"
              type="email"
              name="email"
              placeholder="email@example.com"
              required
            />
          </div>
          <div className="form-controller">
            <label htmlFor="password">Password:</label>
            <input
              ref={userPassWord}
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="form-controller">
            <label htmlFor="passWordConfirmation">Password confirmation:</label>
            <input
              ref={userPassWordConfirmation}
              id="passWordConfirmation"
              type="password"
              name="passWordConfirmation"
              placeholder="Password confirmation"
              required
            />
          </div>
          <div>
            <button type="submit" className="auth-form-btn">
              Sign Up
            </button>
          </div>
        </form>
        <div className="signup-link">
          <p>
            <span className="unregistered-user-link">
              Already have an account?
            </span>
            &nbsp;
            <span>
              <Link to="/signin" className="text-secondary fw-bold">
                Sign in now
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
    </section>
  );
};

RegistrationForm.propTypes = {
  userName: PropTypes.instanceOf(Object).isRequired,
  userEmail: PropTypes.instanceOf(Object).isRequired,
  userPassWord: PropTypes.instanceOf(Object).isRequired,
  userPassWordConfirmation: PropTypes.instanceOf(Object).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.string.isRequired,
};

export default RegistrationForm;
