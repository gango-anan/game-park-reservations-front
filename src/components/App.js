import React from 'react';
import RegistrationsContainer from '../containers/RegistrationsContainer';
import SignInContainer from '../containers/SignInContainer';

const App = () => (
  <div className="App">
    <h1>Game Safari Reservations</h1>
    <main>
      <RegistrationsContainer />
      <SignInContainer />
    </main>
  </div>
);

export default App;
