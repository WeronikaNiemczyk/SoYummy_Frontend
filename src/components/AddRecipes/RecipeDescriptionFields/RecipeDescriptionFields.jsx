// src/components/AddRecipes/RecipeDescriptionFields/RecipeDescriptionFields.jsx

import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getCategoryList } from "../../../API/api";
import css from "./RecipeDescriptionFields.module.css";

const RecipeDescriptionFields = ({ onChange, recipeData }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategoryList();
        console.log("Fetched categories:", response.data);

        if (response.data && Array.isArray(response.data.categories)) {
          setCategories(response.data.categories);
        } else {
          console.error("Invalid data format: Expected { categories: Array }");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    onChange({
      [name]: name === "image" ? files[0] : value,
    });
  };

  const measurementUnits = [
    { value: "g", label: "Grams" },
    { value: "ml", label: "Milliliters" },
    { value: "tbsp", label: "Tablespoons" },
    { value: "tsp", label: "Teaspoons" },
    { value: "cup", label: "Cups" },
    // Dodaj więcej jednostek miary, jeśli jest to potrzebne
  ];

  return (
    <div className={css.fieldsContainerRecipeDescriptionFields}>
      <div className={css.inputGroupRecipeDescriptionFields}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={recipeData.title || ""}
          onChange={handleChange}
          required
        />
      </div>
      <div className={css.inputGroupRecipeDescriptionFields}>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={recipeData.description || ""}
          onChange={handleChange}
          required
        />
      </div>
      <div className={css.inputGroupRecipeDescriptionFields}>
        <label htmlFor="category">Category</label>
        {loading ? (
          <p>Loading categories...</p>
        ) : (
          <select
            id="category"
            name="category"
            value={recipeData.category || ""}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            {categories.length > 0 ? (
              categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.title}
                </option>
              ))
            ) : (
              <option value="" disabled>
                No categories available
              </option>
            )}
          </select>
        )}
      </div>
      <div className={css.inputGroupRecipeDescriptionFields}>
        <label htmlFor="cookTime">Cook Time (minutes)</label>
        <select
          id="cookTime"
          name="cookTime"
          value={recipeData.cookTime || ""}
          onChange={handleChange}
          required
        >
          <option value="">Select cook time</option>
          {[...Array(24).keys()].map((i) => (
            <option key={i * 5} value={i * 5 + 5}>
              {i * 5 + 5}
            </option>
          ))}
        </select>
      </div>
      <div className={css.inputGroupRecipeDescriptionFields}>
        <label htmlFor="image">Upload Image</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />
      </div>
      {/* Zakomentowany kod do pobierania jednostek miary z API */}
      {/* <div className={css.inputGroupRecipeDescriptionFields}>
        <label htmlFor="measurement">Measurement</label>
        <select
          id="measurement"
          name="measurement"
          value={recipeData.measurement || ""}
          onChange={handleChange}
          required
        >
          <option value="">Select a measurement unit</option>
          {measurementOptions.map((option) => (
            <option key={option._id} value={option._id}>
              {option.title}
            </option>
          ))}
        </select>
      </div> */}
    </div>
  );
};

RecipeDescriptionFields.propTypes = {
  onChange: PropTypes.func.isRequired,
  recipeData: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    cookTime: PropTypes.string,
    image: PropTypes.object,
  }).isRequired,
};

export default RecipeDescriptionFields;

// import PropTypes from "prop-types";
// import css from "./RecipeDescriptionFields.module.css";

// const RecipeDescriptionFields = ({ onChange, categories, recipeData }) => {
//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     onChange({
//       [name]: name === "image" ? files[0] : value,
//     });
//   };

//   return (
//     <div className={css.fieldsContainerRecipeDescriptionFields}>
//       <div className={css.inputGroupRecipeDescriptionFields}>
//         <label htmlFor="title">Title</label>
//         <input
//           type="text"
//           id="title"
//           name="title"
//           value={recipeData.title}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className={css.inputGroupRecipeDescriptionFields}>
//         <label htmlFor="description">Description</label>
//         <textarea
//           id="description"
//           name="description"
//           value={recipeData.description}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className={css.inputGroupRecipeDescriptionFields}>
//         <label htmlFor="category">Category</label>
//         <select
//           id="category"
//           name="category"
//           value={recipeData.category}
//           onChange={handleChange}
//           required
//         >
//           {/* <option value="">Select a category</option>
//           {categories.map((cat) => (
//             <option key={cat.id} value={cat.id}>
//               {cat.name}
//             </option>
//           ))} */}
//           {categories.length > 0 ? (
//             categories.map((cat) => (
//               <option key={cat.id} value={cat.id}>
//                 {cat.name}
//               </option>
//             ))
//           ) : (
//             <option value="" disabled>
//               No categories available
//             </option>
//           )}
//         </select>
//       </div>
//       <div className={css.inputGroupRecipeDescriptionFields}>
//         <label htmlFor="cookTime">Cook Time (minutes)</label>
//         <select
//           id="cookTime"
//           name="cookTime"
//           value={recipeData.cookTime}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select cook time</option>
//           {[...Array(24).keys()].map((i) => (
//             <option key={i * 5} value={i * 5 + 5}>
//               {i * 5 + 5}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className={css.inputGroupRecipeDescriptionFields}>
//         <label htmlFor="image">Upload Image</label>
//         <input
//           type="file"
//           id="image"
//           name="image"
//           accept="image/*"
//           onChange={handleChange}
//         />
//       </div>
//     </div>
//   );
// };

// RecipeDescriptionFields.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   categories: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   recipeData: PropTypes.shape({
//     title: PropTypes.string,
//     description: PropTypes.string,
//     category: PropTypes.string,
//     cookTime: PropTypes.string,
//     image: PropTypes.object,
//   }).isRequired,
// };

// export default RecipeDescriptionFields;
