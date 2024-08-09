import { getIngredientsList } from "../API/api"

const recipeIngredients = () => {
    const data = getIngredientsList()
        .then((data) => {
        return(data)
    })
}

export default recipeIngredients