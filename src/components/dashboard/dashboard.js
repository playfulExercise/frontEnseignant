import React, { Component } from "react";

// import {
//   faGraduationCap,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "./header";
import Title from "./title";
import TitleEleves from "./content/titleEleves";

import Content from "./contentPage";

import { Switch, Route } from "react-router-dom";
class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/dashboard">
            <Title title="Tableau de bord" />
            <Content nomcontenu="dashboard" />
          </Route>
          <Route path="/eleves">
            <TitleEleves />
            <Content nomcontenu="eleves" />
          </Route>
          <Route path="/monde">
            <Title title="Monde" />
            <Content nomcontenu="monde" />
          </Route>
          <Route path="/profile">
            <Title title="Profile" />
            <Content nomcontenu="profile" />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Dashboard;
