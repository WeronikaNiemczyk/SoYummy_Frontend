import React, { useState, useEffect } from 'react';

const ManageShoppingList = () => {
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState(null);

  // Fetch the initial list of ingredients from the backend
  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await fetch('https://deploy-marek-b05855e6af89.herokuapp.com/recipes/shopping-list/user', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        if (!response.ok) throw new Error('Failed to fetch ingredients');
        const data = await response.json();
        setIngredients(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchIngredients();
  }, []);

  // Handle removal of ingredient
  const handleRemoveIngredient = async (index) => {
    try {
      const ingredientToRemove = ingredients[index];
      const response = await fetch('https://deploy-marek-b05855e6af89.herokuapp.com/recipes/shopping-list/remove', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ id: ingredientToRemove._id }),
      });
      if (!response.ok) throw new Error('Failed to remove ingredient');
      setIngredients(ingredients.filter((_, i) => i !== index));
    } catch (error) {
      setError(error.message);
    }
  };

  // Handle change of ingredient number
  const handleNumberChange = async (index, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index].number = value;
    setIngredients(updatedIngredients);

    try {
      const ingredientToUpdate = updatedIngredients[index];
      const response = await fetch('https://deploy-marek-b05855e6af89.herokuapp.com/recipes/shopping-list/user', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ id: ingredientToUpdate._id, number: value }),
      });
      if (!response.ok) throw new Error('Failed to update ingredient number');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Manage Your Shopping List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Number</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((ingredient, index) => (
            <tr key={ingredient._id}> {/* Zakładamy, że każdy składnik ma unikalne id */}
              <td>{ingredient.name}</td>
              <td>
                <input
                  type="text"
                  value={ingredient.number}
                  onChange={(e) => handleNumberChange(index, e.target.value)}
                />
              </td>
              <td>
                <button
                  onClick={() => handleRemoveIngredient(index)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'red',
                    cursor: 'pointer',
                    fontSize: '16px',
                  }}
                >
                  ×
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageShoppingList;
