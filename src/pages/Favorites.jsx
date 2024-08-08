import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import "./Favorite.css";

const Favorite = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 4;

  useEffect(() => {
    const fetchRecipes = async () => {
      const data = [
        {
          id: 1,
          image: "image1.png",
          title: "Salmon Eggs Benedict",
          description: "Salmon eggs are rich...",
          time: "20 min",
        },
        {
          id: 2,
          image: "image2.png",
          title: "Chicken Alfredo",
          description: "Chicken Alfredo is...",
          time: "30 min",
        },
      ];
      setRecipes(data);
    };

    fetchRecipes();
  }, []);

  const handleDelete = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  return (
    <div className="favorite-page">
      <h1 className="favorite-title">Favorites</h1>
      <div className="recipe-gallery">
        {currentRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            image={recipe.image}
            title={recipe.title}
            description={recipe.description}
            time={recipe.time}
            onDelete={() => handleDelete(recipe.id)}
            onView={() => (window.location.href = `/recipe/${recipe.id}`)}
          />
        ))}
      </div>
      <div className="pagination">
        {Array.from(
          { length: Math.ceil(recipes.length / recipesPerPage) },
          (_, i) => (
            <button key={i} onClick={() => handlePageChange(i + 1)}>
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Favorite;
