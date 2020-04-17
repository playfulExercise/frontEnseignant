import React, { Component } from "react";
import LoginPage from "./loginPage";
import RegisterPage from "./registerPage";
import UserChoice from "./userChoice";

import { Switch, Route } from "react-router-dom";

class PagePrincipale extends Component {
  render() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-4 px-4 sm:px-6 lg:px-4">
        <div className="max-w-md w-full">
          <h1 className="mt-6 text-center text-6xl leading-11 font-extrabold text-indigo-400">
            Exercices ludiques
          </h1>
          <Switch>
            <Route path="/c/login">
              <LoginPage />
            </Route>
            <Route path="/c/register">
              <RegisterPage />
            </Route>
            <Route path="/c/">
              <UserChoice />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default PagePrincipale;
