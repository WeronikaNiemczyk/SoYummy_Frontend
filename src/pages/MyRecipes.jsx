// src/pages/MyRecipes.jsx
import {getOwnRecipes} from '../API/api'
import React from 'react';
import MainPageTitle from '../components/MainPageTitle/MainPageTitle';
import MyRecipesList from '../components/MyRecepiesList/MyRecpiesList';
import { useEffect, useState } from "react";


const MyRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getOwnRecipes()
    .then((response) => {
      console.log("moje przepisy:", response.data);
      const recipes=response.data
      setRecipes({...recipes, recipes});
    })
    .catch((error) => {
      console.error("Błąd pobierania przepisów:", error);
    });
  }, []);

  return (
    <div>
      <MyRecipesList recipes={recipes}/> 
    </div>
  );
};

export default MyRecipes;
