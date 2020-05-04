import React, { Component } from "react";
import jwt_decode from "jwt-decode";

import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getEleves } from "../../networkLink";
import Button from "../../UI/Button";

class ElevesAffichage extends Component {
  constructor() {
    super();
    this.state = {
      eleves: [],
      errors: {},
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = token && jwt_decode(token);
    this.setState({
      decoded: decoded,
      eleves: (decoded || []).eleves,
    });
    const professeur = {
      _id: (decoded || [])._id,
    };
    getEleves(professeur).then((res) => this.setState({ card: res }));
  }

  render() {
    const { card } = this.state;

    return (
      <div>
        <div className="w-full flex items-center justify-center">
          <div className="w-1/2">
            {(card || []).length &&
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
                        {eleves.code_eleve || "Desc"}
                      </p>
                    </div>
                  </div>

                  <div className="sm:mb-0 self-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-md no-underline text-black hover:text-blue-dark ml-2 px-1 bg-gray-700"
                      name={i}
                      // onChange={(e) => this.onChange(e, creation.nomProduit)}
                      value={eleves._id}
                      // checked={
                      //   (this.state.listeCreationsIncluses || {})[creation._id]
                      // }
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <Button
            // onClick={() => setRedirectSubpageEleves("/eleves/all")}
            additionalClass="ml-5 mr-5"
            typeButton
            setW="w-1/4"
          >
            Supprimer les eleves selectionnes
          </Button>
        </div>
      </div>
    );
  }
}

export default ElevesAffichage;
