// src/components/MainPageTitle/MainPageTitle.jsx

// import React from "react";
import PropTypes from "prop-types";
import style from "../../styles/Container.style.module.css";

const MainPageTitle = ({ title }) => {
  return <h1 className={style.categoriesTilte}>{title}</h1>;
};

MainPageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainPageTitle;
