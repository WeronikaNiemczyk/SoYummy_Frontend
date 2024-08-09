import { useState, useEffect } from "react";
import { addProductToShoppingList,removeProductFromShoppingList } from '../../API/api'

const RecipeIngredientsList = ({ element }) => {
    const [markup, setMarkup] = useState(null);
   
    useEffect(() => {
        const handleCheckboxChange = (event) => {
            const isChecked = event.target.checked
            const id = event.target.id
            if (isChecked) {
                addProductToShoppingList(id)
            }
            else{removeProductFromShoppingList(id)}
        };
        if (element.downloadedRecipe && element.list.length > 0) {
            const recipe = element.downloadedRecipe.newdata2.ingredients;
            const markupRecipe = recipe.map((recipeElement) => {
                const ingredList = element.list[0];
                for (let i = 0; i < ingredList.length; i++) {
                    if (ingredList[i]._id === recipeElement.id) {
                        return (
                            <tr key={ingredList[i]._id}>
                            <td>
                                <img src={ingredList[i].thb} alt={ingredList[i].ttl} />
                            </td>
                            <td >{ingredList[i].ttl}</td>
                            <td >{recipeElement.measure}</td>
                                <td><input type="checkbox" id={ingredList[i]._id} onChange={handleCheckboxChange} /></td>
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
        <table>
            <thead>
            <tr>
                <th scope="col">Ingredients</th>
                <th scope="col"></th>
                <th scope="col">Number</th>
                <th scope="col">Add to list</th>
                </tr>
            </thead>
            <tbody>{markup}</tbody>
        </table>
    );
};

export default RecipeIngredientsList;
