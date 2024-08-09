// src/API/api.js

import axios from "axios";

// Globalny URL powinien być taki dla wszystkich zapytań!!
// const BASE_URL = "https://deploy-marek-b05855e6af89.herokuapp.com";

// Konfiguracja dla Użytkowników i obsługi maili
const userApi = axios.create({
  baseURL: "https://deploy-marek-b05855e6af89.herokuapp.com/api/v1/users",
  withCredentials: true, // Dodano opcję, aby wysyłać ciasteczka
});

// Konfiguracja dla Przepisów
export const recipesApi = axios.create({
  baseURL: "https://deploy-marek-b05855e6af89.herokuapp.com/recipes",
  withCredentials: true, // Dodano opcję, aby wysyłać ciasteczka
});

// Konfiguracja dla Składników
export const ingredientsApi = axios.create({
  baseURL: "https://deploy-marek-b05855e6af89.herokuapp.com/ingredients",
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
export const getMainRecipesByCategory = () => recipesApi.get("/main-page");

// Pobranie listy kategorii przepisów
export const getCategoryList = () => recipesApi.get("/category-list");

// Wyszukiwanie przepisów
export const searchRecipes = (query) =>
  recipesApi.get("/search", { params: { query } });

// Pobranie przepisów według kategorii
export const getRecipesByCategory = (category) =>
  recipesApi.get(`/${category}`);

// Pobranie przepisu według ID
export const getRecipeById = (id) => recipesApi.get(`/recipe/${id}`);

// Pobranie popularnych przepisów
export const getPopularRecipes = () => recipesApi.get("/popular/recipe");

// Pobranie własnych przepisów użytkownika
export const getOwnRecipes = () => recipesApi.get("/ownRecipes/user");

// Dodanie własnego przepisu
export const addOwnRecipe = (data) => recipesApi.post("/ownRecipes", data);

// Usunięcie własnego przepisu
export const deleteOwnRecipe = (id) => recipesApi.delete(`/ownRecipes/${id}`);

// Dodanie przepisu do ulubionych
export const addFavoriteRecipe = (data) => recipesApi.post("/favorites", data);

// Pobranie ulubionych przepisów użytkownika
export const getFavoriteRecipes = () => recipesApi.get("/favorites/user");

// Usunięcie przepisu z ulubionych
export const removeFavoriteRecipe = (id) =>
  recipesApi.delete(`/favorites/${id}`);

// Dodanie produktu do listy zakupów
export const addProductToShoppingList = (data) =>
  recipesApi.post("/shopping-list/add", data);

// Usunięcie produktu z listy zakupów
export const removeProductFromShoppingList = (data) =>
  recipesApi.delete("/shopping-list/remove", { data });

// Pobranie listy zakupów użytkownika
export const getShoppingList = () => recipesApi.get("/shopping-list/user");

// Aktualizacja produktu w liście zakupów
export const updateProductInShoppingList = (data) =>
  recipesApi.patch("/shopping-list/update", data); // Dodany nowy endpoint

// --------------- SKŁADNIKI ---------------

// Pobranie listy składników
export const getIngredientsList = () => ingredientsApi.get("/list");

// Pobranie przepisów według składników
export const getRecipeByIngredients = (ingredients) =>
  ingredientsApi.get("/", { params: { ingredients } });
