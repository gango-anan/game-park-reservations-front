import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Home from './Home';
import SignInContainer from '../containers/SignInContainer';
import RegistrationsContainer from '../containers/RegistrationsContainer';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <NavigationBar />
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={SignInContainer} />
      <Route path="/signup" component={RegistrationsContainer} />
      <Route path="/signout" component={Home} />
    </div>
  </BrowserRouter>
);

export default App;
