// src/pages/MyRecipes.jsx

import React from 'react';
import MainPageTitle from '../components/MainPageTitle/MainPageTitle';
import MyRecipesList from '../components/MyRecepiesList/MyRecpiesList';

const MyRecipes = () => {
  return (
    <div>
      <MainPageTitle title="My Recipes" /> {/* Dodajemy tytuł strony */}
      <MyRecipesList /> {/* Dodajemy listę przepisów */}
    </div>
  );
};

export default MyRecipes;
