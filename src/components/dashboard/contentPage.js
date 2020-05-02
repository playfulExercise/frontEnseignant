import React, { Component } from "react";
import Profile from "./content/profile";
class Content extends Component {
  render() {
    const { nomcontenu } = this.props;
    return (
      <main>
        <div className="max-w-7xl mx-auto py-2 sm:px-2 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
              {nomcontenu === "dashboard" && <Profile />}
              {nomcontenu === "profile" && <Profile />}
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Content;
