import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {Homepage, Destination, RoadTrip} from './pages';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/Locations">
          <Destination />
        </Route>
        <Route path="/Locations/:id">
          <Destination />
        </Route>
        <Route path="/Road_Trip">
          <RoadTrip />
        </Route>
      </Switch>
    </>
  );
};

export default App;