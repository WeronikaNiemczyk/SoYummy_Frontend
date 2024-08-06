// src/pages/Categories.jsx

import { CategoryList } from "components/CategoryList.jsx";
import css from "../styles/Categories.module.css";

const Categories = () => {
  return (
    <div className={css.categoriesContainer}>
      <h1>Categories</h1>
      <CategoryList />
    </div>
  );
};

export default Categories;
