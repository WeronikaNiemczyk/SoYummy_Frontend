// src\components\MainPage\ChooseYourBreakfast.jsx
import { useNavigate } from "react-router-dom";
import symbolDefs from "../../images/symbol-defs.svg";
import "../../styles/MainPage.css";
import mainPlate from "../../images/mainPlate.png";
import arrow from "../../images/mainArrow.png";

export const ChooseYourBreakfast = () => {
  const navigate = useNavigate();

  const handleSeeRecipes = () => {
    navigate("../SoYummy_FrontEnd_groupNo_1/recipes/categories/Breakfast");
  };

  return (
    <div className="MainWrapper">
      <div className="MainImage">
        <img src={mainPlate} alt="Plate full of vegetables" />
      </div>
      <div className="MainContainerChooseBreakfast">
        <p className="MainChooseBreakfastText">
          <span className="MainGreenFont">Delicious and healthy</span> way to
          enjoy a variety of fresh ingredients in one satisfying meal
        </p>
        <button className="MainButtonSeeRecipes" onClick={handleSeeRecipes}>
          See recipes
          <svg className="MainIcon">
            <use xlinkHref={`${symbolDefs}#icon-arrow-go`} />
          </svg>
        </button>
        <img src={arrow} alt="Arrow to plate with food" className="MainArrow" />
      </div>
    </div>
  );
};
