import axios from "axios";

// Function to fetch GitHub user data
const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers: import.meta.env.VITE_APP_GITHUB_API_KEY
        ? { Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}` }
        : {},
    });
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};

export default fetchUserData;
