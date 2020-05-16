import React, { Component } from "react";
import Button from "../../UI/Button";
import jwt_decode from "jwt-decode";
import { getMonde, setMonde, setInfosEleves } from "../../networkLink";

export default class Monde extends Component {
  constructor() {
    super();
    this.state = {
      nb_donjons: 0,
      francais: 0,
      maths: 0,
      histoire: 0,
      geographie: 0,
      anglais: 0,
      res_infos: {}, //facultatif
      configuration_monde: {},
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
      _id: "",
      notifUpdate: false,
      errors: {},
    };
    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      _id: decoded._id,
    });
    const professeur = {
      _id: (decoded || [])._id,
    };
    getMonde(professeur).then((res) =>
      this.setState({ configuration_monde: res })
    );
  }

  onTest(stateInc, v) {
    const correctState = stateInc + v;

    if (correctState < 0) {
      return 0;
    }
    if (correctState > 5) {
      return 5;
    }
    return correctState;
  }

  onClick(n, v) {
    if (n === "nb_donjons") {
      this.setState({
        nb_donjons: v,
        reste_ajout: 0,
        francais: 0,
        maths: 0,
        histoire: 0,
        geographie: 0,
        anglais: 0,
      });
    }
    if (n === "francais") {
      const stateInc = this.state.francais;

      this.setState({
        francais: this.onTest(stateInc, v),
      });
    }
    if (n === "maths") {
      const stateInc = this.state.maths;
      this.setState({
        maths: this.onTest(stateInc, v),
      });
    }
    if (n === "histoire") {
      const stateInc = this.state.histoire;
      this.setState({
        histoire: this.onTest(stateInc, v),
      });
    }
    if (n === "geographie") {
      const stateInc = this.state.geographie;
      this.setState({
        geographie: this.onTest(stateInc, v),
      });
    }
    if (n === "anglais") {
      const stateInc = this.state.anglais;
      this.setState({
        anglais: this.onTest(stateInc, v),
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const date_actuelle = new Date();

    const newConfigurationMonde = {
      nb_donjons: this.state.nb_donjons,
      francais: this.state.francais,
      maths: this.state.maths,
      histoire: this.state.histoire,
      geographie: this.state.geographie,
      anglais: this.state.anglais,
      date_creation_monde: date_actuelle.toISOString(),
    };
    this.state.infos.matieres.map((x) => {
      if (x.nom_matiere === "francais") {
        x.nb_donjons_finis = 0;
        x.nb_donjons = newConfigurationMonde.francais;
      }
      if (x.nom_matiere === "maths") {
        x.nb_donjons_finis = 0;
        x.nb_donjons = newConfigurationMonde.maths;
      }
      if (x.nom_matiere === "histoire") {
        x.nb_donjons_finis = 0;
        x.nb_donjons = newConfigurationMonde.histoire;
      }
      if (x.nom_matiere === "geographie") {
        x.nb_donjons_finis = 0;
        x.nb_donjons = newConfigurationMonde.geographie;
      }
      if (x.nom_matiere === "anglais") {
        x.nb_donjons_finis = 0;
        x.nb_donjons = newConfigurationMonde.anglais;
      }
      return x;
    });
    const user = {
      _id: this.state._id,
      configuration_monde: newConfigurationMonde,
      infos: this.state.infos,
    };

    setMonde(user).then((res) => {
      this.setState({
        configuration_monde: newConfigurationMonde,
        nb_donjons: 0,
        francais: 0,
        maths: 0,
        histoire: 0,
        geographie: 0,
        anglais: 0,
        notifUpdate: true,
      });
    });
    setInfosEleves(user).then((res) => {
      this.setState({
        res_infos: res,
      });
    });
  }

  render() {
    const {
      nb_donjons,
      francais,
      maths,
      histoire,
      geographie,
      anglais,
      notifUpdate,
    } = this.state;

    const total_ajout_donjons =
      francais + maths + histoire + geographie + anglais;

    const reste_ajout = nb_donjons - total_ajout_donjons;
    return (
      <div>
        <div className="w-1/2 float-left">
          <div className="flex content-start flex-wrap justify-center">
            <div className="w-1/2 p-1">
              <div className="text-left text-2xl">
                <p className="text-center font-bold">Monde actuel</p>
              </div>
            </div>
          </div>
          <div className="flex content-start flex-wrap justify-center">
            <div className="w-1/2 p-2">
              <div className="text-left text-2xl">Nombre de donjons</div>
            </div>
            <div className="p-1">
              <p className="text-2xl p-1">
                {this.state.configuration_monde.nb_donjons}
              </p>
            </div>
          </div>
          <div className="flex content-start flex-wrap justify-center">
            <div className="w-1/2 p-2">
              <div className="text-left text-2xl">Francais</div>
            </div>
            <div className="p-1">
              <p className="text-2xl p-1">
                {this.state.configuration_monde.francais}
              </p>
            </div>
          </div>
          <div className="flex content-start flex-wrap justify-center">
            <div className="w-1/2 p-2">
              <div className="text-left text-2xl">Maths</div>
            </div>
            <div className="p-1">
              <p className="text-2xl p-1">
                {this.state.configuration_monde.maths}
              </p>
            </div>
          </div>
          <div className="flex content-start flex-wrap justify-center">
            <div className="w-1/2 p-2">
              <div className="text-left text-2xl">Histoire</div>
            </div>
            <div className="p-1">
              <p className="text-2xl p-1">
                {this.state.configuration_monde.histoire}
              </p>
            </div>
          </div>
          <div className="flex content-start flex-wrap justify-center">
            <div className="w-1/2 p-2">
              <div className="text-left text-2xl">Geographie</div>
            </div>
            <div className="p-1">
              <p className="text-2xl p-1">
                {this.state.configuration_monde.geographie}
              </p>
            </div>
          </div>
          <div className="flex content-start flex-wrap justify-center">
            <div className="w-1/2 p-2">
              <div className="text-left text-2xl">Anglais</div>
            </div>
            <div className="p-1">
              <p className="text-2xl p-1">
                {this.state.configuration_monde.anglais}
              </p>
            </div>
          </div>
          <div className="flex content-start flex-wrap justify-center">
            <div className="w-1/2 p-2">
              Date de derniere modification (dernier reset) :
            </div>
            <div className="p-2">
              {
                (
                  this.state.configuration_monde.date_creation_monde || ""
                ).split("T")[0]
              }
            </div>
          </div>
        </div>
        <div className="w-1/2 float-right">
          <div className="flex content-start flex-wrap justify-center">
            <div className="w-1/2 p-1">
              <div className="text-center text-2xl">
                <b className="text-center">Nouveau monde</b>
              </div>
              {notifUpdate && (
                <p className="text-center text-2xl text-teal-700 font-bold">
                  Le monde a ete mis a jour avec succes !
                </p>
              )}
              <div className="text-center">
                {(reste_ajout > 0 || nb_donjons === 0) && (
                  <b className="text-center ">
                    {"Il faut encore ajouter "}
                    <span className="text-red-600 text-2xl">
                      {nb_donjons === 0 ? "plusieurs " : reste_ajout + " "}
                    </span>
                    donjons pour pouvoir mettre a jour le monde
                  </b>
                )}
              </div>
            </div>
          </div>
          <div className="flex content-start flex-wrap justify-center">
            <div className="w-1/2 p-2">
              <div className="text-left text-2xl">Nombre de donjons</div>
            </div>
            <div className="p-1">
              <Button onClick={() => this.onClick("nb_donjons", 3)}>
                <p className="text-2xl p-1">3</p>
              </Button>
            </div>
            <div className="p-1">
              <Button onClick={() => this.onClick("nb_donjons", 5)}>
                <p className="text-2xl p-1">5</p>
              </Button>
            </div>
            <div className="p-1">
              <Button onClick={() => this.onClick("nb_donjons", 10)}>
                <p className="text-2xl p-1">10</p>
              </Button>
            </div>
          </div>
          {reste_ajout > 0 && (
            <div>
              <div className="flex content-start flex-wrap justify-center">
                <div className="w-1/2 p-2">
                  <div className="text-left text-2xl">Francais</div>
                </div>
                <div className="p-1">
                  <Button onClick={() => this.onClick("francais", -1)}>
                    <p className="text-2xl p-1">-</p>
                  </Button>
                </div>
                <div className="p-1">
                  <Button onClick={() => this.onClick("francais", 1)}>
                    <p className="text-2xl p-1">+</p>
                  </Button>
                </div>
                <div className="p-2 text-2xl">{francais}</div>
              </div>
              <div className="flex content-start flex-wrap justify-center">
                <div className="w-1/2 p-2">
                  <div className="text-left text-2xl">Maths</div>
                </div>
                <div className="p-1">
                  <Button onClick={() => this.onClick("maths", -1)}>
                    <p className="text-2xl p-1">-</p>
                  </Button>
                </div>
                <div className="p-1">
                  <Button onClick={() => this.onClick("maths", 1)}>
                    <p className="text-2xl p-1">+</p>
                  </Button>
                </div>
                <div className="p-2 text-2xl">{maths}</div>
              </div>
              <div className="flex content-start flex-wrap justify-center">
                <div className="w-1/2 p-2">
                  <div className="text-left text-2xl">Histoire</div>
                </div>
                <div className="p-1">
                  <Button onClick={() => this.onClick("histoire", -1)}>
                    <p className="text-2xl p-1">-</p>
                  </Button>
                </div>
                <div className="p-1">
                  <Button onClick={() => this.onClick("histoire", 1)}>
                    <p className="text-2xl p-1">+</p>
                  </Button>
                </div>
                <div className="p-2 text-2xl">{histoire}</div>
              </div>
              <div className="flex content-start flex-wrap justify-center">
                <div className="w-1/2 p-2">
                  <div className="text-left text-2xl">Geographie</div>
                </div>
                <div className="p-1">
                  <Button onClick={() => this.onClick("geographie", -1)}>
                    <p className="text-2xl p-1">-</p>
                  </Button>
                </div>
                <div className="p-1">
                  <Button onClick={() => this.onClick("geographie", 1)}>
                    <p className="text-2xl p-1">+</p>
                  </Button>
                </div>
                <div className="p-2 text-2xl">{geographie}</div>
              </div>
              <div className="flex content-start flex-wrap justify-center">
                <div className="w-1/2 p-2">
                  <div className="text-left text-2xl">Anglais</div>
                </div>
                <div className="p-1">
                  <Button onClick={() => this.onClick("anglais", -1)}>
                    <p className="text-2xl p-1">-</p>
                  </Button>
                </div>
                <div className="p-1">
                  <Button onClick={() => this.onClick("anglais", 1)}>
                    <p className="text-2xl p-1">+</p>
                  </Button>
                </div>
                <div className="p-2 text-2xl">{anglais}</div>
              </div>
            </div>
          )}
          <div className="flex content-start flex-wrap justify-center mt-5">
            <div className="w-1/2">
              <Button
                typeButton={!(reste_ajout === 0 && total_ajout_donjons >= 3)}
                onClick={
                  reste_ajout === 0 && total_ajout_donjons >= 3
                    ? this.onSubmit
                    : () => null
                }
              >
                <p className="text-2xl p-1">
                  {reste_ajout === 0 && total_ajout_donjons >= 3
                    ? "Vous pouvez enregistrer la modification du monde"
                    : "Enregistrement des reglages du monde"}
                </p>
              </Button>
              <p className="text-center text-red-700 font-bold">
                La modification d'un monde entraine la suppression du precedent
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
