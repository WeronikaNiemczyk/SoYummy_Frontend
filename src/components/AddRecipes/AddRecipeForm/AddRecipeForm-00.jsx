// src/components/AddRecipes/AddRecipeForm/AddRecipeForm.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addOwnRecipe, getCategoryList } from "../../../API/api";
import MainPageTitle from "../../MainPageTitle/MainPageTitle";
import RecipeDescriptionFields from "../RecipeDescriptionFields/RecipeDescriptionFields";
import RecipeIngredientsFields from "../RecipeIngredientsFields/RecipeIngredientsFields";
import RecipePreparationFields from "../RecipePreparationFields/RecipePreparationFields";
import css from "./AddRecipeForm.module.css";

const AddRecipeForm = () => {
  const [recipeData, setRecipeData] = useState({
    title: "",
    description: "",
    category: "",
    cookTime: "",
    image: null,
  });
  const [ingredients, setIngredients] = useState([]);
  const [preparation, setPreparation] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategoryList();
        setCategories(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  const handleRecipeDataChange = (data) => {
    setRecipeData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const handleIngredientsChange = (data) => {
    setIngredients(data);
  };

  const handlePreparationChange = (data) => {
    setPreparation(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", recipeData.title);
    formData.append("description", recipeData.description);
    formData.append("category", recipeData.category);
    formData.append("cookTime", recipeData.cookTime);
    if (recipeData.image) {
      formData.append("image", recipeData.image);
    }
    formData.append("ingredients", JSON.stringify(ingredients));
    formData.append("preparation", JSON.stringify(preparation));

    try {
      await addOwnRecipe(formData);
      navigate("/my-recipes");
    } catch (err) {
      setError("Error adding recipe. Please try again.");
    }
  };

  return (
    <div>
      <MainPageTitle text="Add Recipe" />
      {error && <p className={css.errorMessage}>{error}</p>}
      <form onSubmit={handleSubmit} className={css.formAddRecipeForm}>
        <RecipeDescriptionFields
          onChange={handleRecipeDataChange}
          categories={categories}
          recipeData={recipeData}
        />
        <RecipeIngredientsFields
          ingredients={ingredients}
          onIngredientsChange={handleIngredientsChange}
        />
        <RecipePreparationFields
          onPreparationChange={handlePreparationChange}
        />
        <button className={css.buttonAddRecipeForm} type="submit">
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
