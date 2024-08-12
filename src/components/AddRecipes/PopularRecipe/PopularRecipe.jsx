// src/components/AddRecipes/PopularRecipe/PopularRecipe.jsx

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getPopularRecipes } from "../../../API/api";
import css from "./PopularRecipe.module.css";

const PopularRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRecipeClick = (recipeID) => {
    console.log(recipeID);
    navigate(`/SoYummy_FrontEnd_groupNo_1/recipe/${recipeID}`);
  };

  useEffect(() => {
    const fetchPopularRecipes = async () => {
      try {
        const response = await getPopularRecipes();
        if (response.data.length === 0) {
          setError("No popular recipes at the moment.");
        } else {
          setRecipes(response.data.slice(0, 4)); // Ograniczenie do 4 przepisów
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
        <p className={css.errorMessagePopularRecipe}>{error}</p>
      ) : (
        <ul className={css.recipeListPopularRecipe}>
          {recipes.map((recipe) => (
            <li
              key={recipe._id}
              className={css.recipeItemPopularRecipe}
              onClick={() => handleRecipeClick(recipe._id)}
            >
              <Link
                to={`/recipe/${recipe._id}`}
                className={css.recipeLinkPopularRecipe}
              >
                <img
                  src={recipe.thumb}
                  alt={recipe.title}
                  className={css.recipeImagePopularRecipe}
                />
                <div className={css.recipeDetailsPopularRecipe}>
                  <h3 className={css.recipeTitlePopularRecipe}>
                    {recipe.title}
                  </h3>
                  <p className={css.recipeDescriptionPopularRecipe}>
                    {recipe.description}
                  </p>
                </div>
              </Link>
              <div className={css.separatorPopularRecipe}></div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PopularRecipe;
