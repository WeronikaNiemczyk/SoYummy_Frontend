// src\components\MainPage\PreviewCategories.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/MainPage.css";

export const PreviewCategories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get(
        "https://deploy-marek-b05855e6af89.herokuapp.com/recipes/main-page"
      );
      const data = response.data;
      console.log(data);
      setCategories(data);
    };

    fetchCategories();
  }, []);

  const handleSeeAll = (categoryName) => {
    navigate(`../SoYummy_FrontEnd_groupNo_1/categories/${categoryName}`);
  };

  const handleOtherCategories = () => {
    navigate("../SoYummy_FrontEnd_groupNo_1/categories");
  };

  const handleRecipeClick = (recipeId) => {
    console.log(recipeId);
    navigate(`../SoYummy_FrontEnd_groupNo_1/recipes/${recipeId}`);
  };

  return (
    <div className="MainContainerRecipes">
      {categories.map((category) => (
        <div className="MainRecipesCategory" key={category.category}>
          <h2 className="MainCategoryName">{category.category}</h2>
          <ul className="MainRecipeList">
            {category.recipes.slice(0, 4).map((recipe, index) => (
              <li
                key={recipe._id}
                className={`MainRecipeItem MainRecipeItem-${index}`}
                onClick={() => handleRecipeClick(recipe._id)}
              >
                <img src={recipe.thumb} alt={recipe.title} />
                <p>{recipe.title}</p>
              </li>
            ))}
          </ul>
          <button
            className="MainSeeAllButton"
            onClick={() => handleSeeAll(category.category)}
          >
            See all
          </button>
        </div>
      ))}
      <button className="MainOtherButton" onClick={handleOtherCategories}>
        Other categories
      </button>
    </div>
  );
};
