import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import NavigationBar from './shared/components/NavigationBar';
import Home from './home/components/Home';
import SignInContainer from './users/containers/SignInContainer';
import RegistrationsContainer from './users/containers/RegistrationsContainer';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <header>
        <NavigationBar />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignInContainer} />
          <Route path="/signup" component={RegistrationsContainer} />
          <Route path="/signout" component={Home} />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  </BrowserRouter>
);

export default App;
