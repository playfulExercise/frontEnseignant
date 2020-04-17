import React, { Component } from "react";
import Button from "../UI/Button";

import { register } from "../networkLink";

class RegisterPage extends Component {
  constructor() {
    super();
    this.state = {
      prenom_prof: "",
      nom_prof: "",
      email_prof: "",
      password: "",
      departement: "",
      etablissement: "",
      eleves: [],
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newProfesseur = {
      prenom_prof: this.state.prenom_prof,
      nom_prof: this.state.nom_prof,
      email_prof: this.state.email_prof.toLowerCase(),
      password: this.state.password,
      departement: this.state.sloganArtisan,
      etablissement: this.state.telephoneArtisan,
      eleves: this.state.eleves,
    };

    register(newProfesseur).then((res) => {
      this.props.history.push(`/login`);
    });
  }

  render() {
    return (
      <form className="mt-8" action="#" method="POST">
        <div>
          <h2 className="mt-6 mb-5 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Creer un compte professeur
          </h2>
        </div>
        <div className="font-sans antialiased bg-grey-lightest">
          <div className="py-4 px-8">
            <div className="flex mb-4">
              <div className="w-1/2 mr-1">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="prenom_prof"
                >
                  Prenom
                </label>
                <input
                  aria-label="prenom_prof"
                  name="prenom_prof"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Prenom"
                  value={this.state.prenom_prof}
                  onChange={this.onChange}
                />
              </div>
              <div className="w-1/2 ml-1">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="nom_prof"
                >
                  Nom de famille
                </label>
                <input
                  aria-label="nom_prof"
                  name="nom_prof"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Nom"
                  value={this.state.nom_prof}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="etablissement"
              >
                Nom de l'etablissement
              </label>
              <input
                aria-label="etablissement"
                name="etablissement"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Nom de l'etablissement"
                value={this.state.etablissement}
                onChange={this.onChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="email"
              >
                Adresse mail
              </label>
              <input
                aria-label="Adresse mail"
                name="email_prof"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Adresse mail"
                value={this.state.email_prof}
                onChange={this.onChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="password"
              >
                Mot de passe
              </label>
              <input
                aria-label="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Mot de passe"
                value={this.state.password}
                onChange={this.onChange}
              />
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
                S'inscrire
              </Button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default RegisterPage;
