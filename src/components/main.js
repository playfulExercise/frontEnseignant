import React, { Component } from "react";
import PagePrincipale from "./connect/pagePrincipale";
import Dashboard from "./dashboard/dashboard";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <PagePrincipale />
          </Route>
          <Route path="/dashboard"></Route>
        </Switch>
      </Router>
    );
  }
}

export default Main;
