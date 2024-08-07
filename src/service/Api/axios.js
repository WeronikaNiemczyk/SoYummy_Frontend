import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://deploy-marek-b05855e6af89.herokuapp.com/",
});
