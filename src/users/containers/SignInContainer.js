import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import SignInForm from '../components/SignInForm';
import { signInUser } from '../../actions/usersActions';
import LoadingUserData from '../../shared/components/LoadingUserData';

const SignInContainer = ({ logInUser, userData }) => {
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

  if (userData.waitingForData) {
    return (
      <div>
        <LoadingUserData />
      </div>
    );
  }

  if (
    userData.authToken === undefined
    || userData.authToken === ''
    || userData.authToken === null
  ) {
    return (
      <>
        <SignInForm
          error={userData.signInError}
          userEmail={userEmail}
          userPassWord={userPassWord}
          handleSubmit={handleSubmit}
        />
      </>
    );
  }
  return <Redirect to="/" />;
};

SignInContainer.propTypes = {
  logInUser: PropTypes.func.isRequired,
  userData: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  userData: state.userCredentials,
});

const mapDispatchToProps = (dispatch) => ({
  logInUser: (logInCredentials) => {
    dispatch(signInUser(logInCredentials));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
