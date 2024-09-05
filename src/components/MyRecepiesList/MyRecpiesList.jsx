import axios from "axios";
import { useEffect, useState } from "react";
import css from "../../styles/MyRecipesList.module.css";
import { useNavigate } from "react-router-dom";
import style from "../../styles/Container.style.module.css";

const MyRecipesList = ({ recipes }) => {
  const navigate = useNavigate();
  const [markup, setMarkup] = useState([]);

  const onClick = (e) => {
    console.log(e.target);
    navigate(`../recipe/${e.target.id}`);
  };

  useEffect(() => {
    if (recipes && recipes.recipes) {
      console.log("Updated recipes:", recipes.recipes);

      const generatedMarkup = recipes.recipes.map((res) => {
        console.log(res);
        return (
          <div key={res._id} className={css.mainDiv}>
            <img className={css.img} src={res.thumb} alt={res.tag}></img>
            <div className={css.textContainer}>
              <div className={css.titleDiv}>
                <p className={css.mainDiv}>{res.title}</p>
                <button onClick={() => handleDelete(res._id)}>del</button>
              </div>
              <p>{res.description}</p>
              <div className={css.timeDiv}>
                <p>{res.time} min</p>
                <button id={res._id} onClick={onClick}>
                  seeRecipe
                </button>
              </div>
            </div>
          </div>
        );
      });

      setMarkup(generatedMarkup); // Update markup state
    }
  }, [recipes]); // Re-run the effect when recipes change

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/recipes/ownRecipes/${id}`);
      setMarkup((prevMarkup) => prevMarkup.filter((item) => item.key !== id));
    } catch (error) {
      console.error("Failed to delete recipe:", error);
    }
  };

  return (
    <div className={style.categoriesContainer}>
      <h2 className={style.categoriesTilte}>My Recipes</h2>
      <div>{markup}</div>
    </div>
  );
};

export default MyRecipesList;
