import { useEffect, useState } from "react";
// import { Footer } from "../components/Footer/Footer";
// import { Header } from "../components/Header/Header";
import "../styles/favorites.css";

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
        {
          id: 3,
          image: "image3.png",
          title: "Sugar Pie",
          description: "Sugar pie is a dessert...",
          time: "1 hour",
        },
        {
          id: 4,
          image: "image4.png",
          title: "Beef Wellington",
          description: "Beef Wellington is...",
          time: "2 hours",
        },
      ];
      setRecipes(data);
    };

    fetchRecipes();
  }, []);

  const handleDelete = (id) => {
    // Tutaj usuń przepis z backendu
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  return (
    <div className="favorite-container">
      {/* <Header /> */}
      <h1 className="favorite-title">Favorites</h1>
      <div className="recipe-list">
        {currentRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="recipe-image"
            />
            <h2 className="recipe-title">{recipe.title}</h2>
            <p className="recipe-description">{recipe.description}</p>
            <p className="recipe-time">{recipe.time}</p>
            <button
              className="see-recipe-btn"
              onClick={() => (window.location.href = `/recipe/${recipe.id}`)}
            >
              See recipe
            </button>
            <button
              className="delete-recipe-btn"
              onClick={() => handleDelete(recipe.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from(
          { length: Math.min(10, Math.ceil(recipes.length / recipesPerPage)) },
          (_, i) => (
            <button key={i} onClick={() => handlePageChange(i + 1)}>
              {i + 1}
            </button>
          )
        )}
      </div>
      {/* <Footer mode="light" /> */}
    </div>
  );
};

export default Favorite;
