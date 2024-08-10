// src/components/SearchTypeSelector.jsx

import React from "react";
import css from "../styles/Search.module.css";

const SearchTypeSelector = ({ searchType, onSearchTypeChange }) => {
  return (
    <div className={css.searchSelector}>
      <label className={css.searchLabel} htmlFor="searchType">
        Search by:
      </label>
      <select className={css.select}
        id="searchType"
        value={searchType}
        onChange={(e) => onSearchTypeChange(e.target.value)}
      >
        <option value="query">Title</option>
        <option value="ingredient">Ingredient</option>
      </select>
    </div>
  );
};

export default SearchTypeSelector;
