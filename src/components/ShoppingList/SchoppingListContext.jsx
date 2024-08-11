// src/components/SchoppingList/ShoppingListContext.js

import React, { createContext, useState, useContext } from "react";
import {
  getShoppingList,
  addProductToShoppingList,
  removeProductFromShoppingList,
} from "../../API/api";

const ShoppingListContext = createContext();

export const ShoppingListProvider = ({ children }) => {
  const [shoppingList, setShoppingList] = useState([]);

  const fetchShoppingList = async () => {
    try {
      const response = await getShoppingList();
      setShoppingList(response.data.shoppingList);
    } catch (error) {
      console.error("Błąd pobierania listy zakupów:", error);
    }
  };

  const addToShoppingList = async (recipeId, ingredientId, measure) => {
    try {
      await addProductToShoppingList(recipeId, ingredientId, measure);
      fetchShoppingList(); // Odśwież listę po dodaniu
    } catch (error) {
      console.error("Błąd dodawania do listy zakupów:", error);
    }
  };

  const removeFromShoppingList = async (id) => {
    try {
      await removeProductFromShoppingList({ id });
      fetchShoppingList(); // Odśwież listę po usunięciu
    } catch (error) {
      console.error("Błąd usuwania z listy zakupów:", error);
    }
  };

  return (
    <ShoppingListContext.Provider
      value={{
        shoppingList,
        addToShoppingList,
        removeFromShoppingList,
        fetchShoppingList,
      }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
};

export const useShoppingList = () => {
  const context = useContext(ShoppingListContext);
  if (context === undefined) {
    throw new Error(
      "useShoppingList must be used within a ShoppingListProvider"
    );
  }
  return context;
};
