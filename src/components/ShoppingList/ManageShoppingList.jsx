import React from "react";
import IngredientsShoppingList from "./IngredientsShoppingList";
import {
  addProductToShoppingList,
  removeProductFromShoppingList,
} from "../../API/api";

const ManageShoppingList = ({ ingredients, shoppingList }) => {
  const handleAdd = async (recipeId, ingredientId, measure) => {
    try {
      await addProductToShoppingList(recipeId, ingredientId, measure);
      // Opcjonalnie zaktualizuj lokalny stan lub pobierz listę na nowo
    } catch (error) {
      console.error("Error adding product to shopping list:", error);
    }
  };

  const handleRemove = async (ingredientId) => {
    console.log("Ingredient ID to remove:", ingredientId);
    try {
      const result = await removeProductFromShoppingList(ingredientId);
      const updatedShoppingList = result.shoppingList;
      console.log("updatedShoppingList", updatedShoppingList);
      window.location.reload();
      // Opcjonalnie zaktualizuj lokalny stan lub pobierz listę na nowo
    } catch (error) {
      console.error("Error removing product from shopping list:", error);
    }
  };

  return (
    <div>
      <IngredientsShoppingList
        ingredients={ingredients}
        shoppingList={shoppingList}
        onRemove={handleRemove}
        onAdd={handleAdd} // Dodaj funkcję handleAdd jako prop
      />
    </div>
  );
};

export default ManageShoppingList;
