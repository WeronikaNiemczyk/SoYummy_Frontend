import { useState, useEffect } from "react";

const RecpiePreparation =({element})=>{

    const [instructions, setInstructions] = useState()
    const [image, setImage]=useState()

    useEffect(() => {
        if (element.downloadedRecipe) {
            console.log(element.downloadedRecipe.newdata2)
            setInstructions(element.downloadedRecipe.newdata2.instructions)
            setImage(element.downloadedRecipe.newdata2.preview)
    }}, [element]); 
    return(
        <div>
        <div>{instructions}</div>
        <img src={image} alt={instructions} />;
        </div>
    )
}

export default RecpiePreparation