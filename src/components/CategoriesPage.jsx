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
      <div className={css.categoryRecipesList}>
        {error && <p className={css.categoryErrorMessage}>{error}</p>}
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe._id} className={css.categoryRecipeCard}>
              <img
                src={recipe.thumb}
                alt={recipe.title}
                className={css.recipeImage}
              />
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <button
                onClick={() =>
                  navigate(`/SoYummy_FrontEnd_groupNo_1/recipe/${recipe._id}`)
                }
              >
                View Recipe
              </button>
            </div>
          ))
        ) : (
          <p>No recipes available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;

// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { getCategoryList, getRecipesByCategory } from "../API/api.js";
// import css from "../styles/CategoriesPage.module.css";

// const CategoriesPage = () => {
//   const { category } = useParams();
//   console.log("Current category from URL:", category);
//   const [categories, setCategories] = useState([]);
//   const [recipes, setRecipes] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("Beef");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

// useEffect(() => {
//   const fetchCategories = async () => {
//     try {
//       console.log("Fetching categories...");
//       const response = await getCategoryList();
//       const data = response.data; // Zakładam, że data jest tablicą obiektów

//       // Sprawdzenie, czy data jest tablicą
//       if (Array.isArray(data)) {
//         console.log("Fetched categories:", data);
//         setCategories(data);

//         if (!category || !data.some((cat) => cat.title === category)) {
//           setSelectedCategory("Beef");
//         } else {
//           setSelectedCategory(category);
//         }
//       } else {
//         throw new Error("Invalid data format for categories");
//       }
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//       setError("Failed to fetch categories.");
//     }
//   };

//   fetchCategories();
// }, [category]);

// useEffect(() => {
//   const fetchRecipes = async () => {
//     try {
//       console.log(`Fetching recipes for category: ${selectedCategory}`);
//       const response = await getRecipesByCategory(selectedCategory);
//       const data = response.data; // Zakładam, że data jest tablicą obiektów

//       // Sprawdzenie, czy data jest tablicą
//       if (Array.isArray(data)) {
//         console.log("Fetched recipes:", data);
//         setRecipes(data);
//       } else {
//         throw new Error("Invalid data format for recipes");
//       }
//     } catch (error) {
//       console.error("Error fetching recipes:", error);
//       setError("Failed to fetch recipes.");
//     }
//   };

//   if (selectedCategory) {
//     fetchRecipes();
//   }
// }, [selectedCategory]);

//   const handleCategoryChange = (title) => {
//     console.log(`Category changed to: ${title}`);
//     setSelectedCategory(title);
//     navigate(`/SoYummy_FrontEnd_groupNo_1/categories/${title}`);
//   };

//   return (
//     <div className={css.categoriesPage}>
//       <div className={css.categoryMenu}>
//         {Array.isArray(categories) &&
//           categories.map((cat) => (
//             <button
//               key={cat._id} // Zakładam, że każda kategoria ma właściwość `_id`
//               className={`${css.categoryButton} ${
//                 cat.title === selectedCategory ? css.active : ""
//               }`}
//               onClick={() => handleCategoryChange(cat.title)}
//             >
//               {cat.title}
//             </button>
//           ))}
//       </div>
//       <div className={css.categoryRecipesList}>
//         {error && <p className={css.categoryErrorMessage}>{error}</p>}
//         {Array.isArray(recipes) && recipes.length > 0 ? (
//           recipes.map((recipe) => (
//             <div key={recipe._id} className={css.categoryRecipeCard}>
//               <h3>{recipe.title}</h3>
//               <p>{recipe.description}</p>
//               <button
//                 onClick={() =>
//                   navigate(`/SoYummy_FrontEnd_groupNo_1/recipe/${recipe._id}`)
//                 }
//               >
//                 View Recipe
//               </button>
//             </div>
//           ))
//         ) : (
//           <p>No recipes available for this category.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CategoriesPage;

//111111111111111111111111111
// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { getCategoryList, getRecipesByCategory } from "../API/api.js";
// import css from "../styles/CategoriesPage.module.css";

// const CategoriesPage = () => {
//   const { category } = useParams();
//   console.log("Current category from URL:", category);
//   const [categories, setCategories] = useState([]);
//   const [recipes, setRecipes] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("Beef");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

// useEffect(() => {
//   const fetchCategories = async () => {
//     try {
//       console.log("Fetching categories...");
//       const response = await getCategoryList();
//       const data = response.data.categories;
//       console.log("Fetched categories:", data);
//       setCategories(data);

//       if (!category || !data.includes(category)) {
//         setSelectedCategory("Beef");
//       } else {
//         setSelectedCategory(category);
//       }
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//       setError("Failed to fetch categories.");
//     }
//   };

//   fetchCategories();
// }, [category]);

// useEffect(() => {
//   const fetchRecipes = async () => {
//     try {
//       console.log(`Fetching recipes for category: ${selectedCategory}`);
//       const response = await getRecipesByCategory(selectedCategory);
//       const data = response.data;
//       console.log("Fetched recipes:", data);
//       setRecipes(data);
//     } catch (error) {
//       console.error("Error fetching recipes:", error);
//       setError("Failed to fetch recipes.");
//     }
//   };

//   if (selectedCategory) {
//     fetchRecipes();
//   }
// }, [selectedCategory]);

//   const handleCategoryChange = (category) => {
//     console.log(`Category changed to: ${category}`);
//     setSelectedCategory(category);
//     navigate(`/SoYummy_FrontEnd_groupNo_1/categories/${category}`);
//   };

//   return (
// <div className={css.categoriesPage}>
//   <div className={css.categoryMenu}>
//     {categories.map((category) => (
//       <button
//         key={category}
//         className={`${css.categoryButton} ${
//           category === selectedCategory ? css.active : ""
//         }`}
//         onClick={() => handleCategoryChange(category)}
//       >
//         {category}
//       </button>
//     ))}
//   </div>
//   <div className={css.categoryRecipesList}>
//     {error && <p className={css.categoryErrorMessage}>{error}</p>}
//         {recipes.map((recipe) => (
//           <div key={recipe._id} className={css.categoryRecipeCard}>
//             <h3>{recipe.name}</h3>
//             <p>{recipe.description}</p>
//             <button onClick={() => navigate(`/SoYummy_FrontEnd_groupNo_1/recipe/${recipe._id}`)}>
//               View Recipe
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoriesPage;
