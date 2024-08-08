// src/components/SearchedRecipesList.jsx

const SearchedRecipesList = ({ recipes }) => {
  return (
    <div>
      {recipes.length === 0 ? (
        <p>No recipes found. Please try searching for something else.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe._id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchedRecipesList;
