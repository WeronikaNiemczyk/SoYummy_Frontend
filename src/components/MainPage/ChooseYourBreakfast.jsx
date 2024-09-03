// src\components\MainPage\ChooseYourBreakfast.jsx
import { useNavigate } from "react-router-dom";
import arrow from "../../images/mainArrow.png";
import mainPlate from "../../images/mainPlate.png";
import symbolDefs from "../../images/symbol-defs.svg";
import "../../styles/MainPage.css";

export const ChooseYourBreakfast = () => {
  const navigate = useNavigate();

  const handleSeeRecipes = () => {
    navigate("/SoYummy_Frontend/categories/Breakfast");
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
