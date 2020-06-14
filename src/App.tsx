import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import WorkoutsPage from "./components/pages/WorkoutsPage";
import WorkoutDetailsPage from "./components/pages/WorkoutDetailsPage";
import { Routes } from "./components/enums";

const uri =
  process.env.REACT_APP_HOME_WORKOUTS_API || "http://localhost:4000/graphql";

const client = new ApolloClient({
  uri,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path={`${Routes.WorkoutDetailsPage}/:workoutId`}>
            <WorkoutDetailsPage />
          </Route>
          <Route path={Routes.WorkoutsPage}>
            <WorkoutsPage />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
