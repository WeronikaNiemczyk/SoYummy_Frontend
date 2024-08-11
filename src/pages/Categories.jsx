// src/pages/Categories.jsx

import CategoriesPage from "../components/CategoriesPage";
import css from "../styles/Categories.module.css";

const Categories = () => {
  return (
    <div className={css.categoriesContainer}>
      <h1 className={css.categoriesTexts}>Categories</h1>
      <CategoriesPage />
    </div>
  );
};

export default Categories;
