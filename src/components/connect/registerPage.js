import React, { Component } from "react";
import Button from "../UI/Button";

import { register } from "../networkLink";
import { Redirect } from "react-router-dom";

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
      redirectLogin: false,
      questions: [
        {
          id: 1,
          matiere: "francais",
          intitule: "Quel est le participe passé du verbe manger ?",
          type: "qcm",
          strict_libre: false,
          reponses_libre: [],
          propositions_qcm: ["mangé", "mangea", "mangeait", "mangeaient"],
          reponse_qcm: 0,
          deja_pose: true,
        },
        {
          id: 2,
          matiere: "francais",
          intitule:
            "Conjuger le verbe être à la première personne du singulier au présent de l'indicatif.",
          type: "libre",
          strict_libre: false,
          reponses_libre: ["suis"],
          propositions_qcm: [],
          reponse_qcm: 0,
          deja_pose: true,
        },
        {
          id: 3,
          matiere: "francais",
          intitule: "Quel est le pronom de la deuxième personne du pluriel ?",
          type: "libre",
          strict_libre: true,
          reponses_libre: ["vous"],
          propositions_qcm: [],
          reponse_qcm: 0,
          deja_pose: true,
        },
        {
          id: 4,
          matiere: "francais",
          intitule: "Comment s'appelle la femelle du loup ?",
          type: "libre",
          strict_libre: false,
          reponses_libre: ["louve"],
          propositions_qcm: [],
          reponse_qcm: 0,
          deja_pose: true,
        },
        {
          id: 5,
          matiere: "francais",
          intitule:
            "Quel est le verbe dans la phrase : 'J'ai mangé une pomme.' ?",
          type: "qcm",
          strict_libre: false,
          reponses_libre: [],
          propositions_qcm: ["une pomme", "mangé", "ai mangé", "J'"],
          reponse_qcm: 2,
          deja_pose: false,
        },
        {
          id: 6,
          matiere: "maths",
          intitule: "3 x 15 ?",
          type: "libre",
          strict_libre: false,
          reponses_libre: ["45"],
          propositions_qcm: [],
          reponse_qcm: 0,
          deja_pose: false,
        },
        {
          id: 7,
          matiere: "maths",
          intitule: "12 x 10 ?",
          type: "libre",
          strict_libre: true,
          reponses_libre: ["120"],
          propositions_qcm: [],
          reponse_qcm: 0,
          deja_pose: false,
        },
        {
          id: 8,
          matiere: "maths",
          intitule:
            "Comment s'appelle un triangle ayant 2 côtés de la même longueur ?",
          type: "libre",
          strict_libre: false,
          reponses_libre: ["isocèle"],
          propositions_qcm: [],
          reponse_qcm: 0,
          deja_pose: false,
        },
        {
          id: 9,
          matiere: "maths",
          intitule:
            "Qu'est-ce qu'un losange ne possédant que des angles droits ?",
          type: "libre",
          strict_libre: false,
          reponses_libre: ["carré"],
          propositions_qcm: [],
          reponse_qcm: 0,
          deja_pose: false,
        },
        {
          id: 10,
          matiere: "maths",
          intitule:
            "Un kilogramme de plomb est-il plus lourd qu'un kilogramme de plumes ?",
          type: "libre",
          strict_libre: false,
          reponses_libre: ["non"],
          propositions_qcm: [],
          reponse_qcm: 0,
          deja_pose: false,
        },
        {
          id: 11,
          matiere: "histoire",
          intitule: "Quel est le nom du président français élu en 2017 ?",
          type: "libre",
          strict_libre: false,
          reponses_libre: ["Macron"],
          propositions_qcm: [],
          reponse_qcm: 0,
          deja_pose: true,
        },
        {
          id: 12,
          matiere: "histoire",
          intitule: "Quelles sont les dates de la Première Guerre Mondiale ?",
          type: "qcm",
          strict_libre: false,
          reponses_libre: [],
          propositions_qcm: [
            "1918 - 1924",
            "1914 - 1918",
            "1939 - 1945",
            "1924 - 1928",
          ],
          reponse_qcm: 1,
          deja_pose: false,
        },
        {
          id: 13,
          matiere: "histoire",
          intitule: "En quelle année a eu lieu la Révolution française ?",
          type: "libre",
          strict_libre: true,
          reponses_libre: ["1789"],
          propositions_qcm: [],
          reponse_qcm: 0,
          deja_pose: false,
        },
        {
          id: 14,
          matiere: "histoire",
          intitule:
            "Comment s'appelle le plus grand empereur de la Rome antique ?",
          type: "libre",
          strict_libre: false,
          reponses_libre: ["César"],
          propositions_qcm: [],
          reponse_qcm: 0,
          deja_pose: false,
        },
        {
          id: 15,
          matiere: "histoire",
          intitule:
            "Comment s'appelle le premier Homme préhistorique découvert ?",
          type: "libre",
          strict_libre: true,
          reponses_libre: ["Lucy"],
          propositions_qcm: [],
          reponse_qcm: 0,
          deja_pose: false,
        },
        {
          id: 16,
          matiere: "geographie",
          intitule: "Quelle est la capitale de la France ?",
          type: "libre",
          strict_libre: false,
          reponses_libre: ["Paris"],
          propositions_qcm: [],
          reponse_qcm: 0,
          deja_pose: false,
        },
        {
          id: 17,
          matiere: "geographie",
          intitule: "Quelle est la capitale de l'Allemagne ?",
          type: "libre",
          strict_libre: true,
          reponses_libre: ["Berlin"],
          propositions_qcm: [],
          reponse_qcm: 0,
          deja_pose: false,
        },
        {
          id: 18,
          matiere: "geographie",
          intitule: "Quelle est la capitale du Royaume-Uni ?",
          type: "libre",
          strict_libre: true,
          reponses_libre: ["Londres", "London"],
          propositions_qcm: [],
          reponse_qcm: 0,
          deja_pose: true,
        },
        {
          id: 19,
          matiere: "geographie",
          intitule: "Quel pays est limitrophe de la France ?",
          type: "qcm",
          strict_libre: false,
          reponses_libre: [],
          propositions_qcm: ["Russie", "Irlande", "Belgique", "Portugal"],
          reponse_qcm: 2,
          deja_pose: false,
        },
        {
          id: 20,
          matiere: "geographie",
          intitule: "Comment se nomme l'océan à l'Ouest de la France ?",
          type: "libre",
          strict_libre: false,
          reponses_libre: ["Atlantique"],
          propositions_qcm: [],
          reponse_qcm: 0,
          deja_pose: true,
        },
        {
          id: 21,
          matiere: "anglais",
          intitule: "What's the french for 'a cat' ?",
          type: "qcm",
          strict_libre: false,
          reponses_libre: [],
          propositions_qcm: ["Un chien", "Un oiseau", "Un lapin", "Un chat"],
          reponse_qcm: 3,
          deja_pose: true,
        },
        {
          id: 22,
          matiere: "anglais",
          intitule: "Comment dit-on 'merci' en anglais ?",
          type: "libre",
          strict_libre: false,
          reponses_libre: ["thanks", "thank you", "thanks you"],
          propositions_qcm: [],
          reponse_qcm: 0,
          deja_pose: false,
        },
        {
          id: 23,
          matiere: "anglais",
          intitule: "Comment écrit-on le mois de janvier en anglais ?",
          type: "libre",
          strict_libre: false,
          reponses_libre: ["january"],
          propositions_qcm: [],
          reponse_qcm: 0,
          deja_pose: true,
        },
        {
          id: 24,
          matiere: "anglais",
          intitule: "Dit moi comment tu t'appelles en anglais.",
          type: "libre",
          strict_libre: false,
          reponses_libre: ["I am", "I'm", "My name is", "My name's"],
          propositions_qcm: [],
          reponse_qcm: 0,
          deja_pose: false,
        },
        {
          id: 25,
          matiere: "anglais",
          intitule: "How are you ?",
          type: "qcm",
          strict_libre: false,
          reponses_libre: [],
          propositions_qcm: [
            "Thank you !",
            "I am not a kid !",
            "I'm fine !",
            "It's sunny today.",
          ],
          reponse_qcm: 2,
          deja_pose: false,
        },
      ],
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
      departement: this.state.departement,
      etablissement: this.state.etablissement,
      eleves: this.state.eleves,
      questions: this.state.questions,
    };

    register(newProfesseur).then((res) => {
      if ((res || {}).error) {
        (localStorage || {}).removeItem("usertoken");
        this.setState({ error: res.error });
      } else {
        this.setState({ redirectLogin: true });
      }
    });
  }

  render() {
    return (
      <form className="mt-8" action="#" method="POST">
        <div>
          <h2 className="mt-6 mb-5 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Creer un compte professeur
          </h2>
          {this.state.redirectLogin && <Redirect to="/c/login" />}
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
                htmlFor="departement"
              >
                Numero de departement
              </label>
              <input
                aria-label="departement"
                name="departement"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Numero de departement"
                value={this.state.departement}
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
                {this.state.error}
              </Button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default RegisterPage;
