import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      prenom_prof: "",
      nom_prof: "",
      email_prof: "",
      errors: {},
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = token && jwt_decode(token);
    this.setState({
      decoded: decoded,
      prenom_prof: (decoded || []).prenom_prof,
      nom_prof: (decoded || []).nom_prof,
      email_prof: (decoded || []).email_prof,
    });
  }

  render() {
    const { decoded } = this.state;
    return (
      <div>
        {decoded ? (
          <div>
            <div>
              <span className="text-1xl font-bold leading-tight text-gray-900">
                Nom :
              </span>
              <span>{" " + this.state.nom_prof}</span>
            </div>
            <div>
              <span className="text-1xl font-bold leading-tight text-gray-900">
                Prenom :
              </span>
              <span>{" " + this.state.prenom_prof}</span>
            </div>

            <div>
              <span className="text-1xl font-bold leading-tight text-gray-900">
                Adresse :
              </span>
              <span>{" " + this.state.email_prof}</span>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-bold leading-tight text-gray-900 mb-5">
              La session semble avoir expire, vous devez vous reconnecter
            </h1>

            <Link
              className="mr-3 group relative w-30 flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out mb-2"
              to="/c/"
            >
              Se reconnecter
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Profile;
