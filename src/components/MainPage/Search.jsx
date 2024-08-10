// src\components\MainPage\Search.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/MainPage.css";

export const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query) {
      navigate(`../SoYummy_FrontEnd_groupNo_1/search?query=${query}`);
    } else {
      alert("Please enter a search term.");
    }
  };

  return (
    <div className="MainSearchContainer">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter the text"
      />
      <button className="MainSearchButton" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};
