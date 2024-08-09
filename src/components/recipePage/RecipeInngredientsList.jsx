import { useState, useEffect } from "react";

const RecipeIngredientsList = ({ element }) => {
    const [markup, setMarkup] = useState(null);
   
    useEffect(() => {
        if (element.downloadedRecipe && element.list.length > 0) {
            const recipe = element.downloadedRecipe.newdata2.ingredients;
            const markupRecipe = recipe.map((recipeElement) => {
                const ingredList = element.list[0];
                for (let i = 0; i < ingredList.length; i++) {
                    if (ingredList[i]._id === recipeElement.id) {
                        return (
                            <div key={ingredList[i]._id}>
                            <img src={ingredList[i].thb} alt={ingredList[i].ttl} />;
                            <div >{ingredList[i].ttl}</div>
                            <div >{recipeElement.measure}</div>
                            </div>
                        );
                    }
                }
                return null;
            });

            setMarkup(markupRecipe); 
        }
    }, [element]); 
   
    return (
        <div>{markup}</div> 
    );
};

export default RecipeIngredientsList;
