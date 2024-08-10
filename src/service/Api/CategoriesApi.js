import axios from "axios";

const BASE_URL = "https://deploy-marek-b05855e6af89.herokuapp.com/recipes";

export const getCategoryListAPI = async () => {
  const response = await axios.get(`${BASE_URL}/category-list`);
  return response.data.categories;
};
export const getAllRecipesByCategoryAPI = async (category) => {
  const response = await axios.get(`${BASE_URL}/${category}?limit=8`);

  return response.data;
};
