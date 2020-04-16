import React, { Component } from "react";
import LoginPage from "./loginPage";
import RegisterPage from "./registerPage";
import UserChoice from "./userChoice";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class PagePrincipale extends Component {
  render() {
    return (
      <Router>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-4 px-4 sm:px-6 lg:px-4">
          <div className="max-w-md w-full">
            <h1 className="mt-6 text-center text-6xl leading-11 font-extrabold text-indigo-400">
              Exercices ludiques
            </h1>
            <Switch>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/register">
                <RegisterPage />
              </Route>
              <Route path="/">
                <UserChoice />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default PagePrincipale;
