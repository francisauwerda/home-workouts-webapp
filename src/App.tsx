import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import HomePage from './components/pages/HomePage';
import WorkoutPage from './components/pages/WorkoutPage';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;
