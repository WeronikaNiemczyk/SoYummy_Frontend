// src/components/MyRecipesList/MyRecipesList.jsx

import axios from "axios";
import { useEffect, useState } from "react";
import MyRecipesItem from "../MyRecepiesItem/MyRecepiesItem";

const MyRecipesList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Pobierz przepisy po załadowaniu komponentu
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("/recipes/ownRecipes/user");
        setRecipes(response.data);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/recipes/ownRecipes/${id}`);
      setRecipes(recipes.filter((recipe) => recipe.id !== id));
    } catch (error) {
      console.error("Failed to delete recipe:", error);
    }
  };

  return (
    <div>
      <h2>My Recipes</h2>
      <div className="recipes-list">
        {recipes.map((recipe) => (
          <MyRecipesItem
            key={recipe.id}
            recipe={recipe}
            onDelete={() => handleDelete(recipe.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default MyRecipesList;
