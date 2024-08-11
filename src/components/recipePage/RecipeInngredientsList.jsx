import { useState, useEffect } from "react";
import {
  addProductToShoppingList,
  removeProductFromShoppingList,
} from "../../API/api";
import css from "../../styles/RecipeIngredientsList.module.css";

const RecipeIngredientsList = ({ element, onAdd }) => {
  const [markup, setMarkup] = useState(null);

  useEffect(() => {
    const handleCheckboxChange = (event) => {
      const isChecked = event.target.checked;
      const id = event.target.id;
      const measure = event.target.dataset.measure;
      if (isChecked) {
        onAdd(id, measure);
        // addProductToShoppingList(id)
      } else {
        removeProductFromShoppingList(id);
      }
    };
    if (element.downloadedRecipe && element.list.length > 0) {
      const recipe = element.downloadedRecipe.newdata2.ingredients;
      const markupRecipe = recipe.map((recipeElement) => {
        const ingredList = element.list[0];
        for (let i = 0; i < ingredList.length; i++) {
          if (ingredList[i]._id === recipeElement.id) {
            return (
              <tr className={css.trList} key={ingredList[i]._id}>
                <td className={`${css.leftAllign} ${css.thImg}`}>
                  <img src={ingredList[i].thb} alt={ingredList[i].ttl} />
                </td>
                <td className={css.leftAllign}>{ingredList[i].ttl}</td>
                <td className={css.rightAllign}>
                  <div className={css.measureDiv}>
                    <p className={css.measureText}>{recipeElement.measure}</p>
                  </div>
                </td>
                <td className={css.rightAllign}>
                  <input
                    className={css.checkbox}
                    type="checkbox"
                    id={ingredList[i]._id}
                    data-measure={recipeElement.measure}
                    onChange={handleCheckboxChange}
                  />
                </td>
              </tr>
            );
          }
        }
        return null;
      });

      setMarkup(markupRecipe);
    }
  }, [element, onAdd]);

  return (
    <div className={css.mainDiv}>
      <table className={css.mainTable}>
        <thead className={css.mainTableRow}>
          <tr>
            <th className={`${css.thHead} ${css.leftAllign}`} scope="col">
              Ingredients
            </th>
            <th className={css.thHead} scope="col"></th>
            <th className={css.thHead} scope="col">
              Number
            </th>
            <th className={css.thHead} scope="col">
              Add to list
            </th>
          </tr>
        </thead>
        <tbody>{markup}</tbody>
      </table>
    </div>
  );
};

export default RecipeIngredientsList;
