import React, { Component } from "react";

// import {
//   faGraduationCap,
//   faUserCircle,
//   faTasks,
//   faChartBar,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./header";
import Title from "./title";
import Content from "./contentPage";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <Title title="Profile" />
        <Content />
      </div>
    );
  }
}

export default Dashboard;
