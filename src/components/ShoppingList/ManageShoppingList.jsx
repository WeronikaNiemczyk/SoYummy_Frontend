import React from "react";
import IngredientsShoppingList from "./IngredientsShoppingList";
import {
  addProductToShoppingList,
  removeProductFromShoppingList,
} from "../../API/api";

const ManageShoppingList = ({ ingredients }) => {
  const handleAdd = async (recipeId, ingredientId, measure) => {
    try {
      await addProductToShoppingList(recipeId, ingredientId, measure);
      // Opcjonalnie zaktualizuj lokalny stan lub pobierz listę na nowo
    } catch (error) {
      console.error("Error adding product to shopping list:", error);
    }
  };

  const handleRemove = async (id) => {
    try {
      await removeProductFromShoppingList({ id });
      // Opcjonalnie zaktualizuj lokalny stan lub pobierz listę na nowo
    } catch (error) {
      console.error("Error removing product from shopping list:", error);
    }
  };

  return (
    <div>
      <IngredientsShoppingList
        ingredients={ingredients}
        onRemove={handleRemove}
        onAdd={handleAdd} // Dodaj funkcję handleAdd jako prop
      />
    </div>
  );
};

export default ManageShoppingList;
