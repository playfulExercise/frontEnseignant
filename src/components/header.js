import React, { Component } from "react";

import {
  faGraduationCap,
  faUserCircle,
  faTasks,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
  render() {
    return (
      <div className="p-4 w-full bg-gray-800">
        <div className="p-2 text-gray-700 bg-gray-900 rounded-lg shadow-lg font-medium capitalize">
          <span className="px-2 mr-2 border-r border-gray-800">
            <FontAwesomeIcon
              icon={faGraduationCap}
              size="3x"
              color="#cbd5e0"
              // className="w-8 p-2 bg-gray-800 rounded-full"
            />
          </span>
          <span className="px-2 py-3 cursor-pointer hover:bg-gray-800 hover:text-gray-300 text-sm rounded-full">
            <FontAwesomeIcon
              icon={faChartBar}
              size="2x"
              color="#cbd5e0"
              // className="w-8 p-2 bg-gray-800 rounded-full"
            />
            <span className="mx-1">Gestion des élèves</span>
          </span>
          <span className="px-2 py-3 cursor-pointer hover:bg-gray-800 hover:text-gray-300 text-sm rounded-full">
            <FontAwesomeIcon
              icon={faTasks}
              size="2x"
              color="#cbd5e0"
              // className="w-8 p-2 bg-gray-800 rounded-full"
            />
            <span className="mx-1">Avancement</span>
          </span>
          <span className="hover:text-white cursor-pointer w-10 relative float-right mr-3">
            <FontAwesomeIcon
              icon={faUserCircle}
              size="3x"
              color="#cbd5e0"
              // className="w-8 p-2 bg-gray-800 rounded-full"
            />{" "}
            <span className="absolute right-0 top-0 -mt-1 -mr-1 text-xs bg-yellow-500 text-black font-medium px-2 rounded-full">
              3
            </span>
          </span>
        </div>
      </div>
    );
  }
}

export default Header;
