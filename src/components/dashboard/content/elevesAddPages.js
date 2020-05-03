import React, { Component } from "react";
import Button from "../../UI/Button";
import { Redirect } from "react-router-dom";
import { addEleves } from "../../networkLink";
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
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      _id: decoded._id,
    });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newEleve = {
      nom_eleve: this.state.nom_eleve,
      prenom_eleve: this.state.prenom_eleve,
      code_eleve: Math.random()
        .toString(36)
        .substring(6)
        .toLowerCase(),
      _id: this.state._id,
    };
    addEleves(newEleve).then((res) => {
      this.setState({
        redirectLogin: true,
      });
    });
  }

  render() {
    return (
      <form className="mt-8" action="#" method="POST">
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
    );
  }
}

export default ElevesAddPage;
