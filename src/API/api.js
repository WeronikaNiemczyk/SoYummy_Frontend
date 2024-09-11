// src/API/api.js

import axios from "axios";
import cookies from "../features/cookies";

// Globalny URL powinien być taki dla wszystkich zapytań!!
// const BASE_URL = "https://deploy-marek-b05855e6af89.herokuapp.com";

// Konfiguracja dla Użytkowników i obsługi maili
const userApi = axios.create({
  baseURL: "https://soyummy-526e125f64e8.herokuapp.com/api/v1/users",
  withCredentials: true, // Dodano opcję, aby wysyłać ciasteczka
});

// Konfiguracja dla Przepisów
export const recipesApi = axios.create({
  baseURL: "https://soyummy-526e125f64e8.herokuapp.com/recipes",
  withCredentials: true, // Dodano opcję, aby wysyłać ciasteczka
});

// Konfiguracja dla Składników
export const ingredientsApi = axios.create({
  baseURL: "https://soyummy-526e125f64e8.herokuapp.com/ingredients",
  withCredentials: true, // Dodano opcję, aby wysyłać ciasteczka
});

// // Dodanie interceptorów do recipesApi
// recipesApi.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token"); // Zakładam, że token jest przechowywany w localStorage
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });

// --------------- UŻYTKOWNICY ---------------

// Logowanie
export const loginUser = (data) => userApi.post("/login", data);

// Wylogowanie
export const logoutUser = () => userApi.get("/logout");

// Rejestracja
export const signupUser = (data) => userApi.post("/signup", data);

// Pobranie aktualnego użytkownika
export const getCurrentUser = () => userApi.get("/current");

// Aktualizacja subskrypcji
export const updateSubscription = (data) =>
  userApi.patch("/subscription", data);

// Aktualizacja awatara
export const updateAvatar = (data) => userApi.patch("/avatars", data);

// Weryfikacja emaila
export const verifyEmail = (token) => userApi.get(`/verify/${token}`);

// Ponowne wysłanie emaila weryfikacyjnego
export const resendVerificationEmail = (data) => userApi.post("/verify", data);

// Wysłanie emaila
export const sendEmail = (data) => userApi.post("/send-email", data);

// Aktualizacja nazwy użytkownika
export const updateName = (data) => userApi.patch("/update-name", data);

// Aktualizacja emaila użytkownika
export const updateMail = (data) => userApi.patch("/update-mail", data);

// Aktualizacja hasła użytkownika
export const updatePassword = (data) => userApi.patch("/update-password", data);

// Usunięcie konta użytkownika
export const removeUser = () => userApi.delete("/remove-user");

// Wysłanie newslettera
export const sendNewsletterEmail = (data) =>
  userApi.post("/send-newsletter", data);

// --------------- PRZEPISY ---------------

// Pobranie głównych przepisów według kategorii
export const getMainRecipesByCategory = () => {
  const token = cookies.readCookie();
  console.log("token1", token);
  return recipesApi.get("/main-page", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Pobranie listy kategorii przepisów
export const getCategoryList = () => {
  const token = cookies.readCookie();
  console.log("token1", token);
  return recipesApi.get("/category-list", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Wyszukiwanie przepisów
export const searchRecipes = (query) => {
  const token = cookies.readCookie();
  console.log("token1", token);
  return recipesApi.get(
    "/search",
    { params: { query } },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// Pobranie przepisów według kategorii
export const getRecipesByCategory = (category) => {
  const token = cookies.readCookie();
  console.log("token1", token);
  return recipesApi.get(`/${category}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Pobranie przepisu według ID
export const getRecipeById = (id) => {
  const token = cookies.readCookie();
  console.log("token1", token);
  return recipesApi.get(`/recipe/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Pobranie popularnych przepisów
export const getPopularRecipes = () => {
  const token = cookies.readCookie();
  console.log("token1", token);
  return recipesApi.get("/popular/recipe", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Pobranie własnych przepisów użytkownika
export const getOwnRecipes = () => {
  const token = cookies.readCookie();
  console.log("token1", token);
  return recipesApi.get("/ownRecipes/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Dodanie własnego przepisu
export const addOwnRecipe = (data) => {
  const token = cookies.readCookie();
  console.log("token1", token);
  return recipesApi.post("/ownRecipes", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Usunięcie własnego przepisu
export const deleteOwnRecipe = (id) => {
  const token = cookies.readCookie();
  console.log("token1", token);
  return recipesApi.delete(`/ownRecipes/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Dodanie przepisu do ulubionych
export const addFavoriteRecipe = (data) => {
  const token = cookies.readCookie();
  console.log("token1", token);
  return recipesApi.post("/favorites", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Pobranie ulubionych przepisów użytkownika
export const getFavoriteRecipes = () => {
  const token = cookies.readCookie();
  console.log("token1", token);
  return recipesApi.get("/favorites/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Usunięcie przepisu z ulubionych
export const removeFavoriteRecipe = (id) => {
  const token = cookies.readCookie();
  console.log("token1", token);
  return recipesApi.delete(`/favorites/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Dodanie produktu do listy zakupów
export const addProductToShoppingList = (recipeId, ingredientId, measure) => {
  const token = cookies.readCookie();
  console.log("token1", token);
  return recipesApi.post(
    "/shopping-list/add",
    {
      recipeId,
      ingredientId,
      measure,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// Usunięcie produktu z listy zakupów
// export const removeProductFromShoppingList = async (ingredientId) => {
//   const token = cookies.readCookie();
//   console.log("Token:", token);

//   try {
//     const response = await recipesApi({
//       method: "DELETE",
//       url: "/shopping-list/remove",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       data: { ingredientId },
//     });

//     return response.data;
//   } catch (error) {
//     console.error(
//       "Error removing product from shopping list:",
//       error.response ? error.response.data : error.message
//     );
//     throw error;
//   }
// };
export const removeProductFromShoppingList = (ingredientId) => {
  const token = cookies.readCookie();
  console.log("token1", token);
  return recipesApi.delete("/shopping-list/remove", {
    headers: {
      Authorization: `Bearer ${token}`,
    },

    data: { ingredientId },
  });
};

// Pobranie listy zakupów użytkownika
export const getShoppingList = () => {
  const token = cookies.readCookie();
  console.log("token1", token);
  return recipesApi.get("/shopping-list/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Aktualizacja produktu w liście zakupów
export const updateProductInShoppingList = (data) => {
  const token = cookies.readCookie();
  console.log("token1", token);
  return recipesApi.patch("/shopping-list/update", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}; // Dodany nowy endpoint

// --------------- SKŁADNIKI ---------------

// Pobranie listy składników
export const getIngredientsList = () => {
  const token = cookies.readCookie();
  console.log("token1", token);
  return ingredientsApi.get("/list", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Pobranie przepisów według składników
export const getRecipeByIngredients = (ingredients) => {
  const token = cookies.readCookie();
  console.log("token1", token);
  return ingredientsApi.get(
    "/",
    { params: { ingredients } },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
