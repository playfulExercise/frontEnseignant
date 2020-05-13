import React, { Component } from "react";
import Profile from "./content/profile";
import Eleves from "./content/eleves";
import Monde from "./content/monde";
import Stats from "./content/stats";

class Content extends Component {
  render() {
    const { nomcontenu } = this.props;
    return (
      <main>
        <div className="max-w-7xl mx-auto py-2 sm:px-2 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            {nomcontenu === "statistiques" && <Stats />}
            {nomcontenu === "profile" && <Profile />}
            {nomcontenu === "eleves" && <Eleves />}
            {nomcontenu === "monde" && <Monde />}
          </div>
        </div>
      </main>
    );
  }
}

export default Content;
