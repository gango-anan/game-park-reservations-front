import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signUpUser } from '../../actions/usersActions';
import LoadingUserData from '../../shared/components/LoadingUserData';
import RegistrationForm from '../components/RegistrationForm';

const RegistrationsContainer = ({ userData, registerUser }) => {
  const userName = useRef(null);
  const userEmail = useRef(null);
  const userPassWord = useRef(null);
  const userPassWordConfirmation = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      user: {
        username: userName.current.value,
        email: userEmail.current.value,
        password: userPassWord.current.value,
        password_confirmation: userPassWordConfirmation.current.value,
      },
    };

    registerUser(data);
  };

  if (userData.waitingForRegData) {
    return (
      <div>
        <LoadingUserData />
      </div>
    );
  }

  return (
    <div>
      <RegistrationForm
        userName={userName}
        userEmail={userEmail}
        userPassWord={userPassWord}
        userPassWordConfirmation={userPassWordConfirmation}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

RegistrationsContainer.propTypes = {
  userData: PropTypes.instanceOf(Object).isRequired,
  registerUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userData: state.userRegistrationData,
});

const mapDispatchToProps = (dispatch) => ({
  registerUser: (newUserData) => {
    dispatch(signUpUser(newUserData));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegistrationsContainer);
