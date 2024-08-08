import {getRecipeById} from '../API/api'
import RecipeHero from '../components/recipePage/recipeHero'

const RecipePage = (id)=>{

   const recipe =  getRecipeById(id)
  .then((response) => {
    console.log("Składniki:", response.data);
    return response
  })
  .catch((error) => {
    console.error("Błąd pobierania składników:", error);
  });

    return(
        <RecipeHero/>
    );
}

export default RecipePage