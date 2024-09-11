import axios from "axios";

const BASE_URL = "https://soyummy-526e125f64e8.herokuapp.com/recipes";

export const getCategoryListAPI = async () => {
  const response = await axios.get(`${BASE_URL}/category-list`);
  return response.data.categories;
};
export const getAllRecipesByCategoryAPI = async (category) => {
  const response = await axios.get(`${BASE_URL}/${category}?limit=8`);

  return response.data;
};
