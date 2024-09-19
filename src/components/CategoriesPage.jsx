// //src/components/CategoriesPage.jsx

// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { getCategoryList, getRecipesByCategory } from "../API/api.js";
// import css from "../styles/Search.module.css";
// import style from "../styles/CategoriesPage.module.css";

// const CategoriesPage = () => {
//   const { category } = useParams();
//   const [categories, setCategories] = useState([]);
//   const [recipes, setRecipes] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("Beef");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         console.log("Fetching categories...");
//         const response = await getCategoryList();
//         const data = response.data.categories;
//         console.log("Fetched categories:", data);
//         setCategories(data);

//         if (!category || !data.some((cat) => cat.title === category)) {
//           navigate(`/SoYummy_Frontend/categories/Beef`, { replace: true });
//           // setSelectedCategory("Beef");
//         } else {
//           setSelectedCategory(category);
//         }
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//         setError("Failed to fetch categories.");
//       }
//     };

//     fetchCategories();
//   }, [category, navigate]);

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         if (selectedCategory) {
//           console.log(`Fetching recipes for category: ${selectedCategory}`);
//           const response = await getRecipesByCategory(selectedCategory);
//           const data = response.data || [];
//           console.log("Fetched recipes:", data);
//           setRecipes(data);
//         }
//       } catch (error) {
//         console.error("Error fetching recipes:", error);
//         setError("Failed to fetch recipes.");
//       }
//     };

//     if (selectedCategory) {
//       fetchRecipes();
//     }
//   }, [selectedCategory]);

//   const handleCategoryChange = (newCategory) => {
//     if (newCategory !== selectedCategory) {
//       navigate(`/SoYummy_Frontend/categories/${newCategory}`); // Zmiana URL
//       setSelectedCategory(newCategory); // Ustawienie nowej kategorii
//     }
//   };
//src/components/CategoriesPage.jsx

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCategoryList, getRecipesByCategory } from "../API/api.js";
import css from "../styles/Search.module.css";
import style from "../styles/CategoriesPage.module.css";

const CategoriesPage = () => {
  const { category } = useParams();
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState("Beef");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const defaultCategory = "Beef";

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        console.log("Fetching categories...");
        const response = await getCategoryList();
        const data = response.data.categories;
        console.log("Fetched categories:", data);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError("Failed to fetch categories.");
      }
    };
    console.log("Category passed to API:", category);

    fetchCategories();
  }, []);

  useEffect(() => {
    if (!category) {
      navigate(`/SoYummy_Frontend/categories/${defaultCategory}`, {
        replace: true,
      });
    }
  }, [category, navigate, defaultCategory]);

  useEffect(() => {
    const fetchRecipes = async () => {
      if (category) {
        setLoading(true);
        try {
          console.log(`Fetching recipes for category: ${category}`);
          const response = await getRecipesByCategory(category);
          const data = response.data || [];
          console.log("Fetched recipes:", data);
          setRecipes(data);
        } catch (error) {
          console.error("Error fetching recipes:", error);
          setError("Failed to fetch recipes.");
        } finally {
          setLoading(false); // Ustawienie stanu ładowania na false
        }
      }
    };

    fetchRecipes();
  }, [category]);

  // const handleCategoryChange = (title) => {
  //   setSelectedCategory(title);
  //   navigate(`/SoYummy_Frontend/categories/${title}`);
  // };
  const handleCategoryChange = (newCategory) => {
    navigate(`/SoYummy_Frontend/categories/${newCategory}`); // Zmiana URL
    // setSelectedCategory(newCategory); // Ustawienie nowej kategorii
  };

  return (
    <div>
      <div>
        {categories.length > 0 ? (
          categories.map((cat, index) => (
            <button
              key={index}
              className={`${style.categoryButton} ${
                cat === category ? css.active : ""
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
      <div>
        {error && <p className={style.categoriesErrorMessage}>{error}</p>}

        {recipes.length === 0 ? (
          <div>
            <p>No recipes available for this category.</p>
          </div>
        ) : (
          <div className={css.recipeContainer}>
            {recipes.map((recipe) => (
              <div
                key={recipe._id}
                className={css.RecipeItem}
                onClick={() =>
                  navigate(`/SoYummy_Frontend/recipe/${recipe._id}`)
                }
              >
                <img src={recipe.thumb} alt={recipe.title} />
                <p>{recipe.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;
