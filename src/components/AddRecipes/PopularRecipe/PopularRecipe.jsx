// src/components/AddRecipes/PopularRecipe/PopularRecipe.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPopularRecipes } from "../../../API/api";
import css from "./PopularRecipe.module.css";

const PopularRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPopularRecipes = async () => {
      try {
        const response = await getPopularRecipes();
        if (response.data.length === 0) {
          setError("No popular recipes at the moment.");
        } else {
          setRecipes(response.data);
        }
      } catch (err) {
        setError("Error fetching popular recipes.");
      }
    };

    fetchPopularRecipes();
  }, []);

  return (
    <div className={css.containerPopularRecipe}>
      <h2 className={css.titlePopularRecipe}>Popular Recipes</h2>
      {error ? (
        <p className={css.errorMessage}>{error}</p>
      ) : (
        <ul className={css.recipeList}>
          {recipes.map((recipe) => (
            <li key={recipe._id} className={css.recipeItem}>
              <Link to={`/recipe/${recipe._id}`} className={css.recipeLink}>
                {recipe.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PopularRecipe;
