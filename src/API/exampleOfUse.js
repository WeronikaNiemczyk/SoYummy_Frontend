// src/API/exampleOfUse.js

import { getIngredientsList, getMainRecipesByCategory, loginUser } from "./api";

// Przykład użycia - logowanie
loginUser({ email: "user@example.com", password: "password123" })
  .then((response) => {
    console.log("Zalogowano:", response.data);
  })
  .catch((error) => {
    console.error("Błąd logowania:", error);
  });

// Przykład użycia - pobranie głównych przepisów
getMainRecipesByCategory()
  .then((response) => {
    console.log("Przepisy:", response.data);
  })
  .catch((error) => {
    console.error("Błąd pobierania przepisów:", error);
  });

// Przykład użycia - pobranie listy składników
getIngredientsList()
  .then((response) => {
    console.log("Składniki:", response.data);
  })
  .catch((error) => {
    console.error("Błąd pobierania składników:", error);
  });
