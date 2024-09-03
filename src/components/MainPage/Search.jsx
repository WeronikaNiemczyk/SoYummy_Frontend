// src\components\MainPage\Search.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/MainPage.css";

export const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query) {
      navigate(`/SoYummy_Frontend/search?keyword=${query}&type=query&page=1`);
    } else {
      alert("Please enter a search term.");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="MainSearchContainer">
      <input
        type="text"
        value={query}
        name="keyword"
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter the text"
      />
      <button type="button" className="MainSearchButton" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};
