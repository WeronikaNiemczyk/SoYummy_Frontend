import { useState, useEffect } from "react";
import { getFavoriteRecipes, removeFavoriteRecipe } from "../API/api";
import { useNavigate } from "react-router-dom";
import css from "../styles/Favorites.module.css";

const FavoriteRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await getFavoriteRecipes();
        setRecipes(response.data);
      } catch (error) {
        console.error("Błąd pobierania ulubionych przepisów:", error);
      }
    };

    fetchFavorites();
  }, []);

  const handleDelete = async (id) => {
    try {
      await removeFavoriteRecipe(id);
      setRecipes(recipes.filter((recipe) => recipe._id !== id));
    } catch (error) {
      console.error("Błąd usuwania przepisu:", error);
    }
  };

  return (
    <div className={css.favoriteContainer}>
      <h1 className={css.favoriteTitle}> Favorites</h1>
      <div className={css.favoriteRecipesContainer}>
        {recipes.map((recipe) => (
          <div key={recipe._id} className={css.favoriteRecipeCard}>
            <img className={css.favImg} src={recipe.thumb} alt={recipe.title} />
            <div className={css.favWrapper}>
              <div className={css.favDescContainer}>
                <h2 className={css.favRecipeTitle}>{recipe.title}</h2>
                <p className={css.favDescription}>{recipe.description}</p>
                <p className={css.favTime}>{recipe.time} min</p>
              </div>
              <div className={css.favButtons}>
                <div
                  className={css.trashButton}
                  onClick={() => handleDelete(recipe._id)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path
                      fill="currentColor"
                      d="M21.333 8v-1.067c0-1.493 0-2.24-0.291-2.811-0.256-0.502-0.664-0.91-1.165-1.165-0.57-0.291-1.317-0.291-2.811-0.291h-2.133c-1.493 0-2.24 0-2.811 0.291-0.502 0.256-0.91 0.664-1.165 1.165-0.291 0.57-0.291 1.317-0.291 2.811v1.067M13.333 15.333v6.667M18.667 15.333v6.667M4 8h24M25.333 8v14.933c0 2.24 0 3.36-0.436 4.216-0.383 0.753-0.995 1.365-1.748 1.748-0.856 0.436-1.976 0.436-4.216 0.436h-5.867c-2.24 0-3.36 0-4.216-0.436-0.753-0.383-1.365-0.995-1.748-1.748-0.436-0.856-0.436-1.976-0.436-4.216v-14.933"
                    ></path>
                  </svg>
                </div>
                <div
                  key={recipe._id}
                  className={css.seeRecipeBtn}
                  onClick={() =>
                    navigate(`/SoYummy_Frontend/recipe/${recipe._id}`)
                  }
                >
                  See recipe
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteRecipes;
