import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAllRecipesByCategoryAPI,
  getCategoryListAPI,
} from "../service/Api/CategoriesApi";
import css from "../styles/CategoriesPage.module.css";

const CategoriesPage = () => {
  const { category } = useParams();
  console.log("Current category from URL:", category);
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Beef");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        console.log("Fetching categories...");
        const data = await getCategoryListAPI();
        console.log("Fetched categories:", data);
        setCategories(data);

        // Ustawienie wybranej kategorii na "Beef" tylko, jeśli kategoria z URL nie istnieje
        if (!category || !data.includes(category)) {
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
        const data = await getAllRecipesByCategoryAPI(selectedCategory);
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

  const handleCategoryChange = (category) => {
    console.log(`Category changed to: ${category}`);
    setSelectedCategory(category);
    navigate(`/SoYummy_FrontEnd_groupNo_1/categories/${category}`);
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

export default CategoriesPage;

// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import {
//   getCategoryListAPI,
//   getAllRecipesByCategoryAPI,
// } from "../service/Api/CategoriesApi";
// import css from "../styles/CategoriesPage.module.css";

// const CategoriesPage = () => {
//   const { categoryName } = useParams();
//   const [categories, setCategories] = useState([]);
//   const [recipes, setRecipes] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(
//     categoryName || "Beef"
//   );
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const data = await getCategoryListAPI();
//         setCategories(data);
//         if (!categoryName) {
//           setSelectedCategory("Beef");
//         }
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//         setError("Failed to fetch categories.");
//       }
//     };

//     fetchCategories();
//   }, [categoryName]);

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         console.log(`Fetching recipes for category: ${selectedCategory}`);
//         const data = await getAllRecipesByCategoryAPI(selectedCategory);
//         console.log("Fetched recipes:", data);
//         setRecipes(data);
//       } catch (error) {
//         console.error("Error fetching recipes:", error);
//         setError("Failed to fetch recipes.");
//       }
//     };

//     fetchRecipes();
//   }, [selectedCategory]);

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//     navigate(`/categories/${category}`);
//   };

//   return (
//     <div className={css.categoriesPage}>
//       <div className={css.categoryMenu}>
//         {categories.map((category) => (
//           <button
//             key={category}
//             className={`${css.categoryButton} ${
//               category === selectedCategory ? css.active : ""
//             }`}
//             onClick={() => handleCategoryChange(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>
//       <div className={css.categoryRecipesList}>
//         {error && <p className={css.categoryErrorMessage}>{error}</p>}
//         {recipes.map((recipe) => (
//           <div key={recipe._id} className={css.categoryRecipeCard}>
//             <h3>{recipe.name}</h3>
//             <p>{recipe.description}</p>
//             <button onClick={() => navigate(`/recipes/${recipe._id}`)}>
//               View Recipe
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoriesPage;
