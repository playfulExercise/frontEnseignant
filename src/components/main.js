import React, { Component } from "react";
import PagePrincipale from "./connect/pagePrincipale";
import Dashboard from "./dashboard/dashboard";
import Navbar from "./dashboard/navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <Dashboard />
          </Route>
          <Route path="/dashboard"></Route>
        </Switch>
      </Router>
    );
  }
}

export default Main;
