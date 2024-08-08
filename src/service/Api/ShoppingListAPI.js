// src/service/Api/ShoppingListAPI.js

const BASE_URL = "https://deploy-marek-b05855e6af89.herokuapp.com";

// Funkcja do pobierania listy zakupów
export const fetchShoppingList = async () => {
  const response = await fetch(`${BASE_URL}/shopping-list/user`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch shopping list");
  }
  return response.json();
};

// Inne funkcje
export const addIngredientAPI = async (ingredient) => {
  const response = await fetch(`${BASE_URL}/shopping-list/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(ingredient),
  });
  if (!response.ok) {
    throw new Error("Failed to add ingredient");
  }
  return response.json();
};

export const removeIngredientAPI = async (ingredientId) => {
  const response = await fetch(`${BASE_URL}/shopping-list/remove`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ id: ingredientId }),
  });
  if (!response.ok) {
    throw new Error("Failed to remove ingredient");
  }
  return response.json();
};
