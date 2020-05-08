import React, { Component } from "react";
import Button from "../../UI/Button";

export default class Monde extends Component {
  render() {
    return (
      <div className="flex content-start flex-wrap">
        <div className="w-30 p-2">
          <div className="text-center p-2">Anglais</div>
        </div>
        <div class="w-30 p-2">
          <Button>-</Button>
        </div>
        <div class="w-30 p-2">
          <Button>+</Button>
        </div>
        <div class="w-30 p-2 text-2xl">0</div>
      </div>
    );
  }
}
