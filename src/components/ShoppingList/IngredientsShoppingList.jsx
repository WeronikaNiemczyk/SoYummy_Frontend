import React, { useState, useEffect } from 'react';
import { getShoppingList, addProductToShoppingList, removeProductFromShoppingList } from '../../API/api';

const IngredientsShoppingList = () => {
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadIngredients = async () => {
      try {
        const response = await getShoppingList();
        setIngredients(response.data);
      } catch (error) {
        setError('Failed to fetch ingredients');
      } finally {
        setLoading(false);
      }
    };

    loadIngredients();
  }, []);

  const handleRemove = async (ingredientId) => {
    try {
      await removeProductFromShoppingList({ id: ingredientId });
      setIngredients((prev) => prev.filter((item) => item._id !== ingredientId));
    } catch (error) {
      setError('Failed to remove ingredient');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {ingredients.map((ingredient) => (
        <li key={ingredient._id}>
          <img src={ingredient.image || 'default-image-url'} alt={ingredient.name} />
          <span>{ingredient.name}</span>
          <span>{ingredient.quantity} {ingredient.unit}</span>
          <button onClick={() => handleRemove(ingredient._id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientsShoppingList;