import React, { Component } from "react";
import Button from "../../UI/Button";

export default class Monde extends Component {
  render() {
    return (
      <div>
        <div className="flex content-start flex-wrap justify-center">
          <div className="w-1/3 p-2">
            <div className="text-center text-2xl">Nombre de donjons</div>
          </div>
          <div className="1/5 p-1">
            <Button typeButton>
              <p className="text-2xl p-1">-</p>
            </Button>
          </div>
          <div className="1/5 p-1">
            <Button typeButton>
              <p className="text-2xl p-1">+</p>
            </Button>
          </div>
          <div className="1/5 p-2 text-2xl">0</div>
        </div>
        <div className="flex content-start flex-wrap justify-center">
          <div className="w-1/3 p-2">
            <div className="text-center text-2xl">Francais</div>
          </div>
          <div className="1/5 p-1">
            <Button>
              <p className="text-2xl p-1">-</p>
            </Button>
          </div>
          <div className="1/5 p-1">
            <Button>
              <p className="text-2xl p-1">+</p>
            </Button>
          </div>
          <div className="1/5 p-2 text-2xl">0</div>
        </div>
        <div className="flex content-start flex-wrap justify-center">
          <div className="w-1/3 p-2">
            <div className="text-center text-2xl">Maths</div>
          </div>
          <div className="1/5 p-1">
            <Button>
              <p className="text-2xl p-1">-</p>
            </Button>
          </div>
          <div className="1/5 p-1">
            <Button>
              <p className="text-2xl p-1">+</p>
            </Button>
          </div>
          <div className="1/5 p-2 text-2xl">0</div>
        </div>
        <div className="flex content-start flex-wrap justify-center">
          <div className="w-1/3 p-2">
            <div className="text-center text-2xl">Histoire</div>
          </div>
          <div className="1/5 p-1">
            <Button>
              <p className="text-2xl p-1">-</p>
            </Button>
          </div>
          <div className="1/5 p-1">
            <Button>
              <p className="text-2xl p-1">+</p>
            </Button>
          </div>
          <div className="1/5 p-2 text-2xl">0</div>
        </div>
        <div className="flex content-start flex-wrap justify-center">
          <div className="w-1/3 p-2">
            <div className="text-center text-2xl">Geographie</div>
          </div>
          <div className="1/5 p-1">
            <Button>
              <p className="text-2xl p-1">-</p>
            </Button>
          </div>
          <div className="1/5 p-1">
            <Button>
              <p className="text-2xl p-1">+</p>
            </Button>
          </div>
          <div className="1/5 p-2 text-2xl">0</div>
        </div>
        <div className="flex content-start flex-wrap justify-center">
          <div className="w-1/3 p-2">
            <div className="text-center text-2xl">Anglais</div>
          </div>
          <div className="1/5 p-1">
            <Button>
              <p className="text-2xl p-1">-</p>
            </Button>
          </div>
          <div className="1/5 p-1">
            <Button>
              <p className="text-2xl p-1">+</p>
            </Button>
          </div>
          <div className="1/5 p-2 text-2xl">0</div>
        </div>
      </div>
    );
  }
}
