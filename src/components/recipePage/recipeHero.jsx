import { useState, useEffect } from "react";
const RecipeHero = ({element})=>{
    const [title, setTitle]=useState()
    const [descrition, setDescription]=useState()
    const [time, setTime]=useState()

    useEffect(() => {
        if (element.downloadedRecipe) {
            console.log(element.downloadedRecipe.newdata2)
            setTitle(element.downloadedRecipe.newdata2.title)
            setDescription(element.downloadedRecipe.newdata2.description)
            setTime(element.downloadedRecipe.newdata2.time)
    }}, [element]); 

    return (
        <div>
        <div>{title}</div>
        <div>{descrition}</div>
        <button>Add to favorite recipes</button>
        <div>{time}</div>
        </div>
    )
}

export default RecipeHero