import axios from "axios";

const fetchUserData = async ({ username, location, minRepos }) => {
  let query = username || "";
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}`,
      {
        headers: import.meta.env.VITE_APP_GITHUB_API_KEY
          ? { Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}` }
          : {},
      }
    );
    return response.data; // contains .items array
  } catch (error) {
    throw new Error("User not found");
  }
};

export default fetchUserData;
