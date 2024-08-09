import { useState, useEffect } from "react"
import { getIngredientsList } from "../../API/api"
import { getRecipeById } from '../../API/api'
import { useParams } from 'react-router-dom';

const RecipeInngredientsList = ({ element }) => {
   
    useEffect(() => {
        if(element.downloadedRecipe){
        console.log(element.downloadedRecipe.newdata2[0])}
    }, [element])
    return (
        <div>recipe.data.description</div>
    )
}

export default RecipeInngredientsList