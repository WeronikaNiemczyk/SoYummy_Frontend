// src/pages/Search.jsx

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ingredientsApi, recipesApi } from "../API/api";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import SearchedRecipesList from "../components/SearchedRecipesList";
import Stack from "@mui/material/Stack";
import CustomPagination from "../components/Pagination";
import css from "../styles/Search.module.css";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [recipes, setRecipes] = useState([]);
  const [searchType, setSearchType] = useState(
    searchParams.get("type") || "query"
  );
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setRecipesPerPage(12); // Desktop
      } else if (width >= 768) {
        setRecipesPerPage(8); // Tablet
      } else {
        setRecipesPerPage(6); // Mobile
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const keyword = searchParams.get("keyword");
    if (keyword) {
      setLoading(true);
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
    setSearchParams({ keyword, type: searchType, page: 1 });
    setCurrentPage(1);
  };

  const handleSearchTypeChange = (type) => {
    setSearchType(type);
    const keyword = searchParams.get("keyword");
    if (keyword) {
      setSearchParams({ keyword, type, page: 1 });
      setCurrentPage(1);
    }
  };
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const currentRecipes = recipes.slice(
    indexOfLastRecipe - recipesPerPage,
    indexOfLastRecipe
  );
  const totalPages = Math.ceil(recipes.length / recipesPerPage);
  return (
    <div className={css.searchContainer}>
      <h1 className={css.searchTitle}>Search</h1>
      <SearchBar
        searchType={searchType}
        onSearchTypeChange={handleSearchTypeChange}
        onSubmit={handleSearch}
      />
      {loading ? <Loader /> : <SearchedRecipesList recipes={currentRecipes} />}
      {totalPages > 1 && (
        <Stack spacing={2} alignItems="center">
          <CustomPagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            shape="rounded"
            showFirstButton
            showLastButton
          />
        </Stack>
      )}
    </div>
  );
};

export default Search;
