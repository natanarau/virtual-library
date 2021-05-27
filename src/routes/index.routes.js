import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';

const IndexRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/teste">
          <LandingPage />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
};
export default IndexRoutes;