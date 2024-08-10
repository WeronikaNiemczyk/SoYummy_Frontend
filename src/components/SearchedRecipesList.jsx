// src/components/SearchedRecipesList.jsx

import css from "../styles/Search.module.css";

const SearchedRecipesList = ({ recipes }) => {
  return (
    <div >
      {recipes.length === 0 ? (
        <div style={{ textAlign: "center" }}>
          <img
            className={css.noSearchImg}
            src="./assets/noSearch" // Zamień na właściwą ścieżkę do obrazka
            alt="No results found"
          />
          <p className={css.noSearch}>Try looking for something else...</p>
        </div>
      ) : (
        recipes.map((recipe) => (
          <div className={css.recipeContainer
          } key={recipe._id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchedRecipesList;
