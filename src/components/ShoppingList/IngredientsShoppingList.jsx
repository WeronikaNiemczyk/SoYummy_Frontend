import React from "react";

const IngredientsShoppingList = ({ ingredients, onRemove, onAdd }) => {
  if (!Array.isArray(ingredients)) {
    return <p>Brak składników.</p>;
  }

  return (
    <ul>
      {ingredients.length === 0 ? (
        <p>Brak składników na liście.</p>
      ) : (
        ingredients.map((ingredient) => (
          <li key={ingredient._id}>
            <img
              src={ingredient.image || "domyślny-obrazek-url"}
              alt={ingredient.name}
            />
            <span>{ingredient.name}</span>
            <span>
              {ingredient.quantity} {ingredient.unit}
            </span>
            <button onClick={() => onRemove(ingredient._id)}>Usuń</button>
            <button
              onClick={() =>
                onAdd(
                  "recipeId-placeholder",
                  ingredient._id,
                  ingredient.measure
                )
              } // Przykład użycia; recipeId i measure muszą być dostosowane
            >
              Dodaj
            </button>
          </li>
        ))
      )}
    </ul>
  );
};

export default IngredientsShoppingList;
