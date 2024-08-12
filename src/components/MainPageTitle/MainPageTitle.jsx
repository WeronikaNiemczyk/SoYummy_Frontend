// src/components/MainPageTitle/MainPageTitle.jsx

// import React from "react";
import css from "./MainPageTitle.module.css";

const MainPageTitle = ({ title}) => {
  return <h1 className={css.mainPageTitle}>{title}</h1>;
};

export default MainPageTitle;
