import React, { Component } from "react";
import Button from "../../UI/Button";

class TitleEleves extends Component {
  render() {
    return (
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <span className="text-3xl font-bold leading-tight text-gray-900 mt-6 w-full md:flex md:items-center">
            Gestion des eleves
            <Button additionalClass="ml-5 mr-5" setW="w-1/5">
              Ajouter un eleves
            </Button>
            <Button setW="w-1/5">Supprimer les eleves selectionnes</Button>
          </span>
        </div>
      </header>
    );
  }
}

export default TitleEleves;
