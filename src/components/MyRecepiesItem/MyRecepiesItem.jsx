// src/components/MyRecipesItem/MyRecipesItem.jsx

import React from 'react';
import { Link } from 'react-router-dom';
// import defaultImage from '../../assets/default-image.jpg'; // Domyślny obrazek tła

const MyRecipesItem = ({ recipe, onDelete }) => {
  const handleDelete = async () => {
    try {
      await onDelete(); // Usuń przepis z backendu
    } catch (error) {
      console.error('Failed to delete recipe:', error);
    }
  };

  return (
    <div className="recipe-card">
      <img 
        src={recipe.image || defaultImage} 
        alt={recipe.title} 
        className="recipe-image"
      />
      <div className="recipe-details">
        <h3>{recipe.title}</h3>
        <p>Cooking time: {recipe.cookingTime} minutes</p>
        <button onClick={handleDelete} className="delete-button">
          Delete
        </button>
        <Link to={`/recipes/recipe/${recipe.id}`} className="see-recipe-button">
          See Recipe
        </Link>
      </div>
    </div>
  );
};

export default MyRecipesItem;
