
import RecipeHero from '../components/recipePage/recipeHero'
import RecipeInngredientsList from '../components/recipePage/RecipeInngredientsList';
import { getIngredientsList } from "../API/api"
import { getRecipeById } from '../API/api'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react"

const RecipePage = () => {

  const { recipeID } = useParams()
  console.log(recipeID)
    const [picture, setPicture] = useState()
    const [name, setName] = useState()
    const [number, setNumber] = useState()
    const [list, setList] = useState({})
    const [downloadedRecipe, setDownloadedRecipe] = useState()
  
   const data = () => getIngredientsList()
     .then((response) => {
          const newdata=response.data.ingredients
            setList({ ...list, newdata });
            return 
    })
    .catch((error) => {
        console.error("Błąd pobierania składników:", error);
    });

         
    const recipe = (id) => {
        getRecipeById(id)
          .then((response) => {
            const newdata2 = response.data.ingredients
            console.log(newdata2)
            setDownloadedRecipe({ ...downloadedRecipe, newdata2 })
            return
        })
        .catch((error) => {
            console.error("Błąd pobierania składników:", error);
        });
    }
 useEffect(() => {
      data()
      recipe(recipeID)
  },[])

  useEffect(() => {
    if (list) {
      console.log(list)
    }
  }, [list])

  return (
      <div>
      <RecipeHero />
      <RecipeInngredientsList element={{ downloadedRecipe, list }} />
      <p></p>
    </div>
    

    );
}

export default RecipePage