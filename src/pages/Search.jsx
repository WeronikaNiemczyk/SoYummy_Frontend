// src/pages/Search.jsx

import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import SearchedRecipesList from "../components/SearchedRecipesList";
import { ingredientsApi, recipesApi } from "../API/api";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [recipes, setRecipes] = useState([]);
  const [searchType, setSearchType] = useState(
    searchParams.get("type") || "query"
  );

  useEffect(() => {
    const keyword = searchParams.get("keyword");
    if (keyword) {
      if (searchType === "ingredient") {
        fetchRecipesByIngredient(keyword);
      } else {
        fetchRecipes(keyword);
      }
    } else {
      setRecipes([]);
    }
  }, [searchParams, searchType]);

  const fetchRecipesByIngredient = async (ingredientName) => {
    try {
      const response = await ingredientsApi.get("/", {
        params: { name: ingredientName },
      });
      const recipes = response.data;
      setRecipes(recipes);
      console.log("Fetched recipes by ingredient:", recipes);
    } catch (error) {
      console.error("Error fetching recipes by ingredient:", error);
      setRecipes([]);
    }
  };

  const fetchRecipes = async (keyword) => {
    try {
      const response = await recipesApi.get("/search", {
        params: { keyword },
      });
      setRecipes(response.data);
      console.log("Fetched recipes:", response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setRecipes([]);
    }
  };

  const handleSearch = (keyword) => {
    setSearchParams({ keyword, type: searchType });
  };

  const handleSearchTypeChange = (type) => {
    setSearchType(type);
    const keyword = searchParams.get("keyword");
    if (keyword) {
      setSearchParams({ keyword, type });
    }
  };

  return (
    <div>
      <h1>Search</h1>
      <SearchBar
        searchType={searchType}
        onSearchTypeChange={handleSearchTypeChange}
        onSubmit={handleSearch}
      />
      <SearchedRecipesList recipes={recipes} />
    </div>
  );
};

export default Search;
