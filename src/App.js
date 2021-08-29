import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavigationBar from './shared/components/NavigationBar';
import Home from './home/components/Home';
import SignInContainer from './users/containers/SignInContainer';
import RegistrationsContainer from './users/containers/RegistrationsContainer';

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
