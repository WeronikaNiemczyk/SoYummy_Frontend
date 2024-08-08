import React from "react";
import "../styles/Favorites.css";

const RecipeCard = ({ image, title, description, time, onDelete, onView }) => {
  return (
    <div className="recipe-card">
      <img src={image} alt={title} className="recipe-image" />
      <h2 className="recipe-title">{title}</h2>
      <p className="recipe-description">{description}</p>
      <p className="recipe-time">{time}</p>
      <button className="see-recipe-btn" onClick={onView}>
        See recipe
      </button>
      <button className="delete-recipe-btn" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default RecipeCard;
