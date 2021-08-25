import React from 'react';
import { IonSpinner } from '@ionic/react';

const LoaderStyles = {
  margin: 'auto',
  transform: 'scale(8)',
  color: 'var(--primary-color)',
};
const LoadingUserData = () => (<IonSpinner name="bubbles" style={LoaderStyles} />);

export default LoadingUserData;
