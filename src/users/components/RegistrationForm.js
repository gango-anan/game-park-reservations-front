import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './AuthenticationForm.css';
import { Link } from 'react-router-dom';

const RegistrationForm = ({
  userName,
  userEmail,
  userPassWord,
  userPassWordConfirmation,
  handleSubmit,
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
          <div className="back-home-link">
            <Link to="/">Back to home page</Link>
          </div>
        </form>
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
};

export default RegistrationForm;
