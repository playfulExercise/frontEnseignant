import React, { Component } from "react";
import LoginPage from "./loginPage";
import UserChoice from "./userChoice";

class PagePrincipale extends Component {
  render() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <h1 className="mt-6 text-center text-6xl leading-11 font-extrabold text-indigo-400">
            Exercices ludiques
          </h1>
          <UserChoice />
        </div>
      </div>
    );
  }
}

export default PagePrincipale;
