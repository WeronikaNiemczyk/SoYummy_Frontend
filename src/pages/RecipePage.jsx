
import RecipeHero from '../components/recipePage/recipeHero'
import RecipeInngredientsList from '../components/recipePage/RecipeInngredientsList';
import RecpiePreparation from '../components/recipePage/RecipePreparation';
import { getIngredientsList } from "../API/api"
import { getRecipeById } from '../API/api'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react"

const RecipePage = () => {
  const { recipeID } = useParams();
  // const [picture, setPicture] = useState()
  // const [name, setName] = useState()
  // const [number, setNumber] = useState()
  const [list, setList] = useState([]);
  const [downloadedRecipe, setDownloadedRecipe] = useState();
  const { addToShoppingList } = useShoppingList();

  const data = () =>
    getIngredientsList()
      .then((response) => {
        const newdata = response.data.ingredients;
        setList([...list, newdata]);
        return;
      })
      .catch((error) => {
        console.error("Błąd pobierania składników:", error);
      });

  const recipe = (id) => {
    getRecipeById(id)
      .then((response) => {
        const newdata2 = response.data;
        setDownloadedRecipe({ ...downloadedRecipe, newdata2 });
        return;
      })
      .catch((error) => {
        console.error("Błąd pobierania składników:", error);
      });
  };
  useEffect(() => {
    recipe(recipeID);
    data();
  }, []);

  return (
    <div className={css.divMain}>
      <RecipeHero element={{ downloadedRecipe }} />
      <RecipeInngredientsList
        element={{ downloadedRecipe, list }}
        onAdd={(ingredientId, measure) =>
          addToShoppingList(recipeID, ingredientId, measure)
        }
      />
      <RecpiePreparation element={{ downloadedRecipe }} />
    </div>
  );
};

export default RecipePage;
