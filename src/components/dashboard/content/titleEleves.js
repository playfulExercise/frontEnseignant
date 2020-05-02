import React, { useState } from "react";
import Button from "../../UI/Button";
import { Redirect } from "react-router-dom";

function TitleEleves() {
  const [redirectSubpageEleves, setRedirectSubpageEleves] = useState(
    "/eleves/all"
  );

  return (
    <header className="bg-white shadow">
      {redirectSubpageEleves && <Redirect to={redirectSubpageEleves} />}
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <span className="text-3xl font-bold leading-tight text-gray-900 w-full md:flex md:items-center">
          Gestion des eleves
          <Button
            onClick={() => setRedirectSubpageEleves("/eleves/add")}
            additionalClass="ml-5 mr-5"
            setW="w-1/5"
          >
            Ajouter un eleves
          </Button>
          <Button
            onClick={() => setRedirectSubpageEleves("/eleves/all")}
            setW="w-1/5"
          >
            Supprimer les eleves selectionnes
          </Button>
        </span>
      </div>
    </header>
  );
}

export default TitleEleves;