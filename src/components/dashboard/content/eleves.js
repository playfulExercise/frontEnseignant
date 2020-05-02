import React from "react";
import { Switch, Route } from "react-router-dom";
import ElevesAddPages from "./elevesAddPages";
const Eleves = () => {
  return (
    <div>
      <Switch>
        <Route path="/eleves/all">
          <p>eleves page generale</p>
        </Route>
        <Route path="/eleves/add">
          <ElevesAddPages />
        </Route>
      </Switch>
    </div>
  );
};

export default Eleves;
