// src/components/AddRecipes/AddRecipeForm/AddRecipeForm.jsx

import { useState } from "react";
import css from "./AddRecipeForm.module.css";

const AddRecipeForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [measurement, setMeasurement] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("measurement", measurement);
    if (image) {
      formData.append("image", image);
    }

    onSubmit(formData);

    setTitle("");
    setDescription("");
    setMeasurement("");
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit} className={css.formAddRecipeForm}>
      <div className={css.inputGroupAddRecipeForm}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className={css.inputGroupAddRecipeForm}>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className={css.inputGroupAddRecipeForm}>
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
      <div className={css.inputGroupAddRecipeForm}>
        <label htmlFor="image">Upload Image</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <button className={css.buttonAddRecipeForm} type="submit">
        Add
      </button>
    </form>
  );
};

export default AddRecipeForm;
