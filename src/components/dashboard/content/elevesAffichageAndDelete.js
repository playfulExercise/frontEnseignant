import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { Redirect } from "react-router-dom";

import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getEleves, delEleves } from "../../networkLink";
import Button from "../../UI/Button";

class ElevesAffichage extends Component {
  constructor() {
    super();
    this.state = {
      eleves: [],
      listElevesDelete: [],
      redirect: false,
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = token && jwt_decode(token);
    this.setState({
      decoded: decoded,
      _id: (decoded || [])._id,
      eleves: (decoded || []).eleves,
    });
    const professeur = {
      _id: (decoded || [])._id,
    };
    getEleves(professeur).then((res) => this.setState({ card: res }));
  }

  onChange(e) {
    const elevesASupprimer = this.state.listElevesDelete;
    if (e.target.checked) {
      elevesASupprimer.push(e.target.value);
      this.setState({
        listElevesDelete: elevesASupprimer,
      });
    } else {
      elevesASupprimer.pop(e.target.value);
      this.setState({
        listElevesDelete: elevesASupprimer,
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const professeurUpdate = {
      _id: this.state._id,
      listElevesDelete: this.state.listElevesDelete,
    };
    delEleves(professeurUpdate).then(
      this.setState({
        redirect: true,
      })
    );
  }

  render() {
    const { card } = this.state;

    return (
      <div>
        {this.state.redirect && <Redirect to="/eleves/add" />}
        <div className="w-full flex items-center justify-center">
          <div className="w-1/2">
            {(card || []).length ? (
              (card || []).map((eleves, i) => (
                <div
                  key={i}
                  className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline mb-3 overflow-hidden rounded-lg shadow-lg"
                >
                  <div className="mb-2 sm:mb-0 flex flex-row">
                    <div className="h-10 w-10 self-center mr-5">
                      <FontAwesomeIcon
                        icon={faUserCircle}
                        size="3x"
                        className="text-indigo-600"
                      />
                    </div>
                    <div>
                      <span className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">
                        {eleves.nom_eleve || " "} {eleves.prenom_eleve || " "}
                      </span>
                      <p className="text-xs text-grey-dark">
                        {eleves.code_eleve || "unable to fetch code"}
                      </p>
                    </div>
                  </div>

                  <div className="sm:mb-0 self-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-md no-underline text-black hover:text-blue-dark ml-2 px-1 bg-gray-700"
                      name={i}
                      onChange={(e) => this.onChange(e)}
                      value={eleves._id}
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full flex items-center justify-center mb-5 text-2xl">
                Vous n'avez pas encore ajoute d'eleves
              </div>
            )}
          </div>
        </div>
        {(card || []).length ? (
          <div className="w-full flex items-center justify-center">
            <Button
              onClick={this.onSubmit}
              additionalClassName="ml-5 mr-5"
              typeButton
              setW="w-1/4"
            >
              Supprimer les eleves selectionnes
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default ElevesAffichage;
