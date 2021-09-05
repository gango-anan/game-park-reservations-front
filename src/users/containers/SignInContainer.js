import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SignInForm from '../components/SignInForm';
import { signInUser } from '../../actions/usersActions';
import LoadingUserData from '../../shared/components/LoadingUserData';

const SignInContainer = () => {
  const userEmail = useRef(null);
  const userPassWord = useRef(null);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userCredentials);
  const { authToken, authenticationErrors, userDataLoading } = userData;

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      user: {
        email: userEmail.current.value,
        password: userPassWord.current.value,
      },
    };

    dispatch(signInUser(data));
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
      <>
        <SignInForm
          error={authenticationErrors}
          userEmail={userEmail}
          userPassWord={userPassWord}
          handleSubmit={handleSubmit}
        />
      </>
    );
  }
  return <Redirect to="/activities" />;
};

export default SignInContainer;
