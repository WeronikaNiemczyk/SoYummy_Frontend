// src/pages/AddRecipe.jsx

import AddRecipeForm from "../components/AddRecipes/AddRecipeForm/AddRecipeForm";
import FollowUs from "../components/AddRecipes/FollowUs/FollowUs";
import PopularRecipe from "../components/AddRecipes/PopularRecipe/PopularRecipe";
import MainPageTitle from "../components/MainPageTitle/MainPageTitle";
import css from "../styles/AddRecipes.module.css";
import style from "../styles/Container.style.module.css";

const AddRecipe = () => {
  return (
    <div className={style.categoriesContainer}>
      <MainPageTitle title="Add Recipe" />
      <AddRecipeForm />
      <div className={css.followUsAndPopular}>
        <div className={css.followUsWrapper}>
          {/* <h4 className={css.followUsTitle}>Follow Us</h4> */}
          <FollowUs />
        </div>
        <PopularRecipe />
      </div>
    </div>

    // <div className={css.addRecipePageContainer}>
    //   <MainPageTitle text="Add Recipe" />{" "}
    //   {/* Używamy komponentu MainPageTitle */}
    //   <AddRecipeForm />
    //   <PopularRecipe />
    //   <FollowUs />
    // </div>
  );
};

export default AddRecipe;
