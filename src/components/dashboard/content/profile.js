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
        <p>Nom : {this.state.nom_prof}</p>
        <p>Prenom : {this.state.prenom_prof}</p>
        <p>Adresse mail : {this.state.email_prof}</p>
      </div>
    );
  }
}

export default Profile;
