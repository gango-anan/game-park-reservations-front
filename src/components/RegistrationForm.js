import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const RegistrationForm = (props) => {
  const {
    userName,
    userEmail,
    userPassWord,
    userPassWordConfirmation,
    handleSubmit,
  } = props;

  useEffect(() => {
    userName.current.focus();
  }, []);

  return (
    <section>
      <div>
        <h2>Sign in</h2>
        <p>to continue to Game Reservations</p>
      </div>
      <>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              ref={userName}
              id="username"
              type="text"
              name="userName"
              placeholder="User name"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              ref={userEmail}
              id="email"
              type="email"
              name="email"
              placeholder="email@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              ref={userPassWord}
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div>
            <label htmlFor="passWordConfirmation">Password confirmation</label>
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
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </>
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
