// src/pages/Categories.jsx

import { CategoryPage } from "components/CategoryPage.jsx";
import css from "../styles/Categories.module.css";

const Categories = () => {
  return (
    <div className={css.categoriesContainer}>
      <h1 className={css.categoriesText}>Categories</h1>
      <CategoryPage />
    </div>
  );
};

export default Categories;
