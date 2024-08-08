// src/pages/Search.jsx

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ingredientsApi, recipesApi } from "../API/api";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import SearchedRecipesList from "../components/SearchedRecipesList";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [recipes, setRecipes] = useState([]);
  const [searchType, setSearchType] = useState(
    searchParams.get("type") || "query"
  );
  const [loading, setLoading] = useState(false);

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
    } finally {
      setLoading(false);
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
    } finally {
      setLoading(false);
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
      {loading ? <Loader /> : <SearchedRecipesList recipes={recipes} />}
    </div>
  );
};

export default Search;
