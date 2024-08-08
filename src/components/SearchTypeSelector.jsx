// src/components/SearchTypeSelector.jsx

import React from "react";

const SearchTypeSelector = ({ searchType, onSearchTypeChange }) => {
  return (
    <div>
      <label htmlFor="searchType">Search by:</label>
      <select
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
