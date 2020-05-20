import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getEleveSpecifique } from "../../networkLink";

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

    const url = window.location.href;
    const urlSplit = url.split("/eleves/");
    const params = urlSplit[1];

    this.setState({
      decoded: decoded,
      _id: (decoded || [])._id,
      eleves_id: params,
    });
    const packID = {
      _id: (decoded || [])._id,
      eleves_id: params,
    };

    getEleveSpecifique(packID).then((res) =>
      this.setState({ data_eleve: res })
    );
  }

  render() {
    const { data_eleve } = this.state;
    const { infos } = data_eleve || {};
    const { matieres } = infos || {};

    return (
      <div>
        <div className="text-center mt-10">
          <FontAwesomeIcon icon={faUserCircle} size="5x" color="#cbd5e0" />
          <h1 className="text-3xl text-center font-thick">
            Profil de {" " + (data_eleve || {}).prenom_eleve}
          </h1>
        </div>
        <div className="flex flex-row flex-wrap -mx-2 mt-6">
          <div className="w-full md:w-1/2 mb-4 px-2 text-center">
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
                      <span className="text-center">
                        {" " + (data_eleve || {}).nom_eleve}
                      </span>
                    </div>
                    <div className="text-left text-2xl">
                      <span className="text-center font-bold">Prenom : </span>
                      <span className="text-center">
                        {" " + (data_eleve || {}).prenom_eleve}
                      </span>
                    </div>
                    <div className="text-left text-2xl">
                      <span className="text-center font-bold">
                        Cle d'acces au jeu :{" "}
                      </span>
                      <span className="text-center">
                        {" " + (data_eleve || {}).code_eleve}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 mb-4 px-2">
            <div className="flex flex-col sm:flex-row md:flex-col -mx-2">
              <div className="w-full sm:w-1/2 md:w-full h-48 xl:h-64 mb-4 sm:mb-0 md:mb-4 px-2">
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
                        <span className="text-center">
                          {" " + (infos || {}).progression_monde}
                        </span>
                      </div>
                      <div className="text-left text-2xl">
                        <span className="text-center font-bold">
                          Progression par matieres :
                        </span>
                      </div>
                      <div className="text-left text-xl">
                        {(matieres || []).map((matiere, i) => (
                          <div key={i}>
                            <span className="text-center">
                              Progression {" " + (matiere || {}).nom_matiere}
                              {": "}
                            </span>
                            <span className="text-right">
                              {(matiere || {}).nb_donjons === 0 ||
                              (matiere || {}).nb_donjons_finis === 0 ||
                              !(matiere || {}).nb_donjons_finis ||
                              !(matiere || {}).nb_donjons
                                ? 0
                                : Math.round(
                                    ((matiere || {}).nb_donjons_finis /
                                      (matiere || {}).nb_donjons) *
                                      100
                                  )}
                              {" % - " +
                                (matiere || {}).nb_donjons_finis +
                                " / " +
                                (matiere || {}).nb_donjons}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
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
