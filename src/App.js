import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import MenuBarContainer from './menu/containers/MenuBarContainer';
import SignInContainer from './users/containers/SignInContainer';
import RegistrationsContainer from './users/containers/RegistrationsContainer';
import UserDashBoard from './users/containers/UserDashBoard';
import HomeContainer from './home/containers/HomeContainer';
import ActivitiesContainer from './activities/containers/ActivitiesContainer';
import UserReservationsList from './reservations/containers/UserReservationsList';
import NewReservation from './reservations/containers/NewReservation';
import ActivityDetails from './activities/containers/ActivityDetails';
import './App.css';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <MenuBarContainer />
      <main className="main-body">
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/home" component={HomeContainer} />
          <Route path="/signin" component={SignInContainer} />
          <Route path="/signup" component={RegistrationsContainer} />
          <Route path="/signout" component={HomeContainer} />
          <Route path="/activities" component={ActivitiesContainer} />
          <Route
            path="/activity/:activityId/details"
            component={ActivityDetails}
          />
          <Route exact path="/reservations" component={UserReservationsList} />
          <Route exact path="/:username/dashboard" component={UserDashBoard} />
          <Route
            exact
            path="/reservation/activity/:activityId/new"
            component={NewReservation}
          />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  </BrowserRouter>
);

export default App;
