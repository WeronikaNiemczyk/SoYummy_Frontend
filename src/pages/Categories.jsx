// src/pages/Categories.jsx

import CategoriesPage from "../components/CategoriesPage";

import style from "../styles/Container.style.module.css";

const Categories = () => {
  return (
    <div className={style.categoriesContainer}>
      <h1 className={style.categoriesTilte}>Categories</h1>
      <CategoriesPage />
    </div>
  );
};

export default Categories;
