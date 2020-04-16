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

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <Title title="Dashboard" />
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                <p>oihj78y8g7y</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Dashboard;
