//src/components/CategoriesPage.jsx

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCategoryList, getRecipesByCategory } from "../API/api.js";
import css from "../styles/CategoriesPage.module.css";

const CategoriesPage = () => {
  const { category } = useParams();
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Beef");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        console.log("Fetching categories...");
        const response = await getCategoryList();
        const data = response.data.categories;
        console.log("Fetched categories:", data);
        setCategories(data);

        if (!category || !data.some((cat) => cat.title === category)) {
          setSelectedCategory("Beef");
        } else {
          setSelectedCategory(category);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError("Failed to fetch categories.");
      }
    };

    fetchCategories();
  }, [category]);
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        console.log(`Fetching recipes for category: ${selectedCategory}`);
        const response = await getRecipesByCategory(selectedCategory);
        const data = response.data || [];
        console.log("Fetched recipes:", data);
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setError("Failed to fetch recipes.");
      }
    };

    if (selectedCategory) {
      fetchRecipes();
    }
  }, [selectedCategory]);

  const handleCategoryChange = (title) => {
    setSelectedCategory(title);
    navigate(`/SoYummy_FrontEnd_groupNo_1/categories/${title}`);
  };

  return (
    <div className={css.categoriesPage}>
      <div className={css.categoryMenu}>
        {categories.length > 0 ? (
          categories.map((cat, index) => (
            <button
              key={index}
              className={`${css.categoryButton} ${
                cat === selectedCategory ? css.active : ""
              }`}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </button>
          ))
        ) : (
          <p>No categories available.</p>
        )}
      </div>
      <div className={css.categoriesRecipeList}>
        {error && <p className={css.categoriesErrorMessage}>{error}</p>}
        {recipes.length > 0 ? (
          <ul className={css.categoriesRecipeItems}>
            {recipes.map((recipe) => (
              <li
                key={recipe._id}
                className={css.categoriesRecipeItem}
                onClick={() =>
                  navigate(`../recipe/${recipe._id}`)
                }
              >
                <img
                  src={recipe.thumb}
                  alt={recipe.title}
                  className={css.categoriesRecipeImage}
                />
                <p className={css.categoriesRecipeTitle}>{recipe.title}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No recipes available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;
