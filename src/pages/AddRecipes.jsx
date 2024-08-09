// src/pages/AddRecipes.jsx

import { useEffect, useState } from "react";
import { addOwnRecipe, getPopularRecipes } from "../API/api";
import css from "../styles/AddRecipes.module.css";

const AddRecipes = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [measurement, setMeasurement] = useState("");
  const [image, setImage] = useState(null);
  const [popularRecipes, setPopularRecipes] = useState([]);

  useEffect(() => {
    const fetchPopularRecipes = async () => {
      try {
        const response = await getPopularRecipes();
        setPopularRecipes(response.data);
      } catch (error) {
        console.error("Error fetching popular recipes:", error);
      }
    };
    fetchPopularRecipes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("measurement", measurement);
    if (image) {
      formData.append("image", image);
    }
    try {
      await addOwnRecipe(formData);
      alert("Recipe added successfully");
      setTitle("");
      setDescription("");
      setMeasurement("");
      setImage(null);
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };

  return (
    <div className={css.containerAddRecipes}>
      <form onSubmit={handleSubmit} className={css.formAddRecipes}>
        <h1>Add New Recipe</h1>
        <div className={css.inputGroupAddRecipes}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className={css.inputGroupAddRecipes}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className={css.inputGroupAddRecipes}>
          <label htmlFor="measurement">Measurement</label>
          <select
            id="measurement"
            value={measurement}
            onChange={(e) => setMeasurement(e.target.value)}
            required
          >
            <option value="">Select a measurement</option>
            <option value="grams">Grams</option>
            <option value="milliliters">Milliliters</option>
            <option value="cups">Cups</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className={css.inputGroupAddRecipes}>
          <label htmlFor="image">Upload Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button className={css.buttonAddRecipes} type="submit">
          Add
        </button>
      </form>
      <aside className={css.popularRecipesAddRecipes}>
        <h2>Popular Recipes</h2>
        <ul>
          {popularRecipes.map((recipe) => (
            <li key={recipe.id}>{recipe.title}</li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default AddRecipes;

// const AddRecipes = () => {
//   return (
//     <div>
//       <h1>AddRecipes</h1>
//       <p>mu zrób swojego page</p>
//     </div>
//   );
// };

// export default AddRecipes;
