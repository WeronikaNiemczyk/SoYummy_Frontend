import { useEffect, useState } from "react";
import {
  getShoppingList,
  removeProductFromShoppingList,
  updateProductInShoppingList,
} from "../../API/api";

const ManageShoppingList = () => {
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the initial list of ingredients from the backend
  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await getShoppingList(); // Pobierz listę zakupów
        setIngredients(response.data); // Zakładam, że odpowiedź zawiera listę składników
      } catch (error) {
        setError("Failed to fetch ingredients");
      } finally {
        setLoading(false);
      }
    };

    fetchIngredients();
  }, []);

  // Handle removal of ingredient
  const handleRemoveIngredient = async (id) => {
    try {
      await removeProductFromShoppingList({ id }); // Usuń składnik z listy
      setIngredients(ingredients.filter((ingredient) => ingredient.id !== id)); // Zaktualizuj stan
    } catch (error) {
      setError("Failed to remove ingredient");
    }
  };

  // Handle change of ingredient number
  const handleNumberChange = async (id, value) => {
    try {
      const ingredient = ingredients.find((item) => item.id === id);
      if (ingredient) {
        const updatedIngredient = { ...ingredient, number: value };

        // Wyślij zaktualizowane dane do API
        await updateProductInShoppingList(updatedIngredient);

        // Zaktualizuj stan lokalny
        setIngredients((prev) =>
          prev.map((item) => (item.id === id ? updatedIngredient : item))
        );
      }
    } catch (error) {
      setError("Failed to update ingredient number");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Manage Your Shopping List</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Number</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((ingredient) => (
            <tr key={ingredient.id}>
              {" "}
              {/* Zakładam, że każdy składnik ma unikalne id */}
              <td>{ingredient.name}</td>
              <td>
                <input
                  type="text"
                  value={ingredient.number}
                  onChange={(e) =>
                    handleNumberChange(ingredient.id, e.target.value)
                  }
                />
              </td>
              <td>
                <button
                  onClick={() => handleRemoveIngredient(ingredient.id)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "red",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >
                  &times; {/* Poprawny znak krzyżyka */}
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
