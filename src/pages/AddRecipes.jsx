// src/pages/AddRecipes.jsx

import { useEffect, useState } from "react";
import { addOwnRecipe, getCategoryList, getIngredientsList } from "../API/api";
import AddRecipeForm from "../components/AddRecipes/AddRecipeForm/AddRecipeForm";
import AddRecipePage from "../components/AddRecipes/AddRecipePage/AddRecipePage";
import FollowUs from "../components/AddRecipes/FollowUs/FollowUs"; // Dodany import
import PopularRecipe from "../components/AddRecipes/PopularRecipe/PopularRecipe";
import RecipeDescriptionFields from "../components/AddRecipes/RecipeDescriptionFields/RecipeDescriptionFields";
import RecipeIngredientsFields from "../components/AddRecipes/RecipeIngredientsFields/RecipeIngredientsFields";
import RecipePreparationFields from "../components/AddRecipes/RecipePreparationFields/RecipePreparationFields";
import css from "../styles/AddRecipes.module.css";

const AddRecipes = () => {
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [recipeData, setRecipeData] = useState({
    title: "",
    description: "",
    measurement: "",
    image: null,
    cookTime: "",
    category: "",
    ingredients: [],
    preparation: [],
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategoryList();
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchIngredients = async () => {
      try {
        const response = await getIngredientsList();
        setIngredients(response.data);
      } catch (error) {
        console.error("Error fetching ingredients:", error);
      }
    };

    fetchCategories();
    fetchIngredients();
  }, []);

  const handleRecipeDataChange = (newData) => {
    setRecipeData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  const handleIngredientsChange = (newIngredients) => {
    setRecipeData((prevData) => ({
      ...prevData,
      ingredients: newIngredients,
    }));
  };

  const handlePreparationChange = (preparationSteps) => {
    setRecipeData((prevData) => ({
      ...prevData,
      preparation: preparationSteps,
    }));
  };

  const handleSubmit = async (formData) => {
    try {
      await addOwnRecipe(formData);
      alert("Recipe added successfully");
      setRecipeData({
        title: "",
        description: "",
        measurement: "",
        image: null,
        cookTime: "",
        category: "",
        ingredients: [],
        preparation: [],
      });
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };

  return (
    <AddRecipePage>
      <div className={css.containerAddRecipes}>
        <AddRecipeForm onSubmit={handleSubmit}>
          <RecipeDescriptionFields
            onChange={handleRecipeDataChange}
            recipeData={recipeData}
            categories={categories}
          />
          <RecipeIngredientsFields
            ingredients={recipeData.ingredients}
            onIngredientsChange={handleIngredientsChange}
          />
          <RecipePreparationFields
            onPreparationChange={handlePreparationChange}
          />
        </AddRecipeForm>
        <PopularRecipe />
        <FollowUs /> {/* Dodany komponent */}
      </div>
    </AddRecipePage>
  );
};

export default AddRecipes;
