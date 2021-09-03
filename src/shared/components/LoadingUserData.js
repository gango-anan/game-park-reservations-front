import React from 'react';
import { IonSpinner } from '@ionic/react';

const SpinnerContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '30vh',
};

const LoaderStyles = {
  transform: 'scale(5)',
  color: 'var(--primary-color)',
};
const LoadingUserData = () => (
  <div style={SpinnerContainerStyles}>
    <IonSpinner name="bubbles" style={LoaderStyles} />
  </div>
);

export default LoadingUserData;
