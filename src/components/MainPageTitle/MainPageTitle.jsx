// src/components/MainPageTitle/MainPageTitle.jsx

// import React from "react";
import css from "./MainPageTitle.module.css";

const MainPageTitle = ({ text }) => {
  return <h1 className={css.mainPageTitle}>{text}</h1>;
};

export default MainPageTitle;
