// src/components/SearchBar.jsx
import React from "react";
import PropTypes from "prop-types";
import SearchForm from "./SearchForm";
import SearchTypeSelector from "./SearchTypeSelector";

const SearchBar = ({ searchType, onSearchTypeChange, onSubmit }) => {
  return (
    <div>
      <SearchForm onSubmit={onSubmit} />
      <SearchTypeSelector
        searchType={searchType}
        onSearchTypeChange={onSearchTypeChange}
      />
    </div>
  );
};

SearchBar.propTypes = {
  searchType: PropTypes.string.isRequired,
  onSearchTypeChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
