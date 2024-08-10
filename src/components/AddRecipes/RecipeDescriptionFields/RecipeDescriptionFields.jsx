// src/components/AddRecipes/RecipeDescriptionFields/RecipeDescriptionFields.jsx

import PropTypes from "prop-types";
import css from "./RecipeDescriptionFields.module.css";

const RecipeDescriptionFields = ({ onChange, categories, recipeData }) => {
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    onChange({
      [name]: name === "image" ? files[0] : value,
    });
  };

  return (
    <div className={css.fieldsContainerRecipeDescriptionFields}>
      <div className={css.inputGroupRecipeDescriptionFields}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={recipeData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className={css.inputGroupRecipeDescriptionFields}>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={recipeData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className={css.inputGroupRecipeDescriptionFields}>
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={recipeData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select a category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <div className={css.inputGroupRecipeDescriptionFields}>
        <label htmlFor="cookTime">Cook Time (minutes)</label>
        <select
          id="cookTime"
          name="cookTime"
          value={recipeData.cookTime}
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
    </div>
  );
};

RecipeDescriptionFields.propTypes = {
  onChange: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  recipeData: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    cookTime: PropTypes.string,
    image: PropTypes.object,
  }).isRequired,
};

export default RecipeDescriptionFields;
