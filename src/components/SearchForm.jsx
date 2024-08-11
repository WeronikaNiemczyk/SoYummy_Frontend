// src/components/SearchForm.jsx

import React, { useState } from "react";
import PropTypes from "prop-types";
import css from "../styles/Search.module.css";
import { useEffect } from "react";

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getQueryParam = (param) => {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    };

    const keywordParam = getQueryParam("keyword");
    if (keywordParam) {
      setQuery(keywordParam);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    setQuery("");
  };
  
  return (
    <form
      action="/search"
      method="GET"
      className={css.searchForm}
      onSubmit={handleSubmit}
    >
      <input
        className={css.searchInput}
        type="text"
        id="search-input"
        name="keyword"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <button className={css.searchButton} type="submit">
        Search
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
