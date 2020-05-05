import React, { Component } from "react";

import Header from "./header";
import Title from "./title";
import TitleEleves from "./content/titleEleves";

import Content from "./contentPage";

import { Switch, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Reconnect from "../Reconnect";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      decoded: null,
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = token && jwt_decode(token);
    this.setState({
      decoded: decoded,
    });
  }

  render() {
    const { decoded } = this.state;
    return (
      <div>
        <Header />
        {decoded ? (
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
        ) : (
          <Reconnect />
        )}
      </div>
    );
  }
}

export default Dashboard;
