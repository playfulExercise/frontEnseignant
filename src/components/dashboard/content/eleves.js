import React from "react";
import { Switch, Route } from "react-router-dom";
import ElevesAddPages from "./elevesAddPages";
import ElevesAffichage from "./elevesAffichage";

const Eleves = () => {
  return (
    <div>
      <Switch>
        <Route path="/eleves/all">
          <ElevesAffichage />
        </Route>
        <Route path="/eleves/add">
          <ElevesAddPages />
        </Route>
      </Switch>
    </div>
  );
};

export default Eleves;
