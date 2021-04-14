import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {Homepage, Destination} from './pages';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/Location">
          <Destination />
        </Route>
      </Switch>
    </>
  );
};

export default App;