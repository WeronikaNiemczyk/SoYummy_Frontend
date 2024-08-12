// src/components/MainPageTitle/MainPageTitle.jsx

// import React from "react";
import css from "./MainPageTitle.module.css";
import PropTypes from "prop-types";

const MainPageTitle = ({ title }) => {
  return <h1 className={css.mainPageTitle}>{title}</h1>;
};

MainPageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainPageTitle;
