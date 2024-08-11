import React from "react";
import css from "../../styles/SchoppingList.module.css";

const IngredientsShoppingList = ({ ingredients, onRemove }) => {
  if (!Array.isArray(ingredients)) {
    return <p>Brak składników.</p>;
  }

  return (
    <div className={css.SchoppingListMainContainer}>
      <header className={css.SchoppingListHeader}>
        <h1>Shopping List</h1>
      </header>
      <table className={css.SchoppingListTable}>
        <thead>
          <tr>
            <th className={css.productHeader}>Product</th>
            <th className={css.numberHeader}>Number</th>
            <th className={css.removeHeader}>Remove</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.length === 0 ? (
            <tr>
              <td colSpan="3">Brak składników na liście.</td>
            </tr>
          ) : (
            ingredients.map((ingredient) => (
              <tr key={ingredient._id}>
                <td className={css.product}>
                  <img
                    src={ingredient.image || "domyślny-obrazek-url"}
                    alt={ingredient.name}
                  />
                  {ingredient.name}
                </td>
                <td className={css.number}>
                  <span className={css.numberContent}>
                    {ingredient.quantity} {ingredient.unit}
                  </span>
                </td>
                <td className={css.remove}>
                  <button onClick={() => onRemove(ingredient._id)}>X</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default IngredientsShoppingList;
