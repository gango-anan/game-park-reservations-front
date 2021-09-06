import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MenuBar from '../components/MenuBar';
import { logOutUser } from '../../actions/usersActions';

const MenuBarContainer = () => {
  const user = useSelector((state) => state.userCredentials);
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(logOutUser());
  };

  useEffect(() => {}, [user]);

  const { authToken, username } = user;

  return (
    <div>
      <MenuBar
        token={authToken}
        username={username}
        handleOnClick={handleOnClick}
      />
    </div>
  );
};

export default MenuBarContainer;
