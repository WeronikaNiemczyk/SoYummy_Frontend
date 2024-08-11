import React, { useEffect, useState } from "react";
import axios from "axios";
import ManageShoppingList from "../components/ShoppingList/ManageShoppingList";
import { getShoppingList } from "../API/api";

const ShoppingListPage = () => {
  const [ingredients, setIngredients] = useState([]);

  const fetchIngredients = async () => {
    try {
      const response = await getShoppingList(); // Użyj funkcji z API
      console.log("Response data:", response.data); // Debugowanie odpowiedzi
      setIngredients(response.data.shoppingList); // Przypisz odpowiedź do stanu
    } catch (error) {
      console.error(
        "Błąd pobierania:",
        error.response ? error.response.data : error.message
      );
    }
  };

  useEffect(() => {
    fetchIngredients();
  }, []);

  return (
    <div>
      <ManageShoppingList ingredients={ingredients} />
    </div>
  );
};

export default ShoppingListPage;
