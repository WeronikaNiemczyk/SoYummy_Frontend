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
        "https://soyummy-526e125f64e8.herokuapp.com/recipes/main-page"
      );
      const data = response.data;
      console.log(data);
      setCategories(data);
    };

    fetchCategories();
  }, []);

  const handleSeeAll = (categoryName) => {
    navigate(`/SoYummy_Frontend/categories/${categoryName}`);
  };

  const handleOtherCategories = () => {
    navigate("/SoYummy_Frontend/categories/:category");
  };

  const handleRecipeClick = (recipeID) => {
    console.log(recipeID);
    navigate(`/SoYummy_Frontend/recipe/${recipeID}`);
  };

  const orderedCategories = [
    "Breakfast",
    "Miscellaneous",
    "Chicken",
    "Dessert",
  ];
  const sortedCategories = categories
    .filter((category) => orderedCategories.includes(category.category))
    .sort(
      (a, b) =>
        orderedCategories.indexOf(a.category) -
        orderedCategories.indexOf(b.category)
    );

  return (
    <div className="MainContainerRecipes">
      {sortedCategories.map((category) => (
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
