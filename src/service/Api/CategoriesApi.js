import { axiosInstance } from "./axios";

export const getCategoryListAPI = async () => {
  try {
    const response = await axiosInstance.get("/recipes/category-list");

    return response.data.categories;
  } catch (error) {
    console.error(
      "Error fetching categories:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
export const getAllRecipesByCategoryAPI = async (category) => {
  try {
    const encodedCategory = encodeURIComponent(category);
    const response = await axiosInstance.get(
      `/recipes/category/${encodedCategory}`
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching recipes by category:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
