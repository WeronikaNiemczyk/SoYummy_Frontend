// src/components/SearchedRecipesList.jsx

import css from "../styles/Search.module.css";
import "../styles/MainPage.css";
import { useNavigate } from "react-router-dom";

const SearchedRecipesList = ({ recipes }) => {
  const navigate = useNavigate();

  return (
    <div className={css.recipeContainer}>
      {recipes.length === 0 ? (
        <div style={{ textAlign: "center" }}>
          <img
            className={css.noSearchImg}
            src="./assets/noSearch"
            alt="No results found"
          />
          <p className={css.noSearch}>Try looking for something else...</p>
        </div>
      ) : (
        recipes.map((recipe) => (
          <div
            key={recipe._id}
            className={css.RecipeItem}
            onClick={() =>
              navigate(`/SoYummy_FrontEnd_groupNo_1/recipe/${recipe._id}`)
            }
          >
            <img src={recipe.thumb} alt={recipe.title} />
            <p>{recipe.title}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchedRecipesList;
