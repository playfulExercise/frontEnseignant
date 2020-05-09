import React, { Component } from "react";
import Button from "../../UI/Button";
import jwt_decode from "jwt-decode";

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
        <div className="flex content-start flex-wrap justify-left">
          <div className="w-1/6 p-2">test</div>
        </div>
        <div className="flex content-start flex-wrap justify-center">
          <div className="w-1/6 p-2">
            <div className="text-left text-2xl">Nombre de donjons</div>
          </div>
          <div className="p-2 text-2xl">{nb_donjons}</div>
        </div>
        <div className="flex content-start flex-wrap justify-center">
          <div className="w-1/6 p-2">
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
          <div className="w-1/6 p-2">
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
          <div className="w-1/6 p-2">
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
          <div className="w-1/6 p-2">
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
          <div className="w-1/6 p-2">
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
          <div className="w-1/3">
            <Button>
              <p className="text-2xl p-1">
                Enregistrement des reglages du monde
              </p>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
