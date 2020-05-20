import React from "react";
import { Switch, Route } from "react-router-dom";
import ElevesAddPages from "./elevesAddPages";
import ElevesAffichageAndDelete from "./elevesAffichageAndDelete";
import ElevesProfile from "./elevesProfile";

const Eleves = () => {
  return (
    <div>
      <Switch>
        <Route path="/eleves/all">
          <ElevesAffichageAndDelete />
        </Route>
        <Route path="/eleves/add">
          <ElevesAddPages />
        </Route>
        <Route path="/eleves/:id">
          <ElevesProfile />
        </Route>
      </Switch>
    </div>
  );
};

export default Eleves;
