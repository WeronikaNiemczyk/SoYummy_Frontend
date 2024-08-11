// src/components/AddRecipes/RecipeIngredientsFields/RecipeIngredientsFields.jsx

import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getIngredientsList } from "../../../API/api";
import css from "./RecipeIngredientsFields.module.css";

const RecipeIngredientsFields = ({ ingredients, onIngredientsChange }) => {
  const [ingredientOptions, setIngredientOptions] = useState([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await getIngredientsList();
        console.log("Fetched ingredients:", response.data);

        // Sprawdzamy, czy odpowiedź zawiera klucz 'ingredients' i jest tablicą
        if (response.data && Array.isArray(response.data.ingredients)) {
          setIngredientOptions(response.data.ingredients);
        } else {
          console.error("Invalid data format: Expected { ingredients: Array }");
        }
      } catch (error) {
        console.error("Error fetching ingredients:", error);
      }
    };

    fetchIngredients();
  }, []);

  const handleAddField = () => {
    // Dodaje pusty obiekt składnika do listy
    onIngredientsChange([
      ...ingredients,
      { name: "", quantity: "", measurement: "" },
    ]);
  };

  const handleRemoveField = (index) => {
    // Usuwa składnik o danym indeksie
    const newIngredients = ingredients.filter((_, i) => i !== index);
    onIngredientsChange(newIngredients);
  };

  const handleFieldChange = (index, field, value) => {
    // Zmienia wartość pola dla składnika o danym indeksie
    const newIngredients = ingredients.map((ingredient, i) =>
      i === index ? { ...ingredient, [field]: value } : ingredient
    );
    onIngredientsChange(newIngredients);
  };

  return (
    <div className={css.recipeIngredientsFields}>
      <h2 className={css.subtitle}>Ingredients</h2>
      {ingredients.map((ingredient, index) => (
        <div key={index} className={css.fieldGroup}>
          <select
            value={ingredient.name}
            onChange={(e) => handleFieldChange(index, "name", e.target.value)}
            className={css.select}
            required
          >
            <option value="">Select Ingredient</option>
            {ingredientOptions.map((option) => (
              <option key={option._id} value={option.title}>
                {option.title}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={ingredient.quantity}
            onChange={(e) =>
              handleFieldChange(index, "quantity", e.target.value)
            }
            className={css.input}
            placeholder="Quantity"
            required
          />
          <select
            value={ingredient.measurement}
            onChange={(e) =>
              handleFieldChange(index, "measurement", e.target.value)
            }
            className={css.select}
            required
          >
            <option value="">Select Measurement</option>
            {/* Dodaj miary tutaj */}
          </select>
          <button
            type="button"
            onClick={() => handleRemoveField(index)}
            className={css.removeButton}
          >
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddField} className={css.addButton}>
        Add Ingredient
      </button>
    </div>
  );
};

RecipeIngredientsFields.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      measurement: PropTypes.string.isRequired,
    })
  ).isRequired,
  onIngredientsChange: PropTypes.func.isRequired,
};

export default RecipeIngredientsFields;

// import PropTypes from "prop-types";
// import { useEffect, useState } from "react";
// import { getIngredientsList } from "../../../API/api";
// import css from "./RecipeIngredientsFields.module.css";

// const RecipeIngredientsFields = ({ ingredients, onIngredientsChange }) => {
//   const [ingredientOptions, setIngredientOptions] = useState([]);
//   const [measurementOptions, setMeasurementOptions] = useState([]); // Może być pusta lub usunięta, jeśli miary nie są dostępne

//   useEffect(() => {
//     const fetchIngredients = async () => {
//       try {
//         const response = await getIngredientsList();

//         // Walidacja danych
//         if (Array.isArray(response.data)) {
//           setIngredientOptions(response.data);
//         } else {
//           throw new Error("Invalid data format");
//         }
//       } catch (error) {
//         console.error("Error fetching ingredients:", error);
//       }
//     };

//     // Jeżeli masz miary jako stałe wartości, możesz je ustawić tutaj ręcznie.
//     // Jeśli nie, możesz usunąć ten blok.
//     const fetchMeasurements = async () => {
//       try {
//         const response = await getMeasurementList(); // Zakładam, że masz endpoint getMeasurementList
//         setMeasurementOptions(response.data);
//       } catch (error) {
//         console.error('Error fetching measurements:', error);
//       }
//     };

//     fetchIngredients();
//     // fetchMeasurements(); // Odkomentuj, jeśli miary są dostępne
//   }, []);

//   const handleAddField = () => {
//     onIngredientsChange([
//       ...ingredients,
//       { name: "", quantity: "", measurement: "" },
//     ]);
//   };

//   const handleRemoveField = (index) => {
//     const newIngredients = ingredients.filter((_, i) => i !== index);
//     onIngredientsChange(newIngredients);
//   };

//   const handleFieldChange = (index, field, value) => {
//     const newIngredients = ingredients.map((ingredient, i) =>
//       i === index ? { ...ingredient, [field]: value } : ingredient
//     );
//     onIngredientsChange(newIngredients);
//   };

//   return (
//     <div className={css.recipeIngredientsFields}>
//       <h2 className={css.subtitle}>Ingredients</h2>
//       {ingredients.map((ingredient, index) => (
//         <div key={index} className={css.fieldGroup}>
//           <select
//             value={ingredient.name}
//             onChange={(e) => handleFieldChange(index, "name", e.target.value)}
//             className={css.select}
//           >
//             <option value="">Select Ingredient</option>
//             {ingredientOptions.map((option) => (
//               <option key={option.id} value={option.name}>
//                 {option.name}
//               </option>
//             ))}
//           </select>
//           <input
//             type="number"
//             value={ingredient.quantity}
//             onChange={(e) =>
//               handleFieldChange(index, "quantity", e.target.value)
//             }
//             className={css.input}
//             placeholder="Quantity"
//           />
//           <select
//             value={ingredient.measurement}
//             onChange={(e) =>
//               handleFieldChange(index, "measurement", e.target.value)
//             }
//             className={css.select}
//           >
//             <option value="">Select Measurement</option>
//             {/* Jeśli nie masz miar, możesz usunąć poniższe */}
//             {measurementOptions.map((option) => (
//               <option key={option.id} value={option.name}>
//                 {option.name}
//               </option>
//             ))}
//           </select>
//           <button
//             type="button"
//             onClick={() => handleRemoveField(index)}
//             className={css.removeButton}
//           >
//             Remove
//           </button>
//         </div>
//       ))}
//       <button type="button" onClick={handleAddField} className={css.addButton}>
//         Add Ingredient
//       </button>
//     </div>
//   );
// };

// RecipeIngredientsFields.propTypes = {
//   ingredients: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
//         .isRequired,
//       measurement: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onIngredientsChange: PropTypes.func.isRequired,
// };

// export default RecipeIngredientsFields;
