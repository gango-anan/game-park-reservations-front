import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUpUser } from '../../actions/usersActions';
import LoadingUserData from '../../shared/components/LoadingUserData';
import RegistrationForm from '../components/RegistrationForm';

const RegistrationsContainer = () => {
  const dispatch = useDispatch();
  const userAuthenticationData = useSelector((state) => state.userCredentials);
  const { userDataLoading, authenticationErrors, authToken } = userAuthenticationData;

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

    dispatch(signUpUser(data));
  };

  if (userDataLoading) {
    return (
      <div>
        <LoadingUserData />
      </div>
    );
  }

  if (!authToken) {
    return (
      <div>
        <RegistrationForm
          userName={userName}
          userEmail={userEmail}
          userPassWord={userPassWord}
          userPassWordConfirmation={userPassWordConfirmation}
          handleSubmit={handleSubmit}
          errors={authenticationErrors}
        />
      </div>
    );
  }
  return <Redirect to="/activities" />;
};
export default RegistrationsContainer;
