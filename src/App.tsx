import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from './components/pages/HomePage';
import WorkoutPage from './components/pages/WorkoutPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/workout">
          <WorkoutPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
