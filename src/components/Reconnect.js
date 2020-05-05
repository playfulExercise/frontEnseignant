import { Link } from "react-router-dom";
import React from "react";

const Reconnect = () => {
  return (
    <div className="group relative w-full flex justify-center">
      <div className="w-1/2 mt-5">
        <h1 className="text-2xl font-bold leading-tight text-gray-900 mb-5 text-center">
          La session semble avoir expire, vous devez vous reconnecter
        </h1>

        <Link
          className="mr-3 group relative w-30 flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out mb-2"
          to="/c/"
        >
          Se reconnecter
        </Link>
      </div>
    </div>
  );
};

export default Reconnect;
