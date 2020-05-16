import React, { Component } from "react";
import Button from "../../UI/Button";
import { Redirect } from "react-router-dom";
import { addEleves, getMonde } from "../../networkLink";
import jwt_decode from "jwt-decode";

class ElevesAddPage extends Component {
  constructor() {
    super();
    this.state = {
      prenom_eleve: "",
      nom_eleve: "",
      _id: "",
      errors: {},
      redirectLogin: false,
      infos: {
        progression_monde: 0,
        nb_pieces: 0,
        matieres: [
          {
            nom_matiere: "francais",
            nb_donjons: 0,
            nb_donjons_finis: 0,
          },
          {
            nom_matiere: "maths",
            nb_donjons: 0,
            nb_donjons_finis: 0,
          },
          {
            nom_matiere: "histoire",
            nb_donjons: 0,
            nb_donjons_finis: 0,
          },
          {
            nom_matiere: "geographie",
            nb_donjons: 0,
            nb_donjons_finis: 0,
          },
          {
            nom_matiere: "anglais",
            nb_donjons: 0,
            nb_donjons_finis: 0,
          },
        ],
      },
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      id_prof: decoded._id,
    });
    const professeur = {
      _id: (decoded || [])._id,
    };
    getMonde(professeur).then((res) =>
      this.setState({ configuration_monde: res })
    );
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.state.infos.matieres.map((x) => {
      if (x.nom_matiere === "francais") {
        x.nb_donjons_finis = 0;
        x.nb_donjons = this.state.configuration_monde.francais;
      }
      if (x.nom_matiere === "maths") {
        x.nb_donjons_finis = 0;
        x.nb_donjons = this.state.configuration_monde.maths;
      }
      if (x.nom_matiere === "histoire") {
        x.nb_donjons_finis = 0;
        x.nb_donjons = this.state.configuration_monde.histoire;
      }
      if (x.nom_matiere === "geographie") {
        x.nb_donjons_finis = 0;
        x.nb_donjons = this.state.configuration_monde.geographie;
      }
      if (x.nom_matiere === "anglais") {
        x.nb_donjons_finis = 0;
        x.nb_donjons = this.state.configuration_monde.anglais;
      }
      return x;
    });
    const newEleve = {
      nom_eleve: this.state.nom_eleve,
      prenom_eleve: this.state.prenom_eleve,
      code_eleve: Math.random()
        .toString(36)
        .substring(6)
        .toLowerCase(),
      id_prof: this.state.id_prof,
      infos: this.state.infos,
    };
    addEleves(newEleve).then((res) => {
      this.setState({
        redirectLogin: true,
      });
    });
  }

  render() {
    return (
      <div className="mt-8 w-full flex items-center justify-center">
        <div className="1/2">
          <form action="#" method="POST">
            <div>
              <h2 className="mt-6 mb-5 text-center text-3xl leading-9 font-extrabold text-gray-900">
                Ajouter un eleve
              </h2>
              {this.state.redirectLogin && <Redirect to="/eleves/all" />}
            </div>
            <div className="font-sans antialiased bg-grey-lightest">
              <div className="py-4 px-8">
                <div className="flex mb-4">
                  <div className="w-1/2 mr-1">
                    <label
                      className="block text-grey-darker text-sm font-bold mb-2"
                      htmlFor="prenom_eleve"
                    >
                      Prenom
                    </label>
                    <input
                      aria-label="prenom_eleve"
                      name="prenom_eleve"
                      type="text"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                      placeholder="Prenom"
                      value={this.state.prenom_eleve}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="w-1/2 ml-1">
                    <label
                      className="block text-grey-darker text-sm font-bold mb-2"
                      htmlFor="nom_eleve"
                    >
                      Nom
                    </label>
                    <input
                      aria-label="nom_eleve"
                      name="nom_eleve"
                      type="text"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                      placeholder="Nom"
                      value={this.state.nom_eleve}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-8">
                  <Button onClick={this.onSubmit}>
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <svg
                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    Ajout de l'eleve
                    {this.state.error}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ElevesAddPage;
