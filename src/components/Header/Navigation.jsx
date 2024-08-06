// src\components\Header\Navigation.jsx

import { NavLink } from "react-router-dom";
import symbolDefs from "../../images/symbol-defs.svg";
import "../../styles/Header.css";

export const Navigation = () => {
  return (
    <nav className="HeaderNav">
      <NavLink
        className="HeaderStyledLink"
        to="../SoYummy_FrontEnd_groupNo_1/categories/:categoryName"
      >
        {/* <NavLink className="HeaderStyledLink" to="/categories/:categoryName"> */}
        Categories
      </NavLink>
      <NavLink
        className="HeaderStyledLink"
        to="../SoYummy_FrontEnd_groupNo_1/add"
      >
        {/* <NavLink className="HeaderStyledLink" to="/add"> */}
        Add Recipes
      </NavLink>
      <NavLink
        className="HeaderStyledLink"
        to="../SoYummy_FrontEnd_groupNo_1/my"
      >
        {/* <NavLink className="HeaderStyledLink" to="/my"> */}
        My Recipes
      </NavLink>
      <NavLink
        className="HeaderStyledLink"
        to="../SoYummy_FrontEnd_groupNo_1/favorite"
      >
        {/* <NavLink className="HeaderStyledLink" to="/favorite"> */}
        Favorites
      </NavLink>
      <NavLink
        className="HeaderStyledLink"
        to="../SoYummy_FrontEnd_groupNo_1/shopping-list"
      >
        {/* <NavLink className="HeaderStyledLink" to="/shopping-list"> */}
        Shopping List
      </NavLink>
      <NavLink className="HeaderStyledLink" to="../SoYummy_FrontEnd_groupNo_1/search">
        <svg className="HeaderIconSearch">
          <use xlinkHref={`${symbolDefs}#icon-search`} />
        </svg>
        <span className="HeaderSearchText">Search</span>
      </NavLink>
    </nav>
  );
};
