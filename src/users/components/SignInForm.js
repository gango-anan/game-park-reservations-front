import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const SignInForm = ({ userEmail, userPassWord, handleSubmit }) => {
  useEffect(() => {
    userEmail.current.focus();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="useremail">Email</label>
          <input
            ref={userEmail}
            id="useremail"
            type="email"
            name="email"
            placeholder="email@example.com"
            required
          />
        </div>
        <div>
          <label htmlFor="userpassword">Password</label>
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
          <label>
            Show passord
            <input type="checkbox" name="showPassword" />
          </label>
        </div>
        <div>
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
};

SignInForm.propTypes = {
  userEmail: PropTypes.instanceOf(Object).isRequired,
  userPassWord: PropTypes.instanceOf(Object).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SignInForm;
