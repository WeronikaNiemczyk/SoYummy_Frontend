// src\components\Header\Navigation.jsx

import { NavLink } from "react-router-dom";
import symbolDefs from "../../images/symbol-defs.svg";
import "../../styles/Header.css";

export const Navigation = () => {
  return (
    <nav className="HeaderNav">
      <NavLink
        className="HeaderStyledLink"
        to="../SoYummy_Frontend/categories/:category"
      >
        {/* <NavLink className="HeaderStyledLink" to="/categories/:category"> */}
        Categories
      </NavLink>
      <NavLink className="HeaderStyledLink" to="../SoYummy_Frontend/add">
        {/* <NavLink className="HeaderStyledLink" to="/add"> */}
        Add Recipes
      </NavLink>
      <NavLink className="HeaderStyledLink" to="../SoYummy_Frontend/my">
        {/* <NavLink className="HeaderStyledLink" to="/my"> */}
        My Recipes
      </NavLink>
      <NavLink className="HeaderStyledLink" to="../SoYummy_Frontend/favorite">
        {/* <NavLink className="HeaderStyledLink" to="/favorite"> */}
        Favorites
      </NavLink>
      <NavLink
        className="HeaderStyledLink"
        to="../SoYummy_Frontend/shopping-list"
      >
        {/* <NavLink className="HeaderStyledLink" to="/shopping-list"> */}
        Shopping List
      </NavLink>
      <NavLink className="HeaderStyledLink" to="../SoYummy_Frontend/search">
        <svg className="HeaderIconSearch">
          <use xlinkHref={`${symbolDefs}#icon-search`} />
        </svg>
        <span className="HeaderSearchText">Search</span>
      </NavLink>
    </nav>
  );
};
