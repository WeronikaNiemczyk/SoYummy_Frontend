import { useState, useEffect } from "react";
import { addProductToShoppingList, removeProductFromShoppingList } from '../../API/api'
import css from '../../styles/RecipeIngredientsList.module.css'

const RecipeIngredientsList = ({ element }) => {
    const [markup, setMarkup] = useState(null);
   
    useEffect(() => {
        const handleCheckboxChange = (event) => {
            const isChecked = event.target.checked
            const ingredientId = event.target.id
            const recipeId = element._id
            const data = {
                "recipeId": recipeId,
                "ingredientId": ingredientId,
                "measure": "50g"
            }
            
            if (isChecked) {
                addProductToShoppingList(recipeId, ingredientId, '50g')
                 .then((response) => {
                 console.log("info", response);
                 })
                .catch((error) => {
                console.error("Błąd dodania składnika:", error);
                });
                }
            else {
                removeProductFromShoppingList(data)
                 .then((response) => {
                 console.log("info", response);
                    })
                .catch((error) => {
                console.error("Błąd usunięcia składnika:", error);
                });
            }
        };
        if (element.downloadedRecipe && element.list.length > 0) {
            const recipe = element.downloadedRecipe.newdata2.ingredients;
            const markupRecipe = recipe.map((recipeElement) => {
                const ingredList = element.list[0];
                for (let i = 0; i < ingredList.length; i++) {
                    if (ingredList[i]._id === recipeElement.id) {
                        return (
                            <tr className={css.trList } key={ingredList[i]._id}>
                                <td className={`${css.leftAllign} ${css.thImg}`}>
                                <img src={ingredList[i].thb} alt={ingredList[i].ttl} />
                            </td>
                            <td className={css.leftAllign}>{ingredList[i].ttl}</td>
                                <td className={css.rightAllign}>
                                    <div className={css.measureDiv}>
                                        <p className={css.measureText}>{recipeElement.measure}</p>
                                    </div>
                                </td>
                                <td className={css.rightAllignCheck}>
                                    <label>
                                        <input className={css.checkbox} type="checkbox" id={ingredList[i]._id} onChange={handleCheckboxChange}></input>
                                        <span className={css.checkboxContainer}></span>
                                        
                                    </label>
                                </td>
                            </tr>
                        );
                    }
                }
                return null;
            });

            setMarkup(markupRecipe); 
        }
    }, [element]); 
   
    return (
        <div className={css.mainDiv}>
        <table className={css.mainTable}  >
            <thead className={css.mainTableRow} >
            <tr>
                <th className={`${css.thHead} ${css.leftAllign}`} scope="col"><p className={css.pHead}>Ingredients</p></th>
                <th className={css.thHead} scope="col"></th>
                <th className={css.thHeadRight} scope="col"><p className={css.pHead}>Number</p></th>
                <th className={css.thHead} scope="col"><p className={css.pHead}>Add to list</p></th>
                </tr>
            </thead>
            <tbody>{markup}</tbody>
            </table>
        </div>
    );
};

export default RecipeIngredientsList;
