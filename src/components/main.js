import React, { Component } from "react";
import PagePrincipale from "./connect/pagePrincipale";
import Dashboard from "./dashboard/dashboard";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/c/">
            <PagePrincipale />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Main;
