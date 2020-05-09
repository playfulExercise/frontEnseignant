import React, { useState } from "react";
import Button from "../../UI/Button";
import { Redirect } from "react-router-dom";

function TitleEleves() {
  const [redirectSubpageEleves, setRedirectSubpageEleves] = useState(
    "/eleves/all"
  );

  return (
    <header className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 bg-white shadow flex content-start flex-wrap">
      {redirectSubpageEleves && <Redirect to={redirectSubpageEleves} />}
      <h1 className="text-3xl font-bold leading-tight text-gray-900 p-2">
        Gestion des eleves
      </h1>
      <div className="w-30 p-2">
        <Button onClick={() => setRedirectSubpageEleves("/eleves/all")}>
          Liste des eleves
        </Button>
      </div>
      <div className="w-30 p-2">
        <Button onClick={() => setRedirectSubpageEleves("/eleves/add")}>
          Ajouter un eleve
        </Button>
      </div>
    </header>
  );
}

export default TitleEleves;
