// src/components/AddRecipes/RecipePreparationFields/RecipePreparationFields.jsx

import PropTypes from "prop-types";
import { useState } from "react";
import css from "./RecipePreparationFields.module.css";

const RecipePreparationFields = ({ onPreparationChange }) => {
  const [preparationText, setPreparationText] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const preparationSteps = preparationText.trim().split("\n");
      onPreparationChange(preparationSteps);
      setPreparationText(""); // Czyszczenie tekstu po naciśnięciu Enter
    }
  };

  const handleChange = (event) => {
    setPreparationText(event.target.value);
  };

  return (
    <div className={css.containerRecipePreparationFields}>
      <h3 className={css.titleRecipePreparationFields}>Preparation</h3>
      <textarea
        className={css.textareaRecipePreparationFields}
        value={preparationText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter the preparation steps here..."
        rows="5"
      />
    </div>
  );
};

RecipePreparationFields.propTypes = {
  onPreparationChange: PropTypes.func.isRequired,
};

export default RecipePreparationFields;
