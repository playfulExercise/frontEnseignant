import axios from "axios";

export const register = (newProf) => {
  return axios
    .post("/professeurs/register", {
      prenom_prof: newProf.prenom_prof,
      nom_prof: newProf.nom_prof,
      email_prof: newProf.email_prof,
      password: newProf.password,
      id: newProf.id,
      departement: newProf.departement,
      etablissement: newProf.etablissement,
      eleves: newProf.eleves,
      questions: newProf.questions,
    })
    .then((res) => {
      console.log("Registered");
    });
};

export const login = (professeur) => {
  return axios
    .post("/professeurs/login", {
      email_prof: professeur.email_prof,
      password: professeur.password,
    })
    .then((response) => {
      localStorage.setItem("usertoken", response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getProfile = (user) => {
  return axios
    .get("/professeurs/profile", {
      //headers: { Authorization: ` ${this.getToken()}` }
    })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getEleves = (user) => {
  return axios
    .post("/professeurs/eleves/all", {
      _id: user._id,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getMonde = (user) => {
  return axios
    .post("/professeurs/monde", {
      _id: user._id,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const setMonde = (user) => {
  return axios
    .post("professeurs/monde/set", {
      _id: user._id,
      configuration_monde: user.configuration_monde,
    })
    .then((res) => {
      console.log("Monde mis a jour");
    });
};

export const addEleves = (newEleves) => {
  return axios
    .post("/professeurs/elevesList", {
      _id: newEleves.id_prof,

      nom_eleve: newEleves.nom_eleve,
      prenom_eleve: newEleves.prenom_eleve,
      code_eleve: newEleves.code_eleve,
      infos: newEleves.infos,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const delEleves = (user) => {
  console.log(user);
  return axios
    .post("/professeurs/eleves/delete", {
      _id: user._id,
      listElevesDelete: user.listElevesDelete,
    })
    .then((response) => {
      console.log("Eleve(s) deleted");
    });
};

export const setInfosEleves = (user) => {
  return axios
    .post("professeurs/monde/setInfos", {
      _id: user._id,
      infos: user.infos,
    })
    .then((res) => {
      console.log("Infos des eleves set ok");
    });
};

export const getEleveSpecifique = (user) => {
  return axios
    .post("/professeurs/eleveSpecifique", {
      _id: user._id,
      eleves_id: user.eleves_id,
    })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

/*
export const getCreation = (user) => {
  return axios
    .post("users/creations", {
      emailArtisan: user.emailArtisan,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateCreation = (user) => {
  return axios
    .post("/users/creationsUpdate", {
      _id: user._id,
      creationId: user.creationId,

      nomProduit: user.nomProduit,
      descriptionProduit: user.descriptionProduit,
      gainEnvironnement: user.gainEnvironnement,
      categorieProduit: user.categorieProduit,
      styleProduit: user.styleProduit,
      materiauProduit: user.materiauProduit,
      couleurProduit: user.couleurProduit,
      anneeConceptionProduit: user.anneeConceptionProduit,
      hauteurProduit: user.hauteurProduit,
      poidsProduit: user.poidsProduit,
      largeurProduit: user.largeurProduit,
      longueurProduit: user.longueurProduit,
      prixTTCProduit: user.prixTTCProduit,
      prixLivraisonProduit: user.prixLivraisonProduit,
      retraitAtelierProduit: user.retraitAtelierProduit,
      lieuFabricationProduit: user.lieuFabricationProduit,
      stock: user.stock,
    })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const delCreation = (user) => {
  return axios
    .post("users/creationDelete", {
      _id: user._id,
      userId: user.userId,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addSuggestion = (newSuggestion) => {
  return axios
    .post("suggestions/add", {
      emailArtisan: newSuggestion.emailArtisan,
      nom_boutique_propose: newSuggestion.nom_boutique_propose,
    })
    .then((response) => {
      console.log(response);
    });
};

export const addMarketplace = (newMarketplace) => {
  return axios
    .post("marketplaces/add", {
      userId: newMarketplace.userId,
      emailArtisan: newMarketplace.emailArtisan,
      nomBoutique: newMarketplace.nomBoutique,
      cleApi: newMarketplace.cleApi,
      cleSecondaire: newMarketplace.cleSecondaire,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getMarketplace = (user) => {
  return axios
    .post("marketplaces/get", {
      _id: user._id,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getMarketplaceSpecifique = (user) => {
  return axios
    .post("marketplaces/specifique", {
      _id: user.marketplaceId,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateMarketplace = (newMarketplace) => {
  return axios
    .post("marketplaces/update", {
      listeCreationsIncluses: newMarketplace.listeCreationsIncluses,
      marketplaceId: newMarketplace.marketplaceId,
    })
    .then((response) => {
      console.log("Marketplace updated");
    });
};

export const delMarketplace = (user) => {
  return axios
    .post("marketplaces/marketplaceDelete", {
      _id: user._id,
      userId: user.userId,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};*/
