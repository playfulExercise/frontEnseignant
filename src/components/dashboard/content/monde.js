import React, { Component } from "react";
import Button from "../../UI/Button";
import jwt_decode from "jwt-decode";
import { getMonde } from "../../networkLink";

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
      configuration_monde: {},
      _id: "",
      errors: {},
    };
    this.onClick = this.onClick.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
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
    this.setState({
      nb_donjons:
        this.state.francais +
        this.state.maths +
        this.state.histoire +
        this.state.geographie +
        this.state.anglais,
    });
    return correctState;
  }

  onClick(n, v) {
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

  render() {
    const {
      nb_donjons,
      francais,
      maths,
      histoire,
      geographie,
      anglais,
    } = this.state;

    return (
      <div>
        {console.log(this.state.configuration_monde)}
        <div className="w-1/2 float-left">
          <div className="flex content-start flex-wrap justify-center">
            <div className="w-1/2 p-2">
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
              {this.state.configuration_monde.date_creation_monde}
            </div>
          </div>
        </div>
        <div className="w-1/2 float-right">
          <div className="flex content-start flex-wrap justify-center">
            <div className="w-1/2 p-2">
              <div className="text-center text-2xl">
                <b className="text-center">Nouveau monde</b>
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
          <div className="flex content-start flex-wrap justify-center mt-5">
            <div className="w-1/2">
              <Button typeButton>
                <p className="text-2xl p-1">
                  Enregistrement des reglages du monde
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
