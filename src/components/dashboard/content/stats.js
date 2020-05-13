import React, { Component } from "react";
import "../../../../node_modules/react-vis/dist/style.css";
import { XYPlot, XAxis, YAxis, LineSeries } from "react-vis";

class App extends Component {
  render() {
    const data = [
      { x: 0, y: 8 },
      { x: 1, y: 5 },
      { x: 2, y: 4 },
      { x: 3, y: 9 },
      { x: 4, y: 1 },
      { x: 5, y: 7 },
      { x: 6, y: 6 },
      { x: 7, y: 3 },
      { x: 8, y: 2 },
      { x: 9, y: 0 },
    ];
    return (
      <div className="flex content-start flex-wrap justify-center">
        <XYPlot height={430} width={1100}>
          <XAxis title="Periode de temps (jour)" />
          <YAxis title="Nombre d'eleve ayant joue au jeu" />
          <LineSeries data={data} />
        </XYPlot>
      </div>
    );
  }
}

export default App;
