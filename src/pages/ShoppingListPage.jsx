import React, { useEffect, useState } from "react";
import axios from "axios";
import ManageShoppingList from "../components/ShoppingList/ManageShoppingList";
import { getShoppingList, getIngredientsList } from "../API/api";

const ShoppingListPage = () => {
  const [ingredients, setIngredients] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await getIngredientsList();
        setIngredients(response.data.ingredients); // Przypisz listę składników
        console.log("ingr", response.data.ingredients);
      } catch (error) {
        console.error("Błąd pobierania składników:", error);
      }
    };

    fetchIngredients();
  }, []);
  useEffect(() => {
    const fetchShoppingList = async () => {
      try {
        const response = await getShoppingList(); // Użyj funkcji z API
        console.log("Response data:", response.data.shoppingList); // Debugowanie odpowiedzi
        setShoppingList(response.data.shoppingList);
        // Przypisz odpowiedź do stanu
      } catch (error) {
        console.error(
          "Błąd pobierania:",
          error.response ? error.response.data : error.message
        );
      }
    };
    fetchShoppingList();
  }, []);

  return (
    <div>
      <ManageShoppingList
        ingredients={ingredients}
        shoppingList={shoppingList}
      />
    </div>
  );
};

export default ShoppingListPage;
