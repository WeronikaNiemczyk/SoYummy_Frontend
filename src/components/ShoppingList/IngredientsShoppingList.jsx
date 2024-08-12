import React from "react";
import css from "../../styles/SchoppingList.module.css";

const IngredientsShoppingList = ({ ingredients, shoppingList, onRemove }) => {
  if (!Array.isArray(shoppingList)) {
    return <p>Brak składników.</p>;
  }

  const ingredientImageMap = ingredients.reduce((acc, ingredient) => {
    acc[ingredient._id] = ingredient.thb;
    // console.log('ingid', ingredient._id)
    return acc;
  }, {});

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
            shoppingList.map((item) => (
              <tr key={item._id}>
                <td className={css.product}>
                  <img
                    src={
                      ingredientImageMap[item.ingredientId] ||
                      "default-image.png"
                    }
                    alt={item.name}
                    className={css.ingredientImage}
                  />
                  {item.name}
                </td>
                <td className={css.number}>
                  <span className={css.numberContent}>
                    {item.quantity} {item.unit}
                  </span>
                </td>
                <td className={css.remove}>
                  <button onClick={() => onRemove(item.ingredientId)}>X</button>
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
