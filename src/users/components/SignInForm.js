import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
          <p className="text-danger text-center">{error}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-title">
            <h2>Sign in</h2>
            <p>to continue to Game Safaris Reservations</p>
          </div>
          <div className="form-controller">
            <label htmlFor="useremail">Email:</label>
            <input
              ref={userEmail}
              id="useremail"
              type="email"
              name="email"
              placeholder="email@example.com"
              required
            />
          </div>
          <div className="form-controller">
            <label htmlFor="userpassword">Password:</label>
            <input
              ref={userPassWord}
              id="userpassword"
              type="password"
              name="password"
              placeholder="Passowrd"
              required
            />
          </div>
          <div>
            <input
              type="checkbox"
              name="showPassword"
              id="show-password"
              className="show-password-checkbox"
            />
            <label htmlFor="show-password">Show passord</label>
          </div>
          <div>
            <button type="submit" className="auth-form-btn">
              Sign in
            </button>
          </div>
          <div className="signup-link">
            <p>
              <span className="unregistered-user-link">
                New to Game Safaris?
              </span>
              {' '}
              <span>
                <Link to="/signup">Sign up now</Link>
              </span>
            </p>
          </div>
          <div className="back-home-link">
            <Link to="/">Back to home page</Link>
          </div>
        </form>
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
