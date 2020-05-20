import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class ElevesAffichage extends Component {
  constructor() {
    super();
    this.state = {
      eleves: [],
      listElevesDelete: [],
      redirect: false,
      errors: {},
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = token && jwt_decode(token);
    this.setState({
      decoded: decoded,
      _id: (decoded || [])._id,
      eleves: (decoded || []).eleves,
    });
  }

  render() {
    return (
      <div className="mx-auto ml-5 mr-5">
        <div className="text-center mt-10">
          <FontAwesomeIcon icon={faUserCircle} size="5x" color="#cbd5e0" />
          <h1 className="text-3xl text-center font-thick">Profil de prenom</h1>
        </div>
        <div className="flex flex-row flex-wrap -mx-2 mt-6">
          <div className="w-full md:w-1/2 h-64 md:h-auto mb-4 px-2 text-center">
            <h1 className="text-2xl text-center font-thick">
              <div className="mb-5">
                <div className="flex content-start flex-wrap justify-center">
                  <div className="w-1/2 p-1">
                    <div className="text-left text-2xl">
                      <p className="text-center font-bold">Infos eleves</p>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 float-left">
                  <div className="flex content-start flex-wrap justify-center">
                    <div className="p-1">
                      <div className="text-left text-2xl">
                        <span className="text-center font-bold">Nom : </span>
                        <span className="text-center">{" " + "nom"}</span>
                      </div>
                      <div className="text-left text-2xl">
                        <span className="text-center font-bold">Prenom : </span>
                        <span className="text-center">{" " + "nom"}</span>
                      </div>
                      <div className="text-left text-2xl">
                        <span className="text-center font-bold">
                          Cle d'acces au jeu :{" "}
                        </span>
                        <span className="text-center">{" " + "nom"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </h1>
          </div>
          <div className="w-full md:w-1/2 mb-4 px-2">
            <div className="flex flex-col sm:flex-row md:flex-col -mx-2">
              <div className="w-full sm:w-1/2 md:w-full h-48 xl:h-64 mb-4 sm:mb-0 md:mb-4 px-2">
                <h1 className="text-2xl text-center font-thick">
                  <div className="flex content-start flex-wrap justify-center">
                    <div className="w-1/2 p-1">
                      <div className="text-left text-2xl">
                        <p className="text-center font-bold">Progression</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 float-left">
                    <div className="flex content-start flex-wrap justify-center">
                      <div className="p-1">
                        <div className="text-left text-2xl">
                          <span className="text-center font-bold">
                            Progression generale :{" "}
                          </span>
                          <span className="text-center">{" " + "%"}</span>
                        </div>
                        <div className="text-left text-2xl">
                          <span className="text-center font-bold">
                            Progression matiere :
                          </span>
                          <span className="text-center">{" " + " %"}</span>
                        </div>
                        <div className="text-left text-2xl">
                          <span className="text-center font-bold">
                            Cle d'acces au jeu :{" "}
                          </span>
                          <span className="text-center">{" " + " %"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </h1>
              </div>
              <div className="w-full sm:w-1/2 md:w-full h-48 xl:h-64 px-2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ElevesAffichage;
