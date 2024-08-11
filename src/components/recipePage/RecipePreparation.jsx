import { useState, useEffect } from "react";
import css from "../../styles/RecipePreparation.module.css"

const RecpiePreparation =({element})=>{

    const [instructions, setInstructions] = useState()
    const [image, setImage] = useState()
    
    const pointerText = (element) => {
        const instruction = (element.downloadedRecipe.newdata2.instructions).split('.').filter(line => line.trim() !== '');
        return (
                <ul>
                    {instruction.map((point, index) => (
                        <li key={index}>
                            <div className={css.pointer}>{index}</div>
                            <p>{point}</p>
                        </li>
                    ))}
                </ul>
                );
    }

    useEffect(() => {
        if (element.downloadedRecipe) {
            const instruction = pointerText(element)
            setInstructions(instruction)
            setImage(element.downloadedRecipe.newdata2.preview)
    }}, [element]); 
    return (
        <div className={css.mainDivRecipe}>
        <div>
                <h3>Recipe Preparation</h3>
                <ul>{instructions}</ul></div>
        <img className={css.image} src={image} alt={instructions} />
        </div>
    )
}

export default RecpiePreparation