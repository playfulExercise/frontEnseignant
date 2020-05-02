import React, { Component } from "react";
import jwt_decode from "jwt-decode";

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
    const decoded = jwt_decode(token);
    this.setState({
      prenom_prof: decoded.prenom_prof,
      nom_prof: decoded.nom_prof,
      email_prof: decoded.email_prof,
    });
  }

  render() {
    return (
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
    );
  }
}

export default Profile;
