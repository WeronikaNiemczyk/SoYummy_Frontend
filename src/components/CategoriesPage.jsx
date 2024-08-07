import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getCategoryListAPI,
  getAllRecipesByCategoryAPI,
} from "../service/Api/CategoriesApi";
import css from "../styles/CategoriesPage.module.css";

export const CategoriesPage = () => {
  const { categoryName } = useParams();
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(
    categoryName || "Beef"
  );
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategoryListAPI();
        // Sprawdź, czy dane są tablicą
        if (Array.isArray(data)) {
          setCategories(data);
          if (!categoryName) {
            setSelectedCategory("Beef");
          }
        } else {
          throw new Error("Fetched categories is not an array");
        }
      } catch (error) {
        setError("Failed to fetch categories.");
      }
    };

    fetchCategories();
  }, [categoryName]);

  useEffect(() => {
    const fetchRecipes = async () => {
      if (!selectedCategory) return;
      try {
        const data = await getAllRecipesByCategoryAPI(selectedCategory);
        // Sprawdź, czy dane są tablicą
        if (Array.isArray(data)) {
          setRecipes(data);
        } else {
          throw new Error("Fetched recipes is not an array");
        }
      } catch (error) {
        setError("Failed to fetch recipes.");
      }
    };

    fetchRecipes();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    navigate(`/categories/${category}`);
  };

  return (
    <div className={css.categoriesPage}>
      <div className={css.categoryMenu}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${css.categoryButton} ${
              category === selectedCategory ? css.active : ""
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className={css.categoryRecipesList}>
        {error && <p className={css.categoryErrorMessage}>{error}</p>}
        {recipes.map((recipe) => (
          <div key={recipe._id} className={css.categoryRecipeCard}>
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => navigate(`/recipes/${recipe._id}`)}>
              View Recipe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
