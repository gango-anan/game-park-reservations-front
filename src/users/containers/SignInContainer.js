import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignInForm from '../components/SignInForm';
import { signInUser } from '../../actions/usersActions';

const SignInContainer = ({ logInUser }) => {
  const userEmail = useRef(null);
  const userPassWord = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      user: {
        email: userEmail.current.value,
        password: userPassWord.current.value,
      },
    };

    logInUser(data);
  };
  return (
    <>
      <div>
        <h3>Sign In</h3>
      </div>
      <SignInForm
        userEmail={userEmail}
        userPassWord={userPassWord}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

SignInContainer.propTypes = {
  logInUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  logInUser: (logInCredentials) => {
    dispatch(signInUser(logInCredentials));
  },
});

export default connect(null, mapDispatchToProps)(SignInContainer);
