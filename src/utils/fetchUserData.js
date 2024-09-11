//src\utils\fetchUserData.js
import Cookies from "../features/cookies";

export const fetchUserData = async () => {
  const token = Cookies.readCookie();
  if (!token) {
    throw new Error("No token found in cookies");
  }

  const response = await fetch(
    "https://soyummy-526e125f64e8.herokuapp.com/api/v1/users/current",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }

  return response.json();
};
